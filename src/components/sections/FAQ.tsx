import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How does SmartLogistics reduce costs?",
      answer: "Our AI-powered algorithms optimize routes and reduce fuel consumption, cutting transportation costs by up to 25%.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      question: "Can I integrate SmartLogistics with my existing systems?",
      answer: "Absolutely! We provide seamless integrations with most ERP and TMS systems.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 customer support via email, chat, and phone.",
    },
    {
      question: "Is my data secure with SmartLogistics?",
      answer: "Yes, we use industry-standard encryption and security protocols to protect your data.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no hidden fees.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about SmartLogistics.
          </p>
        </div>

        {/* FAQs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              {/* Question */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>

              {/* Answer */}
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;