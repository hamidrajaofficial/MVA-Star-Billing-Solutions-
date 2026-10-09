import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Challenges from '../components/sections/Challenges';
import NextStep from '../components/sections/NextStep';
import ServicesTabs from '../components/sections/ServicesTabs';
import Stats from '../components/sections/Stats';
import ServicePreview from '../components/sections/ServicePreview';
import ServingSizes from '../components/sections/ServingSizes';
import LocationSection from '../components/sections/LocationSection';
import SoftwareWeUse from '../components/sections/SoftwareWeUse';
import CustomerReviews from '../components/sections/CustomerReviews';
import SpecialtiesPreview from '../components/sections/SpecialtiesPreview';
import CTASection from '../components/sections/CTASection';
import FAQ from '../components/sections/FAQ';
import { motion } from 'motion/react';
import { BadgeCheck, Zap, Headphones, BarChart3, ShieldCheck, Clock, Users, CheckCircle2, HeartPulse, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />

      {/* Featured Service Pages Direct Access */}
      <section className="py-[30px] bg-section-bg border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                  Dedicated Practice Solutions
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy">
                  Home Healthcare & Medical Billing Support
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link 
                to="/home-healthcare-billing-services"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold bg-white text-navy hover:text-primary rounded-xl border border-slate-200 hover:border-primary shadow-xs transition-colors"
              >
                <span>Medical Billing Support</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </Link>
              <Link 
                to="/home-healthcare-virtual-assistant-services"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold bg-primary text-white hover:bg-primary-dark rounded-xl shadow-xs transition-colors"
              >
                <span>Home Healthcare VA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Challenges />
      <NextStep />
      <ServicesTabs />
      <ServingSizes />
      <ServicePreview />
      
      <SoftwareWeUse />
      <LocationSection />
      <SpecialtiesPreview />
      <CustomerReviews />
      <FAQ />
      <CTASection 
        title={<>Your Unstoppable <span className="text-primary italic">Healthcare Virtual Assistant</span> Journey Starts Today</>}
        subtitle={<>Experience the difference with our top-tier <span className="font-semibold">healthcare virtual assistant services</span>. We provide the medical support you need to scale your clinical practice with absolute confidence.</>}
      />
    </div>
  );
}
