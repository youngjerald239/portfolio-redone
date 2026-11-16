import React from 'react'
import './testimonial.css'
import GMG1 from '../../assets/game1.png'
import GMG2 from '../../assets/game2.png'
import GMG3 from '../../assets/game3.png'
import GMG4 from '../../assets/game4.png'
import GMG5 from '../../assets/game5.png'
import GMG6 from '../../assets/spellcasters-island.webp'

// The featured game gets the wide card at the top of the section.
const featured = {
  image: GMG6,
  title: "Spellcaster's Island",
  studio: 'Saturday Morning Games',
  status: 'Demo out now',
  description: 'A pixel-art island life RPG. Castaways on magical islands farm, craft, learn spells, fight bosses and sail between islands, with companions, romance, family and a magic school.',
  tags: ['Godot 4', 'GDScript', 'Pixel art'],
  // No GitHub link for this one, only the playable demo.
  demo: 'https://youngjerald.itch.io/spellcasters-island',
  demoLabel: 'Play the demo on itch.io'
}

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
  },
  {
    id: 4,
    image: GMG4,
    title: 'Rocket Ravens',
    github: 'https://github.com/youngjerald239/JavaScript_Shooter',
    demo: 'https://roketravens.netlify.app/'
  },
  {
    id: 5,
    image: GMG5,
    title: 'Shadow Runner',
    github: 'https://github.com/youngjerald239/runningGame',
    demo: 'https://shadowrunner.netlify.app/'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <div className="section_heading">
        <p className="eyebrow">Game development</p>
        <h2>Games I've made</h2>
        <p className="section_intro">From quick browser arcade games to the island RPG my studio is building now.</p>
      </div>

      <div className="container games_container">
        <article className="portfolio_item game_featured">
          <div className="portfolio_item-image">
            <img src={featured.image} alt={`${featured.title} screenshot`} className="pixel-art"/>
          </div>
          <div className="game_featured-body">
            <p className="portfolio_item-category">{featured.studio} · {featured.status}</p>
            <h3>{featured.title}</h3>
            <p className="game_item-description">{featured.description}</p>
            <ul className="game_item-tags">
              {featured.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="portfolio_item-cta">
              <a href={featured.demo} className="btn-primary" target="_blank" rel="noreferrer">{featured.demoLabel}</a>
            </div>
          </div>
        </article>

        {
          data.map(({id, image, title, github, demo}) => (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                {github && <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>}
                <a href={demo} className="btn-primary" target="_blank" rel="noreferrer">Play</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonial
