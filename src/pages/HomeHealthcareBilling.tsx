import React from 'react';
import HomeHealthcareHero from '../components/sections/HomeHealthcareHero';
import ChallengesToggleSection, { ChallengeItem } from '../components/sections/ChallengesToggleSection';
import WhatWeDoTablesSection from '../components/sections/WhatWeDoTablesSection';
import BillingOnboardingSection from '../components/sections/BillingOnboardingSection';
import DedicatedRCMSupportSection from '../components/sections/DedicatedRCMSupportSection';
import CTASection from '../components/sections/CTASection';
import healthcareHeroImg from '../assets/images/virtual-assistant-for-healthcare.webp';
import { 
  Clock, 
  PhoneMissed,
  CalendarClock,
  MessageSquareOff,
  FileQuestion
} from 'lucide-react';

export default function HomeHealthcareBilling() {
  // 5 Common Challenges requested by the user
  const billingChallenges: ChallengeItem[] = [
    {
      icon: PhoneMissed,
      title: "Missed Calls",
      challengeText: "Billing inquiries, payer callbacks, and patient eligibility questions are left unattended, delaying pre-claim clearance.",
      solutionText: "Dedicated billing coordinators field all payer calls and patient financial inquiries swiftly to clear claims faster."
    },
    {
      icon: Clock,
      title: "Delayed Intake",
      challengeText: "Slow intake data verification causes late Medicare Notice of Admission (NOA) submissions and irreversible daily penalties.",
      solutionText: "Rapid intake verification with same-day NOA filing inside 24-48 hours guarantees 100% Medicare timeliness compliance."
    },
    {
      icon: CalendarClock,
      title: "Scheduling Pressure",
      challengeText: "Disciplines are scheduled before authorizations or benefit caps are confirmed, causing denied visits and write-offs.",
      solutionText: "Rigorous prior-auth and benefit checks verify covered visit counts before clinicians head out into the field."
    },
    {
      icon: MessageSquareOff,
      title: "Unanswered Messages",
      challengeText: "Unanswered messages to physician clinics stall CMS-485 Plan of Care signatures and mandatory face-to-face documentation.",
      solutionText: "Persistent multi-channel physician outreach logs track pending orders daily to eliminate documentation hold-ups."
    },
    {
      icon: FileQuestion,
      title: "Missing Documents",
      challengeText: "OASIS documentation gaps, missing therapy re-evaluations, and unsigned orders stall RAP/final claim release.",
      solutionText: "Proactive documentation scrubbers flag missing documents early, preventing claims from stalling in aging A/R."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section matching screenshot layout */}
      <HomeHealthcareHero 
        highlightHeading="Home Healthcare Billing Services"
        mainHeading="Revenue Cycle & Medical Claims Management"
        description="Maximize cash flow, eliminate claim rejections, and maintain total PDGM compliance with dedicated home healthcare billing specialists. From OASIS-E audits and rapid Notice of Admission (NOA) submissions to aggressive aging A/R recovery, we manage your entire billing operations so your agency can focus purely on compassionate patient care."
        imageSrc={healthcareHeroImg}
        imageAlt="Home Healthcare Virtual Assistant & Billing Specialist"
        primaryBtnText="Hire This Service"
        primaryBtnLink="#callback-section"
        secondaryBtnText="Compare Staffing"
        secondaryBtnLink="#comparison"
        transparentImage={true}
        flipImage={false}
        features={[
          "98.4% Clean Claims First-Pass",
          "5-Day Timely NOA Guarantee",
          "Experienced in WellSky, Axxess & HCHB"
        ]}
      />

      {/* 2. Common Challenges Section - Right after Hero, matching Screenshot 1 */}
      <ChallengesToggleSection 
        eyebrow="COMMON AGENCY CHALLENGES"
        titlePart1="Common Challenges: "
        titleHighlight="Issues We Cover"
        subtitle="Missed calls, delayed intake, scheduling pressure, unanswered messages and missing documents often prevent agencies from reaching financial health. Here is how we resolve every bottleneck."
        items={billingChallenges}
        ctaText="Get a Free Billing Audit"
        ctaLink="/contact"
        bgColor="bg-section-bg"
      />

      {/* 3. What We Do Section - OPERATIONAL TASK COVERAGE with 2 Tables */}
      <WhatWeDoTablesSection 
        bgColor="bg-white"
        eyebrow="OPERATIONAL TASK COVERAGE"
        title="What We Do"
        subtitle="Explore our exact scope of task coverage across Home Health and Home Care agencies. We handle everything from clinical orders and visit scheduling to caregiver shift management."
        ctaText="Hire This Service"
        ctaLink="/contact"
      />

      {/* 4. How It Works / Efficient Billing Team Onboarding for Maximized Reimbursements */}
      <BillingOnboardingSection 
        id="how-it-works"
        bgColor="bg-section-bg"
        badge="How It Works"
        titlePart1="Efficient Billing Team Onboarding for "
        titleHighlight="Maximized Reimbursements"
        subtitle="We start by understanding your needs, matching you with pre-vetted professionals, and conducting consulted onboarding using our signature framework, ensuring long-term success and improved focus for your practice."
        showCta={true}
      />

      {/* 5. Dedicated RCM Support Section (Data Entry & Follow-ups) */}
      <DedicatedRCMSupportSection 
        id="rcm-support"
        bgColor="bg-white"
        ctaLink="/contact"
      />

      {/* 6. Final CTA Section */}
      <CTASection bgColor="bg-section-bg" />
    </div>
  );
}
