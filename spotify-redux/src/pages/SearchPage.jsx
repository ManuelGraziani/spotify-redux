import React, { useEffect, useState } from "react";
import "../Components/Main/Main.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function SearchPage() {
  const { name } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${name}`)
      .then((response) => {
        setSearchResults(response.data.data);
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
            <Col className="col-10">
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {searchResults.map((song) => (
                    <Col className="col text-center" id={song.id}>
                      <div onClick={() => navigate(`/album/${song.album.id}`)}>
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
                        <div
                          onClick={() => navigate(`/artist/${song.artist.id}`)}
                        >
                          Artist: {song.artist.name}
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
  );
}
