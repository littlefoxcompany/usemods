import { expect, test } from 'bun:test'
import {
  escapeHtml,
  unescapeHtml,
  stripHtml,
  stripEmojis,
  stripSymbols,
  stripWhitespace,
  stripNumbers,
  stripPunctuation,
  ordinalize,
  deslugify,
  slugify,
  startWith,
  endWith,
  camelCase,
  kebabCase,
  snakeCase,
  endWithout,
  pascalCase,
  pluralize,
  singularize,
  startWithout,
  surroundWith,
  titleCase
} from '../src/3.modifiers'

test('stripHtml', () => {
  expect(stripHtml('<p>Hello world</p>')).toBe('Hello world')
})

test('escapeHtml', () => {
  expect(escapeHtml('<p>Hello world</p>')).toBe('&lt;p&gt;Hello world&lt;/p&gt;')
})

test('unescapeHtml', () => {
  expect(unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')).toBe('<p>Hello World</p>')
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

// test('title', () => {
//   expect(title('A new welcome for my brand new test for titles in javascript!')).toBe('A New Welcome for My Brand New Test for Titles in Javascript!')
// })

// test('truncate', () => {
//   expect(truncate('Hello world this is me', 4)).toBe('Hell...')
// })

// test('truncateWords', () => {
//   expect(truncateWords('Hello world and moon', 2)).toBe('Hello world...')
// })

// test('countWords', () => {
//   expect(countWords('Hello world and moon')).toBe(4)
// })

// test('countCharacters', () => {
//   expect(countCharacters('Hello world and moon')).toBe(20)
// })

// test('countLines', () => {
//   expect(countLines('Hello world and moon')).toBe(1)
//   expect(countLines('Hello world and moon\nHello world and moon')).toBe(2)
// })

test('startWith', () => {
  expect(startWith('helloworld.com', 'www.')).toBe('www.helloworld.com')
  expect(startWith('www.helloworld.com', 'www.')).toBe('www.helloworld.com')
})

test('endWith', () => {
  expect(endWith('www.helloworld', '.com')).toBe('www.helloworld.com')
  expect(endWith('www.helloworld.com', '.com')).toBe('www.helloworld.com')
})

test('surroundWith', () => {
  expect(surroundWith('helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(surroundWith('helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
  expect(surroundWith('www.helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(surroundWith('www.helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
})

// test('group', () => {
//   const items = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Jake', age: 25 }
//   ]

//   expect(group(items, 'age')).toStrictEqual({
//     25: [
//       { name: 'John', age: 25 },
//       { name: 'Jake', age: 25 }
//     ],
//     30: [{ name: 'Jane', age: 30 }]
//   })

//   expect(group(items, 'name')).toStrictEqual({
//     John: [{ name: 'John', age: 25 }],
//     Jane: [{ name: 'Jane', age: 30 }],
//     Jake: [{ name: 'Jake', age: 25 }]
//   })
// })

// test('groupBy', () => {
//   const chunk = ['a', 'b', 'c', 'd', 'e', 'f']
//   expect(groupBy(chunk, 2)).toStrictEqual([
//     ['a', 'b'],
//     ['c', 'd'],
//     ['e', 'f']
//   ])
//   expect(groupBy(chunk, 3)).toStrictEqual([
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f']
//   ])
//   expect(groupBy(chunk, 4)).toStrictEqual([
//     ['a', 'b', 'c', 'd'],
//     ['e', 'f']
//   ])
//   expect(groupBy(chunk, 5)).toStrictEqual([['a', 'b', 'c', 'd', 'e'], ['f']])
//   expect(groupBy(chunk, 6)).toStrictEqual([chunk])
// })

// test('flatten', () => {
//   expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([1, 2, 3, 4, 5])
// })

// test('without', () => {
//   expect(without([1, 2, 3, 4, 5], [2, 4])).toStrictEqual([1, 3, 5])
// })

// test('combine', () => {
//   expect(combine([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 2, 3, 2, 3, 4])
//   expect(combine([1, 2, 3], [2, 3, 4], [3, 4, 5])).toStrictEqual([1, 2, 3, 2, 3, 4, 3, 4, 5])
// })

// test('combineUnique', () => {
//   expect(combineUnique([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 2, 3, 4])
//   expect(combineUnique([1, 2, 3], [2, 3, 4], [3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
// })

// test('combineWithout', () => {
//   expect(combineWithout('id', { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' })).toStrictEqual([1, 2, 3])
//   expect(combineWithout('name', { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' })).toStrictEqual(['A', 'B', 'C'])
// })

// test('reverse', () => {
//   expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1])
// })

// test.skip('difference', () => {
//   expect(difference(['one', 'two', 'three'], ['one', 'two'])).toStrictEqual(['three'])
//   expect(difference([1, 2, 3], [2, 3, 4])).toStrictEqual([1, 4])
//   expect(difference([1, 2, 3], [2, 3, 4], [3, 4, 5])).toStrictEqual([1, 5])
// })
