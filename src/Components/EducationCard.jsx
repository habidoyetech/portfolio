import React from 'react'

export const EducationCard = (props) => {
  return (
    <div className='education'>
      {props.educationData.map((data, index)=> {
        return (
          <div key={index} className='education_card'>
            <h2 className='education_degree'>{data.degree}</h2>
            <h5 className='education_school'>{data.school}</h5>
            <p>{data.year}</p>
          </div>
        )
      })}

    </div>
  )
}

export const ExperienceCard = (props) => {
  return (
    <div className='education'>
      {props.educationData.map((data, index)=> {
        return (
          <div key={index} className='education_card'>
            <h2 className='education_degree'>{data.role}</h2>
            <h5 className='education_school'>{data.company}</h5>
            <p>{data.date}</p>
          </div>
        )
      })}

    </div>
  )
}