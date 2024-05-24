// title: Data
// description: A collection of functions for formatting, filtering and taming wild arrays and objects.
// lead: Arrays and objects, oh my!

import { isObject } from './validators'

/**
 * Sort an array or object by a property.
 */
export function dataSortBy(items: object | string[] | number[], options?: { property?: string; order?: 'asc' | 'desc' }): object | string[] | number[] {
  // Default options
  const defaultOptions = { order: 'asc' }
  const { property, order } = { ...defaultOptions, ...options }

  // Sorting logic
  const compare = (a: any, b: any) => {
    let valueA, valueB

    if (property) {
      valueA = a[property]
      valueB = b[property]
    } else {
      valueA = a
      valueB = b
    }

    if (valueA < valueB) {
      return order === 'asc' ? -1 : 1
    } else if (valueA > valueB) {
      return order === 'asc' ? 1 : -1
    } else {
      return 0
    }
  }

  // Sort items
  if (Array.isArray(items)) {
    return items.sort(compare)
  } else {
    return items
  }
}

/**
 * Reverse an array or object.
 */
export function dataReverse(items: object | string[] | number[]): object | string[] | number[] {
  if ((Array.isArray(items) && items.length === 0) || (!Array.isArray(items) && Object.keys(items).length === 0)) {
    console.warn('[MODS] Warning: dataReverse() expects an object or array as the first argument.')
    return items
  }

  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.reverse() as [string, string | number | object | string[] | number[]][])
  } else {
    return (items as string[] | number[]).reverse()
  }
}

/**
 * Returns single unique values within an array or object
 */
export function dataRemoveDuplicates<T extends string | number>(...arrays: T[][]): T[] {
  const mergedArray = arrays.flat()
  return Array.from(new Set(mergedArray))
}

/**
 * Flatten an array of arrays or an object of objects into a single array or object. That was hard to say.
 */
export function dataFlatten(items: object | any[]): object | any[] {
  if (isObject(items)) {
    const flattened: { [key: string]: any } = {}

    function flattenObject(obj: object, parentKey: string = '') {
      for (const [key, value] of Object.entries(obj)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key
        if (isObject(value)) {
          flattenObject(value, newKey)
        } else {
          flattened[newKey] = value
        }
      }
    }

    flattenObject(items)
    return flattened

  } else if (Array.isArray(items)) {
    return items.flatMap(item => Array.isArray(item) ? dataFlatten(item) : item)
  } else {
    return items
  }
}

/**
 * Returns an array without a property or properties.
 */
export function dataWithout(items: object | string[] | number[], properties: string | number | string[] | number[]): object | string[] | number[] {
  const propertyArray = Array.isArray(properties) ? properties : [properties]

  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.filter(([key]) => !propertyArray.includes(key)))
  } else {
    return (items as string[] | number[]).filter((item) => !propertyArray.includes(item))
  }
}