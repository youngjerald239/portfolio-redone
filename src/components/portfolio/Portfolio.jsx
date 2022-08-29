import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My FullStack Portfolio</h5>
    <h3>Recent Work</h3>

    <div className="container portfolio_container"></div>
    <h3>This is a portfolio item title</h3>
    <a href="https://github.com/youngjerald239" className="btn" target='_blank'>Github</a>
    <a href="https://github.com/youngjerald239" className="btn-primary" target='_blank'>Live Demo</a>
    </section>
  )
}

export default Portfolio