import React from 'react'
import './testimonial.css'
import GMG1 from '../../assets/game1.png'
import GMG2 from '../../assets/game2.png'
import GMG3 from '../../assets/game3.png'

const data = [
  {
    id: 1,
    image: GMG1,
    title: 'Kitty Crossing Arcade',
    github: 'https://github.com/youngjerald239/Kitty-Crossing-game',
    demo: 'https://kitty-crossing.netlify.app/'
  },
  {
    id: 2,
    image: GMG2,
    title: 'LutuKresh Card Battler',
    github: 'https://github.com/youngjerald239/cardbattle',
    demo: 'https://lutukresh.netlify.app/'
  },
  {
    id: 3,
    image: GMG3,
    title: 'JumpKat Platformer',
    github: 'https://github.com/youngjerald239/JumpKat',
    demo: 'https://youngjerald.itch.io/jumpkat'
  }
]

const Testimonial = () => {
  return (
    <section id='portfolio'>
    <h5>My GameDev Portfolio</h5>
    <h3>Checkout my recent Games!</h3>

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

export default Testimonial