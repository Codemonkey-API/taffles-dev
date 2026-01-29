import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Terminal, Cpu, Code2, Rocket, ShieldCheck } from "lucide-react";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("9rem");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(
        expanded
          ? `${contentRef.current.scrollHeight}px`
          : "9rem"
      );
    }
  }, [expanded]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-950"
    >
      <div className="relative max-w-5xl w-full bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime-400/10 via-transparent to-blue-500/10 blur-2xl" />

        {/* STATUS BAR */}
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            PROFILE ONLINE
          </span>
          <span>Region: Global · Mode: Production</span>
        </div>

        {/* Background Icon */}
        <div className="absolute top-0 right-0 p-10 opacity-[0.04]">
          <Terminal size={240} />
        </div>

        {/* HEADER */}
        <h2
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
        >
          SYSTEM <span className="text-lime-400">PROFILE</span>
        </h2>

        {/* COLLAPSIBLE SECTION */}
        <div
          ref={contentRef}
          data-aos="fade-up"
          className="overflow-hidden transition-all duration-700 ease-in-out"
          style={{ maxHeight }}
        >
          <div className="space-y-6 text-gray-300 text-[15px] leading-relaxed">

            {/* ROLE */}
            <div>
              <p className="text-xs font-mono text-lime-400 mb-1">ROLE</p>
              <p>
                Cloud-Native Software Engineer | DevOps-Focused Junior Engineer
                focused on{" "}
                <span className="text-white font-semibold">
                  resilient systems, predictable performance, and operational clarity
                </span>.
              </p>
            </div>

            {/* DESCRIPTION */}
            <div>
              <p className="text-xs font-mono text-lime-400 mb-1">DESCRIPTION</p>
              <p>
                I design and ship systems where frontend, backend, and infrastructure
                are treated as{" "}
                <span className="text-white font-semibold">
                  one continuous system
                </span>
                — not separate concerns.
              </p>
            </div>

            {/* VERIFIED WORK */}
            <div>
              <p className="text-xs font-mono text-lime-400 mb-2">
                VERIFIED OUTCOMES
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <ShieldCheck size={16} className="text-lime-400 mt-0.5" />
                  <span>
                    Serverless backends with{" "}
                    <span className="text-white font-mono text-sm">
                      Hono.js + Neon PostgreSQL
                    </span>{" "}
                    achieving sub-300ms latency.
                  </span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheck size={16} className="text-lime-400 mt-0.5" />
                  <span>
                    Offline-first React Native apps using SQLite with deterministic
                    sync behavior.
                  </span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheck size={16} className="text-lime-400 mt-0.5" />
                  <span>
                    Container-safe systems that survive restarts without data loss.
                  </span>
                </li>
              </ul>
            </div>

            {/* PRINCIPLES */}
            <div>
              <p className="text-xs font-mono text-lime-400 mb-2">
                OPERATING PRINCIPLES
              </p>
              <p className="italic text-gray-400">
                If it can’t be observed, restarted, or reasoned about — it’s not done.
              </p>
            </div>
          </div>
        </div>

        {/* EXPAND BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 flex items-center gap-2 text-lime-400 font-mono text-xs hover:text-lime-300 transition"
        >
          {expanded ? "▲ COLLAPSE PROFILE" : "▼ EXPAND PROFILE"}
        </button>

        {/* CORE CAPABILITIES (ALWAYS VISIBLE) */}
        <div className="mt-12">
          <p className="text-xs font-mono text-lime-400 mb-3">
            CORE CAPABILITIES
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>Cloud-native & serverless architectures</li>
            <li>Offline-first and low-latency system design</li>
            <li>Type-safe data modeling & deterministic state flows</li>
            <li>CI/CD ownership & deployment reliability</li>
            <li>Linux-first & containerized environments</li>
          </ul>
        </div>

        {/* STACK GRID */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Serverless / AWS", icon: <Rocket size={16} /> },
            { name: "PostgreSQL / Neon", icon: <Cpu size={16} /> },
            { name: "Drizzle ORM", icon: <Terminal size={16} /> },
            { name: "React / React Native", icon: <Code2 size={16} /> },
            { name: "Docker / Linux", icon: <Cpu size={16} /> },
            { name: "CI/CD Pipelines", icon: <Terminal size={16} /> },
          ].map((skill, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-black/40 border border-white/5
                         flex items-center gap-3
                         hover:border-lime-400/50 transition"
            >
              <span className="text-lime-400">{skill.icon}</span>
              <span className="text-sm text-gray-300 font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs font-mono text-gray-400">
          STATUS: Actively Shipping · Ownership: End-to-End · Reliability: Non-Negotiable
        </div>
      </div>
    </section>
  );
};

export default About;
