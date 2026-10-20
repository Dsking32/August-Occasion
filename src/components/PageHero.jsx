import Photo from "./Photo.jsx";

// Pass `photo` (a slot name) or `image` (a path) for a photo hero. With neither, a refined purple glow is used.
export default function PageHero({ eyebrow, title, text, image, photo }) {
  const hasPhoto = Boolean(photo || image);
  return (
    <section className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-midnight text-white md:min-h-[30rem]">
      {photo && <Photo name={photo} alt="" priority className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50" />}
      {!photo && image && <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-top opacity-50" />}
      {hasPhoto ? (
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-royal/60 to-royal/80" />
      ) : (
        <>
          <div className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-violet/35 blur-[120px]" />
          <div className="absolute -bottom-52 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-vivid/15 blur-[120px]" />
        </>
      )}
      <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-36 md:pb-16">
        {eyebrow && <p className="eyebrow text-lilac">{eyebrow}</p>}
        <h1 className="mt-4 text-[clamp(2.8rem,8vw,5rem)] leading-[0.98]">{title}</h1>
        {text && <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">{text}</p>}
      </div>
    </section>
  );
}
