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

/**
 * Adds plurals to a string except for excluded words.
 */
export function pluralize(text: string, count: number): string {
  text = text.trim().toLowerCase()

  const excludedWords = new Set(['sheep', 'fish', 'deer', 'hay', 'moose', 'series', 'species', 'aircraft', 'bison', 'buffalo', 'cod', 'elk', 'halibut', 'hovercraft'])

  const irregularPlurals = new Map([
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

  if (count === 1) return text
  if (excludedWords.has(text)) return text
  if (irregularPlurals.has(text)) return irregularPlurals.get(text) || text

  if (text.endsWith('f')) return text.slice(0, -1) + 'ves'
  if (text.endsWith('fe')) return text.slice(0, -2) + 'ves'
  if (text.endsWith('y')) return text.slice(0, -1) + 'ies'
  if (text.endsWith('s')) return text
  if (text.endsWith('x')) return text + 'es'
  if (text.endsWith('ch')) return text + 'es'
  if (text.endsWith('sh')) return text + 'es'

  return text + 's'
}

/**
 * Removes plurals from a string.
 */
export function singularize(value: string): string {
  if (value.endsWith('s')) return value.substring(0, value.length - 1)
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

/**
 * Shuffles an array.
 */
export function shuffle(items: any[]): any {
  return items.sort(() => Math.random() - 0.5)
}

/**
 * Returns unique array values with an optional property to pluck.
 * @param items - The array of items.
 * @param property - The property to pluck (optional).
 */
export function unique(property: string | null = null, ...arrays: (string | { [key: string]: any })[][]): any[] {
  const combinedItems = arrays.flat()

  if (!property) {
    return [...new Set(combinedItems)]
  }

  const seenValues = new Set()
  const result = []

  for (const item of combinedItems) {
    if (typeof item === 'object' && item[property] && !seenValues.has(item[property])) {
      seenValues.add(item[property])
      result.push(item)
    }
  }

  return result
}

/**
 * Returns the difference between two arrays.
 */
export function difference(...arrays: any[][]): any[] {
  const mergedArray = arrays.flat()
  return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index)
}

/**
 * Returns the first item in an array.
 */
export function first(items: any[]): string {
  return items[0]
}

/**
 * Returns the last item in an array.
 */
export function last(items: any[]): string {
  return items[items.length - 1]
}

/**
 * Returns the nth item in an array.
 */
export function nth(items: any[], nth: number): string {
  return items[nth]
}

/**
 * Offset the first item in an array.
 */
export function offset(items: any[], offset: number): any[] {
  return items.slice(offset)
}

/**
 * Groups an array of objects by a property.
 */
export function group(items: { [key: string]: any }[], property: string): { [key: string]: any } {
  return items.reduce((accumulator, item) => {
    const key = item[property]
    if (!accumulator[key]) {
      accumulator[key] = []
    }
    accumulator[key].push(item)
    return accumulator
  }, {})
}

/**
 * Chunks an array into sections of a specified size.
 */
export function groupBy(items: any[], size: number): any[][] {
  const result = []
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size))
  }
  return result
}

/**
 * Flatten an array of arrays.
 */
export function flatten(items: any[]): any[] {
  return items.reduce((accumulator, item) => {
    if (Array.isArray(item)) {
      return accumulator.concat(flatten(item)) // recursive call if item is an array
    } else {
      return accumulator.concat(item)
    }
  }, [])
}

/**
 * Returns an array with a filtered out property.

 */
export function without(items: any[], properties: any | any[]): any[] {
  if (!Array.isArray(items)) {
    return items
  }

  if (Array.isArray(properties)) {
    return items.filter((item) => !properties.includes(item))
  } else {
    return items.map((item) => {
      if (typeof item === 'object' && item !== null) {
        item = { ...item }
        delete item[properties]
      }
      return item
    })
  }
}

/**
 * Combine two or more arrays
 */
export function combineAll(...arrays: any[][]): any[] {
  return ([] as any[]).concat(...arrays)
}

/**
 * Combine two or more unique arrays
 */
export function combineUnique(...items: (any | any[])[]): any[] {
  let combined: any[] = []

  for (let item of items) {
    if (Array.isArray(item)) {
      combined = [...combined, ...item]
    } else {
      combined.push(item)
    }
  }

  return Array.from(new Set(combined))
}

/**
 * Combine two or more arrays or objects without a property.
 */
export function combineWithout(
  property: string | number,
  ...items: (({ [key: string]: any } | { [key: number]: any }) | ({ [key: string]: any } | { [key: number]: any })[])[]
): any[] {
  let combined: any[] = []

  for (let item of items) {
    if (Array.isArray(item)) {
      combined = [...combined, ...item]
    } else {
      combined.push(item)
    }
  }

  const unique = Array.from(new Set(combined.map((item) => item[property])))
  return unique
}

/**
 * Reverse an array.
 */
export function reverse(items: any[]): any[] {
  return items.reverse()
}

/**
 * Sort an array by a property.
 */
export function sortBy(items: { [key: string]: any }[], property: string): { [key: string]: any }[] {
  return items.sort((a, b) => {
    return a[property] > b[property] ? 1 : -1
  })
}
