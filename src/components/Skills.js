import React from "react";
import {SkillsAPI} from "./SkillsAPI";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
} from "shards-react";

const Skills = (props) => {
  return (
    <div className="page">
      <div className="tech-skills">
        <h3>Web Development SKills and Tech Stack </h3>
        <div className='skills-categories'>
 								{SkillsAPI.map(category => {
                   return (<div className="skills-card" key={category.category}>
                     <Card className="card"> 
                       <CardTitle className="card-title">{category.type}</CardTitle>
                       <CardImg>{category.list.image}</CardImg>
                       <CardBody className="card-body">{category.list.level}</CardBody></Card> </div>
			
								)})}
							</div>
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
          <li>Pen and Paper</li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;

// <div className='page-container'>
// 			<div className='panel-centered'>
// 				<section className='skills-page'>
// 					<h2>Skills & Tech Stack</h2>
// 					<div className='skills-content'>
// 						<div className='skills-block'>
// 							<h3>Front-End</h3>
// 							<div className='skills-categories'>
// 								{skillsFrontEnd.map((category, index) => (
// 									<SkillCategory key={index} category={category} />
// 								))}
// 							</div>
// 						</div>
