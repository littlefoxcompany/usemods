/**
 * Check if the input is a valid email address.
 */
export const isEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

/**
 * Check if the input is a valid number.
 */
export const isNumber = (number: string) => {
  const regex = /^\d+$/
  return regex.test(number)
}

/**
 * Check if the input is a valid phone number.
 */
export const isPhoneNumber = (number: string) => {
  const regex = /^\d{10}$/
  return regex.test(number)
}

/**
 * Check if the input is a valid URL.
 */
export const isURL = (url: string) => {
  const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
  return regex.test(url)
}

/**
 * Check if the input is a valid UUID.
 */
export const isUUID = (uuid: string) => {
  const regex = /^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i
  return regex.test(uuid)
}

/**
 * Check if the input is a valid JSON string.
 */
export const isJSON = (json: string) => {
  try {
    JSON.parse(json)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Check if the input is a valid Base64 string.
 */
export const isBase64 = (base64: string) => {
  const regex = /[^a-zA-Z0-9\/\+=]/i
  return !regex.test(base64)
}

/**
 * Check if the input is a valid hexadecimal color code.
 */
export const isHex = (hex: string) => {
  const regex = /[0-9A-Fa-f]{6}/g
  return regex.test(hex)
}

/**
 * Check if the input is an empty string.
 */
export const isEmpty = (text: string) => {
  return text === ''
}

/**
 * Check if the input contains only alphabetic characters.
 */
export const isAlpha = (text: string) => {
  const regex = /^[a-zA-Z]+$/
  return regex.test(text)
}

/**
 * Check if the input contains only alphanumeric characters.
 */
export const isAlphaNumeric = (text: string) => {
  const regex = /^[a-zA-Z0-9]+$/
  return regex.test(text)
}

/**
 * Check if the input is an array.
 */
export const isArray = (array: any) => {
  return Array.isArray(array)
}

/**
 * Check if the input is an object.
 */
export const isObject = (object: any) => {
  return object === Object(object)
}

/**
 * Check if the input is a boolean value.
 */
export const isBoolean = (boolean: any) => {
  return typeof boolean === 'boolean'
}

/**
 * Check if the input is a function.
 */
export const isFunction = (functionToCheck: any) => {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
}

/**
 * Check if the input is undefined.
 */
export const isUndefined = (value: any) => {
  return value === undefined
}

/**
 * Check if the input is null.
 */
export const isNull = (value: any) => {
  return value === null
}

/**
 * Check if the input is NaN (Not a Number).
 */
export const isNaN = (value: any) => {
  return value !== value
}

/**
 * Check if the input is a valid Date object.
 */
export const isDate = (date: any) => {
  return date instanceof Date
}

/**
 * Check if the input is an Error object with a defined message.
 */
export const isError = (error: any) => {
  return error instanceof Error && typeof error.message !== 'undefined'
}

/**
 * Check if the input is a valid time in HH:mm format.
 */
export const isTime = (time: any) => {
  const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return regex.test(time)
}

/**
 * Check if the input year is a leap year.
 */
export const isLeapYear = (year: any) => {
  return new Date(year, 1, 29).getMonth() === 1
}

/**
 * Check if the input is a symbol.
 */
export const isSymbol = (symbol: any) => {
  return typeof symbol === 'symbol'
}

/**
 * Check if the input is a Promise object.
 */
export const isPromise = (promise: any) => {
  return promise instanceof Promise
}

/**
 * Check if the input is a Set object.
 */
export const isSet = (set: any) => {
  return set instanceof Set
}

/**
 * Check if the input is a Map object.
 */
export const isMap = (map: any) => {
  return map instanceof Map
}

/**
 * Check if the input is a WeakSet object.
 */
export const isWeakSet = (weakSet: any) => {
  return weakSet instanceof WeakSet
}

/**
 * Check if the input number is even.
 */
export const isEven = (number: any) => {
  return number % 2 === 0
}

/**
 * Check if the input number is odd.
 */
export const isOdd = (number: any) => {
  return Math.abs(number % 2) === 1
}

/**
 * Check if the input number is positive.
 */
export const isPositive = (number: any) => {
  return Math.sign(number) === 1
}

/**
 * Check if the input number is negative.
 */
export const isNegative = (number: any) => {
  return Math.sign(number) === -1
}

/**
 * Check if the input number is a prime number.
 */
export const isPrime = (number: any) => {
  const boundary = Math.floor(Math.sqrt(number))
  for (let i = 2; i <= boundary; i++) {
    if (number % i === 0) return false
  }
  return number >= 2
}

/**
 * Check if the input text is equal to "Optimus Prime".
 */
export const isOptimusPrime = (text: string) => {
  return text === 'Optimus Prime'
}

/**
 * Check if the input text is a palindrome.
 */
export const isPalindrome = (text: any) => {
  const regex = /[\W_]/g
  const lowerText = text.toLowerCase().replace(regex, '')
  const reverseText = lowerText.split('').reverse().join('')
  return reverseText === lowerText
}

/**
 * Check if the input number is an integer.
 */
export const isInteger = (number: number) => {
  return number % 1 === 0
}

/**
 * Check if the input number is a float.
 */
export const isFloat = (number: number) => {
  return !isInteger(number)
}

/**
 * Check if the input number is between the specified range.
 */
export const isBetween = (number: number, min: number, max: number) => {
  return number >= min && number <= max
}
