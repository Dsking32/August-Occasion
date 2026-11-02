import { Link } from "react-router-dom";
import { ArrowRight, GlassWater, GraduationCap, Martini, PartyPopper, Truck, Wine } from "lucide-react";
import Reveal from "./Reveal.jsx";

const services = [
  { icon: GlassWater, title: "Drinks Service", text: "A wide variety of drinks, from water, soft drinks and malt drinks to fruit juices, served professionally at your events." },
  { icon: Martini, title: "Cocktail Service", text: "Classic and signature cocktails, mixed fresh at the bar and served with impeccable presentation." },
  { icon: Truck, title: "Mobile Bar Service", text: "A luxury bar brought to your event for premium drinks display, perfectly handled by our professional bartenders." },
  { icon: PartyPopper, title: "After-Party Entertainment", text: "Drinks and good company that keep the celebration going after the main event." },
  { icon: GraduationCap, title: "Training & Internship", text: "Hands-on training in drinks or cocktail service, and internship opportunities to learn on the job with access to mentorship from the CEO." },
  { icon: Wine, title: "Welcome Drinks", text: "A chilled first pour that greets your guests as they arrive." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-violet">Our Services</p>
            <h2 className="h-section mt-4">Everything We Do <em className="text-violet">For Your Event</em></h2>
          </div>
          <Link to="/contact" className="btn btn-solid self-start">Plan Your Event <ArrowRight size={16} /></Link>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden border border-violet/15 bg-violet/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.07} className="bg-white">
              <li className="group h-full list-none p-8 transition-colors duration-300 hover:bg-ivory">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-violet transition-all duration-300 group-hover:scale-110 group-hover:bg-violet group-hover:text-white">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-2xl leading-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
