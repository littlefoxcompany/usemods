// title: Modifiers
// description: Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

/**
 * Adds a space between the last two words in a string.
 * @js widont('Cool cool cool')
 * @template {{ widont('Cool cool cool') }}
 * @preview cool cool&nbsp;cool
 */
export function widont(text: string): string {
  const space = text.lastIndexOf(' ')

  return text.substring(0, space) + '&nbsp;' + text.substring(space + 1)
}

/**
 * Strip HTML tags from a string.
 * @js stripHtml('<p>Hello World</p>')
 * @template {{ stripHtml('<p>Hello World</p>') }}
 * @preview Hello World
 */
export function stripHtml(text: string): string {
  return text.replace(/<[^>]*>?/gm, '')
}

/**
 * Escape HTML entities in a string.
 * @js escapeHtml('<p>Hello World</p>')
 * @template {{ escapeHtml('<p>Hello World</p>') }}
 * @preview &lt;p&gt;Hello World&lt;/p&gt;
 */
export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Unescape HTML entities in a string.
 * @js unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
 * @template {{ unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;') }}
 * @preview <p>Hello World</p>
 */
export function showHtml(text: string): string {
  return text.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

/**
 * Strip HTML tags from a string.
 * @js stripTags('<p>Hello World</p>')
 * @template {{ stripTags('<p>Hello World</p>') }}
 * @preview Hello World
 */
export function stripTags(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, '')
}

/**
 * Converts a string to-a-slug.
 * @js slugify('Hello World')
 * @template {{ slugify('Hello World') }}
 * @preview hello-world
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Converts a slug to a string.
 * @js deslugify('hello-world')
 * @template {{ deslugify('hello-world') }}
 * @preview hello world
 */
export function deslugify(text: string): string {
  return text.toLowerCase().replace(/-/g, ' ')
}

/**
 * Truncates a string to a specified length of characters.
 * @js truncate('Hello World', 5)
 * @template {{ truncate('Hello World', 5) }}
 * @preview Hello...
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) {
    return text
  }
  return text.substring(0, length) + '...'
}

/**
 * Truncates a string by a number of words
 * @js truncateWords('Hello World', 1)
 * @template {{ truncateWords('Hello World', 1) }}
 * @preview Hello...
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
 * @js countWords('Hello World')
 * @template {{ countWords('Hello World') }}
 * @preview 2
 */
export function countWords(text: string): number {
  return text.split(' ').length
}

/**
 * Counts the number of characters in a string.
 * @js countCharacters('Hello World')
 * @template {{ countCharacters('Hello World') }}
 * @preview 11
 */
export function countCharacters(text: string): number {
  return text.length
}

/**
 * Counts the number of lines in a string.
 * @js countLines('Hello World')
 * @template {{ countLines('Hello World') }}
 * @preview 1
 */
export function countLines(text: string): number {
  return text.split('\n').length
}

/**
 * Strips whitespace from a string.
 * @js stripWhitespace('Hello World')
 * @template {{ stripWhitespace('Hello World') }}
 * @preview HelloWorld
 */
export function stripWhitespace(text: string): string {
  return text.replace(/\s+/g, '')
}

/**
 * Strips numbers from a string.
 * @js stripNumbers('Hello World 123')
 * @template {{ stripNumbers('Hello World 123') }}
 * @preview Hello World
 */
export function stripNumbers(text: string): string {
  return text.replace(/[0-9]/g, '')
}

/**
 * Strips punctuation from a string.
 * @js stripPunctuation('Hello World!')
 * @template {{ stripPunctuation('Hello World!') }}
 * @preview Hello World
 */
export function stripPunctuation(text: string): string {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

/**
 * Strips symbols from a string.
 * @js stripSymbols('Hello World!')
 * @template {{ stripSymbols('Hello World!') }}
 * @preview Hello World
 */
export function stripSymbols(text: string): string {
  return text.replace(/[^\w\s]|_/g, '')
}

/**
 * Strips emojis from a string (requires ES6 Unicode support) 🦊.
 * @js stripEmojis('Hello World! 🦊')
 * @template {{ stripEmojis('Hello World! 🦊') }}
 * @preview Hello World!
 */
export function stripEmojis(text: string): string {
  return text.replace(/[\u{1F600}-\u{1F6FF}]/gu, '')
}

/**
 * Returns the reading time of a string in Hours, Minutes, and Seconds.
 * @js readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
 * @template {{ readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.') }}
 * @preview 1 minute
 */
export function readingTime(text: string, wordsPerMinute = 200): string {
  const words = text.split(' ').length
  const minutes = words / wordsPerMinute
  const readTime = Math.ceil(minutes)

  return formatTime(readTime)
}

/**
 * Adds plurals to a string.
 * @js pluralize('scooter', 10)
 * @template {{ pluralize('scooter', 10) }}
 * @preview scooters
 */
export function pluralize(text: string, count: number): string {
  if (count === 1) {
    return text
  }

  return text + 's'
}

/**
 * Removes plurals from a string.
 * @js singularize('scooters')
 * @template {{ singularize('scooters') }}
 * @preview scooter
 */
export function singularize(text: string): string {
  if (text.endsWith('s')) {
    return text.substring(0, text.length - 1)
  }

  return text
}

/**
 * Converts a number to a string with ordinal suffix.
 * @js ordinalize(1)
 * @template {{ ordinalize(1) }}
 * @preview 1st
 */
export function ordinalize(number: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const remainder = number % 100

  return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0])
}

/**
 * Replaces underscores with spaces and capitalizes the first letter of each word.
 * @js humanize('hello_world')
 * @template {{ humanize('hello_world') }}
 * @preview Hello World
 */
export function humanize(text: string): string {
  return text
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
}

/**
 * Removes spaces and capitalizes the first letter of each word except for the first word.
 * @js camelCase('hello world')
 * @template {{ camelCase('hello world') }}
 * @preview helloWorld
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
 * @js pascalCase('hello world')
 * @template {{ pascalCase('hello world') }}
 * @preview HelloWorld
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
 * @js snakeCase('hello world')
 * @template {{ snakeCase('hello world') }}
 * @preview hello_world
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
 * @js titleize('Hello World')
 * @template {{ titleize('Hello World') }}
 * @preview hello-world
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
 * @js titleCase('hello world')
 * @template {{ titleCase('hello world') }}
 * @preview Hello World
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
 * @js sentenceCase('hello world')
 * @template {{ sentenceCase('hello world') }}
 * @preview Hello world
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
 * @js startsWith('usemods.com', 'https://')
 * @template {{ startsWith('usemods.com', 'https://') }}
 * @preview https://usemods.com
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
 * @js startsWithout('https://usemods.com', 'https://')
 * @template {{ startsWithout('https://usemods.com', 'https://') }}
 * @preview usemods.com
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
 * @js endsWith('https://usemods', '.com')
 * @template {{ endsWith('https://usemods', '.com') }}
 * @preview https://usemods.com
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
 * @js endsWithout('https://usemods.com.au', '.au')
 * @template {{ endsWithout('https://usemods.com.au', '.au') }}
 * @preview https://usemods.com
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
 * @js surround('https://', 'usemods', '.com')
 * @template {{ surround('https://', 'usemods', '.com') }}
 * @preview https://usemods.com
 */
export function surround(startsWith: string, text: string, endsWith: string): string {
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
 * @js title('the quick brown fox jumps over the lazy dog')
 * @template {{ title('the quick brown fox jumps over the lazy dog') }}
 * @preview The Quick Brown Fox Jumps over the Lazy Dog
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
 * @js splitByWords('Hello World. How are you?')
 * @template {{ splitByWords('Hello World. How are you?') }}
 * @preview <span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>
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
 * @js list(['one', 'two', 'three'])
 * @template {{ list(['one', 'two', 'three']) }}
 * @preview <ul><li>one</li><li>two</li><li>three</li></ul>
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
 * @js commaList(['one', 'two', 'three'])
 * @template {{ commaList(['one', 'two', 'three']) }}
 * @preview one, two and three
 */
export function commaList(items: any[], conjunction: string = 'and'): string {
  return items.slice(0, -1).join(', ') + ' ' + conjunction + ' ' + items.slice(-1)
}

/**
 * Create a string of comma-separated values with a limit and an optional conjunction.
 * @param items - The array of strings.
 * @param limit - The number of items to show before truncating.
 * @js truncateList(['one', 'two', 'three', 'four', 'five'], 3)
 * @template {{ truncateList(['one', 'two', 'three', 'four', 'five'], 3) }}
 * @preview one, two, three and 2 more
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
 * @js shuffle(['one', 'two', 'three'])
 * @template {{ shuffle(['one', 'two', 'three']) }}
 * @preview ['three', 'one', 'two']
 */
export function shuffle(items: any[]): any[] {
  return items.sort(() => Math.random() - 0.5)
}

/**
 * Returns unique array values with an optional property to pluck.
 * @param items - The array of items.
 * @param property - The property to pluck (optional).
 * @js unique(['one', 'two', 'three', 'one'])
 * @template {{ unique(['one', 'two', 'three', 'one']) }}
 * @preview ['one', 'two', 'three']
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
 * @js difference(['one', 'two', 'three'], ['one', 'two'])
 * @template {{ difference(['one', 'two', 'three'], ['one', 'two']) }}
 * @preview ['three']
 */
export function difference(...arrays: any[][]): any[] {
  const mergedArray = arrays.flat()
  return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index)
}

/**
 * Returns the first item in an array.
 * @js first(['one', 'two', 'three'])
 * @template {{ first(['one', 'two', 'three']) }}
 * @preview one
 */
export function first(items: any[]): string {
  return items[0]
}

/**
 * Returns the last item in an array.
 * @js last(['one', 'two', 'three'])
 * @template {{ last(['one', 'two', 'three']) }}
 * @preview three
 */
export function last(items: any[]): string {
  return items[items.length - 1]
}

/**
 * Returns the nth item in an array.
 * @js nth(['one', 'two', 'three'], 1)
 * @template {{ nth(['one', 'two', 'three'], 1) }}
 * @preview two
 */
export function nth(items: any[], nth: number): string {
  return items[nth]
}

/**
 * Offset the first item in an array.
 * @js offset(['one', 'two', 'three'], 1)
 * @template {{ offset(['one', 'two', 'three'], 1) }}
 * @preview ['two', 'three']
 */
export function offset(items: any[], offset: number): any[] {
  return items.slice(offset)
}

/**
 * Groups an array of objects by a property.
 * @js group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name')
 * @template {{ group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name') }}
 * @preview { one: [{ name: 'one' }, { name: 'one' }], two: [{ name: 'two' }] }
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
 * @js chunk(['one', 'two', 'three', 'four', 'five'], 2)
 * @template {{ chunk(['one', 'two', 'three', 'four', 'five'], 2) }}
 * @preview [['one', 'two'], ['three', 'four'], ['five']]
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
 * @js flatten([['one', 'two'], ['three', 'four'], ['five']])
 * @template {{ flatten([['one', 'two'], ['three', 'four'], ['five']]) }}
 * @preview ['one', 'two', 'three', 'four', 'five']
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
 * @js without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name')
 * @template {{ without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name') }}
 * @preview [{ food: 'apple' }, { food: 'grape' }, { food: 'pear' }]

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
 * @js combine(['one', 'two'], ['three', 'four'], ['five'])
 * @template {{ combine(['one', 'two'], ['three', 'four'], ['five']) }}
 * @preview ['one', 'two', 'three', 'four', 'five']
 */
export function combine(...arrays: any[][]): any[] {
  return ([] as any[]).concat(...arrays)
}

/**
 * Combine two or more unique arrays
 * @js combineUnique(['one', 'two'], ['three', 'four', 'two'], ['five', 'one'])
 * @template {{ combineUnique(['one', 'two'], ['three', 'four', 'two'], ['five', 'one']) }}
 * @preview ['one', 'two', 'three', 'four', 'five']
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
 * @js combineWithout({ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, 'id')
 * @template {{ combineWithout({ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, 'id') }}
 * @preview [1, 2, 3]
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
 * @js reverse(['one', 'two', 'three'])
 * @template {{ reverse(['one', 'two', 'three']) }}
 * @preview ['three', 'two', 'one']
 */
export function reverse(items: any[]): any[] {
  return items.reverse()
}

/**
 * Sort an array by a property.
 * @js sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age')
 * @template {{ sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age') }}
 * @preview [{ name: 'Jill', age: 20 },{ name: 'John', age: 25 },{ name: 'Jane', age: 30 }]
 */
export function sortBy(items: { [key: string]: any }[], property: string): { [key: string]: any }[] {
  return items.sort((a, b) => {
    return a[property] > b[property] ? 1 : -1
  })
}
