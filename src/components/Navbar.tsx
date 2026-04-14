import { motion } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-serif font-bold text-brand-primary tracking-tight">Dr. Deepti Gupta</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-semibold">Specialist Orthodontist</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://taplink.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <Calendar size={16} />
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://taplink.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary text-white px-6 py-3 rounded-xl text-center font-medium flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            Book Appointment
          </a>
        </motion.div>
      )}
    </nav>
  );
}
