// title: Formatters
// description: Formatter functions manipulate and display various data types, such as dates, numbers, and strings, in a more readable and user-friendly format.
// lead: Format misbehaving content

const currencySymbols = new Map([
  ['en-US', 'USD'],
  ['en-GB', 'GBP'],
  ['en-AU', 'AUD'],
  ['en-CA', 'CAD'],
  ['en-NZ', 'NZD'],
  ['en-ZA', 'ZAR'],
  ['de-DE', 'EUR'],
  ['fr-FR', 'EUR'],
  ['es-ES', 'EUR'],
  ['it-IT', 'EUR'],
  ['pt-PT', 'EUR'],
  ['nl-NL', 'EUR'],
  ['da-DK', 'DKK'],
  ['sv-SE', 'SEK'],
  ['nb-NO', 'NOK'],
  ['fi-FI', 'EUR'],
  ['pl-PL', 'PLN'],
  ['tr-TR', 'TRY'],
  ['ru-RU', 'RUB'],
  ['ja-JP', 'JPY'],
  ['zh-CN', 'CNY'],
  ['ko-KR', 'KRW'],
  ['ar-SA', 'SAR'],
  ['he-IL', 'ILS'],
  ['id-ID', 'IDR'],
  ['ms-MY', 'MYR'],
  ['th-TH', 'THB'],
  ['vi-VN', 'VND'],
  ['hi-IN', 'INR'],
  ['bn-IN', 'INR'],
  ['pa-IN', 'INR'],
  ['gu-IN', 'INR'],
  ['or-IN', 'INR'],
  ['ta-IN', 'INR'],
  ['te-IN', 'INR'],
  ['kn-IN', 'INR'],
  ['ml-IN', 'INR']
])

/**
 * Format numbers into neat and formatted strings for people
 */
export function formatNumber(number: number, decimals: number = 2, locale: string = 'en-US'): string {
  const safeDecimals = Math.max(0, Math.min(decimals, 20))

  let config: any = {
    style: 'decimal',
    minimumFractionDigits: safeDecimals === 0 ? 0 : safeDecimals === 1 ? 1 : 2,
    maximumFractionDigits: safeDecimals
  }

  return new Intl.NumberFormat(locale, config).format(number)
}

/**
 * Format numbers into local currency with extra smarts
 */
export function formatCurrency(number: number, decimals: number = 2, locale: string = 'en-US'): string {
  const safeDecimals = Math.max(0, Math.min(decimals, 20))

  let config: any = {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: safeDecimals === 0 ? 0 : safeDecimals === 1 ? 1 : 2,
    maximumFractionDigits: safeDecimals,
    currency: currencySymbols.get(locale) || 'USD'
  }

  return new Intl.NumberFormat(locale, config).format(number)
}

/**
 * Format numbers into valuations displayed in thousands, millions or billions
 */
export function formatValuation(number: number, decimals: number = 2, locale: string = 'en-US'): string {
  const safeDecimals = Math.max(0, Math.min(decimals, 20))

  let config: any = {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: safeDecimals === 0 ? 0 : safeDecimals === 1 ? 1 : 2,
    maximumFractionDigits: safeDecimals,
    currency: currencySymbols.get(locale) || 'USD'
  }

  return new Intl.NumberFormat(locale, config).format(number)
}

/**
 * Format a number into a percentage
 */
export function formatPercentage(value: number, decimals: number = 2, locale: string = 'en-US'): string {
  const safeDecimals = Math.max(0, Math.min(decimals, 20))
  let config: any = {
    style: 'percent',
    minimumFractionDigits: safeDecimals === 0 ? 0 : safeDecimals === 1 ? 1 : 2,
    maximumFractionDigits: safeDecimals
  }

  return new Intl.NumberFormat(locale, config).format(value)
}

/**
 * Format time into a human-readable string
 */
export function formatDurationLabels(seconds: number, labels: 'short' | 'long' = 'long', round: boolean = false): string {
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
  if (!text) return ''
  text = text.replace(/(Mrs|Mr|Ms|Dr|Jr|Sr|Prof|Hon|Snr|Jnr|St)\.?/g, '').trim()
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
  if (!text) return ''
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

/**
 * Format a number into a unit formatting
 */
// export function formatUnit(value: number, unit: string, decimals: number = 2, locale: string = 'en-US'): string {
//   let config: any = {
//     style: 'unit',
//     unit: unit,
//     unitDisplay: 'short',
//     minimumFractionDigits: decimals === 0 ? 0 : decimals === 1 ? 1 : 2,
//     maximumFractionDigits: Math.min(decimals, 20)
//   }

//   return new Intl.NumberFormat(locale, config).format(value)
// }
