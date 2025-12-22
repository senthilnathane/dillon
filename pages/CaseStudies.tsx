
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowRight, CheckCircle2, Target, BarChart3 } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4">Proven Results</h2>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">Case Studies</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Real-world examples of how we've helped GCC enterprises navigate complexity and achieve sustainable growth.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {CASE_STUDIES.map((study, index) => (
              <div key={study.id} className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 sticky top-32">
                  <span className="text-blue-700 font-bold text-xs uppercase tracking-widest block mb-4">{study.industry}</span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-6">{study.title}</h2>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl mb-8 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="lg:w-1/2 space-y-12">
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex items-center mb-4">
                      <Target className="w-5 h-5 text-blue-700 mr-3" />
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">The Challenge</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="bg-blue-50/30 p-8 rounded-2xl border border-blue-100">
                    <div className="flex items-center mb-4">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 mr-3" />
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">The Solution</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-5 h-5 text-blue-700 mr-3" />
                      <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Key Results</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                           <div className="w-2 h-2 bg-blue-700 rounded-full mr-4 flex-shrink-0"></div>
                           <span className="text-slate-900 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-serif text-slate-900 mb-6">Could Your Business Be Our Next Success Story?</h3>
          <p className="text-slate-600 mb-10">
            Our methodologies are tailored to your unique challenges. Let's discuss how we can drive similar results for your organization.
          </p>
          <a href="#/contact" className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all">
            Schedule a Strategy Briefing
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
