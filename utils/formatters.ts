/**
 * Format numbers into local currency
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
 * Format time into hours, minutes, and seconds
 */
export function formatTime(time: number): string {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)
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

// TODO: Make more robust
// export function formatPhoneNumber(number: number): string {
//   const cleaned = ('' + number).replace(/\D/g, '')
//   const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
//   if (match) {
//     return '(' + match[1] + ') ' + match[2] + '-' + match[3]
//   }
//   throw new Error('invalid phone number')
// }


