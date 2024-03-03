import { expect, test } from 'bun:test'
import {
  average,
  median,
  sum,
  addMarkup,
  margin,
  marginAdded,
  max,
  mean,
  min,
  minMax,
  mode,
  percentage,
  range,
  rangeAsPercentage,
  skewness,
  standardDeviation,
  subtractMarkup
} from '../src/6.numbers'

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
