import React, { useRef, useEffect } from "react";
import { TweenLite, Power3, Bounce } from "gsap";
import "./introText.css";
import fb from "../images/fb.png";
import git from "../images/git.svg";
import link from "../images/link.png";
import { Col, Row } from "react-bootstrap";

function Intro() {
  let text = useRef(null);

  useEffect(() => {
    TweenLite.from(text, 1.5, {
      opacity: 0,
      y: 200,
      ease: Bounce.easeOut(),
    });
  }, []);

  return (
    <div
      style={{
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        flexDirection: "column",
      }}
    >
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Col>
          <div
            className="introText"
            ref={(el) => {
              text = el;
            }}
          >
            Hey there! I'm Abheet and I'm a Web Developer and a Machine Learning
            Enthusiast.
          </div>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "4vh",
        }}
      >
        <Col>
          <img className="icon" src={fb}></img>
        </Col>
        <Col>
          <img className="icon" src={git}></img>
        </Col>
        <Col>
          <img className="icon" src={link}></img>
        </Col>
        {/* <Col>
          <img className="icon" src={fb}></img>
        </Col> */}
      </Row>
    </div>
  );
}

export default Intro;
