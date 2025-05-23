
'use client';

import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-6 px-6 py-10">
      <div className="max-w-7xl ml-1 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-3">Eco<span className='text-gray-200'>Track</span></h2>
          <p className="text-sm">
           Track, manage, and reduce your home energy usage — all in one smart, seamless platform.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Product Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Smart Meters</a></li>
            <li><a href="#" className="hover:text-white transition">Smart Plugs</a></li>
            <li><a href="#" className="hover:text-white transition">OEM</a></li>
            <li><a href="#" className="hover:text-white transition">Integration Kits</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm flex items-center gap-2">
            <Mail size={16} /> support@ecotrack.com
          </p>
          <p className="text-sm flex items-center gap-2">
            <Phone size={16} /> +1 234 567 890
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EcoTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
