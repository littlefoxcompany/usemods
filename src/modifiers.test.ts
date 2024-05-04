import { expect, test } from 'vitest'
import * as mod from './modifiers'

test('stripHtml', () => {
  expect(mod.stripHtml('<p>Hello world</p>')).toBe('Hello world')
})

test('escapeHtml', () => {
  expect(mod.escapeHtml('<p>Hello world</p>')).toBe('&lt;p&gt;Hello world&lt;/p&gt;')
})

test('unescapeHtml', () => {
  expect(mod.unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')).toBe('<p>Hello World</p>')
})

test('stripEmojis', () => {
  expect(mod.stripEmojis('Hello 😃')).toBe('Hello ')
})

test('stripWhitespace', () => {
  expect(mod.stripWhitespace('Hello world')).toBe('Helloworld')
})

test('stripNumbers', () => {
  expect(mod.stripNumbers('Hello world 123')).toBe('Hello world ')
})

test('stripSymbols', () => {
  expect(mod.stripSymbols('Hello world!')).toBe('Hello world')
  expect(mod.stripSymbols('Hello world!@£$%^&*()')).toBe('Hello world')
})

test('stripPunctuation', () => {
  expect(mod.stripPunctuation('Hello world!')).toBe('Hello world')
})

test('slugify', () => {
  expect(mod.slugify('Hello world')).toBe('hello-world')
})

test('deslugify', () => {
  expect(mod.deslugify('hello-world')).toBe('hello world')
})

test('ordinalize', () => {
  expect(mod.ordinalize(1)).toBe('1st')
  expect(mod.ordinalize(2)).toBe('2nd')
  expect(mod.ordinalize(3)).toBe('3rd')
  expect(mod.ordinalize(4)).toBe('4th')
  expect(mod.ordinalize(11)).toBe('11th')
  expect(mod.ordinalize(12)).toBe('12th')
  expect(mod.ordinalize(13)).toBe('13th')
  expect(mod.ordinalize(14)).toBe('14th')
  expect(mod.ordinalize(21)).toBe('21st')
  expect(mod.ordinalize(22)).toBe('22nd')
  expect(mod.ordinalize(23)).toBe('23rd')
  expect(mod.ordinalize(24)).toBe('24th')
  expect(mod.ordinalize(101)).toBe('101st')
  expect(mod.ordinalize(102)).toBe('102nd')
  expect(mod.ordinalize(103)).toBe('103rd')
  expect(mod.ordinalize(104)).toBe('104th')
})

// test('title', () => {
//   expect(mod.title('A new welcome for my brand new test for titles in javascript!')).toBe('A New Welcome for My Brand New Test for Titles in Javascript!')
// })

// test('truncate', () => {
//   expect(mod.truncate('Hello world this is me', 4)).toBe('Hell...')
// })

// test('truncateWords', () => {
//   expect(mod.truncateWords('Hello world and moon', 2)).toBe('Hello world...')
// })

// test('countWords', () => {
//   expect(mod.countWords('Hello world and moon')).toBe(4)
// })

// test('countCharacters', () => {
//   expect(mod.countCharacters('Hello world and moon')).toBe(20)
// })

// test('countLines', () => {
//   expect(mod.countLines('Hello world and moon')).toBe(1)
//   expect(mod.countLines('Hello world and moon\nHello world and moon')).toBe(2)
// })

test('startWith', () => {
  expect(mod.startWith('helloworld.com', 'www.')).toBe('www.helloworld.com')
  expect(mod.startWith('www.helloworld.com', 'www.')).toBe('www.helloworld.com')
})

test('endWith', () => {
  expect(mod.endWith('www.helloworld', '.com')).toBe('www.helloworld.com')
  expect(mod.endWith('www.helloworld.com', '.com')).toBe('www.helloworld.com')
})

test('surroundWith', () => {
  expect(mod.surroundWith('helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('www.helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('www.helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
})

// test('group', () => {
//   const items = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Jake', age: 25 }
//   ]

//   expect(mod.group(items, 'age')).toStrictEqual({
//     25: [
//       { name: 'John', age: 25 },
//       { name: 'Jake', age: 25 }
//     ],
//     30: [{ name: 'Jane', age: 30 }]
//   })

//   expect(mod.group(items, 'name')).toStrictEqual({
//     John: [{ name: 'John', age: 25 }],
//     Jane: [{ name: 'Jane', age: 30 }],
//     Jake: [{ name: 'Jake', age: 25 }]
//   })
// })

// test('groupBy', () => {
//   const chunk = ['a', 'b', 'c', 'd', 'e', 'f']
//   expect(mod.groupBy(chunk, 2)).toStrictEqual([
//     ['a', 'b'],
//     ['c', 'd'],
//     ['e', 'f']
//   ])
//   expect(mod.groupBy(chunk, 3)).toStrictEqual([
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f']
//   ])
//   expect(mod.groupBy(chunk, 4)).toStrictEqual([
//     ['a', 'b', 'c', 'd'],
//     ['e', 'f']
//   ])
//   expect(mod.groupBy(chunk, 5)).toStrictEqual([['a', 'b', 'c', 'd', 'e'], ['f']])
//   expect(mod.groupBy(chunk, 6)).toStrictEqual([chunk])
// })

// test('flatten', () => {
//   expect(mod.flatten([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, 3, 4, 5])
// })

// test('without', () => {
//   expect(mod.without([1, 2, 3, 4, 5], [2, 4])).toStrictEqual([1, 3, 5])
// })

// test('combine', () => {
//   expect(mod.combine([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 2, 3, 2, 3, 4])
//   expect(mod.combine([1, 2, 3], [2, 3, 4], [3, 4, 5])).toStrictEqual([1, 2, 3, 2, 3, 4, 3, 4, 5])
// })

// test('combineUnique', () => {
//   expect(mod.combineUnique([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 2, 3, 4])
//   expect(mod.combineUnique([1, 2, 3], [2, 3, 4], [3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
// })

// test('combineWithout', () => {
//   expect(mod.combineWithout('id', { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' })).toStrictEqual([1, 2, 3])
//   expect(mod.combineWithout('name', { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' })).toStrictEqual(['A', 'B', 'C'])
// })

// test('reverse', () => {
//   expect(mod.reverse([1, 2, 3])).toStrictEqual([3, 2, 1])
// })

// test.skip('difference', () => {
//   expect(mod.difference(['one', 'two', 'three'], ['one', 'two'])).toStrictEqual(['three'])
//   expect(mod.difference([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 4])
//   expect(mod.difference([1, 2, 3], [2, 3, 4], [3, 4, 5])).toStrictEqual([1, 5])
// })
