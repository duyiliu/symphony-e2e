export function clamp(value, min, max) {
  for (const [name, arg] of [
    ["value", value],
    ["min", min],
    ["max", max],
  ]) {
    if (typeof arg !== "number" || !Number.isFinite(arg)) {
      throw new TypeError(`${name} must be a finite number`);
    }
  }
  if (min > max) {
    throw new RangeError("min must be less than or equal to max");
  }
  return Math.min(Math.max(value, min), max);
}
