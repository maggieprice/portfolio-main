import React, { Component } from "react";
import axios from "axios";
// import ajax from "ajax";

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "https://git.heroku.com/portfoliomail.git",
      data: {
        name: name,
        email: email,
        subject: subject,
        messsage: message,
      },
    })
      .then((response) => {
        if (response.data.msg === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
      })
  //   <script src="jquery.js">
  //   $.ajax({
  //     url: 'https://git.heroku.com/portfoliomail.git',
  //     type: 'POST',
  //     headers: {'Accept': 'application/json;'},
  //     data: {
  //     "name": "name",
  //     "subject": "subject",
  //     "email": "message",
  //     "message": "some body text"
  //     },
  //     }).done(function (res) {
  //       console.log(res); // it shows your email sent message.
  //     }); 
  //     // .catch((err) => console.log(err));
  //     </script>
  } 

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div>
        <div className="contact-head">
          <h1>We Should Hang Out...</h1>
        </div>
        <div className="social-media-links">
          {/* LinkedIn, Twitter, Github,  */}
        </div>

        <div className="col-sm-4 offset-sm-4">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <input className="form-control" rows="5" id="message"></input>
            </div>
            <button onSubmit={this.handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
