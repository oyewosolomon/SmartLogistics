import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Tab from '@/components/ui/tab';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('performance');

  // Data for the doughnut chart
  const doughnutData = [
    { name: 'Deliveries', value: 52000 },
    { name: 'Costs', value: 355000 },
    { name: 'Efficiency', value: 98 },
  ];

  // Colors for the doughnut chart segments
  const COLORS = ['#2563eb', '#16a34a', '#f59e0b'];

  return (
    <section className="py-20 bg-white" id="solutions">
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

            {/* Doughnut Chart */}
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={doughnutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60} // Adjust inner radius for doughnut effect
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {doughnutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;