import React, { useState } from 'react';


const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="flex flex-col items-center py-16 bg-white">
      <div className="text-center mb-8">
        <span className="px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold">
          Our Pricing.
        </span>
        <h2 className="text-3xl font-bold mt-4">
          We offer best cost effective consultation solution.
        </h2>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center space-x-4 mb-12">
        <span className={`text-sm font-semibold ${!isYearly ? 'text-black' : 'text-gray-400'}`}>
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-green-300"></div>
          <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>
        </label>
        <span className={`text-sm font-semibold ${isYearly ? 'text-black' : 'text-gray-400'}`}>
          Yearly (Save 20%)
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <PricingCard
          title="Basic"
          price={isYearly ? "$29/mo" : "$36/mo"}
          description="Create interactive forms that connect to your workflow."
          features={[
            "Advanced Segmentation",
            "Comparative Reporting",
            "Unlimited Seats & Role Access",
            "Multivariate Testing",
            "Dynamic Content",
          ]}
        />
        <PricingCard
          title="Plus"
          price={isYearly ? "$199/mo" : "$249/mo"}
          description="Make your forms more beautiful and on-brand & analyze."
          features={[
            "Everything in Basic, Plus:",
            "Advanced Segmentation",
            "Comparative Reporting",
            "Unlimited Seats & Role Access",
            "Multivariate Testing",
            "Dynamic Content",
          ]}
          highlighted
        />
        <PricingCard
          title="Business"
          price={isYearly ? "$399/mo" : "$499/mo"}
          description="Make your forms more beautiful and on-brand & analyze."
          features={[
            "Everything in Plus, Business:",
            "Advanced Segmentation",
            "Comparative Reporting",
            "Unlimited Seats & Role Access",
            "Multivariate Testing",
            "Dynamic Content",
          ]}
        />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, description, features, highlighted }) => (
  <div className={`flex flex-col p-6 bg-gray-50 border ${highlighted ? 'border-green-500 shadow-lg' : 'border-gray-200'} rounded-lg shadow-sm`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <div className="text-3xl font-bold mt-4">{price}</div>
    <span className="text-sm text-gray-500">Billed Yearly</span>
    <button className="mt-6 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
      Get a Free Consultation
    </button>
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-2">Everything you get with {title}:</h4>
      <ul className="text-sm text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-green-500">✔</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Pricing;
