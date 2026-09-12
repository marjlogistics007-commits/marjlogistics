import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  Phone,
  MapPin,
  Truck,
  CheckCircle,
} from "lucide-react";

const inputStyle = {
  width: "100%",
  padding: "13px 16px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  color: "#3D2314",
  backgroundColor: "#F4EFE6",
  border: "1.5px solid rgba(208, 198, 179, 0.7)",
  borderRadius: "14px",
  outline: "none",
  transition: "border-color 0.25s ease",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#7A6E62",
  marginBottom: "8px",
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    origin: "",
    destination: "",
    date: "",
    weight: "1",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.origin ||
      !formData.destination ||
      !formData.date
    ) {
      return;
    }

    const message =
      `*New Courier Booking Enquiry - Marj Logistics*\n\n` +
      `*Service:* Courier Service\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Pickup Pincode:* ${formData.origin}\n` +
      `*Delivery Pincode:* ${formData.destination}\n` +
      `*Pickup Date:* ${formData.date}\n` +
      `*Approx. Weight:* ${formData.weight} kg\n`;

    const whatsappUrl =
      `https://wa.me/917889306316?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setShowSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      origin: "",
      destination: "",
      date: "",
      weight: "1",
    });

    setShowSuccess(false);
  };

  return (
    <section
      id="booking"
      style={{
        padding: "96px 0",
        backgroundColor: "#EDE7D9",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(208, 198, 179, 0.5)",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: 0,
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(181,107,63,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto 56px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
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

            Courier Service

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
            Book Your{" "}
            <em
              style={{
                fontWeight: 400,
                color: "#B56B3F",
              }}
            >
              Courier
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
            Enter your pickup and delivery details and send your courier
            request directly to our team.
          </p>
        </div>

        {/* Form container */}
        <div
          style={{
            background: "white",
            borderRadius: "28px",
            overflow: "hidden",
            border: "1px solid rgba(208, 198, 179, 0.6)",
            boxShadow: "0 20px 60px rgba(27,58,45,0.08)",
          }}
        >
          {/* Service header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "20px",
              borderBottom:
                "1px solid rgba(208, 198, 179, 0.5)",
              backgroundColor: "#F4EFE6",
              color: "#1B3A2D",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <Truck size={18} color="#2D5A3D" />

            Courier Service

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: "40px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
              className="booking-form-grid"
            >
              {/* Full Name */}
              <div>
                <label style={labelStyle}>
                  <User size={12} color="#4A7C59" />

                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4A7C59";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor =
                      "rgba(208, 198, 179, 0.7)";
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>
                  <Phone size={12} color="#4A7C59" />

                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4A7C59";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor =
                      "rgba(208, 198, 179, 0.7)";
                  }}
                />
              </div>

              {/* Pickup Pincode */}
              <div>
                <label style={labelStyle}>
                  <MapPin size={12} color="#4A7C59" />

                  Pickup Pincode
                </label>

                <input
                  type="text"
                  name="origin"
                  required
                  value={formData.origin}
                  onChange={handleInputChange}
                  placeholder="e.g. 190017"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4A7C59";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor =
                      "rgba(208, 198, 179, 0.7)";
                  }}
                />
              </div>

              {/* Delivery Pincode */}
              <div>
                <label style={labelStyle}>
                  <MapPin size={12} color="#B56B3F" />

                  Delivery Pincode
                </label>

                <input
                  type="text"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="e.g. 110001"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4A7C59";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor =
                      "rgba(208, 198, 179, 0.7)";
                  }}
                />
              </div>

              {/* Pickup Date */}
              <div>
                <label style={labelStyle}>
                  <Calendar size={12} color="#4A7C59" />

                  Pickup Date
                </label>

                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
                    colorScheme: "light",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4A7C59";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor =
                      "rgba(208, 198, 179, 0.7)";
                  }}
                />
              </div>

              {/* Weight */}
              <div>
                <label style={labelStyle}>
                  Approx. Weight (kg)
                </label>

                <input
                  type="number"
                  name="weight"
                  min="1"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="e.g. 5"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#4A7C59";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor =
                      "rgba(208, 198, 179, 0.7)";
                  }}
                />
              </div>
            </div>

            {/* Submit area */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "28px",
                marginTop: "28px",
                borderTop:
                  "1px solid rgba(208, 198, 179, 0.5)",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div
                style={{
                  maxWidth: "420px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#B5ADA0",
                    margin: "0 0 12px 0",
                  }}
                >
                  * By submitting, you agree to our service terms.
                  We'll confirm within 15 minutes.
                </p>

                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "13px",
                    color: "#6B6258",
                    cursor: "pointer",
                    lineHeight: 1.5,
                  }}
                >
                  <input
                    type="checkbox"
                    required
                    style={{
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  />

                  <span>
                    I agree to the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#B56B3F",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      Privacy Policy
                    </a>
                    , Terms & Conditions, and Cancellation &
                    Refund Policy and consent to be contacted via
                    phone, WhatsApp, SMS, or email regarding my
                    courier booking.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-earth"
              >
                Confirm Courier Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(27,58,45,0.75)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            />

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.93,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.93,
              }}
              style={{
                position: "relative",
                zIndex: 1,
                background: "white",
                borderRadius: "28px",
                padding: "44px 40px",
                width: "100%",
                maxWidth: "420px",
                textAlign: "center",
                boxShadow:
                  "0 40px 80px rgba(27,58,45,0.25)",
                border:
                  "1px solid rgba(208, 198, 179, 0.5)",
              }}
            >
              {/* Success icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(45,90,61,0.1)",
                  border:
                    "1px solid rgba(45,90,61,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <CheckCircle
                  size={30}
                  color="#2D5A3D"
                />
              </div>

              <h3
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "#1B3A2D",
                  margin: "0 0 10px",
                }}
              >
                Courier Request Sent!
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#7A6E62",
                  lineHeight: 1.6,
                  margin: "0 0 24px",
                }}
              >
                Thank you,{" "}
                <strong
                  style={{
                    color: "#1B3A2D",
                  }}
                >
                  {formData.name}
                </strong>
                . Your courier request has been
                received. We'll confirm shortly.
              </p>

              {/* Booking summary */}
              <div
                style={{
                  background: "#F4EFE6",
                  border:
                    "1px solid rgba(208,198,179,0.6)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {[
                  ["Service", "Courier Service"],
                  ["Pickup", formData.origin],
                  ["Delivery", formData.destination],
                  ["Date", formData.date],
                  ["Weight", `${formData.weight} kg`],
                ].map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "20px",
                      fontFamily:
                        "'Inter', sans-serif",
                      fontSize: "0.8rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#7A6E62",
                      }}
                    >
                      {key}:
                    </span>

                    <span
                      style={{
                        color: "#1B3A2D",
                        fontWeight: 600,
                        textAlign: "right",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={resetForm}
                className="btn-earth"
                style={{
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .btn-earth {
          min-height: 50px;
          padding: 0 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 6px;
          background: #1B3A2D;
          color: #F7F4EC;
          cursor: pointer;
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .btn-earth:hover {
          background: #D4AF37;
          color: #1B3A2D;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .booking-form-grid {
            grid-template-columns: 1fr !important;
          }

          .booking-form-grid > div {
            width: 100%;
          }

          form {
            padding: 28px !important;
          }

          .btn-earth {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          form {
            padding: 22px !important;
          }

          .booking-form-grid {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}