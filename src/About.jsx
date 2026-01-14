 import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Terminal, Cpu, Rocket } from "lucide-react"; // Icons for that dev feel

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("10rem");

  useEffect(() => {
    // We already initialized AOS in App.jsx, but keeping it here as a fallback is fine
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "10rem");
    }
  }, [isExpanded]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // Professionalized the bio to focus on results and DevOps growth
  const fullText = (
    <div className="space-y-4 text-gray-300">
      <p>
        I’m <span className="text-lime-400 font-bold">Tafadzwa "Jaden" Dembo</span>, an engineer who thrives where 
        hardware limits meet software possibilities.
      </p>
      <p>
        My journey is built on discipline. While self-teaching the MERN stack and React Native, I’ve learned that 
        true development isn't just about writing code—it's about managing the entire pipeline.
      </p>
      <p>
        Recently, I’ve been deep in the trenches with <span className="text-blue-400">Expo and EAS</span>, successfully 
        bridging native Android modules like <span className="text-white font-mono text-sm">expo-sharing</span> for local 
        backups.
      </p>
      <p>
        I don't make excuses for hardware constraints. I optimize. I ship. One bug at a time.
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
            { name: "React Native", icon: <Rocket size={16}/> },
            { name: "DevOps (EAS)", icon: <Cpu size={16}/> },
            { name: "TypeScript", icon: <Code2 size={16}/> },
            { name: "Node.js", icon: <Terminal size={16}/> },
            { name: "Tailwind CSS", icon: <Code2 size={16}/> },
            { name: "Native Modules", icon: <Cpu size={16}/> },
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