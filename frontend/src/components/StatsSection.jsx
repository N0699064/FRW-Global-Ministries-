import React from 'react';
import { statsData } from '../data/mock';

const StatsSection = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Stats Number Section */}
      <div className="relative h-[400px] flex items-center justify-center">
        <div className="text-center z-10">
          <h2 className="text-8xl md:text-9xl font-bold text-white mb-4">
            {statsData.number}
          </h2>
          <p className="text-sm md:text-base text-gray-300 tracking-widest">
            {statsData.description}
          </p>
        </div>

        {/* Background Images Grid */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-30">
          {statsData.images.map((image, index) => (
            <div
              key={index}
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;