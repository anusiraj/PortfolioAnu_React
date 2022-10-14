import React from 'react';
import { Button} from "reactstrap";
import { Link } from 'react-scroll';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container" style={{marginBottom: 50, marginTop:50}}>
            <div className="row justify-content-center">     
                <p>Thank you for visiting my portfolio!</p>   
            </div>
            <div className="row justify-content-center">             
                {/* <div className="col-auto"> */}
                <Link activeClass="active" smooth spy to="header">
                    <Button className = "button" type="submit" style = {{marginRight: '20px'}}>
                         To the top
                     </Button>
                    </Link>   
                {/* </div> */}
            </div>
            <div className="row justify-content-center" style={{marginTop:'20px'}}> 
            {/* <div className="col-auto"> */}
            <a style = {{marginRight: '20px'}} className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/anu-k-siraj-61452a108/"><i className="fa fa-linkedin" ></i></a>
            <a style = {{marginRight: '20px'}} className="btn btn-social-icon btn-github" href="https://github.com/anusiraj?tab=repositories"><i className="fa fa-github"></i></a>
            <a  href="mailto:anu.jencir@gmail.com" style = {{marginRight: '20px'}} className="btn btn-social-icon btn-google" ><i className="fa fa-envelope" ></i></a>
            <a href="tel:+358 413651884" style = {{marginRight: '20px'}} className="btn btn-social-icon btn-microsoft" ><i className="fa fa-phone" ></i></a>

            {/* </div> */}
                
            </div>
        </div>
    </div>
    )
}

export default Footer;