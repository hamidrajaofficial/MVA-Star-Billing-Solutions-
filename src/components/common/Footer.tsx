import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { services } from '@/src/data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 pointer-events-auto">
              <img 
                src="https://starbillingsolutions.com/wp-content/uploads/2026/02/logo.webp" 
                alt="Star Billing Solutions Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-muted mb-8 max-w-xs">
              Empowering healthcare providers with premium, HIPAA-compliant revenue cycle solutions. 
              Efficiency, accuracy, and care in every interaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-navy rounded-lg hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-navy rounded-lg hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-navy rounded-lg hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-navy rounded-lg hover:bg-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-muted">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/services" className="text-primary font-medium">View All Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-muted">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Star Billing Solutions</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/specialties" className="hover:text-primary transition-colors">Specialties</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-6 text-slate-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Medical Plaza, Health District,<br/>Suite 500, Austin, TX 78701</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@summitrcm.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="pt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-500/10">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">ISO 27001 Certified</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-muted">
          <p>© {currentYear} Star Billing Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
