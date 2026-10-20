// Converts any .jpg/.jpeg/.png you saved for a photo slot into a resized .webp. Run: npm run optimize
import fs from "node:fs";
import sharp from "sharp";
import { photos } from "../src/data/photos.js";

for (const name of Object.keys(photos)) {
  if (fs.existsSync(`public/images/${name}.webp`)) continue;
  const src = ["jpg", "jpeg", "png"].map((e) => `public/images/${name}.${e}`).find((f) => fs.existsSync(f));
  if (!src) continue;
  await sharp(src).rotate().resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`public/images/${name}.webp`);
  console.log("converted", src);
}
console.log("Done. You can delete the original jpg/png files once you are happy.");
