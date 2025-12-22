
import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-50">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-blue-900 font-bold tracking-wider text-sm uppercase mb-4">Connect With Us</h2>
              <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-8">Let's Build Your <br /> Growth Strategy</h1>
              <p className="text-xl text-slate-600 mb-12">
                We are headquartered in the UAE and maintain a regional presence in Oman, serving ambitious businesses across the entire GCC.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mr-6">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Inquiries</h4>
                    <p className="text-slate-600">info@dillonbird.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mr-6">
                    <Globe className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Official Website</h4>
                    <p className="text-slate-600">dillonbird.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mr-6">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Locations</h4>
                    <p className="text-slate-600">Headquarters: United Arab Emirates</p>
                    <p className="text-slate-600">Regional Presence: Oman</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-blue-900 rounded-2xl text-white">
                <p className="italic text-lg mb-6 leading-relaxed">
                  "Growth today requires more than ambition. It demands clarity, discipline, and the ability to execute through uncertainty. We partner with leaders ready to do the work."
                </p>
                <div className="flex items-center">
                    <div className="w-10 h-1 bg-blue-400 mr-4"></div>
                    <span className="font-bold tracking-widest text-xs uppercase">Dillon & Bird Partners</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent</h3>
                  <p className="text-slate-600">Thank you for reaching out. A partner will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="Your Enterprise"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none"
                        placeholder="Tell us about your strategic goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all flex items-center justify-center shadow-lg"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                      By submitting this form, you agree to our privacy policy. We typically respond within 24 business hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
         <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white text-center">
                 <MapPin className="w-10 h-10 text-blue-900 mx-auto mb-4" />
                 <h4 className="font-bold text-slate-900">Regional Coverage</h4>
                 <p className="text-sm text-slate-600">Serving UAE, Oman, and GCC Neighbors</p>
             </div>
         </div>
         <img src="https://images.unsplash.com/photo-1578891122703-a2046422d334?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Map region" />
      </section>
    </div>
  );
};

export default Contact;
