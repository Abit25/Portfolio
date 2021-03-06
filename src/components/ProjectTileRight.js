import React from "react";
import "./projecttile.css";

function ProjectTile(props) {
  return (
    <div className="project-outer">
      {/* <div data-aos="fade-right" className="col-right"></div> */}
      <div data-aos="fade-left" className="col-left">
        <div className="text-container">
          <h2 className={"proj-title"}>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
