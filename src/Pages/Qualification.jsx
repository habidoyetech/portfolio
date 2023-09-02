import React from 'react';
import './qualification.css'
import { education, experience } from '../data';
import { useState } from 'react';
import { Collapse } from '@mui/material';


const Qualification = () => {

  const [showEducation, setRemoveEducation] = useState(true)

  return (
    <section className='qualification' id='qualification'>
      <div className='qualification_section'>
        <h2 className='section_title'>Awesome Journey</h2>
        <span className='section_subtitle'>Why you should hire me</span>
        <div className='qualification_container container'>
          <div className="qualification__tabs">
              <div className={`qualification__button button--flex ${showEducation ? 'qualification__active': ''} `}  onClick={()=>setRemoveEducation(true)} data-target="#education">
                  <i className="uil uil-graduation-cap qualification__icon"></i> Education
              </div>

              <div className={`qualification__button button--flex ${showEducation ? '': 'qualification__active'}`} onClick={()=>setRemoveEducation(false)} data-target="#work">
                  <i className="uil uil-briefcase-alt qualification__icon"></i> Work
              </div>
          </div>
          <div className='qualification__sections'>
            <Collapse in={showEducation}>
            <div className={`qualification__content ${showEducation ? 'qualification__active': ''}`} data-content id='education'>
              {education.map((data, index) => {
                return (
                  <div key={index} className="qualification__data">
                    {
                      (index + 1) % 2 === 0 ? 
                      <div></div>
              
                      :
                       ''
                    }
                    {
                      (index + 1) % 2 === 0 ? 
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
              
                      :
                       ''
                    }
                    <div>
                        <h3 className="qualification__title">{data.degree}</h3>
                        <span className="qualification__subtitle">{data.school}</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> {data.date}
                        </div>
                    </div>
                    {
                      (index + 1) % 2 === 1 ? 
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
              
                      :
                       ''
                    }
                    
                  </div>
                )
              })}
            </div>
            </Collapse>
            <Collapse in={!showEducation}>
            <div className={`qualification__content ${showEducation ? '': 'qualification__active'}`} id='work' data-content>
              {experience.map((data, index) => {
                return (
                  <div key={index} className="qualification__data">
                    {
                      (index + 1) % 2 === 0 ? 
                      <div></div>
              
                      :
                       ''
                    }
                    {
                      (index + 1) % 2 === 0 ? 
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
              
                      :
                       ''
                    }
                    <div>
                        <h3 className="qualification__title">{data.role}</h3>
                        <span className="qualification__subtitle">{data.company}</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> {data.date}
                        </div>
                    </div>
                    {
                      (index + 1) % 2 === 1 ? 
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
              
                      :
                       ''
                    }
                    
                  </div>
                )
              })}
            </div>
            </Collapse>
          </div>
        </div>
        
      </div>

    </section>
    
  )
}

export default Qualification