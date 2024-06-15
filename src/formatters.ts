// title: Formatters
// description: Wrangle wild data types into submission. Spruce up numbers, give strings smarts, and make complex content dazzle.
// lead: Format misbehaving content

import { currencySymbols, numberUnderTwenty, numberTens, numberScales, formatTitleExceptions, bytesInUnit } from './config'

/**
 * Format numbers into neat and formatted strings for people
 */
export function formatNumber(number: number, options?: { decimals?: number; locale?: string }): string {
  const decimalPlaces = (number.toString().split('.')[1] || '').length
  const safeDecimals = Math.min(options?.decimals ?? decimalPlaces, decimalPlaces)

  const config: Intl.NumberFormatOptions = {
    style: 'decimal',
    minimumFractionDigits: safeDecimals,
    maximumFractionDigits: safeDecimals,
  }

  return new Intl.NumberFormat(options?.locale ?? 'en-US', config).format(number)
}

/**
 * Format numbers into local currency with extra smarts
 */
export function formatCurrency(number: number, options?: { decimals?: number; locale?: string }): string {
  const decimalPlaces = (number.toString().split('.')[1] || '').length
  const safeDecimals = Math.min(options?.decimals ?? decimalPlaces, decimalPlaces)

  const config: Intl.NumberFormatOptions = {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: safeDecimals,
    maximumFractionDigits: safeDecimals,
    currency: currencySymbols.get(options?.locale ?? 'en-US') || 'USD'
  }

  return new Intl.NumberFormat(options?.locale ?? 'en-US', config).format(number)
}

/**
 * Format numbers into valuations displayed in thousands, millions or billions
 */
export function formatValuation(number: number, options?: { decimals?: number; locale?: string }): string {
  const safeDecimals = Math.max(0, Math.min(options?.decimals ?? 0, 20))

  const config: Intl.NumberFormatOptions = {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: safeDecimals,
    maximumFractionDigits: safeDecimals,
    currency: currencySymbols.get(options?.locale ?? 'en-US')
  }

  return new Intl.NumberFormat(options?.locale ?? 'en-US', config).format(number)
}

/**
 * Format a number into a your unit of choice
 */
export function formatUnit(number: number, options: { unit: string; decimals?: number; unitDisplay?: 'short' | 'long'; locale?: string }): string {
  const decimalPlaces = (number.toString().split('.')[1] || '').length
  const safeDecimals = Math.max(0, Math.max(options.decimals ?? decimalPlaces, decimalPlaces))

  const config: Intl.NumberFormatOptions = {
    unit: options.unit,
    style: 'unit',
    unitDisplay: options.unitDisplay ?? 'long',
    minimumFractionDigits: safeDecimals,
    maximumFractionDigits: safeDecimals
  }

  return new Intl.NumberFormat(options.locale ?? 'en-US', config).format(number)
}

/**
 * Format a number into a percentage
 */
export function formatPercentage(number: number, options?: { decimals?: number; locale?: string }): string {
  const decimalPlaces = (number.toString().split('.')[1] || '').length
  const safeDecimals = Math.max(0, Math.min(options?.decimals ?? decimalPlaces, decimalPlaces))

  const config: Intl.NumberFormatOptions = {
    style: 'percent',
    minimumFractionDigits: safeDecimals,
    maximumFractionDigits: safeDecimals
  }

  let formattedNumber = new Intl.NumberFormat(options?.locale ?? 'en-US', config).format(number)
  formattedNumber = formattedNumber.replace(/(\.\d*?[1-9])0+%$/, '$1%').replace(/\.0+%$/, '%')

  return formattedNumber
}

/**
 * Format time into a human-readable string
 */
export function formatDurationLabels(seconds: number, options?: { labels?: 'short' | 'long'; round?: boolean }): string {
  if (seconds <= 0) return formatUnit(0, { unit: 'second', decimals: 0, unitDisplay: options?.labels ?? 'long' })
  if (options?.round) seconds = Math.round(seconds)

  const units = [
    { unit: 'year', value: 31536000 },
    { unit: 'day', value: 86400 },
    { unit: 'hour', value: 3600 },
    { unit: 'minute', value: 60 },
    { unit: 'second', value: 1 },
  ]

  const labels = options?.labels ?? 'long'
  const results = []

  units.forEach(({ unit, value }) => {
    const unitValue = Math.floor(seconds / value)
    if (unitValue > 0) {
      results.push(formatUnit(unitValue, { unit, decimals: 0, unitDisplay: labels }))
      seconds %= value
    }
  })

  const milliseconds = Math.floor((seconds % 1) * 1000)
  if (milliseconds > 0) results.push(formatUnit(milliseconds, { unit: 'millisecond', decimals: 0, unitDisplay: labels }))
  return results.join(' ')
}

/**
 * Format time into duration 00:00:00
 */
export function formatDurationNumbers(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  const ms = Math.floor((seconds % 1) * 1000)

  const timeParts = [h, m, s].map((value) => value.toString().padStart(2, '0'))

  if (ms > 0) {
    const msString = Math.floor(ms / 10).toString().padStart(2, '0')
    timeParts.push(msString)
  }

  return timeParts.join(':')
}

/**
 * Format file size into human-readable string
 */
export function formatFileSize(number: number, options?: { decimals?: number; inputUnit?: string; outputUnit?: string; unitDisplay?: 'short' | 'long'; locale?: string }): string {
  const { decimals = 0, unitDisplay = 'short', locale = 'en-US' } = options || {}
  
  // 
  const inputUnit = options?.inputUnit || 'byte'
  const outputUnit = options?.outputUnit || 'auto'

  const valueInBytes = number * (bytesInUnit.get(inputUnit) || 1)
  
  if (outputUnit === 'auto') {
    const largestUnit = Array.from(bytesInUnit.keys()).reverse().find((unit) => valueInBytes >= (bytesInUnit.get(unit) || 0))
    if (!largestUnit) return formatUnit(valueInBytes, { unit: inputUnit, decimals, unitDisplay, locale })
    return formatUnit(valueInBytes / bytesInUnit.get(largestUnit)!, { unit: largestUnit, decimals, unitDisplay, locale })
  }

  else {
    return formatUnit(valueInBytes / (bytesInUnit.get(outputUnit) || 1), { unit: outputUnit, decimals, unitDisplay, locale })
  }
}

/**
 * Format numbers into words
 */
export function formatNumberToWords(number: number): string {
  if (number === 0) return numberUnderTwenty[0]

  const formatGroup = (num: number): string => {
    if (num < 20) return numberUnderTwenty[num]
    if (num < 100) return `${numberTens[Math.floor(num / 10) - 2]}${num % 10 ? '-' + numberUnderTwenty[num % 10] : ''}`
    return `${numberUnderTwenty[Math.floor(num / 100)]} hundred${num % 100 ? ` and ${formatGroup(num % 100)}` : ''}`
  }

  let result = ''
  let scaleIndex = 0

  while (number > 0) {
    const groupValue = number % 1000
    if (groupValue > 0) {
      result = `${formatGroup(groupValue)}${numberScales[scaleIndex]}${result ? ', ' + result : ''}`
    }
    number = Math.floor(number / 1000)
    scaleIndex++
  }

  return result.trim()
}

/**
 * Generate initials from any string while ignoring common titles
 */
export function formatInitials(text: string, options?: { length?: number }): string {
  if (!text) return ''
  text = text.replace(/\b(Mrs|Mr|Ms|Dr|Jr|Sr|Prof|Hon|Snr|Jnr|St)\b\.?/g, ' ').trim()

  return text
    .split(' ')
    .filter((word) => !['the', 'third'].includes(word.toLowerCase()))
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, options?.length ?? 2)
}

/**
 * Format Unix timestamp into a datetime string
 */
export function formatUnixTime(timestamp: number): string {
  if (isNaN(timestamp) || timestamp < 0 || timestamp > 9999999999) {
    console.warn('[MODS] Invalid Unix timestamp:', timestamp)
    return String(timestamp)
  }
  return new Date(timestamp * 1000).toISOString().replace('T', ' ').replace('Z', '')
}

/**
 * Create a string of comma-separated values from an array, object, or string with an optional limit and conjunction
 */
export function formatList(items: string | object | string[], options?: { limit?: number; conjunction?: string }): string {
  if (typeof items === 'string') items = items.split(',').map((item) => item.trim())
  if (typeof items === 'object' && !Array.isArray(items)) items = Object.values(items)
  if (!Array.isArray(items) || items.length === 0) return ''
  if (items.length <= 2) return items.join(items.length === 2 ? ` ${options?.conjunction || 'and'} ` : '')

  const effectiveLimit = options?.limit ?? items.length
  if (items.length <= effectiveLimit) return items.slice(0, -1).join(', ') + ` ${options?.conjunction || 'and'} ` + items.slice(-1)

  const listedItems = items.slice(0, effectiveLimit).join(', ')
  const remaining = items.length - effectiveLimit
  return `${listedItems} ${options?.conjunction || 'and'} ${remaining} more`
}

/**
 * Converts a string to title case following the Chicago Manual of Style rules.
 */
export function formatTitle(text: string): string {
  if (!text) return ''

  return text
    .split(' ')
    .map((word, index, wordsArray) => {
      const lowerWord = word.toLowerCase()
      if (index === 0 || index === wordsArray.length - 1 || !formatTitleExceptions.has(lowerWord)) {
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
  if (!text) {
    console.warn('[MODS] Empty formatSentenceCase text')
    return ''
  }
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
 * @info Remember `text-wrap: pretty` and `text-wrap: balance` are available for most browsers.
 */
export function formatTextWrap(text: string): string {
  if (!text) {
    console.warn('[MODS] Empty formatTextWrap text')
    return ''
  }
  const space = text.lastIndexOf(' ')
  if (space !== -1) return text.substring(0, space) + '&nbsp;' + text.substring(space + 1)
  return text
}
