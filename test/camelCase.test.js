import assert from "node:assert/strict";
import test from "node:test";

import { camelCase } from "../src/camelCase.js";

test("camelCase lowercases the first word and capitalizes following words", () => {
  assert.equal(camelCase("Hello World"), "helloWorld");
  assert.equal(camelCase("Gravity Falls"), "gravityFalls");
});

test("camelCase treats hyphens and underscores as word separators", () => {
  assert.equal(camelCase("hello-world"), "helloWorld");
  assert.equal(camelCase("already_snake_case"), "alreadySnakeCase");
  assert.equal(camelCase("kebab-case-string"), "kebabCaseString");
});

test("camelCase collapses runs of mixed separators", () => {
  assert.equal(camelCase("multiple   spaces"), "multipleSpaces");
  assert.equal(camelCase("hello - world"), "helloWorld");
  assert.equal(camelCase("a -_  b"), "aB");
  assert.equal(camelCase("tabs\tand\nnewlines"), "tabsAndNewlines");
});

test("camelCase lowercases letters after the first of each word", () => {
  assert.equal(camelCase("SHOUTING WORDS"), "shoutingWords");
  assert.equal(camelCase("MiXeD CaSe input"), "mixedCaseInput");
});

test("camelCase removes characters other than a-z and 0-9", () => {
  assert.equal(camelCase("Hello, World!"), "helloWorld");
  assert.equal(camelCase("don't stop"), "dontStop");
  assert.equal(camelCase("emoji 🎉 party"), "emojiParty");
});

test("camelCase ignores separators at the edges", () => {
  assert.equal(camelCase("  Gravity Falls  "), "gravityFalls");
  assert.equal(camelCase("--leading-hyphens"), "leadingHyphens");
  assert.equal(camelCase("trailing--"), "trailing");
});

test("camelCase keeps digits and mixed alphanumeric words intact", () => {
  assert.equal(camelCase("Version 2 Release"), "version2Release");
  assert.equal(camelCase("route66"), "route66");
});

test("camelCase returns an empty string for empty or separator-only input", () => {
  assert.equal(camelCase(""), "");
  assert.equal(camelCase("   "), "");
  assert.equal(camelCase("-_"), "");
});

test("camelCase throws TypeError for non-string input", () => {
  assert.throws(() => camelCase(42), TypeError);
  assert.throws(() => camelCase(null), TypeError);
  assert.throws(() => camelCase(undefined), TypeError);
  assert.throws(() => camelCase(true), TypeError);
  assert.throws(() => camelCase(["a"]), TypeError);
  assert.throws(() => camelCase({}), TypeError);
});
