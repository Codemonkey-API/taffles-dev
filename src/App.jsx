  import { useState, useEffect } from 'react'
import Header from './Header'
import Hero from './Hero.jsx'
import Projects from './Projects'
import About from './About.jsx'
import Contact from './contact.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

function App() {
  useEffect(() => {
    // Initialize Animations on Mount
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    // Changed bg-gray-100 to a deep slate to hide "white flashes" during scroll
    <div className="min-h-screen bg-[#020617] selection:bg-lime-400 selection:text-black">
      <Header />
      
      <main className="relative">
        {/* Global background glow for depth */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-lime-900/10 blur-[120px] rounded-full" />
        </div>

        <Hero />
        
        <div className="relative z-10">
          <Projects />
          <About />
          <Contact />
        </div>
      </main>

      {/* Simple Footer for the 'v24' Deploy */}
      <footer className="py-8 text-center border-t border-white/5 bg-black/20">
        <p className="text-gray-500 text-xs tracking-widest uppercase">
          © 2026 T Jaden Dembo • Optimized for 
          <span className="text-lime-400"> High Performance</span>
        </p>
      </footer>
    </div>
  )
}

export default App