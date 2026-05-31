import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

/**
 * Contact Section Component
 * Design: Cyberpunk Minimalism - Animated contact form with glassmorphic design
 * Features: Contact details, animated form, neon highlights, glowing inputs
 */
export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7307208636',
      href: 'tel:+917307208636',
      color: 'cyan',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'phoenixxd80@gmail.com',
      href: 'mailto:phoenixxd80@gmail.com',
      color: 'purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Greater Noida, India',
      href: '#',
      color: 'cyan',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Let's <span className="text-cyan-400">Connect</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always excited to discuss new ideas and opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-300 mb-8">Get in Touch</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isNeon = info.color === 'cyan';

              return (
                <a
                  key={index}
                  href={info.href}
                  className={`glass p-6 rounded-xl flex items-start gap-4 transition-all duration-300 hover:scale-105 ${
                    isNeon
                      ? 'neon-glow-cyan hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]'
                      : 'neon-glow-purple hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isNeon ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isNeon ? 'text-cyan-300' : 'text-purple-300'}`}>
                      {info.label}
                    </p>
                    <p className="text-gray-300 font-medium">{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social links */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Connect with me on social platforms</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300"
                >
                  <span className="text-lg">G</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass w-10 h-10 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300"
                >
                  <span className="text-lg">in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-xl neon-glow-cyan">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name input */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full glass px-4 py-3 rounded-lg border border-cyan-500/30 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)] transition-all duration-300"
                />
              </div>

              {/* Email input */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full glass px-4 py-3 rounded-lg border border-cyan-500/30 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)] transition-all duration-300"
                />
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows={4}
                  className="w-full glass px-4 py-3 rounded-lg border border-cyan-500/30 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)] transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass px-6 py-3 rounded-lg font-semibold text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 neon-glow-cyan hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status message */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-300 text-sm">
                  Error sending message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
