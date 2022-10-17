import React from 'react';
import { Card, CardBody, CardImg, CardHeader, Button } from 'reactstrap';

const Project = () => {


    return(
        <div className='container' style={{marginBottom: 70}}>
            <section id="projects">
                <h1 style={{marginBottom: 30}}>Projects</h1></section>
            <p>Here are some of my latest and previous projects.</p>
            <div className='row' style={{marginBottom: 30, marginTop:50}}>
            <div className='col-sm'>
                        <Card >
                            
                            <CardImg width="100%" src= 'assets/duuni2021.png' alt='html' />
                            <CardHeader>
                                <div className='row'>
                                    <div className="col-12 col-md-5 m-1">
                                        <h5>Duuni2021</h5>
                                    </div>
                                </div>
                                

                            </CardHeader>
                            <CardBody>
                                <p>Duuni 2021 is a reservation website developed using Wix. 
                                    I have developed Duuni2021 website for a client when I had been in work trial. 
                                    People can register and reserve their space for the programe 'Duuni2021'. 
                                    Since they have deleted the website after the programe, live link is not available.</p>
                            </CardBody>
                        </Card>
                </div>
                <div className='col-sm'>
                        <Card>
                            <CardImg width="100%" src= 'assets/cakelicious.jpeg' alt='html' />
                            <CardHeader>
                            <div className='row'>
                                <div className="col-12 col-md-5 m-1">
                                    <h5>Cakelicious</h5>
                                </div>
                                <div className="col-12 col-md-5 m-1">
                                    <Button className = "button" href = "https://cakelicious-reactapp.netlify.app/" type="submit" style = {{marginRight: '10px'}}>
                                        Live
                                    </Button>
                                    <a className="btn btn-social-icon btn-github" href="https://github.com/anusiraj/Cakelicious_ReactApp"><i className="fa fa-github"></i></a>
                                </div>
                                    
                            </div>
                            </CardHeader>
                            <CardBody>
                                <p>Cakelicious is a web application developed using Reactjs,Redux with the help of local json-server. 
                                Cakelicious is about ordering and delivering cakes(e-commerce). 
                                This is my ongoing project. Since I am using local json-server as REST API,
                                the contents will not be available in the live link. It is exactly the same like as the screenshot.</p>
                            </CardBody>
                        </Card>
                    </div>
                    
                    <div className='col-sm'>
                        <Card>
                            <CardImg width="100%" src= 'assets/scoreboard.png' alt='html' />
                            <CardHeader>
                            <div className='row'>
                            <div className="col-12 col-md-5 m-1">
                                    <h5>Scoreboard</h5>
                                </div>
                                <div className="col-12 col-md-5 m-1">
                                    <Button className = "button" href = "https://score-boardreactapp.netlify.app/" type="submit" style = {{marginRight: '10px'}}>
                                        Live
                                    </Button>
                                    <a className="btn btn-social-icon btn-github" href="https://github.com/anusiraj/ScoreBoard_Reactjs">
                                        <i className="fa fa-github"></i></a>
                                </div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p>Score Board is single page website developed using Reactjs. It is like a Score Board for games. 
                                    ScoreBoard sorts player's according to their score. We can select player's 
                                    name from the dropdown below and can give the latest score. Then the scoreboard displays player's 
                                    name and their score in the sorting order</p>
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