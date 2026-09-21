import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download résumé</a>
        <a href="#portfolio" className='btn btn-primary'>View selected work</a>
    </div>
  )
}

export default CTA