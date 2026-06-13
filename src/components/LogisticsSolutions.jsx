import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Search, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

export default function LogisticsSolutions() {
  const [activeTab, setActiveTab] = useState('track'); // 'track' | 'calculate'
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [weight, setWeight] = useState(2);
  const [speed, setSpeed] = useState('express'); // 'standard' | 'express' | 'same-day'

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    // Simulate tracking response
    setTrackingResult({
      id: trackingId.toUpperCase(),
      status: 'In Transit',
      eta: 'Tomorrow, by 6:00 PM',
      steps: [
        { title: 'Package Picked Up', desc: 'Indira Gandhi Cargo Terminal, Delhi', time: 'June 13, 04:30 PM', done: true },
        { title: 'Sorted & Dispatched', desc: 'MARJ North Hub Consolidation Center', time: 'June 13, 09:15 PM', done: true },
        { title: 'In Transit', desc: 'Express transport route to destination hub', time: 'June 14, 02:40 AM', done: true },
        { title: 'Out for Delivery', desc: 'Courier agent assigned at local delivery station', time: 'Pending', done: false },
      ]
    });
  };

  const calculateEstimate = () => {
    let rate = 80; // base standard rate per kg
    if (speed === 'express') rate = 150;
    if (speed === 'same-day') rate = 320;
    return rate * weight;
  };

  const calculateETA = () => {
    if (speed === 'standard') return '3 - 5 Business Days';
    if (speed === 'express') return '1 - 2 Business Days';
    return 'Same Day Guaranteed';
  };

  return (
    <section id="logistics" className="py-24 bg-brand-dark/40 relative overflow-hidden bg-dots">
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-emerald">
                Enterprise Logistics
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
                Next-Gen Courier Solutions
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Empower your business with MARJ's digital tracking platform. Track priority cargo routes, calculate instant freight estimates, and enjoy automated warehousing logs.
              </p>
            </div>

            {/* Feature small cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Full Route Insurance</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Complimentary protection on high-priority electronics & documents.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Automated Digital Proof of Delivery</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Geofenced signature check sent directly to your phone.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              
              {/* Tab Selector */}
              <div className="flex border-b border-white/5 bg-brand-card/45">
                <button
                  onClick={() => { setActiveTab('track'); setTrackingResult(null); }}
                  className={`flex-1 py-5 text-center font-display font-semibold text-sm transition-all relative ${
                    activeTab === 'track' ? 'text-brand-emerald' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Courier Tracking
                  {activeTab === 'track' && (
                    <motion.div layoutId="logisticsTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-emerald" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('calculate')}
                  className={`flex-1 py-5 text-center font-display font-semibold text-sm transition-all relative ${
                    activeTab === 'calculate' ? 'text-brand-emerald' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Rate Estimator
                  {activeTab === 'calculate' && (
                    <motion.div layoutId="logisticsTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-emerald" />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                
                {/* Tab: Tracking */}
                {activeTab === 'track' && (
                  <div className="space-y-8">
                    <form onSubmit={handleTrackSubmit} className="flex gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          placeholder="Enter Tracking ID (e.g. MARJ-749)"
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-emerald/50 focus:ring-1 focus:ring-brand-emerald/30 transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-3.5 rounded-2xl bg-brand-emerald text-brand-dark font-semibold text-sm hover:shadow-lg hover:shadow-brand-emerald/20 transition-all duration-300 flex items-center gap-1.5 shrink-0"
                      >
                        Track Package
                      </button>
                    </form>

                    <AnimatePresence mode="wait">
                      {trackingResult ? (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="space-y-6 pt-4 border-t border-white/5"
                        >
                          <div className="flex justify-between items-center bg-brand-emerald/5 border border-brand-emerald/10 p-4 rounded-2xl">
                            <div>
                              <span className="text-[10px] text-brand-emerald uppercase font-bold tracking-wider">Estimated Delivery</span>
                              <h4 className="text-white font-bold text-base mt-0.5">{trackingResult.eta}</h4>
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 bg-brand-emerald/15 text-brand-emerald rounded-full border border-brand-emerald/20">
                              {trackingResult.status}
                            </span>
                          </div>

                          {/* Stepper */}
                          <div className="relative pl-6 border-l border-white/10 space-y-8 ml-2">
                            {trackingResult.steps.map((step, idx) => (
                              <div key={idx} className="relative">
                                {/* Dot indicator */}
                                <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                                  step.done 
                                    ? 'bg-brand-emerald border-brand-emerald text-brand-dark' 
                                    : 'bg-brand-dark border-slate-700 text-slate-700'
                                }`}>
                                  {step.done && <div className="w-1.5 h-1.5 rounded-full bg-brand-dark" />}
                                </div>
                                <div>
                                  <h4 className={`text-sm font-semibold ${step.done ? 'text-white' : 'text-slate-500'}`}>
                                    {step.title}
                                  </h4>
                                  <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                                  <span className="text-[10px] text-slate-500 block mt-1">{step.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="empty"
                          className="flex flex-col items-center justify-center py-12 text-center text-slate-500 space-y-3"
                        >
                          <Package className="w-10 h-10 text-slate-600" />
                          <div>
                            <p className="text-sm font-semibold">Ready to Track</p>
                            <p className="text-xs text-slate-600 max-w-xs mt-1">Enter a valid packaging ID to check shipping stages and courier dispatch timestamps.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Tab: Calculate */}
                {activeTab === 'calculate' && (
                  <div className="space-y-8">
                    {/* Weight Slider */}
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <label className="text-slate-300 font-medium flex items-center gap-1.5">
                          <Scale className="w-4 h-4 text-brand-emerald" />
                          Package Weight
                        </label>
                        <span className="text-white font-bold">{weight} kg</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                        <span>1 kg</span>
                        <span>25 kg</span>
                        <span>50 kg</span>
                      </div>
                    </div>

                    {/* Speed selection */}
                    <div className="space-y-3">
                      <label className="text-slate-300 text-sm font-medium">Service Delivery Class</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { key: 'standard', name: 'Standard', desc: '3-5 Days' },
                          { key: 'express', name: 'Express', desc: '1-2 Days' },
                          { key: 'same-day', name: 'Same Day', desc: 'Guaranteed' },
                        ].map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => setSpeed(item.key)}
                            className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                              speed === item.key
                                ? 'bg-brand-emerald/10 border-brand-emerald text-white'
                                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                            }`}
                          >
                            <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                            <span className="text-[10px] mt-2 block opacity-80">{item.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Estimate results */}
                    <div className="bg-brand-emerald/5 border border-brand-emerald/10 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-center md:text-left space-y-1">
                        <span className="text-[10px] text-brand-emerald uppercase font-bold tracking-wider">Estimated fare</span>
                        <h4 className="text-white font-bold text-3xl font-display">₹{calculateEstimate()}</h4>
                        <span className="text-[10px] text-slate-500 block">Surcharges & taxes included.</span>
                      </div>
                      <div className="text-center md:text-right space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">ETA Speed</span>
                        <h4 className="text-white font-semibold text-sm">{calculateETA()}</h4>
                        <a
                          href="#booking"
                          className="mt-2 text-xs font-semibold text-brand-emerald flex items-center gap-1 hover:text-white transition-colors"
                        >
                          Proceed to Book
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
