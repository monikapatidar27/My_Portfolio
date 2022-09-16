import React from 'react'
import './style/about.scss';
import monika_img from './images/img1.png';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";
const Aboutme = () => {
    return (
        <div className='about_right_side' id='Aboutme'>
            <div className='right_img'>
                <img src={monika_img} alt='' />
            </div>
            <div className='right_contain'>
                <h2>I'm Monika Patidar</h2>
                <h3>Web Developer || Competitive Programmer</h3>
                <p>I am a third year student pursuing her Bachelor of Technology in Information Technology from Indore Institute of Science and Technology.
                    I'm a very enthusiastic coder who desires to learn and explore technical and problem solving skills. </p>
                <p>3*at Codechef I reach 1612 rating.</p>
                <Link
                    activeClass="active" to="Contact" spy={true}
                    smooth={true} offset={-70} duration={1000}>
                    <Button variant="contained" style={{ height: '30px', margin: '20px' }}>Contact Me</Button>
                </Link>

                <Button variant="contained" style={{ height: '30px', margin: '20px' }}><a className='resume' href='https://drive.google.com/file/d/1eEFGRL5TsBChYvc_WcRT-X-sp92XFDwa/view?usp=drivesdk' download='Monika.pdf' target='_blank'>Resume</a> </Button>
            </div>
        </div>
    )
}

export default Aboutme;