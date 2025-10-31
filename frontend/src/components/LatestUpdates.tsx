import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';

const LatestUpdates = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="w-full bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600">
              Stay connected with what God is doing through our ministry
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center text-black font-semibold hover:underline group"
          >
            View All Stories
            <ArrowRight
              size={20}
              className="ml-2 transition-transform group-hover:translate-x-2"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center text-black font-semibold hover:underline group"
          >
            View All Stories
            <ArrowRight
              size={20}
              className="ml-2 transition-transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;