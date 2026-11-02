export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const brand = {
  logo: "/images/logo-full.png",
  logoNav: "/images/logo-nav-white.png",
  group: "/images/team-group.jpg",
  four: "/images/team-four.jpg",
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
  { title: "Scope of the event", text: "We propose the best drinks service for your event, then refine it with you." },
  { title: "Approve the invoice and confirm your booking", text: "Agree the details of the preferred service and secure the date." },
  { title: "Enjoy your event", text: "Our team sets up your event, serves and ensures every guest is taken care of." },
];

// Add real client reviews here: { name, event, text }. The home page shows a brand statement until you do.
export const reviews = [];

// Social profiles shown in the footer. CHECK THESE HANDLES and change them to the real accounts.
export const social = [
  { label: "Instagram", href: "https://www.instagram.com/augustoccasions" },
  { label: "TikTok", href: "https://www.tiktok.com/@augustoccasions" },
];

export const contact = {
  email: "", // add the real business email here; it stays hidden while empty
  phone: "+234 905 757 5710",
  city: "Lagos, Nigeria",
};

// WhatsApp number in international format, digits only (no + or spaces).
export const whatsapp = {
  number: "2349057575710",
  message: "Hello August Occasions! I’d like to plan an event.",
};

export const waUrl = (text = whatsapp.message) =>
  whatsapp.number ? `https://wa.me/${whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}` : "";

export const googleReviewUrl = "https://www.google.com/search?q=August+Occasions+Lagos+reviews";
