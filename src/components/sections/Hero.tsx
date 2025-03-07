import React from 'react';
import { ArrowRight, TrendingUp, Package, Clock, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-[url('/images/bg-1.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/80"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div className="space-y-8 mt-5" variants={containerVariants}>
            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Transform Your Supply Chain with AI-Powered Logistics
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              Join 1000+ companies optimizing 500,000+ monthly shipments. Cut transportation costs by 25% while gaining real-time visibility into your entire supply chain.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }} // Add hover animation
                whileTap={{ scale: 0.95 }} // Add click animation
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }} // Add hover animation
                whileTap={{ scale: 0.95 }} // Add click animation
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {[
              { icon: <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />, value: '25%', label: 'Cost Reduction' },
              { icon: <Package className="h-8 w-8 text-blue-600 mb-4" />, value: '500K+', label: 'Monthly Shipments' },
              { icon: <Clock className="h-8 w-8 text-blue-600 mb-4" />, value: '99.9%', label: 'On-Time Delivery' },
              { icon: <BarChart className="h-8 w-8 text-blue-600 mb-4" />, value: '1000+', label: 'Active Clients' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }} // Add hover animation
              >
                {stat.icon}
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;