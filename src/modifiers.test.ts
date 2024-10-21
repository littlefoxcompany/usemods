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
  expect(mod.endWithout('filename.txt', '.txt')).toBe('filename')
  expect(mod.endWithout('filename.txt', '.jpg')).toBe('filename.txt')
  expect(mod.endWithout('', '.txt')).toBe('')
  expect(mod.endWithout('filename.txt', '')).toBe('filename.txt')
  expect(mod.endWithout('.txt', '.txt')).toBe('')
})

test('surroundWith', () => {
  expect(mod.surroundWith('helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('www.helloworld', 'www.', '.com')).toBe('www.helloworld.com')
  expect(mod.surroundWith('www.helloworld.com', 'www.', '.com')).toBe('www.helloworld.com')
})

test('pluralize', () => {
  expect(mod.pluralize('cat', 2)).toBe('cats')
  expect(mod.pluralize('dog', 1)).toBe('dog')
  expect(mod.pluralize('bus', 2)).toBe('buses')
  expect(mod.pluralize('box', 2)).toBe('boxes')
  expect(mod.pluralize('church', 2)).toBe('churches')
  expect(mod.pluralize('baby', 2)).toBe('babies')
  expect(mod.pluralize('leaf', 2)).toBe('leaves')
  expect(mod.pluralize('life', 2)).toBe('lives')
  expect(mod.pluralize('potato', 2)).toBe('potatoes')
  expect(mod.pluralize('cactus', 2)).toBe('cacti')
  // unchanging plural
  expect(mod.pluralize('sheep', 0)).toBe('sheep')
  expect(mod.pluralize('sheep', 1)).toBe('sheep')
  expect(mod.pluralize('sheep', 2)).toBe('sheep')
  // irregular plural
  expect(mod.pluralize('child', 2)).toBe('children')
})

test('singularize', () => {
  expect(mod.singularize('sheep')).toBe('sheep')
  expect(mod.singularize('apples')).toBe('apple')
  expect(mod.singularize('apple')).toBe('apple')
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
  expect(mod.stripHtml('<b>Hello world</script>')).toBe('Hello world');
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
  expect(mod.ordinalize(104)).toBe('104th')
})

test('camelCase', () => {
  expect(mod.camelCase('')).toBe('')
  expect(mod.camelCase('Hello world')).toBe('helloWorld')
  expect(mod.camelCase('Hello world!  This is a test.  ')).toBe('helloWorldThisIsATest')
})

test('pascalCase', () => {
  expect(mod.pascalCase('')).toBe('')
  expect(mod.pascalCase('Hello world')).toBe('HelloWorld')
  expect(mod.pascalCase('Hello world!  This is a test.  ')).toBe('HelloWorldThisIsATest')
})

test('snakeCase', () => {
  expect(mod.snakeCase('')).toBe('')
  expect(mod.snakeCase('Hello world')).toBe('hello_world')
  expect(mod.snakeCase('Hello world!  This is a test.  ')).toBe('hello_world_this_is_a_test')
})

test('kebabCase', () => {
  expect(mod.kebabCase('')).toBe('')
  expect(mod.kebabCase('Hello world')).toBe('hello-world')
  expect(mod.kebabCase('Hello world!  This is a test.  ')).toBe('hello-world-this-is-a-test')
})

test('titleCase', () => {
  expect(mod.titleCase('hello world')).toBe('Hello World')
})

