import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ServiceCard({ service }) {
  const [expandedTier, setExpandedTier] = useState(null);

  const toggleTier = (tierIndex) => {
    setExpandedTier(expandedTier === tierIndex ? null : tierIndex);
  };

  return (
    <Card className="h-full border-2 border-gray-100 hover:border-[#3AAFA9] transition-all duration-300 hover:shadow-xl">
      <CardHeader className="text-center p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-[#3AAFA9] to-[#1E2A38] rounded-2xl flex items-center justify-center">
            <service.icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-[#1E2A38] mb-4">
          {service.title}
        </CardTitle>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          {service.tiers.map((tier, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleTier(index)}
                className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-[#F4E1C1] transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-[#1E2A38]">{tier.name}</span>
                  <span className="text-2xl font-bold text-[#3AAFA9]">{tier.price}</span>
                </div>
                {expandedTier === index ? (
                  <ChevronUp className="w-5 h-5 text-[#1E2A38]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1E2A38]" />
                )}
              </button>
              
              {expandedTier === index && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <ul className="space-y-2 text-gray-600">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#3AAFA9] rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-4 bg-[#3AAFA9] hover:bg-[#2E8B87] text-white rounded-full transition-all duration-300"
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}