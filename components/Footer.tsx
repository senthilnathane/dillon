
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">DILLON & BIRD</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">PARTNERS</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Partnering with founders and family enterprises to build resilient businesses and unlock sustainable growth across the GCC.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Presence</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>Headquarters: UAE</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>Oman Regional Office</span>
              </li>
              <li className="flex items-start">
                <Globe className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>Serving Clients Across GCC</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:info@dillonbird.com" className="hover:text-white transition-colors">info@dillonbird.com</a>
              </li>
              <li className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-blue-400" />
                <a href="https://dillonbird.com" className="hover:text-white transition-colors">dillonbird.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dillon & Bird Partners. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-slate-800/50 pt-8">
             <p className="italic text-slate-500 max-w-2xl mx-auto">
               "Growth today requires more than ambition. It demands clarity, discipline, and the ability to execute through uncertainty. We partner with leaders ready to do the work."
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
