import React from 'react';
import { Heart, Code2 } from 'lucide-react';

/**
 * Footer Component
 * Design: Cyberpunk Minimalism - Minimal footer with neon accents
 * Features: Copyright, social links, quick navigation
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/20 bg-gradient-to-b from-transparent to-purple-500/5">
      <div className="container max-w-6xl py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-lg text-cyan-400">Divyansh Kashiv</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              B.Tech IT student at NIET, passionate about building innovative tech solutions and exploring new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cyan-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-purple-300 mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300 text-sm font-bold"
              >
                GH
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-10 h-10 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 text-sm font-bold"
              >
                LI
              </a>
              <a
                href="mailto:phoenixxd80@gmail.com"
                className="glass w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300 text-sm font-bold"
              >
                ✉
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Divyansh Kashiv. Made with{' '}
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400" /> and code.
          </p>
          <p className="text-gray-500 text-xs">
            Designed & Built with React, Three.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
