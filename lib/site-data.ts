type Product = {
  name: string;
  price: string;
  note: string;
  description: string;
  images: [string, ...string[]];
};


export const siteData = {
  brand: {
    name: "Onward & Upward Services",
    tagline:
      "Landscaping, excavation, and tree/debris removal for Hot Springs and nearby communities.",
    logo: "/images/logo.png",
  },

  contact: {
  phone: "(501) 446-0376",
  email: "rebeccaturner220144@gmail.com",
  address: "1499 Amity Rd, Hot Springs, AR 71913",
  serviceArea: "Hot Springs, Glenwood, and surrounding Arkansas communities",
},

contacts: [
  {
    name: "Justyn Sheets",
    role: "For quotes & job questions",
    phone: "(501) 446-0376",
  },
  {
    name: "Rebecca Turner",
    role: "For scheduling & availability",
    phone: "(620) 687-1126",
  },
],

  hero: {
    eyebrow: "Get Ready for garden season!",
    headline: "Onward & Upward Services provides professional landscaping services in Hot Springs, AR.",
    body:
      "What makes us different is our mission. We’re committed to helping individuals stay sober, rebuild their lives, and find stable work through honest, hands-on service. “Onward and Upward” isn’t just a name, it’s about moving forward, creating opportunities, and building something better for the future.",
    image: "/images/hero.png",
  },

  services: [
    {
      title: "Landscaping",
      text: "Beds, mulch, cleanup, grading, and full landscape refresh work.",
      image: "/images/services/landscaping2.png",
      alt:"Landscaping in Hot Springs Ar"
    },
    {
      title: "Excavation",
      text: "Site prep, dirt work, drainage, and property shaping.",
      image: "/images/services/landscaping1.png",
      alt:"landscaping in hotsprings AR"
    },
    {
      title: "Tree & Debris Removal",
      text: "Storm cleanup, haul-off, and full debris removal.",
      image: "/images/services/removal1.png",
      alt:"tree and dirt removal in Hot Springs AR"
    },
  ],

  gallery: [
    {
      title: "Driveway cleanup",
      before: "/images/gallery/before1.png",
      after: "/images/gallery/after1.png",
      alt:"driveway cleanup in hot springs Ar"
    },
    {
      title: "Brush cleanup",
      before: "/images/gallery/before3.jpg",
      after: "/images/gallery/after3.jpg",
      alt:"brush cleanup and landscaping in hot springs ar"
    },
    {
      title: "Seasonal planting",
      before: "/images/gallery/before4.jpg",
      after: "/images/gallery/after4.jpg",
      alt:"planting in clark county ar"
    },
  ],

  seasonalItems: [
    {
      name: "Featured plants",
      description:
        "Seasonal flowers, shrubs, and planting options available now.",
      image: "/images/gallery/plant1.png",
      tag: "Seasonal",
      alt:"plants available in hot springs ar"
    },
    {
      name: "Soil & mulch",
      description:
        "Supersoil blends, mulch, and bed prep materials available for pickup or delivery.",
      image: "/images/gallery/mulch2.png",
      tag: "Best seller",
      alt:"soil and much delivery in hot springs ar"
    },
    {
      name: "Garden add-ons",
      description:
        "Containers, edging, and extras to complete your landscape.",
      image: "/images/gallery/plant3.jpg",
      tag: "New",
      alt:"garden supplies in hot springs ar"
    },
  ],
seasonalIntro: {
  eyebrow: "More than just seasonal",
  title: "Products that stay available all year.",
  body:
    "Some materials rotate with the season, but others stay available for ongoing projects, cleanup, and landscape work.",
},


  products: [
  {
    name: "Compost & Manure Blend",
    price: "$40 / yard",
    note: "Pickup or delivery",
    description:
      "Premium soil blends for gardens, beds, and landscape projects. Great for ongoing use and bigger installs.",
    images: [
  "/images/products/compostandmanure.jpeg",
  "/images/products/compostandmanure2.jpeg",
  
  ],
  },
  {
    name: "Compost, Manure & Sandy Loam Blend",
    price: "$45 / yard",
    note: "Available year-round",
    description:
      "Clean mulch options for moisture control, weed suppression, and a finished landscape look.",
    images: [
  "/images/products/compmanloam.jpeg",
  "/images/products/compmanloam2.jpeg",
  
    ],
  },
  
  {
    name: "Supersoil Blend",
    price: "$65 / yard",
    note: "Project-based material",
    description:
      "Helpful for driveways, drainage, grading, and site prep. Perfect for larger property work.",
    images: [
  "/images/products/supersoil.jpeg",
  "/images/products/supersoil2.jpeg",
  
    ],
  },

],
  reviews: [
    {
      name: "Tom",
      quote:
        "I really apprecate honesty and good folks, they have it.",
      image: "/images/reviews/review1.png",
      source: "Facebook",
    },
    {
      name: "Crystal",
      quote:
        "Super easy to work with and very fair pricing. Definitely recommend.",
      image: "/images/reviews/review2.png",
      source: "Facebook",
    },
    {
      name: "Your Review Here!",
      quote:
        "More Revies Coming Soon!",
      image: "/images/reviews/review-3.png",
      source: "Facebook",
    },
  ],
};