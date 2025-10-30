import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { aboutContent, paypalDonateLink } from '../data/mock';
import { Heart, Globe, BookOpen, Users } from 'lucide-react';

const AboutPage = () => {
  const iconMap = {
    'Faith in Action': Heart,
    'Global Impact': Globe,
    'Empowering Education': BookOpen,
    'Unity in Christ': Users,
  };

  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About Our Ministry
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing God's love through service, education, and faith
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.mission}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.vision}
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => {
              const Icon = iconMap[value.title];
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Florence R. White
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {aboutContent.leadershipBio}
            </p>
            <a
              href={paypalDonateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Support Our Mission
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg"
                alt="Florence R. White"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Together, we can transform lives and communities through the love of Christ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={paypalDonateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </a>
            <a
              href="#newsletter"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all"
            >
              Get Updates
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;