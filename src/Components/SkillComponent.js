import React from 'react';

const Skill = () => {
    return(
        
<div className='container' style={{marginBottom: 100}}>
<section id="skills">
                <h1>Skills & Tools</h1></section>
    <div className='row' style={{marginBottom: 100, marginTop:100}}>
                <div className='col-sm'>
                    <img src = '/assets/html.jpg' style= {{width:'50px', height:'40px'}}></img><br />HTML
                </div>
                <div className='col-sm'>
                    <img src = '/assets/css.png' style= {{width:'40px', height:'40px'}}></img><br />CSS
                </div> 
                <div className='col-sm'>
                    <img src = '/assets/java.jpg' style= {{width:'40px', height:'40px'}}></img><br />Java
                </div>
                <div className='col-sm'>
                    <img src = '/assets/js.jpeg' style= {{width:'40px', height:'40px', borderRadius: '10px'}}></img><br />JavaScript
                </div>
                <div className='col-sm'>
                    <img src = '/assets/php.jpg' style= {{width:'60px', height:'40px'}}></img><br />PHP
                </div> 
                <div className='col-sm'>
                    <img src = '/assets/python.jpg' style= {{width:'40px', height:'40px'}}></img><br />Python
                </div>
                <div className='col-sm'>
                    <img src = '/assets/wp.jpg' style= {{width:'40px', height:'40px'}}></img><br />Wordpress
                </div>
                <div className='col-sm'>
                    <img src = '/assets/wix.jpg' style= {{width:'45px', height:'40px'}}></img><br />Wix
                </div>
              
                
    </div>
                
           
           

         </div>
    )
}

export default Skill;