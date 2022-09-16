import React from 'react'
import './style/profiles.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Profiles = () => {
  return (
    <div className='profile_right_side' id='Profiles'>
      <div className="coding_profile">
        <div className='profile_name'>
          <a href="https://www.codechef.com/users/monika33" target="_blank"><ArrowForwardIcon />
          <h2>Codechef : monika33</h2></a>
            
        </div>
      </div>
      <div className="coding_profile">
        <div className='profile_name'>
          <a href="https://leetcode.com/monikapatidar/" target="_blank"><ArrowForwardIcon />
          <h2>Leetcode : monikapatidar</h2></a>
            
        </div>
      </div>
      <div className="coding_profile">
        <div className='profile_name'>
          <a href="https://codeforces.com/profile/monika27" target="_blank"><ArrowForwardIcon />
          <h2>Codeforces : monika27</h2></a>
            
        </div>
      </div>
      <div className="coding_profile">
        <div className='profile_name'>
          <a href="https://auth.geeksforgeeks.org/user/monikapatidar/practice/" target="_blank"><ArrowForwardIcon />
          <h2>Geeksforgeeks : monikapatidar</h2></a>
            
        </div>
      </div>
      <div className="coding_profile">
        <div className='profile_name'>
          <a href="https://github.com/monikapatidar27" target="_blank"><ArrowForwardIcon  style={{marginRight:"0.4rem"}}/> 
          <h2>Github : monikapatidar27</h2></a>
            
        </div>
      </div>
    </div>

  )
}

export default Profiles