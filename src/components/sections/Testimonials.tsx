import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metrics: {
    cost_reduction: string;
    time_saved: string;
    roi: string;
  };
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Supply Chain Director",
      company: "Global Electronics Co.",
      quote: "SmartLogistics Hub transformed our supply chain operations. We've seen unprecedented efficiency gains and cost reductions across our global shipping network. The real-time tracking and predictive analytics have become indispensable tools for our team.",
      metrics: {
        cost_reduction: "32%",
        time_saved: "48 hours/week",
        roi: "410%"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Manager",
      company: "FastRetail Solutions",
      quote: "The warehouse optimization features alone justified our investment. We've dramatically improved our inventory turnover and reduced picking errors by 95%. The platform's ease of use and comprehensive analytics make it a game-changer.",
      metrics: {
        cost_reduction: "28%",
        time_saved: "35 hours/week",
        roi: "380%"
      }
    },
    {
      name: "Emma Thompson",
      role: "Logistics Coordinator",
      company: "EcoShip International",
      quote: "SmartLogistics Hub's sustainability features helped us reduce our carbon footprint while improving delivery times. The AI-powered route optimization has been particularly impressive in reducing fuel consumption and emissions.",
      metrics: {
        cost_reduction: "25%",
        time_saved: "40 hours/week",
        roi: "350%"
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how leading companies are transforming their logistics operations with our platform.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="bg-white shadow-xl rounded-2xl overflow-hidden mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {testimonials[activeIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/3 bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">
                          {testimonials[activeIndex].metrics.cost_reduction}
                        </p>
                        <p className="text-sm text-gray-600">Cost Reduction</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">
                          {testimonials[activeIndex].metrics.time_saved}
                        </p>
                        <p className="text-sm text-gray-600">Time Saved</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">
                          {testimonials[activeIndex].metrics.roi}
                        </p>
                        <p className="text-sm text-gray-600">ROI Achieved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;