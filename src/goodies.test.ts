import { expect, test } from 'vitest'
import * as mod from './goodies'

test('splitByWords', () => {
  expect(mod.splitByWords('Hello world')).toBe(
    '<span class="sentence sentence-1"><span class="word"><span class="word-1">Hello</span></span> <span class="word"><span class="word-2">world</span></span></span>'
  )
})


test('mergeFields', () => {
  expect(mod.mergeFields('The {{a}} said {{b}}', { a: 'cat', b: 'meow' })).toEqual('The cat said meow')
  expect(mod.mergeFields('The {{ a }} said {{ b }}', { a: 'cat', b: 'meow' })).toEqual('The cat said meow')
})
