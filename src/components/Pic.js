import React, { useRef, useEffect } from "react";
import profile from "../images/profile.jpg";
import { TweenLite, Power3 } from "gsap";
import "./pic.css";

function Pic() {
  let image = useRef(null);
  //   let pic = useRef(null);
  useEffect(() => {
    //   TweenLite.to(pic, 0, { css: { visibility: "visible" } });
    TweenLite.fromTo(
      image,
      2,
      {
        x: -100,
        ease: Power3.easeOut(),
      },
      { css: { opacity: 1, x: 0 } }
    );
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
