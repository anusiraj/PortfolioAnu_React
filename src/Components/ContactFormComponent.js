import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const form = useRef();
  const [fullname, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');


 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i9vwfbe', 
                     'template_uvqhkaj',
     form.current, 'qcgD85I4NBzSECuCc')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Message sent successfully")
          setfullname('');
          setemail('');
          setmessage('');
       

      }, (error) => {
          console.log(error.text);
          alert("Message sent failed")
      });
  }
  return (
    <div className='container' style={{marginBottom: 70}}>
      <section id="contact">

      <h1 style={{marginBottom: 30}}>Contact Me</h1></section>
      <div className='row'>
        <div className="col-12 col-sm-6 offset-sm-1">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row ">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input className="form-control" type="text" value = {fullname} 
                    id="name" name="user_name" required onChange={event => setfullname(event.target.value)}  />
                </div>
                <div className="row">
                    <label className="form-label" htmlFor="email">  
                      Email
                    </label>
                    <input className="form-control" type="email" value = {email}
                     id="email" name="user_email" required onChange={event => setemail(event.target.value)} />
                </div>
                <div className="row">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea className="form-control" id="message" value = {message}
                     name="message" required onChange={event => setmessage(event.target.value)} />
                </div>
                <div className='row' style = {{marginTop: '10px',marginBottom: '10px'}}>
                <button className="btn btn-danger" type="submit" value="Send">Send
                  </button>
                </div>
                  
              </form>
          </div>
        <div className="col-12 col-sm-4 offset-sm-1">
        <div className='row'> 
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                        <i className = "fa fa-map-marker"  style = {{marginRight: '20px',color: 'black', fontSize: '20px'}}></i>
                        </a>Helsinki, Finland
                    </div>
                   
                    <div className='row'> 
                        <a href="mailto:anu.jencir@gmail.com"  >
                        <i className = "fa fa-envelope" style = {{marginRight: '20px',color: 'black'}}></i>
                        anu.jencir@gmail.com</a>
                    </div>

                    <div className='row'> 
                    <a href="tel:+358 413651884" style = {{marginRight: '20px'}} >
                        <i className = "fa fa-phone" style = {{marginRight: '20px',color: 'black'}}></i>
                        +358 413651884</a>
                    </div>

                    <div className='row'> 
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" >
                        <i className = "fa fa-linkedin" style = {{marginRight: '20px', color: 'black'}}></i>
                        Linkedin</a>
                    </div>

                    <div className='row' > 
                        <a href="https://github.com/anusiraj?tab=repositories" >
                        <i className = "fa fa-github" style = {{marginRight: '20px',color: 'black'}}></i>
                        Github</a>
                    </div>
      
              
        </div>
      </div>
    </div>
    


    
  )
}
export default ContactForm;