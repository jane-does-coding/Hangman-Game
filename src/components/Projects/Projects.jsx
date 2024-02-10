import React from "react";
import "../Projects/projects.css";
import { Link, useNavigate } from "react-router-dom";
import Title from "../Title";

const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <div className="projects">
        <Link
          to={"https://github.com/YevheniiaSimaka/Airbnb-Clone"}
          className="box"
        >
          <img src="/airbnb.png" alt="" />
          <span>Airbnb Clone</span>
        </Link>
        <Link
          to={"https://github.com/YevheniiaSimaka/Instagram-Clone"}
          className="box"
        >
          <img src="/insta.png" alt="" />
          <span>Instagram Clone</span>
        </Link>
        <Link
          to={"https://github.com/YevheniiaSimaka/Pomodoro-Timer"}
          className="box"
        >
          <img src="/pomodoro.png" alt="" />
          <span>Pomodoro Timer</span>
        </Link>
        <Link
          to={"https://github.com/YevheniiaSimaka/Tic-Tac-Toe"}
          className="box"
        >
          <img src="/tic-tac-toe.png" alt="" />
          <span>Tic Tac Toe Game</span>
        </Link>
        <Link
          to={"https://github.com/YevheniiaSimaka/To-Do-List"}
          className="box"
        >
          <img src="/todo-list.png" alt="" />
          <span>Todo List</span>
        </Link>
      </div>
    </>
  );
};

export default Projects;
