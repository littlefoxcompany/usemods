// titile: Numbers
// description: This file contains functions that are related to numbers.

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
 * Calculates the mean of an array of numbers.
 * @example average([1, 2, 3])
 * @returns 2
 */
export function mean(numbers: number[]): number {
  return sum(numbers) / numbers.length
}

/**
 * Calculates the mean of an array of numbers.
 * @example average([1, 2, 3])
 * @returns 2
 */
export function average(numbers: number[]): number {
  return mean(numbers)
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
 * Calculates the mode of an array of numbers.
 * @example mode([1, 2, 2, 3])
 * @returns 2
 */
export function mode(numbers: number[]): number | null {
  if (numbers.length === 0) return null
  if (numbers.length === 1) return numbers[0]

  const frequencyMap = new Map<number, number>()
  numbers.forEach((num) => frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1))

  const maxEntry = [...frequencyMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))

  // Check if the highest frequency is greater than 1
  if (maxEntry[1] > 1) {
    return maxEntry[0]
  }
  return null
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

/**
 * Returns the range of an array of numbers.
 * @example range([1, 2, 3])
 * @returns 2
 */
export function range(numbers: number[]): number {
  return max(numbers) - min(numbers)
}

/**
 * Returns the minimum and maximum values in an array of numbers.
 * @example minMax([1, 2, 3, 4, 5])
 * @returns [1, 5]
 */
export function minMax(numbers: number[]): [number, number] {
  return [min(numbers), max(numbers)]
}

/**
 * Returns the difference between two values, expressed as a positive number.
 * @example range(-10, -20)
 * @returns 10
 */
export function range(a: number, b: number): number {
  return Math.abs(a - b)
}

/**
 * Returns the difference between two values, as a percentage.
 * @example differenceAsPercentage(10, 20)
 * @returns 100
 */
export function rangeAsPercentage(a: number, b: number, decimals: number | null = null): number {
  const percentage = ((b - a) / a) * 100
  return decimals != null ? parseFloat(percentage.toFixed(decimals)) : percentage
}

/**
 * Returns the percentage of a value, relative to another value.
 * @example percentage(10, 100)
 * @returns 10
 */
export function percentage(value: number, total: number): number {
  return (value / total) * 100
}

/**
 * Returns the standard deviation of an array of numbers.
 * @example standardDeviation([1, 2, 3, 20, 120, 2000])
 * @returns 0.5
 */
export function standardDeviation(numbers: number[]): number {
  const meanValue = mean(numbers)
  const variance = mean(numbers.map((num) => Math.pow(num - meanValue, 2)))
  return Math.sqrt(variance)
}

/**
 * Returns the measure of asymmetry of the probability distribution of an array of numbers.
 * The skewness value can be positive, zero, negative, or undefined.
 * @example skewness([1, 2, 3, 20, 120, 2000])
 * @returns 2.5
 */
export function skewness(numbers: number[]): number {
  const meanValue = mean(numbers)
  const medianValue = median(numbers)
  const standardDeviationValue = standardDeviation(numbers)

  return (meanValue - medianValue) / standardDeviationValue
}

/**
 * Return the frequency of all values (numbers, string or boolean) in an array as an object
 * @example frequency([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'])
 * @returns { '1': 1, '2': 1, '3': 4, a: 1, b: 1, c: 2 }
 */
export function frequency(array: (number | string)[]): Record<string, number> {
  return array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}

/**
 * Returns the fequency of a property value in an array
 * @example frequencyOfPropert([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'], 3)
 * @returns 4
 */
export function frequencyOfProperty(array: (number | string)[], property: number | string): number {
  return array.filter((item) => item === property).length
}
