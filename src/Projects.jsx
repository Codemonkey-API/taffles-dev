 import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Terminal, Lightbulb, ShieldAlert, PlayCircle, X, Cpu } from "lucide-react";

// Image imports
import imgAbout from "./images/about.png";
import imgContact from "./images/contact.png";
import imgHero from "./images/hero.png";
import imgProjects from "./images/projects.png";

function ProjectCard({ title, description, tech = [], video = null, images = [], type = "Personal", caseStudy, isComingSoon = false }) {
  const [openModal, setOpenModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <article
      data-aos="fade-up"
      className={`flex flex-col h-full group relative bg-white/5 backdrop-blur-sm border rounded-3xl p-5 transition-all duration-500 
        ${isComingSoon ? 'border-blue-500/20 bg-blue-500/[0.02]' : 'border-white/10 hover:bg-white/[0.07] hover:border-lime-400/30'}`}
    >
      {/* Media Preview Section */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative aspect-video mb-6 rounded-2xl overflow-hidden bg-slate-900 border border-white/5 cursor-pointer"
        onClick={() => !isComingSoon && setOpenModal(true)}
      >
        <span className={`absolute top-3 right-3 z-20 text-[9px] uppercase tracking-tighter font-bold px-2 py-0.5 rounded shadow-lg 
          ${isComingSoon ? 'bg-blue-500 text-white' : 'bg-lime-400 text-black'}`}>
          {type}
        </span>
        
        {isComingSoon ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950">
             <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">System Pulling Images...</span>
             </div>
             <Cpu size={40} className="text-blue-500/10 animate-spin-slow" />
          </div>
        ) : video ? (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-30'}`}
          />
        ) : (
          <img
            src={images[0] || imgAbout}
            alt={title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700"
          />
        )}
        
        {!isHovered && video && !isComingSoon && (
           <div className="absolute inset-0 flex items-center justify-center text-white/20">
             <PlayCircle size={48} />
           </div>
        )}
      </div>

      {/* Header */}
      <div className="mb-4">
        <h3 className={`text-2xl font-bold mb-2 transition-colors ${isComingSoon ? 'text-blue-400' : 'text-white group-hover:text-lime-400'}`}>
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Case Study Integration (Visible on Card) */}
      <div className="mt-2 space-y-4 pt-4 border-t border-white/5 flex-grow font-sans">
        <div className="flex gap-3 text-left">
          <ShieldAlert size={16} className={`shrink-0 mt-1 ${isComingSoon ? 'text-blue-400/50' : 'text-red-400'}`} />
          <div>
            <p className={`text-[11px] uppercase font-bold tracking-wider mb-1 ${isComingSoon ? 'text-blue-400/50' : 'text-red-400'}`}>Challenge</p>
            <p className="text-gray-300 text-xs leading-relaxed">{caseStudy.problem}</p>
          </div>
        </div>
        
        <div className="flex gap-3 text-left">
          <Lightbulb size={16} className={`shrink-0 mt-1 ${isComingSoon ? 'text-blue-400/50' : 'text-lime-400'}`} />
          <div>
            <p className={`text-[11px] uppercase font-bold tracking-wider mb-1 ${isComingSoon ? 'text-blue-400/50' : 'text-lime-400'}`}>Solution</p>
            <p className="text-gray-300 text-xs leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>

        <div className={`p-3 rounded-xl border ${isComingSoon ? 'bg-blue-500/5 border-blue-500/10' : 'bg-white/5 border-white/5'}`}>
          <div className="flex items-center gap-2 mb-1">
            <Terminal size={14} className={isComingSoon ? 'text-blue-400' : 'text-blue-400'} />
            <p className={`text-[11px] uppercase font-bold tracking-wider ${isComingSoon ? 'text-blue-400' : 'text-blue-400'}`}>DevOps Outcome</p>
          </div>
          <p className="text-gray-400 text-[11px] leading-relaxed italic">{caseStudy.devops}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
        {tech.map((t) => (
          <span key={t} className="text-[9px] font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10 text-gray-400">
            {t}
          </span>
        ))}
        {!isComingSoon && (
          <button 
            onClick={() => setOpenModal(true)}
            className="ml-auto text-lime-400 hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
          </button>
        )}
      </div>

      {/* Focus Modal */}
      {openModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-10"
          onClick={() => setOpenModal(false)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-all"><X size={40}/></button>
          <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
             {video ? (
               <video src={video} controls autoPlay className="max-h-[85vh] w-full rounded-2xl shadow-2xl border border-white/10" />
             ) : (
               <img src={images[0]} className="max-h-[85vh] w-full object-contain rounded-2xl shadow-2xl" alt="Preview" />
             )}
          </div>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const portfolioData = [
    {
      title: "FocusFlow: Habit Tracker",
      description: "A high-performance React Native app featuring real-time streak tracking and SQLite persistence.",
      tech: ["React Native", "Expo", "SQLite", "EAS"],
      type: "Featured",
      video: "https://irmewedsmzdzjqhl.public.blob.vercel-storage.com/HabitWalkThrough.mp4", 
      caseStudy: {
        problem: "Users struggled with bloated tracking apps that failed to work reliably offline.",
        solution: "Engineered an offline-first SQLite synchronization layer for sub-50ms data persistence.",
        devops: "EAS-integrated pipeline reduced binary release cycles by 60% using automated OTA updates."
      },
    },
    {
      title: "Company Identity Suite",
      description: "Professional corporate website focused on performance and dynamic interactions.",
      tech: ["React", "Tailwind", "Framer Motion"],
      type: "Professional",
      video: "https://irmewedsmzdzjqhl.public.blob.vercel-storage.com/CompanySuit.mp4",
      caseStudy: {
        problem: "Client required high-end animations without sacrificing SEO or mobile load times.",
        solution: "Implemented hardware-accelerated Framer Motion components with dynamic code-splitting.",
        devops: "Configured Vercel Analytics and automated Lighthouse auditing via GitHub Actions."
      }
    },
    {
      title: "Cloud-Native Pipeline API",
      description: "Scalable backend architecture designed for automated CI/CD and container security.",
      tech: ["Docker", "Go", "Terraform", "PostgreSQL"],
      type: "DevOps / System",
      isComingSoon: true,
      caseStudy: {
        problem: "Managing manual deployments for microservices lead to configuration drift and downtime.",
        solution: "Currently architecting an Infrastructure-as-Code (IaC) approach using Terraform providers.",
        devops: "FUTURE STATE: Automated blue-green deployment strategies via Kubernetes Orchestration."
      }
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            SELECTED <span className="text-lime-400">WORKS_</span>
          </h2>
          <p className="text-gray-500 mt-4 font-mono">Exploring the intersection of code and infrastructure.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {portfolioData.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}