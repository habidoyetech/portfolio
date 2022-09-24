import React from 'react'

const EducationCard = (props) => {
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

export default EducationCard