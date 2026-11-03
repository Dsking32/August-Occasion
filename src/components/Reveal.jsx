import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const offsets = { up: { y: 36 }, down: { y: -36 }, left: { x: 48 }, right: { x: -48 }, none: {} };

// Fades and slides content in once as it scrolls into view. direction: up | left | right | none
export default function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...(offsets[direction] || offsets.up) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.95, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
