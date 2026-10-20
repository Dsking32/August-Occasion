import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { images, reviews } from "../data/site.js";

export default function Reviews() {
  return (
    <>
      <PageHero title="Client reviews" text="What hosts say about working with August Occasion." image={images.hero} />
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-6xl px-6">
          {reviews.length === 0 ? (
            <div className="mx-auto max-w-xl py-12 text-center">
              <h2 className="text-4xl">Reviews are on their way</h2>
              <p className="mt-4 text-royal/70">Add real client reviews in src/data/site.js and they will appear here.</p>
              <Link to="/contact" className="btn btn-solid mt-8">Plan your event</Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {reviews.map((r) => (
                <blockquote key={r.name} className="border-l-2 border-lilac bg-white p-8">
                  <p className="font-serif text-2xl leading-snug">{r.text}</p>
                  <footer className="mt-5 text-sm text-royal/70">{r.name}, {r.event}</footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
