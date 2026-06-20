const packages = [
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
    minHeight:"100vh",
    padding:"120px 20px",
    background:"#F4EFE6"
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
          maxWidth:"1200px",
          margin:"auto",
          display:"grid",
          gap:"40px"
        }}
      >


      {packages.map((pkg,index)=>(


        <div
          key={index}
          style={{
            background:"#fff",
            borderRadius:"25px",
            padding:"22px",
            boxShadow:"0 15px 35px rgba(0,0,0,0.08)"
          }}
        >


          <img
            src={pkg.image}
            alt={pkg.title}
            style={{
              width:"60%",
              height:"200px",
              objectFit:"cover",
              borderRadius:"20px"
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
{pkg.title}
</h2>


<p
style={{
  color:"#5E564C",
  fontFamily:"'Lora', serif",
  lineHeight:"2",
  fontSize:"1.15rem",
  marginTop:"18px"
}}
>
{pkg.description}
</p>


          <h3
  style={{
    color:"#B08D57",
    fontFamily:"'Cormorant Garamond', serif",
    fontSize:"2rem",
    marginTop:"35px",
    fontWeight:700
  }}
>
  Highlights
</h3>

          <ul>
            {pkg.highlights.map((item,i)=>(

              <li key={i}>{item}</li>

            ))}
          </ul>



<h3
  style={{
    color:"#B08D57",
    fontFamily:"'Cormorant Garamond', serif",
    fontSize:"2rem",
    marginTop:"35px",
    fontWeight:700
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
      padding:"14px 0",
      margin:"0",
      borderBottom:"1px solid rgba(176,141,87,0.25)"
    }}
  >
    <b
      style={{
        color:"#B08D57",
        fontFamily:"'Cormorant Garamond', serif",
        fontSize:"1.4rem"
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