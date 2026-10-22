export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const brand = {
  logo: "/images/logo-full.png",
  logoNav: "/images/logo-white.png",
  group: "/images/team-group.jpg",
  four: "/images/team-four.jpg",
  event: "/images/team-event.webp",
  portrait: "/images/portrait.jpg",
};

// Edit this to personalise the About page. Leave `name` empty to hide it.
export const ceo = {
  name: "",
  title: "Chief Executive Officer",
  bio: [
    "August Occasions is led with one idea at its centre: every occasion deserves to be taken seriously, and every guest deserves to feel looked after.",
    "From the first conversation to the last toast, our CEO sets the standard for the drinks we craft, the bars we style and the service our team delivers.",
  ],
};

export const process = [
  { title: "Send an inquiry", text: "Tell us the date, venue, guest count and the mood you want." },
  { title: "Shape the menu", text: "We propose drinks and a service plan, then refine it with you." },
  { title: "Confirm the booking", text: "Agree the details and secure your date." },
  { title: "Enjoy the night", text: "Our team sets up, serves and clears so you can host." },
];

// Add real client reviews here: { name, event, text }. The home page shows a brand statement until you do.
export const reviews = [];

// Add your real social profile URLs here, e.g. { label: "Instagram", href: "https://instagram.com/yourhandle" }.
export const social = [];

export const contact = {
  email: "", // add the real business email here; it stays hidden while empty
  phone: "+234 905 757 5710",
  city: "Lagos, Nigeria",
};

// Optional: link to her Google Business review page. When set, happy customers are invited to review her there too.
export const googleReviewUrl = "";

// WhatsApp number in international format, digits only (no + or spaces).
export const whatsapp = {
  number: "2349057575710",
  message: "Hello August Occasions! I’d like to plan an event.",
};

export const waUrl = (text = whatsapp.message) =>
  whatsapp.number ? `https://wa.me/${whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}` : "";
