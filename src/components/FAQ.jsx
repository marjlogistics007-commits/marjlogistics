import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Leaf } from "lucide-react";

const faqs = [
  {
    question:
      "What is the estimated delivery time for express courier shipping?",
    answer:
      "For major metropolitan locations, express shipments are generally delivered within 24 to 48 hours. Regional and remote locations may require additional time depending on the destination, route, and service availability.",
  },
  {
    question:
      "Can I schedule a courier pickup from my location?",
    answer:
      "Yes. MARJ can arrange courier pickup based on your service requirements. Provide your pickup details, delivery location, preferred date, and package information when submitting your courier request.",
  },
  {
    question:
      "Can I track my shipment after it has been dispatched?",
    answer:
      "Yes. You can use the shipment tracking service to check the current status of your courier. Your tracking number should be kept available for shipment status updates.",
  },
  {
    question:
      "How is the courier shipping charge calculated?",
    answer:
      "Courier charges depend on factors such as package weight, dimensions, delivery location, and selected delivery speed. Volumetric weight may also be considered when it is higher than the actual package weight.",
  },
  {
    question:
      "Do you provide additional protection for valuable shipments?",
    answer:
      "Yes. Standard shipment protection may be available depending on the service selected. Additional protection options can be discussed for high-value documents, electronics, commercial goods, and other important shipments.",
  },
  {
    question:
      "Do you offer logistics support for businesses?",
    answer:
      "Yes. MARJ provides courier and logistics support for businesses requiring regular deliveries, shipment coordination, dependable service, and responsive customer assistance.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="faq"
      style={{
        padding: "96px 0",
        backgroundColor: "#F4EFE6",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(208,198,179,0.5)",
      }}
    >
      {/* Background Glow */}
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
            "radial-gradient(circle, rgba(45,90,61,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "840px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "580px",
            margin: "0 auto 64px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
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

            FAQ

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
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "#1B3A2D",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Frequently Asked{" "}
            <em
              style={{
                fontWeight: 400,
                color: "#B56B3F",
              }}
            >
              Questions
            </em>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "#7A6E62",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Quick answers about courier services, shipment tracking,
            delivery times, pricing, and business logistics support.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: `1.5px solid ${
                    isOpen
                      ? "rgba(74,124,89,0.35)"
                      : "rgba(208,198,179,0.5)"
                  }`,
                  boxShadow: isOpen
                    ? "0 8px 30px rgba(27,58,45,0.08)"
                    : "0 2px 8px rgba(27,58,45,0.03)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  style={{
                    width: "100%",
                    padding: "22px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <Leaf
                      size={15}
                      color={
                        isOpen ? "#2D5A3D" : "#B5ADA0"
                      }
                      style={{
                        flexShrink: 0,
                        transition: "color 0.25s",
                      }}
                    />

                    <span
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: isOpen
                          ? "#1B3A2D"
                          : "#3D2314",
                        lineHeight: 1.3,
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Open / Close Icon */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: isOpen
                        ? "rgba(45,90,61,0.1)"
                        : "#F4EFE6",
                      border: `1px solid ${
                        isOpen
                          ? "rgba(45,90,61,0.25)"
                          : "rgba(208,198,179,0.6)"
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s",
                    }}
                  >
                    {isOpen ? (
                      <Minus
                        size={13}
                        color="#2D5A3D"
                      />
                    ) : (
                      <Plus
                        size={13}
                        color="#7A6E62"
                      />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding:
                            "0 24px 22px 53px",
                          fontFamily:
                            "'Inter', sans-serif",
                          fontSize: "0.88rem",
                          color: "#7A6E62",
                          lineHeight: 1.75,
                          borderTop:
                            "1px solid rgba(208,198,179,0.4)",
                          paddingTop: "16px",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          section#faq {
            padding: 70px 0 !important;
          }

          section#faq > div {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          section#faq button {
            padding: 18px !important;
          }

          section#faq button span {
            font-size: 0.98rem !important;
          }
        }
      `}</style>
    </section>
  );
}