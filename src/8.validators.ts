// title: Validators
// description: A collection of validators for common data types

/**
 * Check if any given value is a valid email address.
 */
export function isEmail(value: any): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid number.
 */
export function isNumber(value: any): boolean {
  if (typeof value === 'number') return true
  console.warn('Non-numeric value passed to isNumber validator.')
  return false
}

/**
 * Check if any given value is a valid URL.
 */
export function isUrl(value: any): boolean {
  const regex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return regex.test(value)
}

/**
 * Check if any given value is an empty string.
 */
export function isEmpty(value: any): boolean {
  return value === ''
}

/**
 * Check if any given value is a valid UUID.
 */
export function isUuid(value: any): boolean {
  const regex = /^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i
  return regex.test(value)
}

/**
 * Check if any given value is a valid JSON string.
 */
export function isJson(value: any): boolean {
  try {
    JSON.parse(value)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Check if any given value is an object.
 */
export function isObject(value: any): boolean {
  return value && typeof value === 'object' && value.constructor === Object
}

/**
 * Check if any given value is an array.
 */
export function isArray(value: any): boolean {
  return Array.isArray(value)
}

/**
 * Check if any given value is a valid hexadecimal color code.
 */
export function isHex(value: any): boolean {
  const regex = /^#?([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/
  return regex.test(value)
}

/**
 * Check if any given value contains only alphabetic characters.
 */
export function isAlphabetic(value: any): boolean {
  const regex = /^[a-zA-Z]+$/
  return regex.test(value)
}

/**
 * Check if any given value contains only alphanumeric characters.
 */
export function isAlphanumeric(value: any): boolean {
  const regex = /^[a-zA-Z0-9]+$/
  return regex.test(value)
}

/**
 * Check if any given value is a boolean value.
 */
export function isBoolean(value: any): boolean {
  return typeof value === 'boolean' || value === 'false' || value === 'true'
}

/**
 * Check if any given value is undefined.
 */
export function isUndefined(value: any): boolean {
  return value === undefined
}

/**
 * Check if any given value is null.
 */
export function isNull(value: any): boolean {
  return value === null
}

/**
 * Check if any given value is a valid Date object.
 */
export function isDate(value: any): boolean {
  if (value instanceof Date) {
    return !isNaN(value.getTime())
  } else if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value)
    return !isNaN(date.getTime())
  }
  return false
}

/**
 * Check if any given value is a valid time in HH:mm format.
 */
export function isTime(value: any): boolean {
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return regex.test(value)
}

/**
 * Check if any given value year is a leap year.
 */
export function isLeapYear(value: number): boolean {
  return (value % 4 === 0 && value % 100 !== 0) || value % 400 === 0
}

/**
 * Check if the number is even.
 */
export function isEven(value: number): boolean {
  return value % 2 === 0
}

/**
 * Check if the number is odd.
 */
export function isOdd(value: number): boolean {
  return Math.abs(value % 2) === 1
}

/**
 * Check if the number is positive.
 */
export function isPositive(value: number): boolean {
  return Math.sign(value) === 1
}

/**
 * Check if the number is negative.
 */
export function isNegative(value: number): boolean {
  return Math.sign(value) === -1
}

/**
 * Check if the number is zero.
 */
export function isZero(value: number): boolean {
  return value === 0
}

/**
 * Check if the number is over 9000.
 */
export function isOver9000(value: number): boolean {
  return value > 9000
}

/**
 * Check if the number is a prime number.
 */
export function isPrime(value: number): boolean {
  const boundary = Math.floor(Math.sqrt(value))
  for (let i = 2; i <= boundary; i++) {
    if (value % i === 0) return false
  }
  return value >= 2
}

/**
 * Check if the number is an integer.
 */
export function isInteger(value: any): boolean {
  if (!isNumber(value)) return false
  return value % 1 === 0
}

/**
 * Check if the number is a float.
 */
export function isFloat(value: any): boolean {
  if (!isNumber(value)) return false
  return !isInteger(value)
}

/**
 * Check if the number is between the specified range.
 */
export function isBetween(value: number, min: number, max: number): boolean {
  if (min > max) {
    ;[min, max] = [max, min]
  }
  return value >= min && value <= max
}

/**
 * Check if the number is divisible by the specified number.
 */
export function isDivisibleBy(value: number, divisor: number): boolean {
  return value % divisor === 0
}

/**
 * Check if any given value is a valid credit card number.
 */
export function isCreditCardNumber(value: any): boolean {
  const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid IP address.
 */
export function isIPAddress(value: any): boolean {
  const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((?::\d+)?|)$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid MAC address.
 */
export function isMACAddress(value: any): boolean {
  const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.
 */
export function isLatLng(value: any): boolean {
  const regex = /^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*([-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?))$/
  return regex.test(value)
}
/**
 * Check if any given value is a valid latitude coordinate.
 */
export function isLatitude(value: any): boolean {
  const regex = /^[-+]?([1-8]?\d(\.\d{1,6})?|90(\.0{1,6})?)$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid longitude coordinate.
 */
export function isLongitude(value: any): boolean {
  const regex = /^[-+]?(180(\.0{1,6})?|((1[0-7]\d)|([1-9]?\d))(\.\d{1,6})?)$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid port number.
 */
export function isPort(value: number): boolean {
  return value > 0 && value <= 65535
}

/**
 * Check the strength of a password against a given policy.
 */
export function checkPasswordStrength(value: string, length: number, uppercase: number, numbers: number, special: number): object {
  let strength = 0

  const counts = {
    uppercase: (value.match(/[A-Z]/g) || []).length,
    numbers: (value.match(/[0-9]/g) || []).length,
    special: (value.match(/[^a-zA-Z0-9]/g) || []).length
  }

  if (value.length < length) return { score: 1, label: `Password must be at least ${length} characters long` }
  if (counts.uppercase < uppercase) return { score: 1, label: `Password must contain ${uppercase} uppercase letter` }
  if (counts.numbers < numbers) return { score: 1, label: `Password must contain ${numbers} number` }
  if (counts.special < special) return { score: 1, label: `Password must contain ${special} special character` }

  if (value.length >= length) strength++
  if (counts.uppercase >= uppercase) strength++
  if (counts.numbers >= numbers) strength++
  if (counts.special >= special) strength++

  if (strength === 4) return { score: 4, label: 'Very Strong' }
  if (strength === 3) return { score: 3, label: 'Strong' }
  if (strength === 2) return { score: 2, label: 'Medium' }
  if (strength === 1) return { score: 1, label: 'Weak' }
  return { score: 0, label: 'Very Weak' }
}
