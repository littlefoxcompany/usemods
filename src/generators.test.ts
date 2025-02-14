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

test('generateUuid7', () => {
  const uuid = mod.generateUuid7()
  expect(uuid).toHaveLength(36)
  expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
})

test('generateUuid4', () => {
  const uuid = mod.generateUuid4()
  expect(uuid).toHaveLength(36)
  expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
})

test('generateUuid', () => {
  const uuid = mod.generateUuid()
  expect(uuid).toHaveLength(36)
  expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
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
  expect(mod.generatePassword({ uppercase: 2 })).toMatch(new RegExp('[A-Z]{1,}'))

  // Numbers
  expect(mod.generatePassword({ number: 2 })).toMatch(new RegExp('[0-9]{1,}'))

  // Special
  expect(mod.generatePassword({ special: 2 })).toMatch(new RegExp(`[${specialChars}]{1,}`))
})

test('generateRandomIndex', () => {
  // Default
  expect(mod.generateRandomIndex(10)).toBeGreaterThanOrEqual(0)
  expect(mod.generateRandomIndex(10)).toBeLessThanOrEqual(9)

  // Min
  expect(mod.generateRandomIndex(0)).toBe(0)

  // Window
  const originalWindow = global.window

  expect(mod.generateRandomIndex(10)).toBeLessThanOrEqual(9)

  // Test fallback path
  // @ts-expect-error - Intentionally removing window for testing
  global.window = undefined

  // Create mock crypto object before spying
  Object.defineProperty(globalThis, 'crypto', {
    value: undefined,
    writable: true,
    configurable: true,
  })

  const cryptoSpy = vi.spyOn(globalThis, 'crypto', 'get').mockReturnValue(undefined as any)

  const consoleSpy = vi.spyOn(console, 'warn')
  expect(mod.generateRandomIndex(10)).toBeLessThanOrEqual(9)
  expect(consoleSpy).toHaveBeenCalledWith('[MODS] crypto.getRandomValues is not available. Using random() fallback.')

  // Restore original values
  global.window = originalWindow
  cryptoSpy.mockRestore()
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

test('generateHighResolutionTime', () => {
  const time = mod.generateHighResolutionTime()
  expect(time).toBeGreaterThan(0)
  expect(time).toBeLessThan(10000000000000000)
})

test('encodeShortUuid', () => {
  const uuid = '2ededb11-c6ad-4af9-bcd6-30896a32c8b4'
  const shortUuid = mod.encodeShortUuid(uuid)
  expect(shortUuid).toHaveLength(22)
  expect(shortUuid).toMatch(/^[0-9a-zA-Z]{22}$/)
  expect(shortUuid).toEqual('Lt7bEcatSvm81jCJajLItA')
})

test('decodeShortUuid', () => {
  const uuid = '2ededb11-c6ad-4af9-bcd6-30896a32c8b4'
  const shortUuid = mod.encodeShortUuid(uuid)
  const decodedUuid = mod.decodeShortUuid(shortUuid)
  expect(decodedUuid).toBe(uuid)
})
