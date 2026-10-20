import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, Mail, Star } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import WhatsAppIcon from "../components/WhatsAppIcon.jsx";
import { contact, googleReviewUrl, waUrl } from "../data/site.js";

const endpoint = import.meta.env.VITE_FEEDBACK_ENDPOINT;
const labels = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];
const tagOptions = ["Drinks", "Service", "Bar setup", "Professionalism", "Value", "Communication"];
const eventTypes = ["Wedding", "Corporate event", "Private party", "Product launch", "Other"];

const schema = z.object({
  rating: z.coerce.number({ invalid_type_error: "Please choose a star rating" }).min(1, "Please choose a star rating").max(5),
  tags: z.array(z.string()).optional(),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
  name: z.string().optional(),
  eventType: z.string().optional(),
  consent: z.boolean().optional(),
});

const line = (label, v) => (v ? `${label}: ${v}` : null);
const buildText = (d) =>
  [
    "Feedback for August Occasions",
    "",
    `Rating: ${d.rating} / 5 (${labels[d.rating]})`,
    line("What stood out", d.tags?.length ? d.tags.join(", ") : ""),
    line("Event", d.eventType),
    "",
    d.message,
    "",
    line("From", d.name || "Anonymous"),
    `OK to show on the website: ${d.consent ? "Yes" : "No"}`,
  ].filter((l) => l !== null).join("\n");

const field = "mt-2 w-full rounded-md border border-violet/20 bg-ivory px-4 py-3.5 text-ink placeholder:text-muted/60 focus:border-violet";

export default function Feedback() {
  const [sent, setSent] = useState(null);
  const [hover, setHover] = useState(0);
  const [failed, setFailed] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { rating: "", tags: [], message: "", name: "", eventType: "", consent: false },
  });
  const rating = Number(watch("rating")) || 0;
  const shown = hover || rating;
  const wa = waUrl();
  const err = (k) => errors[k] && <p role="alert" className="mt-1.5 text-sm text-red-700">{errors[k].message}</p>;

  const send = (channel) => handleSubmit(async (d) => {
    setFailed(false);
    const text = buildText(d);
    if (channel === "whatsapp") window.open(waUrl(text), "_blank", "noopener,noreferrer");
    else if (channel === "email") window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Feedback for August Occasions")}&body=${encodeURIComponent(text)}`;
    else {
      try {
        const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
        if (!res.ok) throw new Error();
      } catch { setFailed(true); return; }
    }
    setSent({ channel, rating: d.rating });
  });
  const restart = () => { reset(); setSent(null); };

  return (
    <>
      <PageHero
        eyebrow="Feedback"
        title={<>Tell us how <em className="text-lilac">we did</em></>}
        text="Your honest words help us look after the next guest even better. It takes a minute."
      />
      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.8fr_1.4fr] lg:gap-10">
          <aside className="relative overflow-hidden rounded-md bg-royal p-8 text-white sm:p-10 lg:self-start">
            <span aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/40 blur-[90px]" />
            <div className="relative">
              <span aria-hidden="true" className="block font-serif text-8xl leading-none text-lilac/40">“</span>
              <p className="-mt-6 font-serif text-3xl leading-snug">Every occasion deserves to be taken seriously. So does your opinion.</p>
              <p className="mt-6 text-sm leading-relaxed text-white/70">Your feedback goes straight to the team. We read every message, and we only share it publicly if you say we can.</p>
              {googleReviewUrl && (
                <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-8">Review us on Google <ArrowRight size={16} /></a>
              )}
              <p className="mt-8 border-t border-white/15 pt-6 text-sm text-white/65">
                Planning an event instead? <Link to="/contact" className="text-lilac underline underline-offset-4">Get in touch</Link>.
              </p>
            </div>
          </aside>

          <div className="rounded-md border border-violet/15 bg-white p-6 shadow-[0_40px_80px_-50px_rgba(25,6,41,0.45)] sm:p-10">
            {sent ? (
              <div className="py-10 text-center sm:py-16">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet text-white"><Check size={30} /></span>
                <h2 className="mt-6 text-4xl">Thank you</h2>
                <p className="mx-auto mt-3 max-w-md text-muted">
                  {sent.channel === "whatsapp" ? "WhatsApp opened with your feedback filled in. Press send there and it reaches us directly." : sent.channel === "email" ? "Your email app opened with your feedback ready to send." : "Your feedback has been sent. We really appreciate it."}
                </p>
                {sent.rating >= 4 && googleReviewUrl && (
                  <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-8">Share it on Google too <ArrowRight size={16} /></a>
                )}
                <div className="mt-6"><button type="button" onClick={restart} className="btn btn-outline">Send more feedback</button></div>
              </div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} noValidate>
                <fieldset>
                  <legend className="font-serif text-4xl leading-tight">How was your <em className="text-violet">experience?</em></legend>
                  <div className="mt-5 flex items-center gap-1.5 sm:gap-2" onMouseLeave={() => setHover(0)}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <label key={n} className="cursor-pointer" onMouseEnter={() => setHover(n)}>
                        <input type="radio" value={n} aria-label={`${n} star${n > 1 ? "s" : ""}, ${labels[n]}`} className="peer sr-only" {...register("rating")} />
                        <Star size={42} strokeWidth={1.4} fill={n <= shown ? "currentColor" : "none"} className={`transition-colors peer-focus-visible:text-vivid ${n <= shown ? "text-violet" : "text-violet/30"}`} />
                      </label>
                    ))}
                    <span className="ml-3 text-sm font-medium text-violet" aria-live="polite">{labels[shown]}</span>
                  </div>
                  {err("rating")}
                </fieldset>

                <fieldset className="mt-9">
                  <legend className="text-sm font-medium">What stood out? <span className="font-normal text-muted">(optional)</span></legend>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {tagOptions.map((o) => (
                      <label key={o} className="cursor-pointer">
                        <input type="checkbox" value={o} className="peer sr-only" {...register("tags")} />
                        <span className="block rounded-full border border-violet/25 px-5 py-2.5 text-sm transition-colors hover:border-violet peer-checked:border-violet peer-checked:bg-violet peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-vivid">{o}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium sm:col-span-2">Your feedback
                    <textarea rows="5" placeholder="What did you love, and what could we do better?" className={field} {...register("message")} />
                    {err("message")}
                  </label>
                  <label className="block text-sm font-medium">Your name <span className="font-normal text-muted">(optional)</span>
                    <input autoComplete="name" placeholder="Leave blank to stay anonymous" className={field} {...register("name")} />
                  </label>
                  <label className="block text-sm font-medium">Type of event <span className="font-normal text-muted">(optional)</span>
                    <select className={field} defaultValue="" {...register("eventType")}>
                      <option value="">Select</option>
                      {eventTypes.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </label>
                </div>

                <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-muted">
                  <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-violet" {...register("consent")} />
                  <span>You may share my feedback on your website.</span>
                </label>

                {failed && <p role="alert" className="mt-5 text-sm text-red-700">Something went wrong. Please try again or send it on WhatsApp.</p>}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {endpoint && <button type="button" disabled={isSubmitting} onClick={send("endpoint")} className="btn btn-solid justify-center">{isSubmitting ? "Sending..." : "Send feedback"} <ArrowRight size={16} /></button>}
                  {wa && <button type="button" onClick={send("whatsapp")} className={`btn justify-center ${endpoint ? "btn-outline" : "bg-[#25D366] text-white hover:bg-[#1fb957]"}`}><WhatsAppIcon className="h-5 w-5" />Send on WhatsApp</button>}
                  {contact.email && <button type="button" onClick={send("email")} className="btn btn-outline justify-center"><Mail size={16} />Send by email</button>}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
