import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "This ministry has completely transformed our community. Through their dedication and God's love, we've seen families restored and lives changed forever.",
      author: 'Pastor John',
      location: 'Nigeria',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids1.jpg',
    },
    {
      quote:
        "The education our children receive at Jesus Cares M. School is exceptional. They're not just learning academics, but also growing in faith and character.",
      author: 'Grace M.',
      location: 'Kenya',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg',
    },
    {
      quote:
        "Florence's ministry showed us the love of Christ in action. When we were hungry, they fed us. When we needed hope, they shared the Gospel.",
      author: 'Samuel',
      location: 'Ghana',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transformed Lives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those whose lives have been touched by God's love through our ministry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <Quote size={40} className="text-gray-300" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;