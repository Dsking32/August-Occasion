import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { brand, nav } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const firstLink = useRef(null);
  const toggle = useRef(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  const desktopLink = ({ isActive }) =>
    `group relative py-1 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:text-lilac before:absolute before:-bottom-0.5 before:left-0 before:h-px before:w-full before:origin-center before:scale-x-0 before:bg-lilac before:transition-transform before:duration-300 hover:before:scale-x-100 ${isActive ? "text-lilac after:absolute after:-bottom-2.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-lilac" : "text-white"}`;

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-midnight/60 to-transparent">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 sm:px-6 lg:px-8">
          <Link to="/" aria-label="August Occasions home" onClick={close} className="shrink-0 transition-transform duration-300 hover:scale-105">
            <img src={brand.logoNav} alt="August Occasions, attaching importance" width="700" height="569" className="h-14 w-auto max-w-none sm:h-16 lg:h-[4.5rem]" />
          </Link>

          {/* On desktop every item is a direct flex child, so the gaps are all equal */}
          <div className="hidden lg:contents">
            {nav.map((n) => <NavLink key={n.to} to={n.to} end className={desktopLink}>{n.label}</NavLink>)}
            <Link to="/contact" className="btn btn-solid !px-6 !py-2.5 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(255,61,127,0.7)]">Book Now</Link>
          </div>

          <button ref={toggle} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col justify-center bg-midnight px-8 pb-10 pt-24 lg:hidden">
          <ul className="space-y-4">
            {nav.map((n, i) => (
              <li key={n.to}>
                <NavLink ref={i === 0 ? firstLink : null} to={n.to} end onClick={close} className={({ isActive }) => `font-serif text-3xl ${isActive ? "text-lilac" : "text-white"}`}>{n.label}</NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={close} className="btn btn-solid mt-8 self-start !px-5 !py-3 !text-sm">Plan Your Event <ArrowRight size={16} /></Link>
        </div>
      )}
    </>
  );
}
