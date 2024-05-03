import { expect, test } from 'vitest'
import {
  formatNumber,
  formatCurrency,
  formatDurationLabels,
  formatPercentage,
  formatUnixTime,
  formatList,
  formatTitle,
  formatInitials,
  formatValuation,
  formatNumberToWords
} from '../src/2.formatters'

test('formatNumber', () => {
  expect(formatNumber(1000.95)).toBe('1,000.95')
  expect(formatNumber(1000.95, { decimals: 2 })).toBe('1,000.95')
  expect(formatNumber(1000.95, { decimals: 2, locale: 'id-ID' })).toBe('1.000,95')
})

test('formatCurrency', () => {
  expect(formatCurrency(0)).toBe('$0.00')
  expect(formatCurrency(0, { decimals: 0 })).toBe('$0')
  expect(formatCurrency(1000.95)).toBe('$1,000.95')
  expect(formatCurrency(1000.95, { decimals: 2 })).toBe('$1,000.95')
  expect(formatCurrency(1000.95, { decimals: 2, locale: 'en-GB' })).toBe('£1,000.95')
  expect(formatCurrency(1000, { decimals: 0, locale: 'ja-JP' })).toBe('￥1,000')
  expect(formatCurrency(1000.95, { decimals: 2, locale: 'en-GB' })).toBe('£1,000.95')
  expect(formatCurrency(1000.95, { decimals: 2, locale: 'en-au' })).toBe('$1,000.95')
})

test('formatValuation', () => {
  expect(formatValuation(0)).toBe('$0.00')
  expect(formatValuation(12345678)).toBe('$12.35M')
  expect(formatValuation(12345678, { decimals: 0 })).toBe('$12M')
  expect(formatValuation(12345678, { decimals: 0, locale: 'en-GB' })).toBe('£12M')
  expect(formatValuation(12345678, { decimals: 2, locale: 'en-GB' })).toBe('£12.35M')
})

test('formatDurationLabels', () => {
  expect(formatDurationLabels(0)).toBe('0 seconds')
  expect(formatDurationLabels(3600)).toBe('1 hour')
  expect(formatDurationLabels(3600 * 2, { labels: 'short' })).toBe('2hr')
  expect(formatDurationLabels(3600 * 2, { labels: 'long' })).toBe('2 hours')
  expect(formatDurationLabels(3600 * 2 + 60)).toBe('2 hours 1 minute')
  expect(formatDurationLabels(3600 * 2 + 60 + 1)).toBe('2 hours 1 minute 1 second')
})

test('formatPercentage', () => {
  expect(formatPercentage(0.1234, { decimals: 0 })).toBe('12%')
  expect(formatPercentage(0.1234, { decimals: 2 })).toBe('12.34%')
  expect(formatPercentage(0.125, { decimals: 0 })).toBe('13%')
})

test('formatList', () => {
  expect(formatList(['Apple', 'Oranges'])).toBe('Apple and Oranges')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Grapefruit'])).toBe('Apple, Oranges, Bananas and Grapefruit')
  expect(formatList(['Apple', 'Oranges'], { limit: 2 })).toBe('Apple and Oranges')
  expect(formatList(['Apple', 'Oranges', 'Bananas'], { limit: 2 })).toBe('Apple, Oranges and 1 more')
  expect(formatList(['Apple', 'Oranges', 'Bananas'], { limit: 3, conjunction: 'or' })).toBe('Apple, Oranges or Bananas')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Pears'], { limit: 2 })).toBe('Apple, Oranges and 2 more')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Pears', 'Grapes'], { limit: 2 })).toBe('Apple, Oranges and 3 more')
  expect(formatList(['Apple', 'Oranges', 'Bananas', 'Pears', 'Grapes'], { limit: 2, conjunction: 'or' })).toBe('Apple, Oranges or 3 more')
  expect(formatList([], { limit: 2, conjunction: 'or' })).toBe('')
})

test('formatTitle', () => {
  expect(formatTitle('hello world')).toBe('Hello World')
  expect(formatTitle('welcome to the jungle')).toBe('Welcome to the Jungle')
  expect(formatTitle('the quick brown fox jumps over the lazy dog')).toBe('The Quick Brown Fox Jumps Over the Lazy Dog')
  expect(formatTitle('UseMods is cooler than a vegan leather jacket')).toBe('UseMods is Cooler than a Vegan Leather Jacket')
  // @ts-expect-error
  expect(formatTitle(null)).toBe('')
  // @ts-expect-error
  expect(formatTitle(undefined)).toBe('')
})

test('formatNumberToWord', () => {
  expect(formatNumberToWords(0)).toBe('zero')
  expect(formatNumberToWords(1)).toBe('one')
  expect(formatNumberToWords(12)).toBe('twelve')
  expect(formatNumberToWords(123)).toBe('one hundred and twenty-three')
  expect(formatNumberToWords(1234)).toBe('one thousand, two hundred and thirty-four')
  expect(formatNumberToWords(12345)).toBe('twelve thousand, three hundred and forty-five')
  expect(formatNumberToWords(123456)).toBe('one hundred and twenty-three thousand, four hundred and fifty-six')
  expect(formatNumberToWords(1234567)).toBe('one million, two hundred and thirty-four thousand, five hundred and sixty-seven')
  expect(formatNumberToWords(12345678)).toBe('twelve million, three hundred and forty-five thousand, six hundred and seventy-eight')
  expect(formatNumberToWords(123456789)).toBe('one hundred and twenty-three million, four hundred and fifty-six thousand, seven hundred and eighty-nine')
  expect(formatNumberToWords(1234567890)).toBe('one billion, two hundred and thirty-four million, five hundred and sixty-seven thousand, eight hundred and ninety')
  expect(formatNumberToWords(12345678901)).toBe('twelve billion, three hundred and forty-five million, six hundred and seventy-eight thousand, nine hundred and one')
  expect(formatNumberToWords(123456789012)).toBe('one hundred and twenty-three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand, twelve')
  expect(formatNumberToWords(1234567890123)).toBe(
    'one trillion, two hundred and thirty-four billion, five hundred and sixty-seven million, eight hundred and ninety thousand, one hundred and twenty-three'
  )
})

test('formatUnixTime', () => {
  expect(formatUnixTime(1620000000)).toBe('2021-05-03 00:00:00.000')
})

test('formatInitials', () => {
  expect(formatInitials('Penelope Pitstop')).toBe('PP')
  expect(formatInitials('Zippy')).toBe('Z')
  expect(formatInitials('Dr. Robotnik')).toBe('R')
  expect(formatInitials('Mrs. Marple')).toBe('M')
  expect(formatInitials('William W Whittle', { length: 3 })).toBe('WWW')
  // @ts-expect-error
  expect(formatInitials(undefined)).toBe('')
  // @ts-expect-error
  expect(formatInitials(null)).toBe('')
})
