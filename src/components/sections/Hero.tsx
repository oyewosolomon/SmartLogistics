import React from 'react';
import { ArrowRight, TrendingUp, Package, Clock, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Supply Chain with AI-Powered Logistics
            </h1>
            <p className="text-xl text-gray-600">
              Join 1000+ companies optimizing 500,000+ monthly shipments. Cut transportation costs by 25% while gaining real-time visibility into your entire supply chain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">25%</h3>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Package className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">500K+</h3>
              <p className="text-gray-600">Monthly Shipments</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
              <p className="text-gray-600">On-Time Delivery</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BarChart className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Active Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;