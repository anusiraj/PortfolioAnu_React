import React from 'react';
import { Jumbotron, Button} from "reactstrap";
import { Link } from 'react-scroll';


const JumbotronPart = () => {
    return(
        <Jumbotron>
        <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                 <div className='herocontent'>
                 <h1>Hey, I am Anu Siraj</h1>
                    <p>I am a passionate Software Developer.<br />I love exploring and creating new things that live on Internet.</p>
                    <Link activeClass="active" smooth spy to="projects">
                    <Button className = "btn btn-danger" type="submit" style = {{marginRight: '20px'}}>
                         View my projects
                     </Button>
                    </Link>
                    <Link activeClass="active" smooth spy to="contact">
                    <Button className = "btn btn-danger" type="submit">
                         Hire Me!
                     </Button>
                    </Link>
                     
                 </div>
                </div>
                <div className="col-12 col-sm-6">
                <img className='heroimage' src="/assets/anu5.jpeg" alt="Anu" style = {{paddingRight:'100px'}}/>
                </div>
            </div>
        </div>
    </Jumbotron>
    )    
}
      
export default JumbotronPart;