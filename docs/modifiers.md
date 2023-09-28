# Modifiers

Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

## widont
Adds a space between the last two words in a string. @js widont('Cool cool cool') @template {{ widont('Cool cool cool') }} @preview cool cool&nbsp;cool /

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
Strip HTML tags from a string. @js stripHtml('<p>Hello World</p>') @template {{ stripHtml('<p>Hello World</p>') }} @preview Hello World /

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
Escape HTML entities in a string. @example escapeHtml('<p>Hello World</p>') => '&lt;p&gt;Hello World&lt;/p&gt;' /

```js [js]

```

```js [template]

```

```html [preview]

```

## showHtml
Unescape HTML entities in a string. @example showHtml('&lt;p&gt;Hello World&lt;/p&gt;') => '<p>Hello World</p>' /

```js [js]

```

```js [template]

```

```html [preview]

```

## stripTags
Strip HTML tags from a string. @example stripTags('<p>Hello World</p>') /

```js [js]

```

```js [template]

```

```html [preview]

```

## slugify
Converts a string to-a-slug. /

```js [js]

```

```js [template]

```

```html [preview]

```

## deslugify
Converts a slug to a string. @example deslugify('hello-world') => 'hello world' /

```js [js]

```

```js [template]

```

```html [preview]

```

## truncate
Truncates a string to a specified length of characters. /

```js [js]

```

```js [template]

```

```html [preview]

```

## truncateWords
Truncates a string by a number of words /

```js [js]

```

```js [template]

```

```html [preview]

```

## countWords
Counts the number of words in a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## countCharacters
Counts the number of characters in a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## countLines
Counts the number of lines in a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## stripWhitespace
Strips whitespace from a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## stripNumbers
Strips numbers from a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## stripPunctuation
Strips punctuation from a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## stripSymbols
Strips symbols from a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## stripEmojis
Strips emojis from a string (requires ES6 Unicode support) 🦊. /

```js [js]

```

```js [template]

```

```html [preview]

```

## readingTime
Returns the reading time of a string in Hours, Minutes, and Seconds. /

```js [js]

```

```js [template]

```

```html [preview]

```

## pluralize
Adds plurals to a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## singularize
Removes plurals from a string. /

```js [js]

```

```js [template]

```

```html [preview]

```

## ordinalize
Converts a number to a string with ordinal suffix. /

```js [js]

```

```js [template]

```

```html [preview]

```

## humanize
Replaces underscores with spaces and capitalizes the first letter of each word. /

```js [js]

```

```js [template]

```

```html [preview]

```

## camelCase
Removes spaces and capitalizes the first letter of each word except for the first word. /

```js [js]

```

```js [template]

```

```html [preview]

```

## pascalCase
Removes spaces and capitalizes the first letter of each word. /

```js [js]

```

```js [template]

```

```html [preview]

```

## snakeCase
Replaces spaces with underscores and converts to lowercase. /

```js [js]

```

```js [template]

```

```html [preview]

```

## kebabCase
Replaces spaces with hyphens and converts to lowercase. /

```js [js]

```

```js [template]

```

```html [preview]

```

## titleCase
Converts to title case by capitalizing the first letter of each word. /

```js [js]

```

```js [template]

```

```html [preview]

```

## sentenceCase
Converts to sentence case by capitalizing the first letter of the first word. /

```js [js]

```

```js [template]

```

```html [preview]

```

## startsWith
Adds a prefix to a string if it doesn't already start with the prefix. /

```js [js]

```

```js [template]

```

```html [preview]

```

## startsWithout
Removes a prefix from a string if it starts with the prefix. /

```js [js]

```

```js [template]

```

```html [preview]

```

## endsWith
Adds a suffix to a string if it doesn't already end with the suffix. /

```js [js]

```

```js [template]

```

```html [preview]

```

## endsWithout
Removes a suffix from a string if it ends with the suffix. /

```js [js]

```

```js [template]

```

```html [preview]

```

## surround
Adds a prefix and suffix to a string if it doesn't already start and end with them. @param text - The string to surround. @param prefix - The prefix to add. @param suffix - The suffix to add. /

```js [js]

```

```js [template]

```

```html [preview]

```

## title
Converts a string to title case following the Chicago Manual of Style rules. @reference https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html /

```js [js]

```

```js [template]

```

```html [preview]

```

## splitByWords
Wraps each word in a string with a span tag. /

```js [js]

```

```js [template]

```

```html [preview]

```

## list
Creates an array of list items (<li>) from an array of strings. @example js asdfasdf /

```js [js]

```

```js [template]

```

```html [preview]

```

## commaList
Create a string of comma-separated values from an array of strings with an optional conjunction. @param items - The array of strings. @param conjunction - The conjunction before the last item e.g. "and" or "or". /

```js [js]

```

```js [template]

```

```html [preview]

```

## truncateList
Create a string of comma-separated values with a limit and an optional conjunction. @param items - The array of strings. @param limit - The number of items to show before truncating. /

```js [js]

```

```js [template]

```

```html [preview]

```

## shuffle
Shuffles an array. /

```js [js]

```

```js [template]

```

```html [preview]

```

## difference
Returns the difference between two arrays. /

```js [js]

```

```js [template]

```

```html [preview]

```

## first
Returns the first item in an array. /

```js [js]

```

```js [template]

```

```html [preview]

```

## last
Returns the last item in an array. /

```js [js]

```

```js [template]

```

```html [preview]

```

## nth
Returns the nth item in an array. /

```js [js]

```

```js [template]

```

```html [preview]

```

## offset
Offset the first item in an array. /

```js [js]

```

```js [template]

```

```html [preview]

```

## group
Groups an array of objects by a property. /

```js [js]

```

```js [template]

```

```html [preview]

```

## groupBy
Chunks an array into sections of a specified size. /

```js [js]

```

```js [template]

```

```html [preview]

```

## flatten
Flatten an array of arrays. /

```js [js]

```

```js [template]

```

```html [preview]

```

## without
Returns an array with a filtered out property. /

```js [js]

```

```js [template]

```

```html [preview]

```

## combine
Combine two arrays /

```js [js]

```

```js [template]

```

```html [preview]

```

## reverse
Reverse an array. /

```js [js]

```

```js [template]

```

```html [preview]

```

## sortBy
Sort an array by a property. /

```js [js]

```

```js [template]

```

```html [preview]

```

