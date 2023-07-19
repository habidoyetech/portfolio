import React from 'react'
import './home.css';
import Image from '../images/abiodunnew.png'
import TypeWriter from '../Components/TypeWriter';


const Home = () => {
  return (
    <section className='home_section' id='home'>
      <div className='home_section-container'>
        <div className='home_section-details container'>
          <div className="home__social">
            <a href="https://facebook.com/" target="_blank" className="home__social-icon" rel='noreferrer'>
              <i className="uil uil-facebook"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" className="home__social-icon" rel='noreferrer'>
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a href="https://linkedin.com/in" target="_blank" className="home__social-icon" rel='noreferrer'>
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://wa.me/+2348100352118" target="_blank" className="home__social-icon" rel='noreferrer'>
                <i className="uil uil-whatsapp"></i>
            </a>
            <a href="https://github.com/" target="_blank" className="home__social-icon" rel='noreferrer'>
                <i className="uil uil-github"></i>
            </a>
          </div>
          <div className="home_header_details-right">
            <div className="home_header-circle">
              <div className="home_header-image-container" >
                
                <img src={Image} alt="Abiodun"/>
              </div>
            </div>
            <div className='border top-right'></div>
            <div className='border bottom-left'></div> 
          </div>
          <div className="home_header_details-left">
            <h2 className='home__title inline'>Hello, I'm Abiodun</h2>
            <h5 className='home__subtitle'>I'm a creative 
              <TypeWriter text=' Frontend Developer' delay={200} />
              <span className='blink'>|</span>
            </h5>
            <p>
              I have knowledge and experience designing websites and online technologies. I specialize in React.
            </p>
            <a href="http://wa.me/2348100352118" target="_blank" class="button button-flex" rel='noreferrer'> Hire Me
							<i className="uil uil-message button__icon"></i>
						</a>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default Home
