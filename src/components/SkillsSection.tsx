import React, { useState } from 'react';
import { Code2, Database, Wrench, Users } from 'lucide-react';

/**
 * Skills Section Component
 * Design: Cyberpunk Minimalism - Animated skill cards with hover tilt effect
 * Features: Categorized skills, glassmorphic cards, neon highlights
 */
export const SkillsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      color: 'cyan',
      skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript'],
    },
    {
      icon: Database,
      title: 'Web Development',
      color: 'purple',
      skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      icon: Wrench,
      title: 'Tools & Concepts',
      color: 'cyan',
      skills: ['Git & GitHub', 'Data Structures', 'Algorithms', 'DSA', 'Problem Solving'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      color: 'purple',
      skills: ['Problem Solving', 'Multitasking', 'Time Management', 'Communication', 'Teamwork'],
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-purple-400">Skills</span> & Expertise
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit built through academic learning and practical experience
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isNeon = category.color === 'cyan';
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? isNeon
                      ? 'neon-glow-cyan scale-105 shadow-[0_0_40px_rgba(0,217,255,0.4)]'
                      : 'neon-glow-purple scale-105 shadow-[0_0_40px_rgba(217,70,239,0.4)]'
                    : isNeon
                      ? 'neon-glow-cyan'
                      : 'neon-glow-purple'
                }`}
                style={{
                  transform: isHovered ? 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' : 'none',
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                      isNeon ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${isNeon ? 'text-cyan-300' : 'text-purple-300'}`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                        isHovered
                          ? isNeon
                            ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50'
                            : 'bg-purple-500/30 text-purple-200 border border-purple-400/50'
                          : isNeon
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                            : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 glass p-8 rounded-xl border border-cyan-500/30">
          <h3 className="text-xl font-bold text-cyan-300 mb-4">Continuous Learning</h3>
          <p className="text-gray-300 leading-relaxed">
            I'm actively exploring AI/ML, advanced web technologies, and cloud platforms. My approach to learning is hands-on—I build projects to solidify concepts and stay updated with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};
