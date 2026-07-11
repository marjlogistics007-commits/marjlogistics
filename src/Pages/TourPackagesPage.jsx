import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const packages = [


  {
    title: "Scenic Shikara Ride",
    duration: "4 Days/3 Nights",

    image:
      "https://t4.ftcdn.net/jpg/06/78/77/91/360_F_678779128_fBE2MxGMKeCkbmKTLoQ11s0GG9hof6vR.jpg",
    description:
      "Complete Kashmir experience with Shikara Ride at famous Dal Lake.",
    highlights: [
      "Srinagar",
      "Mughal Gardens",
      "Gulmarg",
    ],
itinerary: [
  {
    title: "Arrival in Srinagar",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800",
    details:
      "Airport pickup, hotel check-in, evening Shikara ride on Dal Lake and overnight stay."
  },
  {
    title: "Explore Srinagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5Y7xBWsbXLr96VVXHBSPtbSLzZDdMoMYBEfW7g4GBA&s=10",
    details:
      "Visit Mughal Gardens, Pari Mahal, Shankaracharya Temple and local markets."
  },
  {
    title: "Excursion to Gulmarg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mf6GEcwytg1zaydofyj1TEn-QNGhRF2EW2WW1Wcx6w&s=10",
    details:
      "Gondola ride, snow activities and scenic Himalayan views."
  },
  {
    title: "Departure",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjzH2Z7dj_xKl87jrQt2xkannkL0lJ50_uDXElLFEQw&s=10",
    details:
      "Breakfast, shopping and airport transfer."
  }
]
  },

  
  {
    title: "Kashmir Paradise Tour",
    duration: "6 Days / 5 Nights",
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
  {
    title: "Arrival in Srinagar & Shikara Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0LfvcGaJ1uVjoHtfU02J-fo6GSekWFu76LIwHfihiQ&s=10",
    details:
      "Arrive at Srinagar Airport where our representative will welcome you. Transfer to your deluxe hotel. After check-in and refreshments, enjoy a peaceful Shikara ride on the iconic Dal Lake while admiring floating gardens, houseboats, and the beautiful sunset. Overnight stay in Srinagar."
  },

  {
    title: "Mughal Gardens & Srinagar Sightseeing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KABJdHp0dSIUWkT_RZkcT-T7DVSeTA3EEgQ_JeBptw&s=10",
    details:
      "After breakfast, explore Srinagar's famous Mughal Gardens including Nishat Bagh, Shalimar Bagh and Chashme Shahi. Visit Pari Mahal, Shankaracharya Temple and Hazratbal Shrine. Spend the evening shopping for authentic Kashmiri handicrafts, dry fruits and Pashmina shawls. Overnight stay in Srinagar."
  },

  {
    title: "Full-Day Excursion to Gulmarg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mf6GEcwytg1zaydofyj1TEn-QNGhRF2EW2WW1Wcx6w&s=10",
    details:
      "Travel to Gulmarg, one of Kashmir's most beautiful hill stations. Experience the world-famous Gondola Cable Car, enjoy breathtaking Himalayan views and participate in snow activities during winter. Return to Srinagar in the evening for an overnight stay."
  },

  {
    title: "Explore the Beauty of Pahalgam",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFsHeD4Lpy5T7kNZffLNfVvwhzaRKV5ImQXTJwl8mxg&s=10",
    details:
      "Drive through saffron fields, apple orchards and picturesque villages to Pahalgam. Visit Betaab Valley, Aru Valley and Lidder River while enjoying the serene mountain landscapes. Spend quality time amidst nature before returning to Srinagar for the night."
  },

  {
    title: "Day Trip to Sonamarg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeqcwkuYwZM4MywtQLBI2vfdc_21Aa1xZk4NQfg8L3A&s=10",
    details:
      "After breakfast, head towards Sonamarg, known as the 'Meadow of Gold'. Witness magnificent glaciers, lush green meadows and crystal-clear rivers. Optional pony rides are available to Thajiwas Glacier. Return to Srinagar in the evening and enjoy your final night in Kashmir."
  },

  {
    title: "Departure from Srinagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjzH2Z7dj_xKl87jrQt2xkannkL0lJ50_uDXElLFEQw&s=10",
    details:
      "Enjoy breakfast at the hotel, complete your check-out and spend some time shopping for Kashmiri souvenirs if time permits. Our driver will transfer you comfortably to Srinagar Airport for your onward journey with unforgettable memories of Kashmir."
  }
]
  },


  {
    title: "Kashmir Heritage Escape",
    duration: "6 Days / 5 Nights",

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
  {
    title: "Arrival in Srinagar & Shikara Ride",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisktU_TOWhhXLKF389TgRcGkYgWGezKG2fixUOAjArg&s=10",
    details:
      "Arrive at Srinagar Airport and receive a warm welcome from our representative. Transfer to your hotel or traditional houseboat for check-in and relax after your journey. In the evening, enjoy a peaceful Shikara ride on the beautiful Dal Lake, admiring the floating gardens, houseboats and breathtaking Himalayan scenery. Overnight stay in Srinagar."
  },

  {
    title: "Heritage & Spiritual Tour of Srinagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFo_zt-zAW08IJdOx4T8OEnmEAoLrk7gXnCfqUnvH6yQ&s=10",
    details:
      "After breakfast, begin your heritage tour with a visit to the historic Jamia Masjid, renowned for its magnificent Indo-Saracenic architecture. Continue to the revered Dargah Hazratbal on the banks of Dal Lake, followed by a visit to the ancient Shankaracharya Temple, offering spectacular panoramic views of Srinagar. Later, explore the old city and local handicraft markets before returning to your hotel. Overnight stay in Srinagar."
  },

  {
    title: "Excursion to Doodhpathri",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bDvc5VkUUXNRwILKKLe0QHy32eyS9hcW6pl1rMdbEA&s=10",
    details:
      "After breakfast, drive to the picturesque valley of Doodhpathri, famous for its lush green meadows, crystal-clear streams and tranquil atmosphere. Enjoy nature walks, photography and leisure time amidst the breathtaking landscapes before returning to Srinagar for an overnight stay."
  },

  {
    title: "Full-Day Excursion to Gulmarg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iOWpfpbe0Fm4610WJM7qQTgDp_p_Jncubv75vzSttw&s=10",
    details:
      "Proceed to Gulmarg after breakfast and experience one of Kashmir's most beautiful hill stations. Enjoy the famous Gulmarg Gondola cable car, panoramic Himalayan views and seasonal snow activities before returning to Srinagar in the evening."
  },

  {
    title: "Kaman Aman Setu Bridge",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLzepeWUiD3pvb6lxDxMEV4No8HZkCOzQ0-O9jRclrw&s=10",
    details:
      "After breakfast, visit the historic Kaman Aman Setu Bridge near the Line of Control, known as the Peace Bridge. Returning to Srinagar for your final overnight stay."
  },

  {
    title: "Departure from Srinagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JebIfiC6K5Q3BBvcofz8YMbPs2hzXzBsqYQKfM-lhw&s=10",
    details:
      "Enjoy breakfast and check out from your hotel. If time permits, shop for authentic Kashmiri handicrafts, saffron, dry fruits and souvenirs before being transferred to Srinagar Airport for your onward journey with unforgettable memories of Kashmir."
  }
]
  },


  {
    title: "Valley of Dreams Expedition",
    duration: "5 Days / 4 Nights",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNQsARepen-7NjO_oM8-d76fz-nqNjNPrhQTIGz0USA&s=10",
    description:
      "A scenic Kashmir journey covering forests, lakes, valleys and peaceful mountain landscapes.",

    highlights: [
      "Nature Walks",
      "Mountain Views",
      "Photography Spots",
      "Peaceful Stay"
    ],

itinerary: [
  {
    title: "Arrival in Srinagar & Local Sightseeing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZs1hf88lx_QbbxOEQFB8O6Gn_xZcGj014au-rNxJZA&s=10",
    details:
      "Arrive at Srinagar Airport and receive a warm welcome from our representative. Transfer to your hotel and relax before exploring Srinagar's famous attractions including Dal Lake, Mughal Gardens, Pari Mahal and the bustling local markets. In the evening, enjoy a peaceful Shikara ride on Dal Lake before returning to your hotel for an overnight stay."
  },

  {
    title: "Sonamarg & Thajiwas Glacier",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0np8vDunQ9ndNqJLGZdVAkAP7WuCQr6c9Vb2LJ6-4hw&s=10",
    details:
      "After breakfast, proceed to the breathtaking valley of Sonamarg, known as the 'Meadow of Gold'. Enjoy spectacular views of snow-capped mountains, lush meadows and the Sindh River. Take an optional pony ride to the famous Thajiwas Glacier and capture unforgettable photographs before returning to Srinagar for an overnight stay."
  },

  {
    title: "Gulmarg Excursion",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wvAoY2L_TUtrfEUn7wMbK3xshPnnU2LtmDvMyB9scQ&s=10",
    details:
      "After breakfast, travel to Gulmarg, one of Kashmir's most scenic hill stations. Experience the world-famous Gulmarg Gondola, admire panoramic Himalayan views and enjoy optional snow activities during winter. Spend the day surrounded by breathtaking alpine landscapes before returning to Srinagar."
  },

  {
    title: "Pahalgam Sightseeing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzEJbMpJprnjlTDzGTTpmHxDNSPkYdm3gyQkMn4zsIA&s=10",
    details:
      "After breakfast, drive through saffron fields and picturesque villages to Pahalgam. Visit the beautiful Betaab Valley, Aru Valley and the Lidder River while enjoying Kashmir's stunning natural beauty. Relax amidst the peaceful surroundings before returning to Srinagar for your final overnight stay."
  },

  {
    title: "Departure from Srinagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmT3w7QQjwKt3KbY2FZTQg5U5SOn-IrUih-eh531VdrQ&s=10",
    details:
      "Enjoy breakfast at your hotel before checking out. If time permits, shop for authentic Kashmiri handicrafts, saffron and dry fruits in the local markets before being transferred to Srinagar Airport for your onward journey, carrying unforgettable memories of Kashmir's enchanting valleys."
  }
]
  },


  {
    title: "A Full Tour of Kashmir Valley",
    duration: "8 Days / 7 Nights",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaRxVreQvSk9Cw5vOfzBrxoorVtn1sOPSDk_N4Wkigw&s",

    description:
      "Complete Kashmir experience covering famous destinations and hidden gems.",

    highlights: [
      "Srinagar",
      "Gulmarg",
      "Sonamarg",
      "Pahalgam"
    ],

itinerary: [
  {
    title: "Arrival in Srinagar & Local Sightseeing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNcuUoGsImMAj4XwarUHpDnJ2tQa_umR42YSVdZtkVw&s=10",
    details:
      "Arrive at Srinagar Airport and receive a warm welcome from our representative. Transfer to your hotel and relax before exploring Srinagar's famous attractions including Dal Lake, a relaxing Shikara ride, Pari Mahal, Hazratbal Shrine and the vibrant local markets. Overnight stay in Srinagar."
  },

  {
    title: "Gulmarg Excursion & Overnight Stay",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2JyWfo9x46Wrn7Ne581K7RCZ9sxz_sb2fszyFDT1OA&s=10",
    details:
      "After breakfast, drive to Gulmarg, Kashmir's most famous hill station. Enjoy breathtaking Himalayan views, experience the world-renowned Gulmarg Gondola cable car and indulge in seasonal snow activities. Spend the evening amidst the serene mountain landscape and enjoy an overnight stay in Gulmarg."
  },

  {
    title: "Sonamarg Excursion",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVc5h4cg-PSNTBc3EXR_L4LkEpaCfrY13LpcVA7TykLQ&s=10",
    details:
      "After breakfast, travel to the beautiful valley of Sonamarg, popularly known as the 'Meadow of Gold'. Enjoy spectacular mountain scenery, lush green meadows and an optional pony ride to the famous Thajiwas Glacier. Overnight stay in Sonamarg surrounded by nature's beauty."
  },

  {
    title: "Pahalgam",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOt3k-Oh2dvnHagcVOFjsBHtGjHRNHGzAewpphGeb4w&s=10",
    details:
      "Proceed to the picturesque town of Pahalgam after breakfast. Explore the breathtaking Betaab Valley, Aru Valley and the Lidder River while enjoying the peaceful natural surroundings. Later in the evening, return to Srinagar for an overnight stay."
  },

  {
    title: "Doodhpathri Excursion",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA_jtzQUtTlOtbjrTbjSBwnohhFsQalOv_LNVldjgOA&s=10",
    details:
      "After breakfast, visit the scenic valley of Doodhpathri, known for its lush green meadows, crystal-clear streams and tranquil atmosphere. Enjoy nature walks, photography and leisure time before returning to Srinagar for an overnight stay."
  },

  {
    title: "Kaman Aman Setu Bridge",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxS1Kl3UFR2t_a6aOM_lP16czYfAGN7TSk85iONzZoA&s=10",
    details:
      "After breakfast, embark on a scenic drive to the historic Kaman Aman Setu Bridge near the Line of Control. Learn about the bridge's historical significance while enjoying magnificent views of the surrounding mountains and valleys. Return to Srinagar for an overnight stay."
  },

  {
    title: "Mughal Gardens & Shopping",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijU93t8qwWkF8IssUxNJdgXlejbG1AvD9NGTvYcUR9A&s=10",
    details:
      "Spend the day exploring Srinagar's world-famous Mughal Gardens including Nishat Bagh, Shalimar Bagh and Chashme Shahi. Visit the beautiful Tulip Garden (seasonal) and enjoy shopping for authentic Kashmiri handicrafts, Pashmina shawls, saffron, dry fruits and souvenirs. Overnight stay in Srinagar."
  },

  {
    title: "Departure from Srinagar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbtc0s4Ef56jl8Fcw7IRenytz6YwswyYQy2kcdeOqtw&s",
    details:
      "After breakfast, check out from your hotel and enjoy some free time depending on your flight schedule. Our representative will transfer you comfortably to Srinagar Airport for your onward journey with unforgettable memories of the complete Kashmir Valley experience."
  }
]
  },


  {
    title: "Tour to Leh Ladakh",
    duration: "6 Days / 5 Nights",

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
  {
    title: "Arrival in Leh & Acclimatization",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKzfRTaTW7hu1SbvyTvKcS8B8IiLVE2vR1E6hjlIftQ&s=10",
    details:
      "Arrive at Kushok Bakula Rimpochee Airport, Leh, where our representative will welcome you. Transfer to your hotel and spend the day resting to acclimatize to Ladakh's high altitude. In the evening, take a leisurely walk around Leh Market and enjoy the serene mountain atmosphere. Overnight stay in Leh."
  },

  {
    title: "Leh Local Sightseeing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskdoARKPqfctPn8EcKWzlBA8rMzqGkEoBB57PIp_YeA&s=10",
    details:
      "After breakfast, visit the famous Shanti Stupa, Leh Palace and the Hall of Fame Museum. Continue to Gurudwara Pathar Sahib, Magnetic Hill and the scenic confluence of the Indus and Zanskar Rivers. Return to Leh for an overnight stay."
  },

  {
    title: "Leh to Nubra Valley via Khardung La",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXEl6v5UQzNsK1kpUyc5KuVOP3JuXF-Qxb8cFJ2O9oA&s=10",
    details:
      "Drive through the world-famous Khardung La Pass, one of the highest motorable roads in the world. Arrive in Nubra Valley and visit Diskit Monastery with its giant Maitreya Buddha statue. Enjoy a camel safari on the white sand dunes of Hunder before your overnight stay in Nubra Valley."
  },

  {
    title: "Pangong Lake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZU-EkpofD7_htXnOPrcpVzbg00jeUx3LAxiHcnOesCQ&s=10",
    details:
      "After breakfast, travel through the spectacular Shyok route to the breathtaking Pangong Lake. Witness the crystal-clear blue waters surrounded by majestic mountains and enjoy one of Ladakh's most iconic landscapes. Overnight stay at Pangong Lake."
  },

  {
    title: "Monasteries & Cultural Exploration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiafSb5hDYfVafRL9Nw_34k0v3cC6mP8VoR809Npr-g&s=10",
    details:
      "Spend the day exploring Ladakh's rich Buddhist heritage with visits to Hemis Monastery, Stakna Monastery and nearby traditional villages. Experience the local culture, cuisine and handicrafts before returning to Leh for your final overnight stay."
  },

  {
    title: "Departure from Leh",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbV5NsC758AVMNqHbP9NaJHWQ8-DhTFzZs_15twcAiKg&s=10",
    details:
      "After breakfast, check out from your hotel and transfer to Leh Airport for your onward journey. Depart with unforgettable memories of Ladakh's majestic mountains, pristine lakes, ancient monasteries and unique Himalayan culture."
  }
]
  }
];




export default function TourPackagesPage() {

 return (

  
  <div
  style={{
    minHeight: "80vh",
    padding: "80px 10px 100",
  }}

  >
   {/* Premium Hero Section */}
<div
  style={{
    position: "relative",
    height: "80vh",
    minHeight: "650px",
    borderRadius: "40px",
    overflow: "hidden",
    marginBottom: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img
    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?fm=jpg&q=100&w=3840"
    alt="Kashmir"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      animation: "heroZoom 30s ease-in-out infinite",
      transformOrigin: "center center",
      willChange: "transform",
      filter: "contrast(1.08) saturate(1.12) brightness(1.02)",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.45))",
    }}
  />
  <div
    style={{
      position: "relative",
      textAlign: "center",
      color: "#fff",
      maxWidth: "900px",
      padding: "20px",
      zIndex: 2,
    }}
  >
    <div
      style={{
        display: "inline-block",
        padding: "8px 20px",
        borderRadius: "999px",
        background: "rgba(255,255,255,.18)",
        backdropFilter: "blur(12px)",
        marginBottom: "25px",
        letterSpacing: "2px",
        fontSize: "14px",
      }}
    >
      ✨ PREMIUM KASHMIR EXPERIENCES
    </div>

    <h1
      style={{
        fontSize: "clamp(3rem,7vw,5.5rem)",
        fontFamily: "'Cormorant Garamond', serif",
        marginBottom: "25px",
        lineHeight: "1.1",
        color: "#fff",
      }}
    >
      Discover the Paradise
      <br />
      of Kashmir
    </h1>

    <p
      style={{
        fontSize: "1.4rem",
        lineHeight: "2",
        opacity: ".95",
        marginBottom: "40px",
        color: "#fa8585",
      }}
    >
      Luxury holidays, private sightseeing, premium hotels,
      houseboats, Shikara rides and unforgettable Himalayan
      adventures — carefully designed for families, couples,
      honeymooners and groups.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <Link
        to="/?service=tour#booking"
        style={{
          padding: "18px 36px",
          background: "#1B3A2D",
          color: "#fff",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Book Your Tour
      </Link>

      <Link
        to="/custom-itinerary"
        style={{
          padding: "18px 36px",
          background: "rgba(255,255,255,.18)",
          backdropFilter: "blur(12px)",
          color: "#fff",
          borderRadius: "50px",
          textDecoration: "none",
          border: "1px solid rgba(255,255,255,.3)",
        }}
      >
        Customize Tour
      </Link>
    </div>
  </div>
</div>

{/* Premium Quick Facts */}

<div
  style={{
    maxWidth: "1300px",
    margin: "0 auto 80px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "24px",
  }}
>
  {[
    {
      icon: "📅",
      title: "Duration",
      value: "4–8 Days",
    },
    {
      icon: "📍",
      title: "Destinations",
      value: "Srinagar • Gulmarg • Pahalgam • Sonamarg",
    },
    {
      icon: "🏨",
      title: "Hotels",
      value: "3★ • 4★ • 5★",
    },
    {
      icon: "🚗",
      title: "Transport",
      value: "Private Cab",
    },
    {
      icon: "🍽️",
      title: "Meals",
      value: "Breakfast & Dinner",
    },
    {
      icon: "🌸",
      title: "Best Season",
      value: "All Year Round",
    },
  ].map((item) => (
    <div
      key={item.title}
      style={{
        background: "rgba(255,255,255,.92)",
        backdropFilter: "blur(20px)",
        borderRadius: "28px",
        padding: "28px",
        textAlign: "center",
        boxShadow: "0 15px 40px rgba(0,0,0,.08)",
        border: "1px solid rgba(27,58,45,.08)",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          fontSize: "42px",
          marginBottom: "18px",
        }}
      >
        {item.icon}
      </div>

      <div
        style={{
          color: "#1B3A2D",
          fontWeight: "700",
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        {item.title}
      </div>

      <div
        style={{
          color: "#6b6258",
          lineHeight: "1.7",
          fontSize: "15px",
        }}
      >
        {item.value}
      </div>
    </div>
  ))}
</div>

   <div
  style={{
    maxWidth: "1400px",
    margin: "0 auto",
  }}
>
  {packages.map((pkg, index) => (
  <div
    key={index}
  style={{
    background: '#F4EFE6',
    borderRadius: "40px",
    overflow: "hidden",
    marginBottom: "80px",
    boxShadow: "0 20px 60px rgba(0,0,0,.08)",
    border: "1px solid rgba(27,58,45,.08)",
  }}
>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "45% 55%",
    gap: "40px",
    padding: "40px",
    alignItems: "start",
  }}
>
  {/* LEFT */}
  <div
    style={{
      position: "sticky",
      top: "100px",
    }}
  >
    <div
      style={{
        borderRadius: "28px",
        overflow: "hidden",
        height: "520px",
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
    </div>
  </div>

  {/* RIGHT */}
  <div>
    <div
      style={{
        display: "inline-block",
        background: "#F4F8F5",
        color: "#1B3A2D",
        padding: "8px 18px",
        borderRadius: "999px",
        fontSize: "13px",
        marginBottom: "18px",
      }}
    >
      ✨ Premium Experience
    </div>

    <h2
      style={{
        fontSize: "3rem",
        color: "#1B3A2D",
        fontFamily: "'Cormorant Garamond', serif",
        marginBottom: "20px",
      }}
    >
      {pkg.title}
    </h2>

    <p
      style={{
        color: "#5C5246",
        lineHeight: "1.9",
        fontSize: "17px",
        marginBottom: "30px",
      }}
    >
      {pkg.description}
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "16px",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          background: "#F7F8F7",
          padding: "16px",
          borderRadius: "16px",
        }}
      >
       📅 <strong>Duration</strong>
        <br />
        {pkg.duration}
      </div>

      <div
        style={{
          background: "#F7F8F7",
          padding: "16px",
          borderRadius: "16px",
        }}
      >
        🚗 <strong>Transport</strong>
        <br />
        Private Cab
      </div>

      <div
        style={{
          background: "#F7F8F7",
          padding: "16px",
          borderRadius: "16px",
        }}
      >
        🏨 <strong>Hotels</strong>
        <br />
        3★ / 4★ / 5★
      </div>

      <div
        style={{
          background: "#F7F8F7",
          padding: "16px",
          borderRadius: "16px",
        }}
      >
        🍽 <strong>Meals</strong>
        <br />
        Breakfast & Dinner
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "35px",
      }}
    >
      {pkg.highlights.map((item) => (
        <span
          key={item}
          style={{
            padding: "10px 16px",
            background: "#F4F8F5",
            borderRadius: "30px",
            border: "1px solid #DCE8DF",
            color: "#1B3A2D",
          }}
        >
          ✓ {item}
        </span>
      ))}
    </div>

    <Link
      to="/?service=tour#booking"
      style={{
        display: "inline-block",
        padding: "16px 36px",
        background: "#1B3A2D",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "14px",
        fontWeight: "600",
      }}
    >
      Book This Tour
    </Link>
  </div>
</div>
           
{/* Day Wise Itinerary */}

<div
  style={{
    padding: "0 40px 40px",
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      color: "#1B3A2D",
      fontFamily: "'Cormorant Garamond', serif",
      marginBottom: "40px",
      textAlign: "center",
    }}
  >
    Day-wise Itinerary
  </h2>

  <div
    style={{
      position: "relative",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {/* Vertical Line */}
    <div
      style={{
        position: "absolute",
        left: "110px",
        top: "15px",
        bottom: "15px",
        width: "3px",
        background: "#1B3A2D",
      }}
    />

    {pkg.itinerary.map((day, index) => (
      <div
        key={index}
        style={{
          display: "grid",
          gridTemplateColumns: "90px 40px 1fr",
          gap: "25px",
          marginBottom: "35px",
          alignItems: "start",
        }}
      >
        {/* Day Number */}
        <div
          style={{
            textAlign: "right",
            fontWeight: "700",
            color: "#1B3A2D",
            fontSize: "18px",
            paddingTop: "10px",
          }}
        >
          DAY
          <br />
          {index + 1}
        </div>

        {/* Timeline Dot */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              background: "#1B3A2D",
              borderRadius: "50%",
              border: "4px solid #fff",
              boxShadow: "0 0 0 3px #1B3A2D",
              marginTop: "10px",
              zIndex: 2,
            }}
          />
        </div>

        {/* Day Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "22px",
            padding: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
            border: "1px solid rgba(27,58,45,.08)",
          }}
        >
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    gap: "25px",
    alignItems: "center",
  }}
>
  <img
    src={day.image}
    alt={day.title}
    style={{
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "18px",
    }}
  />

  <div>
    <h3
      style={{
        marginTop: 0,
        color: "#1B3A2D",
        fontSize: "1.5rem",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      {day.title}
    </h3>

    <p
      style={{
        color: "#555",
        lineHeight: "1.8",
        margin: 0,
      }}
    >
      {day.details}
    </p>
  </div>
</div>
        </div>
      </div>
    ))}
  </div>
</div>
            
            

       
          </div>
        
      ))}
    </div>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    marginBottom: "50px",
  }}
>
  <Link
    to="/custom-itinerary"
    className="btn-earth"
  >
    Request Custom Itinerary
  </Link>
</div>

  {/* Bottom Copyright Bar */}
  

<div
  style={{
    marginTop: "60px",
    padding: "10px 20px",
    borderTop: "1px solid rgba(27,58,45,0.12)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    background: '#1B3A2D',
    marginBottom: "0px",
    paddingBottom: "0px",
  }}
>
  <p
    style={{
      margin: 0,
      color: "#fefdf9",
      fontSize: "14px",
      fontWeight: 500,
    }}
  >
    © {currentYear} MARJ LOGISTICS PVT LTD. All rights reserved.
  </p>

  <Link
    to="/privacy-policy"
    style={{
      color: "#fefdf9",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
    }}
  >
    Privacy Policy
  </Link>
</div>
</div>

);
}


