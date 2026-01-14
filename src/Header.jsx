 import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './assets/logo-T-full.svg';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // DevOps touch: Add a scroll listener to change header opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Refresh AOS so animations trigger again after scroll
    setTimeout(() => AOS.refresh(), 200);
    setOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'top-2' : 'top-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 px-6 py-3 rounded-full border border-white/10 transition-all duration-300 ${
          scrolled ? 'bg-black/60 backdrop-blur-md shadow-2xl' : 'bg-gray-900/40 backdrop-blur-sm'
        }`}>
          {/* Logo Section */}
          <button onClick={() => scrollToSection('home')} className="flex items-center group">
            <img
              src={logo}
              alt="T Jaden Dembo logo"
              className="h-10 w-auto rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]"
            />
          </button>

          {/* Desktop Nav: Professional & Clean */}
          <nav className="hidden md:flex items-center gap-2">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 rounded-full text-sm text-gray-300 font-medium capitalize transition-all hover:bg-white/5 hover:text-lime-400 focus:ring-1 focus:ring-lime-400/50"
              >
                {item}
              </button>
            ))}
            {/* DevOps Badge for your 24th! */}
            <div className="ml-4 px-3 py-1 bg-lime-400/10 border border-lime-400/20 rounded-full">
              <span className="text-[10px] font-bold text-lime-400 tracking-tighter uppercase">v24.0.0 Deploy</span>
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-full text-gray-200 hover:bg-white/10 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-3 bg-black/80 backdrop-blur-xl rounded-3xl border border-white/5 p-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
            {['home', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block py-4 px-4 text-gray-200 font-semibold hover:text-lime-400 w-full text-left border-b border-white/5 last:border-0"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}