import React from 'react';
import './style/education.scss';

const Education = () => {
  return (
    <div className='education_right_side' id='Education'>
      <div className='education_main'>
        <div className='education_right_contain'>
          <div className='education_contain'>
            <h3>Indore Institute of Science and Technology</h3>
            <p>Bachelor of Technology, Information Technology</p>
          </div>
          <span>2020-Present</span>

        </div>
        <div className='education_right_contain'>
          <div className='education_contain'>
            <h3>Maa Jinwani Public School</h3>
            <p>Senior Secondary Education:78.6%</p>
          </div>
          <span>2019-2020</span>

        </div>
        <div className='education_right_contain'>
          <div className='education_contain'>
            <h3>Maa Jinwani Public School</h3>
            <p>Higher Secondary Education:79.4%</p>
          </div>
          <span>2017-2018</span>

        </div>
      </div>
    </div>
  )
}

export default Education;