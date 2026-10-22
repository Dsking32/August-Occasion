import Photo from "../components/Photo.jsx";
import PageHero from "../components/PageHero.jsx";
import FinalCTASection from "../components/FinalCTASection.jsx";
import { brand } from "../data/site.js";

const ceo = {
  name: "Olufunmilayo Ogunwo",
  title: "Chief Executive Officer",
  bio: [
    "Olufunmilayo Ogunwo is the CEO of August Occasions, a drinks consulting and service company offering drinks and cocktail services for social and corporate events. She is also the General Secretary of the Nigerian Event Host and Beverage Association (NEHBA).",
    "After four years in real estate, she left her role as a Marketing Executive at a leading property development company to build August Occasions. Her commitment to professionalism and quality service earned her an APPOEMN nomination as one of the best drinks vendors in 2019.",
    "Her drive to master the craft of bartending has taken her through cocktail trainings and workshops, and she has trained and mentored others who are also making waves in the industry.",
    "Funmi also serves on the board of the Funmi Nehan Foundation, an NGO that organises monthly outreaches for the less privileged and needy in our society.",
  ],
  timeline: [
    { year: "2005", text: "Degree in Estate Management, Obafemi Awolowo University, Ile-Ife" },
    { year: "2011", text: "Founded August Occasions after four years in real estate" },
    { year: "2012", text: "MBA, University of Lagos" },
    { year: "2019", text: "Nominated by APPOEMN as one of the best drinks vendors" },
    { year: "2023", text: "Became General Secretary of NEHBA (first tenure, 2023 to 2025)" },
    { year: "2025", text: "Re-elected General Secretary of NEHBA (second tenure, 2025 to 2027)" },
  ],
  memberships: ["Associate Member, Nigerian Institution of Estate Surveyors and Valuers", "Member, Nigerian Institute of Management"],
};

const house = [
  { name: "Crafted drinks", text: "Menus designed around your event and mixed to order." },
  { name: "Attentive service", text: "A team that looks after every guest, start to finish." },
  { name: "Beautiful bars", text: "Setups that look as good as the drinks taste." },
];

const journey = [
  { title: "Planning", text: "We listen first, then shape the menu and the service plan around your event." },
  { title: "Setup", text: "We arrive early and style the bar so it feels like part of your venue." },
  { title: "Service", text: "Friendly, skilled hands pour every drink and look after every guest." },
];

export default function About() {

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>About <em className="text-lilac">August Occasions</em></>}
        text="Every occasion deserves to be taken seriously. We are a Lagos drinks and cocktail service that designs the menu, brings the bar and serves with care."
        photo="hero-cocktail-bar"
      />

      {/* The CEO */}
      <section className="overflow-hidden bg-ivory pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12 lg:gap-14">
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="lg:sticky lg:top-10">
              <span aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 bg-lilac" />
              <img src="/images/ceo-portrait.webp" alt="Olufunmilayo Ogunwo, CEO of August Occasions" width="771" height="1080" className="relative block h-auto w-full" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.98] tracking-[-0.01em]">{ceo.name}</h2>
            <p className="mt-3 font-script text-3xl text-violet">{ceo.title}</p>
            <div className="mt-8 flex flex-col gap-1 border border-violet/30 bg-white p-5 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-serif text-2xl leading-tight text-violet sm:whitespace-nowrap">General Secretary, NEHBA</p>
              <p className="text-sm leading-snug text-muted">Nigerian Event Host and Beverage Association. First tenure 2023 to 2025, second tenure 2025 to 2027.</p>
            </div>

            <p className="mt-10 border-l-2 border-violet pl-6 font-serif text-2xl leading-snug sm:text-3xl">
              Every occasion deserves to be taken seriously, and every guest deserves to feel looked after.
            </p>
            <div className="mt-10 space-y-5 leading-[1.75] text-muted md:columns-2 md:gap-10 md:space-y-0 [&>p]:break-inside-avoid md:[&>p]:mb-5">
              {ceo.bio.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-6 space-y-1.5 text-sm text-muted">
              {ceo.memberships.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        </div>

        {/* Her path, in order */}
        <div className="mx-auto mt-20 max-w-6xl px-6">
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-6">
            <span aria-hidden="true" className="absolute left-[0.45rem] top-2 h-[calc(100%-1rem)] w-px bg-violet/30 md:hidden" />
            <span aria-hidden="true" className="absolute left-0 top-[0.45rem] hidden h-px w-full bg-violet/30 lg:block" />
            {ceo.timeline.map((t) => (
              <li key={t.year} className="group relative pl-8 md:pl-0 md:pt-8">
                <span aria-hidden="true" className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-violet bg-ivory transition-colors duration-300 group-hover:bg-violet md:top-0" />
                <span className="block font-serif text-5xl leading-none text-violet">{t.year}</span>
                <span className="mt-2 block max-w-[14rem] text-sm leading-snug text-ink">{t.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Story and how we work */}
      <section className="relative overflow-hidden bg-royal py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <h2 className="text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[1] tracking-[-0.01em]">Every event has a purpose. The drinks should <span className="text-lilac">respect it.</span></h2>
            <div className="mt-8 max-w-md space-y-4 leading-relaxed text-white/75">
              <p>August Occasions serves cocktails and exotic drinks at weddings, corporate events and private celebrations across Lagos.</p>
              <p>Our name says what we believe. Whether it is an intimate dinner or a grand celebration, we attach importance to it, from the first conversation to the last toast.</p>
            </div>
          </div>

          <div className="relative pb-80 sm:pb-60">
            <div className="zoom overflow-hidden rounded-sm shadow-[16px_16px_0_0_var(--color-vivid)]">
              <Photo name="experience-bar-setup" alt="" className="aspect-[3/2] w-full object-cover" />
            </div>
            <div className="absolute -bottom-0 left-0 right-4 rounded-sm border border-white/15 bg-midnight/95 p-6 shadow-2xl backdrop-blur sm:left-8 sm:right-auto sm:w-[26rem] sm:p-8">
              <p className="font-script text-3xl text-lilac">How we work</p>
              <ul className="mt-5 space-y-4">
                {house.map((h) => (
                  <li key={h.name} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-xl transition-colors duration-300 group-hover:text-lilac">{h.name}</span>
                      <span aria-hidden="true" className="min-w-6 flex-1 translate-y-[-0.25em] border-b border-dotted border-white/35" />
                    </div>
                    <p className="mt-0.5 text-sm text-white/65">{h.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The team and how an event runs */}
      <section className="overflow-hidden bg-mist py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h2 className="text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.01em] md:col-span-7">The people behind the bar</h2>
            <p className="max-w-md leading-relaxed text-muted md:col-span-5">One team plans the menu, builds the bar and serves your guests, so every detail is handled by people who know it.</p>
          </div>

          {/* Both team photos are shown whole, never cropped */}
          <div className="relative mt-12 grid gap-4 sm:mt-14 sm:block sm:pb-14">
            <div className="sm:w-[74%]">
              <img src={brand.group} alt="The August Occasions team in matching branded t-shirts" loading="lazy" width="1080" height="776" className="block h-auto w-full rounded-md shadow-lg sm:rounded-none sm:shadow-[14px_14px_0_0_var(--color-lilac)]" />
            </div>
            <div className="overflow-hidden rounded-md shadow-lg sm:absolute sm:bottom-0 sm:right-0 sm:w-[36%] sm:rounded-none sm:border-8 sm:border-mist sm:shadow-2xl">
              <img src={brand.four} alt="Four members of the August Occasions team" loading="lazy" width="1030" height="824" className="block h-auto w-full" />
            </div>
          </div>

          <div className="mt-20">
            <p className="font-script text-3xl text-violet sm:text-4xl">How an event runs</p>
            <ol className="mt-6 border-t border-violet/25">
              {journey.map((j, i) => (
                <li key={j.title} className="group grid items-baseline gap-2 border-b border-violet/25 py-8 transition-all duration-500 hover:bg-white hover:px-6 md:grid-cols-[4rem_1fr_1.2fr] md:gap-8">
                  <span className="font-serif text-2xl text-violet/50 transition-colors group-hover:text-violet">{i + 1}</span>
                  <h3 className="text-[clamp(2.2rem,4.6vw,3.6rem)] leading-none">{j.title}</h3>
                  <p className="max-w-md leading-relaxed text-muted">{j.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
