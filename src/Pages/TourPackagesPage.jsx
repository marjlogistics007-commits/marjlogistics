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
        fontSize: '4rem',
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
      "Srinagar arrival",
      "Explore Srinagar",
      "Visit Gulmarg",
      "Discover Mughal Gardens",
      "Explore Pahalgam",
      "Return journey"
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
      "Arrival in Srinagar and Dal Lake Shikara experience",
      "Srinagar gardens and local sightseeing",
      "Gulmarg mountain adventure and Gondola ride",
      "Sonamarg valley exploration",
      "Pahalgam scenic tour",
      "Departure with unforgettable memories"
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
      "Arrival and heritage introduction",
      "Historic Srinagar sightseeing",
      "Cultural village experience",
      "Local market exploration",
      "Traditional Kashmiri dinner",
      "Departure"
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
      "Arrival in Kashmir",
      "Lake and city exploration",
      "Gulmarg adventure",
      "Pahalgam valley visit",
      "Relaxation day",
      "Departure"
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
      "Srinagar arrival",
      "Explore Srinagar",
      "Visit Gulmarg",
      "Discover Sonamarg",
      "Explore Pahalgam",
      "Return journey"
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
      "Arrival in Leh",
      "Leh sightseeing",
      "Nubra Valley journey",
      "Pangong Lake visit",
      "Local exploration",
      "Departure"
    ]
  }
];


export default function TourPackagesPage() {

  return (

<div
style={{
  minHeight: "100vh",
  padding: "80px 20px",
  background: "linear-gradient(180deg, #F8F5EF 0%, #F1EBDF 50%, #E8DFCF 100%)"
}}
>

<h1
style={{
  textAlign:"center",
  color:"#1B3A2D",
  fontFamily:"'Cormorant Garamond', serif",
  fontSize:"4rem",
  fontWeight:700,
  letterSpacing:"1px",
  marginBottom:"60px"
}}
>
  Luxury Kashmir Packages
</h1>


      <div
        style={{
          maxWidth:"1000px",
          margin:"auto",
          display:"grid",
          gridTemplateColumns:"repeat(2, 1fr)",
          gap:"30px"
        }}
      >

        <div
  className="tour-grid"
  style={{
    maxWidth:"1200px",
    margin:"auto",
    display:"grid",
    gridTemplateColumns:"repeat(2, 1fr)",
    gap:"30px"
  }}
></div>


      {packages.map((pkg,index)=>(


        <div
          key={index}
     style={{
  background: '#aafedc',
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
  border: '1px solid rgba(0,0,0,0.05)',
}}
        >


          <img
            src={pkg.image}
            alt={pkg.title}
       style={{
  width: '100%',
  height: '280px',
  objectFit: 'cover',
}}
          />


<h2
style={{
    color:"#1B3A2D",
    fontFamily:"'Cormorant Garamond', serif",
    fontSize:"2rem",
    fontWeight:700,
    marginTop:"30px",
    letterSpacing:"0.5px"
}}
>
  <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
  <span>{pkg.duration}</span>
  <span>Best Seller</span>
</div>
<h3
  style={{
    fontSize: '2rem',
    fontFamily: "'Cormorant Garamond', serif",
    color: '#1B3A2D',
    padding: '24px',
  }}
>
  {pkg.title}
</h3>
</h2>


<p
style={{
  color:"#5E564C",
  fontFamily:"'Lora', serif",
  lineHeight:"2",
  fontSize:"1.15rem",
  marginTop:"18px",
  padding: '24px',
}}
>
{pkg.description}
<div
  style={{
    padding: '0 28px',
    marginBottom: '24px',
    display: 'grid',
    gap: '10px',
  }}
>
  {pkg.highlights?.map((item) => (
    <div
      key={item}
      style={{
        background: '#F8F5EF',
        padding: '10px 14px',
        borderRadius: '12px',
        color: '#1B3A2D',
        fontWeight: '500',
      }}
    >
      ✓ {item}
    </div>
  ))}
</div>
</p>

<h3
  style={{
    color:"#B08D57",
    fontFamily:"'Cormorant Garamond', serif",
    fontSize:"2rem",
    marginTop:"35px",
    fontWeight:700,
    padding: '24px', 
  }}
>
  Itinerary
</h3>

{pkg.itinerary.map((day,i)=>(

  <p
    key={i}
    style={{
      color:"#4F463A",
      fontFamily:"'Lora', serif",
      fontSize:"1.08rem",
      lineHeight:"1.9",
      padding:"14px 14px",
      margin:"0",
      borderBottom:"1px solid rgba(176,141,87,0.25)"
    }}
  >
    <b
      style={{
        color:"#B08D57",
        fontFamily:"'Cormorant Garamond', serif",
        fontSize:"1.1rem",
        padding: '24px', 
      }}
    >
      Day {i+1}:
    </b>{" "}
    {day}
  </p>

))}

        </div>


      ))}


      </div>


    </div>
  );
}