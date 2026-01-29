import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ExternalLink,
  Terminal,
  Lightbulb,
  ShieldAlert,
  PlayCircle,
  X,
  Cpu,
} from "lucide-react";

// Images
import imgAbout from "./images/about.png";
import imgProjects from "./images/task.png";

function ProjectCard({
  title,
  description,
  tech = [],
  metrics = [],
  video = null,
  images = [],
  type = "Personal",
  caseStudy,
  isComingSoon = false,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) videoRef.current.play().catch(() => {});
      else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <article
      data-aos="fade-up"
      className={`flex flex-col h-full group relative bg-white/5 backdrop-blur-sm border rounded-3xl p-5 transition-all duration-500
      ${
        isComingSoon
          ? "border-blue-500/20 bg-blue-500/[0.02]"
          : "border-white/10 hover:bg-white/[0.07] hover:border-lime-400/30"
      }`}
    >
      {/* Media */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => !isComingSoon && setOpenModal(true)}
        className="relative aspect-video mb-6 rounded-2xl overflow-hidden bg-slate-900 border border-white/5 cursor-pointer"
      >
        {/* Status */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1 items-end">
          <span
            className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded shadow-lg
            ${isComingSoon ? "bg-blue-500 text-white" : "bg-lime-400 text-black"}`}
          >
            {type}
          </span>

          {!isComingSoon && (
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/60 text-lime-300 border border-lime-400/20">
              ● Production Ready
            </span>
          )}
        </div>

        {isComingSoon ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950">
            <Cpu size={42} className="text-blue-500/20 animate-spin-slow" />
            <p className="mt-3 text-xs font-mono text-blue-400">
              System Pulling Assets…
            </p>
          </div>
        ) : video ? (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-all duration-500 rounded-xl ${
              isHovered ? "opacity-100 scale-105" : "opacity-30"
            }`}
          />
        ) : (
          <img
            src={images[0] || imgAbout}
            alt={title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 rounded-xl"
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
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-lime-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Metrics */}
      {metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {metrics.map((m) => (
            <span
              key={m}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-lime-400/10 text-lime-300 border border-lime-400/20"
            >
              {m}
            </span>
          ))}
        </div>
      )}

      {/* Case Study */}
      <div className="space-y-4 pt-4 border-t border-white/5 flex-grow">
        <div className="flex gap-3">
          <ShieldAlert size={16} className="text-red-400 mt-1" />
          <div>
            <p className="text-[11px] uppercase font-bold text-red-400 mb-1">
              Challenge
            </p>
            <p className="text-gray-300 text-xs">{caseStudy.problem}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Lightbulb size={16} className="text-lime-400 mt-1" />
          <div>
            <p className="text-[11px] uppercase font-bold text-lime-400 mb-1">
              Solution
            </p>
            <p className="text-gray-300 text-xs">{caseStudy.solution}</p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <Terminal size={14} className="text-blue-400" />
            <p className="text-[11px] uppercase font-bold text-blue-400">
              DevOps Outcome
            </p>
          </div>
          <p className="text-gray-400 text-[11px] italic flex gap-2">
            <span className="text-lime-400 font-bold">✔ VERIFIED</span>
            {caseStudy.devops.replace("VERIFIED:", "")}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[9px] font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10 text-gray-400"
          >
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

      {/* Modal */}
      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 rounded-3xl cursor-pointer"
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white">
            <X size={40} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[75vh] flex items-center justify-center"
          >
            {video ? (
              <video
                src={video}
                controls
                autoPlay
                className="w-full max-h-[70vh] object-contain rounded-2xl border border-white/10"
              />
            ) : (
              <img
                src={images[0]}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
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
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const portfolioData = [
    {
      title: "FocusFlow: Habit Tracker",
      description:
        "A high-performance React Native app featuring real-time streak tracking and offline-first SQLite persistence.",
      tech: ["React Native", "Expo", "SQLite", "EAS"],
      metrics: ["Offline-first", "<50ms local writes", "OTA updates"],
      type: "Featured",
      video:
        "https://irmewedsmzdzjqhl.public.blob.vercel-storage.com/HabitWalkThrough.mp4",
      caseStudy: {
        problem:
          "Users struggled with bloated habit trackers that failed offline.",
        solution:
          "Engineered an offline-first SQLite sync layer with deterministic state updates.",
        devops:
          "VERIFIED: EAS-integrated pipeline reduced release cycles by 60% via automated OTA updates.",
      },
    },
    {
      title: "Company Identity Suite",
      description:
        "Professional corporate website optimized for performance and animation-heavy interactions.",
      tech: ["React", "Tailwind", "Framer Motion"],
      metrics: ["Lighthouse 95+", "SEO-safe motion"],
      type: "Professional",
      video:
        "https://irmewedsmzdzjqhl.public.blob.vercel-storage.com/CompanySuit.mp4",
      caseStudy: {
        problem:
          "Client required premium animations without sacrificing SEO or load speed.",
        solution:
          "Used hardware-accelerated Framer Motion with dynamic code-splitting.",
        devops:
          "VERIFIED: Automated Lighthouse audits and analytics via GitHub Actions + Vercel.",
      },
    },
    {
      title: "Task Orchestrator API",
      description:
        "Production-ready serverless backend using Hono.js and Neon Postgres.",
      tech: ["Hono.js", "Serverless", "Neon", "Drizzle", "TypeScript"],
      metrics: ["<300ms latency", "Serverless scale", "Type-safe ORM"],
      type: "Production Backend",
       video:
        "https://irmewedsmzdzjqhl.public.blob.vercel-storage.com/task-orch.mp4",
      caseStudy: {
        problem:
          "Need for cost-efficient, auto-scaling backend without server overhead.",
        solution:
          "Integrated Hono.js with Drizzle ORM on serverless Neon Postgres.",
        devops:
          "VERIFIED: Executed cloud DB writes with <300ms latency via serverless proxy.",
      },
    },
    {
      title: "Live-Ops Command Center",
      description:
        "Production-grade infrastructure monitoring and telemetry dashboard with container resilience and real-time health awareness.",
      tech: [
        "React",
        "Node.js",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Linux",
        "Telemetry",
      ],
      metrics: [
        "Restart-safe",
        "Containerized",
        "Latency tracking",
        "Health probes",
      ],
      type: "Infrastructure",
       video:
        "https://irmewedsmzdzjqhl.public.blob.vercel-storage.com/live-ops.mp4",
      caseStudy: {
        problem:
          "Lack of real-time visibility into service health and container-level failures.",
        solution:
          "Built a full-stack live-ops dashboard with stateless APIs, polling-based telemetry, and persistent Docker volumes.",
        devops:
          "VERIFIED: Services survive restarts while preserving telemetry using Docker volumes and stateless design.",
      },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            SELECTED <span className="text-lime-400">WORKS_</span>
          </h2>
          <p className="text-gray-500 mt-4 font-mono flex items-center gap-3">
            Exploring the intersection of code and infrastructure.
            <span className="flex items-center gap-1 text-lime-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              Actively Shipping
            </span>
          </p>
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
