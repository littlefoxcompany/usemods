# Modifiers

#### Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

### widont
Adds a space between the last two words in a string.

```js
widont('Cool cool cool')
```

```html
cool cool&nbsp;cool
```

### stripHtml
Strip HTML tags from a string.

```js
stripHtml('<p>Hello World</p>')
```

```html
Hello World
```

### escapeHtml
Escape HTML entities in a string.

```js
escapeHtml('<p>Hello World</p>')
```

```html
&lt;p&gt;Hello World&lt;/p&gt;
```

### unescapeHtml
Unescape HTML entities in a string.

```js
unescapeHtml('&lt;p&gt;Hello World&lt;/p&gt;')
```

```html
<p>Hello World</p>
```

### stripTags
Strip HTML tags from a string.

```js
stripTags('<p>Hello World</p>')
```

```html
Hello World
```

### slugify
Converts a string to-a-slug.

```js
slugify('Hello World')
```

```html
hello-world
```

### deslugify
Converts a slug to a string.

```js
deslugify('hello-world')
```

```html
hello world
```

### truncate
Truncates a string to a specified length of characters.

```js
truncate('Hello World', 5)
```

```html
Hello...
```

### truncateWords
Truncates a string by a number of words

```js
truncateWords('Hello World', 1)
```

```html
Hello...
```

### countWords
Counts the number of words in a string.

```js
countWords('Hello World')
```

```html
2
```

### countCharacters
Counts the number of characters in a string.

```js
countCharacters('Hello World')
```

```html
11
```

### countLines
Counts the number of lines in a string.

```js
countLines('Hello World')
```

```html
1
```

### stripWhitespace
Strips whitespace from a string.

```js
stripWhitespace('Hello World')
```

```html
HelloWorld
```

### stripNumbers
Strips numbers from a string.

```js
stripNumbers('Hello World 123')
```

```html
Hello World
```

### stripPunctuation
Strips punctuation from a string.

```js
stripPunctuation('Hello World!')
```

```html
Hello World
```

### stripSymbols
Strips symbols from a string.

```js
stripSymbols('Hello World!')
```

```html
Hello World
```

### stripEmojis
Strips emojis from a string (requires ES6 Unicode support) 🦊.

```js
stripEmojis('Hello World! 🦊')
```

```html
Hello World!
```

### readingTime
Returns the reading time of a string in Hours, Minutes, and Seconds.

```js
readingTime('Once, in a vibrant online forum, lived Mod Max, guardian of digital harmony. Max cherished his old scooter, Swift, a symbol of freedom. Navigating both virtual and real worlds, they became legends. Trolls quivered, posts flourished, and lanes whizzed by. Swift’s wheels spun tales, and Max’s keys kept peace. Together, they discovered uncharted threads and hidden lanes. Their journey, an endless adventure, painted pixels and pavements with stories of unity and exhilaration, leaving a trail for all in the intertwined realms of screens and streets.')
```

```html
1 minute
```

### pluralize
Adds plurals to a string.

```js
pluralize('scooter', 10)
```

```html
scooters
```

### singularize
Removes plurals from a string.

```js
singularize('scooters')
```

```html
scooter
```

### ordinalize
Converts a number to a string with ordinal suffix.

```js
ordinalize(1)
```

```html
1st
```

### humanize
Replaces underscores with spaces and capitalizes the first letter of each word.

```js
humanize('hello_world')
```

```html
Hello World
```

### camelCase
Removes spaces and capitalizes the first letter of each word except for the first word.

```js
camelCase('hello world')
```

```html
helloWorld
```

### pascalCase
Removes spaces and capitalizes the first letter of each word.

```js
pascalCase('hello world')
```

```html
HelloWorld
```

### snakeCase
Replaces spaces with underscores and converts to lowercase.

```js
snakeCase('hello world')
```

```html
hello_world
```

### kebabCase
Replaces spaces with hyphens and converts to lowercase.

```js
titleize('Hello World')
```

```html
hello-world
```

### titleCase
Converts to title case by capitalizing the first letter of each word.

```js
titleCase('hello world')
```

```html
Hello World
```

### sentenceCase
Converts to sentence case by capitalizing the first letter of the first word.

```js
sentenceCase('hello world')
```

```html
Hello world
```

### startWith
Adds a prefix to a string if it doesn't already start with the prefix.

```js
startWith('usemods.com', 'https://')
```

```html
https://usemods.com
```

### startWithout
Removes a prefix from a string if it starts with the prefix.

```js
startWithout('https://usemods.com', 'https://')
```

```html
usemods.com
```

### endWith
Adds a suffix to a string if it doesn't already end with the suffix.

```js
endWith('https://usemods', '.com')
```

```html
https://usemods.com
```

### endWithout
Removes a suffix from a string if it ends with the suffix.

```js
endWithout('https://usemods.com.au', '.au')
```

```html
https://usemods.com
```

### surround
Adds a prefix and suffix to a string if it doesn't already start and end with them.

```js
surround('https://', 'usemods', '.com')
```

```html
https://usemods.com
```

### title
Converts a string to title case following the Chicago Manual of Style rules.

```js
title('the quick brown fox jumps over the lazy dog')
```

```html
The Quick Brown Fox Jumps over the Lazy Dog
```

### splitByWords
Wraps each word in a string with a span tag.

```js
splitByWords('Hello World. How are you?')
```

```html
<span class="sentence sentence-1"><span class="word word-1">Hello</span> <span class="word word-2">world.</span></span> <span class="sentence sentence-2"><span class="word word-3">How</span> <span class="word word-4">are</span> <span class="word word-5">you?</span></span>
```

### list
Creates an array of list items (`<li>`) from an array of strings.

```js
list(['one', 'two', 'three'])
```

```html
<ul><li>one</li><li>two</li><li>three</li></ul>
```

### shuffle
Shuffles an array.

```js
shuffle(['one', 'two', 'three'])
```

```html
['three', 'one', 'two']
```

### last
Returns the last item in an array.

```js
last(['one', 'two', 'three'])
```

```html
three
```

### nth
Returns the nth item in an array.

```js
nth(['one', 'two', 'three'], 1)
```

```html
two
```

