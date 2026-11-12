import assert from "node:assert/strict";
import test from "node:test";

import { slugify } from "../src/slugify.js";

test("slugify slugs a basic phrase", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("slugify collapses punctuation runs into a single hyphen", () => {
  assert.equal(slugify("Hello, World!!"), "hello-world");
  assert.equal(slugify("a --- b ... c"), "a-b-c");
});

test("slugify strips leading and trailing separators", () => {
  assert.equal(slugify("-- Hello World --"), "hello-world");
  assert.equal(slugify("  ...Hello World!!!  "), "hello-world");
});

test("slugify returns an empty string for empty or whitespace-only input", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("   "), "");
  assert.equal(slugify("\t\n "), "");
});

test("slugify rejects non-string values", () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
  assert.throws(() => slugify(["x"]), TypeError);
  assert.throws(() => slugify({}), TypeError);
});
