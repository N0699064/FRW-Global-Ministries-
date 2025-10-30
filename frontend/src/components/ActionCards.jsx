import React from 'react';
import { actionCards } from '../data/mock';

const ActionCards = () => {
  return (
    <div className="w-full py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actionCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target={card.link.startsWith('http') ? '_blank' : '_self'}
              rel={card.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group relative h-[500px] overflow-hidden bg-black"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-10">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionCards;