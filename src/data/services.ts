import { 
  Users, 
  PhoneCall, 
  Stethoscope, 
  Activity, 
  UserRound, 
  FileCheck, 
  Code, 
  Megaphone,
  Pill,
  Calendar,
  Siren,
  MapPinned,
  FileText,
  Monitor,
  HandHelping,
  ShieldCheck,
  LayoutGrid,
  TrendingUp,
  Mail,
  Search,
  Briefcase,
  Smartphone,
  Receipt,
  HeartHandshake,
  HeartPulse
} from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  heroImage: string;
  features: string[];
  benefits: string[];
  overviewTitle?: string;
  overviewHeadingHighlight?: string;
  overviewDescription?: string;
  faqItems?: { question: string; answer: string; }[];
  whatWeDo?: { title: string; description: string; icon: any }[];
}

export const services: Service[] = [
  {
    id: 'medical-virtual-receptionist',
    slug: 'medical-virtual-receptionist',
    title: 'Medical Virtual Receptionist',
    shortDescription: 'Get highly professional front-desk management for your practice with a dedicated medical virtual receptionist, completely virtual yet seamlessly integrated.',
    fullDescription: 'Enhance your patient experience with a dedicated medical virtual receptionist who manages calls and scheduling with expert care. Our medical virtual receptionist services allow your in-house team to focus purely on patient care while we handle the front-desk essentials. Choosing the best virtual medical receptionist means never missing a patient call again.',
    icon: PhoneCall,
    heroImage: 'https://remotemedicalassistant.com/wp-content/uploads/2025/02/3e63180ebe-e1739365551837.png',
    features: [
      '24/7 virtual receptionist for medical practice scheduling',
      'Insurance Verification via virtual medical receptionist services',
      'Patient Onboarding Support from highly-trained specialists',
      'Multilingual Communication for diverse patient bases',
      'HIPAA-Compliant Call Handling by your medical virtual receptionist'
    ],
    benefits: [
      'Reduce No-Show Rates with a 24/7 virtual receptionist for medical practice',
      'Lower Administrative Overhead using a virtual medical receptionist',
      'Enhanced Patient Experience through a medical practice virtual receptionist',
      'Zero Missed Calls with the best virtual medical receptionist services'
    ],
    overviewTitle: "Streamline Your Front Desk with a ",
    overviewHeadingHighlight: "Medical Virtual Receptionist",
    overviewDescription: "Are you searching for the best virtual medical receptionist to transform your practice? Our medical virtual receptionist integrates directly into your workflow, providing a seamless patient experience. As a top-tier virtual medical receptionist in florida and beyond, we ensure your clinic stays organized. Whether you need a virtual receptionist for medical practice scalability or 24/7 virtual receptionist for medical practice coverage, we provide the solution. Specialized in virtual receptionist services medical billing and coordination, our team acts as your front-desk extension. A dedicated medical practice virtual receptionist ensures that every caller feels heard and valued, making us the provider of the best virtual medical receptionist services in the industry. Trust our virtual receptionist for medical practices to handle your high-volume needs with precision and care.",
    whatWeDo: [
      {
        title: "Phone Call Answering",
        description: "Your medical virtual receptionist handles every incoming call with professional grace, ensuring patients feel heard and never reach a voicemail.",
        icon: PhoneCall
      },
      {
        title: "Insurance Verification",
        description: "Our team verifies insurance coverage in real-time before the appointment, reducing billing errors and improving practice efficiency.",
        icon: FileCheck
      },
      {
        title: "Prescription Refill Management",
        description: "Seamlessly processing refill requests through your EHR, coordinating directly with pharmacies and your medical providers.",
        icon: Pill
      },
      {
        title: "Appointment Scheduling",
        description: "Intelligent scheduling integrated with your calendar to maximize your daily patient throughput and reduce white space.",
        icon: Calendar
      },
      {
        title: "Triaging Emergencies",
        description: "Expertly identifying urgent patient needs and escalating them immediately to your clinical staff according to your protocols.",
        icon: Siren
      },
      {
        title: "Services Across the USA",
        description: "Providing HIPAA-compliant virtual front-desk support to healthcare practices across all 50 states with 24/7 availability.",
        icon: MapPinned
      }
    ]
  },
  {
    id: 'virtual-medical-administrative-assistant',
    slug: 'virtual-medical-administrative-assistant',
    title: 'Virtual Medical Administrative Assistant',
    shortDescription: 'Streamline your essential administrative workflows and paperwork with a virtual medical administrative assistant tailored for modern healthcare providers.',
    fullDescription: 'A virtual medical administrative assistant manages your complex paperwork, EHR updates, and referrals efficiently. By utilizing a virtual medical administrative assistant, doctors can reclaim hours of their day. Our virtual medical administrative assistant services are designed to eliminate administrative burnout. Every virtual medical administrative assistant on our team is HIPAA-certified and ready to scale with you.',
    icon: UserRound,
    heroImage: 'https://remotemedicalassistant.com/wp-content/uploads/2025/02/3e63180ebe-e1739365551837.png',
    features: [
      'EHR/EMR Management by a virtual medical administrative assistant',
      'Refill Request Processing and doctor coordination',
      'Referral Coordination through a virtual medical administrative assistant',
      'Medical Transcription Support for accurate records',
      'Email & Calendar Management handled by your virtual medical administrative assistant'
    ],
    benefits: [
      'Focus on Patient Care while your virtual medical administrative assistant handles files',
      'Eliminate Burnout using virtual medical administrative assistant support',
      'Organized Documentation from a virtual medical administrative assistant',
      'Faster Turnaround Times for all administrative tasks'
    ],
    overviewTitle: "Optimize Practice Efficiency with a ",
    overviewHeadingHighlight: "Virtual Medical Administrative Assistant",
    overviewDescription: "Looking for a virtual medical administrative assistant to handle your back-office needs? Our virtual medical administrative assistant services bridge the gap between paperwork and patient care. With a dedicated virtual medical administrative assistant, your practice can run like a well-oiled machine. Each virtual medical administrative assistant is trained in the latest EHR platforms. Doctors who hire a virtual medical administrative assistant report a significant decrease in stress. We offer the most reliable virtual medical administrative assistant support in the market. Let our virtual medical administrative assistant take over your non-clinical tasks today.",
    whatWeDo: [
      {
        title: "EHR/EMR Management",
        description: "Accurate and timely entry of patient data into your Electronic Health Records, maintaining organized and accessible clinical documentation.",
        icon: FileText
      },
      {
        title: "Refill Request Processing",
        description: "Executing prescription refill workflows by coordinating between your medical providers and local pharmacies efficiently.",
        icon: Pill
      },
      {
        title: "Referral Coordination",
        description: "Managing the entire referral lifecycle, from specialist appointment scheduling to securing pre-authorizations and medical records.",
        icon: Briefcase
      },
      {
        title: "Medical Transcription",
        description: "Converting doctor voice recordings into professional clinical notes, ensuring your documentation is always up to date.",
        icon: LayoutGrid
      },
      {
        title: "Email & Calendar Management",
        description: "Active management of your professional inbox and scheduling, ensuring you focus on patient care without administrative noise.",
        icon: Mail
      },
      {
        title: "Office Workflow Support",
        description: "Improving your practice throughput by managing non-clinical tasks that traditionally slow down in-house medical teams.",
        icon: TrendingUp
      }
    ]
  },
  {
    id: 'remote-patient-monitoring-services',
    slug: 'remote-patient-monitoring-services',
    title: 'Remote Patient Monitoring Services',
    shortDescription: 'Utilize cutting-edge remote patient monitoring services for continuous care tracking, enabling proactive intervention and better health outcomes.',
    fullDescription: 'Our remote patient monitoring services provide clinics with the tools and staff needed to track patient vitals 24/7. Implementing remote patient monitoring services has been shown to reduce hospital readmissions. We offer comprehensive remote patient monitoring services that integrate with your billing. Trust our remote patient monitoring services to deliver high-quality data to your providers. Every client using our remote patient monitoring services sees improved patient engagement.',
    icon: Activity,
    heroImage: 'https://remotemedicalassistant.com/wp-content/uploads/2025/02/3e63180ebe-e1739365551837.png',
    features: [
      'Vitals Data Tracking via remote patient monitoring services',
      'Real-time Alert Management for critical health changes',
      'Patient Compliance Monitoring using remote patient monitoring services',
      'Monthly RPM Billing Support through remote patient monitoring services',
      'Device Setup Assistance for all remote patient monitoring services'
    ],
    benefits: [
      'Better Patient Outcomes with remote patient monitoring services',
      'New Revenue Stream through remote patient monitoring services',
      'Proactive Care Delivery powered by remote patient monitoring services',
      'Increased Patient Engagement tracking with RPM'
    ],
    overviewTitle: "Better Outcomes with ",
    overviewHeadingHighlight: "Remote Patient Monitoring Services",
    overviewDescription: "Are you ready to scale your remote patient monitoring services? Our team provides the backbone for successful remote patient monitoring services implementation. We specialize in remote patient monitoring services that actually work for both doctors and patients. By choosing our remote patient monitoring services, you ensure continuous care. Our remote patient monitoring services include staff who manage alerts and data entry. We are the leaders in remote patient monitoring services for cardiology and chronic care. Enhance your practice with the best remote patient monitoring services available today.",
    whatWeDo: [
      {
         title: "Vitals Data Tracking",
         description: "Real-time monitoring of patient blood pressure, glucose, and heart rate, ensuring continuous data flow into your monitoring system.",
         icon: Monitor
      },
      {
         title: "Real-time Alert Management",
         description: "Immediate triage of abnormal readings, following your predefined protocols to notify providers or emergency services as needed.",
         icon: Siren
      },
      {
         title: "Device Setup Assistance",
         description: "Remotely guiding patients through the initial setup of their RPM devices, ensuring high data compliance and technical succes.",
         icon: Smartphone
      },
      {
         title: "Monthly RPM Billing Support",
         description: "Compiling the necessary 20-minute logs and data documentation required to maximize your monthly RPM reimbursements.",
         icon: Receipt
      },
      {
         title: "Patient Participation Checks",
         description: "Regularly following up with patients who have low device usage to improve compliance and care consistency.",
         icon: Users
      },
      {
         title: "Provider Data Reporting",
         description: "Generating concise monthly summaries of patient health trends for your review during patient follow-up appointments.",
         icon: FileCheck
      }
    ]
  },
  {
    id: 'remote-patient-care-coordinator',
    slug: 'remote-patient-care-coordinator',
    title: 'Remote Patient Care Coordinator',
    shortDescription: 'Bridge communication gaps with a remote patient care coordinator ensuring higher compliance and treatment plan adherence for your patients.',
    fullDescription: 'A remote patient care coordinator ensures your patients follow their treatment plans and show up for appointments. Hiring a remote patient care coordinator reduces readmission rates significantly. Our remote patient care coordinator services include patient education and outreach. A dedicated remote patient care coordinator bridges the gap between the clinic and the home. Every remote patient care coordinator on our team is empathetic and professional.',
    icon: Stethoscope,
    heroImage: 'https://remotemedicalassistant.com/wp-content/uploads/2025/02/3e63180ebe-e1739365551837.png',
    features: [
      'Care Plan Adherence Checks by a remote patient care coordinator',
      'Follow-up Appointment Reminders from your remote patient care coordinator',
      'Patient Education Outreach using a remote patient care coordinator',
      'Interdisciplinary Communication handled by a remote patient care coordinator',
      'Chronic Care Management supported by a remote patient care coordinator'
    ],
    benefits: [
      'Coordinated Care Journey with a remote patient care coordinator',
      'Higher Treatment Compliance through a remote patient care coordinator',
      'Reduced Readmissions thanks to a remote patient care coordinator',
      'Dedicated Patient Support from a remote patient care coordinator'
    ],
    overviewTitle: "Enhance Healthcare Continuity with a ",
    overviewHeadingHighlight: "Remote Patient Care Coordinator",
    overviewDescription: "Need a remote patient care coordinator to watch over your patient panels? Our remote patient care coordinator services are unmatched in the healthcare industry. A remote patient care coordinator can handle all patient education and follow-up tasks. With a remote patient care coordinator, your patients feel more supported. We provide a remote patient care coordinator who becomes an extension of your primary care team. Every remote patient care coordinator is trained in CCMS and RPM workflows. Let our remote patient care coordinator help you achieve better clinical outcomes today. Your practice deserves a dedicated remote patient care coordinator.",
    whatWeDo: [
      {
        title: "Care Plan Adherence Checks",
        description: "Checking in with patients regularly to ensure they are following their prescribed treatment plans and taking medications as directed.",
        icon: Clipboard
      },
      {
        title: "Follow-up Appointment Reminders",
        description: "Proactively calling patients to confirm their upcoming specialist or primary care visits, significantly reducing no-show rates.",
        icon: Calendar
      },
      {
        title: "Patient Education Outreach",
        description: "Providing patients with necessary educational materials and guidance related to their chronic conditions or post-op recovery.",
        icon: UserRound
      },
      {
        title: "Interdisciplinary Communication",
        description: "Acting as a central hub for communication between patients, family members, and their various medical specialists.",
        icon: HeartHandshake
      },
      {
        title: "Chronic Care Coordination",
        description: "Managing the complexities of chronic care workflows, ensuring all clinical targets are met for value-based care programs.",
        icon: Stethoscope
      },
      {
        title: "Post-Discharge Support",
        description: "Coordinating the transition from hospital to home, ensuring patients have what they need for a safe and stable recovery.",
        icon: HandHelping
      }
    ]
  },
  {
    id: 'medical-billing-virtual-assistant',
    slug: 'medical-billing-virtual-assistant',
    title: 'Medical Billing Virtual Assistant',
    shortDescription: 'Optimize your revenue cycle with a medical billing virtual assistant, maximizing collections and reducing administrative burdens efficiently.',
    fullDescription: 'A medical billing virtual assistant handles everything from claim entry to denial management. By hiring a medical billing virtual assistant, you reduce the time your clinic spends on paperwork. Our medical billing virtual assistant services are designed for maximum revenue capture. Every medical billing virtual assistant is expert in ICD-10 and CPT coding. Trust a medical billing virtual assistant to streamline your cash flow.',
    icon: FileCheck,
    heroImage: 'https://remotemedicalassistant.com/wp-content/uploads/2025/02/3e63180ebe-e1739365551837.png',
    features: [
      'Claims Submission & Follow-up by a medical billing virtual assistant',
      'Denial Management handled by your medical billing virtual assistant',
      'Patient Statement Processing via a medical billing virtual assistant',
      'Revenue Cycle Analysis from a medical billing virtual assistant',
      'Credentialing Support using a medical billing virtual assistant'
    ],
    benefits: [
      'Faster Reimbursements with a medical billing virtual assistant',
      'Lower Clean Claim Rate through a medical billing virtual assistant',
      'Reduced Administrative Burden for your medical billing virtual assistant',
      'Clear Financial Reporting from a medical billing virtual assistant'
    ],
    overviewTitle: "Maximize Revenue with a ",
    overviewHeadingHighlight: "Medical Billing Virtual Assistant",
    overviewDescription: "Is your revenue cycle underperforming? A medical billing virtual assistant can turn that around. Our medical billing virtual assistant services provide expert oversight for every claim. With a medical billing virtual assistant, you can focus on surgery and care while we handle the money. Every medical billing virtual assistant is trained in the latest billing software. We provide the most cost-effective medical billing virtual assistant solutions. A medical billing virtual assistant ensures that your clean claim rate stays high. Hire a medical billing virtual assistant today and see the difference.",
    whatWeDo: [
      {
        title: "Claims Submission",
        description: "Entering and submitting medical claims to payers with 99% accuracy, ensuring your practice is reimbursed for its hard work.",
        icon: FileText
      },
      {
        title: "Denial Management",
        description: "Aggressively appealing rejected claims and fixing coding errors to capture the revenue that would otherwise be lost.",
        icon: ShieldCheck
      },
      {
        title: "Patient Statement Processing",
        description: "Generating and mailing clear patient statements, and handling inbound billing inquiries with a professional touch.",
        icon: Receipt
      },
      {
        title: "Revenue Cycle Analysis",
        description: "Providing detailed monthly reports on your accounts receivable, collection rates, and overall financial health.",
        icon: TrendingUp
      },
      {
        title: "Insurance Follow-up",
        description: "Directly contacting insurance companies to investigate old or unpaid claims, moving money from AR into your bank account.",
        icon: PhoneCall
      },
      {
        title: "Provider Credentialing",
        description: "Managing the tedious application process for insurance panels, ensuring your providers stay in-network and compliant.",
        icon: Briefcase
      }
    ]
  },
  {
    id: 'medical-coder-virtual-assistant',
    slug: 'medical-coder-virtual-assistant',
    title: 'Medical Coder Virtual Assistant',
    shortDescription: 'Ensure top-tier coding accuracy and compliance with a certified medical coder virtual assistant for your specialized healthcare practice.',
    fullDescription: 'A medical coder virtual assistant ensures your practice stays compliant and gets paid. Our medical coder virtual assistant services provide certified experts for complex documentation. By utilizing a medical coder virtual assistant, you reduce audit risks. Every medical coder virtual assistant is trained in specialized modifiers. A medical coder virtual assistant is the key to accurate reimbursement.',
    icon: Code,
    heroImage: 'https://remotemedicalassistant.com/wp-content/uploads/2025/02/3e63180ebe-e1739365551837.png',
    features: [
      'ICD-10 & CPT Coding by a medical coder virtual assistant',
      'Audit Support from your medical coder virtual assistant',
      'Clinical Documentation Improvement with a medical coder virtual assistant',
      'Risk Adjustment Coding via a medical coder virtual assistant',
      'Compliance Monitoring handled by a medical coder virtual assistant'
    ],
    benefits: [
      'Maximized Accuracy with a medical coder virtual assistant',
      'Reduced Audit Risk using a medical coder virtual assistant',
      'Optimized Revenue thanks to a medical coder virtual assistant',
      'Stay Current with Regulations with your medical coder virtual assistant'
    ],
    overviewTitle: "Ensure Coding Accuracy with a ",
    overviewHeadingHighlight: "Medical Coder Virtual Assistant",
    overviewDescription: "Looking for a medical coder virtual assistant to reduce your coding backlog? Our medical coder virtual assistant services offer rapid turnaround and high precision. A medical coder virtual assistant can handle complex surgical or diagnostic coding. With a medical coder virtual assistant, your practice avoids compliance pitfalls. Every medical coder virtual assistant on our team is CPC or AHIMA certified. We provide specialized medical coder virtual assistant support for cardiology, orthopedics, and more. A medical coder virtual assistant ensures your documentation reflects the care provided. Hire a medical coder virtual assistant to secure your practice revenue.",
    whatWeDo: [
      {
        title: "ICD-10 & CPT Coding",
        description: "Expertly assigning the most accurate diagnosis and procedure codes to maximize your legal reimbursement levels.",
        icon: Code
      },
      {
        title: "Coding Audits",
        description: "Reviewing your historical coding to identify missed revenue opportunities or potential compliance risks in your documentation.",
        icon: Search
      },
      {
        title: "Documentation Improvement",
        description: "Collaborating with your clinical staff to improve chart notes, ensuring they meet the requirements for high-level billing.",
        icon: Clipboard
      },
      {
        title: "Risk Adjustment Coding",
        description: "Specialized HCC coding for Medicare Advantage plans, ensuring your patient's complex needs are accurately reflected.",
        icon: ShieldCheck
      },
      {
        title: "Hierarchy Management",
        description: "Ensuring proper usage of modifiers and diagnostic hierarchical relationships to prevent unnecessary medical denials.",
        icon: LayoutGrid
      },
      {
        title: "Modifier Usage Check",
        description: "Systematically validating and applying surgical, diagnostic, and clinic modifiers (e.g., -25, -59) for complex cases.",
        icon: FileCheck
      }
    ]
  },
  {
    id: 'digital-marketing-virtual-assistant',
    slug: 'digital-marketing-virtual-assistant',
    title: 'Digital Marketing Virtual Assistant',
    shortDescription: 'Grow your practice visibility and attract patients with a specialized digital marketing virtual assistant for healthcare professionals.',
    fullDescription: 'A digital marketing virtual assistant helps your practice reach more local patients. By hiring a digital marketing virtual assistant, you build a strong online reputation. Our digital marketing virtual assistant services include SEO and social media. Every digital marketing virtual assistant is an expert in medical branding. Trust a digital marketing virtual assistant to manage your patient reviews.',
    icon: Megaphone,
    heroImage: 'https://remotemedicalassistant.com/wp-content/uploads/2025/02/3e63180ebe-e1739365551837.png',
    features: [
      'Social Media Management by a digital marketing virtual assistant',
      'SEO Content for Doctors from your digital marketing virtual assistant',
      'Google My Business Care via a digital marketing virtual assistant',
      'Email Newsletters handled by a digital marketing virtual assistant',
      'Review Management using a digital marketing virtual assistant'
    ],
    benefits: [
      'Increased Patient Volume with a digital marketing virtual assistant',
      'Established Online Authority through a digital marketing virtual assistant',
      'Cost-Effective Growth with your digital marketing virtual assistant',
      'Consistent Brand Presence managed by a digital marketing virtual assistant'
    ],
    overviewTitle: "Attract New Patients with a ",
    overviewHeadingHighlight: "Digital Marketing Virtual Assistant",
    overviewDescription: "Is your practice invisible online? A digital marketing virtual assistant can change that. Our digital marketing virtual assistant services are tailored for clinics and dental offices. With a digital marketing virtual assistant, your Google ranking will climb. Every digital marketing virtual assistant understands the patient journey. We provide a digital marketing virtual assistant who creates content that converts. A digital marketing virtual assistant manages your social media so you can focus on medicine. Grow your practice with a dedicated digital marketing virtual assistant today. Our digital marketing virtual assistant team is ready to help.",
    whatWeDo: [
      {
        title: "Social Media Management",
        description: "Creating engaging healthcare content for Facebook, Instagram, and LinkedIn to build trust and community authority.",
        icon: Users
      },
      {
        title: "SEO Content for Doctors",
        description: "Writing specialized medical blogs and web pages that help your practice rank higher in local search results.",
        icon: Search
      },
      {
        title: "Google My Business",
        description: "Optimizing your local search presence, managing practice hours, and responding to patient reviews professionally.",
        icon: MapPinned
      },
      {
        title: "Email Newsletters",
        description: "Designing and sending regular updates to your existing patient base to improve retention and health awareness.",
        icon: Mail
      },
      {
        title: "Review Management",
        description: "Proactively encouraging positive patient reviews and handling feedback to maintain a 5-star online reputation.",
        icon: HeartPulse
      },
      {
         title: "Paid Ad Campaigns",
         description: "Managing targeted Google and Social ads to attract new patients visiting for high-value specialty procedures.",
         icon: TrendingUp
      }
    ]
  },
];
