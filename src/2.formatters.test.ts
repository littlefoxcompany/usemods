import { expect, test } from 'bun:test'
import { formatCurrency, formatDuration, formatPercentage, formatUnixTime, formatList } from '../src/2.formatters'

test('formatPercentage', () => {
  expect(formatPercentage(0.1234)).toBe('12%')
  expect(formatPercentage(0.1234, 2)).toBe('12.34%')
  // Add additional test cases here
})
