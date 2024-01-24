import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import "../Components/Main/Main.css";
export default function AlbumPage() {
  const [album, setAlbum] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Container fluid>
      <Row>
        <Col className="col-12 col-md-9 offset-md-3 mainPage">
          <Row>
            <Col className="col-md-3 pt-5 text-center" id="img-container">
              <img src={album.cover_big} alt={album.title} id="album-img" />
              <div class="mt-4 text-center">
                <p class="album-title">{album.title}</p>
              </div>
              <div class="text-center">
                <p class="artist-name">{album?.artist?.name}</p>
              </div>
              <div class="mt-4 text-center">
                <button id="btnPlay" class="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </Col>
            <Col className="col-md-8 pt-5">
              <Row>
                <Col className="col-md-10 mb-5" id="trackList">
                  {album?.tracks?.data.map((album) => (
                    <div class="py-3 trackHover">
                    <a
                      href="#"
                      class="card-title trackHover px-3"
                      style={{color:"white"}}
                    >
                      {album.title}
                    </a>
                    <small class="duration" style={{color:"white"}}>
                      
                      {Math.floor(
                        parseInt(album.duration) / 60 // setting the duration minutes
                      )}
                      :
                      {parseInt(album.duration) % 60 < 10
                        ? "0" + (parseInt(album.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                        : parseInt(album.duration) % 60}
                    </small>
                  </div>
                  ))}
                  
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
