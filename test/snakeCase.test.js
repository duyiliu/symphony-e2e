import assert from "node:assert/strict";
import test from "node:test";

import { snakeCase } from "../src/snakeCase.js";

test("snakeCase lowercases and joins words with an underscore", () => {
  assert.equal(snakeCase("Hello World"), "hello_world");
  assert.equal(snakeCase("Gravity Falls"), "gravity_falls");
});

test("snakeCase trims surrounding whitespace", () => {
  assert.equal(snakeCase("  Gravity Falls  "), "gravity_falls");
});

test("snakeCase replaces whitespace runs with a single underscore", () => {
  assert.equal(snakeCase("multiple   spaces"), "multiple_spaces");
  assert.equal(snakeCase("tabs\tand\nnewlines"), "tabs_and_newlines");
});

test("snakeCase replaces hyphens with underscores", () => {
  assert.equal(snakeCase("hello-world"), "hello_world");
  assert.equal(snakeCase("kebab-case-string"), "kebab_case_string");
});

test("snakeCase merges mixed whitespace and hyphens into single underscores", () => {
  assert.equal(snakeCase("hello - world"), "hello_world");
  assert.equal(snakeCase("a -_  b"), "a_b");
});

test("snakeCase removes characters other than a-z, 0-9 and underscore", () => {
  assert.equal(snakeCase("Hello, World!"), "hello_world");
  assert.equal(snakeCase("don't stop"), "dont_stop");
  assert.equal(snakeCase("emoji 🎉 party"), "emoji_party");
});

test("snakeCase collapses consecutive underscores", () => {
  assert.equal(snakeCase("already_snake__case"), "already_snake_case");
});

test("snakeCase keeps digits and mixed alphanumeric words intact", () => {
  assert.equal(snakeCase("Version 2 Release"), "version_2_release");
  assert.equal(snakeCase("route66"), "route66");
});

test("snakeCase returns an empty string for empty or whitespace-only input", () => {
  assert.equal(snakeCase(""), "");
  assert.equal(snakeCase("   "), "");
});

test("snakeCase throws TypeError for non-string input", () => {
  assert.throws(() => snakeCase(42), TypeError);
  assert.throws(() => snakeCase(null), TypeError);
  assert.throws(() => snakeCase(undefined), TypeError);
  assert.throws(() => snakeCase(true), TypeError);
  assert.throws(() => snakeCase(["a"]), TypeError);
  assert.throws(() => snakeCase({}), TypeError);
});
