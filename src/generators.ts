// title: Generators
// description: A collection of magical functions that conjure data out of thin air.
// lead: Conjure data out of thin air

import { isServerSide } from './devices'

/**
 * Generate a random number
 */
export function generateNumber(length: number): number {
  if (!Number.isInteger(length) || length <= 0) {
    console.warn('[MODS] Warning: length must be a positive integer')
    return 0
  }

  const min = 10 ** (length - 1)
  const max = 10 ** length - 1
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Generate a random number between two values
 */
export function generateNumberBetween(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from + 1) + from)
}

/**
 * Generate a Version 4 UUID (cryptographically random)
 */
export function generateUuid4(): string {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)

  // Set version 4 (random)
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  // Set the variant according to RFC4122
  bytes[8] = (bytes[8] & 0x3f) | 0x80

  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0'))

  // Format the UUID as a standard string: 8-4-4-4-12.
  return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10).join('')}`
}

/**
 * Generate a Version 4 UUID (cryptographically random)
 */
export const generateUuid = generateUuid4

/**
 * Generate a Version 7 UUID encoding a Unix timestamp in the first 6 bytes and filling the rest with random bytes.
 * @info UUID is still an IETF draft specification.
 */
export function generateUuid7(): string {
  const now = Date.now() // milliseconds
  const subMillisecondNanoseconds = generateHighResolutionTime() % 1_000_000n // nanoseconds
  const fraction = Number((subMillisecondNanoseconds * 4096n) / 1_000_000n) & 0xfff // 12-bit fraction

  // Multiply by 4096 to shift the millisecond-precision timestamp by 12 bits,
  // then shift left by 4 to position the 60-bit value into the high 60 bits
  // of an 8-byte (64-bit) value.
  const compositeTimestamp = (((BigInt(now) * 4096n) + BigInt(fraction)) << 4n)

  // Create a buffer to store the UUID with the timestamp.
  const buffer = new ArrayBuffer(8)
  const view = new DataView(buffer)

  // Set the composite timestamp into the buffer (first 6 bytes of the UUID).
  view.setBigUint64(0, compositeTimestamp, false)

  const timestampBytes = new Uint8Array(buffer)

  // Set version 7 (UUIDv7) in the timestamp (binary 01110000 in the high nibble of byte 6).
  timestampBytes[6] = (timestampBytes[6] & 0x0f) | 0x70

  // Create an array for the full UUID (16 bytes total).
  const uuidBytes = new Uint8Array(16)
  uuidBytes.set(timestampBytes, 0)

  // Fill the remaining 8 bytes with random values.
  crypto.getRandomValues(uuidBytes.subarray(8))

  // Set the variant for UUIDv7.
  uuidBytes[8] = (uuidBytes[8] & 0x3f) | 0x80

  // Convert the UUID bytes to a hexadecimal string.
  const hex = Array.from(uuidBytes, b => b.toString(16).padStart(2, '0'))

  // Format the UUID as a standard string: 8-4-4-4-12.
  return [
    hex.slice(0, 4).join(''),
    hex.slice(4, 6).join(''),
    hex.slice(6, 8).join(''),
    hex.slice(8, 10).join(''),
    hex.slice(10, 16).join(''),
  ].join('-')
}

/**
 * Generate a unique short ID based on the current timestamp
 */
export function generateShortId(length: number = 19): string {
  const timestampPart = Math.floor(Date.now()).toString().toUpperCase()
  const randomPart = Math.random().toString().slice(2).toUpperCase()
  return (timestampPart + randomPart).slice(0, length)
}

/**
 * Generate a random, secure password with a mix of character types and pleasant special characters.
 * @info Don't forget to use our Password Checker in the Goodies section
 */
export function generatePassword(options?: { length?: number, uppercase?: number, number?: number, special?: number }): string {
  const { length = 8, uppercase = 1, number = 1, special = 1 } = options || {}
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberChars = '0123456789'
  const specialChars = '!@#$%&()_+?'
  const allChars = 'abcdefghijklmnopqrstuvwxyz' + uppercaseChars + numberChars + specialChars

  let password = ''

  // Ensure the first character is a letter
  password += allChars.charAt(generateRandomIndex(52)) // Selects a random letter from the first 52 characters (lowercase + uppercase)

  for (let i = 1; i < length; i++) {
    password += allChars.charAt(generateRandomIndex(allChars.length))
  }

  // Ensure the password meets the criteria
  const ensureCriteria = (regex: RegExp, chars: string, count: number) => {
    while ((password.match(regex) || []).length < count) {
      const randomIndex = generateRandomIndex(password.length)
      password = password.substring(0, randomIndex) + chars.charAt(Math.floor(generateRandomIndex(chars.length))) + password.substring(randomIndex + 1)
    }
  }

  ensureCriteria(/[A-Z]/g, uppercaseChars, uppercase)
  ensureCriteria(/[0-9]/g, numberChars, number)
  ensureCriteria(/[^a-zA-Z0-9]/g, specialChars, special)

  return password
}

/**
 * Random number generator using cryptographic methods to avoid random().
 */
export function generateRandomIndex(max: number): number {
  if (max <= 0 || max > 256) {
    console.warn('[MODS] Max generateRandomIndex must be between 1 and 255')
    return 0
  }

  const range = 256 - (256 % max)
  let randomValue

  function getRandomValue() {
    if (!isServerSide() && window.crypto && window.crypto.getRandomValues) {
      return window.crypto.getRandomValues(new Uint8Array(1))[0]
    }
    else if (globalThis.crypto && globalThis.crypto.getRandomValues) {
      return globalThis.crypto.getRandomValues(new Uint8Array(1))[0]
    }
    else {
      console.warn('[MODS] crypto.getRandomValues is not available. Using random() fallback.')
      return Math.floor(Math.random() * max)
    }
  }
  do {
    randomValue = getRandomValue()
  } while (randomValue === undefined || randomValue >= range)

  return randomValue % max
}

/**
 * Generate Lorem Ipsum text in various formats.
 */
export function generateLoremIpsum(count: number = 5, options?: { format: 'words' | 'sentences' | 'paragraphs' }): string {
  const { format = 'words' } = options || {}
  const lorem = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'.split(' ')

  function generateSentence() {
    const words = Array.from({ length: Math.floor(Math.random() * 10) + 5 }, () => lorem[Math.floor(Math.random() * lorem.length)]).join(' ')
    return formatSentence(words)
  }

  function formatSentence(sentence: string) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
  }

  if (format === 'sentences') {
    return Array.from({ length: count }, generateSentence).join(' ')
  }
  else if (format === 'paragraphs') {
    return Array.from({ length: count }, () => Array.from({ length: Math.floor(Math.random() * 10) + 5 }, generateSentence).join(' ')).join('\n\n')
  }
  else {
    return Array.from({ length: count }, () => lorem[Math.floor(Math.random() * lorem.length)]).join(' ')
  }
}

/**
 * Helper function to get high-resolution time using process.hrtime, or performance.now as a fallback.
 */
export function generateHighResolutionTime(): bigint {
  if (typeof process !== 'undefined' && process.hrtime && typeof process.hrtime.bigint === 'function') {
    return process.hrtime.bigint()
  }
  else if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    return BigInt(Math.floor(performance.now() * 1e6))
  }
  else {
    console.warn('[MODS] High-resolution timer is not available, using 0 as fallback')
    return 0n
  }
}

/**
 * Encodes a standard UUID (with dashes) into a URL-safe Base64 variant,
 */
export function encodeShortUuid(uuid: string): string {
  // Remove dashes and validate length
  const hex = uuid.replace(/-/g, '')
  if (hex.length !== 32) {
    throw new Error(`Invalid UUID: expected 32 hex chars, got length=${hex.length}.`)
  }

  // Convert each pair of hex digits to a byte (16 bytes total)
  const pairs = hex.match(/.{2}/g)!
  const bytes = pairs.map(pair => parseInt(pair, 16))

  // Convert bytes to binary string, then to Base64
  const binary = String.fromCharCode(...bytes)
  const base64 = btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  return base64
}

/**
 * Decodes a short URL-safe Base64-encoded string back into a standard
 */
export function decodeShortUuid(shortUuid: string): string {
  // Convert URL-safe chars back to normal Base64 and pad with '='
  let base64 = shortUuid.replace(/-/g, '+').replace(/_/g, '/')
  while (base64.length % 4 !== 0) {
    base64 += '='
  }

  // Decode Base64 → binary string
  const binary = atob(base64)
  if (binary.length !== 16) {
    throw new Error(`Decoded data must be 16 bytes; got length=${binary.length}.`)
  }

  // Convert each byte to two hex digits
  const hex = Array.from(binary)
    .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('')

  // Insert dashes (8-4-4-4-12)
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20),
  ].join('-')
}
