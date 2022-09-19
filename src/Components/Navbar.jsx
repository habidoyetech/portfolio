import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { NavHashLink} from 'react-router-hash-link'
import { links } from '../data'
import myimage from '../images/abioduntwo.png'
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';
import './Navbar.css'


const Navbar = () => {

  const [isShowing, NavIsShowing] = useState(false)

  return (
    <nav>
      <div className='container nav_container'>
        <HashLink to='#home'>
          <div className='nav_logo-container'>
            <img src={myimage} alt="abiodun" className='logo'/>
            <h4>MY <br /> PORTFOLIO</h4>
          </div>
        </HashLink>
        <div className={`nav_links-container  ${isShowing? 'show_nav open':'hide_nav'}`}>
          <ul className='nav_links' >
            {
              links.map((link, index) => {
                return (
                  <li key={index}>
                    <NavHashLink to={link.path}> {link.name}</NavHashLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
        
        <button className='btn toggleBtn' onClick={() => NavIsShowing(!isShowing)} > 
          { isShowing?  <MdOutlineClose /> : <HiOutlineMenuAlt1 />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar