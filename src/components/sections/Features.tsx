import React, { useRef, useEffect } from 'react';
import { 
  Truck, 
  BarChart2, 
  Map, 
  Box, 
  AlertCircle, 
  TrendingUp 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white border border-x-0 border-t-0 border-blue-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Route Optimization",
      description: "AI-powered algorithms optimize delivery routes in real-time, reducing fuel costs and improving delivery times."
    },
    {
      icon: BarChart2,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics platform providing actionable insights into your supply chain performance."
    },
    {
      icon: Map,
      title: "Real-time Tracking",
      description: "Track shipments in real-time with precise GPS location data and estimated arrival times."
    },
    {
      icon: Box,
      title: "Warehouse Management",
      description: "Optimize warehouse operations with intelligent inventory management and picking strategies."
    },
    {
      icon: AlertCircle,
      title: "Predictive Alerts",
      description: "Get ahead of potential delays with AI-powered predictive alerts and proactive problem resolution."
    },
    {
      icon: TrendingUp,
      title: "Cost Analytics",
      description: "Detailed cost breakdowns and optimization recommendations to reduce transportation expenses."
    }
  ];

  const featureCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate each feature card
    featureCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2, // Staggered delay
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Start animation when the card is 80% in view
          toggleActions: "play none none none", // Play animation once
        },
      });
    });
  }, []);


  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Logistics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your supply chain with our comprehensive suite of tools designed for maximum efficiency and visibility.
          </p>
        </div>
        
        {/* Flexbox Container */}
        <div className="flex flex-wrap gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex-1 min-w-[350px]">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;