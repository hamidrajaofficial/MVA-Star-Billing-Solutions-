import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  User, 
  Activity, 
  Stethoscope, 
  FileText, 
  Code, 
  Megaphone,
  CircleCheck,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'receptionist',
    slug: 'medical-virtual-receptionist',
    title: "Medical Virtual Receptionist",
    description: "Our professional virtual receptionists handle incoming calls, schedule appointments, and manage patient inquiries with a friendly and expert touch. We ensure your practice never misses an important call while maintaining a professional front-desk presence.",
    icon: PhoneCall,
    features: ["24/7 Call Handling", "Appointment Scheduling", "Insurance Verification", "Patient Reminders"],
    example: "Front Desk Optimized"
  },
  {
    id: 'admin',
    slug: 'virtual-medical-administrative-assistant',
    title: "Virtual Medical Administrative Assistant",
    description: "Our administrative assistants streamline your office operations by managing documentation, handling referrals, and maintaining digital records. They reduce the administrative burden on your clinical staff, allowing them to focus entirely on patient care.",
    icon: User,
    features: ["Documentation Management", "Referral Processing", "EMR/EHR Updates", "Administrative support"],
    example: "Office Efficiency"
  },
  {
    id: 'monitoring',
    slug: 'remote-patient-monitoring',
    title: "Remote Patient Monitoring Services",
    description: "Leverage our specialized RPM assistants to track patient health data in real-time. They monitor vitals, alert providers to critical changes, and facilitate home-based care for chronic condition management, improving patient outcomes significantly.",
    icon: Activity,
    features: ["Vitals Tracking", "Alert Management", "Patient Engagement", "Compliance Monitoring"],
    example: "Proactive Care"
  },
  {
    id: 'coordinator',
    slug: 'remote-patient-care-coordinator',
    title: "Remote Patient Care Coordinator",
    description: "Our care coordinators act as the glue between patients and providers. They manage complex care plans, coordinate with pharmacies and labs, and ensure continuous follow-up to prevent care gaps and hospital readmissions.",
    icon: Stethoscope,
    features: ["Care Plan Execution", "Pharmacy Coordination", "Follow-up Management", "Multidisciplinary Support"],
    example: "Care Continuity"
  },
  {
    id: 'billing',
    slug: 'medical-billing-virtual-assistant',
    title: "Medical Billing Virtual Assistant",
    description: "Maximize your revenue cycle with expert billing assistants. They handle claim submissions, manage denials, and resolve patient billing inquiries. We ensure accurate coding and timely processing to reduce AR days and increase cash flow.",
    icon: FileText,
    features: ["Claim Submission", "Denial Management", "AR Follow-up", "Coverage Verification"],
    example: "Revenue Excellence"
  },
  {
    id: 'coder',
    slug: 'medical-coder-virtual-assistant',
    title: "Medical Coder Virtual Assistant",
    description: "Our certified coding assistants ensure every patient encounter is accurately captured with the correct ICD-10 and CPT codes. They specialize in multi-specialty coding to prevent audit risks and ensure maximum appropriate reimbursement.",
    icon: Code,
    features: ["ICD-10/CPT Coding", "Chart Auditing", "Compliance Review", "HCC Risk Adjustment"],
    example: "Audit Ready"
  },
  {
    id: 'marketing',
    slug: 'digital-marketing-virtual-assistant',
    title: "Digital Marketing Virtual Assistant",
    description: "Grow your practice visibility with specialized healthcare marketing assistants. They manage social media, coordinate patient reviews, and execute community outreach campaigns to attract new patients and build your local brand.",
    icon: Megaphone,
    features: ["Social Media Management", "Review Acquisition", "Patient Education SEO", "Outreach Coordination"],
    example: "Practice Growth"
  }
];

interface Props {
  bgColor?: string;
}

export default function ServicesTabs({ bgColor = "bg-white" }: Props) {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <section className={`py-[30px] overflow-hidden ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge-teal text-primary">
            Our Expertise
          </div>
          <h2 className="mb-6">
            Unbeatable <span className="text-primary italic">Healthcare Virtual Assistant</span> Services
          </h2>
          <p className="text-slate-muted text-lg max-w-2xl mx-auto">
            Choose the specialized <span className="font-semibold text-navy-dark">healthcare virtual assistant services</span> your practice needs to thrive in a digital-first medical environment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Navigation Tabs - Left Column */}
          <div className="w-full lg:w-2/5 flex flex-col gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all text-left group box-border ${
                  activeTab.id === service.id 
                    ? 'bg-[#F0F7FF] shadow-sm' 
                    : 'bg-section-bg/50 hover:bg-section-bg'
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  activeTab.id === service.id 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'bg-[#EAF7FF] text-primary group-hover:bg-primary/10'
                }`}>
                  <service.icon className="w-5 h-5 stroke-[2]" />
                </div>
                <span className={`font-bold text-[15px] transition-colors leading-tight ${
                  activeTab.id === service.id ? 'text-navy-dark' : 'text-navy-dark/70 group-hover:text-primary'
                }`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content Pane - Right Column */}
          <div className="w-full lg:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-none p-8 md:p-12 border border-slate-100 min-h-[500px] flex flex-col relative overflow-hidden"
              >
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="icon-box-styled shrink-0">
                      <activeTab.icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-primary font-bold text-sm tracking-wider uppercase">{activeTab.example}</span>
                      <h3 className="text-2xl md:text-3xl font-black text-navy-dark leading-tight mt-1">{activeTab.title}</h3>
                    </div>
                  </div>

                  <p className="text-[#425466] text-lg leading-relaxed mb-10">
                    {activeTab.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-black mb-6"><strong>You Will Get</strong></p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 list-none">
                      {activeTab.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#425466]">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                          <span className="text-base font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-10 flex justify-center relative z-10 border-t border-slate-50">
                  <Link 
                    to={`/services/${activeTab.slug}`}
                    className="btn-primary flex items-center gap-3 px-12 py-4 shadow-xl hover:shadow-primary/20 transition-all transform hover:-translate-y-1"
                  >
                    Check detailed services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
