import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Main.css";
import RockSongs from "../RockSongs";
import PopSongs from "../PopSongs";
import HipHopSongs from "../HipHopSongs";



export default function Main() {
  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSelection"
            ><RockSongs /></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSelection"
            ><PopSongs /></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10 mb-5 py-5">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSelection"
            ><HipHopSongs /></Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
