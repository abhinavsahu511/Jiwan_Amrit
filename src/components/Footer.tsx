import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, LogOutIcon } from 'lucide-react';
import Image from '../images/14.jpeg';  

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             
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
              <div>
                <h3 className="text-xl font-bold">JivanAmrit</h3>
                <p className="text-sm text-blue-800">Ayurvedic Wellness Center</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Experience the ancient wisdom of Ayurveda with modern healthcare practices. 
              Our expert practitioners provide personalized treatments for holistic wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Appointments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                 Vaidyji Wazirganj (Vaidyagaon)<br/>
                 Gonda Ayodhya Road UP<br/>
                 271124
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-800 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+9984276035</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-800 flex-shrink-0" />
                <p className="text-gray-300 text-sm">vaidyajiofficial@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VaidyJi Ayurvedic Wellness Center. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;