export function slugify(value) {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  return value
    .trim()
    .toLowerCase()
    // Underscore is a normal character: only runs that contain
    // non-alphanumeric characters (other than "_") collapse to one hyphen.
    .replace(/[^a-z0-9_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
