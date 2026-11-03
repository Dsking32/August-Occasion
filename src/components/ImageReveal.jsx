import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// A photo that unveils with a soft wipe and then drifts slowly as the page scrolls (parallax).
// `className` styles the outer frame (shape, size, shadow); the image always fills it without distortion.
export default function ImageReveal({ src, alt = "", className = "", imgClassName = "", width, height, contain = false, delay = 0, loading = "lazy" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  if (reduce || contain) {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <img src={src} alt={alt} width={width} height={height} loading={loading} className={imgClassName || "h-full w-full object-cover"} />
      </div>
    );
  }
  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(14% 0% 0% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img src={src} alt={alt} width={width} height={height} loading={loading} style={{ y, scale: 1.12 }} className={imgClassName || "h-full w-full object-cover"} />
    </motion.div>
  );
}
