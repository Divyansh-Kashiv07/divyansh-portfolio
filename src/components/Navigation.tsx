import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

/**
 * Navigation Component
 * Design: Cyberpunk Minimalism - Sticky glassmorphic navbar with smooth scrolling
 * Features: Mobile-responsive menu, smooth scroll navigation, neon accents
 */
export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass neon-glow-cyan shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-6xl flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 font-bold text-xl text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <Code2 className="w-6 h-6" />
          <span>Divyansh</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="glass px-4 py-2 rounded-lg text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300 text-sm font-semibold"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-cyan-500/20">
          <div className="container max-w-6xl py-4 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full glass px-4 py-2 rounded-lg text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 font-semibold"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
