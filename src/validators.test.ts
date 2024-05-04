import { expect, test } from 'vitest'
import * as mod from './validators'

test('isEmail', () => {
  expect(mod.isEmail('hello@email.com')).toBe(true)
  expect(mod.isEmail('helloemail.com')).toBe(false)
})

test('isNumber', () => {
  expect(mod.isNumber(0)).toBe(true)
  expect(mod.isNumber(123)).toBe(true)
  expect(mod.isNumber('123')).toBe(false)
  expect(mod.isNumber('abc')).toBe(false)
})

test('isUrl', () => {
  expect(mod.isUrl('https://usemods.com')).toBe(true)
  expect(mod.isUrl('https://www.usemods.com')).toBe(true)
  expect(mod.isUrl('ftp://192.168.0.1')).toBe(true)
  expect(mod.isUrl('www.usemods')).toBe(false)
  expect(mod.isUrl('usemods.com')).toBe(false)
  expect(mod.isUrl('com.usemods')).toBe(false)
  expect(mod.isUrl('usemods')).toBe(false)
})

test('isUuid', () => {
  expect(mod.isUuid('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11')).toBe(true)
  expect(mod.isUuid('hello')).toBe(false)
})

test('isJson', () => {
  expect(mod.isJson('{"hello": "world"}')).toBe(true)
  expect(mod.isJson('{"hello": world}')).toBe(false)
  expect(mod.isJson('hello')).toBe(false)
})

test('isHex', () => {
  expect(mod.isHex('#ffffff')).toBe(true)
  expect(mod.isHex('#gggggg')).toBe(false)
})

test('isEmpty', () => {
  expect(mod.isEmpty('')).toBe(true)
  expect(mod.isEmpty([])).toBe(true)
  expect(mod.isEmpty({})).toBe(true)
  expect(mod.isEmpty(null)).toBe(true)
  expect(mod.isEmpty(undefined)).toBe(true)
  expect(mod.isEmpty('hello')).toBe(false)
  expect(mod.isEmpty([1])).toBe(false)
  expect(mod.isEmpty({ key: 'value' })).toBe(false)
})

test('isAlphabetic', () => {
  expect(mod.isAlphabetic('hello')).toBe(true)
  expect(mod.isAlphabetic('hello123')).toBe(false)
  expect(mod.isAlphabetic(123)).toBe(false)
  expect(mod.isAlphabetic(['a', 'b', 'c'])).toBe(false)
})

test('isAlphanumeric', () => {
  expect(mod.isAlphanumeric('hello')).toBe(true)
  expect(mod.isAlphanumeric(123)).toBe(true)
  expect(mod.isAlphanumeric('hello123')).toBe(true)
  expect(mod.isAlphanumeric('hello!')).toBe(false)
  expect(mod.isAlphanumeric(['a', 2, '!'])).toBe(false)
})

test('isArray', () => {
  expect(mod.isArray([])).toBe(true)
  expect(mod.isArray(['hello'])).toBe(true)
  expect(mod.isArray('hello')).toBe(false)
})

test('isObject', () => {
  expect(mod.isObject({ hello: 'world' })).toBe(true)
  expect(mod.isObject('hello')).toBe(false)
})

test('isBoolean', () => {
  expect(mod.isBoolean(true)).toBe(true)
  expect(mod.isBoolean(1)).toBe(false)
  expect(mod.isBoolean('hello')).toBe(false)
})

test('isDate', () => {
  expect(mod.isDate(new Date())).toBe(true)
  expect(mod.isDate('2024-01-01')).toBe(true)
  expect(mod.isDate('2024-01-day')).toBe(false)
  expect(mod.isDate('hello')).toBe(false)
})

test('isUndefined', () => {
  expect(mod.isUndefined(undefined)).toBe(true)
  expect(mod.isUndefined('hello')).toBe(false)
})

test('isNull', () => {
  expect(mod.isNull(null)).toBe(true)
  expect(mod.isNull('hello')).toBe(false)
})

test('isTime', () => {
  expect(mod.isTime('12:00')).toBe(true)
  expect(mod.isTime('hello')).toBe(false)
})

test('isLeapYear', () => {
  expect(mod.isLeapYear(2020)).toBe(true)
  expect(mod.isLeapYear(2021)).toBe(false)
})

test('isEven', () => {
  expect(mod.isEven(2)).toBe(true)
  expect(mod.isEven(3)).toBe(false)
})

test('isOdd', () => {
  expect(mod.isOdd(2)).toBe(false)
  expect(mod.isOdd(3)).toBe(true)
})

test('isPositive', () => {
  expect(mod.isPositive(2)).toBe(true)
  expect(mod.isPositive(-2)).toBe(false)
})

test('isNegative', () => {
  expect(mod.isNegative(2)).toBe(false)
  expect(mod.isNegative(-2)).toBe(true)
})

test('isPrime', () => {
  expect(mod.isPrime(2)).toBe(true)
  expect(mod.isPrime(4)).toBe(false)
})

test('isInteger', () => {
  expect(mod.isInteger(2)).toBe(true)
  expect(mod.isInteger(2.5)).toBe(false)
})

test('isFloat', () => {
  expect(mod.isFloat(2.5)).toBe(true)
  expect(mod.isFloat(2)).toBe(false)
})

test('isBetween', () => {
  expect(mod.isBetween(4, 2, 6)).toBe(true)
  expect(mod.isBetween(4, 6, 8)).toBe(false)
})

test('isDivisibleBy', () => {
  expect(mod.isDivisibleBy(4, 2)).toBe(true)
  expect(mod.isDivisibleBy(4, 3)).toBe(false)
})

test('isCreditCard', () => {
  expect(mod.isCreditCard('4111111111111111')).toBe(true)
  expect(mod.isCreditCard('hello')).toBe(false)
})

test('isIpAddress', () => {
  expect(mod.isIpAddress('192.168.0.1')).toBe(true)
  expect(mod.isIpAddress('192.168.0.1:3000')).toBe(true)
  expect(mod.isIpAddress('00:00:00:00:00:00')).toBe(false)
  expect(mod.isIpAddress('hello')).toBe(false)
})

test('isMacAddress', () => {
  expect(mod.isMacAddress('00:00:00:00:00:00')).toBe(true)
  expect(mod.isMacAddress('hello')).toBe(false)
})

test('isLatLng', () => {
  expect(mod.isLatLng('12.345678,-98.765432')).toBe(true)
  expect(mod.isLatLng('12.345678, -98.765432')).toBe(true)
  expect(mod.isLatLng('98.765432,12.345678')).toBe(false)
  expect(mod.isLatLng('hello')).toBe(false)
})

test('isLatitude', () => {
  expect(mod.isLatitude('12.345678')).toBe(true)
  expect(mod.isLatitude('hello')).toBe(false)
})

test('isLongitude', () => {
  expect(mod.isLongitude('-98.765432')).toBe(true)
  expect(mod.isLongitude('hello')).toBe(false)
})
