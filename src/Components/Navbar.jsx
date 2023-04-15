import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { links } from '../data'
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';
import './Navbar.css'


const Navbar = () => {

  const [isShowing, NavIsShowing] = useState(false)

  return (
    <nav>
      <div className='container nav_container'>
        <HashLink to='/#' smooth>
          <div className='nav_logo-container'>
            <h6>HABIDOYE <br /> PORTFOLIO</h6>
          </div>
        </HashLink>
        <div className={`nav_links-container  ${isShowing? 'open':''}`}>
          <ul className='nav_links' >
            {
              links.map((link, index) => {
                return (
                  <li key={index}>
                    <HashLink to={link.path} 
                    
                    onClick={() => NavIsShowing(!isShowing)} smooth > {link.name}</HashLink>
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