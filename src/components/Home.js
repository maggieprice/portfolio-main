import React from "react";
import "../name.css";
import TitlebarGridList from "./Grid";

function Home() {
  return (
    <div className="page">
      <section className="content">
        <div className="top">
          {/* <div> */}
          <img
            className="header-img"
            src="https://scontent.fdet1-2.fna.fbcdn.net/v/t1.0-9/28685327_1753244148073507_2308839256679262742_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=QbvIkCr5ZHIAX83BBQY&_nc_ht=scontent.fdet1-2.fna&oh=1a9aac3c4f3ed95f903e1c918a31d51e&oe=601C47C3"
            alt="Maggie Price"
          />
          <div className="top-text">
            <h3 className="coral">Looking to hire a web developer? Meet me.</h3>
            {/* <h1 className="name">{"<"} Maggie J. Price {"/>"}</h1> */}
            {/* <div class="wrapper">
            <div class="neon-wrapper"> */}
            <span class="txt">
              {"<"} Maggie J. Price {"/>"}
            </span>
            {/* <span class="gradient"></span>
            <span class="dodge"></span> */}
            {/* </div>
          </div> */}
            <h3 className="coral">Full Stack Web Developer</h3>
            {/* /Software Engineer */}
            {/* </div> */}
          </div>
        </div>
        <div className="about">
          {/* <img > */}
          <div className="about-paragraph">
            <h3>Who am I?</h3>
            <div className="left-content">
              <p className="content-left">
                Hi. I am a creative. Realizing this allowed me to find my
                passion in web development. I love creating and problem solving.
                So, web development is very fulfilling for me. I am also
                pursuing a Bachelor of Business Economics degree because... to
                be honest, I love learning. Learning is my happy place. Learning
                is my down time. This is just another reason why I love
                development! There is no shortage of learning opportunities.{" "}
              </p>
              <img
                style={{ height: "40rem", width: "auto" }}
                className="content-left"
                src="https://scontent.fdet1-2.fna.fbcdn.net/v/t1.0-9/136447292_10217471256274024_5853638216558642262_n.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=IXydrRxzOt4AX83hoJr&_nc_ht=scontent.fdet1-2.fna&oh=00f4dac9bddd0453594dcc43a5bf4f0a&oe=601A86B3"
                alt="Maggie Price feeding a baby tiger"
              />
            </div>
            <div className="hobbies">
              <h3>What do I Love?</h3>
              <div className="content-right">
                {/* <p>Traveling</p>
                <p>Decorating</p>
                <p>Singing</p>
                <p>Playing Piano</p>
                <p>Listening to Learn (Podcasts/Youtube)</p>
                <p>Streaming TV</p>
                <p>Listening to Music</p>
                <p>Helping Others</p>
                <p>Crafting</p>
                <p>Making Music</p> */}
                <TitlebarGridList />
              </div>
            </div>
            <div className="mission">
              <h3>What is My Personal Mission?</h3>{" "}
            </div>
            <p className="content-bottom">
              My personal mission is to disrupt the current tech space with
              innovative technologies. I intend to learn and grow consistently
              to accomplish this. I am really facinated by the role that
              technology plays in "changing the world" and I want to
              participate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
