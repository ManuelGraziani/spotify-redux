import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/Spotify_Logo.png";
export default function SideBar() {
  return (
    <>
      <Col className="col-2">
        <Navbar
          expand="md"
          className="bg-navbar fixed-left justify-content-between"
          id="sidebar"
        >
          <Container>
            <Link to={"/"} className="navbar-brand">
              <img
                src={logo}
                alt="Spotify_Logo"
                width="131"
                height="40"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex flex-column">
                <Nav.Link href="#">
                  <i class="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
                <Nav.Link href="#">
                  <i class="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
                <InputGroup className="mt-3">
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    className="mb-2"
                  />
                  <Button variant="outline-secondary" id="button-addon2" className="mb-2">
                    GO
                  </Button>
                </InputGroup>
              </Nav>
            </Navbar.Collapse>
            <div className="nav-btn">
              <Button className="signup-btn">Sign Up</Button>
              <Button className="login-btn">Login</Button>
              <a href="#">Cookie Policy</a> |
              <a href="#"> Privacy</a>
            </div>
          </Container>
        </Navbar>
      </Col>
    </>
  );
}
