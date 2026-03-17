import React from 'react';
import { BatteryCharging, Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            EV Locator India
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Pioneering the future of sustainable transport by helping millions of Indian EV owners find reliable charging points with ease.
          </p>
          <div className="flex gap-4">
            <Twitter size={18} className="hover:text-emerald-400 cursor-pointer" />
            <Facebook size={18} className="hover:text-emerald-400 cursor-pointer" />
            <Instagram size={18} className="hover:text-emerald-400 cursor-pointer" />
            <Linkedin size={18} className="hover:text-emerald-400 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Explore Stations</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">EV Guide</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">FAME-II Scheme</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> support@evlocator.in</li>
            <li>New Delhi, India</li>
            <li>+91-800-EV-INDIA</li>
          </ul>
        </div>

        {/* Sustainability */}
        <div className="bg-emerald-900/20 p-6 rounded-2xl border border-emerald-500/10">
          <h4 className="text-emerald-400 font-bold mb-2">Go Green</h4>
          <p className="text-xs italic leading-relaxed">
            "Switching to an EV reduces your carbon footprint by up to 1.5 tonnes of CO2 per year. Join the revolution!"
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2026 EV Charging Station Locator India. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// Help helper for icons
const Zap = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 2 3 9h6l-3 9" />
  </svg>
);

export default Footer;
