import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaItchIo, FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/jerald-young-232aa720a/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/youngjerald239" target="blank"><BsGithub/></a>
        <a href="https://twitter.com/JeraldYoung19" target="blank"><FaTwitterSquare/></a>
        <a href="https://youngjerald.itch.io/" target="blank"><FaItchIo/></a>
    </div>
  )
}

export default HeaderSocials