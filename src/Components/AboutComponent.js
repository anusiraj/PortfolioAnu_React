import React from 'react';
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
        
                <div className = 'container' style={{marginBottom: 100, marginTop:40}} >
                    <section id="about">
                    <h1 style={{marginBottom: 30}} >About me</h1> </section>
                    <div className='aboutcontent' style={{dispaly: 'flex', textAlign: 'left', marginBottom: 50, marginTop:20}}>    
                        <p>My name is Anu Siraj. I am a Software Developer. I have  Bachelor's Degree in 
                            Electronics and Communication Engineering. I am always curious to l
                            earn new technologies. I can work as part of a team to develop solutions 
                            and I am self-motivated with go-getter attitude. I also have experience 
                            in learning and excelling at new technologies as needed. Currently, 
                            I am developing a React application as a hobby project.</p>
                            <p><b>Work Experience - </b></p>
                            <dl>
                                <ul>
                                    <dt>MehtaHeino Industries Oy(Intern, 01/2022-04/2022)</dt>
                                    <dd>- Designed and developed company website using WordPress and Webflow.</dd>
                                    <dd>- Designed and developed support page for company website using WordPress.</dd>

                                    <dt>Innovative Education Council(Intern, 06/2021-09/2021)</dt>
                                    <dd>- Designed and developed an online reservation platform for a tourism based website using Wix.</dd>
                                    <dd>- Performed Manual Testing for Web Applications including Product
                                        Management, Use-Case design, Defect Indentification and Management. </dd>

                                    <dt>Deal Room Events(Intern, 11/2020-04/2021)</dt>
                                    <dd>- Designed and developed webpages for company website using WordPress.</dd>
                                    <dd>- Designed and developed an online reservation website(Duuni2021) using Wix(for client).</dd>
                                    <dd>- Performed Manual Testing and Lead Forensic task. </dd>

                                    <dt>Safecare Technology, India(Java Developer, 08/2017-01/2018)</dt>
                                    <dd>- Worked as a Java developer in the project Cortex IP - a Hospital inpatient
                                        management project.</dd>
                                    <dd>- Developed a webpage for Cortex IP for entering details and showing complete records of patients. </dd>
                                </ul>
                            </dl>
                             
                            <p><b>Key strengths - </b></p>

                                    <ul>
                                        
                                        <li>Participated in Catalyst program-Python for Data Analysis including topics such as Python Fundamentals, 
                                            Python Libraries for Data Analysis, Data Visualization, SQL.</li>
                                        <li>Trained and received Core Java Certification.</li>    
                                        <li>Trained and received PHP and MY-SQL Server(CodeIgniter) Certification and developed a website for the same.</li>
                                        <li>Trained and received Front-End Web Development with React Certification and developed a web application for the same.</li>
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
