import React, { useRef, useEffect } from "react";
import "./Body.css";
import ProjectTileLeft from "./ProjectTileLeft";
import ProjectTileRight from "./ProjectTileRight";

function Body(props) {
  return (
    <div id={"project"} style={{ overflowX: "hidden" }} className="outer">
      <h2 className="heading">Projects</h2>
      <div className="row-1">
        <ProjectTileLeft />
        <ProjectTileRight />
      </div>
      <div className="row-2">
        <ProjectTileLeft />
        <ProjectTileRight />
      </div>
    </div>
  );
}

export default Body;
