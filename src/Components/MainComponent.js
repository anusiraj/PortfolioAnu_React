import React, { Component } from 'react';
import Header from './HeaderComponent';
import JumbotronPart from './JumbotronPartComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Skill from './SkillComponent';
import Project from './ProjectComponent';
import ContactForm from './ContactFormComponent';



const Main = () => {
    return(
        <div>
         
            <Header />
            <JumbotronPart />
            <About />
            <Skill />
            <Project />
            <ContactForm />
            <Footer />
            
            
            
        </div>

    )
}

export default Main;