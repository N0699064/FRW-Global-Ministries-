import React from 'react';
import { paypalDonateLink } from '../data/mock';

const ImpactBanner = () => {
  return (
    <div className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          TOGETHER, WE BRING HOPE
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Every community reached. Every child educated. Every family fed. It happens because of partners like you.
        </p>
        <a
          href={paypalDonateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-10 py-4 rounded-full text-base font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          Partner With Us
        </a>
      </div>
    </div>
  );
};

export default ImpactBanner;