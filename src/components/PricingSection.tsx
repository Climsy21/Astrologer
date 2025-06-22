import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '19.99',
      description: 'Basic chart reading.',
      features: [
        'Birth chart analysis',
        'Basic personality insights',
        'Monthly horoscope',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Advanced',
      price: '49.99',
      description: 'In-depth analysis.',
      features: [
        'Comprehensive birth chart',
        'Transit predictions',
        'Compatibility analysis',
        'Quarterly forecasts',
        'Priority support',
        'Video consultation'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '79.99',
      description: 'Personalized forecast.',
      features: [
        'Full natal chart reading',
        'Annual forecast',
        'Relationship compatibility',
        'Career guidance',
        'Monthly check-ins',
        'Personal astrologer access'
      ],
      popular: false
    },
    {
      name: 'Ultimate',
      price: '149.99',
      description: 'Complete life analysis.',
      features: [
        'Complete life path analysis',
        'Spiritual guidance',
        'Past life insights',
        'Chakra alignment',
        'Weekly consultations',
        'Custom ritual recommendations',
        '24/7 support'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            Plans
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto drop-shadow-lg">
            Choose the perfect cosmic guidance plan for your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border transition-all duration-500 hover:scale-105 hover:bg-white/15 shadow-2xl ${
                plan.popular 
                  ? 'border-amber-400/50 shadow-2xl shadow-amber-400/20' 
                  : 'border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white drop-shadow-lg">${plan.price}</span>
                  <span className="text-white/60">/month</span>
                </div>
                <p className="text-white/70">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 shadow-lg ${
                plan.popular
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 shadow-amber-500/30'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/20'
              }`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;