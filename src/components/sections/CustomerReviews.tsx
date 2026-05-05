import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState } from 'react';

const videoReviews = [
  {
    id: 1,
    name: "Emily Manekshaw",
    role: "COO, Prime Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=600",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Practice Manager, HealthLink",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=600",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=600",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 4,
    name: "Heath Badger",
    role: "CEO, Insinious Inc.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=600",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

const googleReviews = [
  {
    id: 1,
    author: "Dr. Smith",
    rating: 5,
    text: "“Star Billing Solutions MVA reduced our claim denials by 30% in six months, improving revenue and saving staff hours weekly.”",
    date: "2 weeks ago"
  },
  {
    id: 2,
    author: "Linda Rodriguez",
    rating: 5,
    text: "Excellent service and support. Their team is very knowledgeable about billing codes and insurance requirements. They've saved us countless hours of administrative work and significantly improved our revenue cycle.",
    date: "1 month ago"
  },
  {
    id: 3,
    author: "Michael Thompson",
    rating: 5,
    text: "Professional, efficient, and proactive. They don't just process claims; they optimize the entire billing process. The transparency they provide through their reporting is exactly what we needed.",
    date: "3 months ago"
  }
];

interface Props {
  bgColor?: string;
}

export default function CustomerReviews({ bgColor = "bg-white" }: Props) {
  const [videoIndex, setVideoIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const nextVideo = () => setVideoIndex((prev) => (prev + 1) % (videoReviews.length - 1));
  const prevVideo = () => setVideoIndex((prev) => (prev - 1 + (videoReviews.length - 1)) % (videoReviews.length - 1));

  const nextText = () => setTextIndex((prev) => (prev + 1) % googleReviews.length);
  const prevText = () => setTextIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);

  return (
    <section id="proof" className={`py-[30px] overflow-hidden ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm mb-2 uppercase tracking-wider"
          >
            What practice leaders are saying
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[35px] font-black text-navy-dark leading-tight max-w-4xl mx-auto"
          >
            Providers Share Their <span className="text-primary">Medical Assistant Success Stories</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video slider (Shows 2 videos) */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[0, 1].map((offset) => {
                const review = videoReviews[(videoIndex + offset) % videoReviews.length];
                return (
                  <motion.div
                    key={`${review.id}-${offset}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group"
                  >
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 cursor-pointer bg-slate-100 shadow-lg">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Play className="w-4 h-4 text-navy-dark fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-navy-dark text-sm leading-tight">{review.name}</h4>
                        <p className="text-slate-muted text-xs font-semibold">{review.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Video Nav */}
            <div className="flex gap-2 mt-6">
              <button 
                onClick={prevVideo}
                className="w-10 h-10 rounded-full bg-white text-navy-dark flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextVideo}
                className="w-10 h-10 rounded-full bg-white text-navy-dark flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Text review slider (1 card with navigation) */}
          <div className="bg-white p-8 sm:p-12 rounded-[32px] shadow-xl border border-slate-100 relative">
            <div className="absolute top-8 right-8 text-primary/10">
              <Quote className="w-20 h-20" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-yellow-50 rounded-xl">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-navy-dark">Google Reviews</h3>
            </div>

            <div className="relative h-[250px] sm:h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(googleReviews[textIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-muted italic leading-relaxed">
                    "{googleReviews[textIndex].text}"
                  </p>
                  <div className="pt-6 border-t border-slate-100">
                    <h5 className="font-bold text-navy-dark">{googleReviews[textIndex].author}</h5>
                    <p className="text-sm text-slate-muted">{googleReviews[textIndex].date}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Text Nav */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={prevText}
                className="group flex items-center gap-2 text-navy-dark font-bold hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <span>Previous</span>
              </button>
              <button 
                onClick={nextText}
                className="group flex items-center gap-2 text-navy-dark font-bold hover:text-primary transition-colors"
              >
                <span>Next</span>
                <div className="w-8 h-8 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-muted font-medium">
              <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 w-auto" />
              <span>Verified Customer Feedback</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
