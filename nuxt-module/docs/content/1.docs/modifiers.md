# Modifiers

Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

### widont

::widont
::

Adds a space between the last two words in a string.

```js [js]
widont()
```

**Returns:** cool cool&nbsp;cool

### stripHtml

::stripHtml
::

Strip HTML tags from a string.

```js [js]
stripHtml('<p>Hello World</p>')
```

**Returns:** Hello World

### escapeHtml

::escapeHtml
::

Escape HTML entities in a string.

```js [js]
escapeHtml('<p>Hello World</p>')
```

**Returns:** &lt;p&gt;Hello World&lt;/p&gt;

### unescapeHtml

::unescapeHtml
::

Unescape HTML entities in a string.

```js [js]
unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
```

**Returns:** <p>Hello World</p>

### stripTags

::stripTags
::

Strip HTML tags from a string.

```js [js]
stripTags('<p>Hello World</p>')
```

**Returns:** Hello World

### slugify

::slugify
::

Converts a string to-a-slug.

```js [js]
slugify('Hello World')
```

**Returns:** hello-world

### deslugify

::deslugify
::

Converts a slug to a string.

```js [js]
deslugify('hello-world')
```

**Returns:** hello world

### truncate

::truncate
::

Truncates a string to a specified length of characters.

```js [js]
truncate('Hello World', 5)
```

**Returns:** Hello...

### truncateWords

::truncateWords
::

Truncates a string by a number of words

```js [js]
truncateWords('Hello World', 1)
```

**Returns:** Hello...

### countWords

::countWords
::

Counts the number of words in a string.

```js [js]
countWords('Hello World')
```

**Returns:** 2

### countCharacters

::countCharacters
::

Counts the number of characters in a string.

```js [js]
countCharacters('Hello World')
```

**Returns:** 11

### countLines

::countLines
::

Counts the number of lines in a string.

```js [js]
countLines('Hello World')
```

**Returns:** 1

### stripWhitespace

::stripWhitespace
::

Strips whitespace from a string.

```js [js]
stripWhitespace('Hello World')
```

**Returns:** HelloWorld

### stripNumbers

::stripNumbers
::

Strips numbers from a string.

```js [js]
stripNumbers('Hello World 123')
```

**Returns:** Hello World

### stripPunctuation

::stripPunctuation
::

Strips punctuation from a string.

```js [js]
stripPunctuation('Hello World!')
```

**Returns:** Hello World

### stripSymbols

::stripSymbols
::

Strips symbols from a string.

```js [js]
stripSymbols('Hello World!')
```

**Returns:** Hello World

### stripEmojis

::stripEmojis
::

Strips emojis from a string (requires ES6 Unicode support) 🦊.

```js [js]
stripEmojis('Hello World! 🦊')
```

**Returns:** Hello World!

### readingTime

::readingTime
::

Returns the reading time of a string in Hours, Minutes, and Seconds.

```js [js]
readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
```

**Returns:** 1 minute

### pluralize

::pluralize
::

Adds plurals to a string.

```js [js]
pluralize('scooter', 10)
```

**Returns:** scooters

### singularize

::singularize
::

Removes plurals from a string.

```js [js]
singularize('scooters')
```

**Returns:** scooter

### ordinalize

::ordinalize
::

Converts a number to a string with ordinal suffix.

```js [js]
ordinalize(1)
```

**Returns:** 1st

### humanize

::humanize
::

Replaces underscores with spaces and capitalizes the first letter of each word.

```js [js]
humanize('hello_world')
```

**Returns:** Hello World

### camelCase

::camelCase
::

Removes spaces and capitalizes the first letter of each word except for the first word.

```js [js]
camelCase('hello world')
```

**Returns:** helloWorld

### pascalCase

::pascalCase
::

Removes spaces and capitalizes the first letter of each word.

```js [js]
pascalCase('hello world')
```

**Returns:** HelloWorld

### snakeCase

::snakeCase
::

Replaces spaces with underscores and converts to lowercase.

```js [js]
snakeCase('hello world')
```

**Returns:** hello_world

### titleize

::titleize
::

Replaces spaces with hyphens and converts to lowercase.

```js [js]
titleize('Hello World')
```

**Returns:** hello-world

### titleCase

::titleCase
::

Converts to title case by capitalizing the first letter of each word.

```js [js]
titleCase('hello world')
```

**Returns:** Hello World

### sentenceCase

::sentenceCase
::

Converts to sentence case by capitalizing the first letter of the first word.

```js [js]
sentenceCase('hello world')
```

**Returns:** Hello world

### startWith

::startWith
::

Adds a prefix to a string if it doesn't already start with the prefix.

```js [js]
startWith('usemods.com', 'https://')
```

**Returns:** https://usemods.com

### startWithout

::startWithout
::

Removes a prefix from a string if it starts with the prefix.

```js [js]
startWithout('https://usemods.com', 'https://')
```

**Returns:** usemods.com

### endWith

::endWith
::

Adds a suffix to a string if it doesn't already end with the suffix.

```js [js]
endWith('https://usemods', '.com')
```

**Returns:** https://usemods.com

### endWithout

::endWithout
::

Removes a suffix from a string if it ends with the suffix.

```js [js]
endWithout('https://usemods.com.au', '.au')
```

**Returns:** https://usemods.com

### surround

::surround
::

Adds a prefix and suffix to a string if it doesn't already start and end with them.

```js [js]
surround('https://', 'usemods', '.com')
```

**Returns:** https://usemods.com

### title

::title
::

Converts a string to title case following the Chicago Manual of Style rules.

```js [js]
title('the quick brown fox jumps over the lazy dog')
```

**Returns:** The Quick Brown Fox Jumps over the Lazy Dog

### splitByWords

::splitByWords
::

Wraps each word in a string with a span tag.

```js [js]
splitByWords('Hello World. How are you?')
```

**Returns:** <span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>

### list

::list
::

Creates an array of list items (`<li>`) from an array of strings.

```js [js]
list(['one', 'two', 'three'])
```

**Returns:** <ul><li>one</li><li>two</li><li>three</li></ul>

### shuffle

::shuffle
::

Shuffles an array.

```js [js]
shuffle(['one', 'two', 'three'])
```

**Returns:** ['three', 'one', 'two']

### unique

::unique
::

Returns unique array values with an optional property to pluck.

```js [js]
unique(['one', 'two', 'three', 'one'])
```

**Returns:** ['one', 'two', 'three']

### difference

::difference
::

Returns the difference between two arrays.

```js [js]
difference(['one', 'two', 'three'], ['one', 'two'])
```

**Returns:** ['three']

### first

::first
::

Returns the first item in an array.

```js [js]
first(['one', 'two', 'three'])
```

**Returns:** one

### last

::last
::

Returns the last item in an array.

```js [js]
last(['one', 'two', 'three'])
```

**Returns:** three

### nth

::nth
::

Returns the nth item in an array.

```js [js]
nth(['one', 'two', 'three'], 1)
```

**Returns:** two

### offset

::offset
::

Offset the first item in an array.

```js [js]
offset(['one', 'two', 'three'], 1)
```

**Returns:** ['two', 'three']

### group

::group
::

Groups an array of objects by a property.

```js [js]
group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name')
```

**Returns:** { one: [{ name: 'one' }, { name: 'one' }], two: [{ name: 'two' }] }

### chunk

::chunk
::

Chunks an array into sections of a specified size.

```js [js]
chunk(['one', 'two', 'three', 'four', 'five'], 2)
```

**Returns:** [['one', 'two'], ['three', 'four'], ['five']]

### flatten

::flatten
::

Flatten an array of arrays.

```js [js]
flatten([['one', 'two'], ['three', 'four'], ['five']])
```

**Returns:** ['one', 'two', 'three', 'four', 'five']

### without

::without
::

Returns an array with a filtered out property.

```js [js]
without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name')
```

**Returns:** [{ food: 'apple' }, { food: 'grape' }, { food: 'pear' }]

### combine

::combine
::

Combine two or more arrays

```js [js]
combine(['one', 'two'], ['three', 'four'], ['five'])
```

**Returns:** ['one', 'two', 'three', 'four', 'five']

### combineUnique

::combineUnique
::

Combine two or more unique arrays

```js [js]
combineUnique(['one', 'two'], ['three', 'four', 'two'], ['five', 'one'])
```

**Returns:** ['one', 'two', 'three', 'four', 'five']

### combineWithout

::combineWithout
::

Combine two or more arrays or objects without a property.

```js [js]
combineWithout({ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, 'id')
```

**Returns:** [1, 2, 3]

### reverse

::reverse
::

Reverse an array.

```js [js]
reverse(['one', 'two', 'three'])
```

**Returns:** ['three', 'two', 'one']

### sortBy

::sortBy
::

Sort an array by a property.

```js [js]
sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age')
```

**Returns:** [{ name: 'Jill', age: 20 },{ name: 'John', age: 25 },{ name: 'Jane', age: 30 }]

