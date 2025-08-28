import React, { useState, useEffect } from 'react';
import { Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#1E2A38] to-[#3AAFA9] rounded-lg flex items-center justify-center">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1E2A38]">Harbor Creative</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#1E2A38] hover:text-[#3AAFA9] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#1E2A38] hover:text-[#3AAFA9] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-[#1E2A38] hover:text-[#3AAFA9] transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#1E2A38] hover:text-[#3AAFA9] transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              className="bg-[#3AAFA9] hover:bg-[#2E8B87] text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Book Free Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}