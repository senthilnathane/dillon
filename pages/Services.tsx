
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ChevronRight, Briefcase, Zap, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/10 skew-x-12 translate-x-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Specialized advisory solutions designed to build, protect, and scale business ventures in the Gulf Cooperation Council.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {SERVICES.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed italic">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-700 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1454165833767-02302307f0df' : '1551434678-e076c223a692'}?q=80&w=2070&auto=format&fit=crop`}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Services Special Highlight */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4">Strategic Capacity</h2>
            <h3 className="text-3xl sm:text-4xl font-serif mb-6">Fractional CXO Services</h3>
            <p className="text-slate-400 text-lg">
              High-growth companies often face a leadership gap. We provide seasoned executive leadership on a fractional basis to bridge the divide between growth and maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Fractional CFO</h4>
              <p className="text-slate-400 text-sm">Strategic financial leadership, investor reporting, and capital management without the full-time overhead.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Fractional CTO</h4>
              <p className="text-slate-400 text-sm">Technology roadmap development, workflow automation, and digital enablement for modern operations.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Fractional CMO</h4>
              <p className="text-slate-400 text-sm">Go-to-market strategy, brand positioning, and regional expansion leadership across the GCC.</p>
            </div>
          </div>

          <div className="mt-20 text-center">
             <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Request Executive Support <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
