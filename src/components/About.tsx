import { motion } from 'motion/react';
import { Award, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://picsum.photos/seed/ortho1/400/500"
                alt="Clinic Interior"
                className="rounded-3xl w-full aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-brand-secondary/10 p-6 rounded-3xl">
                <Award className="text-brand-secondary mb-4" size={32} />
                <h4 className="font-serif text-xl font-bold text-brand-primary mb-2">MORTH RCS Edin</h4>
                <p className="text-sm text-slate-600">Royal College of Surgeons, Edinburgh, UK</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-brand-primary p-6 rounded-3xl text-white">
                <GraduationCap className="text-brand-secondary mb-4" size={32} />
                <h4 className="font-serif text-xl font-bold mb-2">MDS Orthodontics</h4>
                <p className="text-sm text-slate-200">Specialized Master's Degree from India</p>
              </div>
              <img
                src="https://picsum.photos/seed/ortho2/400/500"
                alt="Modern Equipment"
                className="rounded-3xl w-full aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Meet the Specialist</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-8 leading-tight">
            Dr. Deepti Gupta
            <span className="block text-2xl text-slate-400 mt-2 font-normal italic">MDS (India), MORTH RCS Edin (UK)</span>
          </h2>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Hi there! I'm a Specialist Orthodontist practicing in Abu Dhabi with over 18 years of experience, dedicated to creating harmonious smiles for children and adults.
            </p>
            <p>
              My approach focuses on early detection of orthodontic issues, ensuring that treatment is not only effective but also minimally invasive whenever possible. I believe that a beautiful smile is a combination of art and science.
            </p>
            <p>
              Located in the heart of Abu Dhabi at Centro Business Tower, I provide a comfortable and modern environment for all my patients.
            </p>
          </div>
          
          <div className="mt-10 flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <MapPin className="text-brand-secondary shrink-0" size={24} />
            <div>
              <p className="font-bold text-brand-primary mb-1">Clinic Location</p>
              <p className="text-sm text-slate-500">Centro business tower - ICDE, 7th floor, Al Rawdah, Abu Dhabi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
