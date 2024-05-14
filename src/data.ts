// title: Data
// description: A collection of functions for formatting, filtering and taming wild arrays and objects.
// lead: Arrays and objects, oh my!

import { isObject } from './validators'

/**
 * Sort an array or object by a property.
 */
export function dataSortBy(items: object | string[] | number[], options?: { property?: string; order?: 'asc' | 'desc' }): object | string[] | number[] {
  const comparator = (a: string | number, b: string | number) => {
    const property = options?.property
    const order = options?.order ?? 'asc'
    if (!property) return 0

    if (a[property] < b[property]) return order === 'asc' ? -1 : 1
    if (a[property] > b[property]) return order === 'asc' ? 1 : -1
    return 0
  }

  if (isObject(items)) {
    const entries = Object.entries(items)
    return Object.fromEntries(entries.sort((a, b) => comparator(a[1], b[1])) as [string, string | number | object | string[] | number[]][])
  } else {
    return (items as string[] | number[]).sort(comparator)
  }
}

/**
 * Reverse an array.
 */
export function dataReverse(items: object | string[] | number[]): object | string[] | number[] {
  if (!items) {
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
  return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index)
}

/**
 * Flatten an array of arrays or an object of objects into a single array or object. That was hard to say.
 */
export function dataFlatten(items: object | string[] | number[]): object | string[] | number[] {
  if (isObject(items)) {
    const flattened: { [key: string]: string | number | object | string[] | number[] } = {}
    Object.keys(items as { [key: string]: string | number | object | string[] | number[] }).forEach((key) => {
      const item = (items as { [key: string]: string | number | object | string[] | number[] })[key]
      flattened[key] = Array.isArray(item) ? dataFlatten(item) : item
    })
    return flattened
  } else if (Array.isArray(items)) {
    return items.reduce((acc, val) => acc.concat(Array.isArray(val) ? dataFlatten(val) : val), [])
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

// /**
//  * Return the frequency of all values (numbers, string or boolean) in an array as an object
//  */
// export function dataFrequency(array: (number | string)[]): Record<string, number> {
//   return array.reduce(
//     (acc, curr) => {
//       acc[curr] = (acc[curr] || 0) + 1
//       return acc
//     },
//     {} as Record<string, number>
//   )
// }

// /**
//  * Returns the fequency of a property value in an array
//  */
// export function dataFrequencyOf(array: (number | string)[], property: number | string): number {
//   return array.filter((item) => item === property).length
// }

// /**
//  * Check if a property exists in an object without checking its value.
//  */
// export function hasProperties(object: any, properties: string[], strict: boolean = true): boolean {
//   const objectProperties = Object.keys(object)

//   if (strict) {
//     return properties.every((property) => objectProperties.includes(property))
//   } else {
//     return properties.some((property) => objectProperties.includes(property))
//   }
// }

// /**
//  * Check if an array of key exists in an object
//  */
// export function hasKeys(object: any, keys: string[], strict: boolean = true): boolean {
//   const objectKeys = Object.keys(object)

//   if (strict) {
//     return keys.every((key) => objectKeys.includes(key))
//   } else {
//     return keys.some((key) => objectKeys.includes(key))
//   }
// }

// /**
//  * Checks if a property and value pair exists in an object.
//  */
// export function isPresent(object: any, property: string, value: any): boolean {
//   return object.hasOwnProperty(property) && object[property] === value
// }

// /**
//  * Groups an array of objects by a property.
//  */
// export function dataGroup(items: object | any[], property: string | number): any {
//   if (isObject(items)) {
//     const entries: [string, any][] = Object.entries(items)
//     return Object.fromEntries(entries.reduce((acc, [key, value]) => ((acc[value[property]] = [...(acc[value[property]] || []), value]), acc), {} as { [key: string]: any[] }))
//   } else {
//     return (items as any[]).reduce((acc, value) => ((acc[value[property]] = [...(acc[value[property]] || []), value]), acc), {} as { [key: string]: any[] })
//   }
// }

// /**
//  * Chunks an array into sections of a specified size.
//  */
// export function dataGroupBy(items: any[], size: number): any[][] {
//   const result = []
//   for (let i = 0; i < items.length; i += size) {
//     result.push(items.slice(i, i + size))
//   }
//   return result
// }

// /**
//  * Returns unique values within an array or object
//  */
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

// /**
//  * Combine two or more arrays or objects into a single array or object.
//  */
// export function dataCombineAll(...items: (any[] | object)[]): any[] | object {
//   if (items.every((item) => Array.isArray(item))) {
//     return ([] as any[]).concat(...items)
//   } else if (items.every((item) => typeof item === 'object' && !Array.isArray(item))) {
//     return Object.assign({}, ...items)
//   } else {
//     console.warn('[MODS] Warning: dataCombineAll() expects either all arrays or all objects as arguments.')
//     return items
//   }
// }

// /**
//  * Combine two or more unique arrays
//  */
// export function dataCombineUnique(...items: (any[] | object)[]): any[] | object {
//   if (items.every((item) => Array.isArray(item))) {
//     return Array.from(new Set(([] as any[]).concat(...items)))
//   } else if (items.every((item) => typeof item === 'object' && !Array.isArray(item))) {
//     const combinedObject = Object.assign({}, ...items)
//     for (const key in combinedObject) {
//       if (Array.isArray(combinedObject[key])) {
//         combinedObject[key] = Array.from(new Set(combinedObject[key]))
//       }
//     }
//     return combinedObject
//   } else {
//     console.warn('[MODS] Warning: dataCombineUnique() expects either all arrays or all objects as arguments.')
//     return items[0]
//   }
// }

// /**
//  * Combine two or more arrays or objects without a property.
//  */
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
