import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";
import { useReducedMotion } from "framer-motion";
import "swiper/css";

const occasions = [
  { photo: "occasion-wedding", title: "Weddings", text: "Signature drinks for your big day." },
  { photo: "occasion-corporate", title: "Corporate Events", text: "Polished service for launches and dinners." },
  { photo: "occasion-private-party", title: "Private Parties", text: "Celebrations made effortless." },
  { photo: "occasion-product-launch", title: "Product Launches", text: "Drinks that match your brand." },
  { photo: "occasion-dinner", title: "Other Occasions", text: "Anniversaries, dinners and more." },
];

export default function OccasionsSection() {
  const reduce = useReducedMotion();
  const [sw, setSw] = useState(null);
  return (
    <section id="occasions" className="overflow-hidden bg-royal py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_3fr] lg:gap-10">
        <Reveal className="self-center lg:pr-4">
          <p className="eyebrow text-lilac">Our Occasions</p>
          <h2 className="h-section mt-4">Tailored Experiences for <em className="text-lilac">Every Moment</em></h2>
          <p className="mt-6 max-w-sm leading-relaxed text-white/70">Whatever you are celebrating, we shape the menu, the bar and the service around it.</p>
          <div className="mt-8 flex gap-3">
            <button onClick={() => sw?.slidePrev()} aria-label="Previous occasion" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><ArrowLeft size={18} /></button>
            <button onClick={() => sw?.slideNext()} aria-label="Next occasion" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><ArrowRight size={18} /></button>
          </div>
        </Reveal>
        <div className="min-w-0">
          <Swiper
            modules={[A11y, Autoplay, Keyboard]}
            onSwiper={setSw}
            spaceBetween={16}
            grabCursor
            keyboard
            rewind
            speed={700}
            autoplay={reduce ? false : { delay: 3200, pauseOnMouseEnter: true, disableOnInteraction: false }}
            breakpoints={{ 0: { slidesPerView: 1.3 }, 640: { slidesPerView: 2.3 }, 1024: { slidesPerView: 3.2 } }}
            className="!overflow-visible lg:!overflow-hidden"
          >
            {occasions.map((o, i) => (
              <SwiperSlide key={o.title} className={i % 2 ? "lg:!mt-12" : ""}>
                <Link to="/contact" className="group zoom relative block aspect-[3/4.2] overflow-hidden rounded-md border border-white/15 transition-colors hover:border-vivid">
                  <Photo name={o.photo} className="h-full w-full object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="flex items-start justify-between gap-2">
                      <span className="font-serif text-3xl leading-tight">{o.title}</span>
                      <ArrowUpRight size={20} className="mt-1 shrink-0 text-lilac transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                    </span>
                    <span className="mt-1.5 block text-sm leading-snug text-white/75">{o.text}</span>
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
