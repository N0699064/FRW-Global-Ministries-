import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MinistryHighlights = () => {
  const highlights = [
    {
      title: 'Evangelism & Outreach',
      description:
        'Sharing the Gospel message across nations, bringing the light of Christ to communities in need.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids5-1.jpg',
      link: '/ministries',
    },
    {
      title: 'Education & Empowerment',
      description:
        'Providing quality Christian education to equip the next generation with knowledge and faith.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg',
      link: '/schools',
    },
    {
      title: 'Food & Humanitarian Aid',
      description:
        'Meeting physical needs through food programs and humanitarian assistance, demonstrating Christ\'s love in action.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg',
      link: '/ministries',
    },
  ];

  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Ministry Focus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three pillars of service guided by faith, love, and compassion
          </p>
        </div>

        <div className="space-y-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {highlight.description}
                </p>
                <Link
                  to={highlight.link}
                  className="inline-flex items-center text-black font-semibold hover:underline group"
                >
                  Learn More
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinistryHighlights;