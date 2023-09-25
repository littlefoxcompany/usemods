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
  return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
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
 * Removes a prefix from a string if it starts with the prefix.
 */

export function startsWithout(text: string, prefix: string): string {
  if (text.startsWith(prefix)) {
    return text.substring(prefix.length)
  } else {
    return text
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
 * Removes a suffix from a string if it ends with the suffix.
 */
export function endsWithout(text: string, suffix: string): string {
  if (text.endsWith(suffix)) {
    return text.substring(0, text.length - suffix.length)
  } else {
    return text
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
 * @example js asdfasdf
 */
export function list(items: any[], listType: string = 'ul'): string {
  const listItem = (item: any) => {
    return `<li>${item}</li>`
  }

  const listItems = items.map(listItem).join('')

  if (listType === 'ol') {
    return `<ol>${listItems}</ol>`
  } else if (listType === 'ul') {
    return `<ul>${listItems}</ul>`
  } else {
    return listItems
  }
}

/**
 * Create a string of comma-separated values from an array of strings with an optional conjunction.
 * @param items - The array of strings.
 * @param conjunction - The conjunction before the last item e.g. "and" or "or".
 */
export function commaList(items: any[], conjunction: string = 'and'): string {
  return items.slice(0, -1).join(', ') + ' ' + conjunction + ' ' + items.slice(-1)
}

/**
 * Create a string of comma-separated values with a limit and an optional conjunction.
 * @param items - The array of strings.
 * @param limit - The number of items to show before truncating.
 */
export function truncateList(items: any[], limit: number, conjunction: string = 'and'): string {
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
export function shuffle(items: any[]): any[] {
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
 * Combine two arrays
 */
export function combine(...arrays: any[][]): any[] {
  return ([] as any[]).concat(...arrays)
}

/**
 * Combine two unique arrays
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
 * Combine two arrays or objects without a property.
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
