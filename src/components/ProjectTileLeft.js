import React from "react";
import "./projecttile.css";

function ProjectTile(props) {
  return (
    <div className="project-outer">
      <div data-aos="fade-right" className="col-left">
        <div className="text-container">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </div>
      {/* <div data-aos="fade-left" className="col-right"></div> */}
    </div>
  );
}

export default ProjectTile;
