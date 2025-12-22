
import React from 'react';
import { LEADERSHIP } from '../constants';
import { Award, Users, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6">About Dillon & Bird Partners</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strategic advisors dedicated to the resilient growth of founders, family enterprises, and established firms across the GCC region.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">Our Core Philosophy</h2>
              <h3 className="text-3xl font-serif text-slate-900 mb-6">Resilience in an Uncertain World</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Dillon & Bird Partners, we believe that sustainable growth isn't achieved through shortcuts or hype. It's the result of rigorous analysis, operational discipline, and the courage to execute through uncertainty.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Headquartered in the UAE and with a regional presence in Oman, we bridge the gap between high-level strategy and day-to-day execution. Our mission is simple: to partner with leaders who are ready to do the work.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Clarity</h5>
                    <p className="text-sm text-slate-500">Unbiased analysis and honest insights.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Discipline</h5>
                    <p className="text-sm text-slate-500">Rigorous processes for predictable results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full opacity-80" />
                </div>
                <div className="bg-blue-900 rounded-2xl h-64 flex flex-col items-center justify-center p-8 text-center text-white mt-12">
                    <Users className="w-12 h-12 mb-4 text-blue-400" />
                    <span className="text-3xl font-bold mb-1">50+</span>
                    <span className="text-sm opacity-80">Projects Completed</span>
                </div>
                <div className="bg-slate-800 rounded-2xl h-64 flex flex-col items-center justify-center p-8 text-center text-white -mt-12">
                    <Target className="w-12 h-12 mb-4 text-blue-400" />
                    <span className="text-3xl font-bold mb-1">GCC</span>
                    <span className="text-sm opacity-80">Full Regional Support</span>
                </div>
                <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="object-cover w-full h-full opacity-80" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">Leadership</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-slate-900">The Partners Behind the Vision</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {LEADERSHIP.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group">
                <div className="h-[400px] overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-blue-700 font-medium mb-6">{member.title}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
