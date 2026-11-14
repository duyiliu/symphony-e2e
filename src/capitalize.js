export function capitalize(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (text.length === 0) {
    return "";
  }

  return text[0].toUpperCase() + text.slice(1);
}
