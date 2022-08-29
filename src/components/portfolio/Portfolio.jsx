import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio 1',
    github: 'https://github.com/',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio 1',
    github: 'https://github.com/',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio 1',
    github: 'https://github.com/',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio 1',
    github: 'https://github.com/',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio 1',
    github: 'https://github.com/',
    demo: 'https://github.com'
  },
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio 1',
    github: 'https://github.com/',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My FullStack Portfolio</h5>
    <h3>Recent Work</h3>

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