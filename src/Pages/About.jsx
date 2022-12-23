import React from 'react'
import './about.css'

import {SiLinkedin} from 'react-icons/si';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {BsArrowDownCircle} from 'react-icons/bs';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi'

import Cards from '../Components/Cards';
import { databaseData, frameworkLibraryData, languageData, testingToolsData } from '../data';


const About = () => {

  return (
    <section className='about' id='about' >
      <div className='about_section container'>
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'> My Introduction </span>
        {/* <div className='about_img_container'>
          <img src={Image} alt="About" className='about_img' />
        </div> */}
        <div className="about_container grid">
          <div className='about_container-details'>
            
            <div className='about_data'>
              <p className='about_description'>
                I'm a <strong>Junior FullStact Web Developer</strong>  with experience and technical knowledge of HTML, CSS, JavaScript, 
                ReacJS, Python, Flask, SQLAlchemy ORM, PostgreSQL etc. I can work
                as a <strong>Junior Frontend Developer(ReactJS)</strong>  and as a <strong>Junior Backend Developer(Flask).</strong>  I am passionate about learning and 
                I'd love to use technology to improve the world.
              </p>
            </div>
            <div className='about_contact'>
              <h1>LET CONNECT</h1>
              <div className='social'>
                <div className='phone contact'> <HiOutlinePhone/>  <p>+2348100352118</p> </div>
                <div className='email contact'> <HiOutlineMail/>  <p>abidoyeabiodun97@gmail.com</p> </div>
                  <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <SiLinkedin />  </a>
                  <a href="https://web.facebook.com/abiodunpeter.abidoye.94/" target='_blank' rel='noreferrer'> <FaFacebookSquare />  </a>
                  <a href="https://twitter.com/i_am_habidoye" target='_blank' rel='noreferrer'> <FaTwitterSquare />  </a>
              </div>
              <button className='cv_button'> <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/1F8Q1SxH3Rv8xY8LVA0q7LZleYu40a_P7/edit?usp=share_link&ouid=104950997427632813401&rtpof=true&sd=true' >
                <h3>GET MY RESUME    <BsArrowDownCircle/></h3> </a></button>
            </div>
          </div>
          <div className='about_container skills'>
            <Cards id='headingOne' datas={languageData} name='Languages & Web Technologies'/>
            <Cards id='headingtwo' datas={frameworkLibraryData} name='Framework & Library'/>
            <Cards id='headingthree' datas={databaseData} name='VCS & Database'/>
            <Cards id='headingfour' datas={testingToolsData} name='Testing Tools'/>
          </div> 
        </div>
      </div>
      
    </section>
  )
}

export default About
