// title: Generators
// description: A collection of generators

/**
 * Generate a unique short ID based on the current timestamp
 * @example generateShortId(36)
 * @returns 1HR2MIN3S
 */
export function generateShortId(length: number = 36): string {
  return Math.floor(Date.now()).toString(length).toUpperCase()
}

/**
 * Generate initials from any string
 * @example generateInitials('John Doe')
 * @returns JD
 */
export function generateInitials(text: string, count: number = 2): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .substr(0, count)
}
