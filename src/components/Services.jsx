import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Briefcase,
  ArrowUpRight,
  X,
} from "lucide-react";

const services = [
  {
    title: "Courier Services",
    description:
      "Ultra-fast parcel shipping and document delivery with reliable pickup, secure handling, and delivery support across India.",

    details:
      "Our courier service provides secure door-to-door parcel and document delivery, pickup assistance, express delivery options, bulk shipments, fragile item handling, and dedicated customer support for every shipment.",

    icon: Truck,

    accent: "rgba(27, 58, 45, 0.9)",

    bg: "rgba(45, 90, 61, 0.06)",
  },

  {
    title: "Business Logistics",
    description:
      "Reliable logistics solutions for businesses including bulk shipments, cargo movement, transportation, and delivery coordination.",

    details:
      "MARJ Business Logistics provides customized logistics support for companies, including bulk transportation, cargo movement, shipment coordination, supply chain support, warehouse assistance, and efficient delivery management.",

    icon: Briefcase,

    accent: "rgba(27, 58, 45, 0.9)",

    bg: "rgba(122, 110, 98, 0.06)",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      style={{
        padding: "96px 0",
        backgroundColor: "#EDE7D9",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27,58,45,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: 0,
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(181,107,63,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1050px",
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
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#4A7C59",
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

            Core Logistics Services

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
            Reliable Logistics,
            <br />

            <em
              style={{
                fontWeight: 400,
                color: "#B56B3F",
              }}
            >
              Built Around You
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
            From secure parcel delivery to customized business logistics,
            MARJ provides dependable solutions designed around speed,
            reliability, and customer service.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="services-grid"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onClick={() => setSelectedService(service)}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                style={{
                  background: "white",
                  border:
                    "1px solid rgba(208, 198, 179, 0.6)",
                  borderRadius: "24px",
                  padding: "38px 34px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition:
                    "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow:
                    "0 2px 16px rgba(27,58,45,0.04)",
                  gap: "28px",
                  minHeight: "300px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 24px 50px rgba(27,58,45,0.12), 0 0 0 1.5px rgba(74,124,89,0.3)";

                  e.currentTarget.style.borderColor =
                    "rgba(74,124,89,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 16px rgba(27,58,45,0.04)";

                  e.currentTarget.style.borderColor =
                    "rgba(208,198,179,0.6)";
                }}
              >
                {/* Card content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: service.bg,
                      border:
                        "1px solid rgba(27,58,45,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      size={25}
                      color={service.accent}
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Text */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontSize: "1.55rem",
                        fontWeight: 600,
                        color: "#1B3A2D",
                        margin: 0,
                      }}
                    >
                      {service.title}
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
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    paddingTop: "16px",
                    borderTop:
                      "1px solid rgba(208,198,179,0.5)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: service.accent,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Explore Service

                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => setSelectedService(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "40px",
              maxWidth: "500px",
              width: "100%",
              boxShadow:
                "0 25px 70px rgba(0,0,0,0.25)",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border:
                  "1px solid rgba(27,58,45,0.12)",
                background: "#F4EFE6",
                color: "#1B3A2D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                background: selectedService.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "22px",
              }}
            >
              <selectedService.icon
                size={26}
                color="#2D5A3D"
              />
            </div>

            <h2
              style={{
                color: "#1B3A2D",
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 600,
                margin: "0 0 14px",
              }}
            >
              {selectedService.title}
            </h2>

            <p
              style={{
                color: "#7A6E62",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {selectedService.details}
            </p>

            <button
              onClick={() => setSelectedService(null)}
              style={{
                marginTop: "28px",
                padding: "12px 30px",
                borderRadius: "30px",
                border: "none",
                background: "#2D5A3D",
                color: "white",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}