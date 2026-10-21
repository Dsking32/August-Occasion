import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Martini, Sparkles, Users } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Photo from "./Photo.jsx";

const features = [
  { icon: Martini, title: "Premium Quality Drinks", text: "Carefully sourced spirits and fresh ingredients in every glass." },
  { icon: Sparkles, title: "Stylish Setups", text: "Bars designed to look as good as the drinks taste." },
  { icon: Users, title: "Professional Bartenders", text: "Skilled, friendly service from first pour to last toast." },
  { icon: CalendarCheck, title: "Seamless Execution", text: "Every detail planned, so you can enjoy your event." },
];

export default function ExperienceSection() {
  return (
    <section id="about" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-violet">Our Story</p>
            <h2 className="h-section mt-4">More Than Drinks.<br />It’s an <em className="text-violet">Experience.</em></h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">We bring creativity, class and flawless execution to every event. Our team handles every detail, from drink curation to elegant setups, so you can relax and enjoy the moment.</p>
            <Link to="/about" className="btn btn-solid mt-8">Discover Our Story <ArrowRight size={16} /></Link>
          </Reveal>
          <ul className="grid gap-x-8 gap-y-10 self-center sm:grid-cols-2 xl:grid-cols-4">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <li className="group h-full border-t border-violet/20 pt-6 transition-colors hover:border-violet">
                  <Icon className="text-violet" size={28} strokeWidth={1.4} />
                  <h3 className="mt-5 text-2xl leading-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="relative mt-16 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-sm">
            <Photo name="experience-bartender" className="h-56 w-full object-cover object-[50%_48%] sm:h-72 lg:h-80" />
          </div>
          <div className="hidden overflow-hidden rounded-sm sm:block">
            <Photo name="experience-bar-setup" className="h-72 w-full object-cover lg:h-80" />
          </div>
          <p className="absolute -bottom-6 right-4 -rotate-3 bg-ivory px-4 font-script text-3xl text-violet sm:right-10 sm:text-4xl">Cheers to every moment</p>
        </Reveal>
      </div>
    </section>
  );
}
