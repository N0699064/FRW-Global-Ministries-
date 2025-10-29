import React from 'react';
import { missionContent } from '../data/mock';

const MissionSection = () => {
  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-amber-700 tracking-widest mb-6">
          {missionContent.title}
        </p>
        <h2 className="text-4xl md:text-5xl font-normal leading-relaxed mb-8">
          <span className="text-gray-900">{missionContent.description.split('.')[0]}.</span>
          <span className="text-gray-400">
            {' '}
            {missionContent.description.split('.').slice(1).join('.')}
          </span>
        </h2>
        <p className="text-xl font-semibold text-gray-700 mt-8">
          {missionContent.highlight}
        </p>
      </div>
    </div>
  );
};

export default MissionSection;