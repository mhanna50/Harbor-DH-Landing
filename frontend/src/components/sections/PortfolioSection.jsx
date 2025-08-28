import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Monitor, Palette } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours navigate to success through strategic design and social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Portfolio */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="aspect-square bg-gradient-to-br from-[#3AAFA9] to-[#1E2A38] flex items-center justify-center">
                <Instagram className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Social Media Posts</h3>
                <p className="text-gray-600 mb-4">
                  Engaging content that drives interaction and builds community around your brand.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    Instagram
                  </span>
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    LinkedIn
                  </span>
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    Facebook
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Branding Portfolio */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="aspect-square bg-gradient-to-br from-[#F4E1C1] to-[#3AAFA9] flex items-center justify-center">
                <Palette className="w-16 h-16 text-[#1E2A38]" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Brand Identity Kits</h3>
                <p className="text-gray-600 mb-4">
                  Complete visual identities that capture your brand's essence and resonate with your audience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    Logo Design
                  </span>
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    Brand Guide
                  </span>
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    Collateral
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Website Portfolio */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="aspect-square bg-gradient-to-br from-[#1E2A38] to-[#F4E1C1] flex items-center justify-center">
                <Monitor className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E2A38] mb-2">Website Mockups</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful, responsive websites that convert visitors into customers and showcase your brand.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    Responsive
                  </span>
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    SEO Ready
                  </span>
                  <span className="px-3 py-1 bg-[#F4E1C1] text-[#1E2A38] rounded-full text-sm font-medium">
                    Fast Loading
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}