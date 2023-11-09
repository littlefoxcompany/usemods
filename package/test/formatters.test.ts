import { expect, test } from "bun:test"
import { formatCurrency, formatTime } from "../src/formatters"

// @vitest-environment nuxt
// import * as mod from '@/utils/formatters'

test("formatCurrency", () => {
  expect(formatCurrency(1000.95)).toBe("$1,000.95")
  expect(formatCurrency(1000.95, "EUR")).toBe("€1,000.95")
  expect(formatCurrency(1000, "JPY")).toBe("¥1,000")
  expect(formatCurrency(1000.95, "GBP")).toBe("£1,000.95")
  expect(formatCurrency(1000.95, "CAD")).toBe("CA$1,000.95")
  expect(formatCurrency(1000.95, "AUD")).toBe("A$1,000.95")
})

test("formatTime", () => {
  expect(formatTime(3600)).toBe("1hr")
  expect(formatTime(3600 * 2 + 60)).toBe("2hr 1min")
  expect(formatTime(3600 * 2 + 60 + 1)).toBe("2hr 1min 1s")
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
