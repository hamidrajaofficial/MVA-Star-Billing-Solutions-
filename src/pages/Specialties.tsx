import SpecialtyHero from '../components/sections/SpecialtyHero';
import PracticeChallenges from '../components/sections/PracticeChallenges';
import WhatWeDoServices from '../components/sections/WhatWeDoServices';
import HowItWorksSteps from '../components/sections/HowItWorksSteps';
import TrustSection from '../components/sections/TrustSection';
import ServingSizes from '../components/sections/ServingSizes';
import NextStepCTA from '../components/sections/NextStepCTA';
import LocationSection from '../components/sections/LocationSection';
import SoftwareWeUse from '../components/sections/SoftwareWeUse';
import SpecialtiesPreview from '../components/sections/SpecialtiesPreview';
import CustomerReviews from '../components/sections/CustomerReviews';
import FAQ from '../components/sections/FAQ';
import CTASection from '../components/sections/CTASection';
import Stats from '../components/sections/Stats';

export default function Specialties() {
  return (
    <div>
      <SpecialtyHero 
        badge="Medical Virtual Assistants"
        titleLine1="Specialized Healthcare"
        titleLine2="Virtual Assistant Solutions"
        description="Star Billing Solutions MVA provides expert medical virtual assistants for healthcare practices struggling with administrative overload. Let our HIPAA-compliant professionals handle your billing and clinical workflow so you can focus on patient care."
      />

      <Stats />

      <PracticeChallenges />

      <WhatWeDoServices />
      
      <ServingSizes bgColor="bg-white" />

      <TrustSection bgColor="bg-section-bg" />
      
      <NextStepCTA bgColor="bg-white" />

      <HowItWorksSteps bgColor="bg-section-bg" />

      <SoftwareWeUse bgColor="bg-white" />
      <LocationSection bgColor="bg-section-bg" />

      <SpecialtiesPreview bgColor="bg-white" />
      
      <CustomerReviews bgColor="bg-section-bg" />
      
      <FAQ bgColor="bg-white" />

      <CTASection 
        bgColor="bg-section-bg"
        title={<>Find Your <span className="text-primary italic">Perfect Match</span> Today</>}
        subtitle="Browse our diverse pool of vetted medical virtual assistants and scale your healthcare practice."
      />
    </div>
  );
}
