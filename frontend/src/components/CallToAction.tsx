import React from 'react';
import { paypalDonateLink } from '../data/mock';

const CallToAction = () => {
  return (
    <div className="relative w-full py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://www.frwglobalministries.org/cdn/shop/files/crossssbg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Be Part of Something Greater
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Your partnership enables us to continue spreading the Gospel, educating
          children, and serving communities in need. Together, we can make an
          eternal difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={paypalDonateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Give Now
          </a>
          <a
            href="#newsletter"
            className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            Stay Connected
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;