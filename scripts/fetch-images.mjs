// Downloads one photo per slot in src/data/photos.js from Unsplash (official API),
// converts it to WebP and saves it to public/images. Usage:
//   $env:UNSPLASH_ACCESS_KEY="your_key"; npm run images        (PowerShell)
//   npm run images -- --force                                    (re-download everything)
// Get a free key at https://unsplash.com/developers. Add `pick: 3` to a slot to choose the 4th result instead.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { photos } from "../src/data/photos.js";

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) {
  console.error("Set UNSPLASH_ACCESS_KEY first (free key: https://unsplash.com/developers).");
  process.exit(1);
}
const force = process.argv.includes("--force");
const out = path.resolve("public/images");
await fs.mkdir(out, { recursive: true });
const headers = { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" };
const exists = (f) => fs.stat(f).then(() => true, () => false);
const credits = [];

for (const [name, p] of Object.entries(photos)) {
  const file = path.join(out, `${name}.webp`);
  if (!force && (await exists(file))) { console.log("skip  ", name); continue; }
  try {
    const q = encodeURIComponent(p.query);
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${q}&orientation=${p.orientation}&per_page=10&content_filter=high`, { headers });
    if (!res.ok) throw new Error(`search failed (${res.status})`);
    const { results } = await res.json();
    const hit = results[p.pick ?? 0];
    if (!hit) throw new Error("no results");
    await fetch(hit.links.download_location, { headers }); // required by the Unsplash API guidelines
    const img = await fetch(`${hit.urls.raw}&w=${p.width ?? 1800}&q=80&fm=jpg`);
    if (!img.ok) throw new Error(`download failed (${img.status})`);
    await sharp(Buffer.from(await img.arrayBuffer())).webp({ quality: 78 }).toFile(file);
    credits.push(`- ${name}: photo by ${hit.user.name} (${hit.user.links.html}) on Unsplash (${hit.links.html})`);
    console.log("saved ", name);
  } catch (e) {
    console.error("FAILED", name, "-", e.message);
  }
}
if (credits.length) await fs.appendFile(path.join(out, "CREDITS.md"), credits.join("\n") + "\n");
console.log("Done. Check the photos, and set `pick: n` on any slot you want to swap.");
