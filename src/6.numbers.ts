// title: Numbers
// description: This file contains functions that are related to numbers.
// lead: Crunch crunchy numbers

/**
 * Calculates the sum of an array of numbers.
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0)
}

/**
 * Calculates the mean of an array of numbers.
 */
export function mean(numbers: number[]): number {
  return sum(numbers) / numbers.length
}

/**
 * Calculates the mean of an array of numbers.
 */
export function average(numbers: number[]): number {
  return mean(numbers)
}

/**
 * Calculates the margin based on a percentage.
 */
export function margin(value: number, percentage: number): number {
  return (value * percentage) / 100
}

/**
 * Adds the margin to the value.
 */
export function addMargin(value: number, percentage: number): number {
  return value + margin(value, percentage)
}

/**
 * Subtracts the margin from the value.
 */
export function subtractMargin(value: number, percentage: number): number {
  return value - margin(value, percentage)
}

/**
 * Calculates the markup based on a percentage.
 */
export function subtractMarkup(value: number, percentage: number): number {
  return value / (1 + percentage / 100)
}

/**
 * Adds the markup to the value.
 */
export function addMarkup(value: number, percentage: number): number {
  return value + subtractMarkup(value, percentage)
}

/**
 * Calculates the median of an array of numbers.
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
 * Calculates the mode of an array of numbers.
 */
export function mode(numbers: number[]): number | null {
  if (numbers.length === 0) return null
  if (numbers.length === 1) return numbers[0]
  const frequencyMap = new Map<number, number>()
  numbers.forEach((num) => frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1))
  const maxEntry = [...frequencyMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))
  if (maxEntry[1] > 1) return maxEntry[0]
  return null
}

/**
 * Finds the minimum value in an array of numbers.
 */
export function min(numbers: number[]): number {
  return Math.min(...numbers)
}

/**
 * Finds the maximum value in an array of numbers.
 */
export function max(numbers: number[]): number {
  return Math.max(...numbers)
}

/**
 * Returns the minimum and maximum values in an array of numbers.
 */
export function minMax(numbers: number[]): [number, number] {
  return [min(numbers), max(numbers)]
}

/**
 * Returns the difference between two values, expressed as a positive number.
 */
export function range(numbers: number[]): number {
  return max(numbers) - min(numbers)
}

/**
 * Returns the standard deviation of an array of numbers.
 */
export function standardDeviation(numbers: number[]): number {
  return Math.sqrt(mean(numbers.map((num) => Math.pow(num - mean(numbers), 2))))
}

/**
 * Returns the measure of asymmetry of the probability distribution of an array of numbers.
 * The skewness value can be positive, zero, negative, or undefined.
 */
export function skewness(numbers: number[]): number | undefined {
  const n = numbers.length
  const meanValue = mean(numbers)
  if (standardDeviation(numbers) === 0) return undefined
  let sum = 0
  for (const num of numbers) sum += (num - meanValue) ** 3
  return (n / ((n - 1) * (n - 2))) * (sum / standardDeviation(numbers) ** 3)
}
