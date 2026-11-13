export function repeat(text, times) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }
  if (!Number.isInteger(times) || times < 0) {
    throw new RangeError("times must be a non-negative integer");
  }
  return text.repeat(times);
}
