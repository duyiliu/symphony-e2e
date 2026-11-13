import assert from "node:assert/strict";
import test from "node:test";

import { slugify } from "../src/slugify.js";

test("slugify lowercases and joins words with a hyphen", () => {
  assert.equal(slugify("Hello World"), "hello-world");
  assert.equal(slugify("Gravity Falls"), "gravity-falls");
});

test("slugify trims surrounding whitespace", () => {
  assert.equal(slugify("  Gravity Falls  "), "gravity-falls");
});

test("slugify replaces whitespace runs with a single hyphen", () => {
  assert.equal(slugify("multiple   spaces"), "multiple-spaces");
  assert.equal(slugify("tabs\tand\nnewlines"), "tabs-and-newlines");
});

test("slugify removes characters other than a-z, 0-9 and hyphen", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
  assert.equal(slugify("don't stop"), "dont-stop");
  assert.equal(slugify("snake_case_value"), "snakecasevalue");
  assert.equal(slugify("emoji 🎉 party"), "emoji--party");
});

test("slugify keeps digits and mixed alphanumeric words intact", () => {
  assert.equal(slugify("Version 2 Release"), "version-2-release");
  assert.equal(slugify("route66"), "route66");
});

test("slugify returns an empty string for empty or whitespace-only input", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("   "), "");
});
