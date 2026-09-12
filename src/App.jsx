import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import LogisticsSolutions from "./components/LogisticsSolutions";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollToHash from "./components/ScrollToHash";
import AutoMusic from "./components/AutoMusic";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Gallery from "./Pages/Gallery";
import LogisticsPage from "./Pages/LogisticsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>

        {/* =========================
            MAIN LOGISTICS WEBSITE
        ========================== */}
        <Route
          path="/"
          element={
            <div
              style={{
                backgroundColor: "#F4EFE6",
                color: "#3D2314",
                minHeight: "100vh",
              }}
            >
              <Navbar />

              <AutoMusic />

              <main>
                <Hero />

                <Services />

                <About />

                <WhyChooseUs />

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

        {/* =========================
            LOGISTICS PAGES
        ========================== */}

        <Route
          path="/logistics"
          element={<LogisticsPage />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

      </Routes>

      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;