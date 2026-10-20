import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, GlassWater, Leaf, Martini } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";

const categories = [
  { icon: Martini, title: "Cocktails", text: "Bold flavours and premium spirits." },
  { icon: GlassWater, title: "Mocktails", text: "Refreshing, beautiful alcohol-free creations." },
  { icon: Leaf, title: "Zero-Proof", text: "All the taste, none of the alcohol." },
  { icon: ClipboardList, title: "Custom Menus", text: "Tailored to your event and taste." },
];

export default function SignatureDrinksSection() {
  return (
    <section id="drinks" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.25fr_1.05fr_1fr] lg:gap-12">
        <Reveal>
          <p className="eyebrow text-violet">Our Drinks</p>
          <h2 className="h-section mt-4 text-balance lg:text-[2.5rem] lg:leading-[1.1] xl:text-[2.8rem]">
            Signature Creations for <em className="text-violet">Unforgettable</em> Moments
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">Every drink is crafted to look beautiful and taste even better, from classic cocktails to creative alcohol-free serves.</p>
          <Link to="/contact" className="btn btn-solid mt-8">Plan Your Menu <ArrowRight size={16} /></Link>
        </Reveal>
        <Reveal delay={0.1} className="order-first mb-6 lg:order-none lg:mb-0">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-t-full shadow-[0_30px_60px_-30px_rgba(25,6,41,0.5)]">
              <Photo name="signature-cocktails" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-2 w-24 overflow-hidden border-4 border-ivory shadow-lg sm:-left-6 sm:w-32">
              <Photo name="drink-purple-cocktail" className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-2 w-24 overflow-hidden border-4 border-ivory shadow-lg sm:-right-6 sm:w-32">
              <Photo name="drink-citrus-mocktail" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </Reveal>
        <ul className="divide-y divide-violet/15 border-y border-violet/15">
          {categories.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <li className="flex items-start gap-5 py-6">
                <Icon className="mt-1 shrink-0 text-violet" size={26} strokeWidth={1.4} />
                <div><h3 className="text-2xl">{title}</h3><p className="mt-1 text-sm text-muted">{text}</p></div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
