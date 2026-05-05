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
import { BadgeCheck, Zap, Headphones, BarChart3, ShieldCheck, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
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
