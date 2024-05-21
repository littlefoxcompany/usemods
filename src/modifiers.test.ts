import { expect, test } from 'vitest'
import * as mod from './modifiers'

test('startWith', () => {
  expect(mod.startWith('helloworld.com', 'www.')).toBe('www.helloworld.com')
  expect(mod.startWith('www.helloworld.com', 'www.')).toBe('www.helloworld.com')
})

test('startWithout', () => {
  expect(mod.startWithout('www.helloworld.com', 'www.')).toBe('helloworld.com')
  expect(mod.startWithout('helloworld.com', 'www.')).toBe('helloworld.com')
})

test('endWith', () => {
  expect(mod.endWith('www.helloworld', '.com')).toBe('www.helloworld.com')
  expect(mod.endWith('www.helloworld.com', '.com')).toBe('www.helloworld.com')
})

test('endWithout', () => {
  expect(mod.endWithout('www.helloworld.com', '.com')).toBe('www.helloworld')
  expect(mod.endWithout('helloworld.com', '.com')).toBe('helloworld')
})

test('surroundWith', () => {
  expect(mod.surroundWith('helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('www.helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('www.helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
})

test('pluralize', () => {
  expect(mod.pluralize('sheep', 0)).toBe('sheep')
  expect(mod.pluralize('sheep', 1)).toBe('sheep')
  expect(mod.pluralize('sheep', 2)).toBe('sheep')
  // Geez I'm getting sleepy
  expect(mod.pluralize('apple', 0)).toBe('apples')
  expect(mod.pluralize('apple', 2)).toBe('apples')
  expect(mod.pluralize('box', 2)).toBe('boxes')
  expect(mod.pluralize('bus', 2)).toBe('buses')
  expect(mod.pluralize('child', 2)).toBe('children')
  expect(mod.pluralize('goose', 2)).toBe('geese')
  expect(mod.pluralize('leaf', 2)).toBe('leaves')
  expect(mod.pluralize('knife', 2)).toBe('knives')
  expect(mod.pluralize('city', 2)).toBe('cities')
  expect(mod.pluralize('bus', 2)).toBe('buses')
  expect(mod.pluralize('kiss', 2)).toBe('kisses')
  expect(mod.pluralize('box', 2)).toBe('boxes')
  expect(mod.pluralize('church', 2)).toBe('churches')
  expect(mod.pluralize('brush', 2)).toBe('brushes')
  expect(mod.pluralize('dress', 2)).toBe('dresses')
})

test('singularize', () => {
  expect(mod.singularize('sheep')).toBe('sheep')
  expect(mod.singularize('apples')).toBe('apple')
  expect(mod.singularize('boxes')).toBe('box')
  expect(mod.singularize('buses')).toBe('bus')
  expect(mod.singularize('children')).toBe('child')
  expect(mod.singularize('geese')).toBe('goose')
  expect(mod.singularize('leaves')).toBe('leaf')
  expect(mod.singularize('knives')).toBe('knife')
  expect(mod.singularize('cities')).toBe('city')
  expect(mod.singularize('buses')).toBe('bus')
  expect(mod.singularize('kisses')).toBe('kiss')
  expect(mod.singularize('boxes')).toBe('box')
  expect(mod.singularize('churches')).toBe('church')
  expect(mod.singularize('brushes')).toBe('brush')
  expect(mod.singularize('dresses')).toBe('dress')
})

test('stripHtml', () => {
  expect(mod.stripHtml('<p>Hello world</p>')).toBe('Hello world')
  expect(mod.stripHtml('<script>Hello world</script>')).toBe('Hello world')
})

test('escapeHtml', () => {
  expect(mod.escapeHtml('<p>Hello world</p>')).toBe('&lt;p&gt;Hello world&lt;/p&gt;')
})

test('unescapeHtml', () => {
  expect(mod.unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')).toBe('<p>Hello World</p>')
})

test('stripEmojis', () => {
  expect(mod.stripEmojis('Hello 😃')).toBe('Hello ')
  expect(mod.stripEmojis('Hello 😃👍')).toBe('Hello ')
  expect(mod.stripEmojis('Hello 😃👍🏻')).toBe('Hello ')
  expect(mod.stripEmojis('Hello 🎉')).toBe('Hello ')
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
  expect(mod.stripPunctuation('Hello, world!')).toBe('Hello world')
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
