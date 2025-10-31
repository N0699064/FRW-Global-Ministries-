import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems, paypalDonateLink } from '../data/mock';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string): void => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = (): void => {
    // Small delay to allow mouse to move into dropdown
    setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleDropdown = (itemName: string): void => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_frw-paypal-store/artifacts/rcr9qh4n_frwlogosss.svg"
              alt="Florence R. White Global Ministries"
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-black tracking-tight">Florence R. White</span>
              <span className="text-sm text-gray-600">Global Ministries</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`text-sm font-semibold tracking-wider transition-colors flex items-center ${
                        location.pathname.startsWith(item.path)
                          ? 'text-black'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {openDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 border border-gray-100"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-semibold tracking-wider transition-colors ${
                      location.pathname === item.path
                        ? 'text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={paypalDonateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              GIVE
            </a>
            <button className="text-gray-600 hover:text-black transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full text-left text-sm font-semibold tracking-wider text-gray-600 hover:text-black flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block text-sm text-gray-500 hover:text-black"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-sm font-semibold tracking-wider text-gray-600 hover:text-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={paypalDonateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black text-white px-6 py-2 rounded-full text-sm font-semibold text-center hover:bg-gray-800 transition-colors"
            >
              GIVE
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;