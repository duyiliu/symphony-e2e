export function padStart(text, length, fill = " ") {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }
  if (!Number.isInteger(length) || length <= 0) {
    throw new RangeError("length must be a positive integer");
  }
  if (typeof fill !== "string" || fill.length === 0) {
    throw new TypeError("fill must be a non-empty string");
  }
  if (text.length >= length) {
    return text;
  }
  const padChar = Array.from(fill)[0];
  return padChar.repeat(length - text.length) + text;
}
