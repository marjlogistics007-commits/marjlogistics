import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { X, ArrowUpRight, Truck, Package, ShieldCheck, Building2 } from "lucide-react";

const galleryItems = [
  {
    title: "Courier Service",
    category: "COURIER",
    description:
      "Professional courier handling for documents, parcels, and business shipments.",
    icon: Truck,
  },
  {
    title: "Customer Service",
    category: "SUPPORT",
    description:
      "Responsive support designed to keep every shipment requirement simple and clear.",
    icon: Building2,
  },
  {
    title: "Secure Shipment Handling",
    category: "SECURITY",
    description:
      "Careful handling and organized processing for important documents and parcels.",
    icon: ShieldCheck,
  },
  {
    title: "Business Logistics",
    category: "BUSINESS",
    description:
      "Flexible logistics support for companies, offices, retailers, and growing businesses.",
    icon: Package,
  },
  {
    title: "Professional Delivery",
    category: "DELIVERY",
    description:
      "Reliable transportation and delivery solutions built around your shipment needs.",
    icon: Truck,
  },
  {
    title: "Trusted Logistics Partner",
    category: "MARJ LOGISTICS",
    description:
      "A dependable logistics partner focused on service, communication, and delivery.",
    icon: ShieldCheck,
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Navbar />

      <main className="marj-gallery-page">
        {/* HERO */}
        <section className="marj-gallery-hero">
          <div className="marj-gallery-hero-overlay" />

          <div className="marj-gallery-hero-content">
            <span className="marj-gallery-eyebrow">
              MARJ LOGISTICS
            </span>

            <h1>
              Logistics
              <br />
              <em>In Motion.</em>
            </h1>

            <p>
              A closer look at the people, processes, and services
              behind reliable courier and logistics solutions.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="marj-gallery-intro">
          <div>
            <span className="marj-section-number">01</span>

            <h2>
              Built around
              <br />
              <em>reliability.</em>
            </h2>
          </div>

          <p>
            Every shipment matters. From the first pickup to the final
            delivery, MARJ Logistics focuses on professional handling,
            dependable service, and clear communication.
          </p>
        </section>

        {/* GALLERY */}
        <section className="marj-gallery-grid-section">
          <div className="marj-gallery-grid">
            {galleryItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`marj-gallery-card ${
                    index === 0
                      ? "marj-gallery-card-large"
                      : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="marj-gallery-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="marj-gallery-card-icon">
                    <Icon size={30} />
                  </div>

                  <div className="marj-gallery-card-content">
                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                      }}
                    >
                      Explore
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="marj-gallery-cta">
          <div>
            <span>MARJ LOGISTICS</span>

            <h2>
              Ready to move
              <br />
              <em>what matters?</em>
            </h2>
          </div>

          <a href="/#booking">
            Book a Courier
            <ArrowUpRight size={19} />
          </a>
        </section>

        {/* MODAL */}
        {selectedItem && (
          <div
            className="marj-gallery-modal-backdrop"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="marj-gallery-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="marj-gallery-modal-close"
                onClick={() => setSelectedItem(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="marj-gallery-modal-icon">
                {React.createElement(selectedItem.icon, {
                  size: 32,
                })}
              </div>

              <span>{selectedItem.category}</span>

              <h2>{selectedItem.title}</h2>

              <p>{selectedItem.description}</p>

              <a
                href="/#booking"
                onClick={() => setSelectedItem(null)}
              >
                Book This Service
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        )}
      </main>

      <style>{`
        .marj-gallery-page {
          min-height: 100vh;
          background: #f4efe6;
          color: #1b3a2d;
        }

        .marj-gallery-hero {
          position: relative;
          min-height: 78vh;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background:
            linear-gradient(
              135deg,
              #10281e 0%,
              #1b3a2d 55%,
              #294d3d 100%
            );
        }

        .marj-gallery-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(7, 20, 14, 0.92),
              rgba(7, 20, 14, 0.55),
              rgba(7, 20, 14, 0.78)
            );
        }

        .marj-gallery-hero::after {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          right: -160px;
          top: -140px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 80px rgba(255,255,255,0.025),
            0 0 0 160px rgba(255,255,255,0.02);
        }

        .marj-gallery-hero-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
        }

        .marj-gallery-hero-content {
          position: relative;
          z-index: 2;
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding: 100px 0 90px;
        }

        .marj-gallery-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: #d4af37;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .marj-gallery-eyebrow::before {
          content: "";
          width: 35px;
          height: 1px;
          background: #d4af37;
        }

        .marj-gallery-hero h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(4rem, 10vw, 9rem);
          line-height: 0.85;
          letter-spacing: -0.065em;
          font-weight: 700;
        }

        .marj-gallery-hero h1 em {
          color: #d4af37;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-gallery-hero p {
          max-width: 600px;
          margin: 35px 0 0;
          color: rgba(255,255,255,0.72);
          font-size: 17px;
          line-height: 1.8;
        }

        .marj-gallery-intro {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding: 120px 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          align-items: end;
        }

        .marj-section-number {
          display: block;
          margin-bottom: 18px;
          color: #a27b26;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .marj-gallery-intro h2 {
          margin: 0;
          font-size: clamp(3rem, 6vw, 6rem);
          line-height: 0.9;
          letter-spacing: -0.055em;
        }

        .marj-gallery-intro h2 em {
          color: #a27b26;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-gallery-intro > p {
          max-width: 530px;
          margin: 0;
          color: #676b65;
          font-size: 18px;
          line-height: 1.9;
        }

        .marj-gallery-grid-section {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding-bottom: 120px;
        }

        .marj-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .marj-gallery-card {
          position: relative;
          min-height: 430px;
          overflow: hidden;
          padding: 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              #17372a,
              #234c3b
            );
          color: #fff;
          cursor: pointer;
          box-shadow: 0 20px 60px rgba(27,58,45,0.1);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .marj-gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 70px rgba(27,58,45,0.18);
        }

        .marj-gallery-card:nth-child(2) {
          background:
            linear-gradient(
              145deg,
              #324b42,
              #183329
            );
        }

        .marj-gallery-card:nth-child(3) {
          background:
            linear-gradient(
              145deg,
              #2b4439,
              #132a21
            );
        }

        .marj-gallery-card:nth-child(4) {
          background:
            linear-gradient(
              145deg,
              #405247,
              #1b352a
            );
        }

        .marj-gallery-card:nth-child(5) {
          background:
            linear-gradient(
              145deg,
              #244437,
              #10251c
            );
        }

        .marj-gallery-card:nth-child(6) {
          background:
            linear-gradient(
              145deg,
              #314b3e,
              #152d23
            );
        }

        .marj-gallery-card-large {
          min-height: 520px;
        }

        .marj-gallery-card-number {
          position: absolute;
          top: 25px;
          right: 30px;
          color: rgba(255,255,255,0.3);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .marj-gallery-card-icon {
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: rgba(255,255,255,0.09);
          color: #d4af37;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .marj-gallery-card-content span {
          color: #d4af37;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.17em;
        }

        .marj-gallery-card-content h3 {
          margin: 12px 0 12px;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .marj-gallery-card-content p {
          max-width: 500px;
          margin: 0 0 24px;
          color: rgba(255,255,255,0.68);
          line-height: 1.7;
        }

        .marj-gallery-card-content button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #fff;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .marj-gallery-cta {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding: 90px 0 130px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          border-top: 1px solid rgba(27,58,45,0.12);
        }

        .marj-gallery-cta span {
          color: #8b8c86;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.17em;
        }

        .marj-gallery-cta h2 {
          margin: 16px 0 0;
          font-size: clamp(2.7rem, 5vw, 5rem);
          line-height: 0.9;
          letter-spacing: -0.05em;
        }

        .marj-gallery-cta h2 em {
          color: #a27b26;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-gallery-cta a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 25px;
          border-radius: 999px;
          background: #1b3a2d;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .marj-gallery-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(10px);
        }

        .marj-gallery-modal {
          position: relative;
          width: min(560px, 100%);
          padding: 42px;
          border-radius: 28px;
          background: #1b3a2d;
          color: #fff;
          box-shadow: 0 30px 90px rgba(0,0,0,0.35);
        }

        .marj-gallery-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          color: #fff;
          cursor: pointer;
        }

        .marj-gallery-modal-icon {
          width: 70px;
          height: 70px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: rgba(255,255,255,0.08);
          color: #d4af37;
        }

        .marj-gallery-modal > span {
          color: #d4af37;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.17em;
        }

        .marj-gallery-modal h2 {
          margin: 12px 0 18px;
          font-size: 32px;
        }

        .marj-gallery-modal p {
          margin: 0;
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
        }

        .marj-gallery-modal a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          padding: 13px 21px;
          border-radius: 999px;
          background: #d4af37;
          color: #1b3a2d;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 800px) {
          .marj-gallery-intro {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .marj-gallery-grid {
            grid-template-columns: 1fr;
          }

          .marj-gallery-card,
          .marj-gallery-card-large {
            min-height: 420px;
          }

          .marj-gallery-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 550px) {
          .marj-gallery-hero-content,
          .marj-gallery-intro,
          .marj-gallery-grid-section,
          .marj-gallery-cta {
            width: calc(100% - 36px);
          }

          .marj-gallery-hero-content {
            padding: 80px 0 65px;
          }

          .marj-gallery-card {
            min-height: 390px;
            padding: 26px;
            border-radius: 22px;
          }

          .marj-gallery-intro {
            padding-top: 80px;
          }

          .marj-gallery-grid-section {
            padding-bottom: 80px;
          }

          .marj-gallery-cta {
            padding-bottom: 90px;
          }

          .marj-gallery-modal {
            padding: 32px 25px;
          }
        }
      `}</style>
    </>
  );
}