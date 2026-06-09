import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaAndroid,
  FaClock,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiKotlin,
  SiFlutter,
  SiDart,
  SiOpenai,
} from "react-icons/si";

import { GiBrain } from "react-icons/gi"; // For Problem Solving
import { MdAnalytics } from "react-icons/md"; // For Analytical Skills
import { HiUsers } from "react-icons/hi2"; // For Team Collaboration
import { BsStars } from "react-icons/bs"; // For Generative AI

const skills = [
  // Frontend & Design
  { icon: <FaHtml5 />, name: "HTML, CSS, JS", level: 10, color: "bg-orange-500" },
  { icon: <FaReact />, name: "Next.js, React.js", level: 9, color: "bg-cyan-400" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 9, color: "bg-sky-400" },
  { icon: <SiFigma />, name: "Figma", level: 7, color: "bg-pink-500" },

  // Mobile & Tools
  { icon: <SiKotlin />, name: "Android Studio [Kotlin]", level: 7, color: "bg-orange-600" },
  { icon: <SiFlutter />, name: "Flutter [Dart]", level: 6, color: "bg-blue-400" },
  { icon: <FaGitAlt />, name: "Version control [Git]", level: 8, color: "bg-orange-600" },

  // AI
  { icon: <SiOpenai />, name: "Ai prompting", level: 9, color: "bg-green-600" },
  { icon: <BsStars />, name: "Generative ai (basics)", level: 7, color: "bg-fuchsia-400" },

  // Soft Skills & Professional
  { icon: <MdAnalytics />, name: "Analytical Skills", level: 8, color: "bg-indigo-400" },
  { icon: <FaClock />, name: "Time Management", level: 9, color: "bg-red-400" },
  { icon: <HiUsers />, name: "Team collaboration", level: 9, color: "bg-emerald-500" },
];

export default function SkillsSection() {
  return (
    <section className="relative   h-full bg-black py-20 overflow-hidden mx-auto px-4">
      {/* Glow Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-fuchsia-500 blur-[100px] opacity-30"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:110px_110px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-0">
        <h2 className="text-center text-white text-5xl font-bold mb-20">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-40 gap-y-10">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="md:w-12 md:h-12 w-8 h-8 rounded-full border border-fuchsia-500 flex items-center justify-center text-2xl text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  {skill.icon}
                </div>
                <span className="text-gray-300 font-medium text-[14px] md:text-lg">{skill.name}</span>
              </div>

              {/* Skill Dots Indicator */}
              <div className="flex gap-2 ml-1">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className={`md:w-3 w-1 md:h-3 h-1 rounded-full transition-all duration-500 ${
                      i < skill.level
                        ? `${skill.color} shadow-[0_0_8px_rgba(255,255,255,0.3)]`
                        : "bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}