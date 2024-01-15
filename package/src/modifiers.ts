// title: Modifiers
// description: Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

import { formatTime } from './formatters'

/**
 * Adds a space between the last two words in a string.
 * @example widont('Cool cool cool')
 * @returns cool cool&nbsp;cool
 */
export function widont(text: string): string {
  const space = text.lastIndexOf(' ')

  return text.substring(0, space) + '&nbsp;' + text.substring(space + 1)
}

/**
 * Strip HTML tags from a string.
 * @example stripHtml('<p>Hello World</p>')
 * @returns Hello World
 */
export function stripHtml(text: string): string {
  return text.replace(/<[^>]*>?/gm, '')
}

/**
 * Escape HTML entities in a string.
 * @example escapeHtml('<p>Hello World</p>')
 * @returns &lt;p&gt;Hello World&lt;/p&gt;
 */
export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Unescape HTML entities in a string.
 * @example unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
 * @returns <p>Hello World</p>
 */
export function unescapeHtml(text: string): string {
  return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

/**
 * Strip HTML tags from a string.
 * @example stripTags('<p>Hello World</p>')
 * @returns Hello World
 */
export function stripTags(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, '')
}

/**
 * Converts a string to-a-slug.
 * @example slugify('Hello World')
 * @returns hello-world
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Converts a slug to a string.
 * @example deslugify('hello-world')
 * @returns hello world
 */
export function deslugify(text: string): string {
  return text.toLowerCase().replace(/-/g, ' ')
}

/**
 * Truncates a string to a specified length of characters.
 * @example truncate('Hello World', 5)
 * @returns Hello...
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) {
    return text
  }
  return text.substring(0, length) + '...'
}

/**
 * Truncates a string by a number of words
 * @example truncateWords('Hello World', 1)
 * @returns Hello...
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
 * @example countWords('Hello World')
 * @returns 2
 */
export function countWords(text: string): number {
  return text.split(' ').length
}

/**
 * Counts the number of characters in a string.
 * @example countCharacters('Hello World')
 * @returns 11
 */
export function countCharacters(text: string): number {
  return text.length
}

/**
 * Counts the number of lines in a string.
 * @example countLines('Hello World')
 * @returns 1
 */
export function countLines(text: string): number {
  return text.split('\n').length
}

/**
 * Strips whitespace from a string.
 * @example stripWhitespace('Hello World')
 * @returns HelloWorld
 */
export function stripWhitespace(text: string): string {
  return text.replace(/\s+/g, '')
}

/**
 * Strips numbers from a string.
 * @example stripNumbers('Hello World 123')
 * @returns Hello World
 */
export function stripNumbers(text: string): string {
  return text.replace(/[0-9]/g, '')
}

/**
 * Strips punctuation from a string.
 * @example stripPunctuation('Hello World!')
 * @returns Hello World
 */
export function stripPunctuation(text: string): string {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

/**
 * Strips symbols from a string.
 * @example stripSymbols('Hello World!')
 * @returns Hello World
 */
export function stripSymbols(text: string): string {
  return text.replace(/[^\w\s]|_/g, '')
}

/**
 * Strips emojis from a string (requires ES6 Unicode support) 🦊.
 * @example stripEmojis('Hello World! 🦊')
 * @returns Hello World!
 */
export function stripEmojis(text: string): string {
  return text.replace(/[\u{1F600}-\u{1F6FF}]/gu, '')
}

/**
 * Returns the reading time of a string in Hours, Minutes, and Seconds.
 * @example readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
 * @returns 1 minute
 */
export function readingTime(text: string, wordsPerMinute = 200): string {
  const words = text.split(' ').length
  const minutes = words / wordsPerMinute
  const readTime = Math.ceil(minutes)

  return formatTime(readTime)
}

/**
 * Adds plurals to a string.
 * @example pluralize('scooter', 10)
 * @returns scooters
 */
export function pluralize(text: string, count: number): string {
  if (count === 1) {
    return text
  }

  return text + 's'
}

/**
 * Removes plurals from a string.
 * @example singularize('scooters')
 * @returns scooter
 */
export function singularize(text: string): string {
  if (text.endsWith('s')) {
    return text.substring(0, text.length - 1)
  }

  return text
}

/**
 * Converts a number to a string with ordinal suffix.
 * @example ordinalize(1)
 * @returns 1st
 */
export function ordinalize(number: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const remainder = number % 100

  return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0])
}

/**
 * Replaces underscores with spaces and capitalizes the first letter of each word.
 * @example humanize('hello_world')
 * @returns Hello World
 */
export function humanize(text: string): string {
  return text
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
}

/**
 * Removes spaces and capitalizes the first letter of each word except for the first word.
 * @example camelCase('hello world')
 * @returns helloWorld
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
 * @example pascalCase('hello world')
 * @returns HelloWorld
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
 * @example snakeCase('hello world')
 * @returns hello_world
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
 * @example titleize('Hello World')
 * @returns hello-world
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
 * @example titleCase('hello world')
 * @returns Hello World
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
 * @example sentenceCase('hello world')
 * @returns Hello world
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
 * @example startWith('usemods.com', 'https://')
 * @returns https://usemods.com
 */
export function startWith(text: string, start: string): string {
  if (text.startsWith(start)) {
    return text
  } else {
    return start + text
  }
}

/**
 * Removes a prefix from a string if it starts with the prefix.
 * @example startWithout('https://usemods.com', 'https://')
 * @returns usemods.com
 */

export function startWithout(start: string, text: string): string {
  if (text.startsWith(start)) {
    return text.substring(start.length)
  } else {
    return text
  }
}

/**
 * Adds a suffix to a string if it doesn't already end with the suffix.
 * @example endWith('https://usemods', '.com')
 * @returns https://usemods.com
 */
export function endWith(text: string, end: string): string {
  if (text.endsWith(end)) {
    return text
  } else {
    return text + end
  }
}

/**
 * Removes a suffix from a string if it ends with the suffix.
 * @example endWithout('https://usemods.com.au', '.au')
 * @returns https://usemods.com
 */
export function endWithout(text: string, end: string): string {
  if (text.endsWith(end)) {
    return text.substring(0, text.length - end.length)
  } else {
    return text
  }
}

/**
 * Adds a prefix and suffix to a string if it doesn't already start and end with them.
 * @param text - The string to surround.
 * @param prefix - The prefix to add.
 * @param suffix - The suffix to add.
 * @example surround('https://', 'usemods', '.com')
 * @returns https://usemods.com
 */
export function surround(text: string, start: string, end: string): string {
  if (text.startsWith(start) && text.endsWith(end)) {
    return text
  }

  if (text.startsWith(start)) {
    return text + end
  }

  if (text.endsWith(end)) {
    return start + text
  }

  return start + text + end
}

/**
 * Converts a string to title case following the Chicago Manual of Style rules.
 * @reference https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html
 * @example title('the quick brown fox jumps over the lazy dog')
 * @returns The Quick Brown Fox Jumps over the Lazy Dog
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
 * @example splitByWords('Hello World. How are you?')
 * @returns <span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>
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
 * Creates an array of list items (`<li>`) from an array of strings.
 * @example list(['one', 'two', 'three'])
 * @returns <ul><li>one</li><li>two</li><li>three</li></ul>
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
 * Shuffles an array.
 * @example shuffle(['one', 'two', 'three'])
 * @returns ['three', 'one', 'two']
 */
export function shuffle(items: any[]): any[] {
  return items.sort(() => Math.random() - 0.5)
}

/**
 * Returns unique array values with an optional property to pluck.
 * @param items - The array of items.
 * @param property - The property to pluck (optional).
 * @example unique(['one', 'two', 'three', 'one'])
 * @returns ['one', 'two', 'three']
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
 * @example difference(['one', 'two', 'three'], ['one', 'two'])
 * @returns ['three']
 */
export function difference(...arrays: any[][]): any[] {
  const mergedArray = arrays.flat()
  return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index)
}

/**
 * Returns the first item in an array.
 * @example first(['one', 'two', 'three'])
 * @returns one
 */
export function first(items: any[]): string {
  return items[0]
}

/**
 * Returns the last item in an array.
 * @example last(['one', 'two', 'three'])
 * @returns three
 */
export function last(items: any[]): string {
  return items[items.length - 1]
}

/**
 * Returns the nth item in an array.
 * @example nth(['one', 'two', 'three'], 1)
 * @returns two
 */
export function nth(items: any[], nth: number): string {
  return items[nth]
}

/**
 * Offset the first item in an array.
 * @example offset(['one', 'two', 'three'], 1)
 * @returns ['two', 'three']
 */
export function offset(items: any[], offset: number): any[] {
  return items.slice(offset)
}

/**
 * Groups an array of objects by a property.
 * @example group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name')
 * @returns { one: [{ name: 'one' }, { name: 'one' }], two: [{ name: 'two' }] }
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
 * @example chunk(['one', 'two', 'three', 'four', 'five'], 2)
 * @returns [['one', 'two'], ['three', 'four'], ['five']]
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
 * @example flatten([['one', 'two'], ['three', 'four'], ['five']])
 * @returns ['one', 'two', 'three', 'four', 'five']
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
 * @example without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name')
 * @returns [{ food: 'apple' }, { food: 'grape' }, { food: 'pear' }]

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
 * @example combine(['one', 'two'], ['three', 'four'], ['five'])
 * @returns ['one', 'two', 'three', 'four', 'five']
 */
export function combine(...arrays: any[][]): any[] {
  return ([] as any[]).concat(...arrays)
}

/**
 * Combine two or more unique arrays
 * @example combineUnique(['one', 'two'], ['three', 'four', 'two'], ['five', 'one'])
 * @returns ['one', 'two', 'three', 'four', 'five']
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
 * @example combineWithout({ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, 'id')
 * @returns [1, 2, 3]
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
 * @example reverse(['one', 'two', 'three'])
 * @returns ['three', 'two', 'one']
 */
export function reverse(items: any[]): any[] {
  return items.reverse()
}

/**
 * Sort an array by a property.
 * @example sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age')
 * @returns [{ name: 'Jill', age: 20 },{ name: 'John', age: 25 },{ name: 'Jane', age: 30 }]
 */
export function sortBy(items: { [key: string]: any }[], property: string): { [key: string]: any }[] {
  return items.sort((a, b) => {
    return a[property] > b[property] ? 1 : -1
  })
}
