 import React, { useEffect } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    // Initialize AOS for those smooth entrance animations
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="py-24 bg-slate-950 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Let's <span className="text-lime-400">Connect.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Info Side (Socials & Email) */}
          <div className="space-y-10" data-aos="fade-right">
            
            {/* Email Channel */}
            <div className="group">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Direct Channel</h3>
              <a 
                href="mailto:maposajaden47@gmail.com" 
                className="flex items-center gap-4 text-gray-300 hover:text-lime-400 transition-all duration-300"
              >
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-lime-400/50 group-hover:bg-lime-400/5 transition-all">
                  <Mail size={22} />
                </div>
                <span className="font-medium text-lg">maposajaden47@gmail.com</span>
              </a>
            </div>

            {/* Social Hub */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Social Hub</h3>
              <div className="flex gap-5">
                
                {/* GitHub Link - Updated to Codemonkey-API */}
                <a 
                  href="https://github.com/Codemonkey-API/taffles-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-lime-400/50 hover:text-lime-400 transition-all cursor-pointer relative z-50 group/icon shadow-lg"
                  title="Visit GitHub Repository"
                >
                  <Github size={22} className="group-hover/icon:scale-110 transition-transform" />
                </a>

                {/* LinkedIn Link - FIXED: Verified href */}
                <a 
                  href="https://www.linkedin.com/in/tafadzwa-dev-08681535b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer relative z-50 group/icon shadow-lg"
                  title="Visit LinkedIn Profile"
                >
                  <Linkedin size={22} className="group-hover/icon:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2" data-aos="fade-up">
            <form 
              className="bg-white/5 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-lime-400/20 transition-all"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Identifier</label>
                  <input 
                    type="text" 
                    placeholder="Jaden Denbo"
                    className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Digital Address</label>
                  <input 
                    type="email" 
                    placeholder="jaden@example.com"
                    className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all text-white placeholder:text-gray-600"
                  />
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Mission Details</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all text-white resize-none placeholder:text-gray-600"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-10 w-full py-5 bg-lime-400 text-black font-extrabold rounded-2xl hover:bg-lime-300 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg shadow-[0_0_20px_rgba(163,230,53,0.2)]"
              >
                <span>Transmit Mission</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}