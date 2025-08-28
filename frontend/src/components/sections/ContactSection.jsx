import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SendEmail } from '@/integrations/Core';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await SendEmail({
        to: 'hello@harborcreative.com', // Replace with actual email
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Message: ${formData.message}
        `
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-[#1E2A38] mb-6">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for reaching out. We'll get back to you within 24 hours to discuss how we can help grow your business.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-[#3AAFA9] hover:bg-[#2E8B87] text-white px-8 py-3 rounded-full"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6">
              Let's Grow Your Business Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to set sail toward digital success? Get in touch and let's discuss how Harbor Creative can help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-xl border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1E2A38] text-center">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-[#3AAFA9] rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-[#3AAFA9] rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-2 border-gray-200 focus:border-[#3AAFA9] rounded-xl resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#3AAFA9] hover:bg-[#2E8B87] text-white h-12 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#1E2A38] mb-6">
                  Or Book a Free Strategy Call
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Schedule a 30-minute consultation where we'll discuss your goals, challenges, and how our services can help your business grow. No commitment required.
                </p>
                
                <Button 
                  size="lg"
                  className="bg-[#1E2A38] hover:bg-[#2A3F54] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Schedule Free Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-[#1E2A38] mb-2">Email</h4>
                  <p className="text-gray-600">hello@harborcreative.com</p>
                </div>
                
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-[#1E2A38] mb-2">Response Time</h4>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}