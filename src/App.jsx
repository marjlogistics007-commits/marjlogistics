import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import TravelPackages from './components/TravelPackages';
import LogisticsSolutions from './components/LogisticsSolutions';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-slate-100 selection:bg-brand-accent selection:text-white">
      {/* Premium Navbar */}
      <Navbar />

      <main className="relative">
        {/* Sections */}
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <TravelPackages />
        <LogisticsSolutions />
        <Testimonials />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;
