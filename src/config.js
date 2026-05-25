// ============================================================
// 💍 WEDDING INVITATION — EDIT YOUR DETAILS HERE
// ============================================================

export const WEDDING = {
  // --- Couple ---
  partner1: "Oreoluwa",
  partner2: "Olamide",
  tagline: "invite you to celebrate their wedding",

  // --- Dates ---
  weddingDate: "Saturday 05 September 2026", // Display string
  weddingDateISO: "2026-09-05", // For countdown timer

  // --- Venue ---
  venue: {
    name: "Château de Montclair",
    address: "Route des Vignes, 13210",
    city: "Saint-Remy-de-Provence, France",
    description:
      "A Provencal château of elegance and tradition, ideal for an outdoor reception.",
    mapsUrl:
      "https://maps.google.com/?q=Chateau+de+Montclair+Saint-Remy-de-Provence",
    directionsUrl:
      "https://maps.google.com/dir/?api=1&destination=Chateau+de+Montclair+Saint-Remy-de-Provence",
    // Replace with your venue image URL or import a local file
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },

  // --- Schedule ---
  programme: [
    {
      day: "Day 1",
      date: "30 May 2026",
      events: [
        {
          time: "2:00 PM",
          title: "Civil Ceremony",
          location:
            "Town Hall of Saint-Remy-de-Provence\nPlace Jules-Pelissier 13210 Saint-Remy-de-Provence",
        },
      ],
    },
    {
      day: "Day 2",
      date: "31 May 2026",
      events: [
        { time: "11:00 AM", title: "Guest Arrival" },
        { time: "12:00 PM", title: "Ceremony" },
        {
          time: "1:30 PM",
          title: "Couple's Exit",
          location: "Room and marquee opening",
        },
        {
          time: "5:30 PM",
          title: "Cocktail Hour",
          location: "Outdoor & entertainment",
        },
        { time: "7:30 PM", title: "Dinner" },
        { time: "11:00 PM", title: "Evening Dance" },
      ],
    },
  ],

  // --- Menu ---
  menu: {
    courses: [
      {
        icon: "🥗",
        title: "Starter",
        items: [
          "Butternut soup with toasted hazelnuts",
          "Salmon tartare with avocado and lime",
        ],
      },
      {
        icon: "🍽️",
        title: "Main",
        items: [
          "Roasted beef fillet with thyme jus",
          "Truffled mashed potatoes & seasonal vegetables",
        ],
      },
      {
        icon: "🍰",
        title: "Dessert",
        options: ["Vanilla mousse with red fruits", "Lemon meringue tart"],
      },
    ],
    note: "Please let us know your preferences or food allergies via the RSVP form.",
  },

  // --- Important Notes ---
  notes: [
    {
      icon: "📷",
      title: "Photos & Mementos",
      text: "We'd love for you to capture some memories of the day. Please feel free to share your photos with us afterwards.",
    },
    {
      icon: "📵",
      title: "Phones During Ceremony",
      text: "To fully enjoy the moment, please keep phones discreet during the ceremony.",
    },
    {
      icon: "💛",
      title: "Shared Moments",
      text: "Your presence is the greatest gift. If you'd like to give something extra, a gift list will be available on the day.",
    },
    {
      icon: "🌿",
      title: "Spirit of the Day",
      text: "Leave your watches aside, enjoy the moment and come celebrate this intimate and memorable day.",
    },
  ],

  // --- RSVP ---
  rsvp: {
    enabled: true,
    deadline: "15 April 2026",
    // Replace with your form URL (Tally, Typeform, Formspree, etc.)
    formUrl: "https://tally.so/r/yourformid",
    email: "amara.ethan.mariage@gmail.com",
  },

  // --- Studio / Branding ---
  studio: {
    name: "",
    url: "",
  },
};
