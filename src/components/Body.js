import React, { useRef, useEffect } from "react";
import "./Body.css";
import ProjectTile from "./ProjectTile";

function Body(props) {
  return (
    <div className="outer">
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </div>
  );
}

export default Body;
