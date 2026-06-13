import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Phone, MapPin, Truck, Plane, Train, Compass, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [serviceType, setServiceType] = useState('courier'); // 'courier' | 'flight' | 'train' | 'tour'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    destination: '',
    date: '',
    weight: '1',
    travelers: '1',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.destination || !formData.date) {
      return; // Basic validation
    }
    // Simulate successful form submission
    setShowSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      origin: '',
      destination: '',
      date: '',
      weight: '1',
      travelers: '1',
    });
    setShowSuccess(false);
  };

  const servicesList = [
    { id: 'courier', name: 'Courier Service', icon: Truck },
    { id: 'flight', name: 'Flight Ticket', icon: Plane },
    { id: 'train', name: 'Train Ticket', icon: Train },
    { id: 'tour', name: 'Tour Package', icon: Compass },
  ];

  return (
    <section id="booking" className="py-24 bg-brand-dark/45 relative overflow-hidden bg-dots">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            RESERVATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
            Book In Seconds
          </h2>
          <p className="text-slate-400 text-sm">
            Select your service category, enter shipping or passenger details, and schedule your booking instantly.
          </p>
        </div>

        {/* Booking Container */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Service Tabs */}
          <div className="grid grid-cols-4 border-b border-white/5 bg-brand-card/45">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setServiceType(service.id)}
                  className={`py-5 text-center flex flex-col items-center gap-2 font-display font-semibold text-xs transition-all relative ${
                    serviceType === service.id ? 'text-brand-accent' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{service.name}</span>
                  {serviceType === service.id && (
                    <motion.div layoutId="activeBookingTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-accent" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/30 transition-all"
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit mobile"
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/30 transition-all"
                />
              </div>

              {/* Origin field (conditional styling/labels) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  {serviceType === 'courier' ? 'Pickup Pincode' : 'Departure City'}
                </label>
                <input
                  type="text"
                  name="origin"
                  required
                  value={formData.origin}
                  onChange={handleInputChange}
                  placeholder={serviceType === 'courier' ? 'e.g. 110001 (Delhi)' : 'e.g. Mumbai'}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/30 transition-all"
                />
              </div>

              {/* Destination field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                  {serviceType === 'courier' ? 'Delivery Pincode' : 'Destination / Arrival City'}
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder={serviceType === 'courier' ? 'e.g. 560001 (Bangalore)' : 'e.g. Goa'}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/30 transition-all"
                />
              </div>

              {/* Date field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                  {serviceType === 'courier' ? 'Pickup Date' : 'Travel Date'}
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/30 transition-all"
                />
              </div>

              {/* Conditional parameter field */}
              {serviceType === 'courier' ? (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Approx. Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    min="1"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-accent/50 transition-all"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Passengers / Travelers
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl bg-brand-card border border-white/10 text-white text-sm focus:outline-none focus:border-brand-accent/50 transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <p className="text-xs text-slate-500 max-w-sm">
                * By submitting, you agree to our service terms. We will verify availability and confirm within 15 minutes.
              </p>
              <button
                type="submit"
                className="px-8 py-4 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-accent to-brand-violet hover:shadow-lg hover:shadow-brand-accent/25 transition-all duration-300"
              >
                Confirm Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal Dialogue */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl z-10 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-brand-accent/15 border border-brand-accent/20 flex items-center justify-center text-brand-accent mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-white">Booking Requested</h3>
                <p className="text-slate-400 text-sm">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your request has been logged successfully.
                </p>
              </div>

              <div className="bg-brand-card/50 border border-white/5 p-4 rounded-2xl text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Category:</span>
                  <span className="text-white font-semibold uppercase">{serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="text-white font-semibold">{formData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Date:</span>
                  <span className="text-white font-semibold">{formData.date}</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="w-full py-3.5 rounded-full text-xs font-semibold text-brand-dark bg-white hover:bg-slate-200 transition-colors"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
