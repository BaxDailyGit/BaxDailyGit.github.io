#!/usr/bin/env node
// Create a new post skeleton in _posts following this blog's conventions.
//
// Usage:
//   node scripts/new-post.js "제목" [--category AI] [--tags "Attention,Transformer"]
//                            [--series "Sutskever's List"] [--slug my-slug] [--toc false]
//   npm run new-post -- "제목" --category AI
//
// File name : _posts/YYYY-MM-DD-<category><NNNN>.md  (NNNN = next number in that category)
// Permalink : /<category>/<slug>   (slug is derived from ASCII letters/digits of the title,
//             or pass --slug when the title is Korean only)

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const opts = {};
const positional = [];
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith("--")) {
    opts[args[i].slice(2)] = args[i + 1];
    i++;
  } else {
    positional.push(args[i]);
  }
}

const title = positional.join(" ").trim();
if (!title) {
  console.error('Usage: node scripts/new-post.js "제목" [--category AI] [--tags "a,b"] [--series "name"] [--slug slug]');
  process.exit(1);
}

const category = opts.category || "AI";
const prefix = category.toLowerCase().replace(/[^a-z0-9]/g, "");
const tags = (opts.tags || "").split(",").map(t => t.trim()).filter(Boolean);
const toc = opts.toc !== "false";

const postsDir = path.join(__dirname, "..", "_posts");
const re = new RegExp(`^[0-9]{4}-[0-9]{2}-[0-9]{2}-${prefix}([0-9]{4})[.]md$`);
const last = fs.readdirSync(postsDir)
  .map(f => (f.match(re) || [])[1])
  .filter(Boolean)
  .map(Number)
  .reduce((a, b) => Math.max(a, b), 0);
const id = String(last + 1).padStart(4, "0");

const pad = n => String(n).padStart(2, "0");
const now = new Date();
const day = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

const slug = (opts.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")) || `${prefix}${id}`;
const fileName = `${day}-${prefix}${id}.md`;
const filePath = path.join(postsDir, fileName);
if (fs.existsSync(filePath)) {
  console.error(`Already exists: ${filePath}`);
  process.exit(1);
}

const lines = ["---"];
if (opts.series) lines.push(`series: "${opts.series}"`);
lines.push(
  "layout: single",
  "published: true",
  `title:  "${title.replace(/"/g, '\\"')}"`,
  `permalink: /${prefix}/${slug}`,
  `categories: ${category}`,
  `date: ${day} ${time}`,
);
if (toc) lines.push("toc: true", "toc_sticky: true");
lines.push(
  "header:",
  `  title: "${title.replace(/"/g, '\\"')}"`,
  "  teaser: # assets/images/xxx.png",
  `excerpt: ""`,
  "tag:",
  ...(tags.length ? tags.map(t => `  - ${t}`) : ["  - "]),
  "---",
  "",
  "",
);

fs.writeFileSync(filePath, lines.join("\n"), "utf8");
console.log(`Created ${path.relative(process.cwd(), filePath)}`);
