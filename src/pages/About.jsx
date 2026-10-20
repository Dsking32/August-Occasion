import { ClipboardList, Martini, Sparkles, Users, Wine } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Photo from "../components/Photo.jsx";
import FinalCTASection from "../components/FinalCTASection.jsx";
import { brand, ceo } from "../data/site.js";

const values = [
  { icon: Martini, title: "Crafted drinks", text: "Menus designed around your event and mixed to order." },
  { icon: Users, title: "Attentive service", text: "A team that looks after every guest, start to finish." },
  { icon: Sparkles, title: "Beautiful bars", text: "Setups that look as good as the drinks taste." },
];

const roles = [
  { icon: ClipboardList, title: "Planning", text: "We listen first, then shape the menu and the service plan around your event." },
  { icon: Wine, title: "Setup", text: "We arrive early and style the bar so it feels like part of your venue." },
  { icon: Users, title: "Service", text: "Friendly, skilled hands pour every drink and look after every guest." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>About <em className="text-lilac">August Occasions</em></>}
        text="Cocktails and exotic drinks, served with care. We are a Lagos drinks and event bar service built on one idea: attaching importance to every occasion."
      />

      {/* Leadership */}
      <section className="overflow-hidden bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal className="relative mx-auto w-full max-w-sm md:max-w-none">
            <span aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-violet/40" />
            <div className="relative overflow-hidden rounded-t-full bg-mist">
              <img src={brand.portrait} alt="Portrait of the CEO of August Occasions" width="813" height="1016" className="aspect-[4/5] w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-5 left-4 bg-violet px-5 py-3 text-white shadow-lg">
              {ceo.name && <p className="font-serif text-xl leading-tight">{ceo.name}</p>}
              <p className="text-xs tracking-wide text-white/85">{ceo.title}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-violet">Leadership</p>
            <h2 className="h-section mt-4">Meet our <em className="text-violet">CEO</em></h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              {ceo.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
            <p className="mt-8 font-script text-4xl text-violet">...attaching importance</p>
          </Reveal>
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-royal py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow text-lilac">Our Story</p>
              <h2 className="h-section mt-4">Every event has a purpose. The drinks should <em className="text-lilac">respect it.</em></h2>
              <div className="mt-6 space-y-4 leading-relaxed text-white/75">
                <p>August Occasions serves cocktails and exotic drinks at weddings, corporate events and private celebrations across Lagos. We design the menu, bring the bar and serve with care.</p>
                <p>Our name says what we believe. Whether it is an intimate dinner or a grand celebration, we attach importance to it, from the first conversation to the last toast.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="zoom overflow-hidden rounded-md border border-white/15">
                <Photo name="experience-bartender" className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <ul className="mt-16 grid gap-10 border-t border-white/15 pt-12 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <li className="list-none">
                  <Icon className="text-lilac" size={28} strokeWidth={1.4} />
                  <h3 className="mt-4 text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="overflow-hidden bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-violet">Our Team</p>
            <h2 className="h-section mt-4">The people <em className="text-violet">behind the bar</em></h2>
            <p className="mt-5 leading-relaxed text-muted">One team plans the menu, builds the bar and serves your guests, so every detail is handled by people who know it.</p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="mr-3.5 md:col-span-8">
              <div className="zoom overflow-hidden shadow-[14px_14px_0_0_#D8B9FF]">
                <img src={brand.group} alt="The August Occasions team in matching branded t-shirts" loading="lazy" width="1080" height="776" className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-4">
              <div className="zoom overflow-hidden">
                <img src={brand.four} alt="Four members of the August Occasions team" loading="lazy" width="1030" height="824" className="aspect-[4/5] w-full object-cover object-top" />
              </div>
            </Reveal>
          </div>
          <ul className="mt-20 grid gap-px border border-violet/15 bg-violet/15 md:grid-cols-3">
            {roles.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="bg-mist p-8">
                <li className="list-none">
                  <div className="flex items-center justify-between">
                    <Icon className="text-violet" size={26} strokeWidth={1.4} />
                    <span className="font-serif text-3xl text-violet/40">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
