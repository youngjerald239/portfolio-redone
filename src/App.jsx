import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Testimonial from './components/testimonial/Testimonial'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
