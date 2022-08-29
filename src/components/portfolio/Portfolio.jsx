import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Weather App',
    github: 'https://github.com/youngjerald239/Weather_App',
    demo: 'https://jweather-app.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'MyRume Social App',
    github: 'https://github.com/youngjerald239/MyRume-App',
    demo: 'https://myrume-d26d4.firebaseapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TechFlix streaming App',
    github: 'https://github.com/youngjerald239/techFlix',
    demo: 'https://techflix-a72fb.web.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chattable Social App',
    github: 'https://github.com/youngjerald239/Chattable-app',
    demo: 'https://chattable-ebfbb.web.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'The Kat & KaPoodle App',
    github: 'https://github.com/youngjerald239/Petcareapp-frontend',
    demo: 'https://pet-care2.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Pokedex App',
    github: 'https://github.com/youngjerald239/Pokedex',
    demo: 'https://jerald-pokedex.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My FullStack Portfolio</h5>
    <h2>Recent Work</h2>

    <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default Portfolio