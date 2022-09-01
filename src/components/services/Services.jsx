import React from 'react'
import './services.css'
import AMG1 from '../../assets/Amg1.png'
import AMG2 from '../../assets/Amg2.png'
import AMG3 from '../../assets/Amg3.png'
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
    image: AMG1,
    title: 'Shadow Dog Animations: You can use the animate dropdown box to choose between many diffent animations.',
    github: 'https://github.com/youngjerald239/dog_animation',
    demo: 'https://shadowdog.netlify.app/',
  },
  {
    id: 2,
    image: AMG2,
    title: 'Parallax Animations:  The background has many layers scrolling across the screen at different speeds. Interact with the speed bar to increase, or decrease speed.',
    github: 'https://github.com/youngjerald239/2d_background',
    demo: 'https://movebgr.netlify.app/'
  },
  {
    id: 3,
    image: AMG3,
    title: 'Enemy Animations: One style oof enemy animations made to move around at random.',
    github: 'https://github.com/youngjerald239/npc_movement',
    demo: 'https://enempc.netlify.app/'
  }
]

const Services = () => {
  return (
    <section id='services'>
    <h5>My Character Animations</h5>
    <h2>Recent Character Animations!</h2>
    <h5>Swipe to view more</h5>

    <Swiper className="container portfolios_container"
     modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={2}
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
                <p></p>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Services