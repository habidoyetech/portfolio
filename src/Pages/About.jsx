import React from 'react'
import './about.css'
import Image from '../images/abioduntwo.png'
import {SiLinkedin} from 'react-icons/si';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {BsArrowDownCircle} from 'react-icons/bs';
import CV from '../assets/Abiodun_Abidoye_CV_new.pdf'
import Cards from '../Components/Cards';
import { databaseData, frameworkLibraryData, languageData, testingToolsData } from '../data';


const About = () => {

  return (
    <section className='about section container' id='about' >
      <h2 className='section_title'>About Me</h2>
      <span className='section_subtitle'> My Introduction </span>
      <div className='about_img_container'>
        <img src={Image} alt="About" className='about_img' />
      </div>
      <div className="about_container grid">
        <div className='about_container-details'>
          
          <div className='about_data'>
            <p className='about_description'>
              I'm a <strong>FullStact Web Developer</strong>  with experience and technical knowledge of HTML, CSS, JavaScript, 
              ReacJS, Python, Flask, SQLAlchemy ORM, PostgreSQL etc. I can work
              as a <strong>Frontend Developer(ReactJS)</strong>  and as a <strong> Backend Developer(Flask).</strong>  I am passionate about learning and 
              I'd love to use technology to improve the world.
            </p>
          </div>
          <div className='about_contact'>
            <h1>LET CONNECT</h1>
            <div className='social'>
                <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <SiLinkedin />  </a>
                <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <FaFacebookSquare />  </a>
                <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <FaTwitterSquare />  </a>
            </div>
            <button className='cv_button'> <a download='cv.pdf' href={CV} >
              <h3>GET MY RESUME<BsArrowDownCircle/></h3> </a></button>
          </div>
        </div>
        <div className='about_container skills'>
          <Cards id='headingOne' datas={languageData} name='Languages'/>
          <Cards id='headingtwo' datas={frameworkLibraryData} name='Framework & Library'/>
          <Cards id='headingthree' datas={databaseData} name='CVS & Database'/>
          <Cards id='headingfour' datas={testingToolsData} name='Testing Tools'/>
        </div> 
      </div>
    </section>
  )
}

export default About
