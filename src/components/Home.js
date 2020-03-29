import React from 'react';

function Home() {
    return (
        <div>
            <div className="top">
                <div className="name">
                    <h1>{"<"} Maggie J. Price {"/ >"}</h1>
                    <h3>Full Stack Web Developer/Software Engineer</h3>
                </div>
                <img className="header-img" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2704&q=80" alt="laptop on table"/>
            </div>
            <div className="about">
                {/* <img > */}
                <div className="about-paragraph">
                    <h3>About Me</h3>
                    <p>I am a creative. Realizing this allowed me to find my passion in web development. I lovbe creating and I love problem solving. So, web development is very fullfilling for me. I am also pursuing a bachelor's of business economics degree.  </p>
                    <h3>My Personal Mission...</h3>
                    <p>My personal mission is to disrupt the current tech space with innovative technologies. I intend to learn and grow consistently to accomplish this.</p>
                    {/* <a>LinkedIn</a> */}
                </div>
            <div className="hobbies">
                <h3>I Love....</h3>
                <ul>
                    <li>Decorating</li>
                    <li>Singing</li>
                    <li>Playing Piano</li>
                    <li>Listening to Podcasts, Youtube Videos, and Certain Talk Shows to Learn</li>
                    <li>Streaming TV</li>
                    <li>Listening to Music</li>
                    <li>Helping Others</li>
                    <li>Crafting</li>
                </ul>
            </div>
        </div>
    </div>
    );
  
}

export default Home;