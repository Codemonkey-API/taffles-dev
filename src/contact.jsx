 import React, { useEffect, useState } from "react";
import { Send, Mail, Github, Linkedin, CheckCircle2, Loader2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  // State for form handling
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    
    // REPLACE 'your_formspree_id' with the ID you got from Formspree
    const response = await fetch("https://formspree.io/f/xzddeyzo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });

    if (response.ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Mission Transmitted Successfully!" }
      });
      setInputs({ name: "", email: "", message: "" });
    } else {
      setStatus({
        info: { error: true, msg: "Transmission Failed. Please try again." }
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Let's <span className="text-lime-400">Connect.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-10" data-aos="fade-right">
            <div className="group">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Direct Channel</h3>
              <a href="mailto:maposajaden47@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-lime-400 transition-all duration-300">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-lime-400/50 group-hover:bg-lime-400/5 transition-all">
                  <Mail size={22} />
                </div>
                <span className="font-medium text-lg">maposajaden47@gmail.com</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Social Hub</h3>
              <div className="flex gap-5">
                <a href="https://github.com/Codemonkey-API/taffles-dev" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-lime-400/50 hover:text-lime-400 transition-all cursor-pointer relative z-50 group/icon shadow-lg">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/tafadzwa-dev-08681535b/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer relative z-50 group/icon shadow-lg">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2" data-aos="fade-up">
            {!status.submitted ? (
              <form className="bg-white/5 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-lime-400/20 transition-all" onSubmit={handleOnSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Identifier</label>
                    <input id="name" type="text" value={inputs.name} onChange={handleOnChange} required placeholder="Jaden Denbo" className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all text-white placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Digital Address</label>
                    <input id="email" type="email" value={inputs.email} onChange={handleOnChange} required placeholder="jaden@example.com" className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all text-white placeholder:text-gray-600" />
                  </div>
                </div>
                
                <div className="mt-8 space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Mission Details</label>
                  <textarea id="message" rows="5" value={inputs.message} onChange={handleOnChange} required placeholder="Tell me about your project..." className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition-all text-white resize-none placeholder:text-gray-600"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status.submitting}
                  className="mt-10 w-full py-5 bg-lime-400 text-black font-extrabold rounded-2xl hover:bg-lime-300 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50"
                >
                  {status.submitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Transmit Mission</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-lime-400/10 border border-lime-400/30 p-12 rounded-[2.5rem] flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-500">
                <CheckCircle2 size={60} className="text-lime-400" />
                <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                <p className="text-gray-400">Thank you, Jaden. I'll get back to you as soon as the signal clears.</p>
                <button 
                   onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                   className="text-lime-400 text-sm font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}