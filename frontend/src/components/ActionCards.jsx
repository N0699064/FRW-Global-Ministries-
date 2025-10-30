import React from 'react';
import { actionCards } from '../data/mock';

const ActionCards = () => {
  return (
    <div className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actionCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target={card.link.startsWith('http') ? '_blank' : '_self'}
              rel={card.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group relative h-[450px] overflow-hidden bg-black"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
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