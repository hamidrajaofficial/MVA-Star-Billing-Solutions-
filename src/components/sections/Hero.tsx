import { motion } from 'motion/react';
import { Star, MessageSquare, Plus, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative z-10 pt-[100px] lg:pt-[115px] pb-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://media.proprofs.com/images/QM/user_images/2503852/-Divine-Medical-.webp')` 
        }} 
      />
      <div className="absolute inset-0 bg-white/50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-teal">
              #1 Choice For Remote Medical Staffing
            </div>

            <h1 className="mb-8">
              Ultimate <span className="text-primary relative inline-block">
                Healthcare Virtual Assistant
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M1 6C50 2 150 2 299 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-slate-muted mb-10 max-w-xl leading-relaxed">
              <strong className="text-navy-dark">Star Billing Solutions</strong> provides the <span className="text-primary font-semibold">best healthcare virtual assistants</span> for practices struggling with administrative overload. Our specialized <span className="font-bold text-navy-dark underline decoration-primary/30">healthcare virtual assistants</span> handle your documentation and billing so you can prioritize patient care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform group shine-button"
              >
                Get Quote Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform group shine-button"
              >
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                Send Text Message
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {/* Google Reviews */}
              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center p-2 shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className="absolute -right-2 top-0 bg-white p-0.5 rounded-full border border-slate-50">
                    <CheckCircle2 className="w-3 h-3 text-green-500 fill-current" />
                  </div>
                </div>
                <div>
                  <div className="text-slate-muted font-bold text-sm mb-1 uppercase tracking-wider">Google Reviews</div>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    ))}
                    <div className="relative w-3.5 h-3.5">
                      <Star className="absolute inset-0 text-yellow-400 fill-current opacity-30" />
                      <div className="absolute inset-0 overflow-hidden w-1/2">
                        <Star className="text-yellow-400 fill-current w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] font-black text-navy-dark leading-none">
                    4.2 Stars <span className="text-slate-300 mx-1">|</span> 10,077 reviews
                  </div>
                </div>
              </div>

              {/* HIPAA Badge */}
              <div className="flex items-center gap-3 bg-[#EAF7FF] px-4 py-3 rounded-xl border border-primary/10">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-navy-dark font-black text-sm uppercase tracking-tighter leading-tight">HIPAA</div>
                  <div className="text-primary font-bold text-[10px] uppercase tracking-widest leading-none">Compliant</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:-mt-16"
          >
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="relative z-10 mx-auto max-w-lg overflow-visible">
              {/* Main Professional Image */}
              <div className="relative w-full flex items-end justify-center">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Zg98Ni0EPaJBFkP2yqHVOSCEzW-PaO6I" 
                  alt="Billing Expert" 
                  className="w-auto h-[550px] lg:h-[650px] max-w-full object-contain drop-shadow-2xl translate-y-16 translate-x-4 lg:translate-x-12"
                />
              </div>

              {/* Floating Badge 1: Specialties */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-10 top-2/3 bg-white px-6 py-3 rounded-full shadow-2xl border border-slate-100 flex items-center gap-2 z-20"
              >
                <div className="bg-primary p-2 rounded-full">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <span className="text-navy-dark font-bold whitespace-nowrap">Serving 25+ Medical Specialties</span>
              </motion.div>

              {/* Floating Card 1: Satisfied Providers */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-6 top-[42%] bg-white p-5 rounded-2xl shadow-2xl border border-slate-50 z-20 flex flex-col gap-3 min-w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Doc${i}`} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" alt="Provider" />
                    ))}
                  </div>
                  <span className="text-navy-dark font-black text-lg">300+</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-primary mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-bold">Satisfied Providers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-[10px] font-bold text-slate-muted ml-1">(4.7 Stars)</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
