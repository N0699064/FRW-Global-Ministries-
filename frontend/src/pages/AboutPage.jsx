import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { aboutContent, paypalDonateLink } from '../data/mock';
import { Quote } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-0">
        <div className="relative h-[500px] overflow-hidden">
          <img
            src="https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg"
            alt="Ministry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Loving God and Loving Others Since 1993
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase mb-4">
              FOUNDER & DIRECTOR
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {aboutContent.founderName}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>{aboutContent.founderBio}</p>
              <p>{aboutContent.usJourney}</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutContent.founderImage}
                alt={aboutContent.founderName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-amber-600 tracking-[0.25em] uppercase mb-4">
              OUR MISSION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              United in Purpose, Driven by Faith
            </h2>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <Quote size={48} className="text-gray-300 mb-6" />
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>{aboutContent.ourMission}</p>
              <p>{aboutContent.expansion}</p>
              <p>{aboutContent.commitment}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">Three decades of faithful service</p>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
              <div className="text-5xl font-bold text-black mb-2">1993</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">The Beginning</div>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ministry Begins in Ghana</h3>
              <p className="text-gray-700">Florence starts feeding people in her restaurant, which quickly becomes a church as people hunger for spiritual food.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
              <div className="text-5xl font-bold text-black mb-2">1996</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Official Launch</div>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Jesus Cares Evangelistic Ministry International</h3>
              <p className="text-gray-700">Official establishment of the ministry, expanding reach across Ghana and neighboring countries.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
              <div className="text-5xl font-bold text-black mb-2">1999</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Global Expansion</div>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Coming to America</h3>
              <p className="text-gray-700">Florence moves to the United States to pursue theological education and expand the ministry's reach.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
              <div className="text-5xl font-bold text-black mb-2">2008</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Education Focus</div>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Jesus Cares M. School Opens</h3>
              <p className="text-gray-700">Establishing a Christian school in Ghana to educate and empower the next generation.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center md:text-right">
              <div className="text-5xl font-bold text-black mb-2">Today</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Ongoing Impact</div>
            </div>
            <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Ministry Network</h3>
              <p className="text-gray-700">Operating in 15+ countries, with churches planted, schools established, and thousands of lives transformed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in This Mission
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Your partnership makes a difference in the lives of thousands around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={paypalDonateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="/blog"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all"
            >
              Read Our Stories
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;