import React, { useRef, useEffect } from "react";
import "./Body.css";
import ProjectTileLeft from "./ProjectTileLeft";
import ProjectTileRight from "./ProjectTileRight";

function Body(props) {
  return (
    <div style={{ overflowX: "hidden" }} className="outer">
      <h2 className="heading">Projects</h2>
      <ProjectTileLeft />
      <ProjectTileRight />
      <ProjectTileLeft />
      <ProjectTileRight />
    </div>
  );
}

export default Body;
