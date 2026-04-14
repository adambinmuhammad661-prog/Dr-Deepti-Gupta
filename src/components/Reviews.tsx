import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      text: "Dr. Deepti is amazing! She explained everything so clearly and my son actually enjoys going to his appointments. Highly recommend for pediatric orthodontics.",
      rating: 5
    },
    {
      name: "John Doe",
      text: "Professional, clean clinic, and great results. I'm halfway through my Invisalign treatment and couldn't be happier with the progress.",
      rating: 5
    },
    {
      name: "Mariam K.",
      text: "The best orthodontist in Abu Dhabi. Very patient and detailed oriented. The staff at Centro Business Tower are also very helpful.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute -top-10 -left-10 text-brand-accent opacity-50">
          <Quote size={200} />
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">What Our Patients Say</h2>
            </div>
            <div className="bg-brand-accent p-6 rounded-2xl flex items-center gap-4">
              <div className="text-4xl font-serif font-bold text-brand-primary">5.0</div>
              <div>
                <div className="flex text-brand-secondary mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">22 Google Reviews</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative"
              >
                <div className="flex text-brand-secondary mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-brand-primary">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://www.google.com/search?q=Dr+Deepti+Gupta+Orthodontist+Abu+Dhabi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-primary font-bold border-b-2 border-brand-secondary pb-1 hover:text-brand-secondary transition-colors"
            >
              Read all Google Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
