import { expect, test } from 'vitest'
import * as mod from './devices'

// Mock the navigator object
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'

test('isServerSide', () => {
  expect(mod.isServerSide()).toBe(true)
})

test('detectUserDevice', () => {
  expect(mod.detectUserDevice(userAgent)).toEqual({
    browser: 'unknown',
    device: 'Desktop',
    os: 'unknown'
  })
})

test('isAndroid', () => {
  expect(mod.isAndroid(userAgent)).toBe(false)
})

test('isMobile', () => {
  expect(mod.isMobile(userAgent)).toBe(false)
})

test('isDesktop', () => {
  expect(mod.isDesktop(userAgent)).toBe(true)
})