import React from 'react'
import './nav.css'
import {FaUserAstronaut} from 'react-icons/fa'
import {MdLaptopChromebook, MdOutlineContactMail, MdAnimation} from 'react-icons/md'
import {GiGameConsole} from 'react-icons/gi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" className="nav_brand" aria-label="Jerald Young home">JY<span>®</span></a>
      <div className="nav_links">
        <a href="#about" title="About me" aria-label="About me" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/><span>About</span></a>
        <a href="#about" title="Skills and experience" aria-label="Skills and experience" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdLaptopChromebook/><span>Skills</span></a>
        <a href="#portfolio" title="Web projects" aria-label="Web projects" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/><span>Work</span></a>
        <a href="#services" title="Character animations" aria-label="Character animations" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdAnimation/><span>Motion</span></a>
        <a href="#testimonial" title="Games" aria-label="Games" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><GiGameConsole/><span>Games</span></a>
        <a href="#contact" title="Contact" aria-label="Contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/><span>Contact</span></a>
      </div>
      
    </nav>
  )
}

export default Nav