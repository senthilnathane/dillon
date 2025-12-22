
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Insights: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">D&B Insights</h2>
            <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6">Strategic Thinking for the GCC</h1>
            <p className="text-xl text-slate-600">
              Analysis, trends, and expert opinions on market entry, financial strategy, and organizational growth in the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col lg:flex-row overflow-hidden group">
            <div className="lg:w-1/2 overflow-hidden">
               <img 
                 src={BLOG_POSTS[0].image} 
                 alt="Featured post" 
                 className="w-full h-full min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
               />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6 text-xs font-bold uppercase tracking-widest">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{BLOG_POSTS[0].category}</span>
                <span className="text-slate-400">Featured Article</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-6 group-hover:text-blue-900 transition-colors">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                {BLOG_POSTS[0].summary}
              </p>
              <div className="flex items-center space-x-8 mb-10 text-sm text-slate-500">
                <div className="flex items-center">
                   <Calendar className="w-4 h-4 mr-2" />
                   {BLOG_POSTS[0].date}
                </div>
                <div className="flex items-center">
                   <User className="w-4 h-4 mr-2" />
                   {BLOG_POSTS[0].author}
                </div>
              </div>
              <Link 
                to={`/insights/${BLOG_POSTS[0].id}`}
                className="inline-flex items-center text-blue-900 font-bold text-lg hover:underline"
              >
                Continue Reading <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
            <h3 className="text-2xl font-serif text-slate-900">Latest Articles</h3>
            <div className="flex space-x-4">
               {['All', 'Market Entry', 'Financial Strategy', 'Growth'].map((cat) => (
                 <button key={cat} className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors">{cat}</button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Repeat blog posts or show placeholders */}
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} to={`/insights/${post.id}`} className="flex flex-col group">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-100">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-blue-700 font-bold text-[10px] uppercase tracking-widest mb-3 block">{post.category}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors leading-tight">{post.title}</h4>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">{post.summary}</p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    {post.date}
                  </div>
                  <span className="font-bold flex items-center text-blue-900">Read <ArrowRight className="ml-1 w-3 h-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
