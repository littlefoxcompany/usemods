// @vitest-environment nuxt
import { expect, test } from 'vitest'

// import * as modifiers from '../utils/numbers'

test('formatCurrency', () => {
  expect(formatCurrency(1000.0)).toBe('$1,000.00')
  expect(formatCurrency(1000.0, 'EUR')).toBe('€1,000.00')
  expect(formatCurrency(1000.0, 'JPY')).toBe('¥1,000.00')
  expect(formatCurrency(1000.0, 'GBP')).toBe('£1,000.00')
  expect(formatCurrency(1000.0, 'CAD')).toBe('CA$1,000.00')
  expect(formatCurrency(1000.0, 'AUD')).toBe('A$1,000.00')
})

test('formatTime', () => {
  expect(formatTime(3600)).toBe('1hr 0min 0s')
  expect(formatTime(3600 * 2)).toBe('2hr 0min 0s')
  expect(formatTime(3600 * 2 + 60)).toBe('2hr 1min 0s')
  expect(formatTime(3600 * 2 + 60 + 1)).toBe('2hr 1min 1s')
})

