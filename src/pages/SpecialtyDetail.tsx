import { useParams, Navigate } from 'react-router-dom';
import { specialties } from '@/src/data/specialties';
import SpecialtyHero from '../components/sections/SpecialtyHero';
import Stats from '../components/sections/Stats';
import PracticeChallenges from '../components/sections/PracticeChallenges';
import ServiceOverview from '../components/sections/ServiceOverview';
import WhatWeDoServices from '../components/sections/WhatWeDoServices';
import ServingSizes from '../components/sections/ServingSizes';
import WhatYouWillGet from '../components/sections/WhatYouWillGet';
import TrustSection from '../components/sections/TrustSection';
import HowItWorksSteps from '../components/sections/HowItWorksSteps';
import CustomerReviews from '../components/sections/CustomerReviews';
import FAQ from '../components/sections/FAQ';
import CTASection from '../components/sections/CTASection';
import NextStepCTA from '../components/sections/NextStepCTA';
import LocationSection from '../components/sections/LocationSection';
import SoftwareWeUse from '../components/sections/SoftwareWeUse';
import SpecialtiesPreview from '../components/sections/SpecialtiesPreview';

export default function SpecialtyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const specialty = specialties.find(s => s.slug === slug);

  if (!specialty) {
    return <Navigate to="/specialties" replace />;
  }

  return (
    <div>
      <SpecialtyHero 
        badge={`${specialty.name} Solutions`}
        titleLine1={specialty.name}
        titleLine2="Healthcare Virtual Assistant"
        description={specialty.description}
      />

      <Stats />
      
      <ServiceOverview 
        title={specialty.overviewTitle}
        headingHighlight={specialty.overviewHeadingHighlight}
        description={specialty.overviewDescription}
      />

      <PracticeChallenges />
      
      <WhatWeDoServices />
      
      <ServingSizes bgColor="bg-white" />
      
      <WhatYouWillGet 
        bgColor="bg-section-bg"
        title={`What You Get for ${specialty.name}`}
        benefits={specialty.specificBenefits}
      />

      <TrustSection bgColor="bg-white" />

      <NextStepCTA bgColor="bg-section-bg" />

      <HowItWorksSteps bgColor="bg-white" />

      <SoftwareWeUse bgColor="bg-section-bg" />
      <LocationSection bgColor="bg-white" />

      <SpecialtiesPreview bgColor="bg-section-bg" />

      <CustomerReviews bgColor="bg-white" />

      <FAQ bgColor="bg-section-bg" items={specialty.faqItems} />

      <CTASection 
        bgColor="bg-white"
        title={<>The Perfect Match For Your <span className="text-primary italic">{specialty.name}</span> Practice</>}
        subtitle={`Scale your ${specialty.name} clinic with our vetted, HIPAA-compliant virtual assistants.`}
      />
    </div>
  );
}
