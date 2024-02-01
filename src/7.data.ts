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

  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(shuffleArray(entries) as [string, any][])
  } else {
    return shuffleArray([...(items as any[])])
  }
}

/**
 * Reverse an array.
 */
export function dataReverse(items: object | any[]): any {
  if (!items || !(isObject(items) || isArray(items))) {
    console.warn('Warning: dataReverse() expects an object or array as the first argument.')
    return items
  }

  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.reverse() as [string, any][])
  } else {
    return (items as any[]).reverse()
  }
}

/**
 * Sort an array by a property.
 */
export function dataSortBy(items: object | any[], property: string): any {
  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.sort((a, b) => (a[1][property] > b[1][property] ? 1 : -1)) as [string, any][])
  } else {
    return (items as any[]).sort((a, b) => (a[property] > b[property] ? 1 : -1))
  }
}

/**
 * Returns unique values within an array or object
 */
// export function dataUnique(items: object | any[]): any {
//   if (!items || !(isObject(items) || isArray(items))) {
//     console.warn('Warning: dataUnique() expects an object or array as the first argument.')
//     return items
//   }

//   const combinedItems = Array.isArray(items) ? items : Object.values(items)
//   const seenValues = new Set()

//   return combinedItems.filter((item) => {
//     return seenValues.has(item) ? false : seenValues.add(item)
//   })
// }

/**
 * Returns the difference between two arrays.
 */
export function dataDifference(...arrays: any[][]): any[] {
  const mergedArray = arrays.flat()
  return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index)
}

/**
 * Returns the first item in an array.
 */
export function dataFirst(items: object | any[]): object | any[] {
  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.slice(0, 1) as [string, any][])
  } else {
    return (items as any[]).slice(0, 1)
  }
}

/**
 * Returns the last item in an array.
 */
export function dataLast(items: object | any[]): object | any[] {
  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.slice(-1) as [string, any][])
  } else {
    return (items as any[]).slice(-1)
  }
}

/**
 * Returns the nth item in an array.
 */
export function dataNth(items: object | any[], nth: number): object | any[] {
  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.slice(nth, nth + 1) as [string, any][])
  } else {
    return (items as any[]).slice(nth, nth + 1)
  }
}

/**
 * Offset the first item in an array.
 */
export function dataOffset(items: object | any[], offset: number): object | any[] {
  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.slice(offset) as [string, any][])
  } else {
    return (items as any[]).slice(offset)
  }
}

/**
 * Groups an array of objects by a property.
 */
// export function dataGroup(items: object | any[], property: string | number): any {
//   if (isObject(items)) {
//     const entries: [string, any][] = Object.entries(items)
//     return Object.fromEntries(entries.reduce((acc, [key, value]) => ((acc[value[property]] = [...(acc[value[property]] || []), value]), acc), {} as { [key: string]: any[] }))
//   } else {
//     return (items as any[]).reduce((acc, value) => ((acc[value[property]] = [...(acc[value[property]] || []), value]), acc), {} as { [key: string]: any[] })
//   }
// }

/**
 * Chunks an array into sections of a specified size.
 */
// export function dataGroupBy(items: any[], size: number): any[][] {
//   const result = []
//   for (let i = 0; i < items.length; i += size) {
//     result.push(items.slice(i, i + size))
//   }
//   return result
// }

/**
 * Flatten an array of arrays.
 */
export function dataFlatten(items: object | any[]): object | any[] {
  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.flat() as [string, any][])
  } else {
    return (items as any[]).flat()
  }
}

/**
 * Returns an array with a filtered out property.
 */
export function dataWithout(items: object | any[], properties: any | any[]): any {
  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.filter(([key]) => !properties.includes(key)))
  } else {
    return (items as any[]).filter((item) => !properties.includes(item))
  }
}

/**
 * Combine two or more arrays
 */
export function dataCombineAll(...items: (any[] | object)[]): any[] | object {
  if (items.every((item) => Array.isArray(item))) {
    return ([] as any[]).concat(...items)
  } else if (items.every((item) => typeof item === 'object' && !Array.isArray(item))) {
    return Object.assign({}, ...items)
  } else {
    console.warn('Warning: dataCombineAll() expects either all arrays or all objects as arguments.')
    return items
  }
}

/**
 * Combine two or more unique arrays
 */
export function dataCombineUnique(...items: (any[] | object)[]): any[] | object {
  if (items.every((item) => Array.isArray(item))) {
    return Array.from(new Set(([] as any[]).concat(...items)))
  } else if (items.every((item) => typeof item === 'object' && !Array.isArray(item))) {
    const combinedObject = Object.assign({}, ...items)
    for (const key in combinedObject) {
      if (Array.isArray(combinedObject[key])) {
        combinedObject[key] = Array.from(new Set(combinedObject[key]))
      }
    }
    return combinedObject
  } else {
    console.warn('Warning: dataCombineUnique() expects either all arrays or all objects as arguments.')
    return items[0]
  }
}

/**
 * Combine two or more arrays or objects without a property.
 */
// export function dataCombineWithout(
//   property: string | number,
//   ...items: (({ [key: string]: any } | { [key: number]: any }) | ({ [key: string]: any } | { [key: number]: any })[])[]
// ): any[] {
//   let combined: any[] = []

//   for (let item of items) {
//     if (Array.isArray(item)) {
//       combined = [...combined, ...item]
//     } else {
//       combined.push(item)
//     }
//   }

//   const unique = Array.from(new Set(combined.map((item) => item[property])))
//   return unique
// }

/**
 * Return the frequency of all values (numbers, string or boolean) in an array as an object
 */
export function dataFrequency(array: (number | string)[]): Record<string, number> {
  return array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}

/**
 * Returns the fequency of a property value in an array
 */
export function dataFrequencyOfProperty(array: (number | string)[], property: number | string): number {
  return array.filter((item) => item === property).length
}

/**
 * Checks if a property and value pair exists in an object.
 */
export function isPresent(object: any, property: string, value: any): boolean {
  return object.hasOwnProperty(property) && object[property] === value
}

/**
 * Check if a property exists in an object without checking its value.
 */
export function hasProperties(object: any, properties: string[], strict: boolean = true): boolean {
  const objectProperties = Object.keys(object)

  if (strict) {
    return properties.every((property) => objectProperties.includes(property))
  } else {
    return properties.some((property) => objectProperties.includes(property))
  }
}

/**
 * Check if an array of key exists in an object
 */
export function hasKeys(object: any, keys: string[], strict: boolean = true): boolean {
  const objectKeys = Object.keys(object)

  if (strict) {
    return keys.every((key) => objectKeys.includes(key))
  } else {
    return keys.some((key) => objectKeys.includes(key))
  }
}
