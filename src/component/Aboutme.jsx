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
                <h3>Smart India Hackathon 2023 WINNER</h3>
                <p>I am a final year student pursuing her Bachelor of Technology in Information Technology from Indore Institute of Science and Technology.
                    I'm a very enthusiastic coder who desires to learn and explore technical and problem solving skills. </p>
                <p>Currently i am working as a intern at Qubited.</p>
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