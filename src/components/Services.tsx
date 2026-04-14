import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Baby, User } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Pediatric Orthodontics',
      description: 'Early detection and intervention for children to guide jaw growth and permanent tooth eruption.',
      icon: <Baby className="text-brand-secondary" size={32} />,
      features: ['Early screening', 'Growth modification', 'Habit breaking appliances']
    },
    {
      title: 'Adult Orthodontics',
      description: 'Advanced solutions for adults seeking to improve their smile and dental health at any age.',
      icon: <User className="text-brand-secondary" size={32} />,
      features: ['Invisalign', 'Ceramic braces', 'Lingual orthodontics']
    },
    {
      title: 'Smile Makeovers',
      description: 'Comprehensive aesthetic treatments to create the perfect harmonious smile you deserve.',
      icon: <Sparkles className="text-brand-secondary" size={32} />,
      features: ['Digital smile design', 'Complex cases', 'Retention planning']
    }
  ];

  return (
    <section id="services" className="section-padding bg-brand-accent/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">Comprehensive Care</h2>
          <p className="text-slate-600">We offer a wide range of orthodontic treatments tailored to the unique needs of every patient, from toddlers to adults.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="mb-6 p-4 bg-brand-accent rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-brand-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
