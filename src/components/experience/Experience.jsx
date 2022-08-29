import React from 'react'
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>Acquired Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                  </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>Bootsrap</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>TailWind</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>NextJs</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>ReactNative</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
        </div>

        <div className="experience_backend">
            <h3>Backend Development</h3>
             <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>Nodejs</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>Postman</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>Ruby</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheck className="experience_details-icon"/>
                <div>
                  <h4>Sanatra</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience_gamedev">

        </div>
      </div>
    </section>
  )
}

export default Experience