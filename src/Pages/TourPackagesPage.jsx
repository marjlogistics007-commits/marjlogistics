import { Link } from "react-router-dom";

<section
  style={{
    height: '70vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1595815771614-ade5019c1c6f?q=80&w=1600&auto=format&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }}
>
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.45)',
    }}
  />

  <div
    style={{
      position: 'relative',
      zIndex: 2,
      color: 'white',
      maxWidth: '800px',
      padding: '20px',
    }}
  >
    <h1
      style={{
        fontSize: "clamp(2.2rem, 6vw, 4rem)",
        marginBottom: '20px',
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      Luxury Kashmir Experiences
    </h1>

    <p
      style={{
        fontSize: '1.2rem',
        lineHeight: 1.8,
      }}
    >
      Curated journeys through Srinagar, Gulmarg, Sonamarg and Pahalgam.
    </p>
  </div>
</section>

const packages = [


  {
    title: "Scenic Shikara Ride",

    image:
      "https://t4.ftcdn.net/jpg/06/78/77/91/360_F_678779128_fBE2MxGMKeCkbmKTLoQ11s0GG9hof6vR.jpg",
    description:
      "Complete Kashmir experience with Shikara Ride at famous Dal Lake.",
    highlights: [
      "Srinagar",
      "Gulmarg",
      "Mughal Gardens",
      "Pahalgam"
    ],
itinerary: [
  "✈️ Day 1: Arrival in Srinagar, airport pickup, luxury hotel check-in, evening Shikara ride on Dal Lake and overnight stay.",
  
  "🌷 Day 2: Full-day sightseeing of Mughal Gardens, Pari Mahal, Shankaracharya Temple and local Srinagar markets.",
  
  "🚡 Day 3: Excursion to Gulmarg, Gondola ride, snow activities (seasonal), scenic mountain views and leisure time.",
  
  "🏔️ Day 4: Journey to Pahalgam via saffron fields and apple orchards, followed by visits to Betaab Valley and Aru Valley.",
  
  "📸 Day 5: Explore Sonamarg, enjoy glacier views, river landscapes and photography opportunities before returning to Srinagar.",
  
  "👋 Day 6: Breakfast, last-minute shopping for Kashmiri handicrafts and transfer to Srinagar Airport for departure."
]
  },

  
  {
    title: "Kashmir Paradise Tour",
    image:
      "https://t4.ftcdn.net/jpg/03/62/19/27/360_F_362192710_3iIlgxQS78PoqysUTzdARNYeKFBaFxE9.jpg",

    description:
      "Experience the crown of India with luxury houseboat stays, peaceful Shikara rides, and breathtaking Himalayan valleys.",

    highlights: [
      "Luxury Houseboat Stay",
      "Gulmarg Gondola Ride",
      "Private Chauffeur Tour",
      "Traditional Wazwan Dinner"
    ],

itinerary: [
  "✈️ Day 1: Arrive at Srinagar Airport and receive a warm traditional welcome. Transfer to your luxury hotel or houseboat and enjoy a serene Shikara ride on the enchanting Dal Lake during sunset.",

  "🌷 Day 2: Discover the beauty of Srinagar with visits to Nishat Bagh, Shalimar Bagh, Chashme Shahi and the historic Shankaracharya Temple, followed by shopping in the vibrant local markets.",

  "🚡 Day 3: Embark on an unforgettable journey to Gulmarg. Experience the world-famous Gondola ride, admire breathtaking Himalayan views and enjoy snow activities during the winter season.",

  "🏔️ Day 4: Explore the picturesque valley of Sonamarg, known as the 'Meadow of Gold'. Enjoy scenic landscapes, glacier views, riverside photography and optional pony rides.",

  "🌲 Day 5: Travel to Pahalgam through saffron fields and apple orchards. Visit Betaab Valley, Aru Valley and Lidder River while soaking in Kashmir's natural beauty.",

  "👋 Day 6: Enjoy a leisurely breakfast, capture final memories, shop for authentic Kashmiri handicrafts and transfer to Srinagar Airport for your departure."
]
  },


  {
    title: "Kashmir Heritage Escape",

    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d",

    description:
      "Explore Kashmir's rich culture, historic gardens, ancient architecture and traditional lifestyle.",

    highlights: [
      "Mughal Gardens",
      "Old Srinagar Walk",
      "Kashmiri Culture",
      "Local Cuisine"
    ],

itinerary: [
  "✈️ Day 1: Arrive in Srinagar and check into your heritage-style accommodation. Enjoy an evening stroll along Dal Lake and experience the city's timeless charm.",

  "🏛️ Day 2: Explore the historic heart of Srinagar, including Jamia Masjid, Shah-e-Hamdan Shrine and the old city's traditional wooden architecture.",

  "🎭 Day 3: Immerse yourself in authentic Kashmiri culture through local crafts, carpet weaving demonstrations and interactions with skilled artisans.",

  "🛍️ Day 4: Visit traditional bazaars and handicraft centers renowned for Pashmina shawls, papier-mâché art and hand-knotted carpets.",

  "🍽️ Day 5: Enjoy a curated Kashmiri culinary experience featuring traditional Wazwan dishes and local delicacies prepared by expert chefs.",

  "👋 Day 6: Relax with a leisurely breakfast before your airport transfer, taking home unforgettable memories of Kashmir's rich heritage."
]
  },


  {
    title: "Valley of Dreams Expedition",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",

    description:
      "A scenic Kashmir journey covering forests, lakes, valleys and peaceful mountain landscapes.",

    highlights: [
      "Nature Walks",
      "Mountain Views",
      "Photography Spots",
      "Peaceful Stay"
    ],

itinerary: [
  "✈️ Day 1: Arrive in Srinagar and settle into your luxury accommodation. Enjoy a peaceful evening overlooking Dal Lake and the surrounding mountains.",

  "🌄 Day 2: Discover Kashmir's breathtaking landscapes through guided nature walks, lakeside exploration and scenic countryside drives.",

  "🏔️ Day 3: Venture into Gulmarg's alpine meadows, enjoy panoramic mountain views and experience the region's natural beauty.",

  "🌲 Day 4: Explore Pahalgam's pristine valleys, pine forests and riverside trails while capturing stunning photographs along the way.",

  "📸 Day 5: Visit hidden viewpoints, untouched landscapes and charming villages perfect for photography and peaceful relaxation.",

  "👋 Day 6: Enjoy your final morning in paradise before departing with unforgettable memories of Kashmir's dreamlike scenery."
]
  },


  {
    title: "A Full Tour of Kashmir Valley",

    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b",

    description:
      "Complete Kashmir experience covering famous destinations and hidden gems.",

    highlights: [
      "Srinagar",
      "Gulmarg",
      "Sonamarg",
      "Pahalgam"
    ],

itinerary: [
  "✈️ Day 1: Arrive in Srinagar, transfer to your hotel and enjoy a relaxing Shikara ride across the beautiful Dal Lake.",

  "🌷 Day 2: Explore Srinagar's iconic attractions including Mughal Gardens, Pari Mahal, Hazratbal Shrine and bustling local markets.",

  "🚡 Day 3: Visit Gulmarg and experience the famous Gondola ride, offering spectacular views of snow-capped Himalayan peaks.",

  "🏔️ Day 4: Journey to Sonamarg, the Meadow of Gold, and admire glaciers, rivers and breathtaking mountain landscapes.",

  "🌲 Day 5: Explore Pahalgam, including Betaab Valley, Aru Valley and Lidder River, surrounded by Kashmir's most picturesque scenery.",

  "👋 Day 6: Complete your Kashmir adventure with souvenir shopping and a comfortable transfer to Srinagar Airport."
]
  },


  {
    title: "Tour to Leh Ladakh",

    image:
      "https://t4.ftcdn.net/jpg/01/75/16/81/360_F_175168193_q20ClSiiKVOe36SjJywBDO0OFbMjXonE.jpg",

    description:
      "Experience high mountains, dramatic landscapes and the adventure of Ladakh.",

    highlights: [
      "Mountain Roads",
      "Monasteries",
      "Pangong Lake",
      "Adventure Experience"
    ],

itinerary: [
  "✈️ Day 1: Arrive in Leh and acclimatize to the high-altitude environment while enjoying the stunning mountain scenery surrounding the town.",

  "🏛️ Day 2: Visit Leh Palace, Shanti Stupa, Hall of Fame Museum and local monasteries while learning about Ladakh's unique culture and history.",

  "🏜️ Day 3: Journey through Khardung La Pass, one of the world's highest motorable roads, to reach the beautiful Nubra Valley.",

  "🐪 Day 4: Explore Nubra Valley's sand dunes, enjoy a camel safari and visit ancient monasteries nestled among dramatic landscapes.",

  "🌊 Day 5: Travel to the world-famous Pangong Lake, marvel at its crystal-clear waters and enjoy unforgettable lakeside views.",

  "👋 Day 6: Return to Leh, explore local markets and transfer to the airport with memories of one of India's most extraordinary destinations."
]
  }
];


export default function TourPackagesPage() {

 return (
  <div
    style={{
      minHeight: "80vh",
      padding: "80px 20px",
      background:
        "linear-gradient(180deg, #F8F5EF 0%, #F1EBDF 50%, #E8DFCF 100%)",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        color: "rgba(29, 58, 46, 0.9)",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "4rem",
        fontWeight: 700,
        marginBottom: "60px",
      }}
    >
      Luxury Kashmir Packages
    </h1>

    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
        gap: "30px",
      }}
    >
      {packages.map((pkg, index) => (
        <div
          key={index}
          style={{
            background: "#FFFFFF",
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(252, 3, 3, 0.08)",
            border: "1px solid rgba(176, 87, 87, 0.15)",
          }}
        >
          {/* Image Section */}
          <div
            style={{
              position: "relative",
              height: "320px",
              overflow: "hidden",
            }}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,.75), transparent)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "white",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                ✨ Premium Experience
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "white"
                }}
              >
                {pkg.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: "30px" }}>
            <p
              style={{
                color: "rgba(27, 58, 45, 0.9)",
                fontFamily: "'Lora', serif",
                lineHeight: "1.9",
                fontSize: "1.05rem",
                marginBottom: "25px",
              }}
            >
              {pkg.description}
            </p>

            {/* Highlights */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "30px",
              }}
            >
              {pkg.highlights?.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "#F7F3EC",
                    color: "#1B3A2D",
                    padding: "10px 16px",
                    borderRadius: "50px",
                    fontSize: "14px",
                    border: "1px solid #E8DFCF",
                  }}
                >
                  ✦ {item}
                </span>
              ))}
            </div>

            {/* Itinerary */}
            <h3
              style={{
                color: "#419252",
                marginBottom: "20px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
              }}
            >
              Itinerary
            </h3>

         <div>
  {pkg.itinerary.map((day, i) => (
    <div
      key={i}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px",
        padding: "12px 16px",
        background: "#F8F5EF",
        borderRadius: "12px",
      }}
    >
      <span style={{ fontSize: "20px" }}>📍</span>

      <span
        style={{
          color: "#4F463A",
          lineHeight: "1.8",
        }}
      >
        {day}
      </span>
    </div>
  ))}
</div>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "30px",
              }}
            >
    <Link to="/?service=tour#booking"
  style={{
    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "rgba(27, 58, 45, 0.9)",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    textAlign: "center",
    textDecoration: "none",
    }}
        >
          Book Now
          </Link>
            </div>
          </div>
        
      ))}
    </div>
  </div>
);
}