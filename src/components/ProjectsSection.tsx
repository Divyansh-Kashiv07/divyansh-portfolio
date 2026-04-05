import React, { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects Section Component
 * Design: Cyberpunk Minimalism - 3D tilt cards with hover effects
 * Features: Project showcase with glassmorphic cards, neon borders, tilt animation
 */
export const ProjectsSection: React.FC = () => {
  const [tiltValues, setTiltValues] = useState<{ [key: number]: { x: number; y: number } }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: 'AI Interview Assistant',
      description:
        'A web-based AI tool designed to help students prepare for technical interviews. Features interactive practice sessions, real-time feedback, and comprehensive question bank.',
      tech: ['React', 'AI Integration', 'Frontend'],
      link: 'https://interviewassistantniet.netlify.app',
      github: '#',
      featured: true,
    },
  ];

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;

    setTiltValues((prev) => ({
      ...prev,
      [index]: { x: rotateX, y: rotateY },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltValues((prev) => ({
      ...prev,
      [index]: { x: 0, y: 0 },
    }));
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Showcasing my work in building innovative solutions with modern technologies
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const tilt = tiltValues[index] || { x: 0, y: 0 };

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="h-full"
                style={{
                  perspective: '1000px',
                }}
              >
                <div
                  className="glass p-8 md:p-10 rounded-xl transition-all duration-300 neon-glow-cyan hover:shadow-[0_0_50px_rgba(0,217,255,0.4)] h-full"
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
                      tilt.x === 0 && tilt.y === 0 ? 1 : 1.02
                    })`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/50">
                      Featured Project
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-cyan-300 mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2 font-semibold">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-lg text-sm bg-purple-500/10 text-purple-300 border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Visit Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/50 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 group"
                    >
                      <Github className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More projects coming */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">More projects coming soon...</p>
          <div className="inline-block glass px-6 py-3 rounded-lg border border-cyan-500/30">
            <p className="text-cyan-300 font-semibold">
              Currently working on exciting new projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
