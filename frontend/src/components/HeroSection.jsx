import React from 'react';
import { heroContent } from '../data/mock';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroContent.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            {heroContent.subtitle}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;