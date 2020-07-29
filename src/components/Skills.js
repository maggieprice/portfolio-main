import React from "react";
import {SkillsAPI} from './SkillsAPI';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardHeader,
  CardFooter,
  Alert 
  // Modal, 
  // ModalBody, 
  // ModalHeader 
} from "shards-react";

const Skills = () => {
  return (
    <div className="page">
      <div>
        <h3 className="skills-categories">Web Development Skills, Tech Stack, and More...</h3>
          <Alert className="alert"><h4>Honorable Mention: Design</h4>
            <p> PhotoShop | InDesign | Invitations | Flyers | Advertisements | Basic Logos</p> </Alert> 
          <Alert className="alert"> <h4>Honorable Mention: Office Skills</h4>
            <p> Banking/Bookkeeping | Correspondence, Dictation, Scheduling | Accounts Payable/Receiveable | Compliance, Records | Quicken/Quickbooks</p>
                 </Alert>
        <div className='skills-categories'>
 								{SkillsAPI.map(cat => {
                   return (
                    <div className="skills-container">
                    <div className="skills-card" key={cat.id}>
                    <Card className="card1"> 
                      <CardHeader className="card-title">{cat.type}</CardHeader>
                      <CardTitle>{cat.list[0].name}</CardTitle>
                      <CardImg className="card-img" src={cat.list[0].image}/>
                      <CardBody className="card-body">{cat.list[0].level}</CardBody>
                      <CardFooter>{cat.category}</CardFooter>
                   </Card> 
                 </div>
                   <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[1].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[1].image}/>
                       <CardBody className="card-body">{cat.list[1].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                  <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[2].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[2].image}/>
                       <CardBody className="card-body">{cat.list[2].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                  <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[3].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[3].image}/>
                       <CardBody className="card-body">{cat.list[3].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                  <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[4].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[4].image}/>
                       <CardBody className="card-body">{cat.list[4].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                  <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[5].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[5].image}/>
                       <CardBody className="card-body">{cat.list[5].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                  <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[6].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[6].image}/>
                       <CardBody className="card-body">{cat.list[6].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                  <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[7].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[7].image}/>
                       <CardBody className="card-body">{cat.list[7].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                  <div className="skills-card" key={cat.id}>
                     <Card className="card1"> 
                       <CardHeader className="card-title">{cat.type}</CardHeader>
                       <CardTitle>{cat.list[8].name}</CardTitle>
                       <CardImg className="card-img" src={cat.list[8].image}/>
                       <CardBody className="card-body">{cat.list[8].level}</CardBody>
                       <CardFooter>{cat.category}</CardFooter>
                    </Card> 
                  </div>
                 </div>
								)})}
                
              </div>
      </div>
      
    </div>
  );
};
export default Skills;