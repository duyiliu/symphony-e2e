function snakeCase(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
    .replace(/_+/g, "_");
}

module.exports = { snakeCase };
