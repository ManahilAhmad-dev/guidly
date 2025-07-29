import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AISolutions from './components/AISolutions/AISolutions'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Exhibition from './components/Exhibition/Exhibition'
import FeatureSection from './components/FeatureSection/FeatureSection'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AISolutions/>
      <Testimonial/>
      <div className="container">
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
