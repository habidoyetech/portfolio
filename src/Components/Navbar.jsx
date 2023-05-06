import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { links } from '../data'
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';
import './Navbar.css'


const Navbar = ({scrollPosition}) => {

  const [isShowing, NavIsShowing] = useState(false)

  return (
    <nav className={`nav ${scrollPosition < 5 ? 'white': 'first-color'}`}>
      <div className='container nav_container'>
        <HashLink to='/#' smooth>
          <div className={`nav_logo-container ${scrollPosition < 5 ? 'logo-first-color': 'logo-white white-color'}`}>
            <h6>HABIDOYE'S <br /> Portfolio</h6>
          </div>
        </HashLink>
        <div className={`nav_links-container  ${isShowing? 'open':''}`}>
          <ul className={`nav_links  ${scrollPosition < 5 ? '': 'white-color'}`} >
            {
              links.map((link, index) => {
                return (
                  <li key={index} onClick={() => NavIsShowing(!isShowing)}>
                    <HashLink className={`${scrollPosition < 5 ? '': 'white-color'}`} to={link.path} 
                    
                     smooth > {link.name}</HashLink>
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