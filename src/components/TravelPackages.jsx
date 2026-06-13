import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Users, X, Check, Star, ArrowRight } from 'lucide-react';

export default function TravelPackages() {
  const [activePackage, setActivePackage] = useState(null);

  const packages = [
    {
      id: 1,
      title: 'Kashmir Paradise Tour',
      image: 'https://images.unsplash.com/photo-1598324422814-29117f66e47a?q=80&w=600&auto=format&fit=crop',
      price: '₹24,999',
      originalPrice: '₹29,999',
      duration: '5 Nights, 6 Days',
      rating: 4.9,
      reviews: 120,
      description: 'Experience the crown of India. Sail in premium Shikaras on Dal Lake, stay in luxury houseboats, and explore the snow-covered slopes of Gulmarg.',
      highlights: ['Luxury Houseboat Stay', 'Gulmarg Gondola Ride', 'Private Chauffeur Tour', 'Traditional Wazwan Dinner'],
    },
    {
      id: 2,
      title: 'Luxury Goa Escape',
      image: 'https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=600&auto=format&fit=crop',
      price: '₹18,499',
      originalPrice: '₹22,000',
      duration: '4 Nights, 5 Days',
      rating: 4.8,
      reviews: 94,
      description: 'Unwind at premium 5-star private beach resorts in North & South Goa. Enjoy scenic sunset cruise packages and guided heritage tour bookings.',
      highlights: ['5-Star Beach Resort', 'Sunset Yacht Charter', 'Private Heritage Tour', 'Scuba & Water Sports'],
    },
    {
      id: 3,
      title: 'Himalayan Manali Retreat',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop',
      price: '₹15,999',
      originalPrice: '₹19,500',
      duration: '5 Nights, 6 Days',
      rating: 4.7,
      reviews: 86,
      description: 'Explore the majestic Solang Valley, drive through the engineering marvel of Atal Tunnel, and relax in luxurious cozy wooden boutique villas.',
      highlights: ['Premium Wooden Villa', 'Solang Paragliding', 'Atal Tunnel Excursion', 'Riverside Dinner Setup'],
    },
    {
      id: 4,
      title: 'Kerala Backwaters Cruise',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop',
      price: '₹21,500',
      originalPrice: '₹26,000',
      duration: '4 Nights, 5 Days',
      rating: 4.9,
      reviews: 112,
      description: 'Discover the Venice of the East. Sail down the serene backwaters of Alleppey in your own private, air-conditioned premium houseboat.',
      highlights: ['Private Houseboat Cruise', 'Ayurvedic Spa Sessions', 'Kumarakom Bird Sanctuary', 'Traditional Toddy Tasting'],
    },
  ];

  return (
    <section id="tours" className="py-24 bg-brand-dark relative overflow-hidden bg-dots">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Curated Expeditions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
              Featured Travel Packages
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Handpicked itineraries curated by local guides. Complete packages covering airport transport, luxury resorts, and custom activities.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#booking"
              className="text-sm font-semibold text-brand-gold hover:text-white transition-colors flex items-center gap-2"
            >
              Request Custom Itinerary
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Travel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pkg.id * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/5 bg-brand-card/30 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-white tracking-wide flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-brand-gold" />
                  {pkg.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                    <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    <span className="text-white">{pkg.rating}</span>
                    <span>({pkg.reviews} reviews)</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-gold transition-colors duration-300">
                    {pkg.title}
                  </h3>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-[10px] text-slate-500 line-through block font-medium">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-lg font-bold text-white tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] text-slate-400 block -mt-1 font-medium">
                      per person
                    </span>
                  </div>
                  <button
                    onClick={() => setActivePackage(pkg)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:border-transparent transition-all duration-300"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Package Detail Modal (Drawer) */}
      <AnimatePresence>
        {activePackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePackage(null)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              {/* Image header */}
              <div className="relative h-64 w-full">
                <img
                  src={activePackage.image}
                  alt={activePackage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
                <button
                  onClick={() => setActivePackage(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-brand-dark/80 border border-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    Featured Tour package
                  </span>
                  <h3 className="font-display font-bold text-3xl text-white mt-1">
                    {activePackage.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-gold" />
                    <span>{activePackage.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-gold" />
                    <span>Group & Private Options</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Package Description
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {activePackage.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    What's Included
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {activePackage.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <span className="text-xs text-slate-400">Price details</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white font-display">
                        {activePackage.price}
                      </span>
                      <span className="text-xs text-slate-500 line-through">
                        {activePackage.originalPrice}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#booking"
                    onClick={() => setActivePackage(null)}
                    className="px-6 py-3 rounded-full text-xs font-semibold text-brand-dark bg-brand-gold hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
                  >
                    Book Journey Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
