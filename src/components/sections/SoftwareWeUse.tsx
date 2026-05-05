import { motion } from 'motion/react';

const softwareLogos = [
  { name: 'eClinicalWorks', domain: 'eclinicalworks.com' },
  { name: 'PracticeFusion', domain: 'practicefusion.com' },
  { name: 'Kareo', domain: 'kareo.com' },
  { name: 'Athena Health', domain: 'athenahealth.com' },
  { name: 'RXNT', domain: 'rxnt.com' },
  { name: 'WebPT', domain: 'webpt.com' },
  { name: 'CollaborateMD', domain: 'collaboratemd.com' },
  { name: 'AdvancedMD', domain: 'advancedmd.com' },
  { name: 'DrChrono', domain: 'drchrono.com' },
  { name: 'Allscripts', domain: 'allscripts.com' },
];

interface Props {
  bgColor?: string;
}

export default function SoftwareWeUse({ bgColor = "bg-section-bg" }: Props) {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-[1fr_min(1280px,100%)_1fr] border-y border-slate-200 overflow-hidden ${bgColor}`}>
      {/* Left Bleed */}
      <div className="bg-primary hidden lg:block" />

      {/* Main Content */}
      <div className="flex flex-col lg:grid lg:grid-cols-3">
        {/* Left Side Content */}
        <div className="bg-primary p-12 lg:pl-8 lg:pr-12 text-center lg:text-left flex flex-col justify-center text-white">
          <p className="text-white/80 font-bold text-sm tracking-wider uppercase mb-2">
            PROVEN EXPERTISE IN
          </p>
          <h2 className="text-3xl font-bold">
            50+ EHR/EMR/PMS
          </h2>
        </div>

        {/* Right Side Marquee Content */}
        <div className={`lg:col-span-2 ${bgColor} relative flex items-center overflow-hidden py-12 lg:py-0 lg:pl-12 lg:pr-8`}>
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: [0, -1035], // Approximate width of one set of items
            }}
            transition={{
              duration: 30, // Slow marquee
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Double the array for seamless looping */}
            {[...softwareLogos, ...softwareLogos, ...softwareLogos].map((software, index) => (
              <div key={index} className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center p-4 border border-slate-100">
                  <img 
                    src={`https://logo.clearbit.com/${software.domain}`} 
                    alt={`${software.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback if logo fails to load
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${software.name}&background=random&color=fff&rounded=true&bold=true`;
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-slate-500">{software.name}</span>
              </div>
            ))}
          </motion.div>
          
          {/* Fade edges */}
          <div className={`absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-section-bg to-transparent z-10 pointer-events-none ${bgColor === 'bg-white' ? 'from-white' : 'from-section-bg'}`} />
          <div className={`absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-section-bg to-transparent z-10 pointer-events-none ${bgColor === 'bg-white' ? 'from-white' : 'from-section-bg'}`} />
        </div>
      </div>

      {/* Right Bleed */}
      <div className={`${bgColor} hidden lg:block`} />
    </section>
  );
}
