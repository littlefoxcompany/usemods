// @vitest-environment nuxt
import { addSyntheticLeadingComment } from '@ts-morph/common/lib/typescript'
import { expect, test } from 'vitest'

// import * as mod from '../utils/numbers'

test('random', () => {
  expect(random(1, 100)).toBeGreaterThanOrEqual(1)
  expect(random(1, 100)).toBeLessThanOrEqual(100)
})

test('sum', () => {
  expect(sum([1, 2, 3])).toBe(6)
})

test('average', () => {
  expect(average([1, 2, 3])).toBe(2)
  expect(average([1, 2, 3, 4])).toBe(2.5)
  expect(average([-5, -3, -1, 0, 2])).toBe(-1.4)
  expect(average([42])).toBe(42)
  expect(average([])).toBeNaN()
})

test('median', () => {
  expect(median([1, 2, 3])).toBe(2)
  expect(median([1, 2, 3, 4])).toBe(2.5)
  expect(median([-5, -3, -1, 0, 2])).toBe(-1)
  expect(median([42])).toBe(42)
  expect(median([])).toBeNaN()
})

test('mode', () => {
  expect(mode([1, 2, 3])).toBeNull()
  expect(mode([1, 2, 2, 3, 4])).toBe(2)
  expect(mode([-5, -3, -1, -1, 0, 2])).toBe(-1)
  expect(mode([42])).toBe(42)
  expect(mode([])).toBeNull()
})

test('clamp', () => {
  expect(clamp(1, 10, 20)).toBe(10)
  expect(clamp(15, 10, 20)).toBe(15)
})

test('differenceAsPercentage', () => {
  expect(differenceAsPercentage(1, 1)).toBe(0)
  expect(differenceAsPercentage(2, 1)).toBe(-50)
  expect(differenceAsPercentage(1, 2)).toBe(100)
  expect(differenceAsPercentage(3, 1, 0)).toBe(-67)
  expect(differenceAsPercentage(3, 1, 1)).toBe(-66.7)
  expect(differenceAsPercentage(3, 1, 2)).toBe(-66.67)
  expect(differenceAsPercentage(1.123456789, 2.123456789)).toBe(89.0109891)
  expect(differenceAsPercentage(1.123456789, 2.123456789, 2)).toBe(89.01)
})
