import React from 'react'
import Project from '../Components/Project'
import './portfolio.css';
import {projectsList} from '../data.js';

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='section_title'>My Project</div>
      <div className="portfolio_container container">
        <Project  projects={projectsList}/>
      </div>
    </section>
  )
}

export default Portfolio
