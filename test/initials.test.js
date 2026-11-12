import assert from "node:assert/strict";
import test from "node:test";

import { initials } from "../src/initials.js";

test("initials uppercases the first character of each of two words", () => {
  assert.equal(initials("Ada Lovelace"), "AL");
  assert.equal(initials("alan turing"), "AT");
});

test("initials takes only the first three words when input is longer", () => {
  assert.equal(initials("Grace Brewster Murray Hopper"), "GBM");
  assert.equal(initials("one two three four five"), "OTT");
});

test("initials collapses extra internal whitespace", () => {
  assert.equal(initials("  Alan    Mathison   Turing  "), "AMT");
  assert.equal(initials("a\tb\tc"), "ABC");
});

test("initials uppercases the leading character regardless of input case", () => {
  assert.equal(initials("mixed Case Input"), "MCI");
  assert.equal(initials("ALL CAPS WORDS"), "ACW");
});

test("initials returns an empty string for empty or whitespace-only input", () => {
  assert.equal(initials(""), "");
  assert.equal(initials("   "), "");
  assert.equal(initials("\t\n \r"), "");
});

test("initials rejects non-string input with TypeError", () => {
  assert.throws(() => initials(42), TypeError);
  assert.throws(() => initials(null), TypeError);
  assert.throws(() => initials(undefined), TypeError);
  assert.throws(() => initials(true), TypeError);
  assert.throws(() => initials(["a"]), TypeError);
  assert.throws(() => initials({}), TypeError);
});
