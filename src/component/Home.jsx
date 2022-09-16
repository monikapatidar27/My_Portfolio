import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import './style/home.css';
import monika_img from './images/img1.png';
import Header from './Header';
import { Link } from "react-scroll";
import './style/header.css'
const Home = () => {
  return (
    <>
      <Header />
      <div className='home_container' id='Home'>
        <div className='left_side'>
          {/* <div className='content'> */}
          <p>Hello There !!</p>
          <h1>This is <span>Monika Patidar</span></h1>
          <p>Competitive Programmer and Web Developer</p>

          <div className='icon_img'>
            <a href="https://www.linkedin.com/in/monika-patidar-a8b687209/" target="_blank">
              <LinkedInIcon className="icons" /></a>
            <a href="https://github.com/monikapatidar27" target="_blank">
              <GitHubIcon className="icons" /></a>
            <a href="https://www.instagram.com/_monika274/" target="_blank">
              <InstagramIcon className="icons" /></a>
            <a href="https://m.facebook.com/monika.patidar.9461" target="_blank">
              <FacebookIcon className="icons" /></a>
          </div>
          <div className='buttons'>
            <Button variant="contained" >Resume</Button>
            <Link
              activeClass="active" to="Contact" spy={true}
              smooth={true} offset={-70} duration={1500}>
              <Button variant="contained" >Contact Me</Button>
            </Link>

          </div>
          {/* </div> */}
        </div>
        <div className='right_side'>
          <img src={monika_img} alt='' />
        </div>
        <div className='curveStyle'>
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path></svg>
        </div>
      </div>

    </>

  )
}

export default Home;