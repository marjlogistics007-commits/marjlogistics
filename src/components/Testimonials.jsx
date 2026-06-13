import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rohan Malhotra',
      role: 'Operations Director, NexaTech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      review: "MARJ's express courier is outstanding. We had a high-priority contract package that needed to go from Delhi to Bangalore by noon. They executed it seamlessly with digital proofs of delivery. A game changer.",
    },
    {
      name: 'Priya Sharma',
      role: 'Travel Blogger & Curator',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      review: "I booked their Kerala Backwaters Tour for my parents. From the flight bookings to the houseboat coordination and local chauffeur service, everything was top-tier luxury. Will definitely book again!",
    },
    {
      name: 'Aditya Sen',
      role: 'Founder, Zyllo Goods',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      review: "What sets them apart is their customer support. Had an unexpected flight cancellation due to weather, and their desk auto-routed us to a luxury sleeper coach instantly. Incredible commitment.",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden bg-dots">
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            REVIEWS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
            Trusted By Thousands
          </h2>
          <p className="text-slate-400 text-sm">
            Hear from our corporate logistic clients and vacation travelers who experience the premium MARJ standard every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between relative"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute right-8 top-8 w-10 h-10 text-slate-800 opacity-20 pointer-events-none" />

              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1 text-brand-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic font-sans">
                  "{rev.review}"
                </p>
              </div>

              {/* Profile info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
