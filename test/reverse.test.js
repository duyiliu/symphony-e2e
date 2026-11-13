import assert from "node:assert/strict";
import test from "node:test";

import { reverse } from "../src/reverse.js";

test("reverse reverses a normal word", () => {
  assert.equal(reverse("hello"), "olleh");
  assert.equal(reverse("Symphony"), "ynohpmyS");
});

test("reverse returns an empty string for empty input", () => {
  assert.equal(reverse(""), "");
});

test("reverse reverses a string with spaces", () => {
  assert.equal(reverse("hello world"), "dlrow olleh");
  assert.equal(reverse("a b c"), "c b a");
  assert.equal(reverse("  pad  "), "  dap  ");
});
