import { expect, test } from 'bun:test'
import { splitByWords, checkPasswordStrength, readingTime } from '../src/9.goodies'

test('splitByWords', () => {
  expect(splitByWords('Hello world')).toBe(
    '<span class="sentence sentence-1"><span class="word"><span class="word-1">Hello</span></span> <span class="word"><span class="word-2">world</span></span></span>'
  )
})

// test('checkPasswordStrength', () => {
//   expect(checkPasswordStrength('password', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must be at least 8 characters long' })
//   expect(checkPasswordStrength('password1', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must contain 1 uppercase letter' })
//   expect(checkPasswordStrength('Password', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must contain 1 number' })
//   expect(checkPasswordStrength('Password1', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must contain 1 special character' })
//   expect(checkPasswordStrength('Password1!', 8, 1, 1, 1)).toEqual({ score: 4, label: 'Very Strong' })
// })
