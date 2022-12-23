import React from 'react'
import './home.css'
import {SiLinkedin} from 'react-icons/si';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import Image from '../images/abiodun.png'


const Home = () => {
  return (
    <section className='home_section' id='home'>
      <div className='home_section-container bg_image'>
        <div className='home_section-details container'>
          <div className="home_header_details-left">
            <h2>Hello, I'm Abiodun Abidoye</h2>
            <h2>I'm glad you are here</h2>
            <p>
              I'm an experienced Junior FullStack Web Developer. My goal is to use software engineering principles to help organizations change the world, one line of code at a time. I'm currently available for new opportunities and challenges to commit my skillsets to a worthy cause.
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
              <svg className='home_blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink='http://www.w3.org/1999/xlink'>
                <mask id="mask0" mask-type="alpha">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                </mask>
                <g mask="url(#mask0)">
                  <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  <image className='home_blob-image' x='12' y='18' href={Image} />
                </g>
              </svg>
              
             
              
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
