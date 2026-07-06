import React, { useState } from 'react';
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
import ScrollToHash from './components/ScrollToHash';
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AutoMusic from './components/AutoMusic';
import CustomItinerary from "./Pages/CustomItinerary";
import { Link } from "react-router-dom";

function App() {

  const [serviceType, setServiceType] = useState("tour");
  
  return (
  <BrowserRouter>
  <ScrollToHash />

    <Routes>

          <Route path="/custom-itinerary" element={<CustomItinerary />} />

      <Route
        path="/"
        element={
          <div style={{ backgroundColor: '#F4EFE6', color: '#3D2314', minHeight: '100vh' }}>

            <Navbar />
<AutoMusic />



            <main>
              <Hero />
              <Services />
              <About />
              <WhyChooseUs />
              <TravelPackages setServiceType={setServiceType} />
              <LogisticsSolutions />
              <Testimonials />
              <BookingForm serviceType={serviceType} setServiceType={setServiceType}/>
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

<Route path="/privacy-policy" element={<PrivacyPolicy />} />


    </Routes>

  </BrowserRouter>

);
}

export default App;

