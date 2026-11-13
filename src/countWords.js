export function countWords(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }
  const trimmed = text.trim();
  if (trimmed === "") {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}
