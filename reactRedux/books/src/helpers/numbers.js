export function generateRandomNumber(maxDigits) {
  const min = Math.pow(10, maxDigits - 1);
  const max = Math.pow(10, maxDigits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
