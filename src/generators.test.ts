import { expect, test, vi } from 'vitest'
import * as mod from './generators'

test('generateNumber', () => {
  expect(mod.generateNumber(1).toString()).toHaveLength(1)
  expect(mod.generateNumber(2).toString()).toHaveLength(2)
  expect(mod.generateNumber(3).toString()).toHaveLength(3)
  expect(mod.generateNumber(4).toString()).toHaveLength(4)
  expect(mod.generateNumber(5).toString()).toHaveLength(5)
  expect(mod.generateNumber(10).toString()).toHaveLength(10)
  expect(mod.generateNumber(0)).toBe(0)
})

test('generateNumberBetween', () => {
  expect(mod.generateNumberBetween(5, 10)).toBeGreaterThanOrEqual(5)
  expect(mod.generateNumberBetween(5, 10)).toBeLessThanOrEqual(10)
  expect(mod.generateNumberBetween(10, 15)).toBeGreaterThanOrEqual(10)
  expect(mod.generateNumberBetween(10, 15)).toBeLessThanOrEqual(15)
  expect(mod.generateNumberBetween(15, 10)).toBeLessThanOrEqual(15)
  expect(mod.generateNumberBetween(1, 1)).toBe(1)
})

test('generateUuid', () => {
  expect(mod.generateUuid()).toHaveLength(36)
  expect(mod.generateUuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
})

test('generateShortId', () => {
  expect(mod.generateShortId(19)).toHaveLength(19)
  expect(mod.generateShortId(19)).toMatch(/^[0-9a-zA-Z]{19}$/)
})

test('generatePassword', () => {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberChars = '0123456789'
  const specialChars = '!@#$%&()_+?'
  const allChars = 'abcdefghijklmnopqrstuvwxyz' + uppercaseChars + numberChars + specialChars

  // Defaults
  expect(mod.generatePassword()).toHaveLength(8)
  expect(mod.generatePassword()).toMatch(new RegExp(`^[${allChars}]{8}$`))

  // Length
  expect(mod.generatePassword({ length: 12 })).toHaveLength(12)
  expect(mod.generatePassword({ length: 8 })).toHaveLength(8)

  // Uppercase
  expect(mod.generatePassword({ uppercase: 2 })).toMatch(new RegExp(`[A-Z]{1,}`))

  // Numbers
  expect(mod.generatePassword({ number: 2 })).toMatch(new RegExp(`[0-9]{1,}`))

  // Special
  expect(mod.generatePassword({ special: 2 })).toMatch(new RegExp(`[${specialChars}]{1,}`))

})

test('generateRandomIndex', () => {
  // Default
  expect(mod.generateRandomIndex(10)).toBeGreaterThanOrEqual(0)
  expect(mod.generateRandomIndex(10)).toBeLessThanOrEqual(9)

  // Min
  expect(() => mod.generateRandomIndex(0)).toThrow('[MODS] Max generateRandomIndex value must be a positive integer')

  // Max
  expect(() => mod.generateRandomIndex(300)).toThrow('[MODS] Max generateRandomIndex value must be less than 256')

  // Window
  const originalWindow = global.window;
  global.window = {
    // @ts-ignore - Mock Test
    crypto: {
      getRandomValues: vi.fn((arr) => {
        // @ts-ignore - Mock Test
        arr[0] = 5;
        return arr;
      }),
    },
  }

  expect(mod.generateRandomIndex(10)).toBeLessThanOrEqual(9)
  expect(global.window.crypto.getRandomValues).toHaveBeenCalled()

  // Restore original window
  global.window = originalWindow
  vi.restoreAllMocks()
})

test('generateLoremIpsum', () => {
  // Words
  expect(mod.generateLoremIpsum(5).split(' ').length).toBe(5)
  expect(mod.generateLoremIpsum(10).split(' ').length).toBe(10)
  expect(mod.generateLoremIpsum(100).split(' ').length).toBe(100)

  // Sentences
  expect(mod.generateLoremIpsum(5, { format: 'sentences' }).split('.').filter(Boolean).length).toBe(5)
  expect(mod.generateLoremIpsum(10, { format: 'sentences' }).split('.').filter(Boolean).length).toBe(10)
  expect(mod.generateLoremIpsum(100, { format: 'sentences' }).split('.').filter(Boolean).length).toBe(100)

  // Paragraphs
  expect(mod.generateLoremIpsum(5, { format: 'paragraphs' }).split('\n').filter(Boolean).length).toBe(5)
  expect(mod.generateLoremIpsum(10, { format: 'paragraphs' }).split('\n').filter(Boolean).length).toBe(10)
  expect(mod.generateLoremIpsum(100, { format: 'paragraphs' }).split('\n').filter(Boolean).length).toBe(100)
})
