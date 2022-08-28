import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/jerald-young-232aa720a/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/youngjerald239" target="blank"><BsGithub/></a>
        <a href="https://youngjerald.itch.io/" target="blank"></a>
    </div>
  )
}

export default HeaderSocials