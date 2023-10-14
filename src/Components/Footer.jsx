import React from 'react'
// import {SiLinkedin} from 'react-icons/si';
// import {FaFacebookSquare} from 'react-icons/fa';
// import {FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer_bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title font-semibold font-mons">Abiodun</h1>
            <span className="footer__subtitle">Creative web developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">Services</a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact</a>
            </li>
          </ul>
          <div className="footer__socials">
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
        <p className="footer__copy">© <a href="https://wa.me/+2348100352118"> Abiodun Abidoye.</a> All right reserved.</p>


       
      </div>
    </footer>
  )
}

export default Footer