// title: Modifiers
// description: Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

/**
 * Adds a space between the last two words in a string to prevent lonely words.
 */
export function widont(value: string): string {
  const space = value.lastIndexOf(' ')
  return value.substring(0, space) + '&nbsp;' + value.substring(space + 1)
}

/**
 * Adds a prefix to a string if it doesn't already start with the prefix.
 */
export function startWith(value: string, start: string): string {
  if (value.startsWith(start)) return value
  return start + value
}

/**
 * Removes a prefix from a string if it starts with the prefix.
 */
export function startWithout(value: string, start: string): string {
  if (value.startsWith(start)) return value.substring(start.length)
  return value
}

/**
 * Adds a suffix to a string if it doesn't already end with the suffix.
 */
export function endWith(text: string, end: string): string {
  if (text.endsWith(end)) return text
  return text + end
}

/**
 * Removes a suffix from a string if it ends with the suffix.
 */
export function endWithout(text: string, end: string): string {
  if (text.endsWith(end)) return text.substring(0, text.length - end.length)
  return text
}

/**
 * Adds a prefix and suffix to a string if it doesn't already start and end with them.
 */
export function surroundWith(text: string, start: string, end: string): string {
  if (text.startsWith(start) && text.endsWith(end)) return text
  if (text.startsWith(start)) return text + end
  if (text.endsWith(end)) return start + text
  return start + text + end
}

export const unchangingPlurals = new Set([
  'sheep',
  'fish',
  'deer',
  'hay',
  'moose',
  'series',
  'species',
  'aircraft',
  'bison',
  'buffalo',
  'cod',
  'elk',
  'halibut',
  'hovercraft',
  'lego',
  'mackerel',
  'salmon',
  'spacecraft',
  'swine',
  'trout',
  'tuna'
])
export const irregularPlurals = new Map([
  ['child', 'children'],
  ['person', 'people'],
  ['man', 'men'],
  ['woman', 'women'],
  ['tooth', 'teeth'],
  ['foot', 'feet'],
  ['mouse', 'mice'],
  ['goose', 'geese'],
  ['ox', 'oxen'],
  ['leaf', 'leaves'],
  ['life', 'lives'],
  ['knife', 'knives'],
  ['wife', 'wives'],
  ['half', 'halves'],
  ['elf', 'elves'],
  ['loaf', 'loaves'],
  ['potato', 'potatoes'],
  ['tomato', 'tomatoes'],
  ['cactus', 'cacti'],
  ['focus', 'foci'],
  ['fungus', 'fungi'],
  ['nucleus', 'nuclei'],
  ['syllabus', 'syllabi']
  // TODO: Add more irregular plurals
])

/**
 * Adds plurals to a string except for excluded words.
 */
export function pluralize(value: string, count: number): string {
  value = value.trim().toLowerCase()

  if (count === 1) return value
  if (unchangingPlurals.has(value)) return value
  if (irregularPlurals.has(value)) return irregularPlurals.get(value) || value

  if (value.endsWith('f')) return value.slice(0, -1) + 'ves'
  if (value.endsWith('fe')) return value.slice(0, -2) + 'ves'
  if (value.endsWith('y')) return value.slice(0, -1) + 'ies'
  if (value.endsWith('s')) return value
  if (value.endsWith('x')) return value + 'es'
  if (value.endsWith('ch')) return value + 'es'
  if (value.endsWith('sh')) return value + 'es'

  return value + 's'
}

/**
 * Removes plurals from a string.
 */
export function singularize(value: string): string {
  value = value.trim().toLowerCase()

  if (unchangingPlurals.has(value)) return value
  if (irregularPlurals.has(value)) return irregularPlurals.get(value) || value

  if (value.endsWith('ives')) return value.slice(0, -4) + 'ife'
  if (value.endsWith('ves')) return value.slice(0, -3) + 'f'
  if (value.endsWith('ies')) return value.slice(0, -3) + 'y'
  if (value.endsWith('ches') || value.endsWith('shes') || value.endsWith('xes')) return value.slice(0, -2)
  if (value.endsWith('oes')) return value.slice(0, -2)
  if (value.endsWith('us') || value.endsWith('ss')) return value
  if (value.endsWith('i')) return value.slice(0, -1) + 'us'
  if (value.endsWith('a')) return value.slice(0, -1) + 'on'
  if (value.endsWith('s') && value.length > 1) return value.slice(0, -1)

  return value
}

/**
 * Converts a number to a string with ordinal suffix.
 */
export function ordinalize(value: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const remainder = value % 100
  return value + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0])
}

/**
 * Wraps each word, sentence or paragraph in a string with a tag.
 */
export function splitByWords(text: string): string {
  const sentences = text.split(/([\.\?\!])\s*/)

  let wordIndex = 0
  let combinedSentences = []

  for (let i = 0; i < sentences.length; i += 2) {
    const sentence = sentences[i] + (sentences[i + 1] || '')

    if (sentence.trim() === '') continue

    const words = sentence
      .split(' ')
      .map((word) => {
        wordIndex++
        return `<span class="word word-${wordIndex}">${word}</span>`
      })
      .join(' ')

    combinedSentences.push(`<span class="sentence sentence-${combinedSentences.length + 1}">${words}</span>`)
  }

  return combinedSentences.join(' ')
}

/**
 * Strip HTML tags from a string.
 */
export function stripHtml(text: string): string {
  return text.replace(/<[^>]*>?/gm, '')
}

/**
 * Strip HTML tags from a string.
 */
export function stripTags(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, '')
}

/**
 * Strips whitespace from a string.
 */
export function stripWhitespace(text: string): string {
  return text.replace(/\s+/g, '')
}

/**
 * Strips numbers from a string.
 */
export function stripNumbers(text: string): string {
  return text.replace(/[0-9]/g, '')
}

/**
 * Strips punctuation from a string.
 */
export function stripPunctuation(text: string): string {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

/**
 * Strips symbols from a string.
 */
export function stripSymbols(text: string): string {
  return text.replace(/[^\w\s]|_/g, '')
}

/**
 * Strips emojis from a string (requires ES6 Unicode support) 🦊.
 */
export function stripEmojis(text: string): string {
  return text.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F\u200D\u20E3]/gu, '')
}

/**
 * Converts a string to-a-slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Converts a slug to a string.
 */
export function deslugify(text: string): string {
  return text.toLowerCase().replace(/-/g, ' ')
}

/**
 * Removes spaces and capitalizes the first letter of each word except for the first word.
 */
export function camelCase(text: string): string {
  return text
    .trim()
    .split(/[-\s]/)
    .map((word, index) => {
      if (index === 0) return word.toLowerCase()
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

/**
 * Removes spaces and capitalizes the first letter of each word.
 */
export function pascalCase(text: string): string {
  return text
    .trim()
    .split(/[-\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

/**
 * Replaces spaces with underscores and converts to lowercase.
 */
export function snakeCase(text: string): string {
  return text.trim().replace(/\s+/g, '_').toLowerCase()
}

/**
 * Replaces spaces with hyphens and converts to lowercase.
 */
export function kebabCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : '-' + word.toLowerCase()
    })
    .replace(/\s+/g, '')
}

/**
 * Converts to title case by capitalizing the first letter of each word.
 */
export function titleCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return word.toUpperCase()
    })
    .replace(/\s+/g, ' ')
}

/**
 * Escape HTML entities in a string.
 */
export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Unescape HTML entities in a string.
 */
export function unescapeHtml(text: string): string {
  return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}
