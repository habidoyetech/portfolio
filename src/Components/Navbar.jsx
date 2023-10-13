import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { links } from '../data'
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';
import './Navbar.css';
import { useEffect } from 'react';


const Navbar = ({scrollPosition}) => {

  const [isShowing, NavIsShowing] = useState(false);
  
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll('.nav__link')
    console.log(sections)
    console.log(navLink)

    window.onscroll = () => {
      let current = "";
    
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id"); 
        }

      });

      navLink.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
      console.log(current)
    }
  }, [])

  return (
    <nav className={`nav ${scrollPosition < 5 ? '': 'scroll-header'}`}>
      <div className='container nav_container'>
        <HashLink to='/#' smooth>
          <div className={`nav_logo-container ${scrollPosition < 5 ? 'logo-first-color': 'logo-white white-color'}`}>
            <h6 className='text-[10px] font-semibold'>HABIDOYE'S <br /> Portfolio</h6>
          </div>
        </HashLink>
        <div className={`nav_links-container  ${isShowing? 'open':''}`}>
          <ul className={`nav_links  ${scrollPosition < 5 ? '': 'white-color'}`} >
            {
              links.map((link, index) => {
                return (
                  <li key={index} onClick={() => NavIsShowing(!isShowing)}>
                    <HashLink 
                      className={`nav__link ${link.idName} ${index===0? 'active': ''}`}
                      to={link.path}
                     smooth>
                      <i className={`uil ${link.icon} nav__icon hidden  `}/>
                     {link.name}
                    </HashLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
        
        <button className='btn toggleBtn' onClick={() => NavIsShowing(!isShowing)} > 
          { isShowing?  <MdOutlineClose className={`${scrollPosition < 5 ? 'text-first-color': 'white-color'}`}/> : <HiOutlineMenuAlt1 className={`${scrollPosition < 5 ? 'text-first-color': 'white-color'}`} />}
        </button>
      </div>
      {/* <div className="nav__menu show-menu grid justify-center" id="nav-menu">
        <ul className="nav__list grid-cols-3 grid">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              <i className="uil uil-estate nav__icon" /> 
              <span>Home</span> 
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="uil uil-user nav__icon" /> 
              <span>About</span> 
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="uil uil-file-alt nav__icon" />
              <span>Skills</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link"> 
              <i className="uil uil-briefcase-alt nav__icon" />
              <span>Services</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              <i className="uil uil-scenery nav__icon" />
              <span>Portfolio</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="uil uil-message nav__icon" /> 
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
        <i className="uil uil-times nav__close" id="nav-close" />
      </div> */}

    </nav>
  )
}

export default Navbar