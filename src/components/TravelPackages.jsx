import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, X, Check, Star, ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Kashmir Paradise Tour',
    image: 'https://t4.ftcdn.net/jpg/03/62/19/27/360_F_362192710_3iIlgxQS78PoqysUTzdARNYeKFBaFxE9.jpg',
    price: '₹24,999',
    originalPrice: '₹29,999',
    duration: '5 Nights, 6 Days',
    rating: 4.9,
    reviews: 120,
    tag: 'Most Popular',
    tagColor: '#2D5A3D',
    description: 'Experience the crown of India. Sail in premium Shikaras on Dal Lake, stay in luxury houseboats, and explore the snow-covered slopes of Gulmarg.',
    highlights: ['Luxury Houseboat Stay', 'Gulmarg Gondola Ride', 'Private Chauffeur Tour', 'Traditional Wazwan Dinner'],
  itinerary: [
  {
    day: 'Day 1 - Arrival in Srinagar',
    details: 'Meet our representative at Srinagar Airport, transfer to hotel/houseboat, and enjoy an evening Shikara ride on Dal Lake.'
  },
  {
    day: 'Day 2 - Gulmarg Excursion',
    details: 'Visit Gulmarg, enjoy Gondola ride, snow activities and panoramic Himalayan views.'
  },
  {
    day: 'Day 3 - Pahalgam Tour',
    details: 'Explore Betaab Valley, Aru Valley and Lidder River with local sightseeing.'
  },
  {
    day: 'Day 4 - Sonamarg Visit',
    details: 'Experience the beautiful meadows, glaciers and mountain landscapes of Sonamarg.'
  },
  {
    day: 'Day 5 - Departure',
    details: 'Transfer to Srinagar Airport with unforgettable memories of Kashmir.'
  }
],
  },



  {
    id: 2,
    title: 'Kashmir Heritage Escape',
    image: 'https://www.shutterstock.com/image-photo/attractions-sonamarg-tourism-summit-activities-260nw-1415515895.jpg',
    price: '₹20,499',
    originalPrice: '₹22,000',
    duration: '4 Nights, 5 Days',
    rating: 4.8,
    reviews: 94,
    tag: 'Best Value',
    tagColor: '#B56B3F',
    description: 'Unwind at premium 5-star private beach resorts in North & South Goa. Enjoy sunset cruise packages and guided heritage tour bookings.',
    highlights: ['5-Star Beach Resort', 'Sunset Yacht Charter', 'Private Heritage Tour', 'Scuba & Water Sports'],
  itinerary: [
  {
    day: 'Day 1 - Arrival in Srinagar Airport',
    details: 'Welcome drink and luxury resort check-in.'
  },
  {
    day: 'Day 2 - A Tour to Sonamarg',
    details: 'Visit Glacier, Zojila Pass and Navyug Tunnel, Night Stay at Sonamarg.'
  },
  {
    day: 'Day 3 - Gulmarg Excursion',
    details: 'Gondola Ride, Skiing and Shiv Shankar Temple, return to Srinagar.'
  },
  {
    day: 'Day 4 - sight seeing with Mughal Gardens',
    details: 'Explore Mughal gardens, Nishat Garder, Shalimar Garden, Tulip Garden and Botinical Garden, and night shikara ride.'
  },
  {
    day: 'Day 5 - Departure',
    details: 'Airport transfer after breakfast.'
  }
],
  },


  {
    id: 3,
    title: 'Valley of Dreams Expedition',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/b5/cd/62/lidder-valley-pahalgam.jpg',
    price: '₹15,999',
    originalPrice: '₹19,500',
    duration: '5 Nights, 6 Days',
    rating: 4.7,
    reviews: 86,
    tag: 'Adventure',
    tagColor: '#4A7C59',
    description: 'Explore the majestic Solang Valley, drive through the Atal Tunnel, and relax in luxurious cozy wooden boutique villas.',
    highlights: ['Premium Wooden Villa', 'Solang Paragliding', 'Atal Tunnel Excursion', 'Riverside Dinner Setup'],
  itinerary: [
  {
    day: 'Day 1 - Arrival in Manali',
    details: 'Check-in and explore Mall Road.'
  },
  {
    day: 'Day 2 - Solang Valley',
    details: 'Adventure sports, ropeway and mountain activities.'
  },
  {
    day: 'Day 3 - Rohtang Pass',
    details: 'Snow points, glaciers and scenic photography.'
  },
  {
    day: 'Day 4 - Naggar Castle',
    details: 'Visit heritage sites and local villages.'
  },
  {
    day: 'Day 5 - Departure',
    details: 'Return journey with Himalayan memories.'
  }
],
  },


  {
    id: 4,
    title: 'A full tour or KASHMIR VALLEY',
    image: 'https://t4.ftcdn.net/jpg/06/90/19/09/360_F_690190949_Zm2I8RwH3gc0qbVcqiBCpQBbhPY0OpYd.jpg',
    price: '₹32,500',
    originalPrice: '₹35,000',
    duration: '6 Nights, 7 Days',
    rating: 4.9,
    reviews: 112,
    tag: 'Nature & Serenity',
    tagColor: '#3B5E2E',
    description: 'Discover the Venice of the East. Sail down the serene backwaters of Alleppey in your own private, air-conditioned premium houseboat.',
    highlights: ['Private Houseboat Cruise', 'Ayurvedic Spa Sessions', 'Kumarakom Bird Sanctuary', 'Traditional Toddy Tasting'],
  itinerary: [
  {
    day: 'Day 1 - Arrival in Kochi',
    details: 'Airport pickup and city sightseeing.'
  },
  {
    day: 'Day 2 - Munnar Hills',
    details: 'Visit tea plantations, waterfalls and scenic viewpoints.'
  },
  {
    day: 'Day 3 - Alleppey Houseboat',
    details: 'Enjoy a luxury backwater cruise with traditional meals.'
  },
  {
    day: 'Day 4 - Kumarakom',
    details: 'Explore bird sanctuary and village life.'
  },
  {
    day: 'Day 5 - Departure',
    details: 'Transfer to airport with Kerala memories.'
  }
],
  },



 {
    id: 5,
    title: 'Leh Ladakh',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop',
    price: '₹25,500',
    originalPrice: '₹27,000',
    duration: '4 Nights, 5 Days',
    rating: 4.9,
    reviews: 112,
    tag: 'Nature & Serenity',
    tagColor: '#3B5E2E',
    description: 'Discover the Venice of the East. Sail down the serene backwaters of Alleppey in your own private, air-conditioned premium houseboat.',
    highlights: ['Private Houseboat Cruise', 'Ayurvedic Spa Sessions', 'Kumarakom Bird Sanctuary', 'Traditional Toddy Tasting'],
  itinerary: [
  {
    day: 'Day 1 - Arrival in Leh',
    details: 'Acclimatization and local market exploration.'
  },
  {
    day: 'Day 2 - Leh Sightseeing',
    details: 'Visit Shanti Stupa, Leh Palace and Hall of Fame.'
  },
  {
    day: 'Day 3 - Nubra Valley',
    details: 'Cross Khardung La Pass and enjoy camel safari in Nubra.'
  },
  {
    day: 'Day 4 - Pangong Lake',
    details: 'Travel to the famous Pangong Lake and enjoy lakeside views.'
  },
  {
    day: 'Day 5 - Departure',
    details: 'Return to Leh and transfer to airport.'
  }
],
  },

];

export default function TravelPackages() {
  const [activePackage, setActivePackage] = useState(null);
  const [showItinerary, setShowItinerary] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      id="tours"
      style={{
        padding: '96px 0',
        backgroundColor: '#EDE7D9',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(208, 198, 179, 0.5)',
      }}
    >
      <div style={{
        position: 'absolute', top: '30%', right: 0,
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '520px' }}>
            <span className="section-badge">
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#4A7C59' }} />
              Curated Expeditions
            </span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              color: '#1B3A2D',
              margin: 0,
              lineHeight: 1.15,
            }}>
              Featured <em style={{ fontWeight: 400, color: '#B56B3F' }}>Travel Packages</em>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: '#7A6E62',
              lineHeight: 1.7,
              margin: 0,
            }}>
              Handpicked itineraries curated by local guides. Complete packages covering airport transport, luxury resorts, and custom activities.
            </p>
          </div>
          <a href="#booking" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#4A7C59',
            textDecoration: 'none',
          }}>
            Request Custom Itinerary
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="packages-grid">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pkg.id * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(208, 198, 179, 0.5)',
                boxShadow: '0 4px 20px rgba(27,58,45,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(27,58,45,0.14)';
                e.currentTarget.style.borderColor = 'rgba(74,124,89,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(27,58,45,0.05)';
                e.currentTarget.style.borderColor = 'rgba(208, 198, 179, 0.5)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format&fit=crop'; }}
                />
                {/* Tag */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: `rgba(244, 239, 230, 0.92)`,
                  backdropFilter: 'blur(8px)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: pkg.tagColor,
                  fontFamily: "'Inter', sans-serif",
                  border: `1px solid ${pkg.tagColor}33`,
                }}>
                  {pkg.tag}
                </div>
                {/* Duration */}
                <div style={{
                  position: 'absolute', bottom: '12px', right: '12px',
                  background: 'rgba(27, 58, 45, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  color: '#A8D5B5',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}>
                  <Calendar size={10} />
                  {pkg.duration}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={13} fill="#B56B3F" color="#B56B3F" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: '#3D2314' }}>
                    {pkg.rating}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: '#7A6E62' }}>
                    ({pkg.reviews} reviews)
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "'Lucida Calligraphy', serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1B3A2D',
                  margin: 0,
                  lineHeight: 1.2,
                }}>{pkg.title}</h3>

                {/* Footer */}
                <div style={{
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                  paddingTop: '12px',
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(208, 198, 179, 0.5)',
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.65rem',
                      color: '#B5ADA0',
                      textDecoration: 'line-through',
                      fontWeight: 500,
                    }}>{pkg.originalPrice}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#1B3A2D',
                      lineHeight: 1,
                    }}>{pkg.price}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.62rem',
                      color: '#7A6E62',
                      marginTop: '2px',
                    }}>per person</div>
                  </div>
                  <button
                    onClick={() => setActivePackage(pkg)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      color: '#2D5A3D',
                      background: 'rgba(45,90,61,0.08)',
                      border: '1px solid rgba(45,90,61,0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#1B3A2D';
                      e.target.style.color = '#F4EFE6';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(45,90,61,0.08)';
                      e.target.style.color = '#2D5A3D';
                    }}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activePackage && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePackage(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(27,58,45,0.75)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{
                position: 'relative', zIndex: 1,
                background: 'white',
                borderRadius: '28px',
                width: '100%',
                maxWidth: '540px',
                overflow: 'hidden',
                boxShadow: '0 50px 100px rgba(27,58,45,0.3)',
                border: '1px solid rgba(208, 198, 179, 0.5)',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '170px' }}>
                <img src={activePackage.image} alt={activePackage.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format&fit=crop'; }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(244,239,230,1) 0%, rgba(244,239,230,0.3) 50%, transparent 100%)' }} />
                <button
                  onClick={() => setActivePackage(null)}
                  style={{
                    position: 'absolute', top: '16px', right: '16px',
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(244,239,230,0.9)',
                    border: '1px solid rgba(208,198,179,0.6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#7A6E62',
                  }}
                >
                  <X size={16} />
                </button>
                <div style={{ position: 'absolute', bottom: '20px', left: '28px', right: '28px' }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4A7C59', fontFamily: "'Inter', sans-serif" }}>
                    Featured Package
                  </span>
                  <h3 style={{ fontFamily: "'Monotype Corsiva', serif", fontSize: '2rem', fontWeight: 700, color: '#1B3A2D', margin: '4px 0 0' }}>
                    {activePackage.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Meta */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#4A4035', fontFamily: "'Inter', sans-serif" }}>
                    <Calendar size={15} color="#4A7C59" />
                    {activePackage.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#4A4035', fontFamily: "'Inter', sans-serif" }}>
                    <Users size={15} color="#4A7C59" />
                    Group & Private Options
                  </div>
                </div>

                {/* Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B56B3F', fontFamily: "'Inter', sans-serif" }}>
                    Package Description
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#7A6E62', lineHeight: 1.7, margin: 0 }}>
                    {activePackage.description}
                  </p>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B56B3F', fontFamily: "'Inter', sans-serif" }}>
                    What's Included
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {activePackage.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '20px', height: '20px', borderRadius: '50%',
                          background: 'rgba(45,90,61,0.1)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Check size={11} color="#2D5A3D" />
                        </div>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#4A4035' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(208,198,179,0.5)',
                  flexWrap: 'wrap', gap: '16px',
                }}>
                  <div>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#B5ADA0', fontFamily: "'Inter', sans-serif" }}>Starting from</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#1B3A2D' }}>
                        {activePackage.price}
                      </span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#B5ADA0', textDecoration: 'line-through' }}>
                        {activePackage.originalPrice}
                      </span>
                    </div>
                  </div>
                  <a href="#booking" onClick={() => setActivePackage(null)} className="btn-earth">
                    Book Journey Now
                  </a>

         <button
  onClick={() => setShowItinerary(true)}
  className="btn-earth"
>
  Check Itinerary
</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

              <AnimatePresence>
        {showItinerary && activePackage && (
          <div
              style={{
                position: 'fixed',
                inset: 0,
                background: '#F4EFE6',
                zIndex: 9999
              }}
            >
            <div
             style={{
  background: '#F4EFE6',
  width: '100%',
  height: '100vh',
  overflowY: 'auto',
  borderRadius: '0',
  padding: '40px'
}}
            >
              <button
                onClick={() => setShowItinerary(false)}
                className="btn-earth"
              >
                ← Back to Package
              </button>

              <h1>{activePackage.title}</h1>

           <img
  src={activePackage.image}
  alt={activePackage.title}
  style={{
    width: '100%',
    maxWidth: '700px',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '15px',
    marginTop: '20px',
    display: 'block'
  }}
/>

              <h2 style={{
  marginTop: '30px',
  color: '#1B3A2D',
  fontSize: '2rem'
}}>
  Tour Overview
</h2>

<p style={{
  lineHeight: '1.8',
  color: '#555',
  fontSize: '1rem'
}}>
  {activePackage.description}
</p>

<h2 style={{
  marginTop: '40px',
  color: '#1B3A2D',
  fontSize: '2rem'
}}>
  Detailed Itinerary
</h2>

<div style={{ marginTop: '20px' }}>

  <div style={{
    padding: '20px',
    background: '#fff',
    borderRadius: '15px',
    marginBottom: '15px'
  }}>
<h2
  style={{
    marginTop: '40px',
    marginBottom: '25px',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#1B3A2D',
    textAlign: 'center'
  }}
>
</h2>
  
{activePackage.itinerary?.map((item, index) => (
  <div
    key={index}
    style={{
      background: '#FFFFFF',
      padding: '24px',
      borderRadius: '18px',
      marginBottom: '18px',
      border: '1px solid rgba(45,90,61,0.12)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
    }}
  >
    <div
      style={{
        display: 'inline-block',
        background: '#2D5A3D',
        color: '#fff',
        padding: '6px 14px',
        borderRadius: '30px',
        fontSize: '0.8rem',
        fontWeight: 600,
        marginBottom: '14px',
        fontFamily: "'Inter', Monotype Corsiva"
      }}
    >
      Day {index + 1}
    </div>

    <h3
      style={{
        margin: '0 0 10px 0',
        color: '#1B3A2D',
        fontSize: '1.4rem',
        fontWeight: 700,
        fontFamily: "'Cormorant Garamond', Monotype Corsiva"
      }}
    >
      {item.day}
    </h3>

    <p
      style={{
        margin: 0,
        lineHeight: '1.9',
        color: '#6B6258',
        fontSize: '1.5rem',
        fontFamily: "'Monotype Corsiva', Monotype Sorsiva"
      }}
    >
      {item.details}
    </p>
  </div>
))}
  </div>

</div>
            </div>
          </div>
        )}
      </AnimatePresence>
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) { .packages-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .packages-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
