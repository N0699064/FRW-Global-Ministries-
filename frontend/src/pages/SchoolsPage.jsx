import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { schoolsContent, paypalDonateLink } from '../data/mock';
import { Quote } from 'lucide-react';

const SchoolsPage = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-0">
        <div className="relative h-[600px] overflow-hidden">
          <img
            src={schoolsContent.mainSchool.image}
            alt={schoolsContent.mainSchool.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {schoolsContent.mainSchool.name}
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-light">
                {schoolsContent.mainSchool.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>{schoolsContent.mainSchool.description}</p>
            <p>{schoolsContent.mainSchool.mission}</p>
            <p>{schoolsContent.mainSchool.guidance}</p>
            <p>{schoolsContent.mainSchool.commitment}</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life at Our School
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our vibrant learning community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolsContent.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={image}
                  alt={`School life ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Biblical Verses Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Foundation
          </h2>
          <p className="text-xl text-gray-600">
            Biblical principles that guide our mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schoolsContent.verses.map((verse, index) => (
            <div
              key={index}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group"
            >
              <img
                src={verse.image}
                alt={verse.verse}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
                <Quote size={40} className="mb-6 text-white/80" />
                <p className="text-sm font-bold tracking-widest mb-4">
                  {verse.verse}
                </p>
                <p className="text-lg leading-relaxed">
                  {verse.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support CTA */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Support Quality Christian Education
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Your gift provides scholarships, supplies, and opportunities for students to excel in both academics and faith
          </p>
          <a
            href={paypalDonateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            Support Our School
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SchoolsPage;
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Life at Our School</h2>
          <p className="text-xl text-gray-600">A glimpse into our vibrant learning community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
            <img
              src="https://www.frwglobalministries.org/cdn/shop/files/frwkids1.jpg"
              alt="Classroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">In the Classroom</h3>
                <p className="text-sm text-gray-200">Engaging lessons that inspire</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
            <img
              src="https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg"
              alt="Activities"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Student Activities</h3>
                <p className="text-sm text-gray-200">Learning beyond textbooks</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
            <img
              src="https://www.frwglobalministries.org/cdn/shop/files/frwkids5-1.jpg"
              alt="Community"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Community Service</h3>
                <p className="text-sm text-gray-200">Making a difference together</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
            <img
              src="https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg"
              alt="Meals"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Nutrition Program</h3>
                <p className="text-sm text-gray-200">Healthy meals daily</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
            <img
              src="https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg"
              alt="Worship"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Chapel Services</h3>
                <p className="text-sm text-gray-200">Growing in faith together</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
            <img
              src="https://www.frwglobalministries.org/cdn/shop/files/crossssbg.jpg"
              alt="Campus"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Our Campus</h3>
                <p className="text-sm text-gray-200">A place to grow and thrive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-black rounded-full mx-auto mb-6 overflow-hidden">
              <img
                src="https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-900 mb-8 italic leading-relaxed">
            "Jesus Cares M. School didn't just prepare me for university – it prepared me for life. The biblical foundation I received shapes every decision I make today."
          </blockquote>
          <div className="text-lg font-semibold text-gray-900">Emmanuel K.</div>
          <div className="text-gray-600">Class of 2020, Now at University of Ghana</div>
        </div>
      </div>

      {/* Support CTA */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Support Quality Christian Education
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Your gift provides scholarships, supplies, and opportunities for students to excel
          </p>
          <a
            href={paypalDonateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            Support Our School
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SchoolsPage;