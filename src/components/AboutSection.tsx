import React from 'react';
import { Zap, Brain, Rocket } from 'lucide-react';

/**
 * About Section Component
 * Design: Cyberpunk Minimalism - Glassmorphic cards with neon accents
 * Features: Profile info, strengths, and tech foundation overview
 */
export const AboutSection: React.FC = () => {
  const strengths = [
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Analytical mindset with strong foundation in DSA and algorithms',
      color: 'cyan',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and frameworks',
      color: 'purple',
    },
    {
      icon: Zap,
      title: 'Innovation Focused',
      description: 'Passionate about exploring cutting-edge tech and building solutions',
      color: 'cyan',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-cyan-400">About</span> Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Profile Info */}
          <div className="glass p-8 rounded-xl neon-glow-cyan">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">B.Tech IT Student</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a first-year B.Tech Information Technology student at Noida Institute of Engineering & Technology (NIET), Greater Noida. With a strong passion for technology and innovation, I'm dedicated to building real-world solutions that make a difference.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in tech started with a curiosity about how things work. Today, I combine my academic foundation with practical experience to create meaningful digital experiences.
            </p>
          </div>

          {/* Technical Foundation */}
          <div className="glass p-8 rounded-xl neon-glow-purple">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Technical Foundation</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <span className="text-gray-300">
                  <strong>Programming:</strong> C, C++, Java with strong DSA fundamentals
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">→</span>
                <span className="text-gray-300">
                  <strong>Web Development:</strong> HTML, CSS, JavaScript, React, Tailwind CSS
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <span className="text-gray-300">
                  <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Prompt Engineering
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            const isNeon = strength.color === 'cyan';
            return (
              <div
                key={index}
                className={`glass p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isNeon ? 'neon-glow-cyan hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]' : 'neon-glow-purple hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  isNeon ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${isNeon ? 'text-cyan-300' : 'text-purple-300'}`}>
                  {strength.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Let's collaborate and build something amazing together
          </p>
          <a
            href="#contact"
            className="inline-block glass px-6 py-2 rounded-lg text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 neon-glow-cyan hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};
