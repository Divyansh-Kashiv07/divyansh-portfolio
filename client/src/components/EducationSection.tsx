import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

/**
 * Education Section Component
 * Design: Cyberpunk Minimalism - Timeline-style education display
 * Features: Glassmorphic education cards with neon accents
 */
export const EducationSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-purple-400">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-purple-500/50 -translate-x-1/2" />

          {/* Education item */}
          <div className="mb-12 md:mb-0">
            <div className="flex gap-8">
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center z-10 relative">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              {/* Content */}
              <div className="glass p-8 rounded-xl flex-1 neon-glow-cyan hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-lg text-purple-300 font-semibold mb-3">
                  Information Technology
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Noida Institute of Engineering & Technology (NIET)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Greater Noida, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>2025 – Present (First Year)</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Pursuing a comprehensive IT education with focus on software development, data structures, algorithms, and emerging technologies. Actively participating in academic projects and building practical skills through hands-on learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic highlights */}
        <div className="mt-16 glass p-8 rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold text-purple-300 mb-4">Academic Focus</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold mt-1">•</span>
              <span>Core CS Concepts: Data Structures, Algorithms, Database Management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold mt-1">•</span>
              <span>Web Technologies: Full-stack development, responsive design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold mt-1">•</span>
              <span>Programming Languages: C, C++, Java, JavaScript</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold mt-1">•</span>
              <span>Emerging Tech: AI/ML, Cloud Computing, Modern Frameworks</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
