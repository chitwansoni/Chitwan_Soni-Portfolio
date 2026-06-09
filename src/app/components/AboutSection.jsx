import Image from "next/image";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaLightbulb,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="relative h-full md:h-[700px] bg-black text-white overflow-hidden py-20 md:pt-20  md:pb-60" >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full " />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:110px_110px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">
        {/* Heading */}
        <h2 className="text-center text-5xl font-bold md:mb-20">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center text-center md:text-left">
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-fuchsia-600 blur-[80px] opacity-50"></div>

              <Image
                src="/home/developer.webp"
                alt="About"
                width={420}
                height={420}
                className="relative hidden md:block rounded-full object-cover border-4 border-fuchsia-500"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-4xl font-bold text-fuchsia-500 mb-6">
              I&apos;m Chitwan Soni
            </h3>

            <p className="text-gray-300 leading-8 mb-4">
Web Developer skilled in Next.js, Tailwind CSS, Flutter, and Git, with
experience using Figma to turn designs into responsive, user-friendly web and
app interfaces. 
            </p>

            <p className="text-gray-300 leading-8 mb-10">
Focused on building high-performance, scalable applications with
modern frameworks, clean UI/UX, and cross-browser compatibility. Passionate
about continuous learning and efficient development.            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 border border-fuchsia-500 rounded-2xl px-6 py-5 bg-black/30">
                <FaLaptopCode className="text-fuchsia-500 text-2xl" />
                <span className="text-lg">
                  Web Application Development
                </span>
              </div>

              <div className="flex items-center gap-4 border border-fuchsia-500 rounded-2xl px-6 py-5 bg-black/30">
                <FaMobileAlt className="text-fuchsia-500 text-2xl" />
                <span className="text-lg">
                  Mobile Application Development
                </span>
              </div>

              <div className="flex items-center gap-4 border border-fuchsia-500 rounded-2xl px-6 py-5 bg-black/30">
                <FaLightbulb className="text-fuchsia-500 text-2xl" />
                <span className="text-lg">
                  Website & App UI/UX Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}