import React from "react";
import ProjectsAPI from "./ProjectsAPI";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardHeader,
  CardFooter,
} from "shards-react";

const Projects = () => {
  return (
    <div className="page">
      <h1>Projects Portfolio</h1>
      <div className="projects-div">
        {ProjectsAPI.map((project) => {
          return (
            <div className="projects-container">
              <div className="projects-card" key={project.id}>
                <Card className="card2">
                  <CardTitle>{project.Name}</CardTitle>
                  <CardImg className="project-card-img" src={project.img} />
                  <div className="project-icons">
                    <a href={project.Link}>
                      <img
                        className="logos"
                        src="
                https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_47-256.png"
                        alt="WWW Logo that Links to project"
                      />
                    </a>
                    {/* <p> | </p> */}
                    <a href={project.Repo}>
                      <img
                        className="logos"
                        src="https://cdn1.iconfinder.com/data/icons/free-social-media-14/32/github_social_media_connect-256.png"
                        alt="Github Logo that Links to my repo"
                      />
                    </a>
                  </div>
                  <CardFooter className="card-footer">
                    <div className="footer-icons">
                      <CardImg
                        className="project-use-icons"
                        src={project.Symbols[0]}
                      />
                      <CardImg
                        className="project-use-icons"
                        src={project.Symbols[1]}
                      />
                      <CardImg
                        className="project-use-icons"
                        src={project.Symbols[2]}
                      />
                      <CardImg
                        className="project-use-icons"
                        src={project.Symbols[3]}
                      />
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
