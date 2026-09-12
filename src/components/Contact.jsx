
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
            subject: "New Contact Enquiry - MARJ Logistics",
            from_name: "MARJ Logistics Website",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Near+Post+Office+Kreeri+Baramulla+Jammu+and+Kashmir+193108",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="marj-contact">
      <div className="marj-contact-container">

        {/* HEADER */}
        <div className="marj-contact-header">
          <div className="marj-contact-label">
            <span />
            CONTACT MARJ LOGISTICS
          </div>

          <h2>
            Let's move
            <br />
            <em>forward.</em>
          </h2>

          <p>
            Have a courier requirement, business logistics enquiry,
            or shipment-related question? Our team is ready to help.
          </p>
        </div>

        {/* CONTACT + FORM */}
        <div className="marj-contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="marj-contact-info">

            <div className="marj-info-card">
              <div className="marj-info-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>CALL US</span>

                <a href="tel:+917889306316">
                  +91 7889306316
                </a>

                <a href="tel:+917006502524">
                  +91 7006502524
                </a>
              </div>
            </div>

            <div className="marj-info-card">
              <div className="marj-info-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>EMAIL</span>

                <a href="mailto:marjlogistics007@gmail.com">
                  marjlogistics007@gmail.com
                </a>
              </div>
            </div>

            <div className="marj-info-card">
              <div className="marj-info-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>OFFICE</span>

                <p>
                  Near Post Office Kreeri,
                  <br />
                  Baramulla, Jammu & Kashmir
                  <br />
                  193108
                </p>

                <button
                  type="button"
                  className="marj-map-button"
                  onClick={openGoogleMaps}
                >
                  Open in Google Maps
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* FEATURES */}
            <div className="marj-contact-features">
              <div>
                <CheckCircle2 size={17} />
                <span>Doorstep Pickup</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Fast Delivery</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Secure Handling</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Business Support</span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="marj-contact-form-wrapper">
            <form
              className="marj-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="marj-form-row">

                <div className="marj-field">
                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="marj-field">
                  <label htmlFor="phone">
                    PHONE NUMBER
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="marj-field">
                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="marj-field">
                <label htmlFor="message">
                  HOW CAN WE HELP?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your courier or logistics requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="marj-submit-button"
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Enquiry"}

                <ArrowRight size={18} />
              </button>

              {status === "success" && (
                <div className="marj-form-success">
                  <CheckCircle2 size={19} />

                  <span>
                    Thank you. Your enquiry has been sent
                    successfully.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="marj-form-error">
                  Something went wrong. Please try again or
                  contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* REAL GOOGLE MAP */}
        <div className="marj-network">

          <div className="marj-network-heading">
            <span>OUR OFFICE</span>

            <h3>
              Find us in
              <br />
              <em>Kreeri, Baramulla.</em>
            </h3>
          </div>

          <div className="marj-real-map">

            <iframe
              title="MARJ Logistics Office - Kreeri Baramulla"
              src="https://www.google.com/maps?q=Near%20Post%20Office%20Kreeri%2C%20Baramulla%2C%20Jammu%20and%20Kashmir%20193108&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="marj-map-overlay">
              <div className="marj-map-location-icon">
                <MapPin size={20} />
              </div>

              <div>
                <strong>MARJ Logistics</strong>

                <span>
                  Near Post Office Kreeri
                  <br />
                  Baramulla, J&K 193108
                </span>
              </div>

              <button
                type="button"
                onClick={openGoogleMaps}
              >
                Directions
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ALL STYLING INSIDE JSX */}
      <style>{`

        .marj-contact {
          position: relative;
          padding: 120px 24px;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(212, 175, 55, 0.08),
              transparent 30%
            ),
            #f4efe6;
          color: #1b3a2d;
          overflow: hidden;
        }

        .marj-contact-container {
          width: min(1200px, 100%);
          margin: 0 auto;
        }

        .marj-contact-header {
          max-width: 760px;
          margin-bottom: 70px;
        }

        .marj-contact-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: #6d6f68;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .marj-contact-label span {
          width: 28px;
          height: 1px;
          background: #d4af37;
        }

        .marj-contact-header h2 {
          margin: 0;
          font-size: clamp(3.2rem, 7vw, 6.5rem);
          line-height: 0.9;
          letter-spacing: -0.055em;
          font-weight: 700;
        }

        .marj-contact-header h2 em {
          color: #a27b26;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-contact-header p {
          max-width: 650px;
          margin: 30px 0 0;
          color: #686a64;
          font-size: 17px;
          line-height: 1.8;
        }

        .marj-contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        .marj-contact-info {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .marj-info-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(27, 58, 45, 0.12);
        }

        .marj-info-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1b3a2d;
          color: #fff;
        }

        .marj-info-card span {
          display: block;
          margin-bottom: 8px;
          color: #8b8c86;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .marj-info-card a {
          display: block;
          width: fit-content;
          margin-bottom: 5px;
          color: #1b3a2d;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
        }

        .marj-info-card a:hover {
          color: #a27b26;
        }

        .marj-info-card p {
          margin: 0;
          color: #444b46;
          line-height: 1.7;
        }

        .marj-map-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 12px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #a27b26;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .marj-map-button:hover {
          color: #1b3a2d;
        }

        .marj-contact-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 12px;
        }

        .marj-contact-features div {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #4f5b53;
          font-size: 13px;
        }

        .marj-contact-features svg {
          color: #a27b26;
        }

        .marj-contact-form-wrapper {
          padding: 38px;
          border-radius: 30px;
          background: #1b3a2d;
          box-shadow: 0 30px 80px rgba(27, 58, 45, 0.16);
        }

        .marj-contact-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .marj-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .marj-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .marj-field label {
          color: rgba(255,255,255,0.65);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .marj-field input,
        .marj-field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255,255,255,0.13);
          outline: none;
          border-radius: 12px;
          padding: 15px 16px;
          background: rgba(255,255,255,0.07);
          color: #fff;
          font-family: inherit;
          font-size: 15px;
          transition: 0.25s ease;
        }

        .marj-field textarea {
          resize: vertical;
          min-height: 150px;
        }

        .marj-field input::placeholder,
        .marj-field textarea::placeholder {
          color: rgba(255,255,255,0.38);
        }

        .marj-field input:focus,
        .marj-field textarea:focus {
          border-color: #d4af37;
          background: rgba(255,255,255,0.1);
        }

        .marj-submit-button {
          border: 0;
          border-radius: 999px;
          padding: 16px 24px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background: #d4af37;
          color: #1b3a2d;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .marj-submit-button:hover {
          transform: translateY(-2px);
          background: #e0c45a;
        }

        .marj-submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .marj-form-success {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 13px 15px;
          border-radius: 12px;
          background: rgba(168, 213, 181, 0.12);
          color: #bde3c8;
          font-size: 13px;
        }

        .marj-form-error {
          padding: 13px 15px;
          border-radius: 12px;
          background: rgba(255, 100, 100, 0.12);
          color: #ffb5b5;
          font-size: 13px;
        }

        /* MAP SECTION */

        .marj-network {
          margin-top: 120px;
          padding-top: 80px;
          border-top: 1px solid rgba(27, 58, 45, 0.12);
        }

        .marj-network-heading span {
          color: #8b8c86;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .marj-network-heading h3 {
          margin: 14px 0 55px;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.045em;
        }

        .marj-network-heading h3 em {
          color: #a27b26;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .marj-real-map {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          border-radius: 30px;
          background: #ddd;
          border: 1px solid rgba(27, 58, 45, 0.12);
          box-shadow: 0 25px 70px rgba(27, 58, 45, 0.12);
        }

        .marj-real-map iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .marj-map-overlay {
          position: absolute;
          left: 25px;
          bottom: 25px;
          z-index: 5;
          width: min(350px, calc(100% - 50px));
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 13px;
          border-radius: 18px;
          background: rgba(27, 58, 45, 0.95);
          color: #fff;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(12px);
        }

        .marj-map-location-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #d4af37;
          color: #1b3a2d;
        }

        .marj-map-overlay div:nth-child(2) {
          flex: 1;
        }

        .marj-map-overlay strong {
          display: block;
          margin-bottom: 4px;
          font-size: 14px;
        }

        .marj-map-overlay span {
          display: block;
          color: rgba(255,255,255,0.65);
          font-size: 11px;
          line-height: 1.5;
        }

        .marj-map-overlay button {
          display: flex;
          align-items: center;
          gap: 5px;
          border: 0;
          background: transparent;
          color: #d4af37;
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
        }

        .marj-map-overlay button:hover {
          color: #fff;
        }

        @media (max-width: 900px) {

          .marj-contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .marj-real-map {
            height: 420px;
          }
        }

        @media (max-width: 600px) {

          .marj-contact {
            padding: 85px 18px;
          }

          .marj-contact-header {
            margin-bottom: 50px;
          }

          .marj-form-row {
            grid-template-columns: 1fr;
          }

          .marj-contact-form-wrapper {
            padding: 24px;
            border-radius: 22px;
          }

          .marj-contact-features {
            grid-template-columns: 1fr;
          }

          .marj-network {
            margin-top: 80px;
            padding-top: 60px;
          }

          .marj-real-map {
            height: 360px;
            border-radius: 22px;
          }

          .marj-map-overlay {
            left: 15px;
            right: 15px;
            bottom: 15px;
            width: auto;
            padding: 14px;
          }

          .marj-map-location-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
          }

          .marj-map-overlay button {
            font-size: 10px;
          }
        }

      `}</style>
    </section>
  );
}
