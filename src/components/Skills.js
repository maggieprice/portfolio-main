import React from "react";
import {SkillsAPI} from './SkillsAPI';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardHeader,
  CardFooter,
  // CardFooter,
} from "shards-react";

const Skills = () => {
  return (
    <div className="page">
      <div>
        <h3 className="skills-categories">Web Development Skills and Tech Stack </h3>
        <div className='skills-categories'>
 								{SkillsAPI.map(cat => {
                  //  var techClass = document.getElementsByName("Tech");
                  //  techClass.className += " tech"
                   return (
                   <div className="skills-card" key={cat.id}>
                     <Card className="card"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[1].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[1].image}/>
                       <CardBody className="card-body">{cat.list[1].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter></Card> </div>
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