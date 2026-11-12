export function normalizeWord(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  return value.trim().toLowerCase();
}
