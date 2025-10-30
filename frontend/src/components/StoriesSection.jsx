import React from 'react';

const StoriesSection = () => {
  const stories = [
    {
      id: 1,
      location: 'NIGERIA',
      title: 'Bringing Hope Through Scripture',
      description: 'Communities transformed as they receive God\'s Word in their heart language.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids1.jpg',
      link: '/blog',
    },
    {
      id: 2,
      location: 'KENYA',
      title: 'Empowering Through Education',
      description: 'Children discovering their potential through faith-based learning.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg',
      link: '/schools',
    },
    {
      id: 3,
      location: 'GHANA',
      title: 'Feeding Bodies and Souls',
      description: 'Meeting physical needs while sharing the love of Christ.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg',
      link: '/ministries',
    },
    {
      id: 4,
      location: 'GLOBAL',
      title: 'Building Lasting Partnerships',
      description: 'Working together with local churches to advance God\'s kingdom.',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg',
      link: '/about',
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <a
              key={story.id}
              href={story.link}
              className="group relative h-[400px] overflow-hidden bg-black"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80"></div>
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <p className="text-xs font-bold text-white/80 tracking-[0.25em] uppercase mb-3">
                  {story.location}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {story.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {story.description}
                </p>
                <button className="text-white text-sm font-semibold uppercase tracking-wider border-2 border-white px-6 py-2 rounded-full inline-block hover:bg-white hover:text-black transition-all self-start">
                  Read More
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;