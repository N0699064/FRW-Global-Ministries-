import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { schoolsContent, paypalDonateLink } from '../data/mock';
import { GraduationCap, BookOpen, Users, Award, Heart, Target } from 'lucide-react';

const SchoolsPage = () => {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${schoolsContent.mainSchool.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {schoolsContent.mainSchool.name}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {schoolsContent.mainSchool.description}
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
            <Target size={32} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {schoolsContent.mainSchool.mission}
          </p>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {schoolsContent.impact.studentsServed}
              </div>
              <div className="text-gray-300">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {schoolsContent.impact.yearsOperating}
              </div>
              <div className="text-gray-300">Years Operating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {schoolsContent.impact.graduationRate}
              </div>
              <div className="text-gray-300">Graduation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {schoolsContent.impact.scholarshipsProvided}
              </div>
              <div className="text-gray-300">Scholarships Provided</div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolsContent.mainSchool.programs.map((program, index) => {
            const icons = [BookOpen, GraduationCap, Heart, Users, Award, Target];
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{program}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Life at Jesus Cares M. School
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.frwglobalministries.org/cdn/shop/files/frwkids1.jpg"
                alt="Students"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg"
                alt="Classroom"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.frwglobalministries.org/cdn/shop/files/frwkids5-1.jpg"
                alt="Activities"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Support Quality Christian Education
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your donation helps provide education, resources, and opportunities for students to thrive
          </p>
          <a
            href={paypalDonateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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