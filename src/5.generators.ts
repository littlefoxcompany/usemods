// title: Generators
// description: A collection of generators

/**
 * Generate a unique short ID based on the current timestamp
 */
export function generateShortId(length: number = 36): string {
  return Math.floor(Date.now()).toString(length).toUpperCase()
}

/**
 * Generate initials from any string
 */
export function generateInitials(text: string, count: number = 2): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .substr(0, count)
}
