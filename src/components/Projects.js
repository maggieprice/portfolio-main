import React from "react";
import ProjectsAPI from './ProjectsAPI';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardHeader,
  CardFooter
} from "shards-react";

const Projects = () => {
  return (
    <div className="page">
      <h1>Projects Portfolio</h1>
      <div className="projects-div">
        {ProjectsAPI.map(project =>{
          return (
            <div className="projects-container">
              <div className="projects-card" key={project.id} >
            <Card className="card2">
              <CardTitle>{project.Name}</CardTitle>
              <CardImg className="project-card-img" src={project.Thumbnail}/>
              <a href={project.Link}>
                <img className="contact-logos" src="
                https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_47-256.png" alt="WWW Logo that Links to project"/>
              </a>
              <a href={project.Repo}>
                <img className="contact-logos" src="https://cdn1.iconfinder.com/data/icons/free-social-media-14/32/github_social_media_connect-256.png" alt="Github Logo that Links to my repo"/>
              </a>
              <CardFooter>
                <CardImg src={project.Symbols}/>
              </CardFooter>
            </Card>
            </div>
            </div>
          )
        })}
   
      </div>
    </div>
  );
};

export default Projects;
