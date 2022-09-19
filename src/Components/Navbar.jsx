import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { NavHashLink} from 'react-router-hash-link'
import { links } from '../data'
import myimage from '../images/abioduntwo.png'
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import './Navbar.css'


const Navbar = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <HashLink to='#home'>
          <div className='nav_logo-container'>
            <img src={myimage} alt="abiodun" className='logo'/>
            <h4>MY <br /> PORTFOLIO</h4>
          </div>
        </HashLink>
        <ul>
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
        <button className='btn toggleBtn'>{HiOutlineMenuAlt1}</button>
      </div>
    </nav>
  )
}

export default Navbar