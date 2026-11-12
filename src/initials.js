export function initials(value) {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  return value
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join("");
}
