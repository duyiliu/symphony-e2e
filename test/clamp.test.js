import assert from "node:assert/strict";
import test from "node:test";

import { clamp } from "../src/clamp.js";

test("clamp returns the value when it is inside the interval", () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(0, -10, 10), 0);
});

test("clamp caps the value at max when it is above the interval", () => {
  assert.equal(clamp(15, 0, 10), 10);
  assert.equal(clamp(100, 0, 10), 10);
});

test("clamp raises the value to min when it is below the interval", () => {
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(-100, 0, 10), 0);
});

test("clamp supports negative bounds and values", () => {
  assert.equal(clamp(-7, -10, -1), -7);
  assert.equal(clamp(-20, -10, -1), -10);
  assert.equal(clamp(5, -10, -1), -1);
});

test("clamp supports decimal bounds and values", () => {
  assert.equal(clamp(0.5, 0.1, 0.9), 0.5);
  assert.equal(clamp(1.5, 0.1, 0.9), 0.9);
  assert.equal(clamp(-0.05, 0.1, 0.9), 0.1);
  assert.equal(clamp(2.75, -1.5, 2.5), 2.5);
});

test("clamp returns boundary values unchanged", () => {
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
});

test("clamp supports a degenerate interval where min equals max", () => {
  assert.equal(clamp(5, 3, 3), 3);
  assert.equal(clamp(3, 3, 3), 3);
  assert.equal(clamp(-3, -3, -3), -3);
});

test("clamp throws TypeError for non-number arguments", () => {
  assert.throws(() => clamp("5", 0, 10), TypeError);
  assert.throws(() => clamp(5, "0", 10), TypeError);
  assert.throws(() => clamp(5, 0, "10"), TypeError);
  assert.throws(() => clamp(null, 0, 10), TypeError);
  assert.throws(() => clamp(5, null, 10), TypeError);
  assert.throws(() => clamp(5, 0, null), TypeError);
  assert.throws(() => clamp(undefined, 0, 10), TypeError);
  assert.throws(() => clamp(true, 0, 10), TypeError);
  assert.throws(() => clamp(5, 0, {}), TypeError);
  assert.throws(() => clamp([5], 0, 10), TypeError);
});

test("clamp throws TypeError for NaN arguments", () => {
  assert.throws(() => clamp(NaN, 0, 10), TypeError);
  assert.throws(() => clamp(5, NaN, 10), TypeError);
  assert.throws(() => clamp(5, 0, NaN), TypeError);
});

test("clamp throws TypeError for infinite arguments", () => {
  assert.throws(() => clamp(Infinity, 0, 10), TypeError);
  assert.throws(() => clamp(-Infinity, 0, 10), TypeError);
  assert.throws(() => clamp(5, -Infinity, 10), TypeError);
  assert.throws(() => clamp(5, 0, Infinity), TypeError);
});

test("clamp throws RangeError when min is greater than max", () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
  assert.throws(() => clamp(5, 1, -1), RangeError);
  assert.throws(() => clamp(5, 0.2, 0.1), RangeError);
});

test("clamp validates argument types before checking min and max order", () => {
  assert.throws(() => clamp("x", 10, 0), TypeError);
});
