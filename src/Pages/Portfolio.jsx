import React from 'react'
import Project from '../Components/Project'
import './portfolio.css';
import {projectsList} from '../data.js';

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      
      <div className="portfolio_container container">
        <div className='section_title'>My Project</div>
        <Project  projects={projectsList}/>
      </div>
    </section>
  )
}

export default Portfolio
