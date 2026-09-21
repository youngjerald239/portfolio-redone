import React from 'react'
import './nav.css'
import {FaHome, FaUserAstronaut} from 'react-icons/fa'
import {MdLaptopChromebook, MdOutlineContactMail, MdAnimation} from 'react-icons/md'
import {GiGameConsole} from 'react-icons/gi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
  <a href="#home" title="Home" aria-label="Home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FaHome/></a>
  <a href="#about" title="About me" aria-label="About me" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
  <a href="#experience" title="Skills and experience" aria-label="Skills and experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLaptopChromebook/></a>
  <a href="#portfolio" title="Web projects" aria-label="Web projects" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
  <a href="#services" title="Character animations" aria-label="Character animations" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdAnimation/></a>
  <a href="#testimonial" title="Games" aria-label="Games" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><GiGameConsole/></a>
  <a href="#contact" title="Contact" aria-label="Contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
      
    </nav>
  )
}

export default Nav