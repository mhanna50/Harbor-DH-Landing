import React from 'react';
import { Compass } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#3AAFA9] to-[#1E2A38] rounded-full flex items-center justify-center">
              <Compass className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-8">
            Your Creative Navigation Partners
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Harbor Creative is a reliable, professional creative and marketing studio dedicated to helping 
            small and mid-sized businesses chart their course to digital success. Like a lighthouse guiding 
            ships safely to shore, we illuminate the path to stronger branding, engaging social media presence, 
            and stunning web design that converts visitors into loyal customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-[#F4E1C1] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1E2A38]">5+</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1E2A38] mb-2">Years Experience</h3>
              <p className="text-gray-600">Navigating brands to success</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-[#F4E1C1] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1E2A38]">100+</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1E2A38] mb-2">Happy Clients</h3>
              <p className="text-gray-600">Businesses transformed</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-[#F4E1C1] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1E2A38]">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1E2A38] mb-2">Support</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}