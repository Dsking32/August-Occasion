import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Check, Heart, Mail, MapPin, PartyPopper, Phone, Rocket, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import WhatsAppIcon from "../components/WhatsAppIcon.jsx";
import { contact, process, waUrl } from "../data/site.js";

const occasions = [
  { value: "Wedding", icon: Heart, hint: "Receptions and engagements" },
  { value: "Corporate event", icon: Briefcase, hint: "Launches, dinners, awards" },
  { value: "Private party", icon: PartyPopper, hint: "Birthdays and celebrations" },
  { value: "Product launch", icon: Rocket, hint: "Brand activations" },
  { value: "Something else", icon: Sparkles, hint: "Tell us your idea" },
];
const guestOptions = ["Under 25", "25 to 50", "50 to 100", "100 to 200", "200+"];
const drinkOptions = ["Cocktails", "Mocktails", "Exotic drinks", "Not sure yet"];
const stepLabels = ["Occasion", "Details", "You"];
const stepFields = [["eventType"], ["date", "guests"], ["name", "phone", "email"]];

const schema = z.object({
  eventType: z.string().min(1, "Choose an occasion"),
  date: z.string().min(1, "Choose your event date"),
  guests: z.string().min(1, "Choose the number of guests"),
  venue: z.string().optional(),
  drinks: z.array(z.string()).optional(),
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(7, "Enter a phone number we can reach you on"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  message: z.string().optional(),
});

const line = (label, v) => (v ? `${label}: ${v}` : null);
const buildText = (d) =>
  [
    "Hello August Occasions! I’d like to plan an event.",
    "",
    line("Occasion", d.eventType),
    line("Date", d.date),
    line("Guests", d.guests),
    line("Venue", d.venue),
    line("Drinks", d.drinks?.length ? d.drinks.join(", ") : ""),
    d.message ? "" : null,
    line("Notes", d.message),
    "",
    line("Name", d.name),
    line("Phone", d.phone),
    line("Email", d.email),
  ].filter((l) => l !== null).join("\n");

const field = "mt-2 w-full rounded-md border border-violet/20 bg-ivory px-4 py-3.5 text-ink placeholder:text-muted/60 focus:border-violet";

export default function Contact() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(null);
  const { register, handleSubmit, trigger, reset, watch, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { eventType: "", date: "", guests: "", venue: "", drinks: [], name: "", phone: "", email: "", message: "" },
  });
  const v = watch();
  const wa = waUrl();
  const err = (k) => errors[k] && <p role="alert" className="mt-1.5 text-sm text-red-700">{errors[k].message}</p>;

  // Step 2 moves on by itself as soon as both the date and the guest count are chosen
  useEffect(() => {
    if (step !== 1 || !v.date || !v.guests) return;
    const t = setTimeout(() => setStep(2), 350);
    return () => clearTimeout(t);
  }, [step, v.date, v.guests]);

  const next = async () => { if (await trigger(stepFields[step])) setStep(step + 1); };
  const back = () => setStep(Math.max(0, step - 1));
  const send = (channel) => handleSubmit((d) => {
    const text = buildText(d);
    if (channel === "whatsapp") window.open(waUrl(text), "_blank", "noopener,noreferrer");
    else window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Event inquiry from ${d.name}`)}&body=${encodeURIComponent(text)}`;
    setSent(channel);
  });
  const restart = () => { reset(); setStep(0); setSent(null); };

  const slide = reduce ? {} : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3 } };
  const contactRow = "flex items-center gap-3 text-white/80 transition-colors hover:text-lilac";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s plan your <em className="text-lilac">occasion</em></>}
        text="Answer three quick steps and send it straight to us, or message us on WhatsApp whenever you like."
        photo="gallery-event-bar"
      />

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-10">
          {/* Direct contact */}
          <aside className="relative overflow-hidden rounded-md bg-royal p-8 text-white sm:p-10 lg:sticky lg:top-28 lg:self-start">
            <span aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/40 blur-[90px]" />
            <div className="relative">
              <p className="eyebrow text-lilac">Prefer to talk?</p>
              <h2 className="mt-3 text-4xl leading-tight">We’re one message <em className="text-lilac">away</em></h2>

              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="group mt-8 flex items-center gap-4 rounded-md border border-white/20 bg-white/5 p-4 transition-colors hover:border-[#25D366] hover:bg-white/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white"><WhatsAppIcon className="h-6 w-6" /></span>
                  <span className="min-w-0">
                    <span className="block font-medium">Chat on WhatsApp</span>
                    <span className="block text-sm text-white/65">{contact.phone}</span>
                  </span>
                  <ArrowRight size={18} className="ml-auto shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              )}

              <ul className="mt-6 space-y-4 text-sm">
                <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={contactRow}><Phone size={18} className="shrink-0 text-lilac" />Call {contact.phone}</a></li>
                {contact.email && <li><a href={`mailto:${contact.email}`} className={`${contactRow} break-all`}><Mail size={18} className="shrink-0 text-lilac" />{contact.email}</a></li>}
                <li className="flex items-center gap-3 text-white/80"><MapPin size={18} className="shrink-0 text-lilac" />{contact.city}</li>
              </ul>

              <h3 className="mt-10 border-t border-white/15 pt-8 text-2xl">What happens next</h3>
              <ol className="mt-5 space-y-5">
                {process.slice(1, 4).map((p, i) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="font-serif text-2xl leading-none text-lilac">0{i + 1}</span>
                    <div><p className="font-medium">{p.title}</p><p className="mt-1 text-sm text-white/65">{p.text}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Step-by-step form */}
          <div className="rounded-md border border-violet/15 bg-white p-6 shadow-[0_40px_80px_-50px_rgba(25,6,41,0.45)] sm:p-10">
            {sent ? (
              <div className="py-10 text-center sm:py-16">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet text-white"><Check size={30} /></span>
                <h2 className="mt-6 text-4xl">{sent === "whatsapp" ? "Your message is ready" : "Almost done"}</h2>
                <p className="mx-auto mt-3 max-w-md text-muted">
                  {sent === "whatsapp" ? "WhatsApp opened in a new tab with your details filled in. Press send there and we’ll reply as soon as we can." : "Your email app opened with your details filled in. Press send there and we’ll get back to you."}
                </p>
                <button type="button" onClick={restart} className="btn btn-outline mt-8">Start a new inquiry</button>
              </div>
            ) : (
              <>
                {/* Progress */}
                <ol className="flex items-center" aria-label="Progress">
                  {stepLabels.map((l, i) => (
                    <li key={l} className={`flex items-center ${i < 2 ? "flex-1" : ""}`} aria-current={i === step ? "step" : undefined}>
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${i < step ? "border-violet bg-violet text-white" : i === step ? "border-violet text-violet" : "border-violet/20 text-muted"}`}>
                        {i < step ? <Check size={16} /> : i + 1}
                      </span>
                      <span className={`ml-3 hidden text-sm sm:block ${i === step ? "font-semibold text-ink" : "text-muted"}`}>{l}</span>
                      {i < 2 && <span className={`mx-3 h-px flex-1 transition-colors ${i < step ? "bg-violet" : "bg-violet/20"}`} />}
                    </li>
                  ))}
                </ol>

                <form onSubmit={(e) => e.preventDefault()} noValidate className="mt-10">
                  <motion.div key={step} {...slide}>
                      {step === 0 && (
                        <fieldset>
                          <legend className="font-serif text-4xl leading-tight">What are you <em className="text-violet">celebrating?</em></legend>
                          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {occasions.map(({ value, icon: Icon, hint }) => (
                              <label key={value} className="relative cursor-pointer">
                                <input type="radio" value={value} className="peer sr-only" {...register("eventType")} onClick={() => setTimeout(() => setStep(1), 220)} />
                                <span className="group/c flex h-full flex-col gap-3 rounded-md border border-violet/20 bg-ivory p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet hover:bg-mist hover:shadow-[0_18px_36px_-18px_rgba(233,30,120,0.5)] peer-checked:hover:bg-violet peer-checked:border-violet peer-checked:bg-violet peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-vivid peer-checked:[&_.hint]:text-white/80">
                                  <Icon size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover/c:scale-110" />
                                  <span className="font-serif text-xl leading-tight">{value}</span>
                                  <span className="hint text-xs leading-snug text-muted">{hint}</span>
                                </span>
                              </label>
                            ))}
                          </div>
                          {err("eventType")}
                        </fieldset>
                      )}

                      {step === 1 && (
                        <div>
                          <h2 className="font-serif text-4xl leading-tight">The <em className="text-violet">details</em></h2>
                          <div className="mt-8">
                            <label className="block text-sm font-medium">Event date<input type="date" className={`${field} min-w-0 max-w-full`} min={new Date().toISOString().slice(0, 10)} {...register("date")} />{err("date")}</label>
                          </div>
                          <fieldset className="mt-7">
                            <legend className="text-sm font-medium">How many guests?</legend>
                            <div className="mt-3 flex flex-wrap gap-2.5">
                              {guestOptions.map((o) => (
                                <label key={o} className="cursor-pointer">
                                  <input type="radio" value={o} className="peer sr-only" {...register("guests")} />
                                  <span className="block rounded-full border border-violet/25 px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet hover:bg-mist peer-checked:border-violet peer-checked:bg-violet peer-checked:text-white peer-checked:hover:bg-violet peer-focus-visible:ring-2 peer-focus-visible:ring-vivid">{o}</span>
                                </label>
                              ))}
                            </div>
                            {err("guests")}
                          </fieldset>
                          <p className="mt-6 text-sm text-muted">Pick a date and guest count and we’ll take you to the next step.</p>
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <h2 className="font-serif text-4xl leading-tight">Who are we <em className="text-violet">talking to?</em></h2>
                          <div className="mt-8 grid gap-5 sm:grid-cols-2">
                            <label className="block text-sm font-medium">Your name<input autoComplete="name" className={field} {...register("name")} />{err("name")}</label>
                            <label className="block text-sm font-medium">Phone number<input type="tel" autoComplete="tel" className={field} {...register("phone")} />{err("phone")}</label>
                            <label className="block text-sm font-medium sm:col-span-2">Email <span className="font-normal text-muted">(optional)</span><input type="email" autoComplete="email" className={field} {...register("email")} />{err("email")}</label>
                            <label className="block text-sm font-medium sm:col-span-2">Venue or area <span className="font-normal text-muted">(optional)</span><input placeholder="e.g. Victoria Island, Lagos" className={field} {...register("venue")} /></label>
                            <fieldset className="sm:col-span-2">
                              <legend className="text-sm font-medium">Drinks you’re interested in <span className="font-normal text-muted">(optional)</span></legend>
                              <div className="mt-3 flex flex-wrap gap-2.5">
                                {drinkOptions.map((o) => (
                                  <label key={o} className="cursor-pointer">
                                    <input type="checkbox" value={o} className="peer sr-only" {...register("drinks")} />
                                    <span className="block rounded-full border border-violet/25 px-5 py-2.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet hover:bg-mist peer-checked:border-violet peer-checked:bg-violet peer-checked:text-white peer-checked:hover:bg-violet peer-focus-visible:ring-2 peer-focus-visible:ring-vivid">{o}</span>
                                  </label>
                                ))}
                              </div>
                            </fieldset>
                            <label className="block text-sm font-medium sm:col-span-2">Anything else we should know? <span className="font-normal text-muted">(optional)</span><textarea rows="3" className={field} {...register("message")} /></label>
                          </div>
                          <dl className="mt-7 grid gap-x-6 gap-y-2 rounded-md bg-mist p-5 text-sm sm:grid-cols-2">
                            <div><dt className="text-muted">Occasion</dt><dd className="font-medium">{v.eventType || "-"}</dd></div>
                            <div><dt className="text-muted">Date and guests</dt><dd className="font-medium">{v.date || "-"}, {v.guests || "-"} guests</dd></div>
                          </dl>
                        </div>
                      )}
                  </motion.div>

                  <div className={`${step === 0 ? "mt-6" : "mt-10"} flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between`}>
                    {step > 0 ? (
                      <button type="button" onClick={back} className="inline-flex items-center gap-2 self-start py-2 text-sm font-medium text-violet hover:text-vivid"><ArrowLeft size={16} />Back</button>
                    ) : <span />}
                    {step < 2 ? null : (
                      <div className="flex flex-col gap-3 sm:flex-row">
                        {wa && <button type="button" onClick={send("whatsapp")} className="btn justify-center bg-[#25D366] text-white hover:bg-[#1fb957]"><WhatsAppIcon className="h-5 w-5" />Send on WhatsApp</button>}
                        {contact.email && <button type="button" onClick={send("email")} className="btn btn-outline justify-center"><Mail size={16} />Send by email</button>}
                      </div>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
