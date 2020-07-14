import React from "react";
// import rsuite/dist/styles/rsuite-default.css;
// import { Button } from 'rsuite';

const Projects = () => {
  return (
    <div>
      <h1>Projects Portfolio</h1>
      <div className="Web Projects">
        <h2>Web Projects</h2>
        <div className="ui-projects">
          <h3>HTML/CSS</h3>
          {/* 1st build week project */}
        </div>
        <div className="javascript-projects">
          <h3>Javascript</h3>
        </div>
        <div className="react-projects">
          <h3>React</h3>
        </div>
        {/* <div classname="redux-projects">
          <h3>Redux</h3>
        </div> */}
      </div>
      <div className="Design Projects">
        <h2> Design Projects</h2>
      </div>
      <div className="python-skills">
        <h3>Honorable Mention Python Github Repos:</h3>
        <ul>
          <li>
            <a>
              https://github.com/maggieprice/Sprint-Challenge--Intro-Python/tree/maggieprice
            </a>
            {/* This is a placeholder link, change this later */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
