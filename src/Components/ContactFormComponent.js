import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_i9vwfbe', 
                     'template_uvqhkaj',
     form.current, 'qcgD85I4NBzSECuCc')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Message sent successfully")
          
         

      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='container'>
      <h1>Contact Me</h1>
      <div className='row row-content'>
        <div className="col-12 col-sm-6 offset-sm-1">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row ">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input className="form-control" type="text" id="name" name="user_name" required />
                </div>
                <div className="row">
                    <label className="form-label" htmlFor="email">  
                      Email
                    </label>
                    <input className="form-control" type="email" id="email" name="user_email" required />
                </div>
                <div className="row">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea className="form-control" id="message" name="message" required />
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
                        <i className = "fa fa-map-marker" style = {{color: 'black', fontSize: '30px'}}></i>
                        </a>Helsinki, Finland
                    </div>
                   
                    <div className='row'> 
                        <a href="mailto:anu.jencir@gmail.com" >
                        <i className = "fa fa-envelope" style = {{color: 'black', fontSize: '22px'}}></i>
                        anu.jencir@gmail.com</a>
                    </div>

                    <div className='row'> 
                        <a href="tel:+358 413651884" >
                        <i className = "fa fa-phone" style = {{color: 'black', fontSize: '22px'}}></i>
                        +358 413651884</a>
                    </div>

                    <div className='row'> 
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" >
                        <i className = "fa fa-linkedin" style = {{color: 'black', fontSize: '22px'}}></i>
                        Linkedin</a>
                    </div>

                    <div className='row'> 
                        <a href="https://github.com/anusiraj?tab=repositories" class="w3-bar-item" >
                        <i className = "fa fa-github" style = {{color: 'black', fontSize: '22px'}}></i>
                        Github</a>
                    </div>
      
              
        </div>
      </div>
      
           
        
      
    </div>
    


    
  )
}
export default ContactForm;