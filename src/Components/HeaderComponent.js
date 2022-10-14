import React, { Component, useState } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Button, Nav, Collapse, NavItem, NavbarToggler, NavLink} from "reactstrap";
import { Link } from 'react-scroll';

const Header = () => {

    const [toggle,  setToggle] = useState(false)
    return(
    <>
    <section id="header">
                </section>
    <Navbar dark expand="md">
    
        <div className= "container">
            {/* <div className='itemnav'> */}
            <NavbarToggler onClick  = {() => setToggle(!toggle)} />
                <Collapse isOpen={toggle} navbar>
                        <Nav navbar>
                            
                            <NavItem >
                                <Link activeClass="active" smooth spy to="about">
                                <span className = "fa fa-info fa-lg"></span> 
                                <h7 style = {{marginRight: '20px'}}>ABOUT ME</h7>
                                </Link>
                            </NavItem>
                    
                            <NavItem>
                                <Link activeClass="active" smooth spy to="skills">
                                <span className = "fa fa-cog fa-lg"></span> 
                                <h7 style = {{marginRight: '20px'}}>SKILLS</h7>
                                </Link>
                            </NavItem>
                    
                            <NavItem>
                                <Link activeClass="active" smooth spy to="projects">
                                <span className = "fa fa-tasks fa-lg"></span> 
                                <h7 style = {{marginRight: '20px'}}>PROJECTS</h7>
                                </Link>
                            </NavItem>
                    
                            <NavItem>
                                <Link activeClass="active" smooth spy to="contact">
                                <span className = "fa fa-address-card fa-lg"></span> 
                                <h7 style = {{marginRight: '20px'}}>CONTACT ME</h7>
                                </Link>
                            </NavItem>
                        </Nav >

                        <Nav className = 'ml-auto' navbar>
                            <NavItem>
                                <a style = {{marginRight: '20px'}} className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/anu-k-siraj-61452a108/"><i className="fa fa-linkedin" ></i></a>
                                <a style = {{marginRight: '20px'}} className="btn btn-social-icon btn-github" href="https://github.com/anusiraj?tab=repositories"><i className="fa fa-github"></i></a>
                            </NavItem>
                        </Nav>
                </Collapse>
            {/* </div> */}
            
        </div>
    </Navbar>                   
    </>
    )
}

export default Header;