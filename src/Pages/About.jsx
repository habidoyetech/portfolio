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
                <p className='about_description'> 
                  I'm a <strong> Frontend Developer </strong> with knowledge and experience designing websites and online technologies.
                  I specialize in React. I can perform as a Frontend Developer (React, NestJs), I also have some project experience in Python Flask, Postgres, and SQL Alchemy.   
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
                  <a href="https://drive.google.com/file/d/1El1L6Jix7hDoTh9bKtz0C0evjc3wxQQx/view?usp=sharing" download="" rel='noreferrer' className="button button--flex">Download CV
                    <i className="uil uil-download-alt button__icon"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* <div className='about_contact'>
              <div className='social'>
                <div className='phone contact'> <HiOutlinePhone />  <p>+2348100352118</p> </div>
                <div className='email contact'> 
                  <a href="mailto:abioyeabiodun97@gmail.com" target='_blank' rel='noreferrer'> <HiOutlineMail/> </a>  
                  <a href="mailto:abioyeabiodun97@gmail.com" target='_blank' rel='noreferrer'> <p> abidoyeabiodun97@gmail.com </p> </a> 
                </div>
                <a href="https://www.linkedin.com/in/abiodun-abidoye-59b30a143/" target='_blank' rel='noreferrer'> <SiLinkedin className='social-logo' />  </a>
                <a href="https://web.facebook.com/abiodunpeter.abidoye.94/" target='_blank' rel='noreferrer'> <FaFacebookSquare className='social-logo' />  </a>
                <a href="https://twitter.com/i_am_habidoye" target='_blank' rel='noreferrer'> <FaTwitterSquare className='social-logo' />  </a>
              </div>
              <button className='cv_button'> <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/1F8Q1SxH3Rv8xY8LVA0q7LZleYu40a_P7/edit?usp=share_link&ouid=104950997427632813401&rtpof=true&sd=true' >
                <h3>GET MY RESUME    <BsArrowDownCircle/></h3> </a></button>
            </div> */}
          </div>
          {/* <div className='about_container skills'>
            {
              skills.map((group, index) => {
                return (
                  <SkillCard key={index} skillGroup={group} />
                )
              })
            }
          </div>  */}
        </div>
      </div>   
    </section>
  )
}

export default About
