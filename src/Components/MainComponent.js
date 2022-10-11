import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Skill from './SkillComponent';
import Project from './ProjectComponent';

const Main = () => {
    return(
        <div>
            <Header />
            <About />
            <Skill />
            <Project />
            <Footer />
            
        </div>

    )
}

export default Main;