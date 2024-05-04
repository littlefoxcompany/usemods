import { expect, test } from 'vitest'
import * as mod from './numbers'

test('sum', () => {
  expect(mod.sum([1, 2, 3])).toBe(6)
})

test('average', () => {
  expect(mod.average([1, 2, 3])).toBe(2)
  expect(mod.average([1, 2, 3, 4])).toBe(2.5)
  expect(mod.average([-5, -3, -1, 0, 2])).toBe(-1.4)
  expect(mod.average([42])).toBe(42)
  expect(mod.average([])).toBeNaN()
})

test('median', () => {
  expect(mod.median([1, 2, 3])).toBe(2)
  expect(mod.median([1, 2, 3, 4])).toBe(2.5)
  expect(mod.median([-5, -3, -1, 0, 2])).toBe(-1)
  expect(mod.median([42])).toBe(42)
  expect(mod.median([])).toBeNaN()
})
