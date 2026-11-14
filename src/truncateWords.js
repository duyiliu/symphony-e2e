export function truncateWords(text, maxWords) {
  const input = typeof text === "string" ? text : "";
  const collapsed = input.trim().replace(/\s+/g, " ");
  if (collapsed === "") {
    return "";
  }
  const words = collapsed.split(" ");
  if (words.length <= maxWords) {
    return text;
  }
  return words.slice(0, maxWords).join(" ") + "...";
}
