import React from 'react';
import { Globe, Heart, BookOpen, Users } from 'lucide-react';

const ImpactSection = () => {
  const impacts = [
    {
      icon: Globe,
      number: '15+',
      label: 'Countries Reached',
      description: 'Spreading the Gospel across continents',
    },
    {
      icon: Users,
      number: '10,000+',
      label: 'Lives Transformed',
      description: 'Through evangelism and outreach',
    },
    {
      icon: BookOpen,
      number: '500+',
      label: 'Students Educated',
      description: 'Building future leaders in Christ',
    },
    {
      icon: Heart,
      number: '50,000+',
      label: 'Meals Served',
      description: 'Feeding bodies and souls',
    },
  ];

  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through God's grace, we continue to make a difference around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-5xl font-bold text-black mb-2">
                  {impact.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {impact.label}
                </div>
                <p className="text-sm text-gray-600">{impact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;