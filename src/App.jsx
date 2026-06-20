import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import TourPackagesPage from './Pages/TourPackagesPage';

function App() {
  
  return (
  <BrowserRouter>

    <Routes>

      <Route
        path="/"
        element={
          <div style={{ backgroundColor: '#F4EFE6', color: '#3D2314', minHeight: '100vh' }}>

            <Navbar />

            <main>
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

            <Footer />

          </div>
        }
      />

      <Route
  path="/packages"
  element={<TourPackagesPage />}
/>

    </Routes>

  </BrowserRouter>

);
}

export default App;

