import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    // 'scroll-smooth' क्लास से क्लिक करने पर धीरे से स्क्रॉल होगा
    <main className="relative min-h-screen bg-black scroll-smooth">
      <HeaderSection /> {/* Navbar इसी के अंदर है */}
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </main>
  );
}