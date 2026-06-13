import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Compass, Plane, Train, Bus, Briefcase, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Courier Services',
      description: 'Ultra-fast parcel shipping and document delivery with real-time tracking across 19,000+ pin codes in India.',
      icon: Truck,
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-400',
    },
    {
      title: 'Travel Packages',
      description: 'Curated luxury holiday plans, romantic retreats, and adventure tours complete with premium accommodations.',
      icon: Compass,
      color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400',
    },
    {
      title: 'Flight Booking',
      description: 'Instantly search, compare, and book domestic and international flights at corporate rates with 24/7 seat assistance.',
      icon: Plane,
      color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400',
    },
    {
      title: 'Train Booking',
      description: 'Hassle-free IRCTC e-ticket reservations, seat availability lookup, and direct PNR status alerts.',
      icon: Train,
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400',
    },
    {
      title: 'Bus Booking',
      description: 'Premium sleeper and AC bus bookings connecting remote routes with verified luxury fleet operators.',
      icon: Bus,
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-400',
    },
    {
      title: 'Business Logistics',
      description: 'Bulk enterprise shipping, custom supply chain consulting, express air cargo, and dedicated warehouse support.',
      icon: Briefcase,
      color: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20 text-indigo-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Core Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
            Premium Services Tailored For You
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base">
            From seamless package shipping to custom travel packages, MARJ combines speed, technology, and trust to deliver a premium logistics & travel ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br ${service.color} flex flex-col justify-between group cursor-pointer transition-all duration-300`}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-xl text-white group-hover:text-brand-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-white transition-colors duration-300 pt-4 border-t border-white/5">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
