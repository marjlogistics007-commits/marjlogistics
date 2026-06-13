import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Navigation, Compass, Package, Users, Truck } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '10K+', label: 'Happy Customers', icon: Users },
    { value: '500+', label: 'Deliveries Monthly', icon: Truck },
    { value: '24/7', label: 'Support SLA', icon: Shield },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-dots overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8"
        >
          {/* Partner Badge */}
          <div className="inline-flex">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-brand-accent bg-brand-accent/10 border border-brand-accent/20">
              <Shield className="w-3.5 h-3.5" />
              Trusted Logistics & Travel Partner
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-display">
              Moving Packages.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-violet to-brand-emerald">
                Creating Journeys.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-sans">
              Reliable courier services, travel bookings, and customized tour packages across India. Experience speed and comfort combined.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-accent to-brand-violet hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#tours"
              className="px-8 py-4 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              Book a Trip
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 w-full max-w-md" />

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2 text-white">
                    <Icon className="w-4 h-4 text-brand-accent" />
                    <span className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center h-[500px]"
        >
          {/* Central artistic background sphere */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-brand-accent/20 to-brand-violet/20 blur-2xl animate-pulse" />

          {/* Main Hero Visual Card (Image overlay) */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
              alt="Premium Travel Journey"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />

            {/* In-image details */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest">Featured Tour</span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">Scenic Kerala Backwaters</h3>
              <p className="text-xs text-slate-300 mt-2">Book complete travel packages including flights & luxury stay.</p>
            </div>
          </div>

          {/* Floating Card 1: Flight Boarding Pass */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="absolute -top-6 -left-6 md:-left-12 glass-panel p-5 rounded-2xl w-64 shadow-2xl border border-white/10"
          >
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-brand-accent rotate-45" />
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">BOARDING PASS</span>
              </div>
              <span className="text-[10px] font-semibold text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full">First Class</span>
            </div>
            <div className="flex justify-between items-center py-4">
              <div>
                <p className="text-[10px] text-slate-500 font-semibold tracking-wider">FROM</p>
                <h4 className="text-xl font-bold font-display text-white">DEL</h4>
                <p className="text-[9px] text-slate-400">Delhi, IN</p>
              </div>
              <div className="w-12 h-px bg-white/20 relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-accent" />
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-semibold tracking-wider">TO</p>
                <h4 className="text-xl font-bold font-display text-white">GOI</h4>
                <p className="text-[9px] text-slate-400">Goa, IN</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs">
              <div>
                <p className="text-[9px] text-slate-500">Seat</p>
                <p className="font-semibold text-white">12A</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-500">Gate</p>
                <p className="font-semibold text-white">A3</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-500">Boarding</p>
                <p className="font-semibold text-brand-emerald">08:15</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Courier Live Tracker */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="absolute -bottom-6 -right-6 md:-right-12 glass-panel p-5 rounded-2xl w-64 shadow-2xl border border-white/10"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
                <span className="text-[10px] font-bold text-slate-400 tracking-wider">COURIER TRANSIT</span>
              </div>
              <span className="text-[10px] font-semibold text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded-full">Fast Shipping</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                <Package className="w-5 h-5 text-brand-emerald" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-white">ID #MARJ-749</span>
                  <span className="text-brand-emerald">In Transit</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">Mumbai Hub → Bangalore Hub</p>
              </div>
            </div>
            {/* Progress line */}
            <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-brand-emerald rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
