import React from "react";
import "./Player.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shuffle from "../../assets/Shuffle.png";
import previous from "../../assets/Previous.png";
import play from "../../assets/Play.png";
import next from "../../assets/Next.png";
import repeat from "../../assets/Repeat.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Player() {
  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 offset-lg-2">
          <Row>
            <Col className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <Col className="col-2">
                    <a href="#">
                    <img src={shuffle} alt="shuffle" />
                    </a>
                </Col>
                
                <Col className="col-2">
                    <a href="#">
                    <img src={previous} alt="shuffle" />
                    </a>
                </Col>
                <Col className="col-2">
                    <a href="#">
                    <img src={play} alt="shuffle" />
                    </a>
                </Col>
                <Col className="col-2">
                    <a href="#">
                    <img src={next} alt="shuffle" />
                    </a>
                </Col>
                <Col className="col-2">
                    <a href="#">
                    <img src={repeat} alt="shuffle" />
                    </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col className="col-8 col-md-6">
                <div className="progress">
                <ProgressBar now={60} />
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
