import React from 'react'
import './header.css'
import CTA from './CTA'
import ThemeToggle from '../theme/ThemeToggle'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header id="home">
        <div className="container header_container">
          <ThemeToggle />
          <div className="header_copy">
            <p className="eyebrow"><span></span> Available for select opportunities</p>
            <h1>Jerald Young</h1>
            <h2>Full-stack developer building thoughtful digital products.</h2>
            <p className="header_intro">I combine engineering, design, and a user-first mindset to turn ambitious ideas into clear, useful experiences.</p>
            <CTA />
          </div>
          <HeaderSocials />

          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header