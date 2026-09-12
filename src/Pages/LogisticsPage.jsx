import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  Truck,
  Globe2,
  Plane,
  Package,
  Building2,
  ShoppingCart,
  ShieldCheck,
  Clock3,
  MapPin,
  ArrowRight,
  X,
  CheckCircle2,
  Network,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Domestic Express",
    icon: Truck,
    desc: "Fast and secure delivery across India.",
    details:
      "Our Domestic Express service provides dependable delivery for documents, parcels, and business consignments across India. With professional handling and shipment tracking, we help ensure your packages reach their destination safely and efficiently.",
  },
  {
    id: 2,
    title: "International Courier",
    icon: Globe2,
    desc: "Reliable international shipping solutions.",
    details:
      "Send documents, parcels, samples, gifts, and commercial shipments to international destinations through established courier networks. Our team helps with shipment preparation, handling, and tracking.",
  },
  {
    id: 3,
    title: "Air Cargo",
    icon: Plane,
    desc: "Priority transportation for urgent shipments.",
    details:
      "Our Air Cargo solutions are designed for shipments that require faster transit. We provide professional handling for time-sensitive consignments and help businesses move important goods efficiently.",
  },
  {
    id: 4,
    title: "Surface Cargo",
    icon: Package,
    desc: "Economical transportation for larger shipments.",
    details:
      "Surface Cargo provides an efficient solution for larger, heavier, or less time-sensitive consignments. It is designed to provide dependable transportation while keeping logistics costs practical.",
  },
  {
    id: 5,
    title: "Business Logistics",
    icon: Building2,
    desc: "Dedicated logistics support for businesses.",
    details:
      "MARJ Logistics supports businesses with regular pickups, scheduled deliveries, bulk shipments, corporate courier requirements, and customized logistics assistance.",
  },
  {
    id: 6,
    title: "E-Commerce Shipping",
    icon: ShoppingCart,
    desc: "Reliable shipping support for online businesses.",
    details:
      "Our e-commerce shipping solutions help online sellers manage parcel pickups, transportation, delivery, and shipment tracking so customers receive their orders efficiently.",
  },
];

const whyChooseUs = [
  {
    title: "Fast Delivery",
    icon: Clock3,
    desc: "Efficient pickup and delivery solutions designed around your shipment requirements.",
  },
  {
    title: "Secure Handling",
    icon: ShieldCheck,
    desc: "Professional shipment handling helps keep documents, parcels, and consignments protected.",
  },
  {
    title: "Wide Connectivity",
    icon: Globe2,
    desc: "Courier and logistics connectivity for domestic and international shipment requirements.",
  },
  {
    title: "Business Support",
    icon: Building2,
    desc: "Flexible logistics assistance for retailers, companies, offices, and growing businesses.",
  },
  {
    title: "Shipment Tracking",
    icon: MapPin,
    desc: "Track your shipment through the available courier tracking system and stay informed.",
  },
  {
    title: "Customer Focus",
    icon: CheckCircle2,
    desc: "Responsive support and practical solutions from booking through final delivery.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Book Pickup",
    icon: "📞",
    link: "/#booking",
  },
  {
    number: "02",
    title: "Parcel Collection",
    icon: "📦",
    link: "/#contact",
  },
  {
    number: "03",
    title: "Shipment Processing",
    icon: "🏢",
  },
  {
    number: "04",
    title: "In Transit",
    icon: "🚚",
    link: "/#logistics",
  },
  {
    number: "05",
    title: "Delivered",
    icon: "✅",
  },
];

/* =========================================================
   LOGISTICS NETWORK
========================================================= */

const networkHubs = [
  {
    id: "srinagar",
    name: "Srinagar",
    region: "Jammu & Kashmir",
    x: 18,
    y: 28,
  },
  {
    id: "delhi",
    name: "Delhi",
    region: "North India",
    x: 48,
    y: 38,
  },
  {
    id: "mumbai",
    name: "Mumbai",
    region: "West India",
    x: 35,
    y: 72,
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    region: "South India",
    x: 58,
    y: 78,
  },
  {
    id: "kolkata",
    name: "Kolkata",
    region: "East India",
    x: 79,
    y: 45,
  },
];

/*
  Every connection is defined by the IDs of two hubs.
  Because the lines are rendered inside the same SVG coordinate
  system as the nodes, they remain correctly connected.
*/

const networkConnections = [
  ["srinagar", "delhi"],
  ["srinagar", "mumbai"],
  ["delhi", "mumbai"],
  ["delhi", "bengaluru"],
  ["delhi", "kolkata"],
  ["mumbai", "bengaluru"],
  ["mumbai", "kolkata"],
  ["bengaluru", "kolkata"],
];

/* =========================================================
   COMPONENT
========================================================= */

export default function LogisticsPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "#F4EEDE",
          color: "#1E293B",
        }}
      >
        {/* =================================================
            HERO
        ================================================= */}

        <section
          style={{
            position: "relative",
            minHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2400&q=90"
            alt="MARJ Logistics warehouse and shipping"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              animation:
                "marjHeroZoom 15s ease-in-out infinite alternate",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(8,20,16,.88), rgba(8,20,16,.58), rgba(8,20,16,.72))",
            }}
          />

          <div
            className="logistics-hero-grid"
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "1300px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr .8fr",
              gap: "70px",
              alignItems: "center",
              zIndex: 2,
              padding: "100px 0 70px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.12)",
                  border:
                    "1px solid rgba(255,255,255,.18)",
                  backdropFilter: "blur(12px)",
                  marginBottom: "26px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#A8D5B5",
                  }}
                />

                MARJ Logistics
              </div>

              <h1
                style={{
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  lineHeight: 0.98,
                  fontWeight: 800,
                  margin: "0 0 28px",
                  color: "#fff",
                  letterSpacing: "-0.04em",
                }}
              >
                Fast,
                <br />
                Secure &
                <br />
                Reliable.
              </h1>

              <p
                style={{
                  fontSize:
                    "clamp(1rem, 1.6vw, 1.25rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,.82)",
                  maxWidth: "680px",
                  margin: "0 0 38px",
                }}
              >
                Professional courier and logistics
                solutions for individuals, businesses,
                e-commerce sellers, and corporate clients.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/?service=courier#booking"
                  style={{
                    background: "#1B3A2D",
                    color: "#fff",
                    padding: "15px 28px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                  }}
                >
                  Book Pickup
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://www.dtdc.in/tracking/tracking_results.asp"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background:
                      "rgba(255,255,255,.1)",
                    color: "#fff",
                    padding: "15px 28px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    border:
                      "1px solid rgba(255,255,255,.28)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Track Shipment
                  <MapPin size={16} />
                </a>
              </div>
            </div>

            <div
              style={{
                background:
                  "rgba(255,255,255,.08)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter:
                  "blur(22px)",
                padding: "34px",
                borderRadius: "30px",
                border:
                  "1px solid rgba(255,255,255,.18)",
                boxShadow:
                  "0 25px 70px rgba(0,0,0,.22)",
              }}
            >
              <p
                style={{
                  margin: "0 0 22px",
                  color: "#A8D5B5",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Why MARJ Logistics
              </p>

              {[
                "Doorstep Pickup",
                "Express Delivery",
                "Shipment Tracking",
                "Secure Handling",
                "Business Logistics",
                "International Shipping",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "13px",
                    padding: "13px 0",
                    borderBottom:
                      "1px solid rgba(255,255,255,.1)",
                  }}
                >
                  <div
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      background: "#C49B63",
                      flexShrink: 0,
                    }}
                  />

                  <span
                    style={{
                      fontSize: "16px",
                      color:
                        "rgba(255,255,255,.9)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "110px 25px",
          }}
        >
          <div
            className="logistics-about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "70px",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  color: "#1B3A2D",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform:
                    "uppercase",
                  fontSize: "13px",
                }}
              >
                MARJ LOGISTICS
              </span>

              <h2
                style={{
                  fontSize:
                    "clamp(2.8rem, 6vw, 5.5rem)",
                  margin: "12px 0 28px",
                  lineHeight: 0.98,
                  color: "#1B3A2D",
                  letterSpacing: "-0.04em",
                }}
              >
                Reliable Courier &
                <br />
                Logistics Solutions
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.9,
                  color: "#555",
                  marginBottom: "30px",
                }}
              >
                MARJ Logistics provides dependable
                courier and logistics services for
                documents, parcels, commercial
                consignments, e-commerce shipments,
                and business requirements. Our focus
                is simple: professional handling,
                dependable service, and efficient
                delivery.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                {[
                  "Domestic Express",
                  "International Courier",
                  "Doorstep Pickup",
                  "Business Shipping",
                  "Shipment Tracking",
                  "Secure Handling",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: 600,
                      color: "#334155",
                    }}
                  >
                    <CheckCircle2
                      size={17}
                      color="#2D5A3D"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/office.png"
                alt="MARJ Logistics office"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "30px",
                  boxShadow:
                    "0 25px 60px rgba(0,0,0,.15)",
                }}
              />
            </div>
          </div>
        </section>

        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          style={{
            background: "#FEFBD8",
            padding: "110px 25px",
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
                fontSize: "13px",
              }}
            >
              OUR SERVICES
            </span>

            <h2
              style={{
                fontSize:
                  "clamp(2.3rem, 5vw, 3.5rem)",
                marginTop: "18px",
                color: "#1E293B",
                marginBottom: 0,
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
                fontSize: "17px",
              }}
            >
              Comprehensive logistics services
              designed for individuals, businesses,
              e-commerce sellers, and corporate
              clients.
            </p>

            <div
              className="logistics-service-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "28px",
              }}
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() =>
                      setSelectedService(service)
                    }
                    whileHover={{ y: -7 }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    style={{
                      background: "#fff",
                      borderRadius: "25px",
                      padding: "36px",
                      textAlign: "left",
                      border: "1px solid #eee",
                      boxShadow:
                        "0 20px 45px rgba(0,0,0,.08)",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "18px",
                        background: "#1B3A2D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                          "center",
                        marginBottom: "24px",
                      }}
                    >
                      <Icon
                        size={29}
                        color="#fff"
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "25px",
                        margin: "0 0 14px",
                        color: "#1E293B",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: 1.8,
                        margin: "0 0 22px",
                      }}
                    >
                      {service.desc}
                    </p>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "7px",
                        color: "#2D5A3D",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      View Details
                      <ArrowRight size={15} />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            WHY CHOOSE US
        ================================================= */}

        <section
          style={{
            background: "#F4EEDE",
            padding: "110px 20px",
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
                  textTransform:
                    "uppercase",
                  fontSize: "13px",
                }}
              >
                WHY CHOOSE US
              </span>

              <h2
                style={{
                  fontSize:
                    "clamp(2.3rem, 5vw, 3.5rem)",
                  marginTop: "18px",
                  color: "#1E293B",
                  marginBottom: "20px",
                }}
              >
                Built For Reliable Delivery
              </h2>

              <p
                style={{
                  maxWidth: "750px",
                  margin: "0 auto",
                  color: "#666",
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                Professional courier and logistics
                support focused on speed, security,
                communication, and dependable
                service.
              </p>
            </div>

            <div
              className="logistics-why-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "28px",
              }}
            >
              {whyChooseUs.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    style={{
                      background: "#fff",
                      borderRadius: "24px",
                      padding: "34px",
                      boxShadow:
                        "0 15px 40px rgba(0,0,0,.07)",
                      border: "1px solid #eee",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "18px",
                        background: "#1B3A2D",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                          "center",
                        marginBottom: "24px",
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    <h3
                      style={{
                        fontSize: "23px",
                        color: "#1E293B",
                        marginBottom: "13px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            MARJ LOGISTICS NETWORK
        ================================================= */}

        <section
          id="logistics"
          style={{
            background: "#F4EEDE",
            padding: "40px 20px 120px",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "55px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  color: "#1B3A2D",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform:
                    "uppercase",
                  marginBottom: "14px",
                }}
              >
                <Network size={17} />
                MARJ LOGISTICS NETWORK
              </div>

              <h2
                style={{
                  margin: 0,
                  color: "#1B3A2D",
                  fontSize:
                    "clamp(2.4rem, 5vw, 4.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.045em",
                }}
              >
                Connected Across India.
              </h2>

              <p
                style={{
                  maxWidth: "700px",
                  margin: "22px auto 0",
                  color: "#6B706A",
                  fontSize: "17px",
                  lineHeight: 1.8,
                }}
              >
                Our logistics network connects major
                service hubs to help move shipments
                efficiently between regions.
              </p>
            </div>

            {/* NETWORK MAP */}

            <div
              className="marj-network-map"
              style={{
                position: "relative",
                width: "100%",
                height: "620px",
                overflow: "hidden",
                borderRadius: "38px",
                border:
                  "1px solid rgba(27,58,45,.12)",
                background:
                  "linear-gradient(135deg, #F7F3E8, #EDE8D8)",
                boxShadow:
                  "0 25px 70px rgba(27,58,45,.08)",
              }}
            >
              {/* GRID BACKGROUND */}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(27,58,45,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(27,58,45,.055) 1px, transparent 1px)",
                  backgroundSize:
                    "78px 78px",
                  pointerEvents: "none",
                }}
              />

              {/* SOFT MAP GLOW */}

              <div
                style={{
                  position: "absolute",
                  width: "420px",
                  height: "420px",
                  left: "35%",
                  top: "18%",
                  borderRadius: "50%",
                  background:
                    "rgba(196,155,99,.08)",
                  filter: "blur(45px)",
                  pointerEvents: "none",
                }}
              />

              {/* SVG CONNECTION NETWORK */}

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              >
                {networkConnections.map(
                  ([fromId, toId], index) => {
                    const from =
                      networkHubs.find(
                        (hub) =>
                          hub.id === fromId
                      );

                    const to =
                      networkHubs.find(
                        (hub) =>
                          hub.id === toId
                      );

                    if (!from || !to) {
                      return null;
                    }

                    return (
                      <line
                        key={`${fromId}-${toId}`}
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke="#C49B63"
                        strokeWidth="0.28"
                        strokeOpacity="0.68"
                        strokeDasharray="1.2 1"
                      >
                        <animate
                          attributeName="stroke-opacity"
                          values="0.35;0.85;0.35"
                          dur={`${3 + index * 0.35}s`}
                          repeatCount="indefinite"
                        />
                      </line>
                    );
                  }
                )}
              </svg>

              {/* HUBS */}

              {networkHubs.map((hub) => (
                <div
                  key={hub.id}
                  className="network-hub"
                  style={{
                    position: "absolute",
                    left: `${hub.x}%`,
                    top: `${hub.y}%`,
                    transform:
                      "translate(-50%, -50%)",
                    zIndex: 5,
                    textAlign: "center",
                  }}
                >
                  {/* PULSE RING */}

                  <div
                    style={{
                      position: "absolute",
                      width: "46px",
                      height: "46px",
                      left: "50%",
                      top: "50%",
                      transform:
                        "translate(-50%, -50%)",
                      borderRadius: "50%",
                      border:
                        "1px solid rgba(196,155,99,.45)",
                      animation:
                        "networkPulse 2.5s ease-out infinite",
                    }}
                  />

                  {/* NODE */}

                  <div
                    style={{
                      position: "relative",
                      width: "22px",
                      height: "22px",
                      margin: "0 auto 13px",
                      borderRadius: "50%",
                      background: "#173126",
                      border:
                        "5px solid #E9D69A",
                      boxShadow:
                        "0 5px 18px rgba(27,58,45,.18)",
                    }}
                  />

                  <div
                    style={{
                      fontSize:
                        "clamp(15px, 1.4vw, 20px)",
                      fontWeight: 800,
                      color: "#173126",
                      whiteSpace: "nowrap",
                      letterSpacing:
                        "-0.02em",
                    }}
                  >
                    {hub.name}
                  </div>

                  <div
                    style={{
                      marginTop: "5px",
                      fontSize:
                        "clamp(10px, .9vw, 13px)",
                      color: "#85877F",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {hub.region}
                  </div>
                </div>
              ))}

              {/* MAP LABEL */}

              <div
                style={{
                  position: "absolute",
                  left: "28px",
                  bottom: "25px",
                  zIndex: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  padding:
                    "10px 15px",
                  borderRadius: "999px",
                  background:
                    "rgba(255,255,255,.68)",
                  border:
                    "1px solid rgba(27,58,45,.1)",
                  backdropFilter:
                    "blur(10px)",
                  color: "#5E655E",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing:
                    "0.08em",
                  textTransform:
                    "uppercase",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background:
                      "#C49B63",
                  }}
                />

                Active Logistics Connections
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            PROCESS
        ================================================= */}

        <section
          style={{
            padding: "110px 20px",
            background: "#fff",
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
                textTransform:
                  "uppercase",
                fontSize: "13px",
              }}
            >
              HOW IT WORKS
            </span>

            <h2
              style={{
                fontSize:
                  "clamp(2.3rem, 5vw, 3.5rem)",
                marginTop: "18px",
                color: "#1E293B",
              }}
            >
              Courier Booking Process
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin:
                  "25px auto 70px",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              From booking to final delivery,
              every shipment is handled with
              efficiency and professional care.
            </p>

            <div
              className="logistics-process-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(5, 1fr)",
                gap: "20px",
              }}
            >
              {processSteps.map((step) => {
                const card = (
                  <div
                    style={{
                      height: "100%",
                      background: "#F8F9FA",
                      borderRadius: "24px",
                      padding:
                        "30px 20px",
                      border:
                        "1px solid #ECECEC",
                    }}
                  >
                    <div
                      style={{
                        width: "66px",
                        height: "66px",
                        margin:
                          "0 auto 20px",
                        borderRadius: "50%",
                        background:
                          "#1B3A2D",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color: "#fff",
                        fontSize: "27px",
                      }}
                    >
                      {step.icon}
                    </div>

                    <div
                      style={{
                        color:
                          "#1B3A2D",
                        fontWeight:
                          "bold",
                        fontSize: "13px",
                        letterSpacing:
                          "2px",
                        marginBottom:
                          "9px",
                      }}
                    >
                      STEP {step.number}
                    </div>

                    <h3
                      style={{
                        color:
                          "#1E293B",
                        fontSize: "19px",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                );

                return step.link ? (
                  <Link
                    key={step.number}
                    to={step.link}
                    style={{
                      textDecoration:
                        "none",
                      color:
                        "inherit",
                    }}
                  >
                    {card}
                  </Link>
                ) : (
                  <div
                    key={step.number}
                  >
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            STATS
        ================================================= */}

        <section
          style={{
            background: "#F4EEDE",
            color: "#173126",
            padding: "80px 20px",
          }}
        >
          <div
            className="logistics-stats-grid"
            style={{
              maxWidth: "1300px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns:
                "repeat(4, 1fr)",
              gap: "40px",
              textAlign: "center",
            }}
          >
            {[
              {
                value: "1000+",
                label:
                  "Customers Served",
              },
              {
                value: "25+",
                label:
                  "Logistics Services",
              },
              {
                value: "220+",
                label:
                  "Countries Connected",
              },
              {
                value: "99%",
                label:
                  "Delivery Reliability",
              },
            ].map((item) => (
              <div
                key={item.label}
              >
                <h2
                  style={{
                    fontSize:
                      "clamp(2.8rem, 5vw, 4rem)",
                    margin:
                      "0 0 10px",
                    fontWeight: 700,
                    color:
                      "#173126",
                  }}
                >
                  {item.value}
                </h2>

                <p
                  style={{
                    fontSize: "16px",
                    margin: 0,
                    opacity: 0.85,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================
            SERVICE MODAL
        ================================================= */}

        <AnimatePresence>
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
              onClick={() =>
                setSelectedService(
                  null
                )
              }
              style={{
                position: "fixed",
                inset: 0,
                background:
                  "rgba(0,0,0,.58)",
                backdropFilter:
                  "blur(12px)",
                display: "flex",
                justifyContent:
                  "center",
                alignItems:
                  "center",
                zIndex: 9999,
                padding: "20px",
              }}
            >
              <motion.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                onClick={(e) =>
                  e.stopPropagation()
                }
                style={{
                  width: "100%",
                  maxWidth: "560px",
                  background:
                    "#173126",
                  borderRadius:
                    "28px",
                  padding: "38px",
                  color: "#fff",
                  boxShadow:
                    "0 30px 90px rgba(0,0,0,.35)",
                  position:
                    "relative",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setSelectedService(
                      null
                    )
                  }
                  aria-label="Close"
                  style={{
                    position:
                      "absolute",
                    top: "18px",
                    right: "18px",
                    width: "38px",
                    height: "38px",
                    borderRadius:
                      "50%",
                    background:
                      "rgba(255,255,255,.1)",
                    border:
                      "1px solid rgba(255,255,255,.15)",
                    color: "#fff",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    cursor:
                      "pointer",
                  }}
                >
                  <X size={19} />
                </button>

                {(() => {
                  const Icon =
                    selectedService.icon;

                  return (
                    <div
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius:
                          "20px",
                        background:
                          "rgba(255,255,255,.1)",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        marginBottom:
                          "22px",
                      }}
                    >
                      <Icon
                        size={31}
                        color="#A8D5B5"
                      />
                    </div>
                  );
                })()}

                <h2
                  style={{
                    color: "#F3ECB6",
                    fontSize: "32px",
                    margin:
                      "0 0 18px",
                  }}
                >
                  {selectedService.title}
                </h2>

                <p
                  style={{
                    lineHeight: 1.8,
                    color:
                      "rgba(255,255,255,.86)",
                    fontSize: "16px",
                    margin: 0,
                  }}
                >
                  {
                    selectedService.details
                  }
                </p>

                <Link
                  to="/?service=courier#booking"
                  onClick={() =>
                    setSelectedService(
                      null
                    )
                  }
                  style={{
                    marginTop: "28px",
                    display:
                      "inline-flex",
                    alignItems:
                      "center",
                    gap: "8px",
                    background:
                      "#C49B63",
                    color: "#173126",
                    padding:
                      "13px 22px",
                    borderRadius:
                      "999px",
                    textDecoration:
                      "none",
                    fontWeight: 700,
                  }}
                >
                  Book This Service
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* =================================================
          PAGE STYLE
      ================================================= */}

      <style>{`
        @keyframes marjHeroZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.08);
          }
        }

        @keyframes networkPulse {
          0% {
            transform: translate(-50%, -50%) scale(.75);
            opacity: .8;
          }

          70% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }

          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        @media (max-width: 1000px) {
          .logistics-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 45px !important;
          }

          .logistics-about-grid {
            grid-template-columns: 1fr !important;
          }

          .logistics-process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .logistics-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .marj-network-map {
            height: 560px !important;
          }
        }

        @media (max-width: 650px) {
          .logistics-hero-grid {
            width: calc(100% - 40px) !important;
            padding: 90px 0 50px !important;
          }

          .logistics-about-grid {
            gap: 40px !important;
          }

          .logistics-service-grid {
            grid-template-columns: 1fr !important;
          }

          .logistics-process-grid {
            grid-template-columns: 1fr !important;
          }

          .logistics-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px 15px !important;
          }

          .marj-network-map {
            height: 480px !important;
            border-radius: 25px !important;
          }

          .network-hub {
            transform: translate(-50%, -50%) scale(.82) !important;
          }
        }

        @media (max-width: 430px) {
          .marj-network-map {
            height: 420px !important;
          }

          .network-hub {
            transform: translate(-50%, -50%) scale(.68) !important;
          }
        }
      `}</style>
    </>
  );
}