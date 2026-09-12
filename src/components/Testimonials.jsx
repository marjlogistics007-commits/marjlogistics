import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rohan Malhotra",
    role: "Operations Director, NexaTech",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    review:
      "MARJ's express courier service is outstanding. We had a high-priority contract package that needed to go from Delhi to Bangalore by noon. They executed it seamlessly with digital proof of delivery. A game changer for our business.",
  },
  {
    name: "Priya Sharma",
    role: "Business Operations Manager",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    review:
      "MARJ has made our regular business deliveries extremely reliable. Their team is responsive, professional, and keeps us updated throughout the shipment process. We can confidently depend on them for important deliveries.",
  },
  {
    name: "Aditya Sen",
    role: "Founder, Zyllo Goods",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    review:
      "What sets MARJ apart is their customer support. Whenever we have an urgent shipment requirement, their team responds quickly and coordinates the entire delivery process efficiently. Incredible commitment to service.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "96px 0",
        backgroundColor: "#1B3A2D",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background accents */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(181,107,63,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74,124,89,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "650px",
            margin: "0 auto 72px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#A8D5B5",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "1.5px",
                background: "#4A7C59",
              }}
            />

            Customer Stories

            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "1.5px",
                background: "#4A7C59",
              }}
            />
          </span>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#F4EFE6",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Trusted By{" "}
            <em
              style={{
                fontWeight: 400,
                color: "#D4865A",
              }}
            >
              Businesses
            </em>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.92rem",
              color: "rgba(244, 239, 230, 0.65)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Hear from businesses and customers who rely on MARJ for dependable
            courier and logistics services every day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
              }}
              style={{
                padding: "36px 32px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(168, 213, 181, 0.15)",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
                position: "relative",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255, 255, 255, 0.09)";
                e.currentTarget.style.borderColor =
                  "rgba(168, 213, 181, 0.3)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor =
                  "rgba(168, 213, 181, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Decorative Quote */}
              <Quote
                size={36}
                color="rgba(168,213,181,0.08)"
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Rating */}
                <div
                  style={{
                    display: "flex",
                    gap: "3px",
                  }}
                >
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#D4865A"
                      color="#D4865A"
                    />
                  ))}
                </div>

                {/* Review */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "rgba(244, 239, 230, 0.85)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  "{rev.review}"
                </p>
              </div>

              {/* Customer Profile */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(168, 213, 181, 0.12)",
                }}
              >
                <img
                  src={rev.image}
                  alt={rev.name}
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(168, 213, 181, 0.25)",
                  }}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      rev.name
                    )}&background=2D5A3D&color=A8D5B5&size=92`;
                  }}
                />

                <div>
                  <h4
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#F4EFE6",
                      margin: 0,
                    }}
                  >
                    {rev.name}
                  </h4>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(244, 239, 230, 0.5)",
                      fontWeight: 500,
                      margin: "3px 0 0",
                    }}
                  >
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}