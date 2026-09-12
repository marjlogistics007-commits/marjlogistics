import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  DollarSign,
  Lock,
  Users,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description:
      "Efficient pickup and delivery coordination designed to move your shipments quickly and reliably.",
    icon: Zap,
    iconColor: "#2D5A3D",
    iconBg: "rgba(45,90,61,0.1)",
  },
  {
    title: "Affordable Pricing",
    description:
      "Clear and competitive courier pricing with no unnecessary hidden charges.",
    icon: DollarSign,
    iconColor: "rgba(27,58,45,0.9)",
    iconBg: "rgba(181,107,63,0.1)",
  },
  {
    title: "Secure Shipping",
    description:
      "Careful shipment handling and reliable delivery coordination help keep your packages protected throughout transit.",
    icon: Lock,
    iconColor: "rgba(27,58,45,0.9)",
    iconBg: "rgba(74,124,89,0.1)",
  },
  {
    title: "Business Support",
    description:
      "Reliable logistics support for businesses managing regular documents, parcels, and important shipments.",
    icon: Users,
    iconColor: "rgba(27,58,45,0.9)",
    iconBg: "rgba(122,68,40,0.1)",
  },
  {
    title: "Responsive Support",
    description:
      "Our team stays available to answer delivery questions and help resolve shipment requirements quickly.",
    icon: PhoneCall,
    iconColor: "rgba(27,58,45,0.9)",
    iconBg: "rgba(59,94,46,0.1)",
  },
  {
    title: "Trusted Service",
    description:
      "Professional service, dependable coordination, and a customer-first approach on every delivery.",
    icon: CheckCircle,
    iconColor: "rgba(27,58,45,0.9)",
    iconBg: "rgba(90,122,64,0.1)",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      style={{
        padding: "96px 0",
        backgroundColor: "#F4EFE6",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(208, 198, 179, 0.5)",
      }}
    >
      {/* Top Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,90,61,0.06) 0%, transparent 70%)",
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
            maxWidth: "640px",
            margin: "0 auto 72px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <span
            className="section-badge"
            style={{
              justifyContent: "center",
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

            Our Edge

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
              color: "#1B3A2D",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Built For Speed.
            <br />
            <em
              style={{
                fontWeight: 400,
                color: "#B56B3F",
              }}
            >
              Designed For Reliability.
            </em>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "#7A6E62",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            From everyday parcels to high-priority business shipments,
            MARJ delivers dependable logistics backed by responsive service
            and careful handling.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
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
                  delay: idx * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                style={{
                  padding: "32px 28px",
                  background: "rgba(244, 239, 230, 0.75)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(208, 198, 179, 0.7)",
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  cursor: "default",
                  transition: "all 0.4s ease",
                  boxShadow: "0 2px 12px rgba(27,58,45,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(27,58,45,0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(74,124,89,0.35)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.85)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(27,58,45,0.04)";
                  e.currentTarget.style.borderColor =
                    "rgba(208, 198, 179, 0.7)";
                  e.currentTarget.style.background =
                    "rgba(244, 239, 230, 0.75)";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: feature.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    size={22}
                    color={feature.iconColor}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#1B3A2D",
                      margin: 0,
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "#7A6E62",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}