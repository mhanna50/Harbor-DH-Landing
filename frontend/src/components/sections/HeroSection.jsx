import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Waves } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFB] to-white">
      {/* Subtle Wave Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-1/4 left-1/4 w-96 h-96" viewBox="0 0 200 200">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="#3AAFA9" strokeWidth="2" fill="none" />
          <path d="M30,70 Q60,40 90,70 T150,70" stroke="#3AAFA9" strokeWidth="1.5" fill="none" />
        </svg>
        <svg className="absolute bottom-1/4 right-1/4 w-64 h-64" viewBox="0 0 200 200">
          <path d="M40,80 Q70,50 100,80 T160,80" stroke="#1E2A38" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1E2A38] leading-tight mb-6">
            We help businesses grow with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3AAFA9] to-[#1E2A38]">
              modern social media + design
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Harbor Design House is your partner in branding, websites, and social media management. 
            Let us navigate your brand to success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#3AAFA9] hover:bg-[#2E8B87] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-[#1E2A38] text-[#1E2A38] hover:bg-[#1E2A38] hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-12 w-3 h-3 bg-[#F4E1C1] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/3 left-12 w-2 h-2 bg-[#3AAFA9] rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#1E2A38] rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}