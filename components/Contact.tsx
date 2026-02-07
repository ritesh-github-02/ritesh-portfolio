
import React, { useState } from 'react';
import MotionWrapper from './MotionWrapper';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#014f86] mb-4">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-[#90e0ef] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <MotionWrapper>
            <div className="h-full bg-white p-12 rounded-[2.5rem] shadow-sm border border-[#014f86]/5">
              <h3 className="text-3xl font-black text-[#014f86] mb-8">Let's build something together</h3>
              <p className="text-xl text-[#334155] font-bold mb-12 leading-relaxed opacity-80">
                Whether you have an enterprise project idea or just want to say hi, my inbox is always open.
              </p>

              <div className="space-y-8 mb-16">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#014f86]/10 rounded-[1.5rem] flex items-center justify-center text-[#014f86]">
                    <Mail size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-[#014f86]/50 font-black uppercase tracking-widest">Email Me</p>
                    <p className="text-xl text-[#014f86] font-black">ritesh.waghmare@email.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#f26a8d]/10 rounded-[1.5rem] flex items-center justify-center text-[#f26a8d]">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-[#014f86]/50 font-black uppercase tracking-widest">Location</p>
                    <p className="text-xl text-[#014f86] font-black">Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <a href="#" className="p-5 bg-[#014f86]/5 text-[#014f86] rounded-2xl hover:bg-[#014f86] hover:text-white transition-all shadow-sm">
                  <Github size={28} />
                </a>
                <a href="#" className="p-5 bg-[#014f86]/5 text-[#014f86] rounded-2xl hover:bg-[#014f86] hover:text-white transition-all shadow-sm">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </MotionWrapper>

          {/* Form Side */}
          <MotionWrapper delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-[#014f86]/5">
              <div className="mb-8">
                <label className="block text-sm font-black text-[#014f86] mb-3 uppercase tracking-widest">Name</label>
                <input 
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({...prev, name: e.target.value}))}
                  className="w-full px-8 py-5 bg-[#f8fafc] border-2 border-[#014f86]/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#90e0ef]/20 focus:border-[#014f86]/30 transition-all font-bold"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-black text-[#014f86] mb-3 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({...prev, email: e.target.value}))}
                  className="w-full px-8 py-5 bg-[#f8fafc] border-2 border-[#014f86]/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#90e0ef]/20 focus:border-[#014f86]/30 transition-all font-bold"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-10">
                <label className="block text-sm font-black text-[#014f86] mb-3 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({...prev, message: e.target.value}))}
                  className="w-full px-8 py-5 bg-[#f8fafc] border-2 border-[#014f86]/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#90e0ef]/20 focus:border-[#014f86]/30 transition-all resize-none font-bold"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-105 active:scale-95 ${
                  submitted 
                  ? 'bg-[#52b788] text-white shadow-[#52b788]/30' 
                  : 'bg-[#014f86] text-white hover:bg-[#013a63] shadow-[#014f86]/30'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : submitted ? (
                  <>Message Sent! <Send size={24} /></>
                ) : (
                  <>Send Message <Send size={24} /></>
                )}
              </button>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
