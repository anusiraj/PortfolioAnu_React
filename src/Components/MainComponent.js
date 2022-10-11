import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Skill from './SkillComponent';


const Main = () => {
    return(
        <div>
            <Header />
            <About />
            <Skill />
            <Footer />
            
        </div>

    )
}

export default Main;