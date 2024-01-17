# Modifiers

Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

### widont

Adds a space between the last two words in a string.

```js [js]
widont()
```

::widont
::

### stripHtml

Strip HTML tags from a string.

```js [js]
stripHtml('<p>Hello World</p>')
```

::stripHtml
::

### escapeHtml

Escape HTML entities in a string.

```js [js]
escapeHtml('<p>Hello World</p>')
```

::escapeHtml
::

### unescapeHtml

Unescape HTML entities in a string.

```js [js]
unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
```

::unescapeHtml
::

### stripTags

Strip HTML tags from a string.

```js [js]
stripTags('<p>Hello World</p>')
```

::stripTags
::

### slugify

Converts a string to-a-slug.

```js [js]
slugify('Hello World')
```

::slugify
::

### deslugify

Converts a slug to a string.

```js [js]
deslugify('hello-world')
```

::deslugify
::

### truncate

Truncates a string to a specified length of characters.

```js [js]
truncate('Hello World', 5)
```

::truncate
::

### truncateWords

Truncates a string by a number of words

```js [js]
truncateWords('Hello World', 1)
```

::truncateWords
::

### countWords

Counts the number of words in a string.

```js [js]
countWords('Hello World')
```

::countWords
::

### countCharacters

Counts the number of characters in a string.

```js [js]
countCharacters('Hello World')
```

::countCharacters
::

### countLines

Counts the number of lines in a string.

```js [js]
countLines('Hello World')
```

::countLines
::

### stripWhitespace

Strips whitespace from a string.

```js [js]
stripWhitespace('Hello World')
```

::stripWhitespace
::

### stripNumbers

Strips numbers from a string.

```js [js]
stripNumbers('Hello World 123')
```

::stripNumbers
::

### stripPunctuation

Strips punctuation from a string.

```js [js]
stripPunctuation('Hello World!')
```

::stripPunctuation
::

### stripSymbols

Strips symbols from a string.

```js [js]
stripSymbols('Hello World!')
```

::stripSymbols
::

### stripEmojis

Strips emojis from a string (requires ES6 Unicode support) 🦊.

```js [js]
stripEmojis('Hello World! 🦊')
```

::stripEmojis
::

### readingTime

Returns the reading time of a string in Hours, Minutes, and Seconds.

```js [js]
readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
```

::readingTime
::

### pluralize

Adds plurals to a string.

```js [js]
pluralize('scooter', 10)
```

::pluralize
::

### singularize

Removes plurals from a string.

```js [js]
singularize('scooters')
```

::singularize
::

### ordinalize

Converts a number to a string with ordinal suffix.

```js [js]
ordinalize(1)
```

::ordinalize
::

### humanize

Replaces underscores with spaces and capitalizes the first letter of each word.

```js [js]
humanize('hello_world')
```

::humanize
::

### camelCase

Removes spaces and capitalizes the first letter of each word except for the first word.

```js [js]
camelCase('hello world')
```

::camelCase
::

### pascalCase

Removes spaces and capitalizes the first letter of each word.

```js [js]
pascalCase('hello world')
```

::pascalCase
::

### snakeCase

Replaces spaces with underscores and converts to lowercase.

```js [js]
snakeCase('hello world')
```

::snakeCase
::

### titleize

Replaces spaces with hyphens and converts to lowercase.

```js [js]
titleize('Hello World')
```

::titleize
::

### titleCase

Converts to title case by capitalizing the first letter of each word.

```js [js]
titleCase('hello world')
```

::titleCase
::

### sentenceCase

Converts to sentence case by capitalizing the first letter of the first word.

```js [js]
sentenceCase('hello world')
```

::sentenceCase
::

### startWith

Adds a prefix to a string if it doesn't already start with the prefix.

```js [js]
startWith('usemods.com', 'https://')
```

::startWith
::

### startWithout

Removes a prefix from a string if it starts with the prefix.

```js [js]
startWithout('https://usemods.com', 'https://')
```

::startWithout
::

### endWith

Adds a suffix to a string if it doesn't already end with the suffix.

```js [js]
endWith('https://usemods', '.com')
```

::endWith
::

### endWithout

Removes a suffix from a string if it ends with the suffix.

```js [js]
endWithout('https://usemods.com.au', '.au')
```

::endWithout
::

### surround

Adds a prefix and suffix to a string if it doesn't already start and end with them.

```js [js]
surround('https://', 'usemods', '.com')
```

::surround
::

### title

Converts a string to title case following the Chicago Manual of Style rules.

```js [js]
title('the quick brown fox jumps over the lazy dog')
```

::title
::

### splitByWords

Wraps each word in a string with a span tag.

```js [js]
splitByWords('Hello World. How are you?')
```

::splitByWords
::

### list

Creates an array of list items (`<li>`) from an array of strings.

```js [js]
list(['one', 'two', 'three'])
```

::list
::

### shuffle

Shuffles an array.

```js [js]
shuffle(['one', 'two', 'three'])
```

::shuffle
::

### unique

Returns unique array values with an optional property to pluck.

```js [js]
unique(['one', 'two', 'three', 'one'])
```

::unique
::

### difference

Returns the difference between two arrays.

```js [js]
difference(['one', 'two', 'three'], ['one', 'two'])
```

::difference
::

### first

Returns the first item in an array.

```js [js]
first(['one', 'two', 'three'])
```

::first
::

### last

Returns the last item in an array.

```js [js]
last(['one', 'two', 'three'])
```

::last
::

### nth

Returns the nth item in an array.

```js [js]
nth(['one', 'two', 'three'], 1)
```

::nth
::

### offset

Offset the first item in an array.

```js [js]
offset(['one', 'two', 'three'], 1)
```

::offset
::

### group

Groups an array of objects by a property.

```js [js]
group([{ name: 'one' }, { name: 'two' }, { name: 'one' }], 'name')
```

::group
::

### chunk

Chunks an array into sections of a specified size.

```js [js]
chunk(['one', 'two', 'three', 'four', 'five'], 2)
```

::chunk
::

### flatten

Flatten an array of arrays.

```js [js]
flatten([['one', 'two'], ['three', 'four'], ['five']])
```

::flatten
::

### without

Returns an array with a filtered out property.

```js [js]
without([{ name: 'one', food: 'apple' }, { name: 'two', food: 'grape' }, { name: 'one', food: 'pear' }], 'name')
```

::without
::

### combine

Combine two or more arrays

```js [js]
combine(['one', 'two'], ['three', 'four'], ['five'])
```

::combine
::

### combineUnique

Combine two or more unique arrays

```js [js]
combineUnique(['one', 'two'], ['three', 'four', 'two'], ['five', 'one'])
```

::combineUnique
::

### combineWithout

Combine two or more arrays or objects without a property.

```js [js]
combineWithout({ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, 'id')
```

::combineWithout
::

### reverse

Reverse an array.

```js [js]
reverse(['one', 'two', 'three'])
```

::reverse
::

### sortBy

Sort an array by a property.

```js [js]
sortBy([{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jill', age: 20 }], 'age')
```

::sortBy
::

