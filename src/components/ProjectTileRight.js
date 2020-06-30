import React from "react";
import "./projecttile.css";

function ProjectTile() {
  return (
    <div className="project-outer">
      <div data-aos="fade-right" className="col-right"></div>
      <div data-aos="fade-left" className="col-left">
        <div className="text-container">
          <h2>Project Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
