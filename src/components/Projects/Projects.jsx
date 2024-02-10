import React from "react";
import "../Projects/projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="box">
          <img src="/airbnb.png" alt="" />
        </div>
        <div className="box">
          <img src="/insta.png" alt="" />
        </div>
        <div className="box">
          <img src="/pomodoro.png" alt="" />
        </div>
        <div className="box">
          <img src="/tic-tac-toe.png" alt="" />
        </div>
        <div className="box">
          <img src="/todo-list.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Projects;
