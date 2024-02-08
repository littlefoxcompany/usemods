import { expect, test } from 'bun:test'
import {
  isEmail,
  isNumber,
  isUrl,
  isUuid,
  isJson,
  isHex,
  isEmpty,
  isAlphabetic,
  isAlphanumeric,
  isArray,
  isObject,
  isBoolean,
  isDate,
  isUndefined,
  isNull,
  isTime,
  isLeapYear,
  isEven,
  isOdd,
  isPositive,
  isNegative,
  isPrime,
  isInteger,
  isFloat,
  isBetween,
  isDivisibleBy,
  isCreditCard,
  isIpAddress,
  isMacAddress,
  isLatLng,
  isLatitude,
  isLongitude
} from '../src/8.validators'

test('isEmail', () => {
  expect(isEmail('hello@email.com')).toBe(true)
  expect(isEmail('helloemail.com')).toBe(false)
})

test('isNumber', () => {
  expect(isNumber(0)).toBe(true)
  expect(isNumber(123)).toBe(true)
  expect(isNumber('123')).toBe(false)
  expect(isNumber('abc')).toBe(false)
})

test('isUrl', () => {
  expect(isUrl('https://usemods.com')).toBe(true)
  expect(isUrl('https://www.usemods.com')).toBe(true)
  expect(isUrl('ftp://192.168.0.1')).toBe(true)
  expect(isUrl('www.usemods')).toBe(false)
  expect(isUrl('usemods.com')).toBe(false)
  expect(isUrl('com.usemods')).toBe(false)
  expect(isUrl('usemods')).toBe(false)
})

test('isUuid', () => {
  expect(isUuid('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11')).toBe(true)
  expect(isUuid('hello')).toBe(false)
})

test('isJson', () => {
  expect(isJson('{"hello": "world"}')).toBe(true)
  expect(isJson('{"hello": world}')).toBe(false)
  expect(isJson('hello')).toBe(false)
})

test('isHex', () => {
  expect(isHex('#ffffff')).toBe(true)
  expect(isHex('#gggggg')).toBe(false)
})

test('isEmpty', () => {
  expect(isEmpty('')).toBe(true)
  expect(isEmpty([])).toBe(true)
  expect(isEmpty({})).toBe(true)
  expect(isEmpty(null)).toBe(true)
  expect(isEmpty(undefined)).toBe(true)
  expect(isEmpty('hello')).toBe(false)
  expect(isEmpty([1])).toBe(false)
  expect(isEmpty({ key: 'value' })).toBe(false)
})

test('isAlphabetic', () => {
  expect(isAlphabetic('hello')).toBe(true)
  expect(isAlphabetic('hello123')).toBe(false)
  expect(isAlphabetic(123)).toBe(false)
  expect(isAlphabetic(['a', 'b', 'c'])).toBe(false)
})

test('isAlphanumeric', () => {
  expect(isAlphanumeric('hello')).toBe(true)
  expect(isAlphanumeric(123)).toBe(true)
  expect(isAlphanumeric('hello123')).toBe(true)
  expect(isAlphanumeric('hello!')).toBe(false)
  expect(isAlphanumeric(['a', 2, '!'])).toBe(false)
})

test('isArray', () => {
  expect(isArray([])).toBe(true)
  expect(isArray(['hello'])).toBe(true)
  expect(isArray('hello')).toBe(false)
})

test('isObject', () => {
  expect(isObject({ hello: 'world' })).toBe(true)
  expect(isObject('hello')).toBe(false)
})

test('isBoolean', () => {
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(1)).toBe(false)
  expect(isBoolean('hello')).toBe(false)
})

test('isDate', () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate('2024-01-01')).toBe(true)
  expect(isDate('2024-01-day')).toBe(false)
  expect(isDate('hello')).toBe(false)
})

test('isUndefined', () => {
  expect(isUndefined(undefined)).toBe(true)
  expect(isUndefined('hello')).toBe(false)
})

test('isNull', () => {
  expect(isNull(null)).toBe(true)
  expect(isNull('hello')).toBe(false)
})

test('isTime', () => {
  expect(isTime('12:00')).toBe(true)
  expect(isTime('hello')).toBe(false)
})

test('isLeapYear', () => {
  expect(isLeapYear(2020)).toBe(true)
  expect(isLeapYear(2021)).toBe(false)
})

test('isEven', () => {
  expect(isEven(2)).toBe(true)
  expect(isEven(3)).toBe(false)
})

test('isOdd', () => {
  expect(isOdd(2)).toBe(false)
  expect(isOdd(3)).toBe(true)
})

test('isPositive', () => {
  expect(isPositive(2)).toBe(true)
  expect(isPositive(-2)).toBe(false)
})

test('isNegative', () => {
  expect(isNegative(2)).toBe(false)
  expect(isNegative(-2)).toBe(true)
})

test('isPrime', () => {
  expect(isPrime(2)).toBe(true)
  expect(isPrime(4)).toBe(false)
})

test('isInteger', () => {
  expect(isInteger(2)).toBe(true)
  expect(isInteger(2.5)).toBe(false)
})

test('isFloat', () => {
  expect(isFloat(2.5)).toBe(true)
  expect(isFloat(2)).toBe(false)
})

test('isBetween', () => {
  expect(isBetween(4, 2, 6)).toBe(true)
  expect(isBetween(4, 6, 8)).toBe(false)
})

test('isDivisibleBy', () => {
  expect(isDivisibleBy(4, 2)).toBe(true)
  expect(isDivisibleBy(4, 3)).toBe(false)
})

test('isCreditCard', () => {
  expect(isCreditCard('4111111111111111')).toBe(true)
  expect(isCreditCard('hello')).toBe(false)
})

test('isIpAddress', () => {
  expect(isIpAddress('192.168.0.1')).toBe(true)
  expect(isIpAddress('192.168.0.1:3000')).toBe(true)
  expect(isIpAddress('00:00:00:00:00:00')).toBe(false)
  expect(isIpAddress('hello')).toBe(false)
})

test('isMacAddress', () => {
  expect(isMacAddress('00:00:00:00:00:00')).toBe(true)
  expect(isMacAddress('hello')).toBe(false)
})

test('isLatLng', () => {
  expect(isLatLng('12.345678,-98.765432')).toBe(true)
  expect(isLatLng('12.345678, -98.765432')).toBe(true)
  expect(isLatLng('98.765432,12.345678')).toBe(false)
  expect(isLatLng('hello')).toBe(false)
})

test('isLatitude', () => {
  expect(isLatitude('12.345678')).toBe(true)
  expect(isLatitude('hello')).toBe(false)
})

test('isLongitude', () => {
  expect(isLongitude('-98.765432')).toBe(true)
  expect(isLongitude('hello')).toBe(false)
})
