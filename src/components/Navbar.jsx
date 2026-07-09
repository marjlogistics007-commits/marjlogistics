import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Leaf, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';


const menuItems = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Tour Packages', href: '/packages' },
  { name: 'Logistics', href: '/#logistics' },
  { name: "Gallery", href: "/gallery",},
  { name: 'FAQs', href: '/#faq' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.35s ease',
        padding: isScrolled ? '8px 0' : '05px 0',
        background: 'linear-gradient(0deg, #f4eede , rgba(27, 58, 45, 0.9))',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(208, 198, 179, 0.5)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(27, 58, 45, 0.06)' : 'none',
      }}
    >
      
<div 
style={{
  width: '100%',
  padding: '0 30px',
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between'
}}
>

{/* Logo + Title */}
<div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>

  <a 
    href="#" 
    style={{ 
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none'
    }}
  >
    <img 
      src="/logo.jpg"
      alt="MARJ Logistics Tour and Travel Logo"
      style={{
        height: '52px',
        width: 'auto',
        objectFit: 'contain'
      }}
    />
  </a>


  <span
    style={{
      fontFamily: "'COPPERPLATE GOTHIC LIG'",
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1B3A2D',
      letterSpacing: '1px',
      className: "logo-text"
    }}
  >
    MARJ LOGISTICS
  </span>
  </div>

        {/* Desktop Nav */}
       <div 
style={{
 display:'flex',
 alignItems:'center',
 gap:'36px',
 marginLeft:'auto'
}}
className="hidden-mobile"
>
          {menuItems.map((item) => (
            item.href.startsWith('/') ? (
  <Link
    key={item.name}
    to={item.href}
    style={{
      fontFamily: "'Times New Roman'",
      fontSize: '0.6rem',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#d8f8e1',
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: '4px',
    }}
  >
    {item.name}
  </Link>
) : (
  <a
    key={item.name}
    href={item.href}
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.72rem',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#3D2314',
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: '4px',
    }}
  >
    {item.name}
  </a>
)
          ))}
        
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        style={{
  width: "46px",
  height: "46px",
  borderRadius: "14px",
  border: "1px solid rgba(27,58,45,.12)",
  background: "rgba(255,255,255,.65)",
  backdropFilter: "blur(12px)",
  color: "#1B3A2D",
  cursor: "pointer",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
}}
          className="show-mobile"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(255,255,255,.88)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,.35)',
              overflow: 'hidden',
borderRadius: '24px',
margin: '14px',
boxShadow:'0 20px 60px rgba(0,0,0,.15)',
            }}
          >
            <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
{menuItems.map((item) => (
  item.href.startsWith('/') ? (
    <Link
      key={item.name}
      to={item.href}
      onClick={() => setIsOpen(false)}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.5rem',
        fontWeight: 500,
        color: '#1B3A2D',
        textDecoration: 'none',
      }}
    >
      {item.name}
    </Link>
  ) : (
    <a
      key={item.name}
      href={item.href}
      onClick={() => setIsOpen(false)}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.5rem',
        fontWeight: 500,
        color: '#1B3A2D',
        textDecoration: 'none',
      }}
    >
      {item.name}
    </a>
  )
))}
              <a href="#booking" onClick={() => setIsOpen(false)} className="btn-earth" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Book a Service
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<style>{`
  .hidden-mobile{
    display:flex;
  }

  .show-mobile{
    display:none;
  }

  @media (max-width:1023px){

    .hidden-mobile{
      display:none !important;
    }

    .show-mobile{
      display:flex !important;
      align-items:center;
    }

    .logo-text{
      display:none;
    }
  }
`}</style>
    </motion.nav>
  );
}
