
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link to="/insights" className="text-blue-700 flex items-center justify-center hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/insights" className="inline-flex items-center text-slate-500 hover:text-blue-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm font-medium">{post.date}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-6 border-y border-slate-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                {post.author.charAt(0)}
              </div>
              <div>
                <span className="block font-bold text-slate-900">{post.author}</span>
                <span className="block text-xs text-slate-500">Partner, Dillon & Bird Partners</span>
              </div>
            </div>
            <button className="p-3 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-blue-900">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 mb-20">
        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 font-medium italic mb-12 border-l-4 border-blue-700 pl-8 leading-relaxed">
            {post.summary}
          </p>
          <div className="space-y-8 text-slate-700 leading-relaxed text-lg whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Closing Quote/Tagline */}
        <div className="mt-20 p-12 bg-slate-900 rounded-3xl text-white text-center">
          <h3 className="text-2xl font-serif mb-6 italic">"The right structure is the foundation of future growth."</h3>
          <p className="text-slate-400 mb-10">
            Dillon & Bird Partners provides the clarity and execution capacity required for successful GCC market entry and expansion.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
            Consult Our Partners
          </Link>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
           <h3 className="text-2xl font-serif text-slate-900 mb-12">More from D&B Insights</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 opacity-50 pointer-events-none">
              <div className="bg-white p-8 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-bold uppercase block mb-2">Coming Soon</span>
                <h4 className="font-bold text-slate-900 mb-4">Optimizing Operating Models for GCC Growth</h4>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-bold uppercase block mb-2">Coming Soon</span>
                <h4 className="font-bold text-slate-900 mb-4">Financial Readiness for Institutional Capital</h4>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-100">
                <span className="text-xs text-slate-400 font-bold uppercase block mb-2">Coming Soon</span>
                <h4 className="font-bold text-slate-900 mb-4">Leveraging AI in Regional Logistics</h4>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default InsightDetail;
