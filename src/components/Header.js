import React from "react";
import MyNavbar from "./Navbar";
import Pic from "./Pic";
import Intro from "./Intro";
import { Col, Row } from "react-bootstrap";

function Header() {
  return (
    <div style={headerStyle}>
      <MyNavbar />
      <div
        style={{
          //   border: "1px solid white",
          top: "50%",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%,-50%)",
          height: "70%",
          width: "90%",
        }}
      >
        <Row style={{ height: "100%" }}>
          <Col xs={12} md={5} style={columnStyle} sm>
            <Pic />
          </Col>
          <Col xs={12} md={7} style={columnStyle} sm>
            <Intro />
          </Col>
        </Row>
      </div>
    </div>
  );
}

const headerStyle = {
  //background: "#1F1C2C" /* fallback for old browsers */,
  background: "linear-gradient(to left, #141e30, #243b55)",
  height: "100vh",
};

const columnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Header;
