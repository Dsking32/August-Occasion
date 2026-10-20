const items = ["Cocktails", "Exotic Drinks", "Weddings", "Corporate Events", "Private Parties", "Product Launches"];

export default function Marquee() {
  const group = [...items, ...items];
  return (
    <div className="marquee overflow-hidden bg-gradient-to-r from-plum via-violet to-coral py-4 text-white" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0">
            {group.map((t, i) => (
              <li key={`${k}-${i}`} className="flex items-center font-serif text-2xl italic sm:text-3xl">
                <span className="px-7">{t}</span><span className="h-5 w-px bg-white/50" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
