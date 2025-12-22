
import React from 'react';
import { PROCESS } from '../constants';
import { Search, PenTool, Zap, Repeat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowWeWork: React.FC = () => {
  const icons = [
    <Search className="w-8 h-8" />,
    <PenTool className="w-8 h-8" />,
    <Zap className="w-8 h-8" />,
    <Repeat className="w-8 h-8" />
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4">Our Methodology</h2>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">A Disciplined Path to Growth</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our 4-step engagement process is designed to ensure clarity, alignment, and sustainable impact from day one.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-slate-200 -z-10"></div>
            
            {PROCESS.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-blue-900 shadow-sm group-hover:border-blue-700 group-hover:shadow-lg transition-all duration-300">
                    {icons[index]}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model Detail */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h3 className="text-3xl font-serif text-slate-900 mb-6">Built for Partners, Not Just Clients</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We avoid the "consultant drop-off" by embedding ourselves within your operations. Our goal is to ensure that by the time we reach the **Transfer** phase, your team is fully equipped with the frameworks, tools, and confidence to maintain momentum independently.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-slate-800 font-medium">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                  Hands-on execution and guidance
                </li>
                <li className="flex items-center text-slate-800 font-medium">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                  Capability building & training
                </li>
                <li className="flex items-center text-slate-800 font-medium">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                  Regional regulatory compliance expertise
                </li>
                <li className="flex items-center text-slate-800 font-medium">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                  Proprietary diagnostic frameworks
                </li>
              </ul>
              <div>
                <Link to="/contact" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors group">
                  Learn about custom engagements <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Workshop" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">Ready to Diagnose Your Business?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Every engagement starts with a conversation. Let's discuss your current challenges and where you want to take your enterprise next.
          </p>
          <Link to="/contact" className="inline-flex items-center px-10 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book an Initial Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
