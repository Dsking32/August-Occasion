import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Photo from "./Photo.jsx";

export default function HeroSection() {
  return (
    <section id="top" className="relative isolate flex min-h-[36rem] items-center overflow-hidden bg-midnight text-white lg:h-[40rem]">
      <Photo name="hero-cocktail-bar" priority className="kenburns absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center] lg:object-center" />
      <div className="absolute inset-0 -z-10 bg-midnight/55 lg:bg-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight/95 via-royal/70 to-transparent" />
      <span aria-hidden="true" className="absolute -bottom-24 right-0 -z-10 h-96 w-96 rounded-full bg-vivid/25 blur-[130px]" />
      <span aria-hidden="true" className="absolute -top-20 right-1/4 -z-10 h-80 w-80 rounded-full bg-plum/30 blur-[120px]" />
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:pt-36">
        <p className="eyebrow text-lilac">Premium Drinks &amp; Cocktail Service</p>
        <h1 className="mt-5 text-[clamp(3.5rem,10vw,5.5rem)] leading-[0.95] lg:leading-[0.74]">
          For Every<br /><em className="text-lilac lg:-mt-2 lg:inline-block">Occasion.</em>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
          From intimate gatherings to grand celebrations, we craft exceptional drink experiences that turn your moments into unforgettable memories.
        </p>
        <div className="mt-9 flex flex-row flex-nowrap items-center gap-2.5 sm:gap-3">
          <Link to="/contact" className="btn btn-solid whitespace-nowrap max-sm:flex-1 max-sm:justify-center max-sm:gap-1.5 max-sm:px-3 max-sm:py-3 max-sm:text-[0.78rem] max-sm:[&_svg]:hidden">Plan Your Event <ArrowRight size={16} /></Link>
          <a href="#drinks" className="btn btn-line whitespace-nowrap max-sm:flex-1 max-sm:justify-center max-sm:gap-1.5 max-sm:px-3 max-sm:py-3 max-sm:text-[0.78rem] max-sm:[&_svg]:hidden">Explore Our Drinks <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
