// Checks every photo slot in src/data/photos.js against public/images. Run: npm run check-images
// Reports: missing files, duplicate photos (same file reused for two slots), very large files and low-resolution photos.
import fs from "node:fs";
import crypto from "node:crypto";
import sharp from "sharp";
import { photos } from "../src/data/photos.js";

const exts = ["webp", "jpg", "jpeg", "png"];
const seen = new Map();
let problems = 0;

for (const name of Object.keys(photos)) {
  const ext = exts.find((e) => fs.existsSync(`public/images/${name}.${e}`));
  if (!ext) { console.log("MISSING  ", name); problems++; continue; }
  const buf = fs.readFileSync(`public/images/${name}.${ext}`);
  const hash = crypto.createHash("md5").update(buf).digest("hex");
  const meta = await sharp(buf).metadata();
  const notes = [];
  if (seen.has(hash)) notes.push(`DUPLICATE of ${seen.get(hash)}`); else seen.set(hash, name);
  if (buf.length > 700 * 1024) notes.push(`large (${Math.round(buf.length / 1024)} KB, run npm run optimize)`);
  if (meta.width < 1000) notes.push(`low resolution (${meta.width}px wide)`);
  if (notes.length) problems++;
  console.log(notes.length ? "CHECK    " : "ok       ", `${name}.${ext}`, `${meta.width}x${meta.height}`, notes.join("; "));
}
console.log(problems ? `\n${problems} slot(s) need attention (see above).` : "\nAll photo slots look good.");
