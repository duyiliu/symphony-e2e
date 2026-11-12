import assert from "node:assert/strict";
import test from "node:test";

import { normalizeWord } from "../src/normalize-word.js";

test("normalizeWord lowercases mixed case input", () => {
  assert.equal(normalizeWord("HeLLo"), "hello");
});

test("normalizeWord trims surrounding whitespace", () => {
  assert.equal(normalizeWord("  world  "), "world");
});

test("normalizeWord returns an empty string for empty input", () => {
  assert.equal(normalizeWord(""), "");
});

test("normalizeWord preserves inner whitespace", () => {
  assert.equal(normalizeWord("  Foo Bar Baz  "), "foo bar baz");
});

test("normalizeWord rejects non-string input", () => {
  for (const value of [null, undefined, 42, {}, [], true]) {
    assert.throws(() => normalizeWord(value), TypeError);
  }
});
