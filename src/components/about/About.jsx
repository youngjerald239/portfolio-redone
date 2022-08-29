import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {GiAchievement, GiGameConsole} from 'react-icons/gi'
import {FaDev} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about-me"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <GiAchievement className='about_icon'/>
              <h5>Experience</h5>
              <small>1.5 years Fullstack Developing. Customer Service. Technical Support. 24-hour Banker experience. Smartphone troubleshooting experience. Home-Security device Troubleshooting(Vivint) Billing(smartphone,banking,home-security) SalesForce tools customer service experience</small>
            </article>
            <article className='about_card'>
              <FaDev className='about_icon'/>
              <h5>DevTools</h5>
              <small>Html(Intermediate) JavaScript(Intermediate) CSS(Intermediate) React(Intermediate) Python(Junior) Ruby(Junior) TailWind(Junior) NextJs(Junior)</small>
            </article>
            <article className='about_card'>
              <GiGameConsole className='about_icon'/>
              <h5>Video Game Developer</h5>
              <small>Pygame(Intermediate) Unity(Beginner) Unreal(Junior) Godot(Beginner)</small>
            </article>
          </div>
            <p>
              Bringing graphic design and customer service skills into my work as a full-stack developer, 
               I bring a diverse set of skills not many have. Collaborative and analytical,
               I provide a unique perspective and focus on the user in all of my projects.
            </p>

            <a href="#contact">Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About