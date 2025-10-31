import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedMinistries = () => {
  const ministries = [
    {
      title: 'Children & Youth Ministry',
      description: 'Nurturing the next generation through biblical teaching, mentorship programs, and character development initiatives that shape young lives for Christ.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids1.jpg',
      stats: '500+ Children Reached',
    },
    {
      title: 'Community Development',
      description: 'Building sustainable communities through infrastructure development, clean water projects, and economic empowerment programs that create lasting change.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg',
      stats: '25+ Communities Served',
    },
    {
      title: 'Medical Outreach',
      description: 'Providing essential healthcare services, medical supplies, and health education to underserved communities, bringing healing and hope.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg',
      stats: '10,000+ Patients Treated',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Ministries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse ways we're making an impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {ministry.stats}
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {ministry.description}
                </p>
                <button className="inline-flex items-center text-black font-semibold hover:underline group">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-2"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMinistries;