import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rise = (d) => (reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease } });

  return (
    <section ref={ref} id="top" className="relative isolate flex min-h-[36rem] items-center overflow-hidden bg-midnight text-white lg:min-h-[42rem]">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0 -z-20 h-[118%] w-full">
      <img
        src="/images/hero-cocktail-bar.jpg"
        alt=""
        fetchPriority="high"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/gallery-celebration.webp"; }}
        className="kenburns h-full w-full object-cover object-[68%_center] lg:object-center"
      />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-midnight/55 lg:bg-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight/95 via-royal/70 to-transparent" />
      <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }} className="mx-auto w-full max-w-6xl px-6 pb-16 pt-44 sm:pt-48 lg:pt-56">
        <motion.p {...rise(0.1)} className="eyebrow text-lilac">Premium Drinks &amp; Event Services</motion.p>
        <motion.h1 {...rise(0.25)} className="mt-5 text-[clamp(3.5rem,10vw,5.5rem)] leading-[0.95] lg:leading-[0.74]">
          For Every<br /><em className="text-lilac lg:-mt-2 lg:inline-block">Occasion.</em>
        </motion.h1>
        <motion.p {...rise(0.45)} className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          From classy corporate events to unforgettable celebrations, we provide exceptional drinks and cocktail service, from premium drinks and cooling to professional waiters and bartenders. You celebrate and we handle all the logistics for you. We do drinks right.
        </motion.p>
        <motion.div {...rise(0.65)} className="mt-9 flex flex-row flex-nowrap items-center gap-2.5 sm:gap-3">
          <Link to="/contact" className="btn btn-solid whitespace-nowrap max-sm:flex-1 max-sm:justify-center max-sm:gap-1.5 max-sm:px-3 max-sm:py-3 max-sm:text-[0.78rem] max-sm:[&_svg]:hidden">Plan Your Event <ArrowRight size={16} /></Link>
          <a href="#drinks" className="btn btn-line whitespace-nowrap max-sm:flex-1 max-sm:justify-center max-sm:gap-1.5 max-sm:px-3 max-sm:py-3 max-sm:text-[0.78rem] max-sm:[&_svg]:hidden">Explore Our Drinks <ArrowRight size={16} /></a>
        </motion.div>
      </motion.div>
    </section>
  );
}
