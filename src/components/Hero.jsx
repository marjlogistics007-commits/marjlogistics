import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Package, MapPin, Navigation } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Monthly Deliveries' },
  { value: '24/7', label: 'Support Available' },
  { value: '10+', label: 'Years of Trust' },
];

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#F4EFE6',
      }}
    >
      {/* Organic background blobs */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '650px', height: '650px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,90,61,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(181,107,63,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Leaf pattern */}
      <div className="leaf-overlay" style={{
        position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 32px',
        width: '100%', position: 'relative', zIndex: 1,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}
          className="hero-grid">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* Badge */}
            <motion.div custom={0.1} variants={fadeUp}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 18px', borderRadius: '9999px',
                background: 'rgba(27, 58, 45, 0.08)',
                border: '1px solid rgba(27, 58, 45, 0.18)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#2D5A3D',
              }}>
                <Leaf size={12} />
                Trusted Logistics & Travel Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div custom={0.2} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                color: '#1B3A2D',
                margin: 0,
              }}>
                Moving Packages.
                <br />
                <span style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  background: 'linear-gradient(135deg, #2D5A3D 0%, #B56B3F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Creating Journeys.
                </span>
              </h1>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 400,
                color: '#7A6E62',
                maxWidth: '440px',
                lineHeight: 1.7,
                margin: 0,
              }}>
                Reliable courier services, travel bookings, and customized tour packages across India. Experience the harmony of speed and care.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div custom={0.35} variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#booking" className="btn-earth">
                Get Started
                <ArrowRight size={15} />
              </a>
              <a href="#tours" className="btn-outline-earth">
                <Navigation size={15} />
                Explore Tours
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div custom={0.5} variants={fadeUp}>
              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #D0C6B3, transparent)', marginBottom: '24px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: '#1B3A2D',
                      lineHeight: 1,
                    }}>{stat.value}</span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#7A6E62',
                    }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', height: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Main image card */}
            <div style={{
              width: '100%', maxWidth: '400px', aspectRatio: '4/5',
              borderRadius: '28px', overflow: 'hidden',
              boxShadow: '0 40px 80px -20px rgba(27,58,45,0.2), 0 0 0 1px rgba(208,198,179,0.5)',
              position: 'relative',
            }}>
              <img
                src="data:image/jpeg;base64,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"
                alt="Nature & Travel Journey"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format&fit=crop'; }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(27,58,45,0.85) 0%, rgba(27,58,45,0.15) 50%, transparent 100%)',
              }} />
              {/* Bottom label */}
              <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px' }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A8D5B5',
                }}>Featured Package</span>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600,
                  color: 'white', margin: '6px 0 8px',
                }}>Scenic Kerala Backwaters</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '0.72rem',
                  color: 'rgba(244,239,230,0.85)', lineHeight: 1.5, margin: 0,
                }}>Complete travel package including flights & luxury stay.</p>
              </div>
            </div>

            {/* Floating card: Boarding Pass */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              style={{
                position: 'absolute', top: '10px', left: '-20px',
                background: 'rgba(244, 239, 230, 0.92)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(208, 198, 179, 0.8)',
                borderRadius: '24px',
                padding: '20px',
                width: '220px',
                boxShadow: '0 20px 50px rgba(27,58,45,0.12)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Navigation size={12} color="#4A7C59" />
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A6E62' }}>Boarding Pass</span>
                </div>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#2D5A3D', background: 'rgba(27,58,45,0.08)', padding: '3px 8px', borderRadius: '9999px' }}>First Class</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: '1px solid #D0C6B3', borderBottom: '1px solid #D0C6B3' }}>
                <div>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', fontWeight: 600, margin: 0 }}>FROM</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B3A2D', margin: '2px 0' }}>DEL</p>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', margin: 0 }}>Delhi, IN</p>
                </div>
                <div style={{ fontSize: '1.2rem' }}>✈</div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', fontWeight: 600, margin: 0 }}>TO</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B3A2D', margin: '2px 0' }}>GOI</p>
                  <p style={{ fontSize: '0.6rem', color: '#7A6E62', margin: 0 }}>Goa, IN</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                {[['Seat', '12A'], ['Gate', 'A3'], ['Boarding', '08:15']].map(([label, val], i) => (
                  <div key={i}>
                    <p style={{ fontSize: '0.58rem', color: '#7A6E62', margin: 0 }}>{label}</p>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, color: i === 2 ? '#4A7C59' : '#1B3A2D', margin: '2px 0 0' }}>{val}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating card: Live Tracker */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
              style={{
                position: 'absolute', bottom: '10px', right: '-20px',
                background: 'rgba(27, 58, 45, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(74, 124, 89, 0.35)',
                borderRadius: '24px',
                padding: '20px',
                width: '220px',
                boxShadow: '0 20px 50px rgba(27,58,45,0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#A8D5B5', display: 'block', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.7)' }}>Live Tracking</span>
                </div>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#A8D5B5', background: 'rgba(168,213,181,0.15)', padding: '3px 8px', borderRadius: '9999px' }}>In Transit</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(168,213,181,0.15)', border: '1px solid rgba(168,213,181,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Package size={18} color="#A8D5B5" />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>ID #MARJ-749</span>
                  </div>
                  <p style={{ fontSize: '0.62rem', color: 'rgba(244,239,230,0.6)', margin: '3px 0 0', lineHeight: 1.4 }}>Mumbai Hub → Bangalore Hub</p>
                </div>
              </div>
              <div style={{ marginTop: '14px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #4A7C59, #A8D5B5)', borderRadius: '9999px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                <span style={{ fontSize: '0.58rem', color: 'rgba(244,239,230,0.5)' }}>Mumbai</span>
                <span style={{ fontSize: '0.58rem', color: '#A8D5B5', fontWeight: 600 }}>65%</span>
                <span style={{ fontSize: '0.58rem', color: 'rgba(244,239,230,0.5)' }}>Bangalore</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
