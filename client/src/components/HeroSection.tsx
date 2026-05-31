import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

/**
 * Hero Section Component
 * Design: Cyberpunk Minimalism - Full-screen immersive experience with centered content
 * Features: Animated title, floating elements, gradient text, CTA buttons with glow effects
 */
export const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on mount
    const elements = [titleRef.current, subtitleRef.current, buttonsRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
          el.style.transition = 'all 0.8s ease-out';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-purple-500/20" />
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full border border-cyan-500/30 animate-float opacity-20" />
      <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full border border-purple-500/20 animate-float opacity-10" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container max-w-4xl text-center px-4">
        {/* Main title with gradient */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          style={{
            background: 'linear-gradient(135deg, #00d9ff 0%, #d946ef 50%, #00d9ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Divyansh Kashiv
        </h1>

        {/* Subtitle with role */}
        <div className="mb-8 space-y-4">
          <p className="text-2xl md:text-3xl font-semibold text-cyan-400">
            Designer / Builder
          </p>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building real-world tech solutions and exploring new technologies.
            B.Tech IT student at NIET, crafting innovative digital experiences.
          </p>
        </div>

        {/* Student badge */}
        <div className="mb-12 flex items-center justify-center gap-2">
          <div className="glass px-4 py-2 inline-flex items-center gap-2 neon-glow-cyan">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">B.Tech IT • NIET • 2025-Present</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group glass px-8 py-3 rounded-lg font-semibold text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2 neon-glow-cyan hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group glass px-8 py-3 rounded-lg font-semibold text-purple-300 border border-purple-500/50 hover:border-purple-400 transition-all duration-300 flex items-center gap-2 neon-glow-purple hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
