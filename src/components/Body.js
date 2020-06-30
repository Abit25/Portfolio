import React, { useRef, useEffect } from "react";
import "./Body.css";
import ProjectTileLeft from "./ProjectTileLeft";
import ProjectTileRight from "./ProjectTileRight";

function Body(props) {
  return (
    <div className="outer">
      <ProjectTileLeft />
      <ProjectTileRight />
      <ProjectTileLeft />
      <ProjectTileRight />
    </div>
  );
}

export default Body;
