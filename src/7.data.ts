// title: Data
// description: A collection of functions for formatting, filtering and arranging arrays and objects.

import { isObject, isArray } from './8.validators'

/**
 * Shuffles your data in a random order.
 */
export function dataShuffle(items: object | any[]): any {
  if (!items || !(isObject(items) || isArray(items))) {
    console.warn('Warning: dataShuffle() expects an object or array as the first argument.')
    return items
  }

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  return isObject(items) ? Object.fromEntries(shuffleArray(Object.entries(items))) : shuffleArray([...items])
}

/**
 * Returns unique array values with an optional property to pluck.
 */
export function dataUnique(items: object | any[], property: string | number | null = null): any {
  if (!items || !(isObject(items) || isArray(items))) {
    console.warn('Warning: dataUnique() expects an object or array as the first argument.')
    return items
  }

  const combinedItems = Array.isArray(items) ? items : Object.values(items)
  const seenValues = new Set()

  return combinedItems.filter((item) => {
    const valueToCheck = property && typeof item === 'object' ? item[property] : item
    return seenValues.has(valueToCheck) ? false : seenValues.add(valueToCheck)
  })
}

/**
 * Returns the difference between two arrays.
 */
export function difference(...arrays: any[][]): any[] {
  const mergedArray = arrays.flat()
  return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index)
}

/**
 * Returns the first item in an array.
 */
export function first(items: any[]): string {
  return items[0]
}

/**
 * Returns the last item in an array.
 */
export function last(items: any[]): string {
  return items[items.length - 1]
}

/**
 * Returns the nth item in an array.
 */
export function nth(items: any[], nth: number): string {
  return items[nth]
}

/**
 * Offset the first item in an array.
 */
export function offset(items: any[], offset: number): any[] {
  return items.slice(offset)
}

/**
 * Groups an array of objects by a property.
 */
export function group(items: { [key: string]: any }[], property: string): { [key: string]: any } {
  return items.reduce((accumulator, item) => {
    const key = item[property]
    if (!accumulator[key]) {
      accumulator[key] = []
    }
    accumulator[key].push(item)
    return accumulator
  }, {})
}

/**
 * Chunks an array into sections of a specified size.
 */
export function groupBy(items: any[], size: number): any[][] {
  const result = []
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size))
  }
  return result
}

/**
 * Flatten an array of arrays.
 */
export function flatten(items: any[]): any[] {
  return items.reduce((accumulator, item) => {
    if (Array.isArray(item)) {
      return accumulator.concat(flatten(item)) // recursive call if item is an array
    } else {
      return accumulator.concat(item)
    }
  }, [])
}

/**
 * Returns an array with a filtered out property.

 */
export function without(items: any[], properties: any | any[]): any[] {
  if (!Array.isArray(items)) {
    return items
  }

  if (Array.isArray(properties)) {
    return items.filter((item) => !properties.includes(item))
  } else {
    return items.map((item) => {
      if (typeof item === 'object' && item !== null) {
        item = { ...item }
        delete item[properties]
      }
      return item
    })
  }
}

/**
 * Combine two or more arrays
 */
export function combineAll(...arrays: any[][]): any[] {
  return ([] as any[]).concat(...arrays)
}

/**
 * Combine two or more unique arrays
 */
export function combineUnique(...items: (any | any[])[]): any[] {
  let combined: any[] = []

  for (let item of items) {
    if (Array.isArray(item)) {
      combined = [...combined, ...item]
    } else {
      combined.push(item)
    }
  }

  return Array.from(new Set(combined))
}

/**
 * Combine two or more arrays or objects without a property.
 */
export function combineWithout(
  property: string | number,
  ...items: (({ [key: string]: any } | { [key: number]: any }) | ({ [key: string]: any } | { [key: number]: any })[])[]
): any[] {
  let combined: any[] = []

  for (let item of items) {
    if (Array.isArray(item)) {
      combined = [...combined, ...item]
    } else {
      combined.push(item)
    }
  }

  const unique = Array.from(new Set(combined.map((item) => item[property])))
  return unique
}

/**
 * Reverse an array.
 */
export function reverse(items: any[]): any[] {
  return items.reverse()
}

/**
 * Sort an array by a property.
 */
export function sortBy(items: { [key: string]: any }[], property: string): { [key: string]: any }[] {
  return items.sort((a, b) => {
    return a[property] > b[property] ? 1 : -1
  })
}

/**
 * Return the frequency of all values (numbers, string or boolean) in an array as an object
 */
export function frequencyOfProperties(array: (number | string)[]): Record<string, number> {
  return array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}

/**
 * Returns the fequency of a property value in an array
 */
export function frequencyOfProperty(array: (number | string)[], property: number | string): number {
  return array.filter((item) => item === property).length
}
