import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "assets/reactcertificate.png" },
    { url: "assets/coreJava.jpeg" },
    { url: "assets/phpcertificate.jpeg" },
    { url: "assets/pythoncertificate.jpeg" },
    { url: "assets/Work_Certificate.jpeg" },
    { url: "assets/mehtaheino.jpeg" },
    { url: "assets/opin.png" },
    { url: "assets/dealroom.jpg" }
  ];

const About = () => {
    return(
        
                <div class = 'container' style={{marginBottom: 100, marginTop:40}} >
                    <section id="about">
                    <h1 style={{marginBottom: 30}} >About me</h1> </section>
                    <div className='aboutcontent' style={{dispaly: 'flex', textAlign: 'left', marginBottom: 50, marginTop:20}}>    
                        <p>My name is Anu Siraj. I am a Software Developer. I have Bachelors degree in Electronics and Communication Engineering. 
                            I am always curious to learn new technologies. I have ability to work as part of a team to develop solutions and 
                            I am self-motivated with go-getter attitude. 
                            I also have experience in learning and excelling at new technologies as needed.</p>

                                    <ul>
                                        <li>6 month's of industrial experience in HTML, CSS, Java, JavaScript(fom India).</li>
                                        <li>5 month's of work-trial experience in Wix & Wordpress using Page builder Elementor, 
                                            Brizy, Astra and 3 months of experience in WooCommerce(form Finland).</li>
                                        <li>Participated in Catalyst program-Python for Data Analysis including topics such as Python Fundamentals, 
                                            Python Libraries for Data Analysis, Data Visualization, SQL.</li>
                                        <li>Trained and received Core Java Certification.</li>    
                                        <li>Trained and received PHP and MY-SQL Server(CodeIgniter) Certification.</li>
                                        <li>Trained and received Front-End Web Development with React Certification.</li>
                                    </ul>
                    </div> 
                    <div className='slider'>
                        <h4 style={{ marginTop: '30px' }}>My Certficates</h4>
                        {/* <div className = "col-12 col-sm-6"> */}
                        <SimpleImageSlider
                        style={{ margin: '0 auto', marginTop: '20px', marginBottom: '50px' }}
                            width={400}
                            height={300}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                            autoPlay={true}
                        />
                        {/* </div> */}
                    </div>
                    

                </div>


    )
}

export default About;
