import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  UserCheck, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Check, 
  ClipboardCheck, 
  Clock, 
  MessageCircle, 
  Cpu, 
  Award,
  ChevronDown,
  LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/sections/FAQ';
import Stats from '../components/sections/Stats';
import CTASection from '../components/sections/CTASection';

interface Step {
  id: string;
  number: string;
  title: string;
  desc: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  points: string[];
  images?: string[];
}

export default function HowItWorks() {
  const [roleType, setRoleType] = useState('Executive Assistant');
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  const steps: Step[] = [
    {
      id: '01',
      number: '01',
      title: 'Meet With Our Team',
      desc: 'We start by understanding exactly what you need.',
      icon: MessageCircle,
      iconBg: 'bg-[#0070E0]',
      iconColor: 'text-white',
      points: [
        'Share your core tasks and responsibilities',
        'Specify the tools your VA needs to master',
        'Define timezone and availability requirements',
        'Outline communication preferences',
        'Set success metrics and expectations'
      ]
    },
    {
      id: '02',
      number: '02',
      title: 'Get Matched',
      desc: 'We search our talent pool of 200,000+ vetted VAs to find your perfect match.',
      icon: Users,
      iconBg: 'bg-[#E0F8E0]',
      iconColor: 'text-[#28A745]',
      points: [
        'We conduct the first interview to assess skills and experience',
        'Our team runs a second interview focused on your specific requirements',
        'You conduct the final interview with top candidates we present',
        'Each candidate is tested on your specific tools',
        'English proficiency and references are verified'
      ]
    },
    {
      id: '03',
      number: '03',
      title: 'Consulted Onboarding',
      desc: 'We ensure a smooth start with accountability built in.',
      icon: Zap,
      iconBg: 'bg-[#0070E0]',
      iconColor: 'text-white',
      points: [
        'Structured onboarding plan created together',
        'First-week check-ins and support',
        'Clear communication channels established',
        'SOPs documented',
        'Ongoing success check-ins'
      ]
    },
    {
      id: '04',
      number: '04',
      title: 'What Makes Us Different',
      desc: 'Every client gets access to our signature BootCamp — an 8-hour intensive that sets you and your VA up for long-term success.',
      icon: ShieldCheck,
      iconBg: 'bg-[#E0F8E0]',
      iconColor: 'text-[#28A745]',
      points: [
        '8-hour intensive training (not a quick video call)',
        'Deep dive into delegation frameworks and best practices',
        'AI enablement training so your VA can 10x their output',
        'Direct training sessions with our CEO',
        'Setting up your tools, SOPs, and systems properly'
      ],
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Part-Time',
      hours: '20 hrs/week',
      price: '$750/mo',
      desc: 'Perfect for specific tasks or projects',
      features: ['Pre-vetted candidates', 'Tool-ready talent', 'Onboarding Consulting', 'Email support'],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Full-Time',
      hours: '40 hrs/week',
      price: '$1,200/mo',
      desc: 'A dedicated team member for your business',
      features: ['Everything in Part-Time', 'Priority matching', 'Weekly check-ins', 'Dedicated success manager'],
      buttonText: 'Get Started',
      popular: true
    },
    {
      name: 'Team',
      hours: 'Multiple VAs',
      price: 'Custom',
      desc: 'Scale with a team of virtual assistants',
      features: ['Everything in Full-Time', 'Team coordination', 'Bulk pricing', 'Custom SLAs'],
      buttonText: 'Get Started',
      popular: false
    }
  ];

  const calculateCost = () => {
    const base = roleType === 'Executive Assistant' ? 1200 : 1800;
    const factor = hoursPerWeek / 40;
    const min = Math.round(base * factor * 0.95);
    const max = Math.round(base * factor * 1.05);
    return `${min.toLocaleString()} – ${max.toLocaleString()}`;
  };

  return (
    <div className="bg-section-bg">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#0070E0] font-black uppercase tracking-[0.2em] text-xs mb-6 block"
          >
            Our Process & Pricing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            How We <span className="text-primary italic">Work & Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A refined process to get you matched with pre-vetted virtual assistants — plus transparent pricing with no hidden fees.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact" className="bg-[#0070E0] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-[#005bb8] transition-all shadow-xl shadow-blue-500/20">
              <Play className="w-4 h-4 fill-current" /> Start the Process
            </Link>
          </motion.div>
        </div>
      </section>

      <Stats />

      {/* Nav Navigation */}
      <div className="bg-white border-b border-slate-100 sticky top-[70px] z-40 py-4 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-4">
          {['Our Process', 'What\'s Included', 'Pricing', 'Calculator', 'FAQ'].map((item) => (
            <button 
              key={item}
              onClick={() => {
                const idMap: Record<string, string> = {
                  'Our Process': 'process',
                  'What\'s Included': 'features',
                  'Pricing': 'pricing',
                  'Calculator': 'calculator',
                  'FAQ': 'faq'
                };
                document.getElementById(idMap[item])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-6 py-2 bg-slate-50 text-slate-500 font-bold text-sm rounded-full border border-slate-100 hover:bg-white hover:text-primary hover:border-primary/30 transition-all cursor-pointer whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Process Steps Section */}
      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-32 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px bg-slate-200 -z-0 hidden md:block" />

          {steps.map((step, i) => (
            <div key={step.id} className="relative z-10">
              {/* Step Header */}
              <div className="flex flex-col items-center mb-8 text-center">
                <div className={`w-20 h-20 ${step.iconBg} ${step.iconColor} rounded-[24px] flex items-center justify-center mb-6 shadow-lg relative`}>
                  <step.icon className="w-10 h-10" />
                  <span className="absolute -top-4 -right-4 text-4xl font-black text-slate-200/50 -z-10">{step.number}</span>
                </div>
                <h2 className="text-3xl font-black text-navy-dark mb-4">
                  {step.title.split(' ').slice(0, -1).join(' ')} <span className="text-primary italic">{step.title.split(' ').slice(-1)}</span>
                </h2>
                <p className="text-slate-500 font-medium max-w-lg">{step.desc}</p>
              </div>

              {/* Step Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] border border-slate-100 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    {step.points.map((point, pi) => (
                      <div key={pi} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3px]" />
                        </div>
                        <span className="text-slate-600 font-bold text-[15px]">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {step.images && (
                   <div className="mt-12 grid grid-cols-3 gap-4">
                     {step.images.map((img, imgI) => (
                        <div key={imgI} className="group relative rounded-2xl overflow-hidden aspect-video">
                          <img src={img} alt={`Process ${imgI}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-navy-dark/20 flex items-end p-4">
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">
                              {imgI === 0 ? 'Our HQ' : imgI === 1 ? 'CEO Training' : 'Live BootCamp'}
                            </span>
                          </div>
                        </div>
                     ))}
                   </div>
                )}
                
                {step.id === '04' && (
                  <div className="mt-8 flex items-center gap-2 text-[#0070E0] font-black text-[10px] uppercase tracking-widest bg-blue-50/50 inline-flex px-4 py-2 rounded-full">
                    <Zap className="w-3 h-3 fill-current" /> Included with every hire
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy-dark mb-4">What you get <span className="text-primary">with every hire</span></h2>
            <p className="text-slate-500 font-medium">Every Star Billing Solutions placement includes these quality guarantees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ClipboardCheck, title: 'Pre-vetted candidates', desc: 'Tested on real tasks before you meet them' },
              { icon: Cpu, title: 'Tool-ready talent', desc: 'Trained on your specific tech stack' },
              { icon: MessageCircle, title: 'Clear communication', desc: 'English proficiency verified' },
              { icon: ShieldCheck, title: 'Reference checked', desc: 'Validated work history and performance' },
              { icon: Clock, title: 'Timezone aligned', desc: 'Overlap hours that work for you' },
              { icon: Award, title: 'Consulted onboarding', desc: 'Smooth start with accountability' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/50 rounded-[32px] border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center md:text-left"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0070E0] shadow-sm mb-6 mx-auto md:mx-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-navy-dark mb-2">{feature.title}</h3>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-section-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy-dark mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 font-medium">Find the right plan for your business. No hidden fees, no surprises.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 md:p-12 rounded-[40px] border transition-all ${
                  plan.popular 
                    ? 'bg-white border-[#0070E0] shadow-2xl z-10 ring-4 ring-blue-50' 
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0070E0] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-black text-navy-dark mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm font-bold mb-6">{plan.hours}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-black text-navy-dark">{plan.price}</span>
                </div>
                
                <p className="text-slate-500 font-medium mb-8 text-sm h-10">{plan.desc}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-50 text-[#0070E0] rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3px]" />
                      </div>
                      <span className="text-slate-600 text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all ${
                    plan.popular 
                      ? 'bg-[#0070E0] text-white hover:bg-[#005bb8] shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-50 text-navy-dark border border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#0070E0] font-black uppercase tracking-widest text-xs mb-4">
              <LayoutGrid className="w-4 h-4" /> Cost Calculator
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy-dark mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 font-medium">Get an estimate for your virtual assistant hire.</p>
          </div>

          <div className="bg-white rounded-[40px] border border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="p-8 md:p-16 space-y-12">
              {/* Role Select */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Role Type</label>
                <div className="relative">
                  <select 
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0070E0]/20 focus:border-[#0070E0] appearance-none font-bold text-navy-dark transition-all"
                  >
                    <option>Executive Assistant</option>
                    <option>Specialized Billing Admin</option>
                    <option>Patient Coordinator</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Range Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hours per Week</label>
                  <span className="text-[#0070E0] font-black text-xl">{hoursPerWeek} hrs</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  step="5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0070E0]"
                />
                <div className="flex justify-between text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  <span>10 hrs</span>
                  <span>50 hrs</span>
                </div>
              </div>

              {/* Animated Total Card */}
              <div className="bg-[#F0F7FF] rounded-[32px] p-10 text-center border border-blue-100">
                <p className="text-slate-500 font-bold text-sm mb-2">Estimated Monthly Cost</p>
                <div className="text-4xl md:text-5xl font-black text-navy-dark mb-2">
                  ${calculateCost()}
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Based on 160 hours/month</p>
              </div>

              <div className="text-center">
                 <button className="bg-[#0070E0] text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-[#005bb8] transition-all shadow-xl shadow-blue-500/20 mx-auto">
                   <Zap className="w-4 h-4 fill-current" /> Get Exact Pricing
                 </button>
                 <p className="mt-6 text-[10px] text-slate-400 font-medium">Final pricing depends on role complexity and specific requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Dynamic CTA Footer */}
      <CTASection 
        title={<>Ready to <span className="text-primary italic">get started?</span></>}
        subtitle="Book a consultation and let's find your perfect virtual assistant together."
        primaryCTA={{ text: "Book Your Game Plan Call", link: "/contact" }}
        secondaryCTA={{ text: "Browse Virtual Assistants", link: "/specialties" }}
      />
    </div>
  );
}
