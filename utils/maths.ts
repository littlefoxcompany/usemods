/**
 * Rounds a number to the nearest integer.
 */
export const round = (number: number) => {
  return Math.round(number)
}

/**
 * Rounds a number down to the nearest integer.
 */
export const floor = (number: number) => {
  return Math.floor(number)
}

/**
 * Rounds a number up to the nearest integer.
 */
export const ceil = (number: number) => {
  return Math.ceil(number)
}

/**
 * Formats a number to a fixed number of decimal places.
 * @param number - The number to format.
 * @param decimals - The number of decimal places to keep.
 */
export const fixed = (number: number, decimals: number) => {
  return number.toFixed(decimals)
}

/**
 * Generates a random integer between the specified minimum and maximum values.
 * @param min - The minimum value.
 * @param max - The maximum value.
 */
export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Calculates the sum of an array of numbers.
 * @param numbers - The array of numbers.
 */
export const sum = (numbers: number[]) => {
  return numbers.reduce((a, b) => a + b, 0)
}

/**
 * Calculates the average of an array of numbers.
 * @param numbers - The array of numbers.
 */
export const average = (numbers: number[]) => {
  return sum(numbers) / numbers.length
}

/**
 * Calculates the median of an array of numbers.
 * @param numbers - The array of numbers.
 */
export const median = (numbers: number[]) => {
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
export const min = (numbers: number[]) => {
  return Math.min(...numbers)
}

/**
 * Finds the maximum value in an array of numbers.
 * @param numbers - The array of numbers.
 */
export const max = (numbers: number[]) => {
  return Math.max(...numbers)
}

/**
 * Clamps a number between the specified minimum and maximum values.
 * @param number - The number to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 */
export const clamp = (number: number, min: number, max: number) => {
  return Math.min(Math.max(number, min), max)
}

/**
 * Checks if a number is within the specified range.
 * @param number - The number to check.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns True if the number is within the range, false otherwise.
 */
export const inRange = (number: number, min: number, max: number) => {
  return number >= Math.min(min, max) && number < Math.max(min, max)
}
