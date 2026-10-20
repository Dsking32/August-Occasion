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
    `relative text-sm font-medium transition-colors hover:text-violet ${isActive ? "text-violet after:absolute after:-bottom-1.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-violet" : "text-ink"}`;

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-violet/10 bg-white/95 py-2 pl-5 pr-2.5 shadow-[0_12px_40px_-14px_rgba(25,6,41,0.55)] backdrop-blur-md sm:pl-7 lg:px-8">
          <Link to="/" aria-label="August Occasions home" onClick={close} className="shrink-0">
            <img src={brand.logoNav} alt="August Occasions, attaching importance" width="1100" height="226" className="h-11 w-auto max-w-none sm:h-12 lg:h-[3.25rem]" />
          </Link>

          {/* On desktop every item is a direct flex child, so the gaps are all equal */}
          <div className="hidden lg:contents">
            {nav.map((n) => <NavLink key={n.to} to={n.to} end className={desktopLink}>{n.label}</NavLink>)}
            <Link to="/contact" className="btn btn-solid !px-6 !py-2.5">Book Now</Link>
          </div>

          <button ref={toggle} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink hover:bg-mist lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col justify-center bg-midnight px-8 pb-10 pt-28 lg:hidden">
          <ul className="space-y-6">
            {nav.map((n, i) => (
              <li key={n.to}>
                <NavLink ref={i === 0 ? firstLink : null} to={n.to} end onClick={close} className={({ isActive }) => `font-serif text-5xl ${isActive ? "text-lilac" : "text-white"}`}>{n.label}</NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={close} className="btn btn-solid mt-10 self-start">Plan Your Event <ArrowRight size={16} /></Link>
        </div>
      )}
    </>
  );
}
