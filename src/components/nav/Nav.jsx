import React from 'react'
import './nav.css'
import {FaHome, FaUserAstronaut} from 'react-icons/fa'
import {MdLaptopChromebook, MdOutlineContactMail} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about"><FaUserAstronaut/></a>
      <a href="#experience"><MdLaptopChromebook/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><MdOutlineContactMail/></a>
      <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>
    </nav>
  )
}

export default Nav