export function normalizeFourDigitResult(value: unknown) {
  const text = String(value ?? "").trim();
  const match = text.match(/\b\d{4}\b/);
  return match ? match[0] : null;
}

export function isValidFourDigitResult(value: unknown) {
  return Boolean(normalizeFourDigitResult(value));
}
