import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Tour Packages", path: "/packages" },
  { name: "Logistics", path: "/logistics" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQs", path: "/#faq" },
  { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* =========================================
     SCROLL
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     LOCK BODY SCROLL
  ========================================== */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================
     NAVIGATION
  ========================================== */

  const handleNavigation = (path) => {
    setIsOpen(false);

    const [pathname, hash] = path.split("#");

    if (hash) {
      const targetPath = pathname || "/";

      if (location.pathname !== targetPath) {
        navigate(targetPath);

        setTimeout(() => {
          const element = document.getElementById(hash);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 400);
      } else {
        const element = document.getElementById(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }

      return;
    }

    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================
     BOOK SERVICE
  ========================================== */

  const handleBooking = () => {
    setIsOpen(false);

    navigate("/?service=courier#booking");

    setTimeout(() => {
      const element = document.getElementById("booking");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  return (
    <>
      {/* =========================================
          MAIN NAVBAR
      ========================================== */}

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`premium-navbar ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">

          {/* =====================================
              LOGO
          ====================================== */}

          <Link
            to="/"
            className="logo-area"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img
              src="/logo.jpg"
              alt="MARJ Logistics Tour and Travel"
              className="navbar-logo"
            />

            <span className="navbar-title">
              MARJ LOGISTICS
            </span>
          </Link>

          {/* =====================================
              HAMBURGER
          ====================================== */}

          <button
            className={`hamburger-button ${
              isOpen ? "hamburger-open" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen ? "Close menu" : "Open menu"
            }
          >
            {isOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>

        </div>
      </motion.nav>

      {/* =========================================
          MENU
      ========================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}

            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            {/* =====================================
                MENU PANEL
            ====================================== */}

            <motion.div
              className="menu-panel"
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              {/* MENU TOP */}

              <div className="menu-panel-header">

                <div>
                  <div className="menu-label">
                    NAVIGATION
                  </div>

                  <div className="menu-title">
                    Explore
                  </div>
                </div>

                <button
                  className="menu-close"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={23} strokeWidth={1.5} />
                </button>

              </div>

              {/* MENU ITEMS */}

              <div className="menu-items">

                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    className="menu-item"
                    onClick={() =>
                      handleNavigation(item.path)
                    }
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.04 * index,
                      duration: 0.25,
                    }}
                  >
                    <span>
                      {item.name}
                    </span>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.5}
                    />
                  </motion.button>
                ))}

              </div>

              {/* BOOK BUTTON */}

              <div className="menu-bottom">

                <button
                  className="book-button"
                  onClick={handleBooking}
                >
                  <span>
                    Book a Service
                  </span>

                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </button>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =========================================
          CSS
      ========================================== */}

      <style>{`

        /* =========================================
           NAVBAR
        ========================================== */

        .premium-navbar {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;

          height: 98px;

          z-index: 9999;

          background:
            linear-gradient(
              180deg,
              #1B3A2D 0%,
              rgba(27, 58, 45, 0.72) 38%,
              rgba(244, 238, 222, 0.96) 100%
            );

          border-top:
            1px solid
            rgba(255,255,255,0.25);

          transition:
            height 0.3s ease,
            box-shadow 0.3s ease,
            backdrop-filter 0.3s ease;

          box-sizing:
            border-box;
        }

        .navbar-scrolled {
          height: 86px;

          backdrop-filter:
            blur(14px);

          -webkit-backdrop-filter:
            blur(14px);

          box-shadow:
            0 5px 25px
            rgba(27,58,45,0.12);
        }

        /* =========================================
           INNER
        ========================================== */

        .navbar-inner {
          width: 100%;

          height: 100%;

          padding:
            0 40px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          box-sizing:
            border-box;
        }

        /* =========================================
           LOGO AREA
        ========================================== */

        .logo-area {
          display: flex;

          align-items: center;

          gap: 27px;

          text-decoration: none;

          height: 100%;
        }

        .navbar-logo {
          width: 78px;

          height: 78px;

          object-fit: contain;

          display: block;

          background: #ffffff;

          flex-shrink: 0;
        }

        .navbar-title {
          font-family:
            "Times New Roman",
            Times,
            serif;

          font-size:
            clamp(2rem, 3vw, 3rem);

          font-weight:
            500;

          letter-spacing:
            0.035em;

          color:
            #1B3A2D;

          white-space:
            nowrap;

          line-height:
            1;
        }

        /* =========================================
           HAMBURGER
        ========================================== */

        .hamburger-button {
          width: 56px;

          height: 56px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
            rgba(27,58,45,0.18);

          border-radius:
            50%;

          background:
            rgba(247,244,236,0.70);

          color:
            #1B3A2D;

          cursor:
            pointer;

          backdrop-filter:
            blur(8px);

          -webkit-backdrop-filter:
            blur(8px);

          transition:
            all 0.25s ease;
        }

        .hamburger-button:hover {
          background:
            #D4AF37;

          border-color:
            #D4AF37;

          transform:
            scale(1.05);
        }

        .hamburger-open {
          background:
            #D4AF37;

          border-color:
            #D4AF37;
        }

        /* =========================================
           BACKDROP
        ========================================== */

        .menu-backdrop {
          position: fixed;

          inset: 0;

          z-index: 9990;

          background:
            rgba(20,35,28,0.28);

          backdrop-filter:
            blur(3px);

          -webkit-backdrop-filter:
            blur(3px);
        }

        /* =========================================
           MENU PANEL
        ========================================== */

        .menu-panel {
          position: fixed;

          top: 112px;

          right: 40px;

          width: 380px;

          max-height:
            calc(100vh - 140px);

          overflow-y:
            auto;

          z-index: 9995;

          padding: 27px;

          background:
            rgba(248,246,239,0.98);

          border:
            1px solid
            rgba(27,58,45,0.12);

          border-radius:
            18px;

          box-shadow:
            0 25px 70px
            rgba(27,58,45,0.20);

          backdrop-filter:
            blur(22px);

          -webkit-backdrop-filter:
            blur(22px);

          box-sizing:
            border-box;
        }

        /* =========================================
           MENU HEADER
        ========================================== */

        .menu-panel-header {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          padding-bottom:
            20px;

          border-bottom:
            1px solid
            rgba(27,58,45,0.10);
        }

        .menu-label {
          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size:
            0.58rem;

          font-weight:
            600;

          letter-spacing:
            0.25em;

          color:
            #A48645;

          text-transform:
            uppercase;

          margin-bottom:
            5px;
        }

        .menu-title {
          font-family:
            "Times New Roman",
            Times,
            serif;

          font-size:
            1.9rem;

          color:
            #1B3A2D;

          font-weight:
            500;
        }

        /* =========================================
           CLOSE
        ========================================== */

        .menu-close {
          width: 42px;

          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
            rgba(27,58,45,0.15);

          border-radius:
            50%;

          background:
            transparent;

          color:
            #1B3A2D;

          cursor:
            pointer;

          transition:
            all 0.25s ease;
        }

        .menu-close:hover {
          background:
            #1B3A2D;

          color:
            #F7F4EC;

          transform:
            rotate(90deg);
        }

        /* =========================================
           MENU ITEMS
        ========================================== */

        .menu-items {
          display:
            flex;

          flex-direction:
            column;
        }

        .menu-item {
          width: 100%;

          min-height: 55px;

          padding:
            10px 4px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          border:
            none;

          border-bottom:
            1px solid
            rgba(27,58,45,0.08);

          background:
            transparent;

          color:
            #1B3A2D;

          cursor:
            pointer;

          text-align:
            left;

          transition:
            color 0.25s ease,
            padding 0.25s ease;
        }

        .menu-item:hover {
          color:
            #A48645;

          padding-left:
            10px;
        }

        .menu-item span {
          font-family:
            "Times New Roman",
            Times,
            serif;

          font-size:
            1.15rem;

          font-weight:
            500;

          letter-spacing:
            0.02em;
        }

        .menu-item svg {
          opacity:
            0.35;

          transition:
            all 0.25s ease;
        }

        .menu-item:hover svg {
          opacity:
            1;

          transform:
            translateX(4px);
        }

        /* =========================================
           BOOK BUTTON
        ========================================== */

        .menu-bottom {
          padding-top:
            22px;
        }

        .book-button {
          width: 100%;

          height: 52px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            12px;

          border:
            none;

          border-radius:
            4px;

          background:
            #1B3A2D;

          color:
            #F7F4EC;

          cursor:
            pointer;

          font-family:
            "Inter",
            Arial,
            sans-serif;

          font-size:
            0.65rem;

          font-weight:
            600;

          letter-spacing:
            0.15em;

          text-transform:
            uppercase;

          transition:
            all 0.25s ease;
        }

        .book-button:hover {
          background:
            #D4AF37;

          color:
            #1B3A2D;

          transform:
            translateY(-2px);
        }

        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {

          .premium-navbar {
            height:
              88px;
          }

          .navbar-scrolled {
            height:
              78px;
          }

          .navbar-inner {
            padding:
              0 25px;
          }

          .navbar-logo {
            width:
              68px;

            height:
              68px;
          }

          .logo-area {
            gap:
              18px;
          }

          .navbar-title {
            font-size:
              2rem;
          }

          .hamburger-button {
            width:
              50px;

            height:
              50px;
          }

          .menu-panel {
            top:
              100px;

            right:
              25px;
          }
        }

        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {

          .premium-navbar {
            height:
              76px;
          }

          .navbar-scrolled {
            height:
              70px;
          }

          .navbar-inner {
            padding:
              0 16px;
          }

          .navbar-logo {
            width:
              55px;

            height:
              55px;
          }

          .logo-area {
            gap:
              12px;
          }

          .navbar-title {
            font-size:
              1.45rem;

            letter-spacing:
              0.025em;
          }

          .hamburger-button {
            width:
              45px;

            height:
              45px;
          }

          /* Fullscreen menu on mobile */

          .menu-panel {
            top:
              0;

            right:
              0;

            width:
              100%;

            height:
              100vh;

            max-height:
              none;

            padding:
              24px 20px;

            border:
              none;

            border-radius:
              0;

            background:
              #F7F4EC;

            box-shadow:
              none;
          }

          .menu-panel-header {
            padding-bottom:
              18px;
          }

          .menu-title {
            font-size:
              1.7rem;
          }

          .menu-item {
            min-height:
              58px;
          }

          .menu-item span {
            font-size:
              1.35rem;
          }

          .menu-bottom {
            padding-top:
              30px;
          }
        }

        /* =========================================
           SMALL PHONES
        ========================================== */

        @media (max-width: 400px) {

          .navbar-title {
            font-size:
              1.25rem;
          }

          .navbar-logo {
            width:
              50px;

            height:
              50px;
          }

          .hamburger-button {
            width:
              43px;

            height:
              43px;
          }

        }

      `}</style>
    </>
  );
}