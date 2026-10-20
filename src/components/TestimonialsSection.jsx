import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { reviews } from "../data/site.js";

// Until real reviews are added to `reviews` in src/data/site.js, a brand statement is shown instead.
const statement = {
  text: "Every glass is made with care, every detail is planned with you, and every guest is looked after from the first pour to the last toast.",
  name: "The August Experience",
  event: "",
};

export default function TestimonialsSection() {
  const list = reviews.length ? reviews : [statement];
  const [i, setI] = useState(0);
  const cur = list[i];
  return (
    <section id="reviews" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow text-violet">Kind Words</p>
          <h2 className="h-section mt-4">What Our <em className="text-violet">Clients</em> Say</h2>
          <figure className="mt-4 lg:mt-3">
            <span aria-hidden="true" className="block h-8 font-serif text-7xl leading-[0.7] text-violet/30 lg:h-6 lg:text-6xl">“</span>
            <blockquote className="mt-0 font-serif text-2xl leading-snug sm:text-3xl">{cur.text}</blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              <span className="font-semibold text-ink">{cur.name}</span>{cur.event ? `, ${cur.event}` : ""}
            </figcaption>
          </figure>
          {list.length > 1 && (
            <div className="mt-8 flex gap-3">
              <button onClick={() => setI((i - 1 + list.length) % list.length)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-violet/30 text-violet hover:bg-violet hover:text-white"><ArrowLeft size={18} /></button>
              <button onClick={() => setI((i + 1) % list.length)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-violet/30 text-violet hover:bg-violet hover:text-white"><ArrowRight size={18} /></button>
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto max-w-sm overflow-hidden rounded-t-full lg:max-w-none">
            <Photo name="testimonial-event" className="aspect-[4/5] w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
