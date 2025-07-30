import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AISolutions from './components/AISolutions/AISolutions'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Demos from './components/Demos/Demos'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Demos/>
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
