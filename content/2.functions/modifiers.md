# Modifiers

Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

## widont
Adds a space between the last two words in a string.

```js [js]
widont('Cool cool cool')
```

```js [template]
{{ widont('Cool cool cool') }}
```

```html [preview]
cool cool&nbsp;cool
```

## stripHtml
Strip HTML tags from a string.

```js [js]
stripHtml('<p>Hello World</p>')
```

```js [template]
{{ stripHtml('<p>Hello World</p>') }}
```

```html [preview]
Hello World
```

## escapeHtml
Escape HTML entities in a string.

```js [js]
escapeHtml('<p>Hello World</p>')
```

```js [template]
{{ escapeHtml('<p>Hello World</p>') }}
```

```html [preview]
&lt;p&gt;Hello World&lt;/p&gt;
```

## showHtml
Unescape HTML entities in a string.

```js [js]
unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
```

```js [template]
{{ unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;') }}
```

```html [preview]
<p>Hello World</p>
```

## stripTags
Strip HTML tags from a string.

```js [js]
stripTags('<p>Hello World</p>')
```

```js [template]
{{ stripTags('<p>Hello World</p>') }}
```

```html [preview]
Hello World
```

## slugify
Converts a string to-a-slug.

```js [js]
slugify('Hello World')
```

```js [template]
{{ slugify('Hello World') }}
```

```html [preview]
hello-world
```

## deslugify
Converts a slug to a string.

```js [js]
deslugify('hello-world')
```

```js [template]
{{ deslugify('hello-world') }}
```

```html [preview]
hello world
```

## truncate
Truncates a string to a specified length of characters.

```js [js]
truncate('Hello World', 5)
```

```js [template]
{{ truncate('Hello World', 5) }}
```

```html [preview]
Hello...
```

## truncateWords
Truncates a string by a number of words

```js [js]
truncateWords('Hello World', 1)
```

```js [template]
{{ truncateWords('Hello World', 1) }}
```

```html [preview]
Hello...
```

## countWords
Counts the number of words in a string.

```js [js]
countWords('Hello World')
```

```js [template]
{{ countWords('Hello World') }}
```

```html [preview]
2
```

## countCharacters
Counts the number of characters in a string.

```js [js]
countCharacters('Hello World')
```

```js [template]
{{ countCharacters('Hello World') }}
```

```html [preview]
11
```

## countLines
Counts the number of lines in a string.

```js [js]
countLines('Hello World')
```

```js [template]
{{ countLines('Hello World') }}
```

```html [preview]
1
```

## stripWhitespace
Strips whitespace from a string.

```js [js]
stripWhitespace('Hello World')
```

```js [template]
{{ stripWhitespace('Hello World') }}
```

```html [preview]
HelloWorld
```

## stripNumbers
Strips numbers from a string.

```js [js]
stripNumbers('Hello World 123')
```

```js [template]
{{ stripNumbers('Hello World 123') }}
```

```html [preview]
Hello World
```

## stripPunctuation
Strips punctuation from a string.

```js [js]
stripPunctuation('Hello World!')
```

```js [template]
{{ stripPunctuation('Hello World!') }}
```

```html [preview]
Hello World
```

## stripSymbols
Strips symbols from a string.

```js [js]
stripSymbols('Hello World!')
```

```js [template]
{{ stripSymbols('Hello World!') }}
```

```html [preview]
Hello World
```

## stripEmojis
Strips emojis from a string (requires ES6 Unicode support) 🦊.

```js [js]
stripEmojis('Hello World! 🦊')
```

```js [template]
{{ stripEmojis('Hello World! 🦊') }}
```

```html [preview]
Hello World!
```

## readingTime
Returns the reading time of a string in Hours, Minutes, and Seconds.

```js [js]
readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
```

```js [template]
{{ readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.') }}
```

```html [preview]
1 minute
```

## pluralize
Adds plurals to a string.

```js [js]
pluralize('scooter', 10)
```

```js [template]
{{ pluralize('scooter', 10) }}
```

```html [preview]
scooters
```

## singularize
Removes plurals from a string.

```js [js]
singularize('scooters')
```

```js [template]
{{ singularize('scooters') }}
```

```html [preview]
scooter
```

## ordinalize
Converts a number to a string with ordinal suffix.

```js [js]
ordinalize(1)
```

```js [template]
{{ ordinalize(1) }}
```

```html [preview]
1st
```

## humanize
Replaces underscores with spaces and capitalizes the first letter of each word.

```js [js]
humanize('hello_world')
```

```js [template]
{{ humanize('hello_world') }}
```

```html [preview]
Hello World
```

## camelCase
Removes spaces and capitalizes the first letter of each word except for the first word.

```js [js]
camelCase('hello world')
```

```js [template]
{{ camelCase('hello world') }}
```

```html [preview]
helloWorld
```

## pascalCase
Removes spaces and capitalizes the first letter of each word.

```js [js]
pascalCase('hello world')
```

```js [template]
{{ pascalCase('hello world') }}
```

```html [preview]
HelloWorld
```

## snakeCase
Replaces spaces with underscores and converts to lowercase.

```js [js]
snakeCase('hello world')
```

```js [template]
{{ snakeCase('hello world') }}
```

```html [preview]
hello_world
```

## kebabCase
Replaces spaces with hyphens and converts to lowercase.

```js [js]
titleize('Hello World')
```

```js [template]
{{ titleize('Hello World') }}
```

```html [preview]
hello-world
```

## titleCase
Converts to title case by capitalizing the first letter of each word.

```js [js]
titleCase('hello world')
```

```js [template]
{{ titleCase('hello world') }}
```

```html [preview]
Hello World
```

## sentenceCase
Converts to sentence case by capitalizing the first letter of the first word.

```js [js]
sentenceCase('hello world')
```

```js [template]
{{ sentenceCase('hello world') }}
```

```html [preview]
Hello world
```

## startsWith
Adds a prefix to a string if it doesn't already start with the prefix.

```js [js]
startsWith('usemods.com', 'https://')
```

```js [template]
{{ startsWith('usemods.com', 'https://') }}
```

```html [preview]
https://usemods.com
```

## startsWithout
Removes a prefix from a string if it starts with the prefix.

```js [js]
startsWithout('https://usemods.com', 'https://')
```

```js [template]
{{ startsWithout('https://usemods.com', 'https://') }}
```

```html [preview]
usemods.com
```

## endsWith
Adds a suffix to a string if it doesn't already end with the suffix.

```js [js]
endsWith('https://usemods', '.com')
```

```js [template]
{{ endsWith('https://usemods', '.com') }}
```

```html [preview]
https://usemods.com
```

## endsWithout
Removes a suffix from a string if it ends with the suffix.

```js [js]
endsWithout('https://usemods.com.au', '.au')
```

```js [template]
{{ endsWithout('https://usemods.com.au', '.au') }}
```

```html [preview]
https://usemods.com
```

## surround
Adds a prefix and suffix to a string if it doesn't already start and end with them.

```js [js]
surround('https://', 'usemods', '.com')
```

```js [template]
{{ surround('https://', 'usemods', '.com') }}
```

```html [preview]
https://usemods.com
```

## title
Converts a string to title case following the Chicago Manual of Style rules.

```js [js]
title('the quick brown fox jumps over the lazy dog')
```

```js [template]
{{ title('the quick brown fox jumps over the lazy dog') }}
```

```html [preview]
The Quick Brown Fox Jumps over the Lazy Dog
```

## splitByWords
Wraps each word in a string with a span tag.

```js [js]
splitByWords('Hello World. How are you?')
```

```js [template]
{{ splitByWords('Hello World. How are you?') }}
```

```html [preview]
<span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>
```

## list
Creates an array of list items (`<li>`) from an array of strings.

```js [js]
list(['one', 'two', 'three'])
```

```js [template]
{{ list(['one', 'two', 'three']) }}
```

```html [preview]
<ul><li>one</li><li>two</li><li>three</li></ul>
```

## commaList
Create a string of comma-separated values from an array of strings with an optional conjunction.

```js [js]

```

```js [template]

```

```html [preview]

```

## truncateList
Create a string of comma-separated values with a limit and an optional conjunction.

```js [js]

```

```js [template]

```

```html [preview]

```

## shuffle
Shuffles an array.

```js [js]

```

```js [template]

```

```html [preview]

```

## difference
Returns the difference between two arrays.

```js [js]

```

```js [template]

```

```html [preview]

```

## first
Returns the first item in an array.

```js [js]

```

```js [template]

```

```html [preview]

```

## last
Returns the last item in an array.

```js [js]

```

```js [template]

```

```html [preview]

```

## nth
Returns the nth item in an array.

```js [js]

```

```js [template]

```

```html [preview]

```

## offset
Offset the first item in an array.

```js [js]

```

```js [template]

```

```html [preview]

```

## group
Groups an array of objects by a property.

```js [js]

```

```js [template]

```

```html [preview]

```

## groupBy
Chunks an array into sections of a specified size.

```js [js]

```

```js [template]

```

```html [preview]

```

## flatten
Flatten an array of arrays.

```js [js]

```

```js [template]

```

```html [preview]

```

## without
Returns an array with a filtered out property.

```js [js]

```

```js [template]

```

```html [preview]

```

## combine
Combine two arrays

```js [js]

```

```js [template]

```

```html [preview]

```

## reverse
Reverse an array.

```js [js]

```

```js [template]

```

```html [preview]

```

## sortBy
Sort an array by a property.

```js [js]

```

```js [template]

```

```html [preview]

```

