// title: Validators
// description: A collection of validators for common data types
// lead: Hmmmm what is that?

/**
 * Check if any given value is a valid email address.
 */
export function isEmail(value: string): boolean {
  const regex = /^(?!.*[._+-]{2})(?!.*[._+-]$)[a-zA-Z0-9._+-]+(?<!\.)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid number.
 */
export function isNumber(value: string | number): boolean {
  if (typeof value === 'number') return true
  console.warn('[MODS] Non-numeric value passed to isNumber validator.')
  return false
}

/**
 * Check if any given value is a valid URL.
 */
export function isUrl(value: string): boolean {
  const regex = /^(?:\w+:)?\/\/([^\s.]+\.\S{2,}|localhost[:?\d]*(?:[^:?\d]\S*)?)$/
  return regex.test(value)
}

/**
/**
 * Check if any given string, array or object is empty.
 */
export function isEmpty(value: string | string[] | number[] | object | null | undefined): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

/**
 * Check if any given value is a valid UUID.
 */
export function isUuid(value: string): boolean {
  const regex = /^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i
  return regex.test(value)
}

/**
 * Check if any given value is a valid JSON string.
 */
export function isJson(value: string): boolean {
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
export function isObject(value: object): boolean {
  return value && typeof value === 'object' && value.constructor === Object
}

/**
 * Check if any given value is an array.
 */
export function isArray(value: string[] | number[]): boolean {
  return Array.isArray(value)
}

/**
 * Check if any given value is a valid hexadecimal color code.
 */
export function isHex(value: string): boolean {
  const regex = /^#?([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/
  return regex.test(value)
}

/**
 * Check if any given value contains only alphabetic characters.
 */
export function isAlphabetic(value: string): boolean {
  const regex = /^[a-zA-Z]+$/
  return regex.test(value)
}

/**
 * Check if any given value contains only alphanumeric characters.
 */
export function isAlphanumeric(value: string): boolean {
  const regex = /^[a-zA-Z0-9]+$/
  return regex.test(value)
}

/**
 * Check if any given value is a boolean value.
 */
export function isBoolean(value: boolean): boolean {
  return typeof value === 'boolean' || value === 'false' || value === 'true'
}

/**
 * Check if any given value is undefined.
 */
export function isUndefined(value: undefined): boolean {
  return value === undefined
}

/**
 * Check if any given value is null.
 */
export function isNull(value: null): boolean {
  return value === null
}

/**
 * Check if any given value is a valid Date object.
 */
export function isDate(value: Date): boolean {
  if (value instanceof Date) {
    return !isNaN(value.getTime())
  } else if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value)
    return !isNaN(date.getTime()) && date.toString() !== 'Invalid Date'
  }
  return false
}

/**
 * Check if any given value is a valid time in HH:mm format.
 */
export function isTime(value: string): boolean {
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
export function isInteger(value: number): boolean {
  if (!isNumber(value)) return false
  return value % 1 === 0
}

/**
 * Check if the number is a float.
 */
export function isFloat(value: number): boolean {
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
export function isCreditCard(value: string): boolean {
  const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.
 */
export function isLatLng(value: string): boolean {
  const regex = /^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*([-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?))$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid latitude coordinate.
 */
export function isLatitude(value: string): boolean {
  const regex = /^[-+]?([1-8]?\d(\.\d{1,6})?|90(\.0{1,6})?)$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid longitude coordinate.
 */
export function isLongitude(value: string): boolean {
  const regex = /^[-+]?(180(\.0{1,6})?|((1[0-7]\d)|([1-9]?\d))(\.\d{1,6})?)$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid IP address.
 */
export function isIpAddress(value: string): boolean {
  const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((?::\d+)?|)$/
  return regex.test(value)
}

/**
 * Check if any given value is a valid port number.
 */
export function isPort(value: number): boolean {
  return value > 0 && value <= 65535
}

/**
 * Check if any given value is a valid MAC address.
 */
export function isMacAddress(value: string): boolean {
  const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
  return regex.test(value)
}

/**
 * Check if you're a passionate iPhone fan.
 */
export function isIos(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.platform)
}

/**
 * Check if you're a fervent Windows fan.
 */
export function isWindows(): boolean {
  return /Win/.test(navigator.platform)
}

/**
 * Check if you're a devoted Linux fan.
 */
export function isLinux(): boolean {
  return /Linux/.test(navigator.platform)
}

/**
 * Check if you're a zealous Android fan.
 */
export function isAndroid(): boolean {
  return /Android/.test(navigator.platform)
}

/**
 * Check if you're a staunch Mac fan.
 */
export function isMac(): boolean {
  return /Mac/.test(navigator.platform)
}

/**
 * Check if you're a die-hard Chrome fan.
 */
export function isChrome(): boolean {
  return /Chrome/.test(navigator.userAgent)
}

/**
 * Check if you're a dedicated Firefox fan.
 */
export function isFirefox(): boolean {
  return /Firefox/.test(navigator.userAgent)
}

/**
 * Check if you're a lonely Safari fan.
 */
export function isSafari(): boolean {
  return /Safari/.test(navigator.userAgent)
}

/**
 * Check if you're an ardent Edge fan.
 */
export function isEdge(): boolean {
  return /Edge/.test(navigator.userAgent)
}

/**
 * Check if you're rocking a mobile
 */
export function isMobile(): boolean {
  return /Mobi/.test(navigator.userAgent)
}

/**
 * Check if you're tablet user
 */
export function isTablet(): boolean {
  return /Tablet/.test(navigator.userAgent)
}

/**
 * Check if you're pro desktop user
 */
export function isDesktop(): boolean {
  return !isMobile() && !isTablet()
}

/**
 * Check if you're portrait
 */
export function isPortrait(): boolean {
  return window.innerHeight > window.innerWidth
}

/**
 * Check if you're landscape
 */
export function isLandscape(): boolean {
  return window.innerWidth > window.innerHeight
}

/**
 * Check if you're a cyborg or a bot
 */
export function isBot(): boolean {
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)
}
