import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";



export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Gulmarg Tour",
      category: "Tour",
      image: "/gallery/Gallery1.jpg",
      description: "'**Gulmarg – The Meadow of Flowers**' Nestled in the heart of the majestic Pir Panjal Range of the Himalayas, Gulmarg is one of the most breathtaking hill destinations in Kashmir. Located approximately 50 kilometers from Srinagar, this picturesque town is renowned for its lush green meadows, snow-covered mountains, dense pine forests, and unforgettable panoramic views. The name 'Gulmarg translates' to 'Meadow of Flowers' and during the spring and summer seasons, the valley truly lives up to its name as colorful wildflowers blanket the landscape. Gulmarg is a year-round destination that offers a unique experience in every season. During winter, it transforms into India's premier skiing and snowboarding destination, attracting adventure enthusiasts and professional athletes from around the world. Thick blankets of snow create a magical landscape perfect for skiing, snowmobiling, snow trekking, sledging, and other exciting winter sports. In contrast, spring and summer bring blooming meadows, pleasant weather, and refreshing mountain air, making it an ideal retreat for nature lovers, photographers, honeymooners, and families. One of Gulmarg's most iconic attractions is the world-famous Gulmarg Gondola, one of the highest cable car rides on Earth. This spectacular two-phase gondola transports visitors from Gulmarg to Kongdoori and then to Apharwat Peak, offering mesmerizing views of snow-covered mountains, deep valleys, and dense forests throughout the journey. At Apharwat Peak, visitors can enjoy snow activities almost throughout the year while witnessing breathtaking Himalayan landscapes. Apart from adventure activities, Gulmarg is home to the historic St. Mary's Church, the Maharani Temple, scenic golf courses, beautiful walking trails, and countless viewpoints that showcase the natural beauty of Kashmir. The Gulmarg Golf Course, one of the highest golf courses in the world, offers an extraordinary experience surrounded by stunning mountain scenery. Visitors can indulge in a variety of activities, including gondola rides, horse riding, ATV rides, skiing, snowboarding, trekking, nature walks, photography, shopping for traditional Kashmiri handicrafts, and tasting authentic Kashmiri cuisine. Every corner of Gulmarg provides an opportunity to create unforgettable memories with family and friends. Our Gulmarg tour package is carefully designed to provide a comfortable, safe, and memorable travel experience. We offer reliable transportation, experienced local drivers, flexible itineraries, sightseeing assistance, and dedicated customer support to ensure a hassle-free journey from start to finish. Whether you are planning a romantic honeymoon, a family vacation, an adventure-filled holiday, or a peaceful escape into nature, Gulmarg promises an unforgettable experience filled with beauty, serenity, and adventure. Discover the timeless charm of Kashmir's most celebrated hill station and let the enchanting landscapes of Gulmarg leave you with memories that will last a lifetime."
    },
    
    {
      id: 2,
      title: "Courier Service",
      category: "Courier",
      image: "/gallery/Gallery13.jpg",
      description: "DTDC Courier Service, Deliver your parcels with confidence through our trusted DTDC courier service. Whether you're sending important documents, business shipments, gifts, or personal packages, we ensure a smooth, secure, and reliable delivery experience. Backed by DTDC's extensive nationwide network, your shipments are handled with care and reach their destination efficiently. At Marj Logistics, we make the courier process simple by providing convenient booking assistance, professional support, and dependable service for both individuals and businesses. Your package is our priority from pickup to delivery."
    },

    {
      id: 3,
      title: "Flight Booking",
      category: "Flight",
      image: "/gallery/Gallery19.jpg",
      description: "Flight Booking, Travel with ease through our professional flight booking service, designed to make every journey smooth and stress-free. Whether you're planning a business trip, family vacation, honeymoon, or last-minute travel, we help you find the best flight options at competitive fares, At Marj Logistics, we provide personalized booking assistance, flexible travel solutions, and dedicated customer support from reservation to departure. With access to leading domestic and international airlines, we ensure a seamless booking experience so you can focus on enjoying your journey with complete peace of mind."
    },

    {
      id: 4,
      title: "Train Booking",
      category: "Train",
      image: "/gallery/Train.jpg",
      description: "Train Booking, Experience a new era of rail travel in Jammu & Kashmir with our reliable train booking assistance. Whether you're planning a journey on the modern Vande Bharat Express or traveling across the scenic Kashmir railway network, we make your reservation process simple, convenient, and hassle-free. Travel through one of the world's most spectacular railway corridors, featuring the iconic Chenab Rail Bridge—the world's highest railway arch bridge—and the remarkable engineering achievements of the Udhampur–Srinagar–Baramulla Rail Link (USBRL). These landmark projects have transformed rail connectivity, making travel across the region faster, more comfortable, and available throughout the year. At Marj Logistics, we help you secure confirmed train bookings, provide travel guidance, and ensure a smooth journey so you can enjoy the breathtaking landscapes and engineering marvels that make Kashmir one of India's most extraordinary rail destinations."
    },

    {
      id: 5,
      title: "Pahalgam Tour",
      category: "Tour",
      image: "/gallery/Gallery4.jpg",
      description: "Pahalgam Tour, Escape to the breathtaking beauty of Pahalgam, one of Kashmir's most cherished hill destinations, where lush green valleys, crystal-clear rivers, and majestic pine forests create an unforgettable travel experience. From the peaceful banks of the Lidder River to the scenic landscapes of Aru Valley, Betaab Valley, and Chandanwari, every moment offers a perfect blend of nature, adventure, and relaxation. At Marj Logistics, we provide carefully planned Pahalgam tour packages with comfortable transportation, flexible itineraries, and personalized assistance to ensure a smooth and memorable journey. Whether you're planning a family vacation, honeymoon, group tour, or solo getaway, our team is committed to delivering exceptional service while helping you discover the timeless charm and natural beauty of Kashmir's, Valley of Shepherds."
    },

    {
      id: 6,
      title: "Customer Journey",
      category: "Customer Service",
      image: "/gallery/Gallery8.jpg",
      description: "Customer Service, At Marj Logistics, customer satisfaction is at the heart of everything we do. We are committed to providing friendly, reliable, and personalized support for every travel and logistics requirement. From your first inquiry to the successful completion of your journey or delivery, our dedicated team is always ready to assist with prompt communication, transparent guidance, and professional service. Whether you need help with tour packages, flight and train bookings, or courier services, we strive to make every experience smooth, convenient, and worry-free. Our goal is to build lasting relationships through trust, quality, and exceptional service, ensuring that every customer feels valued and supported at every step."
    },
  ];

  
  const [selectedItem, setSelectedItem] = useState(null);
  return (
 <section
  style={{
    background: '#f6ecd5',
    minHeight: "100vh",
  }}
>
 {/* ======================= LUXURY HERO ======================= */}

<div
  style={{
    position: "relative",
    minHeight: "72vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundImage: "url('/gallery/Kashmir1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }}
>
  {/* Luxury Overlay */}

  <div
    style={{
      position: "absolute",
      inset: 0,
      background: `
        linear-gradient(
          135deg,
          rgba(5,18,10,.82),
          rgba(10,40,26,.55),
          rgba(0,0,0,.70)
        )
      `,
    }}
  />

  {/* Decorative Glow */}

  <div
    style={{
      position: "absolute",
      width: "550px",
      height: "550px",
      borderRadius: "50%",
      background: "rgba(5, 247, 102, 0.1)",
      filter: "blur(2500px)",
      top: "-120px",
      right: "-120px",
    }}
  />

  <div
    style={{
      position: "absolute",
      width: "420px",
      height: "420px",
      borderRadius: "50%",
      background: "rgba(255,255,255,.05)",
      filter: "blur(200px)",
      bottom: "-140px",
      left: "-100px",
    }}
  />

  {/* Content */}

  <motion.div
    initial={{ opacity: 0, y: 45 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.9,
      ease: "easeOut",
    }}
    style={{
      position: "relative",
      zIndex: 5,
      width: "min(92%, 900px)",
      textAlign: "center",
      padding: "55px 50px",
      borderRadius: "28px",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      background: "rgba(255,255,255,.08)",
      border: "1px solid rgba(255,255,255,.18)",
      boxShadow: "0 30px 70px rgba(0,0,0,.35)",
    }}
  >
    {/* Premium Tag */}

    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 22px",
        borderRadius: "999px",
        background: "rgba(122, 250, 175, 0.15)",
        border: "1px solid rgba(111,255,170,.35)",
        color: '#1B3A2D',
        fontSize: "20px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "28px",
        fontWeight: 600,
      }}
    >
      ✦ Marj Logistics ✦ 
    </div>

    {/* Heading */}

    <h1
      style={{
        fontSize: "clamp(1rem,7vw,3.5rem)",
        lineHeight: "1.05",
        fontWeight: 800,
        marginBottom: "24px",
        color: "#ffffff",
        letterSpacing: "-2px",
      }}
    >
      Capturing Every
      <br />

      <span
        style={{
          background:
            "linear-gradient(90deg,#9EFFC8,#43E97B,#B8FFD8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Memorable Journey
      </span>
    </h1>

    {/* Description */}

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        color: "rgba(255,255,255,.88)",
        lineHeight: 1.9,
        fontSize: "18px",
        fontWeight: 300,
      }}
    >
      Discover breathtaking destinations across Kashmir, trusted courier
      solutions, seamless flight and train bookings, and unforgettable
      travel experiences—where every photograph reflects our commitment
      to excellence and every journey tells a remarkable story.
    </p>

    {/* Decorative Line */}

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 140 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
      }}
      style={{
        height: "4px",
        margin: "38px auto 0",
        borderRadius: "20px",
        background:
          "linear-gradient(to right,#43E97B,#A8FFCE)",
      }}
    />
  </motion.div>
</div>

  {/* ===================== PREMIUM GALLERY ===================== */}

<section
  style={{
    maxWidth: "1450px",
    margin: "0 auto",
    padding: "100px clamp(24px,5vw,60px)",
  }}
>
  {/* Heading */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      textAlign: "center",
      marginBottom: "70px",
    }}
  >
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 24px",
        borderRadius: "999px",
        background: "#e8fbef",
        color: '#1B3A2D',
        fontWeight: 600,
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontSize: "14px",
        marginBottom: "24px",
      }}
    >
      ✦ Luxury Collection
    </div>

    <h2
      style={{
        fontSize: "clamp(2.8rem,6vw,4.3rem)",
        color: '#1B3A2D',
        fontWeight: 800,
        lineHeight: 1.1,
        marginBottom: "18px",
      }}
    >
      Moments Worth
      <br />
      Remembering
    </h2>

    <p
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        color: "#0b6d18",
        lineHeight: "1.9",
        fontSize: "18px",
      }}
    >
      Every destination, every delivery and every satisfied customer
      represents our passion for excellence. Explore unforgettable
      journeys through our premium gallery.
    </p>
  </motion.div>

  {/* Gallery */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
      gap: "32px",
    }}
  >
    {galleryItems.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
        }}
        whileHover={{
  y: -12,
  scale: 1.02,
}}
        style={{
          position: "relative",
          height: "320px",
          flexShrink: 0,
          overflow: "hidden",
          borderRadius: "26px",
          cursor: "pointer",
          boxShadow: "0 25px 60px rgba(0,0,0,.12)",
          background: "#fff",
        }}
      >
        <motion.img
        whileHover={{
  scale: 1.08,
}}
          transition={{
            duration: 0.8,
          }}
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Gradient */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.15), transparent)",
          }}
        />

<h3
  style={{
    fontSize: "28px",
    fontWeight: 700,
    color: "#fff",
    marginBottom: "12px",
  }}
>
  {item.title}
</h3>

<p
  style={{
    color: "rgba(255,255,255,.85)",
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "20px",
  }}
>
  Premium travel & logistics experience.
</p>

        {/* Bottom Content */}

        <div
  style={{
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "999px",

    background: "rgba(255,255,255,.15)",

    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",

    border: "1px solid rgba(255,255,255,.25)",

    color: "#4e1a1a",

    fontSize: "13px",

    fontWeight: 600,

    letterSpacing: "2px",

    marginBottom: "16px",
  }}
>
  {item.category}
</div>

{/* Glass Bottom Content */}

<div
  style={{
    position: "absolute",
    left: "20px",
    right: "20px",
    bottom: "20px",

    padding: "22px",

    borderRadius: "24px",

    background: "rgba(255,255,255,.10)",

    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,.20)",

    boxShadow: "0 15px 40px rgba(0,0,0,.25)",
  }}
>
  <motion.button
    whileHover={{
      scale: 1.03,
      background: "rgba(255,255,255,.22)",
    }}
    whileTap={{ scale: 0.98 }}
    onClick={() => setSelectedItem(item)}
    style={{
      width: "100%",
      padding: "15px",
      borderRadius: "999px",

      background: "rgba(255,255,255,.12)",

      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",

      border: "1px solid rgba(255,255,255,.25)",

      color: '#1B3A2D',

      fontWeight: 600,

      cursor: "pointer",

      transition: ".3s",
    }}
  >
    View Details →
  </motion.button>
     
        </div>
      </motion.div>
    ))}
  </div>
</section>

<AnimatePresence>
  {selectedItem && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={() => setSelectedItem(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-6xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden"
style={{
  maxHeight: "90vh",
}}
>
      
        <div
  className="grid lg:grid-cols-2"
  style={{
    maxHeight: "90vh",
  }}
>

          {/* LEFT IMAGE */}
<div
  className="flex items-center justify-center overflow-hidden bg-white/5"
  style={{
    height: window.innerWidth < 1024 ? "220px" : "700px",
  }}
>
<img
  src={selectedItem.image}
  alt={selectedItem.title}
  className="w-full h-full object-cover transition duration-700 hover:scale-105"
/>
</div>
          {/* RIGHT DETAILS */}
          <div
  className="p-6 lg:p-10 flex flex-col bg-white/5 backdrop-blur-xl overflow-y-auto scrollbar-hide"
  style={{
    maxHeight: window.innerWidth < 1024 ? "50vh" : "85vh",
  }}
> 


            <span className="inline-block w-fit rounded-full border border-white/30 bg-white/15 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white">
              {selectedItem.category}
            </span>
<h2 className="text-2xl lg:text-4xl font-bold text-white mb-5">
              {selectedItem.title}
            </h2>

            <p className="text-white/80 text-base lg:text-lg leading-7 mb-8 text-justify">
              {selectedItem.description}
            </p>

            {selectedItem.features && (
              <div className="space-y-3 mb-8">
                {selectedItem.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-auto flex gap-4">
            <Link
              to="/?service=tour#booking"
              onClick={() => setSelectedItem(null)}
              className="rounded-xl border border-green-400/40 bg-green-500/30 backdrop-blur-md px-6 py-3 text-white transition hover:bg-green-500/50"
            >
              Book Now
            </Link>

              <button
                onClick={() => setSelectedItem(null)}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 text-white transition hover:bg-white/20"
              >
                Close
              </button>
            </div>

          </div>

        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Bottom Copyright Bar */}

<div
  style={{
    marginTop: "60px",
    padding: "22px 40px",
    borderTop: "1px solid rgba(27,58,45,0.12)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    background: '#1B3A2D',
  }}
>
  <p
    style={{
      margin: 0,
      color: "#fefdf9",
      fontSize: "14px",
      fontWeight: 500,
    }}
  >
    © {2026} MARJ LOGISTICS PVT LTD. All rights reserved.
  </p>

  <Link
    to="/privacy-policy"
    style={{
      color: "#fefdf9",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
    }}
  >
    Privacy Policy
  </Link>
</div>
    </section>
  )
}
    
  
