import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { brand } from "../data/site.js";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" },
  });
  const float = reduce ? {} : { animate: { y: [0, -10, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };

  return (
    <section className="relative overflow-hidden bg-white">
      <span aria-hidden="true" className="absolute -right-48 top-0 h-[40rem] w-[40rem] rounded-full bg-mist" />
      <span aria-hidden="true" className="absolute left-[8%] top-40 h-3 w-3 rounded-full bg-violet/60" />
      <span aria-hidden="true" className="absolute bottom-24 left-[45%] h-5 w-5 rounded-full bg-lilac" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 pb-24 pt-32 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
        <div>
          <motion.img {...rise(0)} src={brand.logoMark} alt="August Occasions, attaching importance" className="-ml-3 w-64 mix-blend-multiply sm:w-80 md:w-96" />
          <motion.h1 {...rise(0.15)} className="mt-6 text-5xl sm:text-6xl md:text-7xl">
            Cocktails and exotic drinks, <em className="text-violet">served with care.</em>
          </motion.h1>
          <motion.p {...rise(0.3)} className="mt-6 max-w-lg text-lg text-royal/70">
            Beautifully crafted drinks and a team that looks after every guest, for weddings, corporate events and private celebrations across Lagos.
          </motion.p>
          <motion.div {...rise(0.45)} className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn btn-solid">Book your date</Link>
            <Link to="/menu" className="btn btn-outline">View the menu</Link>
          </motion.div>
          <motion.ul {...rise(0.6)} className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-royal/70">
            {["Weddings", "Corporate events", "Private celebrations"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet" />{t}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div {...rise(0.25)} className="relative mx-auto w-full max-w-md pb-10 lg:max-w-none lg:pb-0">
          <span aria-hidden="true" className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-full border border-lilac" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-mist">
            <img src={brand.portrait} alt="Portrait of the August Occasions lead in a branded print dress" className="h-full w-full object-cover object-top" />
          </div>
          <motion.div {...float} className="absolute -bottom-2 -left-3 w-44 border-4 border-white shadow-xl sm:w-56 lg:-left-10 lg:bottom-10">
            <img src={brand.four} alt="Four members of the August Occasions team" className="aspect-[4/3] w-full object-cover object-top" />
          </motion.div>
          <div className="absolute right-0 top-14 bg-violet px-5 py-3 text-xs tracking-[0.18em] text-white shadow-lg sm:text-sm lg:-right-6">
            Cocktails <span className="mx-2 opacity-60">|</span> Exotic Drinks
          </div>
        </motion.div>
      </div>
    </section>
  );
}
