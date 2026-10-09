import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronDown, BadgeDollarSign, Headphones, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '@/src/data/services';
import { cn } from '@/src/lib/utils';

import { specialties } from '@/src/data/specialties';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showSpecialties, setShowSpecialties] = useState(false);
  const [showHomeHealthcare, setShowHomeHealthcare] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
    setShowSpecialties(false);
    setShowHomeHealthcare(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-t-4 border-primary bg-white py-4",
        isScrolled ? "border-b border-slate-100 shadow-md" : "border-b border-black/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://starbillingsolutions.com/wp-content/uploads/2026/02/logo.webp" 
              alt="Star Billing Solutions Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 text-navy font-medium text-sm xl:text-base">
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer py-1">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {showServices && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 p-3 hover:bg-soft rounded-xl transition-colors"
                        >
                          <div className="bg-subtle p-2 rounded-lg text-primary">
                            <service.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{service.title}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Specialties Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowSpecialties(true)}
              onMouseLeave={() => setShowSpecialties(false)}
            >
              <Link to="/specialties" className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer py-1">
                Specialties <ChevronDown className="w-4 h-4" />
              </Link>
              <AnimatePresence>
                {showSpecialties && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden px-4 py-4"
                  >
                    <div className="grid grid-cols-2 gap-2 p-2">
                      {specialties.map((item) => (
                        <Link
                          key={item.id}
                          to={`/specialties/${item.slug}`}
                          className="flex items-center gap-3 p-3 hover:bg-soft rounded-xl transition-colors group/item"
                        >
                          <div className="bg-subtle p-2 rounded-lg text-primary shrink-0 transition-colors group-hover/item:bg-primary/10">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-navy transition-colors group-hover/item:text-primary">{item.name}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* New Tab: Home Healthcare Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowHomeHealthcare(true)}
              onMouseLeave={() => setShowHomeHealthcare(false)}
            >
              <button 
                type="button"
                onClick={() => setShowHomeHealthcare(!showHomeHealthcare)}
                className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer py-1 font-semibold text-primary"
              >
                <span>Home Healthcare</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", showHomeHealthcare && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {showHomeHealthcare && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                  >
                    <div className="p-2 space-y-1">
                      <Link
                        to="/home-healthcare-billing-services"
                        className="flex items-start gap-3 p-3 hover:bg-soft rounded-xl transition-colors group/item"
                      >
                        <div className="bg-primary/10 p-2.5 rounded-lg text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <BadgeDollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy group-hover/item:text-primary transition-colors">
                            Home Healthcare Billing Services
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            OASIS review, PDGM coding & claims
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/home-healthcare-virtual-assistant-services"
                        className="flex items-start gap-3 p-3 hover:bg-soft rounded-xl transition-colors group/item"
                      >
                        <div className="bg-primary/10 p-2.5 rounded-lg text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                          <Headphones className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy group-hover/item:text-primary transition-colors">
                            Home Healthcare Virtual Assistant Services
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Intake, nurse routing & doctor orders
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            
            <Link to="/contact" className="relative p-[2px] rounded-xl overflow-hidden group shadow-lg shadow-primary/10 hover:scale-105 transition-all duration-300 shine-button">
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary)_0%,var(--color-primary-dark)_50%,var(--color-primary)_100%)]" />
              <span className="relative flex items-center justify-center rounded-[10px] bg-navy-dark px-6 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-navy-dark/90 whitespace-nowrap z-20">
                Hire a MVA Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6 max-h-[85vh] overflow-y-auto">
              {/* Home Healthcare Group */}
              <div className="space-y-3 bg-sky-50/50 p-3.5 rounded-xl border border-sky-100">
                <p className="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <HeartPulse className="w-4 h-4" /> Home Healthcare
                </p>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  <Link 
                    to="/home-healthcare-billing-services" 
                    className="text-navy hover:text-primary font-semibold text-sm flex items-center gap-2" 
                    onClick={() => setIsOpen(false)}
                  >
                    <BadgeDollarSign className="w-4 h-4 text-primary shrink-0" />
                    Home Healthcare Billing Services
                  </Link>
                  <Link 
                    to="/home-healthcare-virtual-assistant-services" 
                    className="text-navy hover:text-primary font-semibold text-sm flex items-center gap-2" 
                    onClick={() => setIsOpen(false)}
                  >
                    <Headphones className="w-4 h-4 text-primary shrink-0" />
                    Home Healthcare Virtual Assistant Services
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-muted uppercase tracking-wider">Services</p>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {services.map((service) => (
                    <Link key={service.id} to={`/services/${service.slug}`} className="text-navy hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-muted uppercase tracking-wider">Specialties</p>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {specialties.map((item) => (
                    <Link key={item.id} to={`/specialties/${item.slug}`} className="text-navy hover:text-primary font-medium" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/how-it-works" className="block text-lg font-bold text-navy hover:text-primary">How It Works</Link>
              <Link to="/about" className="block text-lg font-bold text-navy hover:text-primary">About Us</Link>
              <Link to="/contact" className="block text-lg font-bold text-navy hover:text-primary">Contact Us</Link>
              
              <Link to="/contact" className="block btn-primary w-full text-center shine-button mt-6">
                Hire a MVA Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
