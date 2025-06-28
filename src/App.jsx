import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    

     <div className="text-black bg-[#0F172A]  w-full h-screen  ">
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>


      
    
  )
}

export default App
