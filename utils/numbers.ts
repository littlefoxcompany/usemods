/**
 * Generates a random integer between the specified minimum and maximum values.
 * @example random(1, 10)
 * @returns 5
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Calculates the sum of an array of numbers.
 * @example sum([1, 2, 3])
 * @returns 6
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0)
}

/**
 * Calculates the average of an array of numbers.
 * @example average([1, 2, 3])
 * @returns 2
 */
export function average(numbers: number[]): number {
  return sum(numbers) / numbers.length
}

/**
 * Calculates the median of an array of numbers.
 * @example median([1, 2, 3])
 * @returns 2
 */
export function median(numbers: number[]): number {
  const sorted = numbers.sort((a, b) => a - b) // Fixed sorting for numbers
  const middle = Math.floor(sorted.length / 2)

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2
  }

  return sorted[middle]
}

/**
 * Finds the minimum value in an array of numbers.
 * @example min([1, 2, 3])
 * @returns 1
 */
export function min(numbers: number[]): number {
  return Math.min(...numbers)
}

/**
 * Finds the maximum value in an array of numbers.
 * @example max([1, 2, 3])
 * @returns 3
 */
export function max(numbers: number[]): number {
  return Math.max(...numbers)
}

/**
 * Clamps a number between the specified minimum and maximum values.
 * @example clamp(1, 10, 20)
 * @returns 10
 */
export function clamp(number: number, min: number, max: number): number {
  return Math.min(Math.max(number, min), max)
}
