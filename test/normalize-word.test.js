import assert from "node:assert/strict";
import test from "node:test";

import { normalizeWord } from "../src/normalize-word.js";

test("normalizeWord lowercases mixed case", () => {
  assert.equal(normalizeWord("HeLLo"), "hello");
});

test("normalizeWord trims surrounding whitespace", () => {
  assert.equal(normalizeWord("  World  "), "world");
});

test("normalizeWord returns an empty string for empty input", () => {
  assert.equal(normalizeWord(""), "");
});

test("normalizeWord preserves inner whitespace", () => {
  assert.equal(normalizeWord("  Foo   Bar  "), "foo   bar");
});

test("normalizeWord maps null and undefined to an empty string", () => {
  assert.equal(normalizeWord(null), "");
  assert.equal(normalizeWord(undefined), "");
});

test("normalizeWord rejects other non-string values", () => {
  assert.throws(() => normalizeWord(42), TypeError);
  assert.throws(() => normalizeWord(true), TypeError);
  assert.throws(() => normalizeWord(["x"]), TypeError);
  assert.throws(() => normalizeWord({}), TypeError);
});
