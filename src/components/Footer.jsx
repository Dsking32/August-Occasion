import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Photo from "./Photo.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { brand, contact, nav, social, waUrl } from "../data/site.js";

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

export default function Footer() {
  const wa = waUrl();
  const row = "flex items-center gap-3 text-white/75 transition-colors hover:text-lilac";
  return (
    <footer className="relative isolate overflow-hidden bg-midnight text-white">
      <Photo name="footer-background" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-midnight/85" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr]">
        <div>
          <Link to="/" className="inline-block" aria-label="August Occasions home">
            <img src="/images/logo-footer.png" alt="August Occasions, attaching importance" width="1200" height="975" className="h-auto w-52 max-w-none drop-shadow-[0_0_28px_rgba(216,185,255,0.28)]" />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">Premium cocktails and beautifully curated drink experiences for weddings, corporate events and private celebrations.</p>
          {social.length > 0 && (
            <ul className="mt-6 flex gap-5 text-sm">
              {social.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-lilac">{s.label}</a></li>)}
            </ul>
          )}
        </div>
        <div>
          <h3 className="eyebrow text-lilac">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="text-white/75 hover:text-lilac">{n.label}</Link></li>)}
          </ul>
          <h3 className="eyebrow mt-8 text-lilac">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={row}><Phone size={16} className="shrink-0 text-lilac" />{contact.phone}</a></li>
            {wa && <li><a href={wa} target="_blank" rel="noopener noreferrer" className={row}><WhatsAppIcon className="h-4 w-4 shrink-0 text-lilac" />Chat on WhatsApp</a></li>}
            {contact.email && <li><a href={`mailto:${contact.email}`} className={`${row} break-all`}><Mail size={16} className="shrink-0 text-lilac" />{contact.email}</a></li>}
            <li className="flex items-center gap-3 text-white/75"><MapPin size={16} className="shrink-0 text-lilac" />{contact.city}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-3xl">Stay in the Loop</h3>
          <p className="mb-5 mt-2 text-sm text-white/65">Get updates on new drinks, events and exclusive offers.</p>
          <Newsletter />
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">© {new Date().getFullYear()} August Occasions. All rights reserved.</div>
    </footer>
  );
}
