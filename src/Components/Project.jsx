import {GoPrimitiveDot} from 'react-icons/go'

const Project = (props) => {
  return (
    <div className='project_container'>
      {
        props.projects.map((project, index) => {
          return (
            <article key={index} className="row project">
              <div className="project-details">
                <h5 className="project-title">{project.title}</h5>
                <div className="p-details-description">
                  <i> <GoPrimitiveDot/></i>
                  <span className='pd p-type'>{project.type}</span>
                  <i> <GoPrimitiveDot/></i>
                  <span className='pd p-year'>{project.year}</span>
                </div>
                <p className='p-description'>{project.description}</p>
                <div className='p-stack'>
                  {project.stacks.map((stack, index) => {
                    return (
                      <span key={index} className='t-stack'>{stack}</span>
                    )
                  })}
                </div>
                <div className='p-links'>
                  {project.links.map((link, index) => {
                    return (
                      <a key={index} target='_blank' rel='noreferrer' href={link.url}>{link.type}</a>
                    )
                  })}
                </div>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Project