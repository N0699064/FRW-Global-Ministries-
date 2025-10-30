import React from 'react';
import { missionContent } from '../data/mock';

const MissionSection = () => {
  return (
    <div className="w-full bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-bold text-amber-600 tracking-[0.2em] uppercase mb-8">
          {missionContent.title}
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight text-gray-900">
          {missionContent.description}
        </h2>
      </div>
    </div>
  );
};

export default MissionSection;