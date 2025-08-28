import React from 'react';
import ServiceCard from '../services/ServiceCard';
import { Share2, Palette, Globe } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Social Media Management",
      description: "Elevate your brand's voice across all social platforms with strategic content and community management.",
      icon: Share2,
      tiers: [
        {
          name: "Starter",
          price: "$500/mo",
          features: [
            "1 platform management",
            "3 posts per week",
            "Basic analytics reporting",
            "Community management",
            "Content calendar"
          ]
        },
        {
          name: "Growth",
          price: "$1,200/mo",
          features: [
            "2-3 platform management",
            "5 posts per week",
            "Monthly strategy call",
            "Advanced analytics",
            "Story management",
            "Hashtag research"
          ]
        },
        {
          name: "Premium",
          price: "$2,500+/mo",
          features: [
            "Multi-channel management",
            "Daily posting schedule",
            "Paid advertising campaigns",
            "Branding integration",
            "Influencer outreach",
            "24/7 monitoring"
          ]
        }
      ]
    },
    {
      title: "Branding Kits",
      description: "Create a cohesive visual identity that resonates with your audience and stands out from the competition.",
      icon: Palette,
      tiers: [
        {
          name: "Starter",
          price: "$900",
          features: [
            "Custom logo design",
            "Color palette",
            "Typography selection",
            "Basic brand guidelines",
            "3 logo variations"
          ]
        },
        {
          name: "Growth",
          price: "$1,500",
          features: [
            "Complete logo suite",
            "Full brand kit",
            "Comprehensive style guide",
            "Business card designs",
            "Social media templates",
            "Brand pattern library"
          ]
        },
        {
          name: "Premium",
          price: "$2,500+",
          features: [
            "Complete creative system",
            "Custom visual elements",
            "Marketing collateral",
            "Brand photography direction",
            "Website graphics",
            "Ongoing brand support"
          ]
        }
      ]
    },
    {
      title: "Website Design",
      description: "Build stunning, responsive websites that convert visitors into customers and showcase your brand beautifully.",
      icon: Globe,
      tiers: [
        {
          name: "Starter",
          price: "$1,200",
          features: [
            "1-3 page website",
            "Mobile optimized",
            "Contact form",
            "Basic SEO setup",
            "1 month support"
          ]
        },
        {
          name: "Growth",
          price: "$3,000",
          features: [
            "5-7 page website",
            "Branding integration",
            "Content management system",
            "Advanced SEO",
            "Analytics setup",
            "3 months support"
          ]
        },
        {
          name: "Premium",
          price: "$5,000+",
          features: [
            "Custom website development",
            "Advanced features",
            "E-commerce capability",
            "Performance optimization",
            "Ongoing maintenance",
            "Priority support"
          ]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate your brand to success with our comprehensive suite of creative and digital marketing services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}