import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-lg shadow-sm py-4' 
            : 'bg-transparent backdrop-blur-sm py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className={`text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
              aria-label="Home"
            >
              QL
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`font-medium text-sm tracking-wide transition-colors ${
                        isScrolled 
                          ? 'text-slate-600 hover:text-slate-900' 
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors relative z-[60] ${
                isScrolled ? 'text-slate-900' : 'text-white'
              } ${isMenuOpen ? 'text-white' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/10 backdrop-blur-sm transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Liquid Glass Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] transform transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
        >
          {/* Glass morphism background */}
          <div className="h-full bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border-l border-white/10 shadow-2xl">
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/50" />
            
            {/* Animated background elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-40 left-8 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-lg animate-pulse delay-1000" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Header space */}
              <div className="h-20 flex items-center justify-end px-6">
                <div className="w-10 h-10" /> {/* Spacer for close button */}
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 px-8 py-8">
                <ul className="space-y-8">
                  {navLinks.map((link, index) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`block text-2xl font-medium text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2 transform ${
                          isMenuOpen 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-4 opacity-0'
                        }`}
                        style={{
                          transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                
                {/* Contact info */}
                <div className={`mt-16 pt-8 border-t border-white/5 transition-all duration-500 ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? '600ms' : '0ms'
                }}>
                  <p className="text-white/50 text-sm mb-2">Get in touch</p>
                  <a 
                    href="mailto:jobs.quang.le@gmail.com"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    jobs.quang.le@gmail.com
                  </a>
                </div>
              </nav>
              
              {/* Footer */}
              <div className={`p-8 transition-all duration-500 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? '700ms' : '0ms'
              }}>
                <p className="text-white/30 text-xs">
                  © 2025 Quang Le
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;