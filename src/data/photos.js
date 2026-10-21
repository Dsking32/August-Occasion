// Every photo slot on the site. Save your photo as public/images/<slot>.webp (or .jpg / .png) and it is used automatically.
// `fallback` shows only until that file exists, so nothing ever looks broken.
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;
const A = u("photo-1547595429-da06b6a5080a");
const B = u("photo-1642821369701-c86f8200efec");
const C = u("photo-1594756202413-cd5a309ecfd1");
const D = u("photo-1723691805053-5f4747f5021d");
const E = u("photo-1642130468651-5518a2bed76c");

export const photos = {
  "hero-cocktail-bar": { query: "luxury cocktail bar candlelight cocktails", orientation: "landscape", alt: "Three passion fruit cocktails in tulip glasses on the bar", fallback: A },
  "experience-bartender": { query: "professional bartender preparing cocktails", orientation: "landscape", alt: "Creamy cocktails served in pineapple-shaped holders with blueberry garnish", fallback: C },
  "experience-bar-setup": { query: "elegant mobile bar setup", orientation: "landscape", alt: "Three orange cocktails with grapefruit and passion fruit garnish", fallback: A },
  "occasion-wedding": { query: "luxury wedding reception", orientation: "portrait", alt: "An elegant wedding reception", fallback: E },
  "occasion-corporate": { query: "corporate cocktail event", orientation: "portrait", alt: "Guests at a corporate cocktail event", fallback: B },
  "occasion-private-party": { query: "cocktail party guests celebrating", orientation: "portrait", alt: "Guests celebrating with colourful drinks", fallback: D },
  "occasion-product-launch": { query: "product launch event", orientation: "portrait", alt: "A stylish product launch event", fallback: C },
  "occasion-dinner": { query: "candlelight dinner flowers", orientation: "portrait", alt: "An elegant private dinner with candles and flowers", fallback: B },
  "signature-cocktails": { query: "cocktail photography stone surface", orientation: "portrait", alt: "Three passion fruit cocktails garnished with rosemary, served on a tray", fallback: B },
  "drink-purple-cocktail": { query: "purple cocktail coupe glass", orientation: "squarish", alt: "Creamy cocktails served in pineapple-shaped holders with blueberry garnish", fallback: C },
  "drink-citrus-mocktail": { query: "citrus mocktail lime mint ice", orientation: "squarish", alt: "Two bright red cocktails garnished with carved cucumber", fallback: D },
  "gallery-event-bar": { query: "luxury bar lights", orientation: "portrait", alt: "A beautifully lit event bar", fallback: A },
  "gallery-celebration": { query: "luxury event candles table flowers", orientation: "portrait", alt: "Rows of coupe glasses with cherry garnish at an event bar, surrounded by flowers", fallback: B },
  "gallery-cocktail": { query: "garnished cocktail close up", orientation: "portrait", alt: "Three green cocktails with berry and dried citrus garnish", fallback: C },
  "gallery-toast": { query: "cocktail party toast glasses", orientation: "portrait", alt: "Guests raising glasses at a celebration", fallback: C },
  "gallery-bartender": { query: "bartender preparing drinks", orientation: "portrait", alt: "A bartender preparing drinks at an event", fallback: E },
  "cta-floral-detail": { query: "luxury floral arrangement purple", orientation: "landscape", alt: "Moody purple floral detail", fallback: D },
  "testimonial-event": { query: "celebration elegant event guests", orientation: "portrait", alt: "An elegant candlelit event table with white flowers and greenery", fallback: D },
  "footer-background": { query: "cocktail bar purple lighting", orientation: "landscape", alt: "", fallback: A },
};
