import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./navbar.css";

function MyNavbar() {
  return (
    <div>
      <Container style={{ maxWidth: "100%" }}>
        <Navbar style={navStyle} expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Abheet Shaju</Navbar.Brand>
          </Container>
          <Navbar.Toggle
            style={{ position: "absolute", right: "10px", top: "10px" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" defaultActiveKey="/#home">
              <Nav.Link className="link" href="/#home" style={linkStyle}>
                Home
              </Nav.Link>
              <Nav.Link className="link" eventKey="link-1" style={linkStyle}>
                Projects
              </Nav.Link>
              <Nav.Link className="link" eventKey="link-2" style={linkStyle}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

const navStyle = {
  borderRadius: "5px",
  top: "3vh",
};

const linkStyle = {
  marginRight: "25%",
};

export default MyNavbar;
