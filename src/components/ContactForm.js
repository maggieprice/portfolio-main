// import React, {Component} from 'react';
// import axios from 'axios';


// class ContactForm extends Component{
  
//     // handleSubmit(e){
//     //     e.preventDefault();
//     //     const name = document.getElementById('name').value;
//     //     const email = document.getElementById('email').value;
//     //     const message = document.getElementById('message').value;
//     //     axios({
//     //         method: "POST", 
//     //         url:"https://portfoliomail.herokuapp.com/send", 
//     //         data: {
//     //             name: name,   
//     //             email: email,  
//     //             messsage: message
//     //         }
//     //     }).then((response)=>{
//     //         if (response.data.msg === 'success'){
//     //             alert("Message Sent."); 
//     //             this.resetForm()
//     //         }else if(response.data.msg === 'fail'){
//     //             alert("Message failed to send.")
//     //         }
//     //     })
//     // }

// const [sent, setSent] = useState(false);
// const [buttonText, setButtonText] = useState('send');
// const [email, setEmail] = useState({
//   name: '',
//   email:'',
//   message: ''
// })

// const handleChange = e => {
//   setEmail({
//     ...email,
//     [e.target.name]: e.target.value
//   })
// }

// const handleSubmit = e => {
//   e.preventDefault();
//   axios.post('https://portfoliomail.herokuapp.com/send', email)
//     .then(res=>setSent(true))
//     .catch(err=>console.log(err))
// }



//     resetForm(){
//         document.getElementById('contact-form').reset();
//     }

//     render(){
//         return(
//             <div>
//                 <h1>We Should Hang Out...</h1>
//                     <div className="social-media-links">
//                         {/* LinkedIn, Twitter, Github,  */}
//                     </div>
            
//             <div className="col-sm-4 offset-sm-4">
//                 <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//                     <div className="form-group">
//                         <label for="name">Name</label>
//                         <input type="text" className="form-control" id="name" />
//                     </div>
//                     <div className="form-group">
//                         <label for="exampleInputEmail1">Email Address</label>
//                         <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
//                     </div>
//                     <div className="form-group">
//                         <label for="message">Message</label>
//                         <textarea className="form-control" rows="5" id="message"></textarea>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//             </div>
//         )
//     }
// }

import React, {useState} from 'react';
import axios from 'axios'

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState('send');
  const [email, setEmail] = useState({
    name: '',
    email:'',
    message: ''
  })

  const handleChange = e => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    axios.post('https://portfoliomail.herokuapp.com/send', email)
      .then(res=>setSent(true))
      .catch(err=>console.log(err))
  }

  return (

    <div>
     sent===false && <form className={'form'}  onSubmit={onSubmit}>
            <div>
                <input
                required
                label="Name"
                name="name"
                value={email.name}
                onChange={handleChange}
                placeholder="Name"
                />
                <input
                required
                label="Email"
                name="email"
                value={email.email}
                onChange={handleChange}
                placholder="Email"
                />
                <input
                required
                label="Message"
                name="message"
                placeholder="Message"
                value={email.message}
                onChange={handleChange}
                />
                <button type="submit" className={'button'} onClick={()=>{setButtonText('loading...')}}>Submit</button>
            </div>
        </form>
     }
        {sent && 
        <div>
        <h1>Thanks for your message!</h1>
        </div>}`
    </div>

  );
}



