export function isEven(value) {
  if (typeof value !== "number" || !Number.isInteger(value)) {
    throw new TypeError("value must be a finite integer");
  }
  return value % 2 === 0;
}
