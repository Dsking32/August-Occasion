import Reveal from "./Reveal.jsx";
import { brand } from "../data/site.js";

export default function Team() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-3xl text-4xl md:text-6xl">The people behind your occasion</h2>
          <p className="mt-5 max-w-xl text-royal/70">One team plans the menu, builds the bar and serves your guests, so every detail is handled by people who know it.</p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-8">
            <div className="zoom frame overflow-hidden">
              <img src={brand.group} alt="The August Occasions team in matching branded t-shirts" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4">
            <div className="zoom h-full overflow-hidden">
              <img src={brand.portrait} alt="Portrait of the August Occasions lead in a branded print dress" loading="lazy" className="h-full min-h-[420px] w-full object-cover object-top" />
            </div>
          </Reveal>
          <Reveal className="self-center md:col-span-5">
            <p className="font-serif text-4xl italic text-violet md:text-5xl">...attaching importance</p>
            <p className="mt-5 max-w-md text-royal/70">That is how we work. Your event matters, so the drinks, the setup and the service all get the same care.</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <div className="zoom overflow-hidden">
              <img src={brand.four} alt="Four members of the August Occasions team" loading="lazy" className="aspect-[5/3] w-full object-cover object-top" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
