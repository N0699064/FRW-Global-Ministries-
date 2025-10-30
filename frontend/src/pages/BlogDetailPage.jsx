import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/mock';

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="w-full">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-black hover:underline">Return to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative pt-24 pb-0">
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-black mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            {post.date}
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-2" />
            {post.author}
          </div>
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Share This Story</h3>
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold transition-colors">
              Share on Facebook
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold transition-colors">
              Share on Twitter
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;