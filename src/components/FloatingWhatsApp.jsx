import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phone = "917051676001"; // Replace with your WhatsApp number (include country code)

  return (
    <a
      href={`https://wa.me/${phone}?text=🌿%20Hello%20Marj%20Logistics!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20assist%20me.%20Thank%20you!`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#25D366",
        color: "#fff",
        padding: "14px 18px",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        fontWeight: "200",
        fontSize: "15px",
        transition: "all .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <MessageCircle size={24} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}