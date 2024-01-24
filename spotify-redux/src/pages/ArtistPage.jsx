import React, { useEffect, useState } from "react";
import "../Components/Main/Main.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const [artistSongs, setArtistSongs] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
      .then((response) => {
        setArtist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`
      )
      .then((response) => {
        setArtistSongs(response.data.data);
      });
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-12 col-md-9 offset-md-3 mainPage">
            <Row>
              <Col className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 class="titleMain">{artist.name}</h2>
                <div id="followers">{artist.nb_fan + " followers"}</div>
                <div
                  class="d-flex justify-content-center"
                  id="button-container"
                >
                  <button
                    class="btn btn-success me-2 mainButton"
                    id="playButton"
                  >
                    PLAY
                  </button>
                  <button
                    class="btn btn-outline-light mainButton "
                    id="followButton"
                  >
                    FOLLOW
                  </button>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                <div class="mt-4 d-flex justify-content-start">
                  <h2 class="text-white font-weight-bold">Tracks</h2>
                </div>
                <div class="pt-5 mb-5">
                  <Row id="apiLoaded">
                    {artistSongs.map((song) => (
                      <Col className="col-sm-auto col-md-auto text-center mb-5 imgLinks" id={song.id}>
                        <div
                          onClick={() => navigate(`/album/${song.album.id}`)}
                        >
                          <img
                            className="img-fluid"
                            src={song.album.cover_medium}
                            alt="1"
                          />
                        </div>
                        <p>
                          <div
                            onClick={() => navigate(`/album/${song.album.id}`)}
                          >
                            Album: "
                            {song.album.title.length < 16
                              ? `${song.album.title}`
                              : `${song.album.title.substring(0, 16)}...`}
                            "<br />
                          </div>
                        </p>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
