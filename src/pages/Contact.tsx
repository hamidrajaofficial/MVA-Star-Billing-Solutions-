import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Calendar, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Dark Background */}
      <section className="relative bg-[#0A1628] pt-32 pb-64 overflow-hidden">
        {/* Background Gradients/Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0052FF]/10 blur-[120px] -z-0 opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#00BCD4]/5 blur-[120px] -z-0 opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-teal border-[#00BCD4]/30 bg-[#00BCD4]/10 text-[#00BCD4] mb-8">
              Schedule A Consultation
            </div>
            <h1 className="text-white mb-12">
              Transform Your <span className="text-[#00BCD4] italic">Revenue</span> <br />
              <span className="text-white">Cycle Management</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Form Card Section - Overlapping the Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-48 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-slate-50"
          >
            {!submitted ? (
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 text-[#00BCD4] font-bold uppercase tracking-widest text-xs mb-4">
                  <Calendar className="w-4 h-4" />
                  Book a Meeting
                </div>
                <h2 className="mb-6">Request a <span className="text-[#00BCD4]">Consultation</span></h2>
              </div>
            ) : null}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Smith"
                      className="w-full px-6 py-4 bg-section-bg border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all text-navy-dark placeholder:text-slate-300"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@email.com"
                      className="w-full px-6 py-4 bg-section-bg border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all text-navy-dark placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(555) 555-5555"
                      className="w-full px-6 py-4 bg-section-bg border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all text-navy-dark placeholder:text-slate-300"
                    />
                  </div>
                  {/* Practice Size */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Practice Size</label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 bg-section-bg border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all text-navy-dark appearance-none">
                        <option>Select Practice Size</option>
                        <option>Solo Practitioner</option>
                        <option>2-5 Providers</option>
                        <option>6-15 Providers</option>
                        <option>16+ Providers</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Monthly Claim Volume */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Monthly Claim Volume</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-section-bg border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all text-navy-dark appearance-none">
                      <option>Select Claim Volume</option>
                      <option>&lt; 500 claims</option>
                      <option>500 - 2,000 claims</option>
                      <option>2,000 - 5,000 claims</option>
                      <option>5,000+ claims</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message / Notes</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your current billing challenges..."
                    className="w-full px-6 py-4 bg-section-bg border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BCD4]/20 focus:border-[#00BCD4] transition-all text-navy-dark placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                {/* Consent */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" required className="peer sr-only" />
                    <div className="w-5 h-5 border-2 border-slate-200 rounded group-hover:border-[#00BCD4] peer-checked:bg-[#00BCD4] peer-checked:border-[#00BCD4] transition-all" />
                    <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[11px] text-slate-body leading-relaxed">
                    I consent to receive calls and SMS messages regarding my inquiry. I understand I can opt out at any time by replying STOP.
                  </span>
                </label>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#0A1628] text-white py-6 rounded-xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#152840] transition-all shadow-xl shadow-navy-dark/10"
                >
                  Request Meeting <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <AnimatePresence>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-[#00BCD4]/10 text-[#00BCD4] rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black text-navy-dark mb-4">Request Sent!</h3>
                  <p className="text-lg text-slate-body mb-10 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. One of our specialists will review your practice details and contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#0052FF] font-black uppercase tracking-widest text-xs hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-[30px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#F0FBFC] rounded-2xl flex items-center justify-center text-[#00BCD4]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark">Email Us</h3>
              </div>
              <p className="text-slate-600 font-medium ml-1">info@starbillingsolutions.com</p>
            </motion.div>

            {/* Call Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#F0FBFC] rounded-2xl flex items-center justify-center text-[#00BCD4]">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark">Call Us</h3>
              </div>
              <p className="text-slate-600 font-medium ml-1">+1 (888) 928-6503</p>
            </motion.div>

            {/* Visit Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#F0FBFC] rounded-2xl flex items-center justify-center text-[#00BCD4]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark">Visit Us</h3>
              </div>
              <p className="text-slate-600 font-medium ml-1 leading-relaxed">
                5900 Balcones Drive #18523 <br />
                Austin, TX 78731
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
