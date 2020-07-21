import React from "react";
import '../name.css';

function Home() {
  return (
    <div className="page">
      <div className="top">
        <div>
          <h3 className="coral">Looking to hire a web developer? Meet me.</h3>
          {/* <h1 className="name">{"<"} Maggie J. Price {"/>"}</h1> */}
          <div class="wrapper">
        <div class="neon-wrapper">
            <span class="txt" >
            {"<"} Maggie J. Price {"/>"}</span>
            <span class="gradient"></span>
            <span class="dodge"></span>
        </div>
    </div> 
          <h3 className="coral">Full Stack Web Developer/Software Engineer</h3>
        </div>
        {/* <img
          className="header-img"
          src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2704&q=80"
          alt="laptop on table"
        /> */}
      </div>
      <div className="about">
        {/* <img > */}
        <div className="about-paragraph">
          <h3>Who am I?</h3>
          <p className="content-left">
            Hi. I am a creative. Realizing this allowed me to find my passion in
            web development. I love creating and problem solving. So, web
            development is very fulfilling for me. I am also pursuing a Bachelor
            of Business Economics degree because... to be honest, I love
            learning. Learning is my happy place. Learning is my down time. This
            is just another reason why I love development! There is no shortage
            of learning opportunities.{" "}
          </p>
          <div className="hobbies">
            <h3>What do I Love?</h3>
            <ul className="content-right">
              <p>Decorating</p>
              <p>Singing</p>
              <p>Playing Piano</p>
              <p>
                listening to Learn (Podcasts/Youtube)
              </p>
              <p>Streaming TV</p>
              <p>Listening to Music</p>
              <p>Helping Others</p>
              <p>Crafting</p>
            </ul>
          </div>
          <h3>What is My Personal Mission?</h3>
          <p className="content-left">
            My personal mission is to disrupt the current tech space with
            innovative technologies. I intend to learn and grow consistently to
            accomplish this. I am really facinated by the role that technology
            plays in "changing the world" and I want to participate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
