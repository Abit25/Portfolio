import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-particles-js";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Home />
      <Particles
        style={{
          position: "absolute",
          zIndex: "-1",
          top: 0,
          left: 0,
        }}
        height="300vh"
        width="100%"
        params={{
          background: { color: { value: "#000000" } },
          particles: {
            color: {
              value: "#FFFFFF",
            },
            line_linked: {
              color: {
                value: "#66FCF1",
              },
            },
            number: {
              value: 400,
            },
            size: {
              value: 2,
            },
          },
        }}
      />
    </div>
  );
}

export default App;
