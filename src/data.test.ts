import { expect, test } from 'vitest'
import * as mod from './data'

const arrayExample = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jake', age: 20 }
]

const objectExample = {
  name: 'John',
  age: 25,
  country: 'USA'
}

// test('dataShuffle', () => {
//   expect(mod.dataShuffle(items)).not.toStrictEqual(items)
// })

test('dataReverse', () => {
  expect(mod.dataReverse(arrayExample)).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ])
  expect(mod.dataReverse(objectExample)).toStrictEqual({
    country: 'USA',
    age: 25,
    name: 'John',
  })
})

test('dataRemoveDuplicates', () => {
  expect(mod.dataRemoveDuplicates([1, 2, 2, 3, 4, 5, 5, 5])).toStrictEqual([1, 2, 3, 4, 5])
  expect(mod.dataRemoveDuplicates(['apple', 'banana', 'apple', 'cherry', 'banana'])).toStrictEqual(['apple', 'banana', 'cherry'])
})

test('dataSortBy', () => {
  expect(mod.dataSortBy(arrayExample, { property: 'age' })).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ])

  expect(mod.dataSortBy(arrayExample, { property: 'age', order: 'desc' })).toStrictEqual([
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 },
    { name: 'Jake', age: 20 }
  ])

  expect(mod.dataSortBy(arrayExample, { property: 'name' })).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ])
})

test('dataFlatten', () => {
  expect(mod.dataFlatten([1, [2, 3], [4, [5, 6]]])).toStrictEqual([1, 2, 3, 4, 5, 6])
})

test('dataWithout', () => {
  expect(mod.dataWithout([1, 2, 3, 4, 5], [2, 4])).toStrictEqual([1, 3, 5])
  expect(mod.dataWithout([1, 2, 3, 4, 5], 2)).toStrictEqual([1, 3, 4, 5])
})
