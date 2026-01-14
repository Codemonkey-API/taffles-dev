 import React from "react";
import { Download, ChevronRight, Terminal, Code2, Cpu } from "lucide-react";

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center py-12 md:py-20">
      
      {/* Background Glows - Adjusted for mobile performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 md:w-96 md:h-96 bg-lime-400/5 blur-[100px] md:blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div className="mb-6 md:mb-8 flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">System Online // v24.0.0</span>
        </div>

        {/* The Big Intro Box - Optimized padding and width for mobile */}
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl mb-8 md:mb-12 hover:border-lime-400/30 transition-all duration-500 group">
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-6">
            <span className="text-gray-600 font-light">&lt;</span>
            <span className="bg-gradient-to-r from-white via-blue-400 to-lime-400 bg-clip-text text-transparent">
              T Jaden Dembo
            </span>
            <span className="text-gray-600 font-light"> /&gt;</span>
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-lime-400 mb-4 md:mb-6 uppercase tracking-tight">
            Full-Stack Developer & DevOps Aspirant
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
            I’m a <span className="text-white font-bold">self-taught developer</span> focused on React and React Native. 
            I build apps that people actually love using—moving beyond the "Code Monkey" phase into 
            <span className="text-blue-400"> architecture and automation</span>. 
            Whether it's building a habit tracker from scratch or optimizing a Linux dev environment, 
            I believe in <span className="text-lime-400 font-bold">clean design, real-time progress, and shipping consistently.</span>
          </p>

          {/* Stats Grid - Switched to 2x2 on mobile, 4x1 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 md:pt-8 border-t border-white/10">
            <div className="flex flex-col items-center gap-1">
              <Code2 className="text-lime-400 mb-1" size={18} />
              <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Frontend</span>
              <span className="text-xs md:text-sm text-white font-mono">React / Native</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Terminal className="text-blue-400 mb-1" size={18} />
              <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Backend</span>
              <span className="text-xs md:text-sm text-white font-mono">Node / Express</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Cpu className="text-purple-400 mb-1" size={18} />
              <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">DevOps</span>
              <span className="text-xs md:text-sm text-white font-mono">EAS / Linux</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Download className="text-emerald-400 mb-1" size={18} />
              <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Status</span>
              <span className="text-xs md:text-sm text-white font-mono">Available</span>
            </div>
          </div>
        </div>

        {/* Action Buttons - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto group px-8 md:px-10 py-4 bg-lime-400 text-black font-bold rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:bg-lime-300 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <span>Launch Projects</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/T-Jaden-Dembo-CV.pdf"
            download
            className="w-full sm:w-auto group px-8 md:px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center justify-center gap-3 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500 group-hover:w-full group-hover:opacity-10 transition-all"></div>
            <Download size={20} className="text-blue-400 group-hover:animate-bounce" />
            <span>Fetch Curriculum Vitae</span>
          </a>
        </div>
      </div>
    </section>
  );
}