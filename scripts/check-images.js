#!/usr/bin/env node
// Fail when a post teaser / header image, or the avatar / og_image in _config.yml, is missing
// or larger than the limit. A 16MB teaser once made the home page download ~44MB of images.
//
// Usage:
//   node scripts/check-images.js        (also run by .github/workflows/build.yml)
//   npm run check-images

const fs = require("fs");
const path = require("path");

const LIMIT_KB = 500;
const root = path.join(__dirname, "..");

// front matter keys that point at images
const POST_KEYS = /^\s*(teaser|image|og_image|overlay_image)\s*:\s*["']?([^"'#\s]+)/gm;
const CONFIG_KEYS = /^\s*(og_image|avatar|teaser|logo)\s*:\s*["']?([^"'#\s]+)/gm;

const refs = [];
function collect(file, text, re) {
  for (const m of text.matchAll(re)) {
    if (!/^https?:\/\//.test(m[2])) refs.push({ file, key: m[1], image: m[2] });
  }
}

const postsDir = path.join(root, "_posts");
for (const name of fs.readdirSync(postsDir).filter(f => f.endsWith(".md"))) {
  const text = fs.readFileSync(path.join(postsDir, name), "utf8");
  const frontMatter = text.split(/\r?\n---/)[0];
  collect(`_posts/${name}`, frontMatter, POST_KEYS);
}
collect("_config.yml", fs.readFileSync(path.join(root, "_config.yml"), "utf8"), CONFIG_KEYS);

const errors = [];
for (const { file, key, image } of refs) {
  const p = path.join(root, image.replace(/^\//, ""));
  if (!fs.existsSync(p)) {
    errors.push(`${file}: ${key} "${image}" does not exist`);
    continue;
  }
  const kb = Math.round(fs.statSync(p).size / 1024);
  if (kb > LIMIT_KB) {
    errors.push(`${file}: ${key} "${image}" is ${kb}KB (limit ${LIMIT_KB}KB) - resize it (e.g. 1200px wide) or use JPEG`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`OK: ${refs.length} image references, all present and <= ${LIMIT_KB}KB`);
