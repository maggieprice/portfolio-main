import React, { Component } from "react";
// import axios from "axios";

function Contact() {
  return (
    <div className="page">
      <div className="contact-head">
        <h1>We Should Hang Out...</h1>
      </div>
      <div className="contact-logos">
        <a href="https://github.com/maggieprice">
          <img
            className="contact-logos"
            src="https://cdn1.iconfinder.com/data/icons/free-social-media-14/32/github_social_media_connect-256.png"
            alt="Github Logo that Links to My Profile"
          />
        </a>
        <a href="https://www.linkedin.com/in/maggieprice1/">
          <img
            className="contact-logos"
            src="https://cdn1.iconfinder.com/data/icons/social-media-free-26/32/linkedin_social_media_connect-256.png"
            alt="LinkedIn Logo that Links to My Profile"
          />
        </a>
      </div>
      <div className="col-sm-4 offset-sm-4">
        <form action="https://formspree.io/f/mjvpjakj" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input className="form-control" rows="5" name="message"></input>
          </div>
          {/* <label>
            Your email:
            <input type="text" name="_replyto" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label> */}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
{
  /* } */
}

export default Contact;
