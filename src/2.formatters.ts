// title: Formatters
// description: Formatter functions manipulate and display various data types, such as dates, numbers, and strings, in a more readable and user-friendly format.
// icon: formatters

/**
 * Format numbers into thousands, millions or billions
 */
export function formatNumber(value: number, decimals: number | boolean = true, locale: string = 'en-US'): string {
  let config: any = {
    notation: 'compact',
    compactDisplay: 'short'
  }

  if (typeof decimals === 'number') {
    config.minimumFractionDigits = 0
    config.maximumFractionDigits = decimals
  } else if (decimals === true) {
    config.minimumFractionDigits = 2
    config.maximumFractionDigits = 10
  }

  return new Intl.NumberFormat(locale, config).format(value)
}

/**
 * Format numbers into local currency
 */
export function formatCurrency(value: number, decimals: number | boolean = true, locale: string = 'en-US', currency: string = 'USD'): string {
  let config: any = {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: currency
  }

  if (typeof decimals === 'number') {
    config.minimumFractionDigits = 0
    config.maximumFractionDigits = decimals
  } else if (decimals === true) {
    config.minimumFractionDigits = 2
    config.maximumFractionDigits = 99
  }

  return new Intl.NumberFormat(locale, config).format(value)
}

/**
 * Format numbers into valuations displayed in thousands, millions or billions
 */
export function formatValuation(value: number, decimals: number | boolean = true, locale: string = 'en-US', currency: string = 'USD'): string {
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

  return new Intl.NumberFormat(locale, config).format(value)
}

/**
 * Format a number into a percentage
 */
export function formatPercentage(value: number, decimals: boolean | number = 2): string {
  let config: any = {
    style: 'percent'
  }

  if (typeof decimals === 'number') {
    config.minimumFractionDigits = 0
    config.maximumFractionDigits = decimals
  } else if (decimals === true) {
    config.minimumFractionDigits = 2
    config.maximumFractionDigits = 99
  }

  return new Intl.NumberFormat('en-US', config).format(value)
}

/**
 * Format time into a human-readable string
 */
export function formatDurationLabels(seconds: number, labels?: string, round: boolean = false): string {
  console.log(round)
  const time = [
    { unit: labels === 'short' ? 'yr' : ' year', secondsInUnit: 31536000 },
    { unit: labels === 'short' ? 'mo' : ' month', secondsInUnit: 2628000 },
    { unit: labels === 'short' ? 'wk' : ' week', secondsInUnit: 604800 },
    { unit: labels === 'short' ? 'd' : ' day', secondsInUnit: 86400 },
    { unit: labels === 'short' ? 'hr' : ' hour', secondsInUnit: 3600 },
    { unit: labels === 'short' ? 'min' : ' minute', secondsInUnit: 60 },
    { unit: labels === 'short' ? 's' : ' second', secondsInUnit: 1 }
  ]

  if (seconds == 0) return `0${labels === 'short' ? 's' : ' seconds'}`

  if (round) {
    for (const { secondsInUnit } of time) {
      if (seconds >= secondsInUnit) {
        seconds = seconds - (seconds % secondsInUnit)
        break
      }
    }
  }

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
 * Format time into duration 00:00:00
 */
export function formatDurationNumbers(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  const remainingSeconds = seconds - hours * 3600 - minutes * 60

  return [hours, minutes, remainingSeconds].map((value) => value.toString().padStart(2, '0')).join(':')
}

/**
 * Format numbers into words
 */
export function formatNumberToWords(value: number): string {
  const underTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ]
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (value < 20) return underTwenty[value]
  if (value < 100) return `${tens[Math.floor(value / 10) - 2]}${value % 10 ? '-' + underTwenty[value % 10] : ''}`

  const formatGroup = (number: number): string => {
    if (number >= 100) {
      const remainder = number % 100
      return `${underTwenty[Math.floor(number / 100)]} hundred${remainder ? ` and ${formatGroup(remainder)}` : ''}`
    } else if (number >= 20) {
      return `${tens[Math.floor(number / 10) - 2]}${number % 10 ? '-' + underTwenty[number % 10] : ''}`
    } else {
      return underTwenty[number]
    }
  }

  const scales = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion']
  let scaleIndex = 0
  let result = ''

  while (value > 0) {
    const groupValue = value % 1000
    if (groupValue > 0) {
      result = formatGroup(groupValue) + scales[scaleIndex] + (result ? ', ' + result : '')
    }
    value = Math.floor(value / 1000)
    scaleIndex++
  }

  return result.trim()
}

/**
 * Generate initials from any string while ignoring common titles
 */
export function formatInitials(text: string, length: number = 2): string {
  text = text.replace(/(Mr|Mrs|Ms|Dr|Jr|Sr|Prof|Hon|Snr|Jnr|St)\.?/g, '').trim()
  return text
    .split(' ')
    .filter((word) => !['the', 'third'].includes(word.toLowerCase()))
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, length)
}

/**
 * Format Unix timestamp into a datetime string
 */
export function formatUnixTime(timestamp: number): string {
  return new Date(timestamp * 1000).toISOString().replace('T', ' ').replace('Z', '')
}

/**
 * Create a string of comma-separated values from an array, object or string with an optional limit and conjunction
 */
export function formatList(items: string | object | any[], limit: number = Infinity, conjunction: string = 'and'): string {
  if (typeof items === 'string') items = items.split(',').map((item) => item.trim())
  if (typeof items === 'object' && !Array.isArray(items)) items = Object.values(items)
  if (!Array.isArray(items) || items.length === 0) return ''
  if (items.length <= 2) return items.join(items.length === 2 ? ` ${conjunction} ` : '')
  if (items.length <= limit) return items.slice(0, -1).join(', ') + ` ${conjunction} ` + items.slice(-1)

  const listedItems = items.slice(0, limit).join(', ')
  const remaining = items.length - limit
  return `${listedItems} ${conjunction} ${remaining} more`
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
    'it',
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

/**
 * Format a sentence case string
 */
export function formatSentenceCase(text: string): string {
  return text
    .split('\n\n')
    .map((paragraph) =>
      paragraph
        .split('. ')
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join('. ')
    )
    .join('\n\n')
}

/**
 * Adds a space between the last two words in a string to prevent lonely words.
 */
export function formatTextWrap(value: string): string {
  const space = value.lastIndexOf(' ')
  if (space !== -1) return value.substring(0, space) + '&nbsp;' + value.substring(space + 1)
  return value
}
