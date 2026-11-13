import assert from "node:assert/strict";
import test from "node:test";

import { isEven } from "../src/isEven.js";

test("isEven returns true for positive even integers", () => {
  assert.equal(isEven(0), true);
  assert.equal(isEven(2), true);
  assert.equal(isEven(10), true);
  assert.equal(isEven(1000), true);
});

test("isEven returns true for negative even integers", () => {
  assert.equal(isEven(-2), true);
  assert.equal(isEven(-10), true);
  assert.equal(isEven(-1000), true);
});

test("isEven returns false for positive odd integers", () => {
  assert.equal(isEven(1), false);
  assert.equal(isEven(3), false);
  assert.equal(isEven(11), false);
  assert.equal(isEven(999), false);
});

test("isEven returns false for negative odd integers", () => {
  assert.equal(isEven(-1), false);
  assert.equal(isEven(-3), false);
  assert.equal(isEven(-11), false);
  assert.equal(isEven(-999), false);
});

test("isEven treats zero as even", () => {
  assert.equal(isEven(0), true);
  assert.equal(isEven(-0), true);
});

test("isEven throws TypeError for non-number arguments", () => {
  assert.throws(() => isEven("2"), TypeError);
  assert.throws(() => isEven("even"), TypeError);
  assert.throws(() => isEven(null), TypeError);
  assert.throws(() => isEven(undefined), TypeError);
  assert.throws(() => isEven(true), TypeError);
  assert.throws(() => isEven(false), TypeError);
  assert.throws(() => isEven({}), TypeError);
  assert.throws(() => isEven([2]), TypeError);
  assert.throws(() => isEven(2n), TypeError);
});

test("isEven throws TypeError for fractional values", () => {
  assert.throws(() => isEven(0.5), TypeError);
  assert.throws(() => isEven(2.5), TypeError);
  assert.throws(() => isEven(-2.5), TypeError);
  assert.throws(() => isEven(1.0001), TypeError);
  assert.throws(() => isEven(Math.PI), TypeError);
});

test("isEven throws TypeError for NaN", () => {
  assert.throws(() => isEven(NaN), TypeError);
});

test("isEven throws TypeError for infinite values", () => {
  assert.throws(() => isEven(Infinity), TypeError);
  assert.throws(() => isEven(-Infinity), TypeError);
});
