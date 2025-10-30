import React, { useState, useEffect } from 'react';
import { heroContent } from '../data/mock';
import { Play, X } from 'lucide-react';

const HeroSection = () => {
  const [showFullVideo, setShowFullVideo] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  
  // Extract Vimeo video ID from URL
  const getVimeoId = (url) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const vimeoId = getVimeoId(heroContent.videoUrl);

  // Force video reload on mount
  useEffect(() => {
    setVideoKey(prev => prev + 1);
  }, []);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0">
          {vimeoId ? (
            <iframe
              key={videoKey}
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&autopause=0&muted=1&quality=auto`}
              className="absolute w-full h-full"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '177.77777778vh',
                height: '56.25vw',
                minHeight: '100%',
                minWidth: '100%',
                transform: 'translate(-50%, -50%)',
              }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroContent.backgroundImage})`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-6xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/75 mb-8 tracking-tight leading-tight animate-fade-in drop-shadow-2xl">
              {heroContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light animate-fade-in-delay drop-shadow-lg mb-8">
              {heroContent.subtitle}
            </p>
            
            {/* Play Full Video Button */}
            <button
              onClick={() => setShowFullVideo(true)}
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/25 transition-all duration-300 border-2 border-white/30 group animate-fade-in-delay"
            >
              <Play size={24} className="group-hover:scale-110 transition-transform" />
              Watch Full Video
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Full Video Modal */}
      {showFullVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowFullVideo(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={40} />
          </button>
          <div className="relative w-full max-w-6xl aspect-video">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=1&byline=1&portrait=1`}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;