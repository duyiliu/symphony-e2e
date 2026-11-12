import assert from "node:assert/strict";
import test from "node:test";

import { slugify } from "../src/slugify.js";

test("slugify builds a slug from a basic phrase", () => {
  assert.equal(slugify("Hello World"), "hello-world");
  assert.equal(slugify("  Gravity Falls  "), "gravity-falls");
});

test("slugify collapses punctuation runs into a single hyphen", () => {
  assert.equal(slugify("Hello, World!!"), "hello-world");
  assert.equal(slugify("alpha --- omega"), "alpha-omega");
  assert.equal(slugify("a?!&b"), "a-b");
});

test("slugify strips leading and trailing separators", () => {
  assert.equal(slugify("--Alpha Beta--"), "alpha-beta");
  assert.equal(slugify("  !!gamma!!  "), "gamma");
});

test("slugify returns an empty string for empty or whitespace-only input", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("   "), "");
});

test("slugify returns an empty string for input made only of separators", () => {
  assert.equal(slugify(" - "), "");
  assert.equal(slugify("!!!"), "");
  assert.equal(slugify(" -- ~~ -- "), "");
});

test("slugify preserves underscores as normal characters", () => {
  assert.equal(slugify("Hello_World"), "hello_world");
  assert.equal(slugify("snake_case_value"), "snake_case_value");
  assert.equal(slugify("double__underscore"), "double__underscore");
  assert.equal(slugify("___"), "___");
});

test("slugify keeps digits and mixed alphanumeric words intact", () => {
  assert.equal(slugify("Version 2 Release"), "version-2-release");
  assert.equal(slugify("route66"), "route66");
});

test("slugify rejects non-string input with TypeError", () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
  assert.throws(() => slugify(true), TypeError);
  assert.throws(() => slugify(["a"]), TypeError);
  assert.throws(() => slugify({}), TypeError);
});
