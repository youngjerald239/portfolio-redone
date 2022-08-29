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
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com/youngjerald239/Weather_App" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://jweather-app.netlify.app/" className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </article>
    </div>
    </section>
  )
}

export default Portfolio