import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '@/src/data/services';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft, Zap, HeartPulse } from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import ServiceHero from '../components/sections/ServiceHero';
import Stats from '../components/sections/Stats';
import ServiceOverview from '../components/sections/ServiceOverview';
import WhatWeDoServices from '../components/sections/WhatWeDoServices';
import WhatYouWillGet from '../components/sections/WhatYouWillGet';
import TrustSection from '../components/sections/TrustSection';
import HowItWorksSteps from '../components/sections/HowItWorksSteps';
import ServingSizes from '../components/sections/ServingSizes';
import NextStepCTA from '../components/sections/NextStepCTA';
import LocationSection from '../components/sections/LocationSection';
import SoftwareWeUse from '../components/sections/SoftwareWeUse';
import SpecialtiesPreview from '../components/sections/SpecialtiesPreview';
import CustomerReviews from '../components/sections/CustomerReviews';
import FAQ from '../components/sections/FAQ';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <ServiceHero 
        title=""
        highlightedTitle={service.title}
        subtitle="Healthcare Virtual Assistant"
        description={service.fullDescription}
        imageSrc={service.heroImage}
        ctaPrimary={{ label: "Hire This Service", href: "/contact" }}
      />

      <div className="relative z-20">
        <Stats />
      </div>
      
      <ServiceOverview 
        bgColor="bg-section-bg"
        title={service.overviewTitle}
        headingHighlight={service.overviewHeadingHighlight}
        description={service.overviewDescription}
      />

      <WhatWeDoServices 
        bgColor="bg-white"
        badge="Our Specialized Responsibilities"
        title={<>{service.title} <span className="text-primary italic">Responsibilities and Tasks</span></>}
        items={service.whatWeDo}
      />

      <ServingSizes bgColor="bg-section-bg" />

      <WhatYouWillGet 
        bgColor="bg-white"
        title={`What You Get for ${service.title}`}
        benefits={service.benefits}
      />
      
      <TrustSection bgColor="bg-section-bg" />

      <NextStepCTA bgColor="bg-white" />

      <HowItWorksSteps bgColor="bg-section-bg" />

      <SoftwareWeUse bgColor="bg-white" />
      <LocationSection bgColor="bg-section-bg" />

      <SpecialtiesPreview bgColor="bg-white" />

      <CustomerReviews bgColor="bg-section-bg" />

      <FAQ bgColor="bg-white" items={service.faqItems} />

      <CTASection 
        bgColor="bg-section-bg"
        title={<>Optimize Your <span className="text-primary italic">{service.title}</span> Workflow Today</>}
        subtitle={`Join healthcare leaders who have transformed their ${service.title} operations with our specialized virtual assistants.`}
      />
    </div>
  );
}
