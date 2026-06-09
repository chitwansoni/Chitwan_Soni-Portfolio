"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaPlay } from "react-icons/fa";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("web");

  // यहाँ अपने प्रोजेक्ट के असली लिंक्स (URL) डालें
  const webProjects = [
    {
      title: "Collegesathi Official Website",
      image: "/home/collegesathi_web.png",
      description:
        "A clean, focused checkout UI for an e-commerce platform with responsive design.",
      repo: "https://github.com/yourusername/repo-name",
      demo: "https://collegesathi.com", // अपना लाइव वेबसाइट लिंक यहाँ डालें
    },
    {
      title: "EduEngine Dashboard",
      image: "/home/eduengine.jpg",
      description:
        "Clinic management dashboard with appointments, patient records and analytics.",
      repo: "https://github.com/yourusername/repo-name",
      demo: "https://www.linkedin.com/company/eduengine/posts/?feedView=all",
    },
    {
      title: "Minglebite Partner App",
      image: "/home/minglebite_app.png",
      description:
        "Professional business website with modern UI and responsive layout.",
      repo: "https://github.com/yourusername/repo-name",
      demo: "https://play.google.com/store/apps/details?id=com.eduengine.minglebite_partner&hl=en_NZ",
    },
  ];

  const mobileProjects = [
   
    {
      title: "Minglebite Partner App",
      image: "/home/minglebite_app.png",
      description:
        "Professional business website with modern UI and responsive layout.",
      repo: "https://github.com/yourusername/repo-name",
      demo: "https://minglebite.com",
    },
  ];

  const projects = activeTab === "web" ? webProjects : mobileProjects;

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-fuchsia-600 blur-[140px] opacity-30"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white mb-12">
          My Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-5 mb-16">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-8 py-3 rounded-full border transition ${
              activeTab === "web"
                ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-[0_0_25px_rgba(217,70,239,0.7)]"
                : "border-fuchsia-500 text-white"
            }`}
          >
            Web Application
          </button>

          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-8 py-3 rounded-full border transition ${
              activeTab === "mobile"
                ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-[0_0_25px_rgba(217,70,239,0.7)]"
                : "border-fuchsia-500 text-white"
            }`}
          >
            Mobile Application
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-fuchsia-500/30 rounded-3xl p-4 bg-black/40 backdrop-blur-sm hover:border-fuchsia-500/60 transition-all duration-300"
            >
              {/* Image with link */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </a>

              <h3 className="text-white text-xl font-semibold mt-5">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-7">
                {project.description}
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[16px] w-full bg-gradient-to-r from-purple-500 to-purple-400
                   text-white font-semibold px-5 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-[1.02] transition-all duration-300 active:scale-95"
                >
                  Live Preview
                  <FaPlay className="text-[14px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
