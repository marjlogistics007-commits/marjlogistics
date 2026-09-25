import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Logistics", path: "/logistics" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQs", path: "/#faq" },
  { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path) => {
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

  const handleBooking = () => {
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

  const isActive = (path) => {
    const [pathname, hash] = path.split("#");

    if (hash) {
      if (location.pathname !== (pathname || "/")) {
        return false;
      }

      return window.location.hash === `#${hash}`;
    }

    if (path === "/") {
      return location.pathname === "/" && !window.location.hash;
    }

    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`compact-navbar ${
          isScrolled ? "compact-navbar-scrolled" : ""
        }`}
      >
        <div className="compact-navbar-inner">

          {/* LOGO */}
      <Link
  to="/"
  className="compact-logo"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
  <img
    src="/logo.jpg"
    alt="MARJ Logistics"
  />

  <span className="logo-text">
    <span className="logo-marj">MARJ</span>
    <span className="logo-logistics">LOGISTICS</span>
  </span>
</Link>

          {/* MENU */}
          <div className="compact-menu">
            {menuItems.map((item) => (
              <button
                key={item.name}
                type="button"
                className={
                  isActive(item.path)
                    ? "compact-menu-link active"
                    : "compact-menu-link"
                }
                onClick={() =>
                  handleNavigation(item.path)
                }
              >
                {item.name}
              </button>
            ))}

            {/* BOOK BUTTON */}
            <button
              type="button"
              className="compact-book"
              onClick={handleBooking}
            >
              Book
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </nav>

      <div className="compact-navbar-space" />

      <style>{`

        /* =====================================================
           COMPACT PREMIUM NAVBAR
        ===================================================== */

        .compact-navbar {
          position: fixed;
          top: 0;
          left: 0;

          width: 100%;
          height: 68px;

          z-index: 9999;

          background: rgba(244, 239, 230, 0.94);

          border-bottom:
            1px solid
            rgba(27, 58, 45, 0.09);

          box-sizing: border-box;

          transition:
            height 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .compact-navbar-scrolled {
          height: 60px;

          background:
            rgba(244, 239, 230, 0.97);

          box-shadow:
            0 6px 24px
            rgba(27, 58, 45, 0.09);
        }

        /* =====================================================
           INNER
        ===================================================== */

        .compact-navbar-inner {
          width: 100%;
          height: 100%;

          padding:
            0 28px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 25px;

          box-sizing: border-box;
        }

        /* =====================================================
           LOGO
        ===================================================== */

        .compact-logo {
          display: flex;
          align-items: center;

          gap: 10px;

          flex-shrink: 0;

          height: 100%;

          text-decoration: none;
        }

        .compact-logo img {
          width: 44px;
          height: 44px;

          object-fit: contain;

          display: block;

          background: #fff;

          border-radius: 3px;

          transition:
            width 0.25s ease,
            height 0.25s ease;
        }

        .compact-navbar-scrolled
        .compact-logo img {
          width: 39px;
          height: 39px;
        }

   
        }

        .compact-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.compact-logo img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 0.9;
}

.logo-marj {
  font-size: 30px;
      font-family: High Tower Text,
            sans-serif;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.logo-logistics {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 4px;
  margin-left: 10px;
}

        /* =====================================================
           MENU
        ===================================================== */

        .compact-menu {
          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 1px;

          min-width: 0;
        }

        /* =====================================================
           MENU LINKS
        ===================================================== */

        .compact-menu-link {
          position: relative;

          padding:
            7px 9px;

          border: none;

          background: transparent;

          color: #4D5A53;

          font-family:
            Arial,
            sans-serif;

          font-size: 12px;

          font-weight: 600;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 0.2s ease;
        }

        .compact-menu-link::after {
          content: "";

          position: absolute;

          left: 9px;
          right: 9px;

          bottom: 1px;

          height: 1.5px;

          background: #D4AF37;

          transform:
            scaleX(0);

          transition:
            transform 0.2s ease;
        }

        .compact-menu-link:hover {
          color: #1B3A2D;
        }

        .compact-menu-link:hover::after,
        .compact-menu-link.active::after {
          transform:
            scaleX(1);
        }

        .compact-menu-link.active {
          color: #1B3A2D;
        }

        /* =====================================================
           BOOK BUTTON
        ===================================================== */

        .compact-book {
          height: 34px;

          margin-left: 8px;

          padding:
            0 13px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 5px;

          border:
            1px solid
            #1B3A2D;

          border-radius:
            999px;

          background:
            #1B3A2D;

          color:
            #F7F4EC;

          font-family:
            Arial,
            sans-serif;

          font-size:
            11px;

          font-weight:
            700;

          cursor:
            pointer;

          white-space:
            nowrap;

          transition:
            all 0.2s ease;
        }

        .compact-book:hover {
          background:
            #D4AF37;

          border-color:
            #D4AF37;

          color:
            #1B3A2D;
        }

        /* =====================================================
           SPACER
        ===================================================== */

        .compact-navbar-space {
          height: 68px;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .compact-navbar-inner {
            padding:
              0 20px;

            gap:
              15px;
          }

          .compact-logo span {
            font-size:
              1.05rem;
          }

          .compact-menu-link {
            padding:
              7px 6px;

            font-size:
              11px;
          }

          .compact-menu-link::after {
            left:
              6px;

            right:
              6px;
          }

          .compact-book {
            margin-left:
              5px;

            padding:
              0 11px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 760px) {

          .compact-navbar {
            height:
              62px;
          }

          .compact-navbar-scrolled {
            height:
              58px;
          }

          .compact-navbar-inner {
            padding:
              0 12px;

            gap:
              10px;
          }

          .compact-logo {
            gap:
              7px;
          }

          .compact-logo img {
            width:
              38px;

            height:
              38px;
          }

          .compact-navbar-scrolled
          .compact-logo img {
            width:
              35px;

            height:
              35px;
          }

          .compact-logo span {
            font-size:
              0.85rem;
          }

          .compact-menu {
            overflow-x:
              auto;

            justify-content:
              flex-start;

            scrollbar-width:
              none;

            -ms-overflow-style:
              none;
          }

          .compact-menu::-webkit-scrollbar {
            display:
              none;
          }

          .compact-menu-link {
            padding:
              6px 7px;

            font-size:
              10px;
          }

          .compact-menu-link::after {
            left:
              7px;

            right:
              7px;
          }

          .compact-book {
            height:
              30px;

            padding:
              0 10px;

            font-size:
              10px;

            flex-shrink:
              0;
          }

          .compact-navbar-space {
            height:
              62px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .compact-logo span {
            display:
              none;
          }

          .compact-logo img {
            width:
              37px;

            height:
              37px;
          }

          .compact-menu-link {
            padding:
              6px;

            font-size:
              9.5px;
          }

          .compact-book {
            padding:
              0 9px;
          }
        }

      `}</style>
    </>
  );
}