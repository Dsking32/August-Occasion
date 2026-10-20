import { useEffect, useState } from "react";
import { photos } from "../data/photos.js";

const exts = ["webp", "jpg", "jpeg", "png"];
const canLoad = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = src; });

async function findLocal(name) {
  for (const ext of exts) {
    const src = `/images/${name}.${ext}`;
    if (await canLoad(src)) return { name, src, alt: photos[name]?.alt ?? "" };
  }
  return null;
}

// Returns only the slots that have a real file in public/images, so placeholders never appear.
export function useLocalPhotos(names) {
  const [items, setItems] = useState([]);
  const key = names.join("|");
  useEffect(() => {
    let alive = true;
    Promise.all(names.map(findLocal)).then((r) => { if (alive) setItems(r.filter(Boolean)); });
    return () => { alive = false; };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  return items;
}
