import React from "react";
import { Link } from "react-router-dom";

export default function Logistics() {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: '#f4eede',
      }}
    >
      {/* ================= PREMIUM HERO ================= */}

      <div
        style={{
          position: "relative",
          height: isMobile ? "75vh" : "90vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f3ecb6",
        }}
      >
        {/* Background */}
<img
  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2400&q=100"
  alt="Logistics"
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    animation: "heroZoom 15s ease-in-out infinite alternate",
  }}

/>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(8,20,40,.75), rgba(8,20,40,.75))",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "90%",
            maxWidth: "1300px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.1fr .9fr",
            gap: "60px",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {/* LEFT */}

          <div>
            <div
              style={{
                display: "inline-block",
                padding: "10px 20px",
                borderRadius: "50px",
                background: "rgba(255,255,255,.15)",
                backdropFilter: "blur(15px)",
                marginBottom: "25px",
                fontWeight: 600,
              }}
            >
              AUTHORIZED DTDC CHANNEL PARTNER
            </div>

            <h1
              style={{
                fontSize: isMobile ? "42px" : "72px",
                lineHeight: 1.1,
                fontWeight: 800,
                marginBottom: "25px",
              }}
            >
              Fast,
              <br />
              Secure &
              <br />
              Reliable Courier
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.8,
                color: "#E5E7EB",
                maxWidth: "650px",
                marginBottom: "40px",
              }}
            >
              Domestic Express • International Shipping • Air Cargo • Surface
              Cargo • Business Logistics • E-Commerce Solutions
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
      <Link
  to="/?service=courier#booking"
  style={{
    background: "#1B3A2D",
    color: "#fff",
    padding: "18px 40px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
  }}
>
  Book Pickup
</Link>
              <a
                href="https://www.dtdc.in/tracking/tracking_results.asp"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "rgba(255,255,255,.15)",
                  color: "#fff",
                  padding: "18px 40px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,.3)",
                }}
              >
                Track Shipment
              </a>
            </div>

            {/* Stats */}

            <div
              style={{
                display: "flex",
                gap: "50px",
                marginTop: "70px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h2 style={{ color: "#FDB913", fontSize: "42px" }}>1000+</h2>
                <p>Happy Customers</p>
              </div>

              <div>
                <h2 style={{ color: "#FDB913", fontSize: "42px" }}>220+</h2>
                <p>Countries</p>
              </div>

              <div>
                <h2 style={{ color: "#FDB913", fontSize: "42px" }}>99%</h2>
                <p>On-Time Delivery</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            style={{
              background: "rgba(255,255,255,.08)",
              backdropFilter: "blur(20px)",
              padding: "45px",
              borderRadius: "30px",
              border: "1px solid rgba(255,255,255,.2)",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "30px",
              }}
            >
              Why Choose DTDC?
            </h2>

            {[
              "Doorstep Pickup",
              "Express Delivery",
              "Real-Time Tracking",
              "Secure Packaging",
              "PAN India Coverage",
              "International Shipping",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#FDB913",
                    marginRight: "15px",
                  }}
                />

                <span style={{ fontSize: "18px" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ABOUT DTDC ================= */}

<section
  style={{
    maxWidth: "1300px",
    margin: "100px auto",
    padding: "0 25px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "60px",
      alignItems: "center",
    }}
  >
    {/* Left */}

    <div>
      <span
        style={{
          color: "#1B3A2D",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Authorized DTDC Channel Partner
      </span>

      <h2
        style={{
          fontSize: isMobile ? "36px" : "52px",
          margin: "20px 0",
          color: "#1E293B",
          lineHeight: 1.2,
        }}
      >
        Reliable Courier &
        <br />
        Logistics Solutions
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.9",
          color: "#555",
          marginBottom: "25px",
        }}
      >
        We provide fast, secure and dependable courier solutions through
        the trusted DTDC network. Whether you're shipping important
        documents, business consignments, e-commerce orders or
        international parcels, our experienced team ensures every shipment
        is handled with care and delivered on time.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {[
          "Domestic Express",
          "International Courier",
          "Doorstep Pickup",
          "Business Shipping",
          "Real-Time Tracking",
          "Secure Handling",
        ].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#1B3A2D",
              }}
            />

            <span style={{ fontWeight: 600 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right */}

    <div>
      <img
        src="/public/office.jpg"
        alt="DTDC Office"
        style={{
          width: "100%",
          borderRadius: "30px",
          boxShadow: "0 25px 60px rgba(0,0,0,.15)",
        }}
      />
    </div>
  </div>
</section>

{/* ================= SERVICES ================= */}

<section
  style={{
    background: "#fefbd8",
    padding: "100px 25px",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <span
      style={{
        color: "#1B3A2D",
        letterSpacing: "2px",
        fontWeight: 700,
      }}
    >
      OUR SERVICES
    </span>

    <h2
      style={{
        fontSize: isMobile ? "36px" : "50px",
        marginTop: "20px",
        color: "#1E293B",
      }}
    >
      Complete Courier Solutions
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "25px auto 60px",
        color: "#666",
        lineHeight: 1.8,
      }}
    >
      Comprehensive logistics services designed for individuals,
      businesses, e-commerce sellers and corporate clients.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(auto-fit,minmax(320px,1fr))",
        gap: "30px",
      }}
    >
      {[
        {
          title: "Domestic Express",
          icon: "🚚",
          desc: "Fast and secure parcel delivery across India with reliable transit times.",
        },
        {
          title: "International Courier",
          icon: "🌍",
          desc: "Worldwide shipping with customs documentation and global tracking.",
        },
        {
          title: "Air Cargo",
          icon: "✈️",
          desc: "Priority air freight solutions for urgent shipments.",
        },
        {
          title: "Surface Cargo",
          icon: "🚛",
          desc: "Affordable transportation for bulk and heavy consignments.",
        },
        {
          title: "Business Logistics",
          icon: "🏢",
          desc: "Dedicated logistics support for companies and organizations.",
        },
        {
          title: "E-Commerce Shipping",
          icon: "📦",
          desc: "Pickup, shipping and delivery solutions for online businesses.",
        },
      ].map((service) => (
        <div
          key={service.title}
          style={{
            background: "#fff",
            borderRadius: "25px",
            padding: "40px",
            textAlign: "left",
            border: "1px solid #eee",
            boxShadow: "0 20px 45px rgba(0,0,0,.08)",
            transition: ".3s",
          }}
        >
          <div
            style={{
              fontSize: "55px",
              marginBottom: "20px",
            }}
          >
            {service.icon}
          </div>

          <h3
            style={{
              fontSize: "28px",
              marginBottom: "18px",
              color: "#1E293B",
            }}
          >
            {service.title}
          </h3>

          <p
            style={{
              color: "#666",
              lineHeight: 1.8,
            }}
          >
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= WHY CHOOSE DTDC ================= */}

<section
  style={{
    background: '#f4eede',
    padding: "100px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: "70px",
      }}
    >
      <span
        style={{
          color: "#1B3A2D",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        WHY CHOOSE US
      </span>

      <h2
        style={{
          fontSize: isMobile ? "36px" : "52px",
          marginTop: "20px",
          color: "#1E293B",
        }}
      >
        Trusted DTDC Courier Partner
      </h2>

      <p
        style={{
          maxWidth: "750px",
          margin: "25px auto 0",
          color: "#666",
          lineHeight: 1.8,
          fontSize: "18px",
        }}
      >
        We combine DTDC's trusted logistics network with professional customer
        support to provide fast, secure and reliable courier solutions for
        individuals and businesses.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(auto-fit,minmax(280px,1fr))",
        gap: "30px",
      }}
    >
      {[
        {
          icon: "🚚",
          title: "Doorstep Pickup",
          text: "Convenient pickup service from your home or business location.",
        },
        {
          icon: "📍",
          title: "Live Shipment Tracking",
          text: "Track every shipment with real-time tracking updates.",
        },
        {
          icon: "🛡️",
          title: "Safe & Secure",
          text: "Every parcel is handled carefully to ensure maximum safety.",
        },
        {
          icon: "🌍",
          title: "Global Network",
          text: "Reliable domestic and international delivery solutions.",
        },
        {
          icon: "⚡",
          title: "Fast Delivery",
          text: "Express shipping options for urgent documents and parcels.",
        },
        {
          icon: "💼",
          title: "Business Solutions",
          text: "Dedicated logistics support for companies and e-commerce.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "35px",
            boxShadow: "0 15px 40px rgba(0,0,0,.08)",
            border: "1px solid #eee",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "18px",
              background: "#1B3A2D",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              marginBottom: "25px",
            }}
          >
            {item.icon}
          </div>

          <h3
            style={{
              fontSize: "24px",
              color: "#1E293B",
              marginBottom: "15px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ================= SHIPPING PROCESS ================= */}

<section
  style={{
    padding: "110px 20px",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <span
      style={{
        color: "#1B3A2D",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      HOW IT WORKS
    </span>

    <h2
      style={{
        fontSize: isMobile ? "36px" : "52px",
        marginTop: "20px",
        color: "#1E293B",
      }}
    >
      Courier Booking Process
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "25px auto 70px",
        color: "#666",
        lineHeight: 1.8,
      }}
    >
      From booking to final delivery, every shipment is processed with
      efficiency, transparency and professional handling.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(5,1fr)",
        gap: "30px",
      }}
    >
      {[
        {
          number: "01",
          title: "Book Pickup",
          icon: "📞",
        },
        {
          number: "02",
          title: "Parcel Collection",
          icon: "📦",
        },
        {
          number: "03",
          title: "Sorting Center",
          icon: "🏢",
        },
        {
          number: "04",
          title: "In Transit",
          icon: "🚚",
        },
        {
          number: "05",
          title: "Delivered",
          icon: "✅",
        },
      ].map((step) => (
        <div
          key={step.number}
          style={{
            background: "#F8F9FA",
            borderRadius: "24px",
            padding: "35px 25px",
            border: "1px solid #ECECEC",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              background: "#1B3A2D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "30px",
            }}
          >
            {step.icon}
          </div>

          <div
            style={{
              color: "#1B3A2D",
              fontWeight: "bold",
              fontSize: "14px",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            STEP {step.number}
          </div>

          <h3
            style={{
              color: "#1E293B",
              fontSize: "22px",
            }}
          >
            {step.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= COMPANY STATS ================= */}

<section
  style={{
    background: "#1B3A2D",
    color: "#fff",
    padding: "10px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile
        ? "repeat(2,1fr)"
        : "repeat(4,1fr)",
      gap: "40px",
      textAlign: "center",
      
    }}
  >
    {[
      {
        value: "1000+",
        label: "Happy Customers",
      },
      {
        value: "25+",
        label: "Courier Services",
      },
      {
        value: "220+",
        label: "Countries Connected",
      },
      {
        value: "99%",
        label: "On-Time Delivery",
      },
    ].map((item) => (
      <div key={item.label}>
        <h2
          style={{
            fontSize: "58px",
            marginBottom: "12px",
            fontWeight: 100,
            color: "#fff",
          }}
        >
          {item.value}
        </h2>

        <p
          style={{
            fontSize: "18px",
            opacity: ".95",
          }}
        >
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>

    </div>
    
  );
}

