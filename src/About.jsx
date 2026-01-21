 import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Terminal, Cpu, Rocket } from "lucide-react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("10rem");

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(
        isExpanded
          ? `${contentRef.current.scrollHeight}px`
          : "10rem"
      );
    }
  }, [isExpanded]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-950"
    >
      <div className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

        {/* Gradient Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime-400/10 via-transparent to-blue-500/10 blur-2xl rounded-3xl" />

        {/* System Status Bar */}
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            SYSTEM ONLINE
          </span>
          <span>Latency: ~280ms</span>
        </div>

        {/* Decorative Background Icon */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Terminal size={220} />
        </div>

        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
        >
          The <span className="text-lime-400">Engineer</span> Behind the Code
        </h2>

        {/* Expandable Content */}
        <div
          ref={contentRef}
          data-aos="fade-up"
          className="text-lg leading-relaxed mb-6 overflow-hidden transition-all duration-700 ease-in-out"
          style={{ maxHeight }}
        >
          <div className="space-y-4 text-gray-300">
            <p>
              I’m{" "}
              <span className="text-lime-400 font-extrabold tracking-tight">
                Tafadzwa "Jaden" Dembo
              </span>
              , a Full-Stack Engineer specializing in{" "}
              <span className="text-white font-semibold">
                cloud-native architectures
              </span>{" "}
              and high-performance mobile applications.
            </p>

            <p>
              My focus is on building{" "}
              <span className="text-white font-semibold">
                resilient infrastructure
              </span>
              . Whether it’s optimizing{" "}
              <span className="text-blue-400 font-medium">
                AWS Lambda
              </span>{" "}
              execution or engineering type-safe database schemas with{" "}
              <span className="text-blue-400 font-medium">
                Drizzle ORM
              </span>
              , I design systems that scale predictably under load.
            </p>

            <p>
              I recently architected a serverless orchestration layer using{" "}
              <span className="text-white font-mono text-sm">
                Hono.js
              </span>{" "}
              connected to{" "}
              <span className="text-white font-mono text-sm">
                Neon PostgreSQL
              </span>
              , consistently achieving sub-300ms latency for distributed task
              management workloads.
            </p>

            <p>
              I don’t just ship features — I own the pipeline, bridging{" "}
              <span className="text-lime-400 font-mono italic">
                React Native
              </span>{" "}
              frontend logic with backend architecture, CI/CD automation, and
              production reliability.
            </p>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={toggleExpanded}
          className="flex items-center gap-2 text-lime-400 font-bold hover:text-lime-300 transition-colors mb-12"
        >
          <span className="text-sm uppercase tracking-widest">
            {isExpanded ? "Hide Diagnostics" : "View System Diagnostics"}
          </span>
          <div
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            ↓
          </div>
        </button>

        {/* Skills Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[
            { name: "Serverless (AWS)", icon: <Rocket size={16} /> },
            { name: "PostgreSQL (Neon)", icon: <Cpu size={16} /> },
            { name: "Drizzle ORM", icon: <Terminal size={16} /> },
            { name: "React Native", icon: <Rocket size={16} /> },
            { name: "TypeScript", icon: <Code2 size={16} /> },
            { name: "Hono.js / Node", icon: <Terminal size={16} /> },
          ].map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className="p-4 bg-black/40 rounded-2xl border border-white/5
                         flex items-center gap-3
                         group hover:border-lime-400/50
                         hover:bg-black/60
                         transition-all cursor-default"
            >
              <span className="text-lime-500 group-hover:scale-110 transition-transform">
                {skill.icon}
              </span>
              <p className="font-semibold text-gray-300 text-sm">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Footer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-400 italic">
          “I don’t scale servers — I scale systems, habits, and feedback loops.”
        </div>
      </div>
    </section>
  );
};

export default About;
