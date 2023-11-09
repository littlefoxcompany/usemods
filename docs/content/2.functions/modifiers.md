# Modifiers

#### Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

## widont
Adds a space between the last two words in a string.

```js [js]
widont('Cool cool cool')
```

```html [template]
{{ widont('Cool cool cool') }}
```

```html [returns]
cool cool&nbsp;cool
```

## stripHtml
Strip HTML tags from a string.

```js [js]
stripHtml('<p>Hello World</p>')
```

```html [template]
{{ stripHtml('<p>Hello World</p>') }}
```

```html [returns]
Hello World
```

## escapeHtml
Escape HTML entities in a string.

```js [js]
escapeHtml('<p>Hello World</p>')
```

```html [template]
{{ escapeHtml('<p>Hello World</p>') }}
```

```html [returns]
&lt;p&gt;Hello World&lt;/p&gt;
```

## showHtml
Unescape HTML entities in a string.

```js [js]
unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
```

```html [template]
{{ unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;') }}
```

```html [returns]
<p>Hello World</p>
```

## stripTags
Strip HTML tags from a string.

```js [js]
stripTags('<p>Hello World</p>')
```

```html [template]
{{ stripTags('<p>Hello World</p>') }}
```

```html [returns]
Hello World
```

## slugify
Converts a string to-a-slug.

```js [js]
slugify('Hello World')
```

```html [template]
{{ slugify('Hello World') }}
```

```html [returns]
hello-world
```

## deslugify
Converts a slug to a string.

```js [js]
deslugify('hello-world')
```

```html [template]
{{ deslugify('hello-world') }}
```

```html [returns]
hello world
```

## truncate
Truncates a string to a specified length of characters.

```js [js]
truncate('Hello World', 5)
```

```html [template]
{{ truncate('Hello World', 5) }}
```

```html [returns]
Hello...
```

## truncateWords
Truncates a string by a number of words

```js [js]
truncateWords('Hello World', 1)
```

```html [template]
{{ truncateWords('Hello World', 1) }}
```

```html [returns]
Hello...
```

## countWords
Counts the number of words in a string.

```js [js]
countWords('Hello World')
```

```html [template]
{{ countWords('Hello World') }}
```

```html [returns]
2
```

## countCharacters
Counts the number of characters in a string.

```js [js]
countCharacters('Hello World')
```

```html [template]
{{ countCharacters('Hello World') }}
```

```html [returns]
11
```

## countLines
Counts the number of lines in a string.

```js [js]
countLines('Hello World')
```

```html [template]
{{ countLines('Hello World') }}
```

```html [returns]
1
```

## stripWhitespace
Strips whitespace from a string.

```js [js]
stripWhitespace('Hello World')
```

```html [template]
{{ stripWhitespace('Hello World') }}
```

```html [returns]
HelloWorld
```

## stripNumbers
Strips numbers from a string.

```js [js]
stripNumbers('Hello World 123')
```

```html [template]
{{ stripNumbers('Hello World 123') }}
```

```html [returns]
Hello World
```

## stripPunctuation
Strips punctuation from a string.

```js [js]
stripPunctuation('Hello World!')
```

```html [template]
{{ stripPunctuation('Hello World!') }}
```

```html [returns]
Hello World
```

## stripSymbols
Strips symbols from a string.

```js [js]
stripSymbols('Hello World!')
```

```html [template]
{{ stripSymbols('Hello World!') }}
```

```html [returns]
Hello World
```

## stripEmojis
Strips emojis from a string (requires ES6 Unicode support) 🦊.

```js [js]
stripEmojis('Hello World! 🦊')
```

```html [template]
{{ stripEmojis('Hello World! 🦊') }}
```

```html [returns]
Hello World!
```

## readingTime
Returns the reading time of a string in Hours, Minutes, and Seconds.

```js [js]
readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
```

```html [template]
{{ readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.') }}
```

```html [returns]
1 minute
```

## pluralize
Adds plurals to a string.

```js [js]
pluralize('scooter', 10)
```

```html [template]
{{ pluralize('scooter', 10) }}
```

```html [returns]
scooters
```

## singularize
Removes plurals from a string.

```js [js]
singularize('scooters')
```

```html [template]
{{ singularize('scooters') }}
```

```html [returns]
scooter
```

## ordinalize
Converts a number to a string with ordinal suffix.

```js [js]
ordinalize(1)
```

```html [template]
{{ ordinalize(1) }}
```

```html [returns]
1st
```

## humanize
Replaces underscores with spaces and capitalizes the first letter of each word.

```js [js]
humanize('hello_world')
```

```html [template]
{{ humanize('hello_world') }}
```

```html [returns]
Hello World
```

## camelCase
Removes spaces and capitalizes the first letter of each word except for the first word.

```js [js]
camelCase('hello world')
```

```html [template]
{{ camelCase('hello world') }}
```

```html [returns]
helloWorld
```

## pascalCase
Removes spaces and capitalizes the first letter of each word.

```js [js]
pascalCase('hello world')
```

```html [template]
{{ pascalCase('hello world') }}
```

```html [returns]
HelloWorld
```

## snakeCase
Replaces spaces with underscores and converts to lowercase.

```js [js]
snakeCase('hello world')
```

```html [template]
{{ snakeCase('hello world') }}
```

```html [returns]
hello_world
```

## kebabCase
Replaces spaces with hyphens and converts to lowercase.

```js [js]
titleize('Hello World')
```

```html [template]
{{ titleize('Hello World') }}
```

```html [returns]
hello-world
```

## titleCase
Converts to title case by capitalizing the first letter of each word.

```js [js]
titleCase('hello world')
```

```html [template]
{{ titleCase('hello world') }}
```

```html [returns]
Hello World
```

## sentenceCase
Converts to sentence case by capitalizing the first letter of the first word.

```js [js]
sentenceCase('hello world')
```

```html [template]
{{ sentenceCase('hello world') }}
```

```html [returns]
Hello world
```

## startsWith
Adds a prefix to a string if it doesn't already start with the prefix.

```js [js]
startsWith('usemods.com', 'https://')
```

```html [template]
{{ startsWith('usemods.com', 'https://') }}
```

```html [returns]
https://usemods.com
```

## startsWithout
Removes a prefix from a string if it starts with the prefix.

```js [js]
startsWithout('https://usemods.com', 'https://')
```

```html [template]
{{ startsWithout('https://usemods.com', 'https://') }}
```

```html [returns]
usemods.com
```

## endsWith
Adds a suffix to a string if it doesn't already end with the suffix.

```js [js]
endsWith('https://usemods', '.com')
```

```html [template]
{{ endsWith('https://usemods', '.com') }}
```

```html [returns]
https://usemods.com
```

## endsWithout
Removes a suffix from a string if it ends with the suffix.

```js [js]
endsWithout('https://usemods.com.au', '.au')
```

```html [template]
{{ endsWithout('https://usemods.com.au', '.au') }}
```

```html [returns]
https://usemods.com
```

## surround
Adds a prefix and suffix to a string if it doesn't already start and end with them.

```js [js]
surround('https://', 'usemods', '.com')
```

```html [template]
{{ surround('https://', 'usemods', '.com') }}
```

```html [returns]
https://usemods.com
```

## title
Converts a string to title case following the Chicago Manual of Style rules.

```js [js]
title('the quick brown fox jumps over the lazy dog')
```

```html [template]
{{ title('the quick brown fox jumps over the lazy dog') }}
```

```html [returns]
The Quick Brown Fox Jumps over the Lazy Dog
```

## splitByWords
Wraps each word in a string with a span tag.

```js [js]
splitByWords('Hello World. How are you?')
```

```html [template]
{{ splitByWords('Hello World. How are you?') }}
```

```html [returns]
<span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>
```

## list
Creates an array of list items (`<li>`) from an array of strings.

```js [js]
list(['one', 'two', 'three'])
```

```html [template]
{{ list(['one', 'two', 'three']) }}
```

```html [returns]
<ul><li>one</li><li>two</li><li>three</li></ul>
```

## commaList
Create a string of comma-separated values from an array of strings with an optional conjunction.

```js [js]
commaList(['one', 'two', 'three'])
```

```html [template]
{{ commaList(['one', 'two', 'three']) }}
```

```html [returns]
one, two and three
```

## truncateList
Create a string of comma-separated values with a limit and an optional conjunction.

```js [js]
truncateList(['one', 'two', 'three', 'four', 'five'], 3)
```

```html [template]
{{ truncateList(['one', 'two', 'three', 'four', 'five'], 3) }}
```

```html [returns]
one, two, three and 2 more
```

## shuffle
Shuffles an array.

```js [js]
shuffle(['one', 'two', 'three'])
```

```html [template]
{{ shuffle(['one', 'two', 'three']) }}
```

```html [returns]
['three', 'one', 'two']
```

## difference
Returns the difference between two arrays.

```js [js]
difference(['one', 'two', 'three'], ['one', 'two'])
```

```html [template]
{{ difference(['one', 'two', 'three'], ['one', 'two']) }}
```

```html [returns]
['three']
```

## first
Returns the first item in an array.

```js [js]
first(['one', 'two', 'three'])
```

```html [template]
{{ first(['one', 'two', 'three']) }}
```

```html [returns]
one
```

## last
Returns the last item in an array.

```js [js]
last(['one', 'two', 'three'])
```

```html [template]
{{ last(['one', 'two', 'three']) }}
```

```html [returns]
three
```

## nth
Returns the nth item in an array.

```js [js]
nth(['one', 'two', 'three'], 1)
```

```html [template]
{{ nth(['one', 'two', 'three'], 1) }}
```

```html [returns]
two
```

## offset
Offset the first item in an array.

```js [js]
offset(['one', 'two', 'three'], 1)
```

```html [template]
{{ offset(['one', 'two', 'three'], 1) }}
```

```html [returns]
['two', 'three']
```

## group
Groups an array of objects by a property.

```js [js]
group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name')
```

```html [template]
{{ group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name') }}
```

```html [returns]
{ one: [{ name: 'one' }, { name: 'one' }], two: [{ name: 'two' }] }
```

## groupBy
Chunks an array into sections of a specified size.

```js [js]
chunk(['one', 'two', 'three', 'four', 'five'], 2)
```

```html [template]
{{ chunk(['one', 'two', 'three', 'four', 'five'], 2) }}
```

```html [returns]
[['one', 'two'], ['three', 'four'], ['five']]
```

## flatten
Flatten an array of arrays.

```js [js]
flatten([['one', 'two'], ['three', 'four'], ['five']])
```

```html [template]
{{ flatten([['one', 'two'], ['three', 'four'], ['five']]) }}
```

```html [returns]
['one', 'two', 'three', 'four', 'five']
```

## without
Returns an array with a filtered out property.

```js [js]
without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name')
```

```html [template]
{{ without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name') }}
```

```html [returns]
[{ food: 'apple' }, { food: 'grape' }, { food: 'pear' }]
```

## combine
Combine two or more arrays

```js [js]
combine(['one', 'two'], ['three', 'four'], ['five'])
```

```html [template]
{{ combine(['one', 'two'], ['three', 'four'], ['five']) }}
```

```html [returns]
['one', 'two', 'three', 'four', 'five']
```

## reverse
Reverse an array.

```js [js]
reverse(['one', 'two', 'three'])
```

```html [template]
{{ reverse(['one', 'two', 'three']) }}
```

```html [returns]
['three', 'two', 'one']
```

## sortBy
Sort an array by a property.

```js [js]
sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age')
```

```html [template]
{{ sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age') }}
```

```html [returns]
[{ name: 'Jill', age: 20 },{ name: 'John', age: 25 },{ name: 'Jane', age: 30 }]
```

