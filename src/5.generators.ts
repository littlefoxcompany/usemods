// title: Generators
// description: A collection of generators

/**
 * Generate a unique short ID based on the current timestamp
 */
export function generateShortId(length: number = 36): string {
  return Math.floor(Date.now()).toString(length).toUpperCase()
}

/**
 * Generate initials from any string while ignoring common titles
 */
export function generateInitials(text: string, length: number = 2): string {
  text = text.replace(/(Mr|Mrs|Ms|Dr|Jr|Sr|Prof|Hon)\.?/g, '')
  return text
    .split(' ')
    .filter((word) => !['the', 'third'].includes(word.toLowerCase()))
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, length)
}

/**
 * Generate a random number
 */
export function generateNumber(length: number): number {
  return Math.floor(Math.random() * Math.pow(10, length))
}

/**
 * Generate a random number between two values
 */
export function generateNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Generate a random string of characters
 */
export function generateString(length: number = 6): string {
  return Math.random().toString(20).substring(2, length)
}

/**
 * Generate a random, secure password with a mix of character types.
 */
export function generatePassword(length: number = 8): string {
  if (length < 8) length = 8

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*'
  const allChars = uppercase + lowercase + numbers + symbols

  const passwordArray = [
    uppercase[Math.floor(Math.random() * uppercase.length)],
    lowercase[Math.floor(Math.random() * lowercase.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    symbols[Math.floor(Math.random() * symbols.length)]
  ]

  for (let i = passwordArray.length; i < length; i++) {
    passwordArray.push(allChars[Math.floor(Math.random() * allChars.length)])
  }

  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]]
  }

  return passwordArray.join('')
}

/**
 * Generate a random color
 */
export function generateRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

/**
 * Generate a URL-friendly slug from a string.
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

/**
 * Generate a universally unique identifier (UUID).
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * Generate a random bearer token.
 */
export function generateBearerToken(length: number = 20): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return 'Bearer ' + Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

/**
 * Generate Lorem Ipsum text in various formats.
 */
export function generateLoremIpsum(count: number = 5, format: string = 'words'): string {
  const lorem = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'.split(' ')

  const generateSentence = () => {
    const words = Array.from({ length: Math.floor(Math.random() * 10) + 5 }, () => lorem[Math.floor(Math.random() * lorem.length)]).join(' ')
    return formatSentence(words)
  }

  const formatSentence = (sentence: string) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
  }

  if (format === 'sentences') {
    return Array.from({ length: count }, generateSentence).join(' ')
  } else if (format === 'paragraphs') {
    return Array.from({ length: count }, () => Array.from({ length: Math.floor(Math.random() * 3) + 2 }, generateSentence).join(' ')).join('\n\n')
  } else {
    return lorem.slice(0, count).join(' ')
  }
}

/**
 * Generate a random date within a given range.
 */
export function generateRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
