import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(scrollPosition / 600, 1);
      const translateY = scrollPosition * 0.3;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 backdrop-blur-[2px]" />
      
      <div 
        ref={heroRef}
        className="container px-6 mx-auto relative z-10 transition-all duration-300 ease-out"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Quang Le
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 tracking-wide">
            Software Professional
          </p>
          <p className="text-base md:text-lg text-slate-300 mb-12 max-w-xl mx-auto leading-relaxed">
            Creating thoughtful digital experiences through design and code.
            Currently based in Atlanta.
          </p>
          <div className="flex justify-center animate-bounce">
            <a
              href="#projects"
              className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-colors group text-white"
              aria-label="Scroll to projects"
            >
              <ArrowDown 
                size={20} 
                className="transform group-hover:translate-y-1 transition-transform" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;