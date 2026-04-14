import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-serif font-bold text-brand-primary">Dr. Deepti Gupta</span>
          <p className="text-sm text-slate-500 mt-1">Specialist Orthodontist in Abu Dhabi</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="p-2 text-slate-400 hover:text-brand-primary transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-brand-primary transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-brand-primary transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
        
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Dr. Deepti Gupta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
