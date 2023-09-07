/**
 * Rounds a number to the nearest integer.
 */
export function round(number: number): number {
  return Math.round(number)
}

/**
 * Rounds a number down to the nearest integer.
 */
export function floor(number: number): number {
  return Math.floor(number)
}

/**
 * Rounds a number up to the nearest integer.
 */
export function ceil(number: number): number {
  return Math.ceil(number)
}

/**
 * Formats a number to a fixed number of decimal places.
 * @param number - The number to format.
 * @param decimals - The number of decimal places to keep.
 */
export function fixed(number: number, decimals: number): string {
  return number.toFixed(decimals)
}

/**
 * Generates a random integer between the specified minimum and maximum values.
 * @param min - The minimum value.
 * @param max - The maximum value.
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Calculates the sum of an array of numbers.
 * @param numbers - The array of numbers.
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0)
}

/**
 * Calculates the average of an array of numbers.
 * @param numbers - The array of numbers.
 */
export function average(numbers: number[]): number {
  return sum(numbers) / numbers.length
}

/**
 * Calculates the median of an array of numbers.
 * @param numbers - The array of numbers.
 */
export function median(numbers: number[]): number {
  const sorted = numbers.sort()
  const middle = Math.floor(sorted.length / 2)

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2
  }

  return sorted[middle]
}

/**
 * Finds the minimum value in an array of numbers.
 * @param numbers - The array of numbers.
 */
export function min(numbers: number[]): number {
  return Math.min(...numbers)
}

/**
 * Finds the maximum value in an array of numbers.
 * @param numbers - The array of numbers.
 */
export function max(numbers: number[]): number {
  return Math.max(...numbers)
}

/**
 * Clamps a number between the specified minimum and maximum values.
 * @param number - The number to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 */
export function clamp(number: number, min: number, max: number): number {
  return Math.min(Math.max(number, min), max)
}
