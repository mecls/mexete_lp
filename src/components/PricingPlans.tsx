import React from 'react';

interface PlanCardProps {
  type: 'Monthly' | 'Life Time Deal';
  price: string;
  description: string;
  priceDescription?: string;
  highlights?: string[];
  ctaText?: string;
  isMostPopular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  type,
  price,
  description,
  priceDescription,
  highlights = [],
  ctaText,
  isMostPopular = false
}) => {
  return (
    <div className={`
      relative rounded-xl p-6 
      ${isMostPopular 
        ? 'bg-orange-500 text-white' 
        : 'bg-white border border-gray-200 text-gray-900'
      }
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl
    `}>
      {isMostPopular && (
        <div className="absolute top-0 right-0 m-1 bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-bold">
          Most Popular
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`text-2xl font-bold mb-2 ${isMostPopular ? 'font-bold' : ''}`}>
            {type}
          </h3>
          <p className={`
            ${isMostPopular 
              ? 'text-white text-opacity-80 font-bold' 
              : 'text-gray-500'
            }
          `}>
            {description}
          </p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold">{price}</span>
          {priceDescription && (
            <p className={`
              text-sm mt-1 font-bold
              ${isMostPopular 
                ? 'text-white text-opacity-70' 
                : 'text-gray-500'
              }
            `}>
              {priceDescription}
            </p>
          )}
        </div>
      </div>

      {highlights.length > 0 && (
        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center font-bold">
              <svg 
                className={`w-5 h-5 mr-2 ${isMostPopular ? 'text-white' : 'text-orange-500'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {ctaText && (
        <button 
          className={`
            w-full py-3 rounded-lg font-bold transition-colors
            ${isMostPopular 
              ? 'bg-white text-orange-500 hover:bg-orange-50' 
              : 'bg-orange-500 text-white hover:bg-orange-600'
            }
          `}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

const PricingPlans: React.FC = () => {
  return (
    <div id="pricing-plans" className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track your goals and achieve the life you want without breaking the bank. Choose the plan that fits your lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PlanCard 
          type="Monthly" 
          price="€2.99/month" 
          description="Most flexible. Cancel anytime."
          highlights={[
            "Full access to all features",
            "Unlimited task tracking",
            "Advanced analytics",
            "Most flexible"
          ]}
          isMostPopular
        />
        
        <PlanCard 
          type="Life Time Deal" 
          price="€24.99" 
          description="Save 30% in 1 year"
          highlights={[
            "Every feature for a life time",
            "No downsides",
            "All future updates",
          ]}
        />
      </div>
    </div>
  );
};

export default PricingPlans;
