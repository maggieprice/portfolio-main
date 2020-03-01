import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"maggiejprice.com/contact", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="col-sm-4 offset-sm-4">

            <h1>We Should Hang Out...</h1>
                <div className="social-media-links">
                    LinkedIn, Twitter, Github, 
                </div>      
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 



// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <form action="/contact" id="contact-form" method="post">
//                 <fieldset>
//                     <label for="name">Name</label>
//                     <input 
//                     id="name" 
//                     name="name" 
//                     type="text" 
//                     placeholder="Your name" 
//                     required/>

//                     <label for="email">Email </label>
//                     <input 
//                     id="email" 
//                     name="email" 
//                     type="text" 
//                     placeholder="Your email" 
//                     required/>

//                     <label for="message">Message</label>
//                     <textarea 
//                     id="message" 
//                     name="message" 
//                     placeholder="Enter your message here" 
//                     rows="3" 
//                     required
//                     />

//                     <button type="submit">Submit</button>
//                 </fieldset>
//                 </form>
//         </div>
//     )
// }

// export default Contact


//                 <div className="contact-box">
//                     <form>
//                         <input name="name" type="text"  placeholder="Your Name" required/>
//                         <input name="email" type="email"  placeholder="Your Email" required/>
//                         <input name="message"  placeholder="Your Message" required/>
//                         <button type="submit">Send</button>
//                     </form>
//                 </div> */}