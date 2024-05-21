// title: Modifiers
// description: Modify and transform your content with our collection of efficient and easy-to-use functions designed to dicipher, manipulate, and transform strings.
// lead: Bend content to your will

import { unchangingPlurals, irregularPlurals } from './config'

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
 * @info This handles most english pluralisation rules, but there are exceptions.
 */
export function pluralize(value: string, count: number): string {
  if (count === 1 || !value || typeof value !== 'string') return value || '';

  value = value.trim().toLowerCase();
  if (unchangingPlurals.has(value)) return value;
  if (irregularPlurals.has(value)) return irregularPlurals.get(value) || value;

  const suffixRules = new Map<string, string>([
    ['ch', 'ches'],
    ['ss', 'sses'],
    ['sh', 'shes'],
    ['x', 'xes'],
    ['s', 'ses'],
    ['z', 'zes'],
    ['o', 'oes'],
    ['us', 'i'],
    ['f', 'ves'],
    ['fe', 'ves'],
    ['y', 'ies']
  ]);

  for (const [suffix, replacement] of suffixRules) {
    if (value.endsWith(suffix)) {
      return value.slice(0, -suffix.length) + replacement;
    }
  }

  return value + 's';
}

/**
 * Removes plurals from a string.
 * @info This handles most english pluralisation rules, but there are exceptions.
 */
export function singularize(value: string): string {
  value = value.trim().toLowerCase()

  if (unchangingPlurals.has(value)) return value
  
  for (const [singular, plural] of irregularPlurals) {
    if (plural === value) return singular;
  }

  const singularRules = new Map<string, (value: string) => string>([
    ['ives', value => value.slice(0, -4) + 'ife'],
    ['ves', value => value.slice(0, -3) + 'f'],
    ['ies', value => value.slice(0, -3) + 'y'],
    ['ches', value => value.slice(0, -2)],
    ['shes', value => value.slice(0, -2)],
    ['xes', value => value.slice(0, -2)],
    ['oes', value => value.slice(0, -2)],
    ['ses', value => value.slice(0, -2)],
    ['es', value => value.slice(0, -1)],
    ['i', value => value.slice(0, -1) + 'us'],
    ['a', value => value.slice(0, -1) + 'on'],
    ['s', value => value.length > 1 ? value.slice(0, -1) : value]
  ]);

  for (const [suffix, transform] of singularRules) {
    if (value.endsWith(suffix)) {
      return transform(value);
    }
  }

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
 * Strip HTML tags from a string.
 */
export function stripHtml(text: string): string {
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
  return text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
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
  return text.replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Emoticons
    .replace(/[\u{1F300}-\u{1F5FF}]/gu, '') // Miscellaneous Symbols and Pictographs
    .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Transport and Map Symbols
    .replace(/[\u{1F700}-\u{1F77F}]/gu, '') // Alchemical Symbols
    .replace(/[\u{1F780}-\u{1F7FF}]/gu, '') // Geometric Shapes Extended
    .replace(/[\u{1F800}-\u{1F8FF}]/gu, '') // Supplemental Arrows-C
    .replace(/[\u{1F900}-\u{1F9FF}]/gu, '') // Supplemental Symbols and Pictographs
    .replace(/[\u{1FA00}-\u{1FA6F}]/gu, '') // Chess Symbols
    .replace(/[\u{1FA70}-\u{1FAFF}]/gu, '') // Symbols and Pictographs Extended-A
    .replace(/[\u{2600}-\u{26FF}]/gu, '') // Miscellaneous Symbols
    .replace(/[\u{2700}-\u{27BF}]/gu, ''); // Dingbats
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
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => {
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
