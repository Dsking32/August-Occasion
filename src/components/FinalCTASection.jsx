import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";

export default function FinalCTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-royal py-24 text-white md:py-32">
      <Photo name="cta-floral-detail" className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover opacity-60 lg:w-3/5" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-royal via-royal/85 to-royal/40" />
      <Reveal className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.02]">Let’s Create Something <em className="text-lilac">Beautiful</em> Together.</h2>
        <p className="mt-6 max-w-md text-lg text-white/80">Ready to plan your event? Get in touch with us today and let’s make it extraordinary.</p>
        <Link to="/contact" className="btn btn-solid mt-9">Book Your Event <ArrowRight size={16} /></Link>
      </Reveal>
    </section>
  );
}
