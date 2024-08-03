import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Impact from './Components/Impact/Impact'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Impact />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App