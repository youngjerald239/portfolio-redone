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
    title: 'Shadow Dog Animations',
    description: 'Pick an animation from the dropdown to switch between many different moves.',
    github: 'https://github.com/youngjerald239/dog_animation',
    demo: 'https://shadowdog.netlify.app/',
  },
  {
    id: 2,
    image: AMG2,
    title: 'Parallax Animations',
    description: 'Background layers scroll at different speeds. Drag the speed bar to speed it up or slow it down.',
    github: 'https://github.com/youngjerald239/2d_background',
    demo: 'https://movebgr.netlify.app/'
  },
  {
    id: 3,
    image: AMG3,
    title: 'Enemy Animations',
    description: 'Enemies that wander the screen in random movement patterns.',
    github: 'https://github.com/youngjerald239/npc_movement',
    demo: 'https://enempc.netlify.app/'
  }
]

const Services = () => {
  return (
    <section id='services'>
    <div className="section_heading">
      <p className="eyebrow">Motion</p>
      <h2>Character animations</h2>
      <p className="section_intro">Sprite and parallax experiments built in JavaScript.</p>
    </div>

    <Swiper className="container portfolios_container"
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 18 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      pagination={{ clickable: true }}>
      {
        data.map(({id, image, title, description, github, demo}) =>{
          return (
            <SwiperSlide key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <p className="portfolio_item-description">{description}</p>
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

export default Services