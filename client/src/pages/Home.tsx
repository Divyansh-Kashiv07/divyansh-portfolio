import { ThreeDBackground } from "@/components/ThreeDBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

/**
 * Home Page - 3D Portfolio
 * Design: Cyberpunk Minimalism with glassmorphism, neon accents, and 3D animations
 * Sections: Hero, About, Skills, Projects, Education, Contact
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
