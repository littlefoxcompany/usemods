# Modifiers

#### Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

### widont
Adds a space between the last two words in a string.

```js [js]
widont('Cool cool cool')
```

::example{:code=widont('Cool cool cool')}
::

### stripHtml
Strip HTML tags from a string.

```js [js]
stripHtml('<p>Hello World</p>')
```

::example{:code=stripHtml('<p>Hello World</p>')}
::

### escapeHtml
Escape HTML entities in a string.

```js [js]
escapeHtml('<p>Hello World</p>')
```

::example{:code=escapeHtml('<p>Hello World</p>')}
::

### unescapeHtml
Unescape HTML entities in a string.

```js [js]
unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
```

::example{:code=unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')}
::

### stripTags
Strip HTML tags from a string.

```js [js]
stripTags('<p>Hello World</p>')
```

::example{:code=stripTags('<p>Hello World</p>')}
::

### slugify
Converts a string to-a-slug.

```js [js]
slugify('Hello World')
```

::example{:code=slugify('Hello World')}
::

### deslugify
Converts a slug to a string.

```js [js]
deslugify('hello-world')
```

::example{:code=deslugify('hello-world')}
::

### truncate
Truncates a string to a specified length of characters.

```js [js]
truncate('Hello World', 5)
```

::example{:code=truncate('Hello World', 5)}
::

### truncateWords
Truncates a string by a number of words

```js [js]
truncateWords('Hello World', 1)
```

::example{:code=truncateWords('Hello World', 1)}
::

### countWords
Counts the number of words in a string.

```js [js]
countWords('Hello World')
```

::example{:code=countWords('Hello World')}
::

### countCharacters
Counts the number of characters in a string.

```js [js]
countCharacters('Hello World')
```

::example{:code=countCharacters('Hello World')}
::

### countLines
Counts the number of lines in a string.

```js [js]
countLines('Hello World')
```

::example{:code=countLines('Hello World')}
::

### stripWhitespace
Strips whitespace from a string.

```js [js]
stripWhitespace('Hello World')
```

::example{:code=stripWhitespace('Hello World')}
::

### stripNumbers
Strips numbers from a string.

```js [js]
stripNumbers('Hello World 123')
```

::example{:code=stripNumbers('Hello World 123')}
::

### stripPunctuation
Strips punctuation from a string.

```js [js]
stripPunctuation('Hello World!')
```

::example{:code=stripPunctuation('Hello World!')}
::

### stripSymbols
Strips symbols from a string.

```js [js]
stripSymbols('Hello World!')
```

::example{:code=stripSymbols('Hello World!')}
::

### stripEmojis
Strips emojis from a string (requires ES6 Unicode support) 🦊.

```js [js]
stripEmojis('Hello World! 🦊')
```

::example{:code=stripEmojis('Hello World! 🦊')}
::

### readingTime
Returns the reading time of a string in Hours, Minutes, and Seconds.

```js [js]
readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
```

::example{:code=readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')}
::

### pluralize
Adds plurals to a string.

```js [js]
pluralize('scooter', 10)
```

::example{:code=pluralize('scooter', 10)}
::

### singularize
Removes plurals from a string.

```js [js]
singularize('scooters')
```

::example{:code=singularize('scooters')}
::

### ordinalize
Converts a number to a string with ordinal suffix.

```js [js]
ordinalize(1)
```

::example{:code=ordinalize(1)}
::

### humanize
Replaces underscores with spaces and capitalizes the first letter of each word.

```js [js]
humanize('hello_world')
```

::example{:code=humanize('hello_world')}
::

### camelCase
Removes spaces and capitalizes the first letter of each word except for the first word.

```js [js]
camelCase('hello world')
```

::example{:code=camelCase('hello world')}
::

### pascalCase
Removes spaces and capitalizes the first letter of each word.

```js [js]
pascalCase('hello world')
```

::example{:code=pascalCase('hello world')}
::

### snakeCase
Replaces spaces with underscores and converts to lowercase.

```js [js]
snakeCase('hello world')
```

::example{:code=snakeCase('hello world')}
::

### kebabCase
Replaces spaces with hyphens and converts to lowercase.

```js [js]
titleize('Hello World')
```

::example{:code=titleize('Hello World')}
::

### titleCase
Converts to title case by capitalizing the first letter of each word.

```js [js]
titleCase('hello world')
```

::example{:code=titleCase('hello world')}
::

### sentenceCase
Converts to sentence case by capitalizing the first letter of the first word.

```js [js]
sentenceCase('hello world')
```

::example{:code=sentenceCase('hello world')}
::

### startWith
Adds a prefix to a string if it doesn't already start with the prefix.

```js [js]
startWith('usemods.com', 'https://')
```

::example{:code=startWith('usemods.com', 'https://')}
::

### startWithout
Removes a prefix from a string if it starts with the prefix.

```js [js]
startWithout('https://usemods.com', 'https://')
```

::example{:code=startWithout('https://usemods.com', 'https://')}
::

### endWith
Adds a suffix to a string if it doesn't already end with the suffix.

```js [js]
endWith('https://usemods', '.com')
```

::example{:code=endWith('https://usemods', '.com')}
::

### endWithout
Removes a suffix from a string if it ends with the suffix.

```js [js]
endWithout('https://usemods.com.au', '.au')
```

::example{:code=endWithout('https://usemods.com.au', '.au')}
::

### surround
Adds a prefix and suffix to a string if it doesn't already start and end with them.

```js [js]
surround('https://', 'usemods', '.com')
```

::example{:code=surround('https://', 'usemods', '.com')}
::

### title
Converts a string to title case following the Chicago Manual of Style rules.

```js [js]
title('the quick brown fox jumps over the lazy dog')
```

::example{:code=title('the quick brown fox jumps over the lazy dog')}
::

### splitByWords
Wraps each word in a string with a span tag.

```js [js]
splitByWords('Hello World. How are you?')
```

::example{:code=splitByWords('Hello World. How are you?')}
::

### list
Creates an array of list items (`<li>`) from an array of strings.

```js [js]
list(['one', 'two', 'three'])
```

::example{:code=list(['one', 'two', 'three'])}
::

### shuffle
Shuffles an array.

```js [js]
shuffle(['one', 'two', 'three'])
```

::example{:code=shuffle(['one', 'two', 'three'])}
::

### last
Returns the last item in an array.

```js [js]
last(['one', 'two', 'three'])
```

::example{:code=last(['one', 'two', 'three'])}
::

### nth
Returns the nth item in an array.

```js [js]
nth(['one', 'two', 'three'], 1)
```

::example{:code=nth(['one', 'two', 'three'], 1)}
::

