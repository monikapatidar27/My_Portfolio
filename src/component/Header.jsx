import React, { useState } from 'react';
import './style/header.css';
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [moblieshow,Setmobleshow] = useState(false);
  const [sticky,setsticky] = useState(false);
  const fixed = () =>{
    if(window.scrollY >= 50){
      setsticky(true);
    }else{
      setsticky(false);
    }
  }
  window.addEventListener("scroll",fixed);

    const showside = () =>{
        Setmobleshow(!moblieshow);
    }

  return (
    <div className={sticky ? ('Header header_fix') : ('Header')}>
      <div className='Header_name'>
        <h1>monika</h1>
      </div>
      <div className={(moblieshow)? ('menus showmenu') : ('menus')}>
      <ul>
        <li>
          <Link activeClass="active" to="Home" spy={true} smooth={true}
            offset={-70} duration={1000} onClick={showside}>Home</Link>
        </li>
        <li>
        
          <Link activeClass="active" to="About" spy={true} smooth={true}
            offset={-70} duration={1200} onClick={showside} >About</Link>
        </li>
        <li>
          <Link activeClass="active" to="" spy={true} smooth={true}
            offset={600} duration={1500} onClick={showside}>Project</Link>
        </li>
        <li>
          <Link activeClass="active" to="Contact" spy={true} smooth={true}
            offset={600} duration={1800} onClick={showside}>Contact</Link>
        </li>
      </ul>
      </div>
      <div className='res_menu' onClick={showside}>
        {
          (!moblieshow) ? (<MenuIcon  style={{width:'100%',height:'100%'}}/>) : 
          (<CloseIcon style={{width:'100%',height:'100%'}}/>)
        }

      </div>
    </div>
  )
}

export default Header;