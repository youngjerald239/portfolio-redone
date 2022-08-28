import React from 'react'
import './nav.css'
import {FaHome, FaUserAstronaut} from 'react-icons/fa'
import {MdLaptopChromebook, MdOutlineContactMail} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome/></a>
      <a href="#about"><FaUserAstronaut/></a>
      <a href="#experience"><MdLaptopChromebook/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><MdOutlineContactMail/></a>
      <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>
    </nav>
  )
}

export default Nav