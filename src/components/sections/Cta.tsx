import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const partners = [
    { name: "TechCorp Solutions", logo: "TC" },
    { name: "Global Shipping Co", logo: "GS" },
    { name: "FastFreight Systems", logo: "FF" },
    { name: "EcoTransport", logo: "ET" },
    { name: "SmartCargo Ltd", logo: "SC" },
    { name: "LogiTech Pro", logo: "LP" }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 1000+ companies optimizing their logistics operations with SmartLogistics Hub
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Integration Partners */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-blue-200 mb-8">
            Trusted by leading companies and integration partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-blue-500 rounded-lg p-6 flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <div className="text-white text-2xl font-bold">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">500K+</h3>
            <p className="text-blue-100">Monthly Shipments</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">25%</h3>
            <p className="text-blue-100">Average Cost Reduction</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-blue-100">Platform Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;