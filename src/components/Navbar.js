import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import "./navbar.css";

function MyNavbar() {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Container style={{ maxWidth: "80%" }}>
        <Navbar
          style={navStyle}
          expand="sm"
          variant="dark"
          style={{ color: "white" }}
        >
          <Container>
            <Navbar.Brand href="#">
              <span className="navbar-brand">Abheet .</span>
            </Navbar.Brand>
          </Container>
          {/* <Navbar.Toggle
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
            }}
            aria-controls="basic-navbar-nav"
          /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" defaultActiveKey="/#home">
              <Nav.Link className="link-1" href="/#home" style={linkStyle}>
                Home
              </Nav.Link>
              <Nav.Link className="link-2" style={linkStyle}>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link className="link-3" style={linkStyle}>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
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
  position: "relative",
  zIndex: "5",
};

const linkStyle = {
  marginRight: "20%",
  fontWeight: "bold",
};

export default MyNavbar;
