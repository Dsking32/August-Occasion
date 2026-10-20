import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { images, menu, menuCategories } from "../data/site.js";

export default function Menu() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? menu : menu.filter((m) => m.category === active);
  return (
    <>
      <PageHero title="Drinks menu" text="A sample of what we pour. Every menu is tailored to your event." image={images.cocktail} />
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter drinks">
            {menuCategories.map((c) => (
              <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
                className={`border px-5 py-2 text-sm transition-colors ${active === c ? "border-violet bg-violet text-white" : "border-royal/25 hover:border-violet"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((m) => (
              <article key={m.name} className="zoom">
                <div className="overflow-hidden"><img src={m.image} alt={m.name} loading="lazy" className="aspect-square w-full object-cover" /></div>
                <h3 className="mt-5 text-3xl">{m.name}</h3>
                <p className="mt-1 text-sm text-violet">{m.category}</p>
                <p className="mt-2 text-royal/70">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
