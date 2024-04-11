import React from 'react'
// import {SiLinkedin} from 'react-icons/si';
// import {FaFacebookSquare} from 'react-icons/fa';
// import {FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer_bg">
        <div className="footer__container container flex md:flex-row flex-col items-center justify-between">
          <div>
            <h1 className="footer__title font-semibold font-mons">Abiodun</h1>
            <span className="footer__subtitle">Creative Frontend Engineer</span>
          </div>
          <ul className="footer__links hidden lg:flex">
            
            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact</a>
            </li>
          </ul>
          <div className="flex ">
            <a href="https://facebook.com/" target="_blank" className="footer__social"  rel="noreferrer">
              <i className="uil uil-facebook-f" />
            </a>
            <a href="https://instagram.com/" target="_blank" className="footer__social"  rel="noreferrer">
              <i className="uil uil-instagram" />
            </a>
            <a href="https://twitter.com/" target="_blank" className="footer__social"  rel="noreferrer">
              <i className="uil uil-twitter-alt" />
            </a>
          </div>
        </div>
        <p className="footer__copy py-2">© <a href="https://wa.me/+2348100352118"> Abiodun Abidoye.</a> All right reserved.</p>


       
      </div>
    </footer>
  )
}

export default Footer