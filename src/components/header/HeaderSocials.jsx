import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaItchIo, FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/jerald-young-232aa720a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin/></a>
        <a href="https://github.com/youngjerald239" target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub/></a>
        <a href="https://twitter.com/JeraldYoung19" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitterSquare/></a>
        <a href="https://youngjerald.itch.io/" target="_blank" rel="noreferrer" aria-label="itch.io"><FaItchIo/></a>
    </div>
  )
}

export default HeaderSocials