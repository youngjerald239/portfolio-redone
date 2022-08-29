import React from 'react'
import './testimonial.css'
import GMG1 from '../../assets/game1.png'
import GMG2 from '../../assets/game2.png'
import GMG3 from '../../assets/game3.png'
// Import Swiper React components
import {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/navigation'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: GMG1,
    title: 'Kitty Crossing Arcade',
    github: 'https://github.com/youngjerald239/Kitty-Crossing-game',
    demo: 'https://kitty-crossing.netlify.app/'
  },
  {
    id: 2,
    image: GMG2,
    title: 'LutuKresh Card Battler',
    github: 'https://github.com/youngjerald239/cardbattle',
    demo: 'https://lutukresh.netlify.app/'
  },
  {
    id: 3,
    image: GMG3,
    title: 'JumpKat Platformer',
    github: 'https://github.com/youngjerald239/JumpKat',
    demo: 'https://youngjerald.itch.io/jumpkat'
  }
]

const Testimonial = () => {
  return (
    <section id='portfolio'>
    <h5>My GameDev Portfolio</h5>
    <h2>Checkout my recent Games!</h2>
    <h5>Swipe to view more</h5>

    <Swiper className="container portfolio_container"
     modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <SwiperSlide key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className="btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Testimonial