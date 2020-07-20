import React from "react";

function Home() {
  return (
    <div className="page">
      <div className="top">
        <div className="name">
          <h3>Looking to hire a web developer? Meet me.</h3>
          <h1>
            {"<"} Maggie J. Price {"/ >"}
          </h1>
          <h3>Full Stack Web Developer/Software Engineer</h3>
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
          <p>
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
            <ul>
              <li>Decorating</li>
              <li>Singing</li>
              <li>Playing Piano</li>
              <li>
                Listening to Podcasts, Youtube Videos, and Certain Talk Shows to
                Learn
              </li>
              <li>Streaming TV</li>
              <li>Listening to Music</li>
              <li>Helping Others</li>
              <li>Crafting</li>
            </ul>
          </div>
          <h3>What is my personal mission?</h3>
          <p>
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
