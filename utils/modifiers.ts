/**
 * Adds a space between the last two words in a string.
 */
export const widont = (text: string) => {
  const space = text.lastIndexOf(' ')

  return text.substring(0, space) + '&nbsp;' + text.substring(space + 1)
}

/**
 * Strip HTML tags from a string.
 */
export const stripHtml = (text: string) => {
  return text.replace(/<[^>]*>?/gm, '')
}

/**
 * Escape HTML entities in a string.
 */
export const escapeHtml = (text: string) => {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Unescape HTML entities in a string.
 */
export const showHtml = (text: string) => {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Strip HTML tags from a string.
 */
export const stripTags = (text: string) => {
  return text.replace(/<\/?[^>]+(>|$)/g, '')
}

/**
 * Converts a string to-a-slug.
 */
export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Converts a slug to a string.
 */
export const deslugify = (text: string) => {
  return text.toLowerCase().replace(/-/g, ' ')
}

/**
 * Truncates a string to a specified length of words.
 */
export const truncate = (text: string, length: number) => {
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
export const wordCount = (text: string) => {
  return text.split(' ').length
}

/**
 * Counts the number of characters in a string.
 */
export const characterCount = (text: string) => {
  return text.length
}

/**
 * Counts the number of lines in a string.
 */
export const lineCount = (text: string) => {
  return text.split('\n').length
}

/**
 * Strips whitespace from a string.
 */
export const stripWhitespace = (text: string) => {
  return text.replace(/\s+/g, '')
}

/**
 * Strips numbers from a string.
 */
export const stripNumbers = (text: string) => {
  return text.replace(/[0-9]/g, '')
}

/**
 * Strips punctuation from a string.
 */
export const stripPunctuation = (text: string) => {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

/**
 * Strips symbols from a string.
 */
export const stripSymbols = (text: string) => {
  return text.replace(/[^\w\s]|_/g, '')
}

/**
 * Strips emojis from a string (requires ES6 Unicode support) 🦊.
 */
export const stripEmojis = (text: string) => {
  return text.replace(/[\u{1F600}-\u{1F6FF}]/gu, '')
}

/**
 * Returns the reading time of a string in Hours, Minutes, and Seconds.
 */
export const readingTime = (text: string, wordsPerMinute = 200) => {
  const words = text.split(' ').length
  const minutes = words / wordsPerMinute
  const readTime = Math.ceil(minutes)

  return formatTime(readTime)
}

/**
 * Adds plurals to a string.
 */
export const pluralize = (text: string, count: number) => {
  if (count === 1) {
    return text
  }

  return text + 's'
}

/**
 * Removes plurals from a string.
 */
export const singularize = (text: string, count: number) => {
  if (count === 1) {
    return text
  }

  return text.substring(0, text.length - 1)
}

/**
 * Converts a number to a string with ordinal suffix.
 */
export const ordinalize = (number: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const remainder = number % 100

  return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0])
}

/**
 * Replaces underscores with spaces and capitalizes the first letter of each word.
 */
export const humanize = (text: string) => {
  return text
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
}

/**
 * Removes spaces and capitalizes the first letter of each word except for the first word.
 */
export const camelCase = (text: string) => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

/**
 * Removes spaces and capitalizes the first letter of each word.
 */
export const pascalCase = (text: string) => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

/**
 * Replaces spaces with underscores and converts to lowercase.
 */
export const snakeCase = (text: string) => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : '_' + word.toLowerCase()
    })
    .replace(/\s+/g, '')
}

/**
 * Replaces spaces with hyphens and converts to lowercase.
 */
export const kebabCase = (text: string) => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : '-' + word.toLowerCase()
    })
    .replace(/\s+/g, '')
}

/**
 * Converts to title case by capitalizing the first letter of each word.
 */
export const titleCase = (text: string) => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return word.toUpperCase()
    })
    .replace(/\s+/g, ' ')
}

/**
 * Converts to sentence case by capitalizing the first letter of the first word.
 */
export const sentenceCase = (text: string) => {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toUpperCase() : word.toLowerCase()
    })
    .replace(/\s+/g, ' ')
}

/**
 * Adds a prefix to a string if it doesn't already start with the prefix.
 */
export const startsWith = (text: string, startsWith: string) => {
  if (text.startsWith(startsWith)) {
    return text
  } else {
    return startsWith + text
  }
}

/**
 * Adds a suffix to a string if it doesn't already end with the suffix.
 */
export const endsWith = (text: string, endsWith: string) => {
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
export const surround = (text: string, startsWith: string, endsWith: string) => {
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
export const title = (text: string) => {
  const articles = ['a', 'an', 'the']
  const coordinatingConjunctions = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so']
  const prepositions = ['in', 'on', 'at', 'with', 'under', 'above', 'from', 'to', 'of']
  const subordinateConjunctions = ['although', 'because', 'since', 'unless']

  const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

  const words = text.split(' ')

  const transformedWords = words.map((word, i) => {
    const lowerCaseWord = word.toLowerCase()

    if (word.includes('-') && i > 0) {
      const [firstPart, secondPart] = word.split('-')
      return capitalize(firstPart) + '-' + secondPart.toLowerCase()
    } else if (articles.includes(lowerCaseWord)) {
      return lowerCaseWord
    } else if (coordinatingConjunctions.includes(lowerCaseWord) || (prepositions.includes(lowerCaseWord) && lowerCaseWord !== 'to')) {
      return lowerCaseWord
    } else if (subordinateConjunctions.includes(lowerCaseWord) || i === 0 || i === words.length - 1) {
      return capitalize(lowerCaseWord)
    } else if (i > 0 && words[i - 1].toLowerCase() === 'to') {
      return lowerCaseWord
    } else {
      return capitalize(lowerCaseWord)
    }
  })

  return transformedWords.join(' ')
}

/**
 * Wraps each word in a string with a span tag.
 */
export const splitByWords = (text: string) => {
  return text.split(' ').map((word) => {
    return `<span>${word}</span>`
  })
}

/**
 * Wraps each character in a string with a span tag.
 */
export const splitByCharacters = (text: string) => {
  return text.split('').map((character) => {
    return `<span>${character}</span>`
  })
}

/**
 * Wraps each line in a string with a span tag.
 */
export const splitByLines = (text: string) => {
  return text.split('\n').map((line) => {
    return `<span>${line}</span>`
  })
}

/**
 * Wraps each sentence in a string with a span tag.
 */
export const splitBySentences = (text: string) => {
  return text.split('.').map((sentence) => {
    return `<span>${sentence}</span>`
  })
}

/**
 * Wraps each paragraph in a string with a span tag.
 */
export const splitByParagraphs = (text: string) => {
  return text.split('\n\n').map((paragraph) => {
    return `<p>${paragraph}</p>`
  })
}

/**
 * Creates an array of list items (<li>) from an array of strings.
 */
export const li = (items: string[]) => {
  return items.map((item) => {
    return `<li>${item}</li>`
  })
}

/**
 * Create an ordered list (<ol>) from an array of strings.
 */
export const ol = (items: string[]) => {
  return `<ol>${li(items).join('')}</ol>`
}

/**
 * Create an unordered list (<ul>) from an array of strings.
 */
export const ul = (items: string[]) => {
  return `<ul>${li(items).join('')}</ul>`
}

/**
 * Create a description list (<dl>) from an array of strings.
 */
export const dl = (items: string[]) => {
  return `<dl>${li(items).join('')}</dl>`
}

/**
 * Create a string of comma-separated values from an array of strings with an optional conjunction.
 * @param items - The array of strings.
 * @param conjunction - The conjunction before the last item e.g. "and" or "or".
 */
export const commaList = (items: string[], conjunction: string = 'and') => {
  return items.slice(0, -1).join(', ') + ' ' + conjunction + ' ' + items.slice(-1)
}

/**
 * Create a string of comma-separated values with a limit and an optional conjunction.
 * @param items - The array of strings.
 * @param limit - The number of items to show before truncating.
 */
export const truncateList = (items: string[], limit: number) => {
  if (items.length === 0) {
    return ''
  }
  if (items.length === 1) {
    return items[0]
  }
  if (items.length === 2) {
    return items.join(' and ')
  }
  if (items.length === 3) {
    return items.slice(0, -1).join(', ') + ', and ' + items.slice(-1)
  }
  if (items.length > 3) {
    return items.slice(0, limit).join(', ') + ', and ' + (items.length - limit) + ' more'
  }
}

// Table
export const table = (rows: string[][]) => {
  return `<table>${rows.map((row) => `<tr>${td(row).join('')}</tr>`).join('')}</table>`
}

// Table Data
export const td = (items: string[]) => {
  return items.map((item) => `<td>${item}</td>`)
}

// Table Header
export const th = (items: string[]) => {
  return items.map((item) => `<th>${item}</th>`)
}

// Table Row
export const tr = (items: string[]) => {
  return items.map((item) => `<tr>${item}</tr>`)
}

// Abbreviation
export const abbr = (text: string, title: string) => {
  return `<abbr title="${title}">${text}</abbr>`
}

/**
 * Returns unique array values with an optional property to pluck.
 * @param items - The array of items.
 * @param property - The property to pluck (optional).
 */
export const unique = (items: string[], property: any) => {
  if (property) {
    return [...new Set(items.map((item) => item[property]))]
  }

  return [...new Set(items)]
}

/**
 * Returns the first item in an array.
 */
export const first = (items: string[]) => {
  return items[0]
}

/**
 * Returns the last item in an array.
 */
export const last = (items: string[]) => {
  return items[items.length - 1]
}

/**
 * Returns the nth item in an array.
 */
export const nth = (items: string[], nth: number) => {
  return items[nth]
}
