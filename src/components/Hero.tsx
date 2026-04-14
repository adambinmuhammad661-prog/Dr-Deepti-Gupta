import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-accent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-[-12deg] translate-x-1/4 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-brand-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-600">5.0 (22 Google Reviews)</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-brand-primary leading-[1.1] mb-8">
            Creating <span className="italic">Harmonious</span> Smiles in Abu Dhabi.
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Specialist Orthodontist with over 18 years of experience dedicated to early detection and advanced treatments for children and adults.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://taplink.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
            >
              Book Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-white text-brand-primary border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all text-center"
            >
              Our Services
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/dentist/800/1000"
              alt="Dr. Deepti Gupta Clinic"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
          >
            <p className="text-3xl font-serif font-bold text-brand-primary mb-1">18+</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Years of Clinical Excellence</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
