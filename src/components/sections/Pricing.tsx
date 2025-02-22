import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  shipments: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

interface FeatureDetails {
  [key: string]: string;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [showFeatureInfo, setShowFeatureInfo] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 499,
      annualPrice: 449,
      shipments: "Up to 5,000",
      features: [
        "Real-time tracking",
        "Basic route optimization",
        "Email support",
        "Basic analytics",
        "API access",
      ],
      highlight: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with complex needs",
      monthlyPrice: 999,
      annualPrice: 899,
      shipments: "Up to 25,000",
      features: [
        "Everything in Starter",
        "Advanced route optimization",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Warehouse management",
      ],
      highlight: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: 2499,
      annualPrice: 2249,
      shipments: "Unlimited",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom AI models",
        "Multi-warehouse support",
        "Advanced security features",
      ],
      highlight: false,
      cta: "Contact Sales"
    }
  ];

  const featureDetails: FeatureDetails = {
    "Basic route optimization": "AI-powered route planning for single region operations",
    "Advanced route optimization": "Multi-region route optimization with real-time adjustments",
    "Custom AI models": "Tailored machine learning models for your specific logistics needs",
    "Basic analytics": "Essential shipping and cost metrics",
    "Advanced analytics": "Comprehensive analytics with predictive insights",
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your logistics needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
              style={{ backgroundColor: isAnnual ? '#2563eb' : '#94a3b8' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
              Annual
              <span className="ml-1 text-green-600">(Save 10%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.highlight
                  ? 'border-2 border-blue-600 shadow-xl'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  {plan.shipments} monthly shipments
                </p>
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </CardHeader>

              <CardContent className="p-6 border-t border-gray-200">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                      {featureDetails[feature] && (
                        <button
                          className="ml-2"
                          onMouseEnter={() => setShowFeatureInfo(feature)}
                          onMouseLeave={() => setShowFeatureInfo(null)}
                        >
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Info Tooltip */}
        {showFeatureInfo && (
          <Alert className="fixed bottom-4 right-4 max-w-md bg-white shadow-xl">
            <AlertDescription>
              {featureDetails[showFeatureInfo]}
            </AlertDescription>
          </Alert>
        )}

        {/* Enterprise Call-to-Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Looking for special features?
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;