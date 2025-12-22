
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Building, Target, Quote } from 'lucide-react';
import { SERVICES, TESTIMONIALS, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
            alt="Corporate background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Strategic Growth <br />
              <span className="text-blue-400">Across the GCC</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl">
              We partner with founders, family enterprises, and growth-stage companies to build resilient businesses and unlock sustainable growth in the UAE, Oman, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 transition-all shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-lg font-medium rounded-md text-slate-300 hover:bg-slate-800 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 p-3 rounded-full text-blue-700">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">GCC Expertise</h3>
                <p className="text-slate-500 text-sm">Deep regional market knowledge</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 p-3 rounded-full text-blue-700">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Corporate Advisory</h3>
                <p className="text-slate-500 text-sm">Full lifecycle business support</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 p-3 rounded-full text-blue-700">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Strategic Partner</h3>
                <p className="text-slate-500 text-sm">Hands-on execution focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">Our Mission</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-6">Partnering for Resilience and Sustainable Growth</h3>
            <p className="text-lg text-slate-600">
              In a rapidly evolving economic landscape, ambition alone isn't enough. We provide the clarity and discipline required to turn vision into measurable reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Working session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="flex">
                <CheckCircle2 className="w-8 h-8 text-blue-700 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">GCC Insight</h4>
                  <p className="text-slate-600">Headquartered in UAE with presence in Oman, we navigate regional complexities with local nuance and global standards.</p>
                </div>
              </div>
              <div className="flex">
                <CheckCircle2 className="w-8 h-8 text-blue-700 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Integrated Solutions</h4>
                  <p className="text-slate-600">From company formation to fractional CXO leadership, we offer a seamless continuum of corporate services.</p>
                </div>
              </div>
              <div className="flex">
                <CheckCircle2 className="w-8 h-8 text-blue-700 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Execution-Oriented</h4>
                  <p className="text-slate-600">We don't just deliver reports; we roll up our sleeves to execute strategies alongside your team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">Client Feedback</h2>
            <h3 className="text-3xl font-serif text-slate-900">What Our Partners Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <Quote className="w-10 h-10 text-blue-200 mb-4" />
                  <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="flex items-center">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 bg-slate-200" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{t.name}</h5>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">Our Leadership</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-slate-900">Meet Our Founders</h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Praveen Kumar - Co-Founder and Head of Strategy, Technology and Business Consulting
            </p>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dinesh - Co-Founder and Head of Financial Strategy and Advisory
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="text-6xl font-bold text-blue-400 mb-4">01</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Praveen Kumar</h4>
                <p className="text-slate-600 text-center text-sm">Co-Founder and Head of Strategy, Technology and Business Consulting</p>
              </div>
              <div className="p-8 flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="text-6xl font-bold text-blue-400 mb-4">02</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Dinesh</h4>
                <p className="text-slate-600 text-center text-sm">Co-Founder and Head of Financial Strategy and Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">What We Do</h2>
              <h3 className="text-3xl sm:text-4xl font-serif text-slate-900">Comprehensive Advisory for Every Growth Stage</h3>
            </div>
            <Link to="/services" className="text-blue-700 font-semibold flex items-center hover:text-blue-900 transition-colors">
              View all services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 bg-slate-50 rounded-xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-blue-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">Latest Insights</h2>
          <h3 className="text-3xl font-serif text-slate-900 mb-12">Regional Trends & Strategic Analysis</h3>
          <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden group">
            <div className="md:w-2/5 overflow-hidden">
               <img src={BLOG_POSTS[0].image} alt="Insight" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="md:w-3/5 p-8 text-left">
               <span className="text-blue-700 font-bold text-xs uppercase mb-2 block">{BLOG_POSTS[0].category}</span>
               <h4 className="text-2xl font-bold text-slate-900 mb-4">{BLOG_POSTS[0].title}</h4>
               <p className="text-slate-600 mb-6 line-clamp-2">{BLOG_POSTS[0].summary}</p>
               <Link to={`/insights/${BLOG_POSTS[0].id}`} className="inline-flex items-center text-blue-900 font-bold hover:underline">
                 Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 gap-4 transform -rotate-12 translate-y-12">
                {[...Array(24)].map((_, i) => (
                    <div key={i} className="h-32 border border-white rounded-lg"></div>
                ))}
            </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-8 leading-relaxed">
                "Growth today requires more than ambition. It demands clarity, discipline, and the ability to execute through uncertainty."
            </h3>
            <p className="text-blue-400 font-medium text-lg mb-10">
                We partner with leaders ready to do the work.
            </p>
            <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-slate-900 transition-all"
            >
                Let's Discuss Your Strategy
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
