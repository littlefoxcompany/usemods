import { expect, test } from 'vitest'
import * as mod from './goodies'

test('splitByWords', () => {
  expect(mod.splitByWords('Hello world')).toBe(
    '<span class="sentence sentence-1"><span class="word"><span class="word-1">Hello</span></span> <span class="word"><span class="word-2">world</span></span></span>'
  )
})

// test('checkPasswordStrength', () => {
//   expect(mod.checkPasswordStrength('password', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must be at least 8 characters long' })
//   expect(mod.checkPasswordStrength('password1', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must contain 1 uppercase letter' })
//   expect(mod.checkPasswordStrength('Password', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must contain 1 number' })
//   expect(mod.checkPasswordStrength('Password1', 8, 1, 1, 1)).toEqual({ score: 1, label: 'Password must contain 1 special character' })
//   expect(mod.checkPasswordStrength('Password1!', 8, 1, 1, 1)).toEqual({ score: 4, label: 'Very Strong' })
// })
