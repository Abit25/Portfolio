import React, { useRef, useEffect } from "react";
import "./Body.css";
import ProjectTileLeft from "./ProjectTileLeft";
import ProjectTileRight from "./ProjectTileRight";

function Body(props) {
  var title1 = "Movie Recommender System";
  var title2 = "Learning Resource Recommendation";
  var title3 = "Traker";
  var title4 = "One Life";

  var content1 =
    "The recommendation engine is based on Collaberative Filtering to find movies that user might like based on what other users watch. This model uses Item-Item similarity to find candidate movies. This project is under development right now.";
  var content2 =
    "Learning from the web might be tedious due to the vast number of resources available to learn from and might lead to wastage of time. This engine recommends resources based on the user's aptitude so that it's understandable to him and can hence catalyses his learning process. ";
  var content3 =
    "A cross platform app built using React Native to track the user’s location in real time to create tracks. A fitness app like Nike Running to track the user’s workouts. My first attempt at using React Native to build a cross-platform app.";
  var content4 =
    "A Web application built using React.js and Django to provide ambulance services to victims on the basis of severity of injury. Algorithm also took into consideration other factors like age, sex and medical history to assign the priority. The idea here is to enable pedestrians to act as a source of help when the situation dictates.";

  return (
    <div id={"project"} style={{ overflowX: "hidden" }} className="outer">
      <h2 className="heading">Projects</h2>
      <div className="row-1">
        <ProjectTileLeft title={title1} content={content1} />
        <ProjectTileRight title={title2} content={content2} />
      </div>
      <div className="row-2">
        <ProjectTileLeft title={title3} content={content3} />
        <ProjectTileRight title={title4} content={content4} />
      </div>
    </div>
  );
}

export default Body;
