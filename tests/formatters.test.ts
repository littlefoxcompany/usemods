// @vitest-environment nuxt
import { expect, test } from 'vitest'
// import * as mod from '@/utils/formatters'

test('formatCurrency', () => {
  expect(formatCurrency(1000.0)).toBe('$1,000.00')
  expect(formatCurrency(1000.0, 'EUR')).toBe('€1,000.00')
  expect(formatCurrency(1000.0, 'JPY')).toBe('¥1,000')
  expect(formatCurrency(1000.0, 'GBP')).toBe('£1,000.00')
  expect(formatCurrency(1000.0, 'CAD')).toBe('CA$1,000.00')
  expect(formatCurrency(1000.0, 'AUD')).toBe('A$1,000.00')
})

test('formatTime', () => {
  expect(formatTime(3600)).toBe('1hr')
  expect(formatTime(3600 * 2 + 60)).toBe('2hr 1min')
  expect(formatTime(3600 * 2 + 60 + 1)).toBe('2hr 1min 1s')
})

// TODO: Make more robust
// test('formatPhoneNumber', () => {
//   expect(formatPhoneNumber('1234567890', 'US')).toBe('123-456-7890')
//   expect(formatPhoneNumber('+447911123456', 'UK')).toBe('+44-7911-123456')
//   expect(formatPhoneNumber('1234567890', 'CA')).toBe('123-456-7890')
//   expect(formatPhoneNumber('1234567890', 'US')).toBe('123-456-7890')
//   expect(formatPhoneNumber('+447911123456', 'UK')).toBe('+44-7911-123456')
//   expect(formatPhoneNumber('1234567890', 'CA')).toBe('123-456-7890')
// })
