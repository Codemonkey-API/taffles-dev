import React from "react";
import { Download, ChevronRight, Terminal, Code2, Cpu } from "lucide-react";

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden py-12 md:py-20">

      {/* Neon Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-16 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-16 w-72 h-72 md:w-96 md:h-96 bg-lime-400/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center text-center">

        {/* Status Badge */}
        <div className="mb-6 flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-70"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">
            System Online // v26.0.0 Deploy
          </span>
        </div>

        {/* Main Hero Box */}
        <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,255,200,0.15)] hover:shadow-[0_25px_80px_rgba(0,255,200,0.25)] transition-all duration-700 group">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">
            <span className="text-gray-500 font-light">&lt;</span>
            <span className="bg-gradient-to-r from-white via-blue-400 to-lime-400 bg-clip-text text-transparent">
              T. Jaden Dembo
            </span>
            <span className="text-gray-500 font-light"> /&gt;</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-lime-400 mb-6 uppercase tracking-wide">
            Full-Stack Developer & DevOps Aspirant
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            <span className="text-white font-bold">Self-taught dev</span> obsessed with React, automation, and clean architecture. 
            I craft apps people love—from habit trackers to Linux dev environments—focusing on 
            <span className="text-lime-400 font-bold"> real-time progress & sleek design.</span>
          </p>

          {/* Skills / Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5 md:pt-8 border-t border-white/10">
            {[
              { icon: <Code2 size={20} className="text-lime-400" />, label: "Frontend", desc: "React / Native" },
              { icon: <Terminal size={20} className="text-blue-400" />, label: "Backend", desc: "Node / Express" },
              { icon: <Cpu size={20} className="text-purple-400" />, label: "DevOps", desc: "EAS / Linux" },
              { icon: <Download size={20} className="text-emerald-400" />, label: "Status", desc: "Available" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-300">
                {item.icon}
                <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">{item.label}</span>
                <span className="text-xs md:text-sm text-white font-mono">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 mt-7">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="group relative w-full sm:w-auto px-8 py-3 bg-lime-400 text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:scale-105 transition-transform flex items-center justify-center gap-2 overflow-hidden"
          >
            Launch Projects
            <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>

          <a
            href="/T-Jaden-Dembo-CV.pdf"
            download
            className="group relative w-full sm:w-auto px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500 group-hover:w-full group-hover:opacity-20 transition-all duration-500"></div>
            <Download size={20} className="text-blue-400 group-hover:animate-bounce" />
            Fetch CV
          </a>
        </div>

      </div>
    </section>
  );
}
