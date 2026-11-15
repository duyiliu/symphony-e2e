import assert from "node:assert/strict";
import test from "node:test";

import { capitalize } from "../src/capitalize.js";

test("capitalize uppercases the first letter and lowercases the rest", () => {
  assert.equal(capitalize("hello"), "Hello");
  assert.equal(capitalize("wORLD"), "World");
  assert.equal(capitalize("gRAVITY"), "Gravity");
});

test("capitalize returns an empty string for empty input", () => {
  assert.equal(capitalize(""), "");
});

test("capitalize handles single characters", () => {
  assert.equal(capitalize("a"), "A");
  assert.equal(capitalize("Z"), "Z");
});

test("capitalize leaves non-letter first characters unchanged", () => {
  assert.equal(capitalize("123ABC"), "123abc");
  assert.equal(capitalize(" hello"), " hello");
});

test("capitalize throws TypeError for non-string input", () => {
  assert.throws(() => capitalize(5), TypeError);
  assert.throws(() => capitalize(null), TypeError);
  assert.throws(() => capitalize(undefined), TypeError);
  assert.throws(() => capitalize(["a"]), TypeError);
});
