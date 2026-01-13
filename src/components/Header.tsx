
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Phone, Mail } from 'lucide-react';
import '../Style/header.css';
import Image from '../images/14.jpeg';  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Matricharya', href: '/Matricharya' },
    { name: 'Services', href: '/services' },
    { name: 'Appointments', href: '/appointments' },
    { name: 'Contact', href: '/contact' },
        { name: 'About us', href: '/about' },

  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-blue-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+9984276035</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>vaidyajiofficial@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4"> 
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div
  style={{
    padding: "8px",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    overflow: "hidden",
  }}
>
  <img
    src={Image}
    alt="logo"
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
    }}
  />
</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block transform hover:scale-105">
            <Link
              to="/appointments"
              className=" border-2 border-blue bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-500 transition-colors duration-100 "
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/appointments"
                className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-200 text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
