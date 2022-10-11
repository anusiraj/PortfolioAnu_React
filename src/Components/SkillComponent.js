import React from 'react';

const Skill = () => {
    return(
        <div className='container'>
            <h1>Skills & Tools</h1>
            <div className='row'>
                <div className="col-6 col-md-5 m-1">
                    <h4>Skills</h4>
                    <ul>
                        <li><img className='skillimage' src = "assets/html.jpeg" /></li><br />
                        HTML
                        <li><img className='skillimage' src = "assets/html.jpeg" /></li><br />
                        HTML
                        <li><img className='skillimage' src = "assets/html.jpeg" /></li><br />
                        HTML
                        <li><img className='skillimage' src = "assets/html.jpeg" /></li><br />
                        HTML
                    </ul>
                </div>
                <div className="col-6 col-md-5 m-1">
                    <h4>Tools</h4>
                </div>

            </div>

        </div>
    )
}

export default Skill;