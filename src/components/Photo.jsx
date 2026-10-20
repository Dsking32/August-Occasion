import { useState } from "react";
import { photos } from "../data/photos.js";

export default function Photo({ name, className = "", priority = false, alt }) {
  const p = photos[name];
  const sources = ["webp", "jpg", "jpeg", "png"].map((e) => `/images/${name}.${e}`).concat(p.fallback);
  const [i, setI] = useState(0);
  return (
    <img
      src={sources[i]}
      alt={alt ?? p.alt}
      aria-hidden={(alt ?? p.alt) === "" ? true : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      onError={() => setI((n) => Math.min(n + 1, sources.length - 1))}
      className={className}
    />
  );
}
