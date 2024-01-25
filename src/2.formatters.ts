// title: Formatters
// description: Formatter functions are essential tools in web development, designed to enhance the presentation and organisation of data in web applications. These functions allow developers to easily manipulate and display various data types, such as dates, numbers, and strings, in a more readable and user-friendly format.
// icon: formatters

/**
 * Format numbers into thousands, millions or billions
 */
export function formatNumber(value: number, decimals: number = 1): string {
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
 */
export function formatCurrency(value: number, decimals: boolean | number = false, currency: string = 'USD'): string {
  let config: any = {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: currency
  }

  if (decimals === false) {
    config.minimumFractionDigits = 0
    config.maximumFractionDigits = 0
  } else if (typeof decimals === 'number') {
    config.minimumFractionDigits = 0
    config.maximumFractionDigits = decimals
  } else if (decimals === true) {
    config.minimumFractionDigits = 2
    config.maximumFractionDigits = 99
  }

  return new Intl.NumberFormat('en-US', config).format(value)
}

/**
 * Format numbers into valuations displayed in thousands, millions or billions
 */
export function formatValuation(value: number, decimals: boolean | number = false, currency = 'USD'): string {
  let config: any = {
    style: 'currency',
    currencyDisplay: 'symbol',
    notation: 'compact',
    compactDisplay: 'short',
    currency: currency
  }

  if (decimals === false) {
    config.minimumFractionDigits = 0
    config.maximumFractionDigits = 0
  } else if (typeof decimals === 'number') {
    config.minimumFractionDigits = 0
    config.maximumFractionDigits = decimals
  } else if (decimals === true) {
    config.minimumFractionDigits = 2
    config.maximumFractionDigits = 99
  }

  return new Intl.NumberFormat('en-US', config).format(value)
}

/**
 * Format time into duration 00:00:00
 */
export function formatDurationNumbers(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  const remainingSeconds = seconds - hours * 3600 - minutes * 60

  return [hours, minutes, remainingSeconds].map((value) => value.toString().padStart(2, '0')).join(':')
}

/**
 * Format time into a human-readable string
 */
export function formatDurationLabels(seconds: number, labels = 'short'): string {
  const time = [
    { unit: labels === 'short' ? 'yr' : ' year', secondsInUnit: 31536000 },
    { unit: labels === 'short' ? 'mo' : ' month', secondsInUnit: 2628000 },
    { unit: labels === 'short' ? 'wk' : ' week', secondsInUnit: 604800 },
    { unit: labels === 'short' ? 'd' : ' day', secondsInUnit: 86400 },
    { unit: labels === 'short' ? 'hr' : ' hour', secondsInUnit: 3600 },
    { unit: labels === 'short' ? 'min' : ' minute', secondsInUnit: 60 },
    { unit: labels === 'short' ? 's' : ' second', secondsInUnit: 1 },
    { unit: labels === 'short' ? 'ms' : ' millisecond', secondsInUnit: 0.001 }
  ]

  if (seconds == 0) return `0${labels === 'short' ? 's' : ' seconds'}`

  let remainingSeconds = seconds
  let formattedTime = ''

  for (const { unit, secondsInUnit } of time) {
    const count = Math.floor(remainingSeconds / secondsInUnit)
    if (count > 0) {
      formattedTime += `${count}${count === 1 || labels === 'short' ? unit : unit + 's'} `
      remainingSeconds -= count * secondsInUnit
    }
  }

  return formattedTime.trim()
}

/**
 * Format a number into a percentage
 */
export function formatPercentage(number: number, decimals: boolean | number = false): string {
  const fractionDigits = typeof decimals === 'number' ? decimals : decimals === true ? Number.POSITIVE_INFINITY : 0

  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(number)
}

/**
 * Format Unix timestamp into a datetime string
 */
export function formatUnixTime(timestamp: number): string {
  return new Date(timestamp * 1000).toISOString().replace('T', ' ').replace('Z', '')
}

/**
 * Create a string of comma-separated values from an array of strings with an optional conjunction.
 * @param items - The array of strings. strings.
 * @param limit - The maximum number of items to include before truncating.
 * @param conjunction - The conjunction before the last item e.g. "and" or "or".
 */
export function formatList(items: any[], limit: number, conjunction: string = 'and'): string {
  if (items.length === 1) return items[0]
  if (items.length === 2) return items.join(' ' + conjunction + ' ')
  if (items.length === 3) return items.slice(0, -1).join(', ') + ' ' + conjunction + ' ' + items.slice(-1)
  if (items.length > 3) return items.slice(0, limit).join(', ') + ' ' + conjunction + ' ' + (items.length - limit) + ' more'
  return ''
}

/**
 * Converts a string to title case following the Chicago Manual of Style rules.
 * @reference https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html

 */
export function formatTitle(text: string): string {
  const exceptions = new Set([
    'a',
    'an',
    'to',
    'the',
    'for',
    'and',
    'nor',
    'but',
    'or',
    'yet',
    'so',
    'in',
    'is',
    'than',
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
  ])

  return text
    .split(' ')
    .map((word, index, wordsArray) => {
      const lowerWord = word.toLowerCase()
      if (index === 0 || index === wordsArray.length - 1 || !exceptions.has(lowerWord)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return lowerWord
    })
    .join(' ')
}
