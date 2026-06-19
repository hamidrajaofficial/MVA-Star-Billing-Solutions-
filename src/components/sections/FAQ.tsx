import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Are your virtual assistants certified?",
    answer: "Yes, all our virtual assistants are medical graduates or certified professionals with extensive experience in healthcare administration and EHR systems."
  },
  {
    question: "How do you handle HIPAA compliance?",
    answer: "We take privacy very seriously. Our assistants work on encrypted workstations, use secure VPNs for EHR access, and undergo regular HIPAA training and audits."
  },
  {
    question: "Can I choose my assistant?",
    answer: "During our custom matching process, we present you with candidates who best fit your requirements. You have the opportunity to interview and select the one that suits your practice."
  },
  {
    question: "How long does onboarding take?",
    answer: "Most practices can be fully integrated and ready to go LIVE with their new assistant within 48 to 72 hours of the discovery call."
  },
  {
    question: "What specialties do you support?",
    answer: "We support a wide range of medical specialties including Cardiology, Dermatology, Mental Health, Internal Medicine, Pediatrics, and more."
  }
];

interface Props {
  bgColor?: string;
  items?: { question: string; answer: string; }[];
}

export default function FAQ({ bgColor = "bg-section-bg", items = faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-[30px] relative overflow-hidden ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Content: Heading and Description */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-[100px] self-start">
            <div className="mb-8">
              <div className="badge-teal">
                Frequently Asked Questions
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <HelpCircle className="w-7 h-7" />
                </div>
                <h2 className="tracking-tight text-navy-dark leading-tight">
                  Definitive <span className="text-primary italic">Healthcare</span> FAQ
                </h2>
              </div>
              
              <p className="text-[#425466] text-lg leading-relaxed">
                Our <span className="font-semibold text-navy-dark">healthcare virtual assistants</span> provide solutions for the most common clinical situations. From insurance verification to customized medical matching, get the facts you need.
              </p>
            </div>
          </div>

          {/* Right Content: FAQ Accordion */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-4">
              {items.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-[24px] px-6 md:px-8 border border-[#E2E8F0] hover:border-primary/20 transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left group transition-all"
                  >
                    <span className="text-lg md:text-xl font-bold text-[#0A2540] group-hover:text-primary transition-colors pr-8">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ${openIndex === index ? 'text-primary' : 'text-[#425466]'}`}
                    >
                      <ChevronDown className="w-5 h-5 transition-transform" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-[#425466] text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
