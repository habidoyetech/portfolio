import React from 'react'
import Project from '../Components/Project'
import './portfolio.css';
import {projectsList} from '../data.js';

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      
      <div className="portfolio_container">
        <div className='section_title'>My Project</div>
        <div className='section_subtitle'>My past works</div>
        <div className="flex overflow-hidden gap-8 mb-10  will-change-transform w-screen ">
          <div className='flex items-center gap-8 animate-marquee-slower'>
            {
              projectsList.map((project, index) => {
                return (
                  <Project project={project} key={index}/>
                )
              })
            }
          </div>
          <div className='flex items-center gap-8 animate-marquee-slower'>
            {
              projectsList.map((project, index) => {
                return (
                  <Project project={project} key={index}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
