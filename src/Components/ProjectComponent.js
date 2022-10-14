import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardHeader, Button} from 'reactstrap';

const Project = () => {
    return(
        <div className='container'>
            <section id="projects">
                <h1>Projects</h1></section>
            <p>Here are some of my latest and previous projects.<br />
                Click on the images to make them bigger</p>
            <div className='row' style={{marginBottom: 30}}>
                <div className='col-sm'>
                        <Card>
                            <CardImg width="100%" src= 'assets/cakelicious.jpeg' alt='html' />
                            <CardHeader>
                            <div className='row'>
                                <div className="col-12 col-md-5 m-1">
                                    <h5>Cakelicious</h5>
                                </div>
                                <div className="col-12 col-md-5 m-1">
                                    <Button className = "button" href = "#project" type="submit" style = {{marginRight: '10px'}}>
                                        Live
                                    </Button>
                                    <a className="btn btn-social-icon btn-github" href="https://github.com/anusiraj?tab=repositories"><i className="fa fa-github"></i></a>
                                </div>
                                    
                            </div>
                            </CardHeader>
                            <CardBody>
                                <p>An application made of Reactjs,Redux with the help of local json-server. 
                                Cakelicious is about ordering and delivering cakes(e-commerce). 
                                This is my ongoing project. Since I am using local json-server as REST API,
                                the contents will not be available in live link. It is exactly the same like screenshot.</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card style = {{paddingBottom: '50px'}}>
                            <CardImg width="100%" src= 'assets/scoreboard.png' alt='html' />
                            <CardHeader>
                            <div className='row'>
                            <div className="col-12 col-md-5 m-1">
                                    <h5>Scoreboard</h5>
                                </div>
                                <div className="col-12 col-md-5 m-1">
                                    <Button className = "button" href = "#project" type="submit" style = {{marginRight: '10px'}}>
                                        Live
                                    </Button>
                                    <a className="btn btn-social-icon btn-github" href="https://github.com/anusiraj?tab=repositories">
                                        <i className="fa fa-github"></i></a>
                                </div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p>Score Board is made of Reactjs. It is like a score board for games. 
                                    It sorts players according to their score. We can select players 
                                    name and give latest score and then the scoreboard displays according to the 
                                    highest score first with player name.</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card style = {{paddingBottom: '50px'}}>
                            
                            <CardImg width="100%" src= 'assets/duuni2021.png' alt='html' />
                            <CardHeader>
                                <div className='row'>
                                    <div className="col-12 col-md-5 m-1">
                                        <h5>Duuni2021</h5>
                                    </div>
                                </div>
                                

                            </CardHeader>
                            <CardBody>
                                <p>Duuni 2021 is a reservation website made of Wix. 
                                    I developed this for a Client. People can apply and reserve a seat for the programe 'Duuni2021'. 
                                    Since they have deleted the website after the programe, live link is not available.</p>
                            </CardBody>
                        </Card>
                </div>
                    
            </div>
            
            <p><i><b><a href="https://github.com/anusiraj?tab=repositories" style = {{color:'rgb(103, 102, 100)'}}>View my github for more</a></b></i>
            <span className = "fa fa-arrow-right fa-sm"></span></p>
        </div>
    )
}

export default Project;