/**
 * Check if the input is a valid email address.
 * @example isEmail('hello@usemods.com')
 * @returns true
 */
export function isEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return regex.test(email)
}

/**
 * Check if the input is a valid number.
 * @example isNumber('123')
 * @returns true
 */
export function isNumber(value: string | number): boolean {
  const regex = /^\d+$/
  return regex.test(value.toString())
}

/**
 * Check if the input is a valid phone number.
 * @example isPhoneNumber('123-456-7890')
 * @returns true
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
 * @example isURL('https://usemods.com')
 * @returns true
 */
export function isURL(url: string): boolean {
  const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
  return regex.test(url)
}

/**
 * Check if the input is a valid UUID.
 * @example isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
 * @returns true
 */
export function isUUID(uuid: string): boolean {
  const regex = /^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i
  return regex.test(uuid)
}

/**
 * Check if the input is a valid JSON string.
 * @example isJSON('{"hello": "world"}')
 * @returns true
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
 * @example isHex('#fff')
 * @returns true
 */
export function isHex(hex: string): boolean {
  const regex = /^#?([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/
  return regex.test(hex)
}

/**
 * Check if the input is an empty string.
 * @example isEmpty('')
 * @returns true
 */
export function isEmpty(text: string): boolean {
  return text === ''
}

/**
 * Check if the input contains only alphabetic characters.
 * @example isAlpha('hello')
 * @returns true
 */
export function isAlpha(text: string): boolean {
  const regex = /^[a-zA-Z]+$/
  return regex.test(text)
}

/**
 * Check if the input contains only alphanumeric characters.
 * @example isAlphanumeric('hello123')
 * @returns true
 */
export function isAlphanumeric(text: string): boolean {
  const regex = /^[a-zA-Z0-9]+$/
  return regex.test(text)
}

/**
 * Check if the input is an array.
 * @example isArray([1, 2, 3])
 * @returns true
 */
export function isArray(array: any): boolean {
  return Array.isArray(array)
}

/**
 * Check if the input is an object.
 * @example isObject({ hello: 'world' })
 * @returns true
 */
export function isObject(value: any): boolean {
  return value && typeof value === 'object' && value.constructor === Object
}

/**
 * Check if the input is a boolean value.
 * @example isBoolean(true)
 * @returns true
 */
export function isBoolean(boolean: any): boolean {
  return typeof boolean === 'boolean'
}

/**
 * Check if the input is a function.
 * @example isFunction(() => {})
 * @returns true
 */
export function isFunction(functionToCheck: any): boolean {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}

/**
 * Check if the input is undefined.
 * @example isUndefined(undefined)
 * @returns true
 */
export function isUndefined(value: any): boolean {
  return value === undefined
}

/**
 * Check if the input is null.
 * @example isNull(null)
 * @returns true
 */
export function isNull(value: any): boolean {
  return value === null
}

/**
 * Check if the input is NaN (Not a Number).
 * @example isNaN(NaN)
 * @returns true
 */
export function isNaN(value: any): boolean {
  return value !== value
}

/**
 * Check if the input is a valid Date object.
 * @example isDate(new Date())
 * @returns true
 */
export function isDate(date: any): boolean {
  return date instanceof Date
}

/**
 * Check if the input is an Error object with a defined message.
 * @example isError(new Error('hello'))
 * @returns true
 */
export function isError(error: any): boolean {
  return error instanceof Error && typeof error.message !== 'undefined'
}

/**
 * Check if the input is a valid time in HH:mm format.
 * @example isTime('12:00')
 * @returns true
 */
export function isTime(time: any): boolean {
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return regex.test(time)
}

/**
 * Check if the input year is a leap year.
 * @example isLeapYear(2020)
 * @returns true
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * Check if the input is a symbol.
 * @example isSymbol(Symbol('hello'))
 * @returns true
 */
export function isSymbol(symbol: any): boolean {
  return typeof symbol === 'symbol'
}

/**
 * Check if the input is a Promise object.
 * @example isPromise(new Promise(() => {}))
 * @returns true
 */
export function isPromise(promise: any): boolean {
  return promise instanceof Promise
}

/**
 * Check if the input is a Set object.
 * @example isSet(new Set())
 * @returns true
 */
export function isSet(set: any): boolean {
  return set instanceof Set
}

/**
 * Check if the input is a Map object.
 * @example isMap(new Map())
 * @returns true
 */
export function isMap(map: any): boolean {
  return map instanceof Map
}

/**
 * Check if the input is a WeakSet object.
 * @example isWeakSet(new WeakSet())
 * @returns true
 */
export function isWeakSet(weakSet: any): boolean {
  return weakSet instanceof WeakSet
}

/**
 * Check if the number is even.
 * @example isEven(2)
 * @returns true
 */
export function isEven(number: any): boolean {
  return number % 2 === 0
}

/**
 * Check if the number is odd.
 * @example isOdd(3)
 * @returns true
 */
export function isOdd(number: any): boolean {
  return Math.abs(number % 2) === 1
}

/**
 * Check if the number is positive.
 * @example isPositive(1)
 * @returns true
 */
export function isPositive(number: any): boolean {
  return Math.sign(number) === 1
}

/**
 * Check if the number is negative.
 * @example isNegative(-1)
 * @returns true
 */
export function isNegative(number: any): boolean {
  return Math.sign(number) === -1
}

/**
 * Check if the number is a prime number.
 * @example isPrime(7)
 * @returns true
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
 * @example isOptimusPrime('Optimus Prime')
 * @returns true
 */
export function isOptimusPrime(text: string): boolean {
  return text === 'Optimus Prime'
}

/**
 * Check if the string is a palindrome.
 * @example isPalindrome('racecar')
 * @returns true
 */
export function isPalindrome(text: any): boolean {
  const regex = /[\W_]/g
  const lowerText = text.toLowerCase().replace(regex, '')
  const reverseText = lowerText.split('').reverse().join('')
  return reverseText === lowerText
}

/**
 * Check if the number is an integer.
 * @example isInteger(1)
 * @returns true
 */
export function isInteger(number: number): boolean {
  return number % 1 === 0
}

/**
 * Check if the number is a float.
 * @example isFloat(1.5)
 * @returns true
 */
export function isFloat(number: number): boolean {
  return !isInteger(number)
}

/**
 * Check if the number is between the specified range.
 * @example isBetween(5, 1, 10)
 * @returns true
 */
export function isBetween(number: number, min: number, max: number): boolean {
  if (min > max) {
    ;[min, max] = [max, min]
  }
  return number >= min && number <= max
}

/**
 * Check if the number is divisible by the specified number.
 * @example isDivisibleBy(10, 2)
 * @returns true
 */
export function isDivisibleBy(number: number, divisor: number): boolean {
  return number % divisor === 0
}

/**
 * Check if the input is a valid credit card number.
 * @example isCreditCardNumber('4242424242424242')
 * @returns true
 */
export function isCreditCardNumber(number: string): boolean {
  const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  return regex.test(number)
}

/**
 * Check if the input is a valid IP address.
 * @example isIPAddress('127.0.0.0')
 * @returns true
 */
export function isIPAddress(ip: string): boolean {
  const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((?::\d+)?|)$/
  return regex.test(ip)
}

/**
 * Check if the input is a valid MAC address.
 * @example isMACAddress('00:00:00:00:00:00')
 * @returns true
 */
export function isMACAddress(mac: string): boolean {
  const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
  return regex.test(mac)
}

/**
 * Check if the input is a valid latitude-longitude coordinate in the format lat,long or lat, long.
 * @example isLatLong('40.741895,-73.989308')
 * @returns true
 */
export function isLatLong(latLong: string): boolean {
  const regex = /^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*([-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?))$/
  return regex.test(latLong)
}
/**
 * Check if the input is a valid latitude coordinate.
 * @example isLatitude('40.741895')
 * @returns true
 */
export function isLatitude(latitude: string): boolean {
  const regex = /^[-+]?([1-8]?\d(\.\d{1,6})?|90(\.0{1,6})?)$/
  return regex.test(latitude)
}

/**
 * Check if the input is a valid longitude coordinate.
 * @example isLongitude('-73.989308')
 * @returns true
 */
export function isLongitude(longitude: string): boolean {
  const regex = /^[-+]?(180(\.0{1,6})?|((1[0-7]\d)|([1-9]?\d))(\.\d{1,6})?)$/
  return regex.test(longitude)
}

/**
 * Checks if a property and value pair exists in an object.
 * @example isPresent({ hello: 'world' }, 'hello', 'world')
 * @returns true
 */
export function isPresent(object: any, property: string, value: any): boolean {
  return object.hasOwnProperty(property) && object[property] === value
}

/**
 * Check if the input is a valid IBAN.
 * @example isIBAN('NL39RABO0300065264')
 * @returns true
 */
export function isIBAN(iban: string): boolean {
  const regex = /^[A-Z]{2}\d{2}[A-Z]{4}\d{10}$/
  return regex.test(iban)
}

/**
 * Check if the input is a valid BIC.
 * @example isBIC('RABONL2U')
 * @returns true
 */
export function isBIC(bic: string): boolean {
  const regex = /^[A-Z]{6}[A-Z1-9]{5}$/
  return regex.test(bic)
}

/**
 * Check if the input is a valid port number.
 * @example isPort(3000)
 * @returns true
 */
export function isPort(port: number): boolean {
  return port > 0 && port <= 65535
}

/**
 * Check if the input is a valid IBAN.
 * @example isIBAN('NL39RABO0300065264')
 * @returns true
 */
export function isISBN(isbn: string): boolean {
  const regex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/
  return regex.test(isbn)
}
