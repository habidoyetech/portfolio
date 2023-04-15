import React from 'react'
import './home.css'
import {SiLinkedin} from 'react-icons/si';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import Image from '../images/abiodunnew.png'


const Home = () => {
  return (
    <section className='home_section' id='home'>
      <div className='home_section-container bg_image'>
        <div className='home_section-details container'>
          <div className="home_header_details-left">
            <h2>Hello, I'm Abiodun Abidoye</h2>
            <h2>I'm glad you are here</h2>
            <p>
              I'm a Frontend Developer with knowledge and experience designing websites and online technologies. I specialize in React. <br/> My goal is to use software engineering principles to help organizations change the world, one line of code at a time. I'm currently available for new opportunities and challenges to commit my skillsets to a worthy cause.
            </p>
            <div className='home_section-social'>
              <h4>Connet with me!!!</h4>
              <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <SiLinkedin />  </a>
              <a href="https://web.facebook.com/abiodunpeter.abidoye.94/" target='_blank' rel='noreferrer'> <FaFacebookSquare />  </a>
              <a href="https://twitter.com/abidoyeabiodun9" target='_blank' rel='noreferrer'> <FaTwitterSquare />  </a>
            </div>
          </div>
          <div className="home_header_details-right">
            <div className="home_header-circle">
              <div className="home_header-image-container" >
                <img src={Image} alt="Abioun"/>
              </div>
            </div>
            <div className='border top-right'></div>
            <div className='border bottom-left'></div>
            
          </div>
        </div>
      </div> 
    </section>
  )
}

export default Home
