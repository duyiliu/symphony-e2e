export function ellipsis(text, maxLength) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }
  if (!Number.isInteger(maxLength) || maxLength < 1) {
    throw new RangeError("maxLength must be a positive integer");
  }
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 1) + "…";
}
