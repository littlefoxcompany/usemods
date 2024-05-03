import { expect, test } from 'vitest'
import { dataShuffle, dataReverse, dataSortBy, dataRemoveDuplicates, dataFlatten, dataWithout } from '../src/7.data'

const items = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jake', age: 20 }
]

test('dataShuffle', () => {
  expect(dataShuffle(items)).not.toStrictEqual(items)
})

test('dataReverse', () => {
  expect(dataReverse(items)).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ])
})

test('dataRemoveDuplicates', () => {
  expect(dataRemoveDuplicates([1, 2, 2, 3, 4, 5, 5, 5])).toStrictEqual([1, 2, 3, 4, 5])
  expect(dataRemoveDuplicates(['apple', 'banana', 'apple', 'cherry', 'banana'])).toStrictEqual(['apple', 'banana', 'cherry'])
})

test('dataSortBy', () => {
  expect(dataSortBy(items, { property: 'age' })).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ])

  expect(dataSortBy(items, { property: 'age', order: 'desc' })).toStrictEqual([
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 },
    { name: 'Jake', age: 20 }
  ])

  expect(dataSortBy(items, { property: 'name' })).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ])
})

test('dataFlatten', () => {
  expect(dataFlatten([1, [2, 3], [4, [5, 6]]])).toStrictEqual([1, 2, 3, 4, 5, 6])
})

test('dataWithout', () => {
  expect(dataWithout([1, 2, 3, 4, 5], [2, 4])).toStrictEqual([1, 3, 5])
  expect(dataWithout([1, 2, 3, 4, 5], 2)).toStrictEqual([1, 3, 4, 5])
})
