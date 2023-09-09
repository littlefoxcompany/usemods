/**
 * Adds a space between the last two words in a string.
 * @example widont('Hello World')
 */
export function widont(text: string): string {
  const space = text.lastIndexOf(' ')

  return text.substring(0, space) + '&nbsp;' + text.substring(space + 1)
}

/**
 * Strip HTML tags from a string.
 * @example stripHtml('<p>Hello World</p>')
 */
export function stripHtml(text: string): string {
  return text.replace(/<[^>]*>?/gm, '')
}

/**
 * Escape HTML entities in a string.
 * @example escapeHtml('<p>Hello World</p>') => '&lt;p&gt;Hello World&lt;/p&gt;'
 */
export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Unescape HTML entities in a string.
 * @example showHtml('&lt;p&gt;Hello World&lt;/p&gt;') => '<p>Hello World</p>'
 */
export function showHtml(text: string): string {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Strip HTML tags from a string.
 * @example stripTags('<p>Hello World</p>')
 */
export function stripTags(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, '')
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
 * @example deslugify('hello-world') => 'hello world'
 */
export function deslugify(text: string): string {
  return text.toLowerCase().replace(/-/g, ' ')
}

/**
 * Truncates a string to a specified length of characters.
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) {
    return text
  }
  return text.substring(0, length) + '...'
}

/**
 * Truncates a string by a number of words
 */
export function truncateWords(text: string, length: number): string {
  const words = text.split(' ')
  if (words.length <= length) {
    return text
  }
  const truncatedWords = words.slice(0, length)

  return truncatedWords.join(' ') + '...'
}

/**
 * Counts the number of words in a string.
 */
export function countWords(text: string): number {
  return text.split(' ').length
}

/**
 * Counts the number of characters in a string.
 */
export function countCharacters(text: string): number {
  return text.length
}

/**
 * Counts the number of lines in a string.
 */
export function countLines(text: string): number {
  return text.split('\n').length
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
  return text.replace(/[\u{1F600}-\u{1F6FF}]/gu, '')
}

/**
 * Returns the reading time of a string in Hours, Minutes, and Seconds.
 */
export function readingTime(text: string, wordsPerMinute = 200): string {
  const words = text.split(' ').length
  const minutes = words / wordsPerMinute
  const readTime = Math.ceil(minutes)

  return formatTime(readTime)
}

/**
 * Adds plurals to a string.
 */
export function pluralize(text: string, count: number): string {
  if (count === 1) {
    return text
  }

  return text + 's'
}

/**
 * Removes plurals from a string.
 */
export function singularize(text: string, count: number): string {
  if (count === 1) {
    return text
  }

  return text.substring(0, text.length - 1)
}

/**
 * Converts a number to a string with ordinal suffix.
 */
export function ordinalize(number: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const remainder = number % 100

  return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0])
}

/**
 * Replaces underscores with spaces and capitalizes the first letter of each word.
 */
export function humanize(text: string): string {
  return text
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
}

/**
 * Removes spaces and capitalizes the first letter of each word except for the first word.
 */
export function camelCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

/**
 * Removes spaces and capitalizes the first letter of each word.
 */
export function pascalCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

/**
 * Replaces spaces with underscores and converts to lowercase.
 */
export function snakeCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : '_' + word.toLowerCase()
    })
    .replace(/\s+/g, '')
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
 * Converts to sentence case by capitalizing the first letter of the first word.
 */
export function sentenceCase(text: string): string {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toUpperCase() : word.toLowerCase()
    })
    .replace(/\s+/g, ' ')
}

/**
 * Adds a prefix to a string if it doesn't already start with the prefix.
 */
export function startsWith(text: string, startsWith: string): string {
  if (text.startsWith(startsWith)) {
    return text
  } else {
    return startsWith + text
  }
}

/**
 * Adds a suffix to a string if it doesn't already end with the suffix.
 */
export function endsWith(text: string, endsWith: string): string {
  if (text.endsWith(endsWith)) {
    return text
  } else {
    return text + endsWith
  }
}

/**
 * Adds a prefix and suffix to a string if it doesn't already start and end with them.
 * @param text - The string to surround.
 * @param prefix - The prefix to add.
 * @param suffix - The suffix to add.
 */
export function surround(text: string, startsWith: string, endsWith: string): string {
  if (text.startsWith(startsWith) && text.endsWith(endsWith)) {
    return text
  }

  if (text.startsWith(startsWith)) {
    return text + endsWith
  }

  if (text.endsWith(endsWith)) {
    return startsWith + text
  }

  return startsWith + text + endsWith
}

/**
 * Converts a string to title case following the Chicago Manual of Style rules.
 * @reference https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html
 */
export function title(text: string): string {
  const exceptions = [
    'a',
    'an',
    'the',
    'for',
    'and',
    'nor',
    'but',
    'or',
    'yet',
    'so',
    'in',
    'on',
    'at',
    'with',
    'under',
    'above',
    'from',
    'of',
    'although',
    'because',
    'since',
    'unless'
  ]

  const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

  return text
    .split(' ')
    .map((word, index, wordsArray) => {
      const lowercaseWord = word.toLowerCase()
      if (index > 0 && word.includes('-')) {
        const [firstPart, secondPart] = word.split('-')
        return capitalize(firstPart) + '-' + secondPart.toLowerCase()
      }
      if (index === 0 || index === wordsArray.length - 1 || !exceptions.includes(lowercaseWord)) {
        return capitalize(lowercaseWord)
      }
      if (lowercaseWord === 'to' && index > 0 && wordsArray[index - 1].toLowerCase() !== 'to') {
        return lowercaseWord
      }
      return exceptions.includes(lowercaseWord) ? lowercaseWord : capitalize(lowercaseWord)
    })
    .join(' ')
}

/**
 * Wraps each word in a string with a span tag.
 */
export function splitByWords(text: string): string {
  const sentences = text.split(/([\.\?\!])\s*/)

  let wordIndex = 0
  let combinedSentences = []

  for (let i = 0; i < sentences.length; i += 2) {
    const sentence = sentences[i] + (sentences[i + 1] || '')

    if (sentence.trim() === '') {
      continue
    }

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
 * Creates an array of list items (<li>) from an array of strings.
 * @example li(['Hello', 'World']) => ['<li>Hello</li>', '<li>World</li>']
 */
export function li(items: string[]): string[] {
  return items.map((item) => {
    return `<li>${item}</li>`
  })
}

/**
 * Create an ordered list (<ol>) from an array of strings.
 * @example ol(['Hello', 'World']) => '<ol><li>Hello</li><li>World</li></ol>'
 */
export function ol(items: string[]): string {
  return `<ol>${li(items).join('')}</ol>`
}

/**
 * Create an unordered list (<ul>) from an array of strings.
 */
export function ul(items: string[]): string {
  return `<ul>${li(items).join('')}</ul>`
}

/**
 * Create a string of comma-separated values from an array of strings with an optional conjunction.
 * @param items - The array of strings.
 * @param conjunction - The conjunction before the last item e.g. "and" or "or".
 */
export function commaList(items: string[], conjunction: string = 'and'): string {
  return items.slice(0, -1).join(', ') + ' ' + conjunction + ' ' + items.slice(-1)
}

/**
 * Create a string of comma-separated values with a limit and an optional conjunction.
 * @param items - The array of strings.
 * @param limit - The number of items to show before truncating.
 */
export function truncateList(items: string[], limit: number, conjunction: string = 'and'): string {
  if (items.length === 1) {
    return items[0]
  }
  if (items.length === 2) {
    return items.join(' ' + conjunction + ' ')
  }
  if (items.length === 3) {
    return items.slice(0, -1).join(', ') + ' ' + conjunction + ' ' + items.slice(-1)
  }
  if (items.length > 3) {
    return items.slice(0, limit).join(', ') + ' ' + conjunction + ' ' + (items.length - limit) + ' more'
  }
  return ''
}

/**
 * Shuffles an array.
 */
export function shuffle(items: string[]): string[] {
  return items.sort(() => Math.random() - 0.5)
}

/**
 * Returns unique array values with an optional property to pluck.
 * @param items - The array of items.
 * @param property - The property to pluck (optional).
 */
export function unique(items: (string | { [key: string]: any })[], property: string | null = null): any[] {
  if (!property) {
    return [...new Set(items)]
  }

  const seenValues = new Set()
  const result = []

  for (const item of items) {
    if (typeof item === 'object' && item[property] && !seenValues.has(item[property])) {
      seenValues.add(item[property])
      result.push(item)
    }
  }

  return result
}

/**
 * Returns the first item in an array.
 */
export function first(items: string[]): string {
  return items[0]
}

/**
 * Returns the last item in an array.
 */
export function last(items: string[]): string {
  return items[items.length - 1]
}

/**
 * Returns the nth item in an array.
 */
export function nth(items: string[], nth: number): string {
  return items[nth]
}
