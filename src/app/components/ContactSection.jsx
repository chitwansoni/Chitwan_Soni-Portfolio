"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending message...");
    
    const formData = new FormData(event.target);

    // स्टेप: अपनी Access Key यहाँ डालें
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Success! I will contact you soon.");
        event.target.reset();
      } else {
        setStatus("error");
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Check your internet connection.");
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050505] py-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-600 blur-[140px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 blur-[150px] opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-4 tracking-tight">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="text-center text-zinc-500 mb-14">Have a project? Send me a message directly to my mail.</p>

        <div className="max-w-2xl mx-auto border border-zinc-800 rounded-[30px] bg-zinc-900/20 backdrop-blur-md p-8 md:p-10 shadow-2xl">
          
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Hidden field to prevent SPAM */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }}></input>

            <div>
              <label className="block text-zinc-400 mb-2 ml-1 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 text-white outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-zinc-400 mb-2 ml-1 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="chitwan@example.com"
                className="w-full h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 text-white outline-none focus:border-cyan-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-zinc-400 mb-2 ml-1 text-sm">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Type your message here..."
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white outline-none resize-none focus:border-cyan-500 transition-all"
              ></textarea>
            </div>

            {/* Notification Message */}
            {result && (
              <div className={`p-4 rounded-lg text-center text-sm font-medium ${
                status === "success" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
              }`}>
                {result}
              </div>
            )}

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`flex items-center gap-3 px-12 py-4 rounded-xl text-black font-bold transition-all duration-300 ${
                  status === "sending" 
                  ? "bg-zinc-700 cursor-not-allowed" 
                  : "bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.03] active:scale-95"
                }`}
              >
                {status === "sending" ? "Sending..." : "Send to Chitwan"}
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}