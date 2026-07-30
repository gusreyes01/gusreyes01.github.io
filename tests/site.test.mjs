import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const home = await readFile(new URL("../index.html", import.meta.url), "utf8");
const notFound = await readFile(
  new URL("../404.html", import.meta.url),
  "utf8",
);

test("home has core metadata and landmarks", () => {
  assert.match(home, /<html lang="en">/);
  assert.match(home, /<meta\s+name="description"/);
  assert.match(home, /<header/);
  assert.match(home, /<main id="main-content">/);
  assert.match(home, /<footer/);
});

test("external links declare a safe relationship", () => {
  const externalLinks = [...home.matchAll(/<a[^>]+href="https:[^>]+>/g)];
  assert.ok(externalLinks.length >= 3);
  for (const [link] of externalLinks) {
    assert.match(link, /rel="[^"]*noreferrer[^"]*"/);
  }
});

test("custom not-found page offers a path home", () => {
  assert.match(notFound, /<meta name="robots" content="noindex"/);
  assert.match(notFound, /href="\/">Return home/);
});
