import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

export default function HipHopSongs() {
  const [hipHop, setHipHop] = useState([]);

  useEffect(() => {
    axios
      .get("https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop")
      .then((response) => {
        setHipHop(response.data.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    {hipHop.map((song) => (
        <Col className="col text-center" id={song.id}>
        <Link to={`/album/${song.album.id}`}>
          <img className="img-fluid" src={song.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to={`/album/${song.album.id}`}>Album: "{
                  song.album.title.length < 16
                    ? `${song.album.title}`
                    : `${song.album.title.substring(0, 16)}...`
                }"<br /></Link>
          <Link to={`/artist/${song.artist.id}`}>Artist: {song.artist.name}</Link>
        </p>
      </Col>
    ))}
      
    </>
  );
}
