import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My FullStack Portfolio</h5>
    <h3>Recent Work</h3>

    <div className="container portfolio_container">
      <article className="portfolio_container">
        <div className="portfolio_image">
        <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/youngjerald239/Weather_App" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://jweather-app.netlify.app/" className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio_container">
        <div className="portfolio_image">
        <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/youngjerald239/Weather_App" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://jweather-app.netlify.app/" className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio_container">
        <div className="portfolio_image">
        <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/youngjerald239/Weather_App" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://jweather-app.netlify.app/" className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio_container">
        <div className="portfolio_image">
        <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/youngjerald239/Weather_App" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://jweather-app.netlify.app/" className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio_container">
        <div className="portfolio_image">
        <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/youngjerald239/Weather_App" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://jweather-app.netlify.app/" className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
    </div>
    </section>
  )
}

export default Portfolio