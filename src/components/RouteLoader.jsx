import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// A short circular loader shown when moving between pages. Skipped for reduced-motion users.
export default function RouteLoader() {
  const { pathname } = useLocation();
  const prev = useRef(pathname);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (prev.current === pathname) return;
    prev.current = pathname;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 650);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[70] flex items-center justify-center bg-midnight">
          <div className="relative h-20 w-20">
            <span className="absolute inset-0 rounded-full border-2 border-white/15" />
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-lilac" />
            <span className="absolute inset-3 flex items-center justify-center overflow-hidden rounded-full bg-white">
              <img src="/favicon.png" alt="" className="h-9 w-auto" />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
