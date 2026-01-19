import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Terminal, Cpu, Rocket } from "lucide-react"; 

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("10rem");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "10rem");
    }
  }, [isExpanded]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const fullText = (
    <div className="space-y-4 text-gray-300">
      <p>
        I’m <span className="text-lime-400 font-bold">Tafadzwa "Jaden" Dembo</span>, a Full-Stack Engineer specializing in 
        <span className="text-white"> cloud-native architectures</span> and high-performance mobile applications.
      </p>
      <p>
        My focus is on building **resilient infrastructure**. Whether it's optimizing 
        <span className="text-blue-400"> AWS Lambda</span> execution or engineering type-safe database schemas with 
        <span className="text-blue-400"> Drizzle ORM</span>, I build systems that scale.
      </p>
      <p>
        I recently architected a serverless orchestration layer using <span className="text-white font-mono text-sm">Hono.js</span> 
        linked to <span className="text-white font-mono text-sm">Neon PostgreSQL</span>, achieving sub-300ms latency for 
        distributed task management.
      </p>
      <p>
        I don't just ship features; I own the pipeline—bridging the gap between <span className="text-lime-400 font-mono italic">React Native</span> 
        frontend logic and complex backend DevOps.
      </p>
    </div>
  );

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Decorative "Code" Background element */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Terminal size={200} />
        </div>

        <h2 data-aos="fade-down" className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
          The <span className="text-lime-400">Engineer</span> Behind the Code
        </h2>

        <div
          ref={contentRef}
          data-aos="fade-up"
          className="text-lg leading-relaxed mb-6 overflow-hidden transition-all duration-700 ease-in-out"
          style={{ maxHeight }}
        >
          {fullText}
        </div>

        <button
          onClick={toggleExpanded}
          className="flex items-center gap-2 text-lime-400 font-bold hover:text-lime-300 transition-colors mb-12"
        >
          <span className="text-sm uppercase tracking-widest">{isExpanded ? "Collapse System" : "Read Full Logs"}</span>
          <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>↓</div>
        </button>

        {/* Skills grid with DevOps focus */}
        <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Serverless (AWS)", icon: <Rocket size={16}/> },
            { name: "PostgreSQL (Neon)", icon: <Cpu size={16}/> },
            { name: "Drizzle ORM", icon: <Terminal size={16}/> },
            { name: "React Native", icon: <Rocket size={16}/> },
            { name: "TypeScript", icon: <Code2 size={16}/> },
            { name: "Hono.js / Node", icon: <Terminal size={16}/> },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-black/40 rounded-2xl border border-white/5 flex items-center gap-3 group hover:border-lime-400/50 transition-all cursor-default"
            >
              <span className="text-lime-500 group-hover:scale-110 transition-transform">{skill.icon}</span>
              <p className="font-semibold text-gray-300 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;