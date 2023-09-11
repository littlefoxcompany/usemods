// @vitest-environment nuxt
import { expect, test } from 'vitest'

test('widont', () => {
  expect(widont('Hello world')).toBe('Hello&nbsp;world')
})

test('stripHtml', () => {
  expect(stripHtml('<p>Hello world</p>')).toBe('Hello world')
})

test('escapeHtml', () => {
  expect(escapeHtml('<p>Hello world</p>')).toBe('&lt;p&gt;Hello world&lt;/p&gt;')
})

// test('showHtml', () => {
//   expect(showHtml('&lt;p&gt;Hello World&lt;/p&gt;').toBe('<p>Hello world</p>')
// })

test('stripTags', () => {
  expect(stripTags('<p><strong>Hello</strong></p>')).toBe('Hello')
})

test('stripEmojis', () => {
  expect(stripEmojis('Hello 😃')).toBe('Hello ')
})

test('stripWhitespace', () => {
  expect(stripWhitespace('Hello world')).toBe('Helloworld')
})

test('stripNumbers', () => {
  expect(stripNumbers('Hello world 123')).toBe('Hello world ')
})

test('stripSymbols', () => {
  expect(stripSymbols('Hello world!')).toBe('Hello world')
  expect(stripSymbols('Hello world!@£$%^&*()')).toBe('Hello world')
})

test('stripPunctuation', () => {
  expect(stripPunctuation('Hello world!')).toBe('Hello world')
})

test('humanize', () => {
  expect(humanize('hello_world')).toBe('Hello world')
})

test('slugify', () => {
  expect(slugify('Hello world')).toBe('hello-world')
})

test('deslugify', () => {
  expect(deslugify('hello-world')).toBe('hello world')
})

test('ordinalize', () => {
  expect(ordinalize(1)).toBe('1st')
  expect(ordinalize(2)).toBe('2nd')
  expect(ordinalize(3)).toBe('3rd')
  expect(ordinalize(4)).toBe('4th')
  expect(ordinalize(11)).toBe('11th')
  expect(ordinalize(12)).toBe('12th')
  expect(ordinalize(13)).toBe('13th')
  expect(ordinalize(14)).toBe('14th')
  expect(ordinalize(21)).toBe('21st')
  expect(ordinalize(22)).toBe('22nd')
  expect(ordinalize(23)).toBe('23rd')
  expect(ordinalize(24)).toBe('24th')
  expect(ordinalize(101)).toBe('101st')
  expect(ordinalize(102)).toBe('102nd')
  expect(ordinalize(103)).toBe('103rd')
  expect(ordinalize(104)).toBe('104th')
})

test('splitByWords', () => {
  expect(splitByWords('Hello world. How are you?')).toBe(
    `<span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>`
  )
})

test('title', () => {
  expect(title('A new welcome for my brand new test for titles in javascript!')).toBe('A New Welcome for My Brand New Test for Titles in Javascript!')
})

test('truncate', () => {
  expect(truncate('Hello world this is me', 4)).toBe('Hell...')
})

test('truncateWords', () => {
  expect(truncateWords('Hello world and moon', 2)).toBe('Hello world...')
})

test('countWords', () => {
  expect(countWords('Hello world and moon')).toBe(4)
})

test('countCharacters', () => {
  expect(countCharacters('Hello world and moon')).toBe(20)
})

test('countLines', () => {
  expect(countLines('Hello world and moon')).toBe(1)
  expect(countLines('Hello world and moon\nHello world and moon')).toBe(2)
})

test('li', () => {
  expect(li(['Hello', 'World'])).toStrictEqual(['<li>Hello</li>', '<li>World</li>'])
})

test('ol', () => {
  expect(ol(['Hello', 'World'])).toBe('<ol><li>Hello</li><li>World</li></ol>')
})

test('ul', () => {
  expect(ul(['Hello', 'World'])).toBe('<ul><li>Hello</li><li>World</li></ul>')
})

test('commaList', () => {
  expect(commaList(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'])).toBe('Apple, Oranges, Grapes, Bread and Milk')
  expect(commaList(['Apple', 'Oranges', 'Grapes', 'Bread'], 'or')).toBe('Apple, Oranges, Grapes or Bread')
})

test('truncateList', () => {
  expect(truncateList(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'], 3)).toBe('Apple, Oranges, Grapes and 2 more')
  expect(truncateList(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'], 3, 'or')).toBe('Apple, Oranges, Grapes or 2 more')
})

test('shuffle', () => {
  expect(shuffle(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'])).not.toBe(['Apple', 'Oranges', 'Grapes', 'Bread', 'Milk'])
})

test('unique', () => {
  expect(unique(['a', 'b', 'a', 'c', 'c'])).toStrictEqual(['a', 'b', 'c'])
  expect(unique([{ id: 1 }, { id: 2 }, { id: 1 }], 'id')).toStrictEqual([{ id: 1 }, { id: 2 }])
  expect(unique([], 'id')).toStrictEqual([])
})

test('first', () => {
  expect(first(['a', 'b', 'c'])).toBe('a')
  expect(first([])).toBe(undefined)
})

test('last', () => {
  expect(last(['a', 'b', 'c'])).toBe('c')
  expect(last([])).toBe(undefined)
})

test('nth', () => {
  expect(nth(['a', 'b', 'c'], 1)).toBe('b')
  expect(nth(['a', 'b', 'c'], 2)).toBe('c')
  expect(nth(['a', 'b', 'c'], 3)).toBe(undefined)
})

test('startsWith', () => {
  expect(startsWith('helloworld.com', 'www.')).toBe('www.helloworld.com')
  expect(startsWith('www.helloworld.com', 'www.')).toBe('www.helloworld.com')
})

test('endsWith', () => {
  expect(endsWith('www.helloworld', '.com')).toBe('www.helloworld.com')
  expect(endsWith('www.helloworld.com', '.com')).toBe('www.helloworld.com')
})

test('surround', () => {
  expect(surround('helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(surround('helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
  expect(surround('www.helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(surround('www.helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
})

test('group', () => {
  const items = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jake', age: 25 }
  ]

  expect(group(items, 'age')).toStrictEqual({
    25: [
      { name: 'John', age: 25 },
      { name: 'Jake', age: 25 }
    ],
    30: [{ name: 'Jane', age: 30 }]
  })

  expect(group(items, 'name')).toStrictEqual({
    John: [{ name: 'John', age: 25 }],
    Jane: [{ name: 'Jane', age: 30 }],
    Jake: [{ name: 'Jake', age: 25 }]
  })
})

test('groupBy', () => {
  const chunk = ['a', 'b', 'c', 'd', 'e', 'f']
  expect(groupBy(chunk, 2)).toStrictEqual([
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f']
  ])
  expect(groupBy(chunk, 3)).toStrictEqual([
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
  ])
  expect(groupBy(chunk, 4)).toStrictEqual([
    ['a', 'b', 'c', 'd'],
    ['e', 'f']
  ])
  expect(groupBy(chunk, 5)).toStrictEqual([['a', 'b', 'c', 'd', 'e'], ['f']])
  expect(groupBy(chunk, 6)).toStrictEqual([chunk])
})

test('flatten', () => {
  expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, 3, 4, 5])
})

test('without', () => {
  expect(without([1, 2, 3, 4, 5], [2, 4])).toStrictEqual([1, 3, 5])
})

test('combine', () => {
  expect(combine([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 2, 3, 4])
})

test('reverse', () => {
  expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1])
})

test('sortBy', () => {
  const items = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jake', age: 20 }
  ]

  expect(sortBy(items, 'age')).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ])

  expect(sortBy(items, 'name')).toStrictEqual([
    { name: 'Jake', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 }
  ])
})
