import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
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
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-bold mb-4">MINISTRIES</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/ministries" className="hover:text-white transition-colors">Global Outreach</Link></li>
              <li><Link to="/ministries" className="hover:text-white transition-colors">Children's Ministry</Link></li>
              <li><Link to="/ministries" className="hover:text-white transition-colors">Food Program</Link></li>
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
              <li><Link to="#prayer" className="hover:text-white transition-colors">Prayer Request</Link></li>
              <li><Link to="#newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONNECT</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <a href="mailto:info@frwglobalministries.org" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center">
              <Mail size={16} className="mr-2" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Florence R. White Global Ministries. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;