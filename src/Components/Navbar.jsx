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
    const navLink = document.querySelectorAll('.navlink')
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
                      className={`navlink ${link.idName}`}
                      to={link.path}
                     smooth>
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
    </nav>
  )
}

export default Navbar