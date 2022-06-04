import React from "react";
import "../name.css";
import TitlebarGridList from "./Grid";

function Home() {
  return (
    <div className="page">
      <div className="top-text">
        <h3 className="coral">Looking to hire a web developer? Meet me.</h3>
        <span class="txt">
          {"<"} Maggie J. Price {"/>"}
        </span>
        <h3 className="coral">Full Stack Web Developer</h3>
      </div>
      <div className="about">
       
        <div className="two-paragraphs">
          <div className="about-paragraph">
            <h3>Who am I?</h3>
            <p className="content-left">
              Hi. I am a creative. Realizing this allowed me to find my passion
              in web development. I love creating and problem solving. So, web
              development is very fulfilling for me. I am also pursuing a
              Bachelor of Business Economics degree because... to be honest, I
              love learning. Learning is my happy place. Learning is my down
              time. This is just another reason why I love development! There is
              no shortage of learning opportunities.{" "}
            </p>
          </div>
          <div className="two-paragraphs">
            <div className="mission">
              <h3>What is My Personal Mission?</h3>{" "}
              <p className="content-left">
                My personal mission is to disrupt the current tech space with
                innovative technologies. I intend to learn and grow consistently
                to accomplish this. I am really facinated by the role that
                technology plays in "changing the world" and I want to
                participate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hobbies">
        <h3>What do I Love?</h3>
        <TitlebarGridList />
      </div>
    </div>
  );
}

export default Home;
