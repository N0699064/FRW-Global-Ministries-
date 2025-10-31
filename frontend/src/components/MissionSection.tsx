import React from 'react';
import { missionContent } from '../data/mock';

const MissionSection: React.FC = () => {
  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase mb-6">
          {missionContent.title}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-gray-900">
          {missionContent.description}
        </h2>
      </div>
    </div>
  );
};

export default MissionSection;