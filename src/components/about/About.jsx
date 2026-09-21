import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {GiAchievement, GiGameConsole} from 'react-icons/gi'
import {FaDev} from 'react-icons/fa'

const skillGroups = [
  { title: 'Experience', icon: <GiAchievement className='about_icon'/>, items: ['Customer service', 'Graphic design', 'Frontend development', 'User-focused thinking'] },
  { title: 'DevTools', icon: <FaDev className='about_icon'/>, items: ['HTML & CSS', 'JavaScript', 'React & Next.js', 'Python & Ruby', 'Bootstrap & Tailwind'] },
  { title: 'Game development', icon: <GiGameConsole className='about_icon'/>, items: ['Python', 'Unreal Engine', 'Godot', 'Unity'] }
]

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
            {skillGroups.map(({title, icon, items}) => (
              <article className='about_card' key={title}>
                {icon}
                <h5>{title}</h5>
                <ul className="about_card-list">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
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