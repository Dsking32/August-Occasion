import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Team from "../components/Team.jsx";
import { brand, portfolio } from "../data/site.js";

export default function Portfolio() {
  return (
    <>
      <PageHero title="Portfolio" text="The team, the bar and the occasions we serve." image={brand.group} />
      <Team />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><h2 className="text-4xl md:text-6xl">From our bar</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {portfolio.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.1}>
                <figure className="zoom relative overflow-hidden bg-mist">
                  <img src={p.image} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-royal/90 to-transparent p-6 font-serif text-3xl text-white">{p.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
