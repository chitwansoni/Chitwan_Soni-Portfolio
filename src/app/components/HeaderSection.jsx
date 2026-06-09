import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export default function HeaderSection() {
  return (
    <section className="h-[700px] bg-black text-white relative overflow-hidden ">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7e22ce40,transparent_60%)]" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:110px_110px]" />

      {/* Navbar */}
{/* Navbar Container */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
  <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
    
    {/* Logo */}
    <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
      Chitwan<span className="text-white">.dev</span>
    </h2>

    {/* Navigation Links */}
    <ul className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
      <li>
        <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
      </li>
      <li>
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
      </li>
      <li>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
      </li>
      <li>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </li>
    </ul>

    {/* Mobile 'Hire Me' Button (Optional but looks professional) */}
    <a 
      href="#contact" 
      className="hidden md:block px-5 py-2 border border-cyan-500/50 text-cyan-400 rounded-full text-xs hover:bg-cyan-500 hover:text-black transition-all"
    >
      Hire Me
    </a>
  </div>
</nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-10 relative z-10 mt-[90px]">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-[62px] font-bold leading-tight">
              Hi, I&apos;m Chitwan Soni
            </h1>

            <h2 className="text-3xl lg:text-5xl font-bold mt-4 bg-gradient-to-r from-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
              Next js developer
            </h2>

            <p className="text-gray-400 mt-8 max-w-lg text-lg">
              Crafting modern, responsive, and user-friendly websites with
              passion and precision.
            </p>

            <div className="flex items-center gap-6 mt-10">
              <a
                href="/Chitwan_Resume.pdf" // Public folder mein rakhi file ka path
                download="Chitwan_Soni_Resume.pdf" // Download hone par file ka jo naam hoga
                className="inline-block"
              >
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:scale-105 transition">
                  Download Resume
                </button>
              </a>

              <div className="flex gap-6 items-center">
                {/* GitHub */}
                <a
                  href="https://github.com/chitwansoni" // यहाँ अपना Github लिंक डालें
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-zinc-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/chitwan-soni-31089128a" // यहाँ अपना LinkedIn लिंक डालें
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-zinc-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>

                {/* Email */}
                <a
                  href="mailto:chitwansoni2022@gmail.com"
                  className="text-2xl text-zinc-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center relative">
            <div className="absolute w-[380px] h-[380px] rounded-full bg-fuchsia-600 blur-[120px] opacity-40" />

            <div className="relative">
              <Image
                src="/home/developer.webp"
                alt="Profile"
                width={420}
                height={420}
                className="rounded-full object-cover border-4 border-fuchsia-500 shadow-[0_0_60px_rgba(217,70,239,0.5)]"
              />

              {/* Floating Icons */}
              <div
                className={`absolute -top-2 -left-4 w-14 h-14 rounded-full bg-black border border-green-500 flex items-center justify-center shadow-lg ${`float-animation`}`}
              >
                <img
                  src="/home/js_green.webp"
                  alt="React"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div
                className={`absolute top-8 -right-4 w-14 h-14 rounded-full bg-black border border-orange-500 flex items-center justify-center shadow-lg ${`float-animation`}`}
              >
                <img
                  src="/home/css.png"
                  alt="React"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div
                className={`absolute bottom-4 right-6 w-14 h-14 rounded-full bg-black border border-cyan-500 flex items-center justify-center shadow-lg ${`float-animation`}`}
              >
                <img
                  src="/home/nodejs-logo.svg"
                  alt="React"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
