import React, {useState} from 'react';
import './skills.css'
import { Collapse } from '@mui/material';


const Skills = () => {

    const [isShowing, cardIsShowing] = useState(false)
    const [backendIsShowing, setBackendIsShowing] = useState(false)

    const displayCard = () => {
        cardIsShowing(!isShowing)
    }

    const displayBackend = () => {
        setBackendIsShowing(!backendIsShowing)
    }


  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Technologies</h2>
        <span className="section_subtitle">Expert proficiency</span>
        

        <div className="skills__container container grid">
            <div className="skills__content skills__close">
                <div className="skills__header" onClick={displayCard}>
                    <i className="uil uil-brackets-curly skills__icon"></i>

                    <div>
                        <h1 className="skills__title">Frontend development + SEO</h1>
                        <span className="skills__subtitle">With 4+ years of experience</span>
                    </div>

                    <i className={`uil uil-angle-down skills__arrow ${isShowing? 'rotate': ''}`}></i>
                </div>
                <Collapse in={isShowing} >
                    <div className="skills__list grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__html"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">CSS</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__css"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Bootstrap</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__bs"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Tailwind CSS</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__bs"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">SASS</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__bs"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__js"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">ReactJs</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__react"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">NextJs</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__bs"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">SEO Optimization</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__bs"></span>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className="skills__content skills__close">
                <div className="skills__header" onClick={displayBackend}>
                    <i class="uil uil-server-network-alt skills__icon"></i>

                    <div>
                        <h1 className="skills__title">Backend development</h1>
                        <span className="skills__subtitle">With 1+ years of experience</span>
                    </div>

                    <i className={`uil uil-angle-down skills__arrow ${displayBackend? 'rotate': ''}`}></i>
                </div>
                <Collapse in={isShowing} >
                    <div className="skills__list grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__html"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Flask</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__css"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">NodeJs</h3>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__bs"></span>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>

            {/* {       
              skills.map((group, index) => {
                return (
                  <SkillCard key={index} skillGroup={group} />
                )
              })
            } */}
           
        </div>
    </section>
  )
}

export default Skills