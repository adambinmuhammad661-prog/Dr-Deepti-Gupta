import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Start Your Smile Journey Today</h2>
            <p className="text-slate-300 mb-12 text-lg leading-relaxed">
              Whether you have a question about treatment or are ready to book your first consultation, we're here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <MapPin className="text-brand-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-slate-300">Centro business tower - ICDE, 7th floor, Al Rawdah, Abu Dhabi, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Clock className="text-brand-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Clinic Hours</h4>
                  <p className="text-slate-300">Open · Closes 6 PM</p>
                  <p className="text-slate-400 text-sm mt-1">Saturday - Thursday</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Phone className="text-brand-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-300">Contact for phone number</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[40px] p-8 md:p-12 text-slate-900">
            <h3 className="text-3xl font-serif text-brand-primary mb-6">Request an Appointment</h3>
            <p className="text-slate-600 mb-8">Fill out the form below and our team will get back to you shortly to confirm your slot.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary transition-all" placeholder="+971 50 000 0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Treatment Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary transition-all bg-white">
                  <option>Pediatric Orthodontics</option>
                  <option>Adult Braces</option>
                  <option>Invisalign</option>
                  <option>General Consultation</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary transition-all h-32" placeholder="Tell us about your dental goals..."></textarea>
              </div>
              
              <button className="w-full bg-brand-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-secondary/90 transition-all flex items-center justify-center gap-2">
                <Calendar size={20} />
                Send Request
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-top border-slate-100 text-center">
              <p className="text-sm text-slate-400 mb-4">Or book directly via</p>
              <a 
                href="https://taplink.cc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors"
              >
                taplink.cc/drdeeptigupta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
