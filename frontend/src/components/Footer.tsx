import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { paypalDonateLink } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">ABOUT</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h3 className="text-lg font-bold mb-4">EDUCATION</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/schools/jesus-cares" className="hover:text-white transition-colors">Jesus Cares M. School</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-4">GET INVOLVED</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a 
                  href={paypalDonateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Donate Now
                </a>
              </li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Read Our Stories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <a href="mailto:info@frwglobalministries.org" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center">
              <Mail size={16} className="mr-2" />
              info@frwglobalministries.org
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Florence R. White Global Ministries. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;