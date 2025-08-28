import React from 'react';
import StickyNav from './components/navigation/StickyNav';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';

export default function HarborCreative() {
  return (
    <div className="min-h-screen bg-white">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-[#1E2A38] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-[#3AAFA9] to-[#F4E1C1] rounded-lg"></div>
            <span className="text-xl font-bold">Harbor Creative</span>
          </div>
          <p className="text-gray-400 mb-6">
            Your partner in branding, websites, and social media management.
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Harbor Creative. All rights reserved. | Navigating brands to success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}