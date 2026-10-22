import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Photo from "./Photo.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { contact, nav, waUrl } from "../data/site.js";

// Social links live here so the icons always show. CHANGE THESE to the real accounts.
const social = [
  { label: "Instagram", href: "https://www.instagram.com/augustoccasions" },
  { label: "TikTok", href: "https://www.tiktok.com/@augustoccasions" },
];

const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;

function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", msg: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setState({ status: "error", msg: "Please enter a valid email address." });
    if (!endpoint) return setState({ status: "error", msg: "Sign-up isn’t connected yet. Message us on WhatsApp instead." });
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error();
      setEmail("");
      setState({ status: "success", msg: "Thank you. You’re on the list." });
    } catch {
      setState({ status: "error", msg: "Something went wrong. Please try again." });
    }
  };

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" aria-invalid={state.status === "error"} aria-describedby="newsletter-msg" className="min-w-0 flex-1 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/50" />
        <button disabled={state.status === "loading"} className="btn btn-solid justify-center">{state.status === "loading" ? "Sending..." : "Subscribe"}<ArrowRight size={16} /></button>
      </div>
      <p id="newsletter-msg" role="status" className={`mt-3 min-h-5 text-sm ${state.status === "error" ? "text-[#ffb4c8]" : "text-lilac"}`}>{state.msg}</p>
    </form>
  );
}

const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TikTokIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
  </svg>
);
const socialIcon = { instagram: InstagramIcon, tiktok: TikTokIcon };

export default function Footer() {
  const wa = waUrl();
  const row = "group flex items-center gap-3 text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-lilac";
  const link = "inline-block text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-lilac";
  return (
    <footer className="relative isolate overflow-hidden bg-midnight text-white">
      <Photo name="footer-background" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight/90 via-midnight/85 to-midnight" />
      <span aria-hidden="true" className="absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-plum/35 blur-[110px]" />

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        {/* Top row: brand + newsletter */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-[1.03]" aria-label="August Occasions home">
              <img src="/images/logo-white.png" alt="August Occasions, attaching importance" width="740" height="585" className="h-auto w-48 max-w-none drop-shadow-[0_0_28px_rgba(255,156,192,0.25)] sm:w-56" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">Premium cocktails and beautifully curated drink experiences for weddings, corporate events and private celebrations.</p>
            {social.length > 0 && (
              <ul className="mt-7 flex gap-3">
                {social.map((s) => {
                  const Icon = socialIcon[s.label.toLowerCase()];
                  return (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`August Occasions on ${s.label}`} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet hover:bg-violet hover:shadow-[0_12px_28px_-10px_rgba(255,61,127,0.8)]">
                        {Icon ? <Icon className="h-5 w-5" /> : s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md sm:p-9">
            <h3 className="font-serif text-3xl sm:text-4xl">Stay in the <em className="text-lilac">Loop</em></h3>
            <p className="mb-6 mt-2 text-sm text-white/65">Get updates on new drinks, events and exclusive offers.</p>
            <Newsletter />
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="eyebrow text-lilac">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => <li key={n.to}><Link to={n.to} className={link}>{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-lilac">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={row}><Phone size={16} className="shrink-0 text-lilac" />{contact.phone}</a></li>
              {wa && <li><a href={wa} target="_blank" rel="noopener noreferrer" className={row}><WhatsAppIcon className="h-4 w-4 shrink-0 text-lilac" />Chat on WhatsApp</a></li>}
              {contact.email && <li><a href={`mailto:${contact.email}`} className={`${row} break-all`}><Mail size={16} className="shrink-0 text-lilac" />{contact.email}</a></li>}
              <li className="flex items-center gap-3 text-white/75"><MapPin size={16} className="shrink-0 text-lilac" />{contact.city}</li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="eyebrow text-lilac">Follow us</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {social.map((s) => {
                const Icon = socialIcon[s.label.toLowerCase()];
                return <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className={row}>{Icon && <Icon className="h-4 w-4 shrink-0 text-lilac" />}{s.label}</a></li>;
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-2 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} August Occasions. All rights reserved.</p>
          <p className="font-serif text-sm italic text-white/55">…attaching importance</p>
        </div>
      </div>
    </footer>
  );
}
