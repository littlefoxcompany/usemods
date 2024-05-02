import { expect, test } from 'vitest'
import { dataSortBy } from '../src/7.data'

test('dataSortBy', () => {
  const items = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jake', age: 20 }
  ]

  expect(dataSortBy(items, 'age')).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ])

  expect(dataSortBy(items, 'name')).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ])
})
