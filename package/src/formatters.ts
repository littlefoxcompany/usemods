// title: Formatters
// description: A collection of formatters for common data types

/**
 * Format numbers into local currency
 * @example formatCurrency(1234.56)
 * @returns $1,234.56
 */
export function formatCurrency(number: number, currency = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
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
 * Format numbers into valuations displayed in thounsands, millions or billions
 * @example formatValuation(1234567890)
 * @returns $1.23B
 */
export function formatValuation(value: number, currency = 'USD', decimals = 1): string {
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
 * @example formatTime(3723)
 * @returns 1hr 2min 3s
 */
export function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  let formattedTime = ''
  if (hrs > 0) {
    formattedTime += `${hrs}hr `
  }
  if (mins > 0) {
    formattedTime += `${mins}min `
  }
  if (s > 0) {
    formattedTime += `${s}s `
  }
  return formattedTime.trim()
}

/**
 * Format Unix timestamp into a datetime string
 * @example formatDatetime(1619097600)
 * @returns 2021-04-22 00:00:00
 */
export function formatDatetime(timestamp: number): string {
  return new Date(timestamp * 1000).toISOString().replace('T', ' ').replace('Z', '')
}

/**
 * Format a number into a percentage
 * @example formatPercentage(0.1234)
 * @returns 12.34%
 */
export function formatPercentage(number: number): string {
  return `${(number * 100).toFixed(2)}%`
}

/**
 * Create a string of comma-separated values from an array of strings with an optional conjunction.
 * @param items - The array of strings.
 * @param limit - The maximum number of items to include before truncating.
 * @param conjunction - The conjunction before the last item e.g. "and" or "or".
 * @example formatList(['one', 'two', 'three'])
 * @returns one, two and three
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
