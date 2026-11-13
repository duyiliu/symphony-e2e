import assert from "node:assert/strict";
import test from "node:test";

import { capitalize } from "../src/capitalize.js";

test("capitalize returns an empty string for empty input", () => {
  assert.equal(capitalize(""), "");
});

test("capitalize uppercases the first character of a lowercase word", () => {
  assert.equal(capitalize("hello"), "Hello");
  assert.equal(capitalize("wORLD"), "WORLD");
});

test("capitalize keeps an already capitalized word unchanged", () => {
  assert.equal(capitalize("Hello"), "Hello");
  assert.equal(capitalize("A"), "A");
});

test("capitalize preserves a mixed-case remainder", () => {
  assert.equal(capitalize("hELLO"), "HELLO");
  assert.equal(capitalize("iMac"), "IMac");
  assert.equal(capitalize("cSV Data"), "CSV Data");
});

test("capitalize rejects non-string input with TypeError", () => {
  assert.throws(() => capitalize(42), TypeError);
  assert.throws(() => capitalize(null), TypeError);
  assert.throws(() => capitalize(undefined), TypeError);
  assert.throws(() => capitalize(true), TypeError);
  assert.throws(() => capitalize(["hello"]), TypeError);
  assert.throws(() => capitalize({}), TypeError);
});
