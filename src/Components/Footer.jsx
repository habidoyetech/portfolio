import React from 'react'
import {SiLinkedin} from 'react-icons/si';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer_bg">
        <div className="footer_container container grid_footer">
          <div>
            <h1 className='footer_title'>Abiodun Abidoye</h1>
            <span className='footer_subtitle'>Fullstack Developer</span>
          </div>
          <div className='footer_social'>
            <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <SiLinkedin />  </a>
            <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <FaFacebookSquare />  </a>
            <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <FaTwitterSquare />  </a>
          </div>
        </div>
         <a href="https://github.com/Habidoye97" target='_blank' rel='noreferrer'><p className='footer_copy'>&#169; Abiodun Abidoye, 2022</p></a>
      </div>
    </footer>
  )
}

export default Footer