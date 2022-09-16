import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import './style/contact.scss';



const Contact = () => {
  const [show_emailstatus, setshow_emailstatus] = useState("");
  const [message ,setmessage]=useState("");
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_uuksowy', 'template_ufs7bhv', e.target,
      'fjNiVt62SdmzNNQOn').then(res => {
        console.log(res.status);
        
        if (res.status === 200) {

          setmessage("Thankyou for contact me..")
          setshow_emailstatus(true);
        }
        
      }).catch((err) => {
        console.log(err)
        setmessage("Unable to send at the moment..")
        setshow_emailstatus(true)
      });
  }
  return (
    <div className='container_box'id='Contact'>
      
      <div className='main_conatiner'>
        <div className='left_contactinfo'>
          <h1>Contact Info</h1>
          <a href="https://www.linkedin.com/in/monika-patidar-a8b687209/"
            target="_blank"><LinkedInIcon className="left_icons" />LinkedIn</a>
          <a href="mailto:monikapatidar33440@gmail.com"
            target="_blank"><MailOutlineIcon className="left_icons" />monikapatidar33440@gmail.com</a>
          <a href="https://www.linkedin.com/in/monika-patidar-a8b687209/"
            target="_blank"><LocationOnIcon className="left_icons" />Indore,MP</a>

          <div className='logo_icon'>
            <a href="http://wa.me/+919752577002" target="_blank">
              <WhatsAppIcon className="icons" /></a>
            <a href="https://github.com/monikapatidar27" target="_blank">
              <GitHubIcon className="icons" /></a>
            <a href="https://www.linkedin.com/in/monika-patidar-a8b687209/" target="_blank">
              <InstagramIcon className="icons" /></a>
            <a href="https://www.linkedin.com/in/monika-patidar-a8b687209/" target="_blank">
              <FacebookIcon className="icons" /></a>

          </div>
        </div>


        <form onSubmit={sendEmail}>
          <div className='contact_form'>
            <h2>Send Me</h2>
            <div className='right_info' >
              <div className='input_box sw'>
                <input type="text" name="name" required />
                <span>First Name</span>
              </div>
              <div className='input_box sw'>
                <input type="text" name="name" required />
                <span>Last Name</span>
              </div>
              <div className='input_box sw'>
                <input type="email" name="email" required />
                <span>Email Address</span>
              </div>
              <div className='input_box sw'>
                <input type="tel" name='phone' required />
                <span>Moblie number</span>
              </div>
              <div className='input_box lw'>
                <textarea name='message' required />
                <span>Write your message...</span>
              </div>
              <div className='input_box lw'>
                <Button type='submit'>Send</Button>
                {
                  show_emailstatus && 
                  <div className='resp'>
                    <span>{message}</span>
                    <CloseIcon onClick={()=>{
                      setshow_emailstatus(false)
                    }}/>
                  </div>
                }

              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact;