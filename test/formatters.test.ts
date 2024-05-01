import { expect, test } from 'vitest'
import { formatCurrency, formatDurationLabels, formatPercentage, formatUnixTime, formatList, formatTitle, formatInitials } from '../src/2.formatters'

test('formatCurrency', () => {
  expect(formatCurrency(1000.95)).toBe('$1,000.95')
  expect(formatCurrency(1000.95, 2)).toBe('$1,000.95')
  expect(formatCurrency(1000.95, 2, 'en-GB')).toBe('£1,000.95')
  expect(formatCurrency(1000, 0, 'ja-JP')).toBe('￥1,000')
  expect(formatCurrency(1000.95, 2, 'en-GB')).toBe('£1,000.95')
  expect(formatCurrency(1000.95, 2, 'en-au')).toBe('$1,000.95')
})

test('formatDurationLabels', () => {
  expect(formatDurationLabels(0)).toBe('0 seconds')
  expect(formatDurationLabels(3600)).toBe('1 hour')
  expect(formatDurationLabels(3600 * 2, 'short')).toBe('2hr')
  expect(formatDurationLabels(3600 * 2 + 60)).toBe('2 hours 1 minute')
  expect(formatDurationLabels(3600 * 2 + 60 + 1)).toBe('2 hours 1 minute 1 second')
})

test('formatPercentage', () => {
  expect(formatPercentage(0.1234, 0)).toBe('12%')
  expect(formatPercentage(0.1234, 2)).toBe('12.34%')
})

test('formatUnixTime', () => {
  expect(formatUnixTime(1620000000)).toBe('2021-05-03 00:00:00.000')
})

test('formatList', () => {
  expect(formatList(['Apple', 'Oranges'])).toBe('Apple and Oranges')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Grapefruit'])).toBe('Apple, Oranges, Bananas and Grapefruit')
  expect(formatList(['Apple', 'Oranges'], 2)).toBe('Apple and Oranges')
  expect(formatList(['Apple', 'Oranges', 'Bananas'], 2)).toBe('Apple, Oranges and 1 more')
  expect(formatList(['Apple', 'Oranges', 'Bananas'], 3, 'or')).toBe('Apple, Oranges or Bananas')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Pears'], 2)).toBe('Apple, Oranges and 2 more')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Pears', 'Grapes'], 2)).toBe('Apple, Oranges and 3 more')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Pears', 'Grapes'], 2, 'or')).toBe('Apple, Oranges or 3 more')
})

test('formatTitle', () => {
  expect(formatTitle('hello world')).toBe('Hello World')
  expect(formatTitle('welcome to the jungle')).toBe('Welcome to the Jungle')
  expect(formatTitle('the quick brown fox jumps over the lazy dog')).toBe('The Quick Brown Fox Jumps Over the Lazy Dog')
  expect(formatTitle('UseMods is cooler than a vegan leather jacket')).toBe('UseMods is Cooler than a Vegan Leather Jacket')
})

test('formatInitials', () => {
  expect(formatInitials('Penelope Pitstop')).toBe('PP')
  expect(formatInitials('Zippy')).toBe('Z')
  expect(formatInitials('Dr. Robotnik')).toBe('R')
  expect(formatInitials('Mrs. Marple')).toBe('M')
  // @ts-expect-error
  expect(formatInitials(undefined)).toBe('')
  // @ts-expect-error
  expect(formatInitials(null)).toBe('')
})
