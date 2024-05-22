import { expect, test } from 'vitest'
import * as mod from './goodies'

test('splitByWords', () => {
  expect(mod.splitByWords('Hello world')).toBe(
    '<span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world</span></span>'
  )
})

test('checkPasswordStrength', () => {
  expect(mod.checkPasswordStrength('hello')).toEqual({ score: 1, label: 'Password must be at least 8 characters long' })
  expect(mod.checkPasswordStrength('hello1234')).toEqual({ score: 1, label: 'Password must contain 1 uppercase letter' })
  expect(mod.checkPasswordStrength('Hello1234')).toEqual({ score: 1, label: 'Password must contain 1 special character' })
  expect(mod.checkPasswordStrength('Hello!!!!')).toEqual({ score: 1, label: 'Password must contain 1 number' })
  expect(mod.checkPasswordStrength('Hello1234#')).toEqual({ score: 4, label: 'Very Strong' })
  expect(mod.checkPasswordStrength('Hello1234#', { length: 10 })).toEqual({ score: 4, label: 'Very Strong' })
  expect(mod.checkPasswordStrength('Hello1234#', { length: 10, uppercase: 1 })).toEqual({ score: 4, label: 'Very Strong' })
  expect(mod.checkPasswordStrength('Hell0#', { length: 5 })).toEqual({ score: 3, label: 'Strong' })
  expect(mod.checkPasswordStrength('Hello1234#', { length: 10, uppercase: 1, number: 1 })).toEqual({ score: 4, label: 'Very Strong' })
  expect(mod.checkPasswordStrength('Hello1234#', { length: 10, uppercase: 1, number: 1, special: 1 })).toEqual({ score: 4, label: 'Very Strong' })
})


test('mergeFields', () => {
  expect(mod.mergeFields('The {{a}} said {{b}}', { a: 'cat', b: 'meow' })).toEqual('The cat said meow')
  expect(mod.mergeFields('The {{ a }} said {{ b }}', { a: 'cat', b: 'meow' })).toEqual('The cat said meow')
  expect(mod.mergeFields('The {{ z }} said {{ t }}', { a: 'cat', b: 'meow' })).toEqual('The {{z}} said {{t}}')
})

test('readingTime', () => {
  expect(mod.readingTime('Hello world', 200)).toBe('1 minute')
})
