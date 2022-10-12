import React, { Component, useState } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Button, Nav, Collapse, NavItem, NavbarToggler, NavLink} from "reactstrap";

const Header = () => {

    const [toggle,  setToggle] = useState(false)
    return(
    <>
      <Navbar dark expand="md">
                    <div className= "container">
                    <NavbarToggler onClick  = {() => setToggle(!toggle)} />
                        {/* <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" 
                        alt="Ristorente Con Fusion" />
                        </NavbarBrand> */}

                    <Collapse isOpen={toggle} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className = "fa fa-info fa-lg"></span> About me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span className = "fa fa-cog fa-lg"></span> Skills
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/projectid">
                                    <span className = "fa fa-tasks fa-lg"></span> Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    <span className = "fa fa-address-card fa-lg"></span> Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className = 'ml-auto' navbar>
                            <NavItem>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/anu-k-siraj-61452a108/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-github" href="https://github.com/anusiraj?tab=repositories"><i className="fa fa-github"></i></a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>

     </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                    <div className='herocontent'>
                    <h1>Hey, I am Anu Siraj</h1>
                       <p>I am a passionate Software Developer.<br />I love exploring and creating new things that live on Internet.</p>
                        <Button className = "btn btn-danger" href = "#project" type="submit">
                            View my projects
                        </Button>
                    </div>
                   </div>
                   <div className="col-12 col-sm-6">
                   <img className='heroimage' src="/assets/anu5.jpeg" alt="Anu" />
                   </div>
               </div>
           </div>
       </Jumbotron>
       
    </>

    )
}

export default Header;