import { useState } from "react";

export default function CustomItinerary() {
const [form, setForm] = useState({
  name: "",
  contact: "",
  destination: "",
  days: "",
  travelers: "",
  budget: "",
  activities: "",
});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const message = `
*Custom Travel Itinerary Request*

Name: ${form.name}
Contact: ${form.contact}
Destination: ${form.destination}
Duration: ${form.days} Days
Travelers: ${form.travelers}
Budget: ${form.budget}

Activities:
${form.activities}
`;

    window.open(
      `https://wa.me/917889306316?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  setForm({
  name: "",
  contact: "",
  destination: "",
  days: "",
  travelers: "",
  budget: "",
  activities: "",
});

  return (
    <div style={{ maxWidth: "800px", margin: "80px auto", padding: "20px", fontFamily: "'Inter', sans-serif", fontSize: '2.1rem',}}>
      <h1>Create Your Custom Itinerary</h1>

      <input
        className="earth-input"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        className="earth-input"
        name="contact"
        placeholder="Contact Number"
        value={form.contact}
        onChange={handleChange}
    />
      
      <input
        className="earth-input"
        name="destination"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
      />

      <input
        className="earth-input"
        name="days"
        placeholder="Number of Days"
        value={form.days}
        onChange={handleChange}
      />

      <input
        className="earth-input"
        name="travelers"
        placeholder="Number of Travelers"
        value={form.travelers}
        onChange={handleChange}
      />

      <input
        className="earth-input"
        name="budget"
        placeholder="Budget"
        value={form.budget}
        onChange={handleChange}
      />

      <textarea
        className="earth-input"
        rows="6"
        name="activities"
        placeholder="Places, hotels, activities, transport requirements..."
        value={form.activities}
        onChange={handleChange}
      />

      <button
        className="btn-earth"
        style={{ marginTop: "20px" }}
        onClick={sendWhatsApp}
      >
        Send 
      </button>
    </div>
  );
}