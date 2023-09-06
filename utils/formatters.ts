/**
 * Format numbers into local currency
 * @param cents The number to format in cents
 * @param currency Defaults to USD
 */
export const formatCurrency = (cents: number, currency = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  })
  return formatter.format(cents / 100)
}

/**
 * Format time into hours, minutes, and seconds
 */
export const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60
  let formattedTime = ''
  if (hours > 0) {
    formattedTime += `${hours}hr `
  }
  if (minutes > 0) {
    formattedTime += `${minutes}min `
  }
  formattedTime += `${seconds}s`
  return formattedTime
}

/**
 * Format Phone Number
 */
export const formatPhoneNumber = (number: number) => {
  const cleaned = ('' + number).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}
