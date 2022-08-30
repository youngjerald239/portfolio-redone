import React from 'react'
import './nav.css'
import {FaHome, FaUserAstronaut} from 'react-icons/fa'
import {MdLaptopChromebook, MdOutlineContactMail} from 'react-icons/md'
import {GiGameConsole} from 'react-icons/gi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLaptopChromebook/></a>
      <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><GiGameConsole/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
    </nav>
  )
}

export default Nav