 import React, { useEffect, useState } from "react";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  CheckCircle2,
  Loader2,
  Terminal
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
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
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const handleOnChange = (e) => {
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
    setStatus((prev) => ({ ...prev, submitting: true }));

    const response = await fetch("https://formspree.io/f/xzddeyzo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs)
    });

    if (response.ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Transmission successful" }
      });
      setInputs({ name: "", email: "", message: "" });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Transmission failed" }
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime-400/10 via-transparent to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Establish <span className="text-lime-400">Connection</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Open channel for collaborations, opportunities, or just a good
            technical conversation. Signals are monitored.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-14 items-start">
          {/* Left Panel */}
          <div className="space-y-12" data-aos="fade-right">
            {/* Status */}
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              SECURE CHANNEL ONLINE
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">
                Direct Link
              </h3>
              <a
                href="mailto:maposajaden47@gmail.com"
                className="group flex items-center gap-4 text-gray-300 hover:text-lime-400 transition"
              >
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-lime-400/50 group-hover:bg-lime-400/5 transition">
                  <Mail size={22} />
                </div>
                <span className="font-medium text-lg">
                  maposajaden47@gmail.com
                </span>
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">
                External Nodes
              </h3>
              <div className="flex gap-5">
                <a
                  href="https://github.com/Codemonkey-API/taffles-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-lime-400/50 hover:text-lime-400 transition shadow-lg"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tafadzwa-dev-08681535b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition shadow-lg"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2" data-aos="fade-up">
            {!status.submitted ? (
              <form
                onSubmit={handleOnSubmit}
                className="relative bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[2.8rem] border border-white/10 shadow-2xl overflow-hidden"
              >
                {/* Decorative Icon */}
                <div className="absolute top-6 right-6 opacity-5">
                  <Terminal size={160} />
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                      Identifier
                    </label>
                    <input
                      id="name"
                      value={inputs.name}
                      onChange={handleOnChange}
                      required
                      placeholder="Your name"
                      className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none text-white placeholder:text-gray-600 transition"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                      Return Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={inputs.email}
                      onChange={handleOnChange}
                      required
                      placeholder="you@domain.com"
                      className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none text-white placeholder:text-gray-600 transition"
                    />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                    Transmission Payload
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={inputs.message}
                    onChange={handleOnChange}
                    required
                    placeholder="Describe the mission..."
                    className="w-full p-4 bg-black/40 rounded-xl border border-white/10 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none text-white resize-none placeholder:text-gray-600 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="mt-10 w-full py-5 bg-lime-400 text-black font-extrabold rounded-2xl hover:bg-lime-300 hover:scale-[1.01] active:scale-95 transition flex items-center justify-center gap-3 text-lg disabled:opacity-50"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Transmitting…
                    </>
                  ) : (
                    <>
                      Transmit Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-lime-400/10 border border-lime-400/30 p-14 rounded-[2.8rem] flex flex-col items-center text-center space-y-5 animate-in zoom-in-95 duration-500">
                <CheckCircle2 size={64} className="text-lime-400" />
                <h3 className="text-3xl font-extrabold text-white">
                  Signal Received
                </h3>
                <p className="text-gray-400 max-w-md">
                  Your message landed safely. I’ll respond as soon as the
                  channel clears.
                </p>
                <button
                  onClick={() =>
                    setStatus({
                      submitted: false,
                      submitting: false,
                      info: { error: false, msg: null }
                    })
                  }
                  className="text-lime-400 text-sm font-bold hover:underline"
                >
                  Send another transmission
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
