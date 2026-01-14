 import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Layers, Play, Smartphone } from "lucide-react";

// Corrected Paths from your 'find' command
import imgAbout from "./images/about.png";
import imgContact from "./images/contact.png";
import imgHero from "./images/hero.png";
import imgProjects from "./images/projects.png";
import habitVideo from "./images/HabitWalkThrough.mp4"; 

// ... (imports remain the same as previous)

function ProjectCard({ title, description, tech = [], href = "#", images = [], video = null, type = "Personal" }) {
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const hasImages = Array.isArray(images) && images.length > 0;

  // Video hover logic
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-lime-400/50 hover:-translate-y-2"
    >
      <span className="absolute top-4 right-4 z-30 text-[10px] uppercase tracking-widest font-bold bg-lime-400 text-black px-2 py-1 rounded shadow-lg">
        {type}
      </span>

      {/* Card Preview Media */}
      <div className="relative aspect-video mb-6 rounded-xl overflow-hidden bg-slate-900 border border-white/5 shadow-inner">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-40'}`}
          />
        ) : hasImages ? (
          <img
            src={images[index]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-700">
            <Layers size={40} />
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span key={t} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => setOpenModal(true)}
        className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-lime-400 hover:text-black transition-all flex items-center justify-center gap-2"
      >
        <span>{video ? "Watch Walkthrough" : "View Gallery"}</span>
        <ExternalLink size={14} />
      </button>

      {/* MODAL: Fixed to render Video or Image */}
      {openModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-10 animate-in fade-in">
          <button 
            onClick={() => setOpenModal(false)} 
            className="absolute top-8 right-8 text-white hover:text-lime-400 text-4xl font-light z-[110]"
          >
            ×
          </button>
          
          <div className="max-w-5xl w-full flex flex-col items-center">
             {video ? (
               // If there's a video, render the player in the modal
               <video 
                 src={video} 
                 controls 
                 autoPlay 
                 className="max-h-[80vh] w-full rounded-2xl shadow-2xl" 
               />
             ) : (
               // Otherwise, render the image gallery
               <img 
                 src={images[index]} 
                 className="max-h-[80vh] w-full object-contain rounded-2xl shadow-2xl" 
                 alt="Preview" 
               />
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
      video: habitVideo, // Your mp4 walkthrough
      images: [imgHero], // Fallback
    },
    {
      title: "Company Identity Suite",
      description: "A professional corporate website built for a business client, focusing on performance and SEO.",
      tech: ["React", "Tailwind", "Framer Motion"],
      type: "Professional",
      video: null,
      images: [imgProjects, imgAbout, imgContact], // Fixed these images
    },
    {
      title: "DevOps Pipeline API",
      description: "Backend microservice for JWT security and automated testing.",
      tech: ["Node", "Express", "Jest", "JWT"],
      type: "Backend",
      href: "https://github.com/tafadzwajdembo",
      images: [imgAbout], 
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Selected <span className="text-lime-400">Works.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}