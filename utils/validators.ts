/**
 * Check if the input is a valid email address.
 */
export function isEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return regex.test(email)
}

/**
 * Check if the input is a valid number.
 */
export function isNumber(number: string): boolean {
  const regex = /^\d+$/
  return regex.test(number)
}

/**
 * Check if the input is a valid phone number.
 */
function isPhoneNumber(phoneNumber: string, country: string = 'US'): boolean {
  const patterns: { [key: string]: RegExp } = {
    US: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    UK: /^(\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?)?\(?0?(?:\)[\s-]?)?([1-9]\d{1,4}\)?[\d\s-]+)((?:x|ext\.?\s?|\#)\d{3,4})?$/,
    CA: /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    BR: /^(\+?55[-.\s]?)?\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/,
    AU: /^(\+?61[-.\s]?)?\(?(0?[2-57-8])\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
    DE: /^(\+?49[-.\s]?)?\(?([0-9]{2,3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{4})$/,
    FR: /^(\+?33[-.\s]?)?\(?([0-9]{1,5})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
    IN: /^(\+?91|0)?[6789]\d{9}$/,
    NZ: /^(\+?64|0)[28]\d{7,9}$/,
    ZA: /^(\+?27|0)\d{9}$/,
    ZM: /^(\+?26)?09[567]\d{7}$/,
    ES: /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
    SE: /^(\+?46|0)[\s-]?7[\s-]?[02369]([\s-]?\d){7}$/,
    CH: /^(\+?41|0)(\d{2})?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/,
    TW: /^(\+?886-?|0)?9\d{8}$/,
    CZ: /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    BE: /^(\+?32|0)4?\d{8}$/,
    PT: /^(\+351)?9[1236]\d{7}$/,
    GR: /^(\+?30)?(69\d{8})$/,
    HU: /^(\+?36)(20|30|70)\d{7}$/,
    IL: /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/,
    IT: /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    AR: /^(\+?549|0)(11|[2368]\d)\d{8}$/,
    MX: /^(\+?52)?(1|01)?\d{10,11}$/,
    PK: /^(\+?92|0)?[3456789]?\d{9}$/,
    JP: /^(\+?81|0)\d{1,4}[ -]?\d{1,4}[ -]?\d{4}$/
  }

  return patterns[country].test(phoneNumber)
}

/**
 * Check if the input is a valid URL.
 */
export function isURL(url: string): boolean {
  const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
  return regex.test(url)
}

/**
 * Check if the input is a valid UUID.
 */
export function isUUID(uuid: string): boolean {
  const regex = /^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i
  return regex.test(uuid)
}

/**
 * Check if the input is a valid JSON string.
 */
export function isJSON(json: string): boolean {
  try {
    JSON.parse(json)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Check if the input is a valid hexadecimal color code.
 */
export function isHex(hex: string): boolean {
  const regex = /^#?([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/
  return regex.test(hex)
}

/**
 * Check if the input is an empty string.
 */
export function isEmpty(text: string): boolean {
  return text === ''
}

/**
 * Check if the input contains only alphabetic characters.
 */
export function isAlpha(text: string): boolean {
  const regex = /^[a-zA-Z]+$/
  return regex.test(text)
}

/**
 * Check if the input contains only alphanumeric characters.
 */
export function isAlphanumeric(text: string): boolean {
  const regex = /^[a-zA-Z0-9]+$/
  return regex.test(text)
}

/**
 * Check if the input is an array.
 */
export function isArray(array: any): boolean {
  return Array.isArray(array)
}

/**
 * Check if the input is an object.
 */
export function isObject(value: any): boolean {
  return value && typeof value === 'object' && value.constructor === Object
}

/**
 * Check if the input is a boolean value.
 */
export function isBoolean(boolean: any): boolean {
  return typeof boolean === 'boolean'
}

/**
 * Check if the input is a function.
 */
export function isFunction(functionToCheck: any): boolean {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}

/**
 * Check if the input is undefined.
 */
export function isUndefined(value: any): boolean {
  return value === undefined
}

/**
 * Check if the input is null.
 */
export function isNull(value: any): boolean {
  return value === null
}

/**
 * Check if the input is NaN (Not a Number).
 */
export function isNaN(value: any): boolean {
  return value !== value
}

/**
 * Check if the input is a valid Date object.
 */
export function isDate(date: any): boolean {
  return date instanceof Date
}

/**
 * Check if the input is an Error object with a defined message.
 */
export function isError(error: any): boolean {
  return error instanceof Error && typeof error.message !== 'undefined'
}

/**
 * Check if the input is a valid time in HH:mm format.
 */
export function isTime(time: any): boolean {
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return regex.test(time)
}

/**
 * Check if the input year is a leap year.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * Check if the input is a symbol.
 */
export function isSymbol(symbol: any): boolean {
  return typeof symbol === 'symbol'
}

/**
 * Check if the input is a Promise object.
 */
export function isPromise(promise: any): boolean {
  return promise instanceof Promise
}

/**
 * Check if the input is a Set object.
 */
export function isSet(set: any): boolean {
  return set instanceof Set
}

/**
 * Check if the input is a Map object.
 */
export function isMap(map: any): boolean {
  return map instanceof Map
}

/**
 * Check if the input is a WeakSet object.
 */
export function isWeakSet(weakSet: any): boolean {
  return weakSet instanceof WeakSet
}

/**
 * Check if the number is even.
 */
export function isEven(number: any): boolean {
  return number % 2 === 0
}

/**
 * Check if the number is odd.
 */
export function isOdd(number: any): boolean {
  return Math.abs(number % 2) === 1
}

/**
 * Check if the number is positive.
 */
export function isPositive(number: any): boolean {
  return Math.sign(number) === 1
}

/**
 * Check if the number is negative.
 */
export function isNegative(number: any): boolean {
  return Math.sign(number) === -1
}

/**
 * Check if the number is a prime number.
 */
export function isPrime(number: any): boolean {
  const boundary = Math.floor(Math.sqrt(number))
  for (let i = 2; i <= boundary; i++) {
    if (number % i === 0) return false
  }
  return number >= 2
}

/**
 * Check if the string is equal to "Optimus Prime".
 */
export function isOptimusPrime(text: string): boolean {
  return text === 'Optimus Prime'
}

/**
 * Check if the string is a palindrome.
 */
export function isPalindrome(text: any): boolean {
  const regex = /[\W_]/g
  const lowerText = text.toLowerCase().replace(regex, '')
  const reverseText = lowerText.split('').reverse().join('')
  return reverseText === lowerText
}

/**
 * Check if the number is an integer.
 */
export function isInteger(number: number): boolean {
  return number % 1 === 0
}

/**
 * Check if the number is a float.
 */
export function isFloat(number: number): boolean {
  return !isInteger(number)
}

/**
 * Check if the number is between the specified range.
 */
export function isBetween(number: number, min: number, max: number): boolean {
  if (min > max) {
    ;[min, max] = [max, min]
  }
  return number >= min && number <= max
}

/**
 * Check if the number is divisible by the specified number.
 */
export function isDivisibleBy(number: number, divisor: number): boolean {
  return number % divisor === 0
}

/**
 * Check if the input is a valid credit card number.
 */
export function isCreditCardNumber(number: string): boolean {
  const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  return regex.test(number)
}

/**
 * Check if the input is a valid IP address.
 */
export function isIPAddress(ip: string): boolean {
  const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((?::\d+)?|)$/
  return regex.test(ip)
}

/**
 * Check if the input is a valid MAC address.
 */
export function isMACAddress(mac: string): boolean {
  const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
  return regex.test(mac)
}

/**
 * Check if the input is a valid latitude-longitude coordinate in the format lat,long or lat, long.
 */
export function isLatLong(latLong: string): boolean {
  const regex = /^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*([-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?))$/
  return regex.test(latLong)
}
/**
 * Check if the input is a valid latitude coordinate.
 */
export function isLatitude(latitude: string): boolean {
  const regex = /^[-+]?([1-8]?\d(\.\d{1,6})?|90(\.0{1,6})?)$/
  return regex.test(latitude)
}

/**
 * Check if the input is a valid longitude coordinate.
 */
export function isLongitude(longitude: string): boolean {
  const regex = /^[-+]?(180(\.0{1,6})?|((1[0-7]\d)|([1-9]?\d))(\.\d{1,6})?)$/
  return regex.test(longitude)
}

/**
 * Checks if a property and value pair exists in an object.
 */
export function isPresent(object: any, property: string, value: any): boolean {
  return object.hasOwnProperty(property) && object[property] === value
}
