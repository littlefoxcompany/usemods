# Modifiers

#### Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

### export function widont
Adds a space between the last two words in a string.  @example widont('Cool cool cool')  @returns cool cool&nbsp;cool

```js [js]
widont('Cool cool cool')
```

### export function stripHtml
Strip HTML tags from a string.  @example stripHtml('<p>Hello World</p>')  @returns Hello World

```js [js]
stripHtml('<p>Hello World</p>')
```

### export function escapeHtml
Escape HTML entities in a string.  @example escapeHtml('<p>Hello World</p>')  @returns &lt;p&gt;Hello World&lt;/p&gt;

```js [js]
escapeHtml('<p>Hello World</p>')
```

### export function unescapeHtml
Unescape HTML entities in a string.  @example unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')  @returns <p>Hello World</p>

```js [js]
unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
```

### export function stripTags
Strip HTML tags from a string.  @example stripTags('<p>Hello World</p>')  @returns Hello World

```js [js]
stripTags('<p>Hello World</p>')
```

### export function slugify
Converts a string to-a-slug.  @example slugify('Hello World')  @returns hello-world

```js [js]
slugify('Hello World')
```

### export function deslugify
Converts a slug to a string.  @example deslugify('hello-world')  @returns hello world

```js [js]
deslugify('hello-world')
```

### export function truncate
Truncates a string to a specified length of characters.  @example truncate('Hello World', 5)  @returns Hello...

```js [js]
truncate('Hello World', 5)
```

### export function truncateWords
Truncates a string by a number of words  @example truncateWords('Hello World', 1)  @returns Hello...

```js [js]
truncateWords('Hello World', 1)
```

### export function countWords
Counts the number of words in a string.  @example countWords('Hello World')  @returns 2

```js [js]
countWords('Hello World')
```

### export function countCharacters
Counts the number of characters in a string.  @example countCharacters('Hello World')  @returns 11

```js [js]
countCharacters('Hello World')
```

### export function countLines
Counts the number of lines in a string.  @example countLines('Hello World')  @returns 1

```js [js]
countLines('Hello World')
```

### export function stripWhitespace
Strips whitespace from a string.  @example stripWhitespace('Hello World')  @returns HelloWorld

```js [js]
stripWhitespace('Hello World')
```

### export function stripNumbers
Strips numbers from a string.  @example stripNumbers('Hello World 123')  @returns Hello World

```js [js]
stripNumbers('Hello World 123')
```

### export function stripPunctuation
Strips punctuation from a string.  @example stripPunctuation('Hello World!')  @returns Hello World

```js [js]
stripPunctuation('Hello World!')
```

### export function stripSymbols
Strips symbols from a string.  @example stripSymbols('Hello World!')  @returns Hello World

```js [js]
stripSymbols('Hello World!')
```

### export function stripEmojis
Strips emojis from a string (requires ES6 Unicode support) 🦊.  @example stripEmojis('Hello World! 🦊')  @returns Hello World!

```js [js]
stripEmojis('Hello World! 🦊')
```

### export function readingTime
Returns the reading time of a string in Hours, Minutes, and Seconds.  @example readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')  @returns 1 minute

```js [js]
readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
```

### export function pluralize
Adds plurals to a string.  @example pluralize('scooter', 10)  @returns scooters

```js [js]
pluralize('scooter', 10)
```

### export function singularize
Removes plurals from a string.  @example singularize('scooters')  @returns scooter

```js [js]
singularize('scooters')
```

### export function ordinalize
Converts a number to a string with ordinal suffix.  @example ordinalize(1)  @returns 1st

```js [js]
ordinalize(1)
```

### export function humanize
Replaces underscores with spaces and capitalizes the first letter of each word.  @example humanize('hello_world')  @returns Hello World

```js [js]
humanize('hello_world')
```

### export function camelCase
Removes spaces and capitalizes the first letter of each word except for the first word.  @example camelCase('hello world')  @returns helloWorld

```js [js]
camelCase('hello world')
```

### export function pascalCase
Removes spaces and capitalizes the first letter of each word.  @example pascalCase('hello world')  @returns HelloWorld

```js [js]
pascalCase('hello world')
```

### export function snakeCase
Replaces spaces with underscores and converts to lowercase.  @example snakeCase('hello world')  @returns hello_world

```js [js]
snakeCase('hello world')
```

### export function kebabCase
Replaces spaces with hyphens and converts to lowercase.  @example titleize('Hello World')  @returns hello-world

```js [js]
titleize('Hello World')
```

### export function titleCase
Converts to title case by capitalizing the first letter of each word.  @example titleCase('hello world')  @returns Hello World

```js [js]
titleCase('hello world')
```

### export function sentenceCase
Converts to sentence case by capitalizing the first letter of the first word.  @example sentenceCase('hello world')  @returns Hello world

```js [js]
sentenceCase('hello world')
```

### export function startWith
Adds a prefix to a string if it doesn't already start with the prefix.  @example startWith('usemods.com', 'https://')  @returns https://usemods.com

```js [js]
startWith('usemods.com', 'https://')
```

### export function startWithout
Removes a prefix from a string if it starts with the prefix.  @example startWithout('https://usemods.com', 'https://')  @returns usemods.com

```js [js]
startWithout('https://usemods.com', 'https://')
```

### export function endWith
Adds a suffix to a string if it doesn't already end with the suffix.  @example endWith('https://usemods', '.com')  @returns https://usemods.com

```js [js]
endWith('https://usemods', '.com')
```

### export function endWithout
Removes a suffix from a string if it ends with the suffix.  @example endWithout('https://usemods.com.au', '.au')  @returns https://usemods.com

```js [js]
endWithout('https://usemods.com.au', '.au')
```

### export function surround
Adds a prefix and suffix to a string if it doesn't already start and end with them.  @param text - The string to surround.  @param prefix - The prefix to add.  @param suffix - The suffix to add.  @example surround('https://', 'usemods', '.com')  @returns https://usemods.com

```js [js]
surround('https://', 'usemods', '.com')
```

### export function title
Converts a string to title case following the Chicago Manual of Style rules.  @reference https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html  @example title('the quick brown fox jumps over the lazy dog')  @returns The Quick Brown Fox Jumps over the Lazy Dog

```js [js]
title('the quick brown fox jumps over the lazy dog')
```

### export function splitByWords
Wraps each word in a string with a span tag.  @example splitByWords('Hello World. How are you?')  @returns <span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>

```js [js]
splitByWords('Hello World. How are you?')
```

### export function list
Creates an array of list items (`<li>`) from an array of strings.  @example list(['one', 'two', 'three'])  @returns <ul><li>one</li><li>two</li><li>three</li></ul>

```js [js]
list(['one', 'two', 'three'])
```

### export function shuffle
Shuffles an array.  @example shuffle(['one', 'two', 'three'])  @returns ['three', 'one', 'two']

```js [js]
shuffle(['one', 'two', 'three'])
```

### 
Returns unique array values with an optional property to pluck.  @param items - The array of items.  @param property - The property to pluck (optional).  @example unique(['one', 'two', 'three', 'one'])  @returns ['one', 'two', 'three']

```js [js]
unique(['one', 'two', 'three', 'one'])
```

### export function difference
Returns the difference between two arrays.  @example difference(['one', 'two', 'three'], ['one', 'two'])  @returns ['three']

```js [js]
difference(['one', 'two', 'three'], ['one', 'two'])
```

### export function first
Returns the first item in an array.  @example first(['one', 'two', 'three'])  @returns one

```js [js]
first(['one', 'two', 'three'])
```

### export function last
Returns the last item in an array.  @example last(['one', 'two', 'three'])  @returns three

```js [js]
last(['one', 'two', 'three'])
```

### export function nth
Returns the nth item in an array.  @example nth(['one', 'two', 'three'], 1)  @returns two

```js [js]
nth(['one', 'two', 'three'], 1)
```

### export function offset
Offset the first item in an array.  @example offset(['one', 'two', 'three'], 1)  @returns ['two', 'three']

```js [js]
offset(['one', 'two', 'three'], 1)
```

### 
Groups an array of objects by a property.  @example group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name')  @returns { one: [{ name: 'one' }, { name: 'one' }], two: [{ name: 'two' }] }

```js [js]
group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name')
```

### export function groupBy
Chunks an array into sections of a specified size.  @example chunk(['one', 'two', 'three', 'four', 'five'], 2)  @returns [['one', 'two'], ['three', 'four'], ['five']]

```js [js]
chunk(['one', 'two', 'three', 'four', 'five'], 2)
```

### export function flatten
Flatten an array of arrays.  @example flatten([['one', 'two'], ['three', 'four'], ['five']])  @returns ['one', 'two', 'three', 'four', 'five']

```js [js]
flatten([['one', 'two'], ['three', 'four'], ['five']])
```

### export function without
Returns an array with a filtered out property.  @example without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name')  @returns [{ food: 'apple' }, { food: 'grape' }, { food: 'pear' }]

```js [js]
without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name')
```

### export function combine
Combine two or more arrays  @example combine(['one', 'two'], ['three', 'four'], ['five'])  @returns ['one', 'two', 'three', 'four', 'five']

```js [js]
combine(['one', 'two'], ['three', 'four'], ['five'])
```

### 
Combine two or more unique arrays  @example combineUnique(['one', 'two'], ['three', 'four', 'two'], ['five', 'one'])  @returns ['one', 'two', 'three', 'four', 'five']

```js [js]
combineUnique(['one', 'two'], ['three', 'four', 'two'], ['five', 'one'])
```

### 
Combine two or more arrays or objects without a property.  @example combineWithout({ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, 'id')  @returns [1, 2, 3]

```js [js]
combineWithout({ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, 'id')
```

### export function reverse
Reverse an array.  @example reverse(['one', 'two', 'three'])  @returns ['three', 'two', 'one']

```js [js]
reverse(['one', 'two', 'three'])
```

### 
Sort an array by a property.  @example sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age')  @returns [{ name: 'Jill', age: 20 },{ name: 'John', age: 25 },{ name: 'Jane', age: 30 }]

```js [js]
sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age')
```

