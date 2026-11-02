const items = ["Drinks Service", "Cocktail Service", "Mobile Bar", "After-Party Entertainment", "Training & Internship", "Welcome Drinks"];

export default function Marquee() {
  const group = [...items, ...items];
  return (
    <div className="marquee overflow-hidden border-y border-white/10 bg-royal py-4 text-white" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0">
            {group.map((t, i) => (
              <li key={`${k}-${i}`} className="flex items-center font-serif text-xl italic text-white/90 sm:text-2xl">
                <span className="px-8">{t}</span><span className="h-1.5 w-1.5 rotate-45 bg-lilac/70" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
