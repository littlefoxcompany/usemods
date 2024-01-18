import { expect, test } from 'bun:test'
import { formatCurrency, formatDuration, formatList } from '../src/1.formatters'

// @vitest-environment nuxt
// import * as mod from '@/utils/formatters'

test('formatCurrency', () => {
  expect(formatCurrency(1000.95)).toBe('$1,000.95')
  expect(formatCurrency(1000.95, 2, 'EUR')).toBe('€1,000.95')
  expect(formatCurrency(1000, 0, 'JPY')).toBe('¥1,000')
  expect(formatCurrency(1000.95, 2, 'GBP')).toBe('£1,000.95')
  expect(formatCurrency(1000.95, 2, 'CAD')).toBe('CA$1,000.95')
  expect(formatCurrency(1000.95, 2, 'AUD')).toBe('A$1,000.95')
})

test('formatDuration', () => {
  expect(formatDuration(3600)).toBe('1hr')
  expect(formatDuration(3600 * 2 + 60)).toBe('2hr 1min')
  expect(formatDuration(3600 * 2 + 60 + 1)).toBe('2hr 1min 1s')
})

test('formatList', () => {
  expect(formatList(['Apple', 'Oranges'], 2)).toBe('Apple and Oranges')
  // expect(formatList(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'], 5)).toBe('Apple, Oranges, Grapes, Bread and Milk')
  // expect(formatList(['Apple', 'Oranges', 'Grapes', 'Bread'], 5, 'or')).toBe('Apple, Oranges, Grapes or Bread')
  // expect(formatList(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'], 3)).toBe('Apple, Oranges, Grapes and 2 more')
  // expect(formatList(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'], 3, 'or')).toBe('Apple, Oranges, Grapes or 2 more')
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
