import React from "react";
import SkillsAPI from "./SkillsAPI";

const Skills = (props) => {
  return (
    <div className="skills-container">
      <div className="tech-skills">
        <h3>Javascript: {props.AsynchronousJavascript.level}</h3>
      </div>
      <div className="design-skills">
        <h3>Honorable Mention to things I enjoy creating as a designer:</h3>
        <ul>
          <li> Invitations</li>
          <li> Flyers</li>
          <li> Advertisements</li>
          <li> Basic Logos</li>
        </ul>
        <h3>Tools:</h3>
        <ul>
          <li>PhotoShop</li>
          <li>InDesign</li>
          <li>Pen & Paper</li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
