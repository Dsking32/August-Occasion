import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCoverflow, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { useLocalPhotos } from "../lib/localPhotos.js";
import { galleryPhotos } from "../data/gallery.js";
import { useReducedMotion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Only slots that have a real, local photo are shown. Add a slot name here when you have another distinct photo
// (for example "gallery-toast" or "gallery-bartender"). Make sure no two slots use the same picture.
const slots = ["gallery-cocktail", "signature-cocktails", "gallery-event-bar", "drink-purple-cocktail", "hero-cocktail-bar", "gallery-celebration", "drink-citrus-mocktail", "experience-bar-setup"];
const pad = (n) => String(n).padStart(2, "0");
function Lightbox({ items, index, setIndex, onClose }) {
  const closeBtn = useRef(null);
  const n = items.length;

  useEffect(() => {
    const prev = document.activeElement;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => { document.body.style.overflow = ""; prev?.focus?.(); };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((index + 1) % n);
      if (e.key === "ArrowLeft") setIndex((index - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, n, onClose, setIndex]);

  const btn = "absolute flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10";
  return (
    <div role="dialog" aria-modal="true" aria-label="Photo gallery" className="fixed inset-0 z-[80] flex items-center justify-center bg-midnight/95 p-4" onClick={onClose}>
      <button ref={closeBtn} onClick={onClose} aria-label="Close gallery" className={`${btn} right-4 top-4`}><X size={22} /></button>
      {n > 1 && <button onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + n) % n); }} aria-label="Previous photo" className={`${btn} left-3`}><ArrowLeft size={20} /></button>}
      <figure onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-4xl">
        <img src={items[index].src} alt={items[index].alt} className="max-h-[80vh] w-auto max-w-full object-contain" />
        <figcaption className="mt-3 text-center text-sm text-white/70">{pad(index + 1)} / {pad(n)}</figcaption>
      </figure>
      {n > 1 && <button onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % n); }} aria-label="Next photo" className={`${btn} right-3`}><ArrowRight size={20} /></button>}
    </div>
  );
}

export default function GallerySection() {
  const reduce = useReducedMotion();
  const local = useLocalPhotos(slots);
  // New event photos first (they load instantly), then the older slot-based photos.
  const items = [...galleryPhotos, ...local];
  const [sw, setSw] = useState(null);
  const [active, setActive] = useState(0);
  const [box, setBox] = useState(null);
  if (!items.length) return null;
  const n = items.length;

  return (
    <section id="gallery" className="overflow-hidden bg-midnight py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-lilac">Gallery</p>
            <h2 className="h-section mt-4">Moments We’ve <em className="text-lilac">Made Special</em></h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/70">A look at the bars, tables and toasts we have brought to life.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="mr-1 font-serif text-2xl text-lilac" aria-live="polite">{pad(active + 1)} <span className="text-white/40">/ {pad(n)}</span></span>
            <button onClick={() => sw?.slidePrev()} aria-label="Previous photo" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><ArrowLeft size={18} /></button>
            <button onClick={() => sw?.slideNext()} aria-label="Next photo" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><ArrowRight size={18} /></button>
          </div>
        </Reveal>
      </div>

      <Swiper
        modules={[A11y, Autoplay, EffectCoverflow, Keyboard]}
        onSwiper={setSw}
        onSlideChange={(s) => setActive(s.realIndex)}
        effect="coverflow"
        coverflowEffect={{ rotate: 28, stretch: 0, depth: 140, modifier: 1, slideShadows: false }}
        centeredSlides
        slidesPerView="auto"
        grabCursor
        keyboard
        rewind
        speed={700}
        autoplay={reduce ? false : { delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }}
        className="gallery-swiper mt-12 !px-4"
      >
        {items.map((it, i) => (
          <SwiperSlide key={it.name} className="!w-[72%] sm:!w-[46%] lg:!w-[30%]">
            <button onClick={() => setBox(i)} aria-label={`Open photo ${pad(i + 1)} of ${pad(n)}`} className="zoom relative block aspect-[3/4] w-full overflow-hidden rounded-md border border-white/15 bg-royal">
              {it.fit === "contain" && <img src={it.src} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full scale-125 object-cover opacity-45 blur-2xl" />}
              <img src={it.src} alt={it.alt} loading={i < 3 ? "eager" : "lazy"} decoding="async" style={it.pos ? { objectPosition: it.pos } : undefined} className={`relative h-full w-full ${it.fit === "contain" ? "object-contain" : "object-cover"}`} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <button onClick={() => setBox(active)} className="btn btn-solid">View Gallery <ArrowRight size={16} /></button>
      </div>
      {box !== null && <Lightbox items={items} index={box} setIndex={setBox} onClose={() => setBox(null)} />}
    </section>
  );
}
