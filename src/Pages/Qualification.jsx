import React from 'react';
import EducationCard from '../Components/EducationCard';
import './qualification.css'
import { certification, education } from '../data';
import {MdCastForEducation} from 'react-icons/md'
import {TbCertificate} from 'react-icons/tb'

const Qualification = () => {
  return (
    <section className='qualification' id='qualification'>
      <div className='qualification_section container'>
        <h6 className='section_subtitle subtitle'>My Qualification</h6>
        <h2 className='section_title title'>Awesome Journey</h2>
        <div className='qualification_container'>
          <div className='education_container'>
            <div className='education_header'>
              <div> <MdCastForEducation /></div>
              <h3>  Education</h3>
            </div>
            <div className='education_detail_container'>
              <EducationCard educationData={education}/>
            </div>
          </div>
          <div className='certification_container'>
            <div className='certification_header'>
              <div><TbCertificate/></div>
              <h3>  Certification</h3>
            </div>
            <div className='certification_detail_container'>
            <EducationCard educationData={certification}/>
            </div>
          </div>
        </div>
        
      </div>

    </section>
    
  )
}

export default Qualification