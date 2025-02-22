import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Tab  from '@/components/ui/tab';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const performanceData = [
    { name: 'Jan', deliveries: 42000, costs: 380000, efficiency: 94 },
    { name: 'Feb', deliveries: 44000, costs: 375000, efficiency: 95 },
    { name: 'Mar', deliveries: 46000, costs: 370000, efficiency: 96 },
    { name: 'Apr', deliveries: 48000, costs: 365000, efficiency: 97 },
    { name: 'May', deliveries: 50000, costs: 360000, efficiency: 97 },
    { name: 'Jun', deliveries: 52000, costs: 355000, efficiency: 98 },
  ];

  return (
    <section className="py-20 bg-white" id='solutions'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Analytics at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get real-time insights into your logistics operations with our comprehensive dashboard.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex space-x-4 px-6 py-4">
              <Tab 
                active={activeTab === 'performance'} 
                onClick={() => setActiveTab('performance')}
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  activeTab === 'performance' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Performance Metrics
              </Tab>
              <Tab 
                active={activeTab === 'shipments'} 
                onClick={() => setActiveTab('shipments')}
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  activeTab === 'shipments' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Active Shipments
              </Tab>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Total Deliveries</h4>
                <p className="text-2xl font-bold text-gray-900">52,000</p>
                <span className="text-green-600 text-sm">↑ 8.3% from last month</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Average Cost</h4>
                <p className="text-2xl font-bold text-gray-900">$355,000</p>
                <span className="text-green-600 text-sm">↓ 1.4% from last month</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Efficiency Score</h4>
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <span className="text-green-600 text-sm">↑ 1.0% from last month</span>
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="deliveries" 
                    stroke="#2563eb" 
                    strokeWidth={2} 
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="costs" 
                    stroke="#16a34a" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;