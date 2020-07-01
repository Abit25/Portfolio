import React, { useRef, useEffect } from "react";
import profile from "../../public/dark-back.jpg";
import { TweenLite, Power3 } from "gsap";
import "./pic.css";

function Pic() {
  let image = useRef(null);
  //   let pic = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      TweenLite.fromTo(
        image,
        2,
        {
          ease: Power3.easeIn(),
          css: { height: "0%" },
        },
        { css: { opacity: 1, x: 0, height: "100%" } }
      );
    }, 500);
  }, []);
  return (
    <div
      style={{
        height: "90%",
        width: "90%",
      }}
    >
      <img
        className="pic"
        ref={(el) => {
          image = el;
        }}
        src={profile}
      />
    </div>
  );
}

export default Pic;
