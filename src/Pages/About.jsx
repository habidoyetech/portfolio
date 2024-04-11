import React from 'react'
import './about.css'
import AbiodunPassport from '../images/abiodunpassport.png'


const About = () => {


  return (
    <section className='about' id='about' >
      <div className='about_section container'>
        <h2 className='section_title'>About Me </h2>
        <span className='section_subtitle'>Get to know me</span> 
        <div className="about_container">
          <div className='about_container-details'>
            <div className='about_img_description'>
              <div className='about_image_container'><img src={AbiodunPassport} alt='Abiodun Passport'/></div>
              <div className='about_data'>
                <p className='about_description font-mons'> 
                  I'm a <strong> Frontend Developer </strong> with knowledge and experience designing websites and online technologies.
                  I specialize in React. I can perform as a Frontend Developer (React, NestJs), I also have some project experience in Python Flask, NodeJs, Postgres, and SQL Alchemy.   
                  With over 2+ years experience in building professional websites for businesses, brands and individuals, I bring you closer to your customers with my developer + SEO skills.
                  <br />
                  <br />
                  
                  I am currently actively looking for opportunities and roles of a Frontend Developer.
                </p>
                <div className="about__info">
                  <div>
                      <span className="about__info-title">02+</span>
                      <span className="about__info-name">Years <br/> experience</span>
                  </div>

                  <div>
                      <span className="about__info-title">27+</span>
                      <span className="about__info-name">Completed <br/> projects</span>
                  </div>

                  <div>
                      <span className="about__info-title">02+</span>
                      <span className="about__info-name">Helped<br/> Companies</span>
                  </div>
                </div>
                <div className="about__buttons">
                  <a href="https://drive.google.com/file/d/1RSMnM20zhd005204XFD9bAdeOhMSjO00/view?usp=sharing" download="" rel='noreferrer' className="button button--flex" _blank>Download CV
                    <i className="uil uil-download-alt button__icon"></i>
                  </a>
                </div>
              </div>
            </div>
            
            
          </div>
          
        </div>
      </div>   
    </section>
  )
}

export default About
