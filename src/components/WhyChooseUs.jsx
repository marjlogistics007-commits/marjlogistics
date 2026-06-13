import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Lock, Users, PhoneCall, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fast Delivery',
      description: 'SLA-backed priority routes ensuring next-day courier delivery to major Indian cities.',
      icon: Zap,
      accent: 'from-amber-500/20 to-orange-500/20 text-amber-400',
    },
    {
      title: 'Affordable Pricing',
      description: 'Transparent pricing matrix with zero hidden commissions on flights, trains, and shipping bookings.',
      icon: DollarSign,
      accent: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
    },
    {
      title: 'Secure Shipping',
      description: 'Tamper-proof transit seals, GPS vehicle fleets, and comprehensive cargo damage protection.',
      icon: Lock,
      accent: 'from-blue-500/20 to-indigo-500/20 text-blue-400',
    },
    {
      title: 'Personalized Tours',
      description: 'Tailor-made vacation plans configured by certified travel directors to match your pace.',
      icon: Users,
      accent: 'from-purple-500/20 to-pink-500/20 text-purple-400',
    },
    {
      title: '24/7 Support',
      description: 'A dedicated, human-operated concierge desk resolving re-bookings and delay escalations instantly.',
      icon: PhoneCall,
      accent: 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
    },
    {
      title: 'Verified Partners',
      description: 'Direct corporate ties with certified flight carriers, premium hotels, and IRCTC networks.',
      icon: CheckCircle,
      accent: 'from-indigo-500/20 to-violet-500/20 text-indigo-400',
    },
  ];

  return (
    <section className="py-24 bg-brand-dark/50 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Core Edge
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
            Built For Speed. Designed For Comfort.
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base">
            Whether forwarding a high-priority enterprise document or planning a dream Himalayan family escape, see why thousands choose MARJ.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon with gradient badge */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-lg text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
