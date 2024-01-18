// title: Formatters
// description: Formatter functions are essential tools in web development, designed to enhance the presentation and organisation of data in web applications. These functions allow developers to easily manipulate and display various data types, such as dates, numbers, and strings, in a more readable and user-friendly format.

/**
 * Format numbers into thousands, millions or billions
 */
export function formatNumber(value: number, decimals = 1): string {
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  })

  try {
    return formatter.format(value)
  } catch (error) {
    return ''
  }
}

/**
 * Format numbers into local currency
 * @example formatCurrency()
 */
export function formatCurrency(number: number, decimals = 0, currency = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    minimumFractionDigits: Math.max(0, decimals),
    maximumFractionDigits: decimals,
    currency
  })
  try {
    return formatter.format(number)
  } catch (error) {
    console.error(error)
    return ''
  }
}

/**
 * Format numbers into valuations displayed in thousands, millions or billions
 * @example formatValuation()
 */
export function formatValuation(value: number, decimals = 1, currency = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
    style: 'currency',
    currency
  })

  try {
    return formatter.format(value)
  } catch (error) {
    return ''
  }
}

/**
 * Format time into hours, minutes, and seconds
 * @example formatDuration()
 */
export function formatDuration(seconds: number, labels = 'short'): string {
  const time = [
    { unit: labels === 'short' ? 'yr' : 'year', secondsInUnit: 31536000 },
    { unit: labels === 'short' ? 'mo' : 'month', secondsInUnit: 2628000 },
    { unit: labels === 'short' ? 'wk' : 'week', secondsInUnit: 604800 },
    { unit: labels === 'short' ? 'd' : 'day', secondsInUnit: 86400 },
    { unit: labels === 'short' ? 'hr' : 'hour', secondsInUnit: 3600 },
    { unit: labels === 'short' ? 'min' : 'minute', secondsInUnit: 60 },
    { unit: labels === 'short' ? 's' : 'second', secondsInUnit: 1 }
  ]

  let remainingSeconds = seconds
  let formattedTime = ''

  for (const { unit, secondsInUnit } of time) {
    const count = Math.floor(remainingSeconds / secondsInUnit)
    if (count > 0) {
      formattedTime += `${count}${unit} `
      remainingSeconds -= count * secondsInUnit
    }
  }

  return formattedTime.trim()
}

/**
 * Format Unix timestamp into a datetime string
 * @example formatUnixTime(1620000000)
 */
export function formatUnixTime(timestamp: number): string {
  return new Date(timestamp * 1000).toISOString().replace('T', ' ').replace('Z', '')
}

/**
 * Format a number into a percentage
 * @example formatPercentage(0.1234)
 */
export function formatPercentage(number: number, decimals = 1): string {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  }).format(number)
}

/**
 * Create a string of comma-separated values from an array of strings with an optional conjunction.
 * @param items - The array of strings. strings.
 * @param limit - The maximum number of items to include before truncating.
 * @param conjunction - The conjunction before the last item e.g. "and" or "or".
 * @example formatList(['one', 'two', 'three'])
 */
export function formatList(items: any[], limit: number, conjunction: string = 'and'): string {
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
 * Converts a string to title case following the Chicago Manual of Style rules.
 * @reference https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html
 * @example title('the quick brown fox jumps over the lazy dog')
 */
export function formatTitle(text: string): string {
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
