import React, { useEffect } from 'react'
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Testimonial from './components/testimonial/Testimonial'


const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return undefined

    sections.forEach((section) => section.classList.add('reveal-section'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Portfolio/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
