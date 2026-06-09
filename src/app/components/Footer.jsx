import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-fuchsia-500/20">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#a855f720,transparent_60%)]" />

      <div className="relative z-10 max-w-full md:max-w-7xl mx-auto md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-fuchsia-500">
              Chitwan&lt;/&gt;
            </h2>
            <p className="text-gray-400 mt-2 text-sm">Next js Developer</p>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 text-gray-300">
            <li>
              <a href="#home" className="hover:text-fuchsia-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-fuchsia-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-fuchsia-400 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-fuchsia-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-fuchsia-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/chitwansoni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chitwan-soni-31089128a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            {/* Email */}
            <a
              href="mailto:chitwansoni2022@gmail.com"
              className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <FaEnvelope className="text-lg" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919352300676" // 91 इंडिया का कोड है, जिससे लिंक सही काम करेगा
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-fuchsia-500/10 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Chitwan Soni. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
