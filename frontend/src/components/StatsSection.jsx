import React from 'react';
import { statsData } from '../data/mock';

const StatsSection = () => {
  return (
    <div className="relative w-full bg-black py-32">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-20">
        {statsData.images.map((image, index) => (
          <div
            key={index}
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Stats Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mb-6">
          {statsData.number}
        </h2>
        <p className="text-base md:text-lg text-gray-300 tracking-[0.3em] uppercase font-semibold">
          {statsData.description}
        </p>
      </div>
    </div>
  );
};

export default StatsSection;