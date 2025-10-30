import React from 'react';
import { statsData } from '../data/mock';

const StatsSection = () => {
  return (
    <div className="relative w-full bg-black py-24">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-20">
        {statsData.images.map((image, index) => (
          <div
            key={index}
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4">
          {statsData.number}
        </h2>
        <p className="text-sm md:text-base text-gray-300 tracking-[0.25em] uppercase font-semibold">
          {statsData.description}
        </p>
      </div>
    </div>
  );
};

export default StatsSection;