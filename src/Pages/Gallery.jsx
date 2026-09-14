import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  X,
  ArrowUpRight,
  Truck,
  Package,
  ShieldCheck,
  Building2,
  Globe2,
  Clock3,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const galleryItems = [
  {
    id: "01",
    category: "COURIER",
    title: "DTDC Courier",
    description:
      "Reliable courier solutions for documents, parcels, and business shipments with professional handling from pickup to delivery.",
    icon: Truck,
    type: "featured",
    accent: "gold",
    image:
      "https://dtdc-images.dtdc.com/dtdc-web2.0/uploads/2025/08/B2C-Banner-copy-1.png",
  },
  {
    id: "02",
    category: "DELIVERY",
    title: "Fast & Reliable",
    description:
      "Efficient delivery support built around speed, communication, and dependable service.",
    icon: Clock3,
    type: "wide",
    accent: "cream",
    image:
      "https://www.veriform.in/images/services/logistics-distribution.png",
  },
  {
    id: "03",
    category: "SECURITY",
    title: "Secure Handling",
    description:
      "Careful processing and organized handling for important documents and valuable parcels.",
    icon: ShieldCheck,
    type: "small",
    accent: "gold",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201501/e-commerce-logistics-delhivery_660_011215051453.jpg?size=1280%3A720",
  },
  {
    id: "04",
    category: "BUSINESS",
    title: "Business Courier",
    description:
      "Professional courier support for offices, retailers, companies, and growing businesses.",
    icon: Building2,
    type: "small",
    accent: "cream",
    image:
      "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/05/DTDC-133ITG-1747806322769.jpg?size=%2A%3A900",
  },
  {
    id: "05",
    category: "NATIONAL",
    title: "Across India",
    description:
      "Courier and logistics support connecting customers and businesses across India.",
    icon: MapPin,
    type: "medium",
    accent: "gold",
    image:
      "https://www.veriform.in/images/services/logistics-distribution.png",
  },
  {
    id: "06",
    category: "LOGISTICS",
    title: "Complete Support",
    description:
      "From shipment preparation to delivery coordination, MARJ keeps the process clear and simple.",
    icon: Package,
    type: "medium",
    accent: "cream",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201501/e-commerce-logistics-delhivery_660_011215051453.jpg?size=1280%3A720",
  },
  {
    id: "07",
    category: "NETWORK",
    title: "Connected Service",
    description:
      "A professional logistics approach supported by dependable courier networks and customer communication.",
    icon: Globe2,
    type: "wide",
    accent: "gold",
    image:
      "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/05/DTDC-133ITG-1747806322769.jpg?size=%2A%3A900",
  },

  /* =========================================================
     ADDITIONAL GALLERY IMAGES
  ========================================================= */

  {
    id: "08",
    category: "WAREHOUSING",
    title: "Organized Logistics",
    description:
      "Efficient logistics operations with organized shipment movement and professional parcel coordination.",
    icon: Package,
    type: "photo",
    accent: "cream",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQF2pO5XmLG-Dw/feedshare-shrink_800/B56ZuM7u8TIcAg-/0/1767596030531?e=2147483647&t=s7EPmDIqamci6dInKo_YZzT5Bfkmj3nzsUAZ_JQ9u14&v=beta",
  },
  {
    id: "09",
    category: "COURIER",
    title: "Delivery In Motion",
    description:
      "Courier operations designed to keep parcels moving through dependable delivery networks.",
    icon: Truck,
    type: "photo",
    accent: "gold",
    image:
      "https://files.yappe.in/place/full/dtdc-courier-hub-office-international-domestic-3827366.webp",
  },
  {
    id: "10",
    category: "FULFILLMENT",
    title: "Shipment Flow",
    description:
      "A connected logistics process supporting shipment preparation, movement, tracking, and delivery.",
    icon: Globe2,
    type: "photo",
    accent: "cream",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201501/e-commerce-logistics-delhivery_660_011215051453.jpg?size=1280%3A720",
  },
  {
    id: "11",
    category: "DTDC",
    title: "Courier Network",
    description:
      "Reliable courier infrastructure connecting customers and businesses through a nationwide network.",
    icon: MapPin,
    type: "photo",
    accent: "gold",
    image:
      "https://dtdc-images.dtdc.com/dtdc-web2.0/uploads/2025/08/B2C-Banner-copy-1.png",
  },
  {
    id: "12",
    category: "OPERATIONS",
    title: "Logistics Operations",
    description:
      "Professional logistics support focused on organized handling, dependable movement, and customer service.",
    icon: Building2,
    type: "photo",
    accent: "cream",
    image:
      "https://www.veriform.in/images/services/logistics-distribution.png",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Navbar />

      <main className="marj-bento-gallery">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="marj-bento-hero">
          <div className="marj-bento-hero-grid" />

          <div className="marj-bento-hero-orb marj-bento-orb-one" />
          <div className="marj-bento-hero-orb marj-bento-orb-two" />

          <div className="marj-bento-hero-inner">
            <div className="marj-bento-hero-top">
              <span className="marj-bento-label">
                MARJ LOGISTICS
              </span>

              <span className="marj-bento-hero-index">
                01 — 12
              </span>
            </div>

            <div className="marj-bento-hero-main">
              <div className="marj-bento-hero-copy">
                <span className="marj-bento-eyebrow">
                  DTDC COURIER · LOGISTICS
                </span>

                <h1>
                  Moving
                  <br />
                  <em>what matters.</em>
                </h1>

                <p>
                  Professional courier and logistics solutions
                  designed around reliable handling, clear
                  communication, and dependable delivery.
                </p>

                <a
                  href="/#booking"
                  className="marj-bento-hero-button"
                >
                  Book a Courier
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="marj-bento-hero-symbol">
                <Truck size={90} strokeWidth={1} />

                <div>
                  <span>MARJ</span>
                  <small>LOGISTICS</small>
                </div>
              </div>
            </div>

            <div className="marj-bento-hero-bottom">
              <span>
                COURIER · DELIVERY · BUSINESS LOGISTICS
              </span>

              <span>
                SCROLL TO EXPLORE ↓
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="marj-bento-intro">
          <div className="marj-bento-intro-number">
            01
          </div>

          <div className="marj-bento-intro-heading">
            <span>THE MARJ STANDARD</span>

            <h2>
              Service built
              <br />
              <em>around trust.</em>
            </h2>
          </div>

          <div className="marj-bento-intro-copy">
            <p>
              Every shipment represents something important.
              A document. A parcel. A business requirement.
              A promise to a customer.
            </p>

            <p>
              MARJ Logistics combines professional courier
              support with dependable service and careful
              shipment handling.
            </p>
          </div>
        </section>

        {/* =====================================================
            BENTO GALLERY
        ===================================================== */}
        <section className="marj-bento-gallery-section">

          <div className="marj-bento-section-heading">
            <div>
              <span>02 — OUR SERVICES</span>

              <h2>
                Logistics
                <br />
                <em>in motion.</em>
              </h2>
            </div>

            <p>
              Explore the services and standards behind
              MARJ Logistics and DTDC Courier.
            </p>
          </div>

          <div className="marj-bento-grid">

            {/* FEATURED */}
            <article
              className="marj-bento-card marj-bento-featured"
              onClick={() => setSelectedItem(galleryItems[0])}
            >
              <div className="marj-bento-card-photo">
                <img
                  src={galleryItems[0].image}
                  alt="DTDC courier delivery"
                />
              </div>

              <div className="marj-bento-card-background featured-bg">
                <div className="marj-bento-route-line" />
                <div className="marj-bento-route-dot dot-one" />
                <div className="marj-bento-route-dot dot-two" />
                <div className="marj-bento-route-dot dot-three" />
              </div>

              <div className="marj-bento-card-top">
                <span>01</span>

                <span className="marj-bento-card-category">
                  COURIER
                </span>
              </div>

              <div className="marj-bento-featured-icon">
                <Truck size={52} strokeWidth={1.4} />
              </div>

              <div className="marj-bento-card-content">
                <div>
                  <span>DTDC COURIER</span>

                  <h3>
                    Professional
                    <br />
                    <em>courier service.</em>
                  </h3>
                </div>

                <button type="button">
                  Explore service
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </article>

            {/* WIDE DELIVERY */}
            <article
              className="marj-bento-card marj-bento-wide marj-bento-light"
              onClick={() => setSelectedItem(galleryItems[1])}
            >
              <div className="marj-bento-card-photo marj-bento-light-photo">
                <img
                  src={galleryItems[1].image}
                  alt="Logistics warehouse and delivery"
                />
              </div>

              <div className="marj-bento-number">
                02
              </div>

              <div className="marj-bento-light-icon">
                <Clock3 size={34} />
              </div>

              <div className="marj-bento-light-content">
                <span>DELIVERY</span>

                <h3>
                  Fast.
                  <br />
                  <em>Reliable.</em>
                </h3>

                <p>
                  Efficient courier support designed around
                  dependable delivery and clear communication.
                </p>
              </div>

              <div className="marj-bento-arrow">
                <ArrowUpRight size={20} />
              </div>
            </article>

            {/* SECURITY */}
            <article
              className="marj-bento-card marj-bento-small marj-bento-dark"
              onClick={() => setSelectedItem(galleryItems[2])}
            >
              <div className="marj-bento-card-photo">
                <img
                  src={galleryItems[2].image}
                  alt="Secure parcel handling"
                />
              </div>

              <div className="marj-bento-number">
                03
              </div>

              <div className="marj-bento-dark-icon">
                <ShieldCheck size={34} />
              </div>

              <div className="marj-bento-dark-content">
                <span>SECURITY</span>

                <h3>
                  Secure
                  <br />
                  handling.
                </h3>

                <p>
                  Careful processing for important shipments.
                </p>
              </div>

              <ArrowUpRight
                className="marj-bento-floating-arrow"
                size={20}
              />
            </article>

            {/* BUSINESS */}
            <article
              className="marj-bento-card marj-bento-small marj-bento-gold"
              onClick={() => setSelectedItem(galleryItems[3])}
            >
              <div className="marj-bento-card-photo marj-bento-business-photo">
                <img
                  src={galleryItems[3].image}
                  alt="DTDC courier business delivery"
                />
              </div>

              <div className="marj-bento-number">
                04
              </div>

              <div className="marj-bento-gold-icon">
                <Building2 size={34} />
              </div>

              <div className="marj-bento-gold-content">
                <span>BUSINESS</span>

                <h3>
                  Courier
                  <br />
                  for business.
                </h3>

                <p>
                  Professional support for companies and offices.
                </p>
              </div>

              <ArrowUpRight
                className="marj-bento-floating-arrow"
                size={20}
              />
            </article>

            {/* NATIONAL */}
            <article
              className="marj-bento-card marj-bento-medium marj-bento-map"
              onClick={() => setSelectedItem(galleryItems[4])}
            >
              <div className="marj-bento-card-photo marj-bento-map-photo">
                <img
                  src={galleryItems[4].image}
                  alt="National logistics distribution"
                />
              </div>

              <div className="marj-bento-map-pattern" />

              <div className="marj-bento-number">
                05
              </div>

              <div className="marj-bento-map-icon">
                <MapPin size={35} />
              </div>

              <div className="marj-bento-map-content">
                <span>NATIONAL SERVICE</span>

                <h3>
                  Across
                  <br />
                  <em>India.</em>
                </h3>

                <p>
                  Connecting customers and businesses
                  through dependable courier services.
                </p>
              </div>

              <div className="marj-bento-map-route">
                <span>INDIA</span>
                <div />
                <span>DELIVERY</span>
              </div>
            </article>

            {/* COMPLETE SUPPORT */}
            <article
              className="marj-bento-card marj-bento-medium marj-bento-support"
              onClick={() => setSelectedItem(galleryItems[5])}
            >
              <div className="marj-bento-support-image">
                <img
                  src={galleryItems[5].image}
                  alt="Logistics package handling"
                />

                <div className="marj-bento-package-shape">
                  <Package size={72} strokeWidth={1} />
                </div>
              </div>

              <div className="marj-bento-support-content">
                <div className="marj-bento-number">
                  06
                </div>

                <span>LOGISTICS</span>

                <h3>
                  Complete
                  <br />
                  <em>support.</em>
                </h3>

                <p>
                  From preparation to delivery coordination,
                  we keep the process simple.
                </p>
              </div>

              <ArrowUpRight
                className="marj-bento-support-arrow"
                size={20}
              />
            </article>

            {/* NETWORK */}
            <article
              className="marj-bento-card marj-bento-wide marj-bento-network"
              onClick={() => setSelectedItem(galleryItems[6])}
            >
              <div className="marj-bento-card-photo marj-bento-network-photo">
                <img
                  src={galleryItems[6].image}
                  alt="DTDC logistics network"
                />
              </div>

              <div className="marj-bento-network-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="marj-bento-number">
                07
              </div>

              <div className="marj-bento-network-icon">
                <Globe2 size={38} />
              </div>

              <div className="marj-bento-network-content">
                <span>NETWORK</span>

                <h3>
                  Connected
                  <br />
                  <em>service.</em>
                </h3>

                <p>
                  Professional logistics supported by
                  dependable courier networks and customer
                  communication.
                </p>
              </div>

              <div className="marj-bento-network-status">
                <CheckCircle2 size={15} />
                <span>MARJ SERVICE STANDARD</span>
              </div>
            </article>
          </div>
        </section>

        {/* =====================================================
            EXTENDED IMAGE GALLERY
        ===================================================== */}
        <section className="marj-photo-gallery-section">

          <div className="marj-photo-gallery-heading">
            <div>
              <span>03 — LOGISTICS IN FOCUS</span>

              <h2>
                Behind the
                <br />
                <em>movement.</em>
              </h2>
            </div>

            <p>
              A closer look at courier movement, logistics
              operations, shipment handling, and the network
              that keeps deliveries moving.
            </p>
          </div>

          <div className="marj-photo-gallery-grid">

            {/* IMAGE 08 */}
            <article
              className="marj-photo-card marj-photo-large"
              onClick={() => setSelectedItem(galleryItems[7])}
            >
              <img
                src={galleryItems[7].image}
                alt={galleryItems[7].title}
              />

              <div className="marj-photo-overlay" />

              <div className="marj-photo-top">
                <span>08</span>
                <span>{galleryItems[7].category}</span>
              </div>

              <div className="marj-photo-content">
                <span>MARJ LOGISTICS</span>

                <h3>
                  Organized
                  <br />
                  <em>logistics.</em>
                </h3>

                <p>
                  Professional shipment movement and
                  organized logistics support.
                </p>
              </div>

              <ArrowUpRight className="marj-photo-arrow" size={23} />
            </article>

            {/* IMAGE 09 */}
            <article
              className="marj-photo-card"
              onClick={() => setSelectedItem(galleryItems[8])}
            >
              <img
                src={galleryItems[8].image}
                alt={galleryItems[8].title}
              />

              <div className="marj-photo-overlay" />

              <div className="marj-photo-top">
                <span>09</span>
                <span>{galleryItems[8].category}</span>
              </div>

              <div className="marj-photo-content">
                <span>DTDC COURIER</span>

                <h3>
                  Delivery
                  <br />
                  <em>in motion.</em>
                </h3>
              </div>

              <ArrowUpRight className="marj-photo-arrow" size={23} />
            </article>

            {/* IMAGE 10 */}
            <article
              className="marj-photo-card"
              onClick={() => setSelectedItem(galleryItems[9])}
            >
              <img
                src={galleryItems[9].image}
                alt={galleryItems[9].title}
              />

              <div className="marj-photo-overlay" />

              <div className="marj-photo-top">
                <span>10</span>
                <span>{galleryItems[9].category}</span>
              </div>

              <div className="marj-photo-content">
                <span>SHIPMENT FLOW</span>

                <h3>
                  Moving
                  <br />
                  <em>together.</em>
                </h3>
              </div>

              <ArrowUpRight className="marj-photo-arrow" size={23} />
            </article>

            {/* IMAGE 11 */}
            <article
              className="marj-photo-card marj-photo-wide"
              onClick={() => setSelectedItem(galleryItems[10])}
            >
              <img
                src={galleryItems[10].image}
                alt={galleryItems[10].title}
              />

              <div className="marj-photo-overlay" />

              <div className="marj-photo-top">
                <span>11</span>
                <span>{galleryItems[10].category}</span>
              </div>

              <div className="marj-photo-content">
                <span>DTDC NETWORK</span>

                <h3>
                  Connected
                  <br />
                  <em>across India.</em>
                </h3>

                <p>
                  Dependable courier connections supporting
                  customers and businesses.
                </p>
              </div>

              <ArrowUpRight className="marj-photo-arrow" size={23} />
            </article>

            {/* IMAGE 12 */}
            <article
              className="marj-photo-card marj-photo-wide"
              onClick={() => setSelectedItem(galleryItems[11])}
            >
              <img
                src={galleryItems[11].image}
                alt={galleryItems[11].title}
              />

              <div className="marj-photo-overlay" />

              <div className="marj-photo-top">
                <span>12</span>
                <span>{galleryItems[11].category}</span>
              </div>

              <div className="marj-photo-content">
                <span>MARJ OPERATIONS</span>

                <h3>
                  Logistics
                  <br />
                  <em>at work.</em>
                </h3>

                <p>
                  Organized handling and dependable shipment
                  coordination from beginning to end.
                </p>
              </div>

              <ArrowUpRight className="marj-photo-arrow" size={23} />
            </article>
          </div>
        </section>

        {/* =====================================================
            DTDC FEATURE
        ===================================================== */}
        <section className="marj-dtdc-section">
          <div className="marj-dtdc-label">
            04 — COURIER PARTNER
          </div>

          <div className="marj-dtdc-layout">

            <div className="marj-dtdc-brand">
              <span>MARJ ×</span>

              <h2>
                DTDC
              </h2>

              <div className="marj-dtdc-line" />

              <p>
                Courier service for documents, parcels,
                business shipments and everyday delivery
                requirements.
              </p>
            </div>

            <div className="marj-dtdc-points">

              <div>
                <span>01</span>

                <div>
                  <h3>Professional Handling</h3>

                  <p>
                    Organized processing and careful handling
                    from pickup through delivery.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <h3>Business Support</h3>

                  <p>
                    Courier solutions designed for offices,
                    companies and regular business shipments.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <h3>Customer Focus</h3>

                  <p>
                    Clear communication and practical support
                    throughout the shipment process.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="marj-bento-final">

          <div className="marj-bento-final-grid" />

          <div className="marj-bento-final-content">
            <span>05 — MARJ LOGISTICS</span>

            <h2>
              Ready to move
              <br />
              <em>what matters?</em>
            </h2>

            <p>
              Let MARJ Logistics handle your courier and
              shipment requirements with professional service.
            </p>

            <a href="/#booking">
              Book a Courier
              <ArrowUpRight size={19} />
            </a>
          </div>
        </section>

        {/* =====================================================
            MODAL
        ===================================================== */}
        {selectedItem && (
          <div
            className="marj-bento-modal-backdrop"
            onClick={closeModal}
          >
            <div
              className="marj-bento-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="marj-bento-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <X size={21} />
              </button>

              <div className="marj-bento-modal-top">
                <span>
                  {selectedItem.id}
                </span>

                <span>
                  {selectedItem.category}
                </span>
              </div>

              <div className="marj-bento-modal-image">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                />
              </div>

              <div className="marj-bento-modal-icon">
                {React.createElement(selectedItem.icon, {
                  size: 38,
                  strokeWidth: 1.4,
                })}
              </div>

              <h2>
                {selectedItem.title}
              </h2>

              <p>
                {selectedItem.description}
              </p>

              <a
                href="/#booking"
                onClick={closeModal}
              >
                Book This Service
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        )}
      </main>

      {/* =====================================================
          COPYRIGHT BOTTOM LINE
      ===================================================== */}
      <div
        style={{
          background: "#173126",
          color: "rgba(255,255,255,.7)",
          textAlign: "center",
          padding: "18px 20px",
          fontSize: "13px",
          borderTop: "1px solid rgba(255,255,255,.08)",
          fontFamily: "inherit",
        }}
      >
        © {new Date().getFullYear()} MARJ Logistics. All Rights Reserved.
      </div>

      {/* =====================================================
          ALL STYLING
      ===================================================== */}
      <style>{`

        /* ===================================================
           BASE
        =================================================== */

        .marj-bento-gallery {
          min-height: 100vh;
          background: #f4efe6;
          color: #1b3a2d;
          overflow: hidden;
        }

        .marj-bento-gallery *,
        .marj-bento-gallery *::before,
        .marj-bento-gallery *::after {
          box-sizing: border-box;
        }

        /* ===================================================
           HERO
        =================================================== */

        .marj-bento-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 78% 30%,
              rgba(72,112,91,.42),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #07150f 0%,
              #10291e 48%,
              #1b3a2d 100%
            );
          color: #fff;
        }

        .marj-bento-hero-grid {
          position: absolute;
          inset: 0;
          opacity: .16;
          background-image:
            linear-gradient(
              rgba(255,255,255,.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.06) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 95%
            );
        }

        .marj-bento-hero-orb {
          position: absolute;
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 50%;
          pointer-events: none;
        }

        .marj-bento-orb-one {
          width: 700px;
          height: 700px;
          right: -250px;
          top: -210px;
          box-shadow:
            0 0 0 70px rgba(255,255,255,.018),
            0 0 0 140px rgba(255,255,255,.012);
        }

        .marj-bento-orb-two {
          width: 360px;
          height: 360px;
          left: -210px;
          bottom: -210px;
          border-color: rgba(212,175,55,.1);
        }

        .marj-bento-hero-inner {
          position: relative;
          z-index: 2;
          width: min(1280px, calc(100% - 70px));
          min-height: 88vh;
          margin: 0 auto;
          padding: 34px 0 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .marj-bento-hero-top,
        .marj-bento-hero-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .marj-bento-label,
        .marj-bento-eyebrow {
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .marj-bento-label::before {
          content: "";
          display: inline-block;
          width: 34px;
          height: 1px;
          margin-right: 12px;
          vertical-align: middle;
          background: #d4af37;
        }

        .marj-bento-hero-index {
          color: rgba(255,255,255,.45);
          font-size: 11px;
          letter-spacing: .15em;
        }

        .marj-bento-hero-main {
          display: grid;
          grid-template-columns: 1fr .65fr;
          align-items: center;
          gap: 60px;
          padding: 80px 0 60px;
        }

        .marj-bento-hero-copy {
          max-width: 760px;
        }

        .marj-bento-eyebrow {
          display: block;
          margin-bottom: 25px;
        }

        .marj-bento-hero h1 {
          margin: 0;
          font-size: clamp(4.8rem, 10vw, 9.5rem);
          line-height: .82;
          letter-spacing: -.075em;
          font-weight: 700;
        }

        .marj-bento-hero h1 em {
          color: #d4af37;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-bento-hero-copy p {
          max-width: 590px;
          margin: 38px 0 30px;
          color: rgba(255,255,255,.67);
          font-size: 17px;
          line-height: 1.8;
        }

        .marj-bento-hero-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 22px;
          border: 1px solid rgba(212,175,55,.55);
          border-radius: 999px;
          background: rgba(212,175,55,.09);
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition:
            background .3s ease,
            transform .3s ease;
        }

        .marj-bento-hero-button:hover {
          background: #d4af37;
          color: #10251b;
          transform: translateY(-3px);
        }

        .marj-bento-hero-symbol {
          min-height: 380px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 25px;
          color: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 50%;
          aspect-ratio: 1;
          max-width: 390px;
          justify-self: end;
        }

        .marj-bento-hero-symbol div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marj-bento-hero-symbol span {
          color: rgba(255,255,255,.75);
          font-size: 26px;
          font-weight: 800;
          letter-spacing: .18em;
        }

        .marj-bento-hero-symbol small {
          margin-top: 5px;
          color: #d4af37;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .3em;
        }

        .marj-bento-hero-bottom {
          color: rgba(255,255,255,.4);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .16em;
        }

        /* ===================================================
           INTRO
        =================================================== */

        .marj-bento-intro {
          width: min(1280px, calc(100% - 70px));
          margin: 0 auto;
          padding: 125px 0 110px;
          display: grid;
          grid-template-columns: 80px 1fr .75fr;
          gap: 55px;
          align-items: end;
        }

        .marj-bento-intro-number {
          color: #a27b26;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .15em;
          align-self: start;
        }

        .marj-bento-intro-heading span,
        .marj-bento-section-heading span,
        .marj-dtdc-label,
        .marj-photo-gallery-heading span {
          color: #a27b26;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .19em;
        }

        .marj-bento-intro-heading h2 {
          margin: 18px 0 0;
          font-size: clamp(3.3rem, 6vw, 6.5rem);
          line-height: .88;
          letter-spacing: -.065em;
        }

        .marj-bento-intro-heading h2 em,
        .marj-bento-section-heading h2 em,
        .marj-dtdc-brand h2,
        .marj-bento-light-content h3 em,
        .marj-bento-map-content h3 em,
        .marj-bento-support-content h3 em,
        .marj-bento-network-content h3 em,
        .marj-bento-final h2 em,
        .marj-photo-gallery-heading h2 em,
        .marj-photo-content h3 em {
          color: #a27b26;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-bento-intro-copy {
          padding-bottom: 5px;
        }

        .marj-bento-intro-copy p {
          margin: 0 0 17px;
          color: #676b65;
          font-size: 16px;
          line-height: 1.85;
        }

        .marj-bento-intro-copy p:last-child {
          margin-bottom: 0;
        }

        /* ===================================================
           GALLERY SECTION
        =================================================== */

        .marj-bento-gallery-section {
          width: min(1280px, calc(100% - 70px));
          margin: 0 auto;
          padding-bottom: 130px;
        }

        .marj-bento-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 60px;
          margin-bottom: 55px;
        }

        .marj-bento-section-heading h2 {
          margin: 16px 0 0;
          font-size: clamp(3rem, 5.5vw, 5.7rem);
          line-height: .88;
          letter-spacing: -.06em;
        }

        .marj-bento-section-heading > p {
          max-width: 390px;
          margin: 0;
          color: #6e716b;
          font-size: 15px;
          line-height: 1.8;
        }

        /* ===================================================
           BENTO GRID
        =================================================== */

        .marj-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 245px;
          gap: 18px;
        }

        .marj-bento-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          cursor: pointer;
          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s ease;
        }

        .marj-bento-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 65px rgba(27,58,45,.16);
        }

        .marj-bento-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: inherit;
          z-index: 8;
        }

        /* ===================================================
           REAL PHOTO LAYER
        =================================================== */

        .marj-bento-card-photo {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background: #173126;
        }

        .marj-bento-card-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          opacity: .48;
          filter: saturate(.82) contrast(1.04);
          transition:
            transform .7s cubic-bezier(.2,.8,.2,1),
            opacity .5s ease,
            filter .5s ease;
        }

        .marj-bento-card:hover .marj-bento-card-photo img {
          transform: scale(1.07);
          opacity: .62;
          filter: saturate(1) contrast(1.05);
        }

        .marj-bento-card-photo::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(7,21,15,.18) 0%,
              rgba(7,21,15,.25) 38%,
              rgba(7,21,15,.88) 100%
            );
        }

        .marj-bento-light-photo img {
          opacity: .3;
          filter: saturate(.75);
        }

        .marj-bento-light-photo::after {
          background:
            linear-gradient(
              180deg,
              rgba(231,223,208,.2),
              rgba(231,223,208,.78)
            );
        }

        .marj-bento-business-photo img {
          opacity: .32;
        }

        .marj-bento-business-photo::after {
          background:
            linear-gradient(
              180deg,
              rgba(212,175,55,.18),
              rgba(182,141,41,.9)
            );
        }

        .marj-bento-map-photo img {
          opacity: .32;
        }

        .marj-bento-map-photo::after {
          background:
            linear-gradient(
              135deg,
              rgba(220,227,220,.38),
              rgba(220,227,220,.9)
            );
        }

        .marj-bento-network-photo img {
          opacity: .38;
        }

        .marj-bento-network-photo::after {
          background:
            linear-gradient(
              115deg,
              rgba(16,41,30,.88),
              rgba(27,58,45,.58),
              rgba(41,76,60,.82)
            );
        }

        /* ===================================================
           FEATURED
        =================================================== */

        .marj-bento-featured {
          grid-column: span 2;
          grid-row: span 2;
          min-height: 508px;
          padding: 34px;
          background:
            radial-gradient(
              circle at 78% 28%,
              rgba(212,175,55,.25),
              transparent 24%
            ),
            linear-gradient(
              135deg,
              #0a1b13,
              #1b3a2d 70%,
              #294d3d
            );
          color: #fff;
        }

        .marj-bento-card-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 1;
        }

        .featured-bg::before {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          right: -100px;
          top: -100px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 60px rgba(255,255,255,.025),
            0 0 0 120px rgba(255,255,255,.018);
        }

        .marj-bento-route-line {
          position: absolute;
          width: 70%;
          height: 1px;
          right: -7%;
          bottom: 28%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212,175,55,.55),
            transparent
          );
          transform: rotate(-22deg);
        }

        .marj-bento-route-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d4af37;
          box-shadow: 0 0 0 6px rgba(212,175,55,.08);
        }

        .dot-one {
          right: 21%;
          bottom: 42%;
        }

        .dot-two {
          right: 37%;
          bottom: 35%;
        }

        .dot-three {
          right: 52%;
          bottom: 28%;
        }

        .marj-bento-card-top {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: space-between;
          color: rgba(255,255,255,.42);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .15em;
        }

        .marj-bento-card-category {
          color: #d4af37;
        }

        .marj-bento-featured-icon {
          position: absolute;
          z-index: 5;
          top: 34%;
          right: 16%;
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(212,175,55,.22);
          border-radius: 50%;
          background: rgba(255,255,255,.035);
          color: #d4af37;
          transition: transform .4s ease;
        }

        .marj-bento-featured:hover .marj-bento-featured-icon {
          transform: scale(1.08) rotate(-5deg);
        }

        .marj-bento-card-content {
          position: absolute;
          z-index: 5;
          right: 34px;
          bottom: 32px;
          left: 34px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 25px;
        }

        .marj-bento-card-content > div > span,
        .marj-bento-light-content > span,
        .marj-bento-dark-content > span,
        .marj-bento-gold-content > span,
        .marj-bento-map-content > span,
        .marj-bento-support-content > span,
        .marj-bento-network-content > span {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .18em;
        }

        .marj-bento-featured .marj-bento-card-content > div > span {
          color: #d4af37;
        }

        .marj-bento-card-content h3 {
          margin: 10px 0 0;
          font-size: clamp(2rem, 4vw, 3.8rem);
          line-height: .9;
          letter-spacing: -.05em;
        }

        .marj-bento-card-content h3 em {
          color: #d4af37;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-bento-card-content button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 999px;
          background: rgba(255,255,255,.06);
          color: #fff;
          white-space: nowrap;
          font: inherit;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        /* ===================================================
           WIDE LIGHT CARD
        =================================================== */

        .marj-bento-wide {
          grid-column: span 2;
        }

        .marj-bento-light {
          padding: 30px;
          background: #e7dfd0;
          color: #1b3a2d;
        }

        .marj-bento-number {
          position: absolute;
          z-index: 5;
          top: 24px;
          right: 27px;
          color: rgba(27,58,45,.35);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .15em;
        }

        .marj-bento-light-icon {
          position: relative;
          z-index: 5;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(27,58,45,.13);
          border-radius: 17px;
          color: #a27b26;
        }

        .marj-bento-light-content {
          position: absolute;
          z-index: 5;
          left: 30px;
          bottom: 27px;
          max-width: 420px;
        }

        .marj-bento-light-content > span {
          color: #a27b26;
        }

        .marj-bento-light-content h3 {
          margin: 8px 0 8px;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: .9;
          letter-spacing: -.05em;
        }

        .marj-bento-light-content p {
          max-width: 380px;
          margin: 0;
          color: #656a63;
          font-size: 13px;
          line-height: 1.6;
        }

        .marj-bento-arrow {
          position: absolute;
          z-index: 6;
          right: 25px;
          bottom: 25px;
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #1b3a2d;
          color: #fff;
          transition: transform .3s ease;
        }

        .marj-bento-light:hover .marj-bento-arrow {
          transform: rotate(45deg);
        }

        /* ===================================================
           DARK CARD
        =================================================== */

        .marj-bento-small {
          grid-column: span 1;
        }

        .marj-bento-dark {
          padding: 28px;
          background:
            linear-gradient(
              145deg,
              #1b3a2d,
              #0d2118
            );
          color: #fff;
        }

        .marj-bento-dark-icon {
          position: relative;
          z-index: 5;
          width: 57px;
          height: 57px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(212,175,55,.22);
          border-radius: 17px;
          color: #d4af37;
        }

        .marj-bento-dark-content {
          position: absolute;
          z-index: 5;
          left: 28px;
          right: 28px;
          bottom: 28px;
        }

        .marj-bento-dark-content > span {
          color: #d4af37;
        }

        .marj-bento-dark-content h3 {
          margin: 9px 0 8px;
          font-size: 28px;
          line-height: .95;
          letter-spacing: -.045em;
        }

        .marj-bento-dark-content p {
          margin: 0;
          color: rgba(255,255,255,.57);
          font-size: 12px;
          line-height: 1.55;
        }

        .marj-bento-floating-arrow {
          position: absolute;
          z-index: 6;
          right: 26px;
          top: 26px;
          color: rgba(255,255,255,.4);
          transition:
            color .3s ease,
            transform .3s ease;
        }

        .marj-bento-card:hover .marj-bento-floating-arrow {
          color: #d4af37;
          transform: rotate(45deg);
        }

        /* ===================================================
           GOLD CARD
        =================================================== */

        .marj-bento-gold {
          padding: 28px;
          background:
            linear-gradient(
              145deg,
              #d4af37,
              #b68d29
            );
          color: #15271e;
        }

        .marj-bento-gold-icon {
          position: relative;
          z-index: 5;
          width: 57px;
          height: 57px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(21,39,30,.18);
          border-radius: 17px;
        }

        .marj-bento-gold-content {
          position: absolute;
          z-index: 5;
          left: 28px;
          right: 28px;
          bottom: 28px;
        }

        .marj-bento-gold-content > span {
          color: rgba(21,39,30,.65);
        }

        .marj-bento-gold-content h3 {
          margin: 9px 0 8px;
          font-size: 28px;
          line-height: .95;
          letter-spacing: -.045em;
        }

        .marj-bento-gold-content p {
          margin: 0;
          color: rgba(21,39,30,.68);
          font-size: 12px;
          line-height: 1.55;
        }

        /* ===================================================
           MAP CARD
        =================================================== */

        .marj-bento-medium {
          grid-column: span 2;
        }

        .marj-bento-map {
          padding: 30px;
          background: #dce3dc;
          color: #1b3a2d;
        }

        .marj-bento-map-pattern {
          position: absolute;
          z-index: 2;
          inset: 0;
          opacity: .35;
          background-image:
            radial-gradient(
              circle,
              rgba(27,58,45,.13) 1px,
              transparent 1px
            );
          background-size: 19px 19px;
          mask-image:
            linear-gradient(
              90deg,
              transparent,
              black 45%,
              transparent
            );
        }

        .marj-bento-map-icon {
          position: relative;
          z-index: 5;
          width: 59px;
          height: 59px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: #1b3a2d;
          color: #d4af37;
        }

        .marj-bento-map-content {
          position: absolute;
          left: 30px;
          bottom: 28px;
          z-index: 5;
        }

        .marj-bento-map-content > span {
          color: #a27b26;
        }

        .marj-bento-map-content h3 {
          margin: 8px 0 8px;
          font-size: 34px;
          line-height: .9;
          letter-spacing: -.05em;
        }

        .marj-bento-map-content p {
          max-width: 350px;
          margin: 0;
          color: #626b64;
          font-size: 12px;
          line-height: 1.55;
        }

        .marj-bento-map-route {
          position: absolute;
          z-index: 5;
          right: 30px;
          bottom: 32px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #718078;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .15em;
        }

        .marj-bento-map-route div {
          width: 45px;
          height: 1px;
          background: #a27b26;
        }

        /* ===================================================
           SUPPORT CARD
        =================================================== */

        .marj-bento-support {
          padding: 0;
          background: #243e32;
          color: #fff;
        }

        .marj-bento-support-image {
          position: absolute;
          inset: 0 0 0 45%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(
              circle at center,
              rgba(212,175,55,.17),
              transparent 50%
            );
        }

        .marj-bento-support-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .42;
          filter: saturate(.72);
        }

        .marj-bento-support-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(36,62,50,.95),
              rgba(36,62,50,.32),
              rgba(36,62,50,.5)
            );
        }

        .marj-bento-package-shape {
          position: relative;
          z-index: 2;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(212,175,55,.2);
          border-radius: 28px;
          color: rgba(212,175,55,.75);
          background: rgba(0,0,0,.08);
          transform: rotate(8deg);
        }

        .marj-bento-support-content {
          position: absolute;
          z-index: 5;
          left: 28px;
          bottom: 28px;
          width: 52%;
        }

        .marj-bento-support-content .marj-bento-number {
          top: -175px;
          right: auto;
          left: 0;
          color: rgba(255,255,255,.3);
        }

        .marj-bento-support-content > span {
          color: #d4af37;
        }

        .marj-bento-support-content h3 {
          margin: 8px 0 8px;
          font-size: 31px;
          line-height: .9;
          letter-spacing: -.05em;
        }

        .marj-bento-support-content p {
          margin: 0;
          color: rgba(255,255,255,.55);
          font-size: 12px;
          line-height: 1.55;
        }

        .marj-bento-support-arrow {
          position: absolute;
          z-index: 6;
          right: 25px;
          top: 25px;
          color: #d4af37;
          transition: transform .3s ease;
        }

        .marj-bento-support:hover .marj-bento-support-arrow {
          transform: rotate(45deg);
        }

        /* ===================================================
           NETWORK
        =================================================== */

        .marj-bento-network {
          grid-column: span 4;
          min-height: 245px;
          padding: 30px;
          background:
            linear-gradient(
              115deg,
              #10291e,
              #1b3a2d 55%,
              #294c3c
            );
          color: #fff;
        }

        .marj-bento-network-lines {
          position: absolute;
          z-index: 2;
          inset: 0;
          opacity: .25;
          overflow: hidden;
        }

        .marj-bento-network-lines span {
          position: absolute;
          width: 70%;
          height: 1px;
          right: -8%;
          background: linear-gradient(
            90deg,
            transparent,
            #d4af37,
            transparent
          );
          transform: rotate(-10deg);
        }

        .marj-bento-network-lines span:nth-child(1) {
          top: 25%;
        }

        .marj-bento-network-lines span:nth-child(2) {
          top: 39%;
          transform: rotate(13deg);
        }

        .marj-bento-network-lines span:nth-child(3) {
          top: 52%;
        }

        .marj-bento-network-lines span:nth-child(4) {
          top: 66%;
          transform: rotate(-18deg);
        }

        .marj-bento-network-lines span:nth-child(5) {
          top: 78%;
          transform: rotate(8deg);
        }

        .marj-bento-network .marj-bento-number {
          color: rgba(255,255,255,.3);
        }

        .marj-bento-network-icon {
          position: absolute;
          z-index: 5;
          top: 30px;
          left: 30px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(212,175,55,.25);
          border-radius: 18px;
          color: #d4af37;
        }

        .marj-bento-network-content {
          position: absolute;
          z-index: 5;
          left: 125px;
          bottom: 30px;
        }

        .marj-bento-network-content > span {
          color: #d4af37;
        }

        .marj-bento-network-content h3 {
          margin: 8px 0 8px;
          font-size: 38px;
          line-height: .9;
          letter-spacing: -.055em;
        }

        .marj-bento-network-content p {
          max-width: 500px;
          margin: 0;
          color: rgba(255,255,255,.56);
          font-size: 12px;
          line-height: 1.55;
        }

        .marj-bento-network-status {
          position: absolute;
          z-index: 5;
          right: 30px;
          bottom: 30px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.48);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .15em;
        }

        .marj-bento-network-status svg {
          color: #d4af37;
        }

        /* ===================================================
           EXTENDED PHOTO GALLERY
        =================================================== */

        .marj-photo-gallery-section {
          width: min(1280px, calc(100% - 70px));
          margin: 0 auto;
          padding: 20px 0 145px;
        }

        .marj-photo-gallery-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 60px;
          margin-bottom: 55px;
        }

        .marj-photo-gallery-heading h2 {
          margin: 17px 0 0;
          font-size: clamp(3.4rem, 6vw, 6.2rem);
          line-height: .86;
          letter-spacing: -.065em;
        }

        .marj-photo-gallery-heading > p {
          max-width: 420px;
          margin: 0;
          color: #6e716b;
          font-size: 15px;
          line-height: 1.8;
        }

        .marj-photo-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 290px;
          gap: 18px;
        }

        .marj-photo-card {
          position: relative;
          min-height: 290px;
          overflow: hidden;
          border-radius: 24px;
          background: #173126;
          cursor: pointer;
          color: #fff;
          transition:
            transform .45s cubic-bezier(.2,.8,.2,1),
            box-shadow .45s ease;
        }

        .marj-photo-card:hover {
          transform: translateY(-7px);
          box-shadow:
            0 30px 70px rgba(27,58,45,.2);
        }

        .marj-photo-large {
          grid-column: span 2;
          grid-row: span 2;
          min-height: 598px;
        }

        .marj-photo-wide {
          grid-column: span 2;
        }

        .marj-photo-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          filter: saturate(.82) contrast(1.05);
          transition:
            transform .8s cubic-bezier(.2,.8,.2,1),
            filter .6s ease;
        }

        .marj-photo-card:hover img {
          transform: scale(1.08);
          filter: saturate(1.05) contrast(1.06);
        }

        .marj-photo-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(7,21,15,.08) 0%,
              rgba(7,21,15,.12) 30%,
              rgba(7,21,15,.88) 100%
            );
          z-index: 1;
        }

        .marj-photo-card:nth-child(2) .marj-photo-overlay,
        .marj-photo-card:nth-child(5) .marj-photo-overlay {
          background:
            linear-gradient(
              180deg,
              rgba(10,26,18,.08),
              rgba(10,26,18,.9)
            );
        }

        .marj-photo-top {
          position: absolute;
          z-index: 3;
          top: 25px;
          left: 25px;
          right: 25px;
          display: flex;
          justify-content: space-between;
          color: rgba(255,255,255,.62);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .17em;
        }

        .marj-photo-top span:last-child {
          color: #d4af37;
        }

        .marj-photo-content {
          position: absolute;
          z-index: 3;
          left: 28px;
          right: 28px;
          bottom: 27px;
        }

        .marj-photo-content > span {
          color: #d4af37;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .19em;
        }

        .marj-photo-content h3 {
          margin: 9px 0 0;
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          line-height: .88;
          letter-spacing: -.055em;
        }

        .marj-photo-content h3 em {
          color: #d4af37;
        }

        .marj-photo-content p {
          max-width: 430px;
          margin: 12px 0 0;
          color: rgba(255,255,255,.64);
          font-size: 12px;
          line-height: 1.6;
        }

        .marj-photo-arrow {
          position: absolute;
          z-index: 4;
          top: 24px;
          right: 24px;
          color: rgba(255,255,255,.55);
          transition:
            transform .35s ease,
            color .35s ease;
        }

        .marj-photo-card:hover .marj-photo-arrow {
          color: #d4af37;
          transform: rotate(45deg);
        }

        /* ===================================================
           DTDC SECTION
        =================================================== */

        .marj-dtdc-section {
          padding: 130px max(35px, calc((100vw - 1280px) / 2)) 140px;
          background: #1b3a2d;
          color: #fff;
        }

        .marj-dtdc-label {
          margin-bottom: 60px;
          color: #d4af37;
        }

        .marj-dtdc-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }

        .marj-dtdc-brand span {
          color: rgba(255,255,255,.45);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .marj-dtdc-brand h2 {
          margin: 5px 0 18px;
          color: #fff;
          font-size: clamp(5rem, 11vw, 10rem);
          line-height: .8;
          letter-spacing: -.08em;
        }

        .marj-dtdc-line {
          width: 90px;
          height: 2px;
          margin-bottom: 28px;
          background: #d4af37;
        }

        .marj-dtdc-brand p {
          max-width: 450px;
          margin: 0;
          color: rgba(255,255,255,.6);
          font-size: 16px;
          line-height: 1.8;
        }

        .marj-dtdc-points {
          border-top: 1px solid rgba(255,255,255,.13);
        }

        .marj-dtdc-points > div {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 25px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,.13);
        }

        .marj-dtdc-points > div > span {
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .1em;
        }

        .marj-dtdc-points h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .marj-dtdc-points p {
          max-width: 430px;
          margin: 0;
          color: rgba(255,255,255,.53);
          font-size: 13px;
          line-height: 1.7;
        }

        /* ===================================================
           FINAL CTA
        =================================================== */

        .marj-bento-final {
          position: relative;
          min-height: 590px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background:
            linear-gradient(
              135deg,
              #0a1a12,
              #173126
            );
          color: #fff;
        }

        .marj-bento-final-grid {
          position: absolute;
          inset: 0;
          opacity: .12;
          background-image:
            linear-gradient(
              rgba(255,255,255,.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.08) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
        }

        .marj-bento-final::after {
          content: "";
          position: absolute;
          width: 700px;
          height: 700px;
          right: -260px;
          top: -200px;
          border: 1px solid rgba(212,175,55,.13);
          border-radius: 50%;
          box-shadow:
            0 0 0 100px rgba(212,175,55,.025),
            0 0 0 200px rgba(212,175,55,.018);
        }

        .marj-bento-final-content {
          position: relative;
          z-index: 2;
          width: min(1280px, calc(100% - 70px));
          margin: 0 auto;
        }

        .marj-bento-final-content > span {
          color: #d4af37;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .19em;
        }

        .marj-bento-final h2 {
          margin: 25px 0;
          font-size: clamp(4rem, 8vw, 8rem);
          line-height: .82;
          letter-spacing: -.07em;
        }

        .marj-bento-final h2 em {
          color: #d4af37;
        }

        .marj-bento-final p {
          max-width: 500px;
          margin: 0 0 30px;
          color: rgba(255,255,255,.58);
          font-size: 16px;
          line-height: 1.8;
        }

        .marj-bento-final a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 999px;
          background: #d4af37;
          color: #14251c;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition:
            transform .3s ease,
            background .3s ease;
        }

        .marj-bento-final a:hover {
          transform: translateY(-4px);
          background: #e1c36a;
        }

        /* ===================================================
           MODAL
        =================================================== */

        .marj-bento-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          background: rgba(3,10,7,.78);
          backdrop-filter: blur(14px);
        }

        .marj-bento-modal {
          position: relative;
          width: min(570px, 100%);
          padding: 42px;
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              #1b3a2d,
              #10271d
            );
          color: #fff;
          box-shadow:
            0 35px 100px rgba(0,0,0,.45);
          animation: marjModalIn .35s ease;
        }

        @keyframes marjModalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .marj-bento-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 50%;
          background: rgba(255,255,255,.06);
          color: #fff;
          cursor: pointer;
        }

        .marj-bento-modal-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
          color: rgba(255,255,255,.4);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .16em;
        }

        .marj-bento-modal-top span:last-child {
          color: #d4af37;
        }

        .marj-bento-modal-image {
          width: 100%;
          height: 190px;
          margin-bottom: 28px;
          overflow: hidden;
          border-radius: 20px;
          background: #10271d;
        }

        .marj-bento-modal-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .marj-bento-modal-icon {
          width: 76px;
          height: 76px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(212,175,55,.2);
          border-radius: 22px;
          background: rgba(212,175,55,.06);
          color: #d4af37;
        }

        .marj-bento-modal h2 {
          margin: 0 0 17px;
          font-size: 38px;
          line-height: .95;
          letter-spacing: -.04em;
        }

        .marj-bento-modal p {
          margin: 0;
          color: rgba(255,255,255,.63);
          font-size: 15px;
          line-height: 1.8;
        }

        .marj-bento-modal a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          padding: 13px 21px;
          border-radius: 999px;
          background: #d4af37;
          color: #173126;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
        }

        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 950px) {

          .marj-bento-hero-inner,
          .marj-bento-intro,
          .marj-bento-gallery-section,
          .marj-photo-gallery-section,
          .marj-bento-final-content {
            width: min(100% - 45px, 760px);
          }

          .marj-bento-hero-main {
            grid-template-columns: 1fr;
          }

          .marj-bento-hero-symbol {
            display: none;
          }

          .marj-bento-intro {
            grid-template-columns: 60px 1fr;
          }

          .marj-bento-intro-copy {
            grid-column: 2;
          }

          .marj-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 250px;
          }

          .marj-bento-featured {
            grid-column: span 2;
          }

          .marj-bento-wide {
            grid-column: span 2;
          }

          .marj-bento-medium {
            grid-column: span 2;
          }

          .marj-bento-network {
            grid-column: span 2;
          }

          .marj-photo-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .marj-photo-large,
          .marj-photo-wide {
            grid-column: span 2;
          }

          .marj-dtdc-layout {
            grid-template-columns: 1fr;
            gap: 70px;
          }
        }

        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 620px) {

          .marj-bento-hero {
            min-height: 760px;
          }

          .marj-bento-hero-inner {
            width: calc(100% - 34px);
            min-height: 760px;
            padding-top: 25px;
            padding-bottom: 22px;
          }

          .marj-bento-hero-main {
            padding: 60px 0;
          }

          .marj-bento-hero h1 {
            font-size: clamp(4rem, 19vw, 6rem);
          }

          .marj-bento-hero-copy p {
            font-size: 14px;
            margin-top: 28px;
          }

          .marj-bento-hero-bottom {
            font-size: 7px;
          }

          .marj-bento-hero-bottom span:last-child {
            display: none;
          }

          .marj-bento-intro {
            width: calc(100% - 34px);
            display: block;
            padding: 80px 0;
          }

          .marj-bento-intro-number {
            margin-bottom: 25px;
          }

          .marj-bento-intro-heading h2 {
            font-size: 3.5rem;
          }

          .marj-bento-intro-copy {
            margin-top: 35px;
          }

          .marj-bento-gallery-section {
            width: calc(100% - 34px);
            padding-bottom: 90px;
          }

          .marj-bento-section-heading {
            display: block;
            margin-bottom: 38px;
          }

          .marj-bento-section-heading h2 {
            font-size: 3.5rem;
          }

          .marj-bento-section-heading > p {
            margin-top: 25px;
          }

          .marj-bento-grid {
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            gap: 14px;
          }

          .marj-bento-card,
          .marj-bento-featured,
          .marj-bento-wide,
          .marj-bento-small,
          .marj-bento-medium,
          .marj-bento-network {
            grid-column: span 1;
            min-height: 380px;
          }

          .marj-bento-featured {
            padding: 26px;
          }

          .marj-bento-featured-icon {
            width: 90px;
            height: 90px;
            top: 30%;
            right: 13%;
          }

          .marj-bento-card-content {
            right: 26px;
            bottom: 26px;
            left: 26px;
            display: block;
          }

          .marj-bento-card-content button {
            margin-top: 18px;
          }

          .marj-bento-light {
            padding: 26px;
          }

          .marj-bento-light-content {
            left: 26px;
            bottom: 26px;
            right: 26px;
          }

          .marj-bento-light-content h3 {
            font-size: 2.6rem;
          }

          .marj-bento-dark,
          .marj-bento-gold,
          .marj-bento-map {
            padding: 26px;
          }

          .marj-bento-dark-content,
          .marj-bento-gold-content,
          .marj-bento-map-content {
            left: 26px;
            right: 26px;
            bottom: 26px;
          }

          .marj-bento-map-route {
            display: none;
          }

          .marj-bento-support {
            min-height: 420px;
          }

          .marj-bento-support-image {
            inset: 0 0 40% 45%;
          }

          .marj-bento-support-content {
            left: 26px;
            bottom: 26px;
            width: 72%;
          }

          .marj-bento-network {
            min-height: 380px;
          }

          .marj-bento-network-icon {
            top: 26px;
            left: 26px;
          }

          .marj-bento-network-content {
            left: 26px;
            bottom: 26px;
            right: 26px;
          }

          .marj-bento-network-content h3 {
            font-size: 2.7rem;
          }

          .marj-bento-network-status {
            right: 26px;
            bottom: 26px;
            display: none;
          }

          /* EXTENDED PHOTO GALLERY MOBILE */

          .marj-photo-gallery-section {
            width: calc(100% - 34px);
            padding: 20px 0 90px;
          }

          .marj-photo-gallery-heading {
            display: block;
            margin-bottom: 38px;
          }

          .marj-photo-gallery-heading h2 {
            font-size: 3.5rem;
          }

          .marj-photo-gallery-heading > p {
            margin-top: 25px;
          }

          .marj-photo-gallery-grid {
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            gap: 14px;
          }

          .marj-photo-card,
          .marj-photo-large,
          .marj-photo-wide {
            grid-column: span 1;
            min-height: 390px;
          }

          .marj-photo-large {
            min-height: 470px;
          }

          .marj-photo-content {
            left: 24px;
            right: 24px;
            bottom: 24px;
          }

          .marj-photo-content h3 {
            font-size: 2.6rem;
          }

          .marj-photo-top {
            top: 22px;
            left: 22px;
            right: 22px;
          }

          .marj-photo-arrow {
            top: 21px;
            right: 21px;
          }

          .marj-dtdc-section {
            padding: 90px 17px;
          }

          .marj-dtdc-label {
            margin-bottom: 45px;
          }

          .marj-dtdc-layout {
            gap: 55px;
          }

          .marj-dtdc-brand h2 {
            font-size: 6rem;
          }

          .marj-dtdc-points > div {
            grid-template-columns: 40px 1fr;
            gap: 12px;
          }

          .marj-bento-final {
            min-height: 560px;
          }

          .marj-bento-final-content {
            width: calc(100% - 34px);
          }

          .marj-bento-final h2 {
            font-size: 4.2rem;
          }

          .marj-bento-final p {
            font-size: 14px;
          }

          .marj-bento-modal {
            padding: 32px 24px;
            border-radius: 23px;
          }

          .marj-bento-modal-image {
            height: 155px;
          }

          .marj-bento-modal h2 {
            font-size: 31px;
          }
        }

      `}</style>
    </>
  );
}