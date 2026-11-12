export function truncate(text, maxLength) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new TypeError("maxLength must be a non-negative integer");
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}
