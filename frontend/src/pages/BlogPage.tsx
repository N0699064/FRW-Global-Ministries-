import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/mock';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = ['All', 'Ministry Update', 'Outreach', 'Children', 'Global Ministry', 'Testimony', 'Teaching'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">STORIES & NEWS</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Read about how God is moving through our ministry around the world.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link to={`/blog/${post.id}`}>
                {/* Image */}
                <div className="relative h-64 mb-4 overflow-hidden rounded-sm">
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

                {/* Content */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-sm font-semibold text-black group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;