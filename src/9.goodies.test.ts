import { checkPasswordStrength } from '../src/9.goodies'

test('checkPasswordStrength - Very Weak', () => {
  const result = checkPasswordStrength('password', 8, 1, 1, 1)
  expect(result).toEqual({ score: 0, label: 'Very Weak' })
})

test('checkPasswordStrength - Weak', () => {
  const result = checkPasswordStrength('Password', 8, 1, 1, 1)
  expect(result).toEqual({ score: 1, label: 'Weak' })
})

test('checkPasswordStrength - Medium', () => {
  const result = checkPasswordStrength('Password1', 8, 1, 1, 1)
  expect(result).toEqual({ score: 2, label: 'Medium' })
})

test('checkPasswordStrength - Strong', () => {
  const result = checkPasswordStrength('Password1!', 8, 1, 1, 1)
  expect(result).toEqual({ score: 3, label: 'Strong' })
})

test('checkPasswordStrength - Very Strong', () => {
  const result = checkPasswordStrength('Password1!@', 8, 1, 1, 1)
  expect(result).toEqual({ score: 4, label: 'Very Strong' })
})

test('checkPasswordStrength - Password length too short', () => {
  const result = checkPasswordStrength('Pass1!', 10, 1, 1, 1)
  expect(result).toEqual({ score: 1, label: 'Password must be at least 10 characters long' })
})

test('checkPasswordStrength - Not enough uppercase letters', () => {
  const result = checkPasswordStrength('password1!', 8, 2, 1, 1)
  expect(result).toEqual({ score: 1, label: 'Password must contain 2 uppercase letter' })
})

test('checkPasswordStrength - Not enough numbers', () => {
  const result = checkPasswordStrength('Password!', 8, 1, 2, 1)
  expect(result).toEqual({ score: 1, label: 'Password must contain 2 number' })
})

test('checkPasswordStrength - Not enough special characters', () => {
  const result = checkPasswordStrength('Password1', 8, 1, 1, 2)
  expect(result).toEqual({ score: 1, label: 'Password must contain 2 special character' })
})