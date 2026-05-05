import { 
  Smile, 
  Accessibility, 
  Brain, 
  HeartPulse, 
  FlaskConical, 
  Zap, 
  Eye, 
  Package, 
  Activity, 
  Dna, 
  Hospital, 
  Users, 
  Footprints,
  FileText
} from 'lucide-react';

export interface Specialty {
  id: string;
  slug: string;
  name: string;
  description: string;
  benefit: string;
  specificBenefits: string[];
  icon: any;
  overviewTitle?: string;
  overviewHeadingHighlight?: string;
  overviewDescription?: string;
  faqItems?: { question: string; answer: string; }[];
}

export const specialties: Specialty[] = [
  {
    id: 'dental',
    slug: 'dental-billing',
    name: 'Dental',
    icon: Smile,
    description: 'Grow your clinic with a dental billing virtual assistant who handles CDT coding and PPO verification with expert precision.',
    benefit: 'Specialized ADA coding knowledge.',
    specificBenefits: [
      "Expert ADA coding via your dental billing virtual assistant",
      "Real-time eligibility verification for PPO and Medicaid",
      "Secondary insurance claim management by specialists",
      "Patient statement generation and follow-up",
      "Detailed accounts receivable aging reports"
    ],
    overviewTitle: "Scale Your Clinic with a ",
    overviewHeadingHighlight: "Dental Billing Virtual Assistant",
    overviewDescription: "Are you struggling with CDT codes? A dental billing virtual assistant can manage your entire revenue cycle. Our dental billing virtual assistant services ensure that your Payer relations remain strong. By utilizing a dental billing virtual assistant, you reduce the time spent on insurance phone calls. Every dental billing virtual assistant on our team understands the nuances of ADA documentation. Hire a dental billing virtual assistant today to maximize your collections. Trust a dental billing virtual assistant to handle your patient ledger with care. Your practice deserves the precision of a professional dental billing virtual assistant."
  },
  {
    id: 'dme',
    slug: 'dme-billing',
    name: 'DME',
    icon: Package,
    description: 'Optimize your equipment authorizations with a DME virtual assistant specialized in CMNs and Medicare compliance workflows.',
    benefit: 'Streamlined DME authorizations.',
    specificBenefits: [
      "Prior authorization tracking for equipment",
      "CMN (Certificate of Medical Necessity) management",
      "Wholesale vs. Retail component billing",
      "Rental tracking and recurring billing",
      "Compliance audits for Medicare/Medicaid"
    ],
    overviewTitle: "Simplify Equipment Logistics with a ",
    overviewHeadingHighlight: "DME Virtual Assistant",
    overviewDescription: "A DME virtual assistant is essential for managing complex authorizations. Our DME virtual assistant services streamline your CMN workflows. By hiring a DME virtual assistant, you ensure that your equipment is delivered and billed correctly. Every DME virtual assistant is trained in Medicare guidelines. A DME virtual assistant reduces the risk of claim denials. Trust a DME virtual assistant to manage your recurring rental billing. Your DME business will thrive with a dedicated DME virtual assistant. We offer the most experienced DME virtual assistant support available."
  },
  {
    id: 'mental-health',
    slug: 'mental-health',
    name: 'Mental Health',
    icon: Brain,
    description: 'Enhance patient intake with a mental health virtual assistant who understands the sensitivity and documentation needs of your practice.',
    benefit: 'Simplified patient intake.',
    specificBenefits: [
      "Sensitive patient intake by a mental health virtual assistant",
      "Out-of-network benefit verification specialists",
      "Individual and group therapy session billing",
      "Provider credentialing with major panels",
      "EHR management and portal support"
    ],
    overviewTitle: "Empathetic Support from a ",
    overviewHeadingHighlight: "Mental Health Virtual Assistant",
    overviewDescription: "A mental health virtual assistant helps you focus on therapy while we handle the admin. Our mental health virtual assistant services are designed for private practices and large clinics alike. By utilizing a mental health virtual assistant, you ensure HIPAA-compliant intake and scheduling. Every mental health virtual assistant on our team is trained in behavioral health EHRs. A mental health virtual assistant manages your complex out-of-network claims. Trust a mental health virtual assistant to handle patient inquiries with grace. Your practice grows faster with a mental health virtual assistant on board. Hire a professional mental health virtual assistant today."
  },
  {
    id: 'cardiology',
    slug: 'cardiology',
    name: 'Cardiology',
    icon: HeartPulse,
    description: 'Manage complex cardiology workflows with a specialized cardiology virtual assistant handling diagnostic coding and RPM tasks.',
    benefit: 'RPM and diagnostic coding expertise.',
    specificBenefits: [
      "Remote Patient Monitoring (RPM) billing setup",
      "Complex EKG and echocardiogram coding",
      "Authorization for stress tests and imaging",
      "EP study and catheterization lab billing",
      "Value-based care (MACRA/MIPS) data tracking"
    ],
    overviewTitle: "High-Precision Care with a ",
    overviewHeadingHighlight: "Cardiology Virtual Assistant",
    overviewDescription: "A cardiology virtual assistant is the secret to a successful heart clinic. Our cardiology virtual assistant services include RPM monitoring and diagnostic authorization. By hiring a cardiology virtual assistant, you ensure that your EP and cath lab billings are accurate. Every cardiology virtual assistant understands complex cardiac modifiers. A cardiology virtual assistant handles your heavy documentation load. Trust a cardiology virtual assistant to manage your EKG and stress test records. Your cardiology practice needs a dedicated cardiology virtual assistant to scale. Hire a cardiology virtual assistant expert today."
  },
  {
    id: 'laboratory',
    slug: 'laboratory-billing',
    name: 'Laboratory Billing',
    icon: FlaskConical,
    description: 'Streamline testing data with a laboratory billing virtual assistant expert in LIS integration and high-volume CLIA compliance.',
    benefit: 'Accurate LIS integration support.',
    specificBenefits: [
      "LIS to billing software data synchronization",
      "Toxicology and molecular pathology coding",
      "Referring physician data verification",
      "Technical vs. professional component billing",
      "High-volume CLIA compliance reporting"
    ],
    overviewTitle: "Laboratory Excellence via a ",
    overviewHeadingHighlight: "Laboratory Billing Virtual Assistant",
    overviewDescription: "A laboratory billing virtual assistant ensures that your high-volume testing is paid fairly. Our laboratory billing virtual assistant services handle LIS integration and CLIA reporting. By utilizing a laboratory billing virtual assistant, you reduce your technical component errors. Every laboratory billing virtual assistant is trained in molecular and tox coding. A laboratory billing virtual assistant manages your referring physician database. Trust a laboratory billing virtual assistant to streamline your batch claiming. Your lab will operate better with a laboratory billing virtual assistant. Hire a dedicated laboratory billing virtual assistant today."
  },
  {
    id: 'urgent-care',
    slug: 'urgent-care',
    name: 'Urgent Care',
    icon: Zap,
    description: 'Accelerate patient flow with an urgent care virtual assistant tailored for fast-paced walk-in clinics and point-of-service collections.',
    benefit: 'Reduced wait times via pre-registration.',
    specificBenefits: [
      "Real-time patient pre-registration via urgent care virtual assistant",
      "Urgent care specific CPT and modifier usage",
      "Point-of-service (POS) collection support",
      "After-hours staffing for evening/weekend shifts",
      "Wait-time communication with patients"
    ],
    overviewTitle: "Fast-Paced Flow with an ",
    overviewHeadingHighlight: "Urgent Care Virtual Assistant",
    overviewDescription: "An urgent care virtual assistant manages your walk-in influx with ease. Our urgent care virtual assistant services are designed for 24/7 clinic operations. By hiring an urgent care virtual assistant, you maximize your point-of-service collections. Every urgent care virtual assistant is trained in rapid pre-registration. An urgent care virtual assistant handles phone triage and wait-time updates. Trust an urgent care virtual assistant to manage your evening and weekend shifts. Your urgent care center needs an urgent care virtual assistant to stay competitive. Our urgent care virtual assistant team is ready to deploy."
  },
  {
    id: 'ophthalmology',
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    icon: Eye,
    description: 'Leverage an ophthalmology virtual assistant for intricate eye care procedures, VSP authorizations, and surgical scheduling.',
    benefit: 'VSP and vision plan experts.',
    specificBenefits: [
      "VSP, EyeMed, and medical cross-billing",
      "Optical shop sales and inventory tracking",
      "Surgical billing for cataracts and LASIK",
      "Diagnostic imaging (OCT/Fundus) documentation",
      "Contact lens order management"
    ],
    overviewTitle: "Clear Vision with an ",
    overviewHeadingHighlight: "Ophthalmology Virtual Assistant",
    overviewDescription: "An ophthalmology virtual assistant understands the complexity of vision vs. medical billing. Our ophthalmology virtual assistant services include VSP authorization and OCT documentation. By utilizing an ophthalmology virtual assistant, you ensure your surgical billing is accurate. Every ophthalmology virtual assistant is trained in Lasik and cataract workflows. An ophthalmology virtual assistant manages your contact lens orders. Trust an ophthalmology virtual assistant to handle your heavy diagnostic load. Your ophthalmology clinic will thrive with an ophthalmology virtual assistant. Hire a professional ophthalmology virtual assistant today."
  },
  {
    id: 'pain-management',
    slug: 'pain-management',
    name: 'Pain Management',
    icon: Activity,
    description: 'Expert support with a pain management virtual assistant handling interventional procedures and chronic pain documentation.',
    benefit: 'Interventional coding accuracy.',
    specificBenefits: [
      "Injections and nerve block authorization",
      "Urine drug screen monitoring and billing",
      "Chronic pain management (CCM) support",
      "Physical therapy coordination",
      "Narcotic contract documentation tracking"
    ],
    overviewTitle: "Manage Chronic Care with a ",
    overviewHeadingHighlight: "Pain Management Virtual Assistant",
    overviewDescription: "A pain management virtual assistant ensures that your CCM and interventional claims are paid. Our pain management virtual assistant services include authorization for nerve blocks and injections. By hiring a pain management virtual assistant, you stay compliant with narcotic contracts. Every pain management virtual assistant is trained in MJ and CMS guidelines. A pain management virtual assistant manages your urine drug screen monitoring. Trust a pain management virtual assistant to coordinate with PT providers. Your pain management practice needs a pain management virtual assistant. Hire our expert pain management virtual assistant team."
  },
  {
    id: 'pathology',
    slug: 'pathology-billing',
    name: 'Pathology Billing',
    icon: Dna,
    description: 'Precision coding with a pathology billing virtual assistant for technical and professional component accuracy in labs.',
    benefit: 'Complex pathology coding.',
    specificBenefits: [
      "Surgical pathology component billing",
      "Cytopathology and molecular coding",
      "Referring physician portal management",
      "Batch claiming for high-volume labs",
      "In-office lab billing consultation"
    ],
    overviewTitle: "Precision Results with a ",
    overviewHeadingHighlight: "Pathology Billing Virtual Assistant",
    overviewDescription: "A pathology billing virtual assistant is the key to capturing professional and technical components. Our pathology billing virtual assistant services are built for high-throughput labs. By utilizing a pathology billing virtual assistant, you reduce your coding backlog. Every pathology billing virtual assistant understands cytopathology modifiers. A pathology billing virtual assistant manages your portal requests from referring doctors. Trust a pathology billing virtual assistant for your surgical pathology needs. Your lab deserves a pathology billing virtual assistant for maximum ROI. Hire a pathology billing virtual assistant today."
  },
  {
    id: 'asc',
    slug: 'ambulatory-surgery-center',
    name: 'Ambulatory Surgery Center',
    icon: Hospital,
    description: 'Comprehensive support with an ASC virtual assistant focused on facility fees and complex surgical coordination tasks.',
    benefit: 'Facility fee maximization.',
    specificBenefits: [
      "Facility vs. professional fee separation",
      "Anesthesia billing coordination",
      "Surgical tray and supply cost tracking",
      "State-specific ASC regulation compliance",
      "Clear patient cost estimates"
    ],
    overviewTitle: "Optimize Surgical Center with an ",
    overviewHeadingHighlight: "ASC Virtual Assistant",
    overviewDescription: "An ASC virtual assistant manages the unique billing needs of ambulatory centers. Our ASC virtual assistant services include anesthesia coordination and facility fee capture. By hiring an ASC virtual assistant, you ensure that supply costs are tracked accurately. Every ASC virtual assistant is trained in surgical center regulations. An ASC virtual assistant provides clear cost estimates to patients. Trust an ASC virtual assistant to handle your complex case logs. Your ASC needs a dedicated ASC virtual assistant to scale. Experience the benefits of a professional ASC virtual assistant."
  },
  {
    id: 'physical-therapy',
    slug: 'physical-therapy-billing',
    name: 'Physical Therapy',
    icon: Accessibility,
    description: 'Benefit from a physical therapy virtual assistant handling G-codes, MVA claims, and Plan of Care signature tracking.',
    benefit: 'Seamless auth management.',
    specificBenefits: [
      "Prior authorization tracking and renewals",
      "Functional limitation reporting (G-codes) accuracy",
      "Plan of Care (POC) signature tracking",
      "Workers' Comp and MVA claim specialization",
      "Daily visit reconciliation with therapy logs"
    ],
    overviewTitle: "Rehabilitation Success with a ",
    overviewHeadingHighlight: "Physical Therapy Virtual Assistant",
    overviewDescription: "A physical therapy virtual assistant keeps your authorizations up to date. Our physical therapy virtual assistant services prevent payment delays for G-code sessions. By utilizing a physical therapy virtual assistant, you ensure that POCs are signed on time. Every physical therapy virtual assistant is an expert in MVA and workers' comp claims. A physical therapy virtual assistant reconciles your visit logs daily. Trust a physical therapy virtual assistant to handle your patient intake. Your PT practice will grow with a physical therapy virtual assistant. Hire a dedicated physical therapy virtual assistant today."
  },
  {
    id: 'family-medicine',
    slug: 'family-medicine',
    name: 'Family Medicine',
    icon: Users,
    description: 'All-inclusive support with a family medicine virtual assistant for pediatrics, AWVs, and chronic condition management.',
    benefit: 'Comprehensive practice support.',
    specificBenefits: [
      "AWS/EPSDT coding for pediatrics",
      "Chronic Care Management (CCM) billing",
      "Annual Wellness Visit (AWV) scheduling",
      "Patient portal engagement support",
      "In-office procedure billing"
    ],
    overviewTitle: "Comprehensive Care with a ",
    overviewHeadingHighlight: "Family Medicine Virtual Assistant",
    overviewDescription: "A family medicine virtual assistant is the primary support for your primary care team. Our family medicine virtual assistant services handle pediatric and geriatric billing alike. By hiring a family medicine virtual assistant, you increase your portal engagement. Every family medicine virtual assistant is trained in CCM and AWV scheduling. A family medicine virtual assistant manages your heavy volume of patient emails. Trust a family medicine virtual assistant to handle your refill requests. Your family practice needs a family medicine virtual assistant. Hire an expert family medicine virtual assistant today."
  },
  {
    id: 'podiatry',
    slug: 'podiatry-billing',
    name: 'Podiatry',
    icon: Footprints,
    description: 'Specialized foot care support with a podiatry virtual assistant handling surgical coding and DME orthotics authorizations.',
    benefit: 'Foot and ankle coding experts.',
    specificBenefits: [
      "Routine foot care reimbursement audits",
      "Podiatric surgical coding via podiatry virtual assistant",
      "DME (Orthotics) authorization and billing",
      "Diabetic shoe program management",
      "Wound care documentation support"
    ],
    overviewTitle: "Heal Faster with a ",
    overviewHeadingHighlight: "Podiatry Virtual Assistant",
    overviewDescription: "A podiatry virtual assistant ensures your routine foot care claims are never denied. Our podiatry virtual assistant services include orthotics authorization and surgical coding. By utilizing a podiatry virtual assistant, you maximize your diabetic shoe program revenue. Every podiatry virtual assistant is trained in wound care documentation. A podiatry virtual assistant manages your surgical schedules. Trust a podiatry virtual assistant to handle your patient calls. Your podiatry clinic will thrive with a podiatry virtual assistant. Hire a highly skilled podiatry virtual assistant today."
  }
];

