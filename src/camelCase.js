function camelCase(text) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }
  return text
    .split(/[\s\-_]+/)
    .filter((word) => word.length > 0)
    .map((word) => word.toLowerCase().replace(/[^a-z0-9]/g, ""))
    .filter((word) => word.length > 0)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
}

module.exports = { camelCase };
