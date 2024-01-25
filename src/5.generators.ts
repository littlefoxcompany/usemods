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
