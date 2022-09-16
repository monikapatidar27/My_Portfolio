import React, { useState } from 'react';
import { Link } from "react-scroll";
import './style/about.scss';
import Skills from './Skills.jsx';
import Education from './Education.jsx';
import Profiles from './Profiles.jsx';
import Aboutme from './Aboutme.jsx';
const About = () => {
    const [aboutChange,setaboutChange] = useState('ABOUT');

    return (
        <div className='about' id='About'>
            <h1>About Me...</h1>
            <div className='about_section'>
                <div className='about_left_side'>
                    <ul>
                        <li>
                            <Link activeClass="active" to="Aboutme" onClick={() => setaboutChange('ABOUT')}>About</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="Education" onClick={() => setaboutChange('EDUCATION')}>Education</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="Skills" onClick={() => setaboutChange('SKILLES')}>Skills</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="Profiles" onClick={() => setaboutChange('PROFILES')}>Profiles</Link>
                        </li>
                    </ul>
                </div>
                {aboutChange === 'ABOUT' && <Aboutme/>}
                {aboutChange === "EDUCATION" && <Education/>}
                {aboutChange === "SKILLES" && <Skills/>}
                {aboutChange === "PROFILES" && <Profiles/>}
                
            </div>
        </div>
    )
}

export default About;