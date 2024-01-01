# Validators

#### A collection of validators for common data types

### isEmail
Check if the input is a valid email address.

```js
isEmail('hello@usemods.com')
```

```html
true
```

### isNumber
Check if the input is a valid number.

```js
isNumber('123')
```

```html
true
```

### isURL
Check if the input is a valid URL.

```js
isURL('https://usemods.com')
```

```html
true
```

### isUUID
Check if the input is a valid UUID.

```js
isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
```

```html
true
```

### isJSON
Check if the input is a valid JSON string.

```js
isJSON('{"hello": "world"}')
```

```html
true
```

### isHex
Check if the input is a valid hexadecimal color code.

```js
isHex('#fff')
```

```html
true
```

### isEmpty
Check if the input is an empty string.

```js
isEmpty('')
```

```html
true
```

### isAlpha
Check if the input contains only alphabetic characters.

```js
isAlpha('hello')
```

```html
true
```

### isAlphanumeric
Check if the input contains only alphanumeric characters.

```js
isAlphanumeric('hello123')
```

```html
true
```

### isArray
Check if the input is an array.

```js
isArray([1, 2, 3])
```

```html
true
```

### isObject
Check if the input is an object.

```js
isObject({ hello: 'world' })
```

```html
true
```

### isBoolean
Check if the input is a boolean value.

```js
isBoolean(true)
```

```html
true
```

### isFunction
Check if the input is a function.

```js
isFunction(() => {})
```

```html
true
```

### isUndefined
Check if the input is undefined.

```js
isUndefined(undefined)
```

```html
true
```

### isNull
Check if the input is null.

```js
isNull(null)
```

```html
true
```

### isDate
Check if the input is a valid Date object.

```js
isDate(new Date())
```

```html
true
```

### isError
Check if the input is an Error object with a defined message.

```js
isError(new Error('hello'))
```

```html
true
```

### isTime
Check if the input is a valid time in HH:mm format.

```js
isTime('12:00')
```

```html
true
```

### isLeapYear
Check if the input year is a leap year.

```js
isLeapYear(2020)
```

```html
true
```

### isPromise
Check if the input is a Promise object.

```js
isPromise(new Promise(() => {}))
```

```html
true
```

### isSet
Check if the input is a Set object.

```js
isSet(new Set())
```

```html
true
```

### isMap
Check if the input is a Map object.

```js
isMap(new Map())
```

```html
true
```

### isEven
Check if the number is even.

```js
isEven(2)
```

```html
true
```

### isOdd
Check if the number is odd.

```js
isOdd(3)
```

```html
true
```

### isPositive
Check if the number is positive.

```js
isPositive(1)
```

```html
true
```

### isNegative
Check if the number is negative.

```js
isNegative(-1)
```

```html
true
```

### isZero
Check if the number is zero.

```js
isZero(0)
```

```html
true
```

### isPrime
Check if the number is a prime number.

```js
isPrime(7)
```

```html
true
```

### isOptimusPrime
Check if the string is equal to "Optimus Prime".

```js
isOptimusPrime('Optimus Prime')
```

```html
true
```

### isPalindrome
Check if the string is a palindrome.

```js
isPalindrome('racecar')
```

```html
true
```

### isInteger
Check if the number is an integer.

```js
isInteger(1)
```

```html
true
```

### isFloat
Check if the number is a float.

```js
isFloat(1.5)
```

```html
true
```

### isBetween
Check if the number is between the specified range.

```js
isBetween(5, 1, 10)
```

```html
true
```

### isDivisibleBy
Check if the number is divisible by the specified number.

```js
isDivisibleBy(10, 2)
```

```html
true
```

### isCreditCardNumber
Check if the input is a valid credit card number.

```js
isCreditCardNumber('4242424242424242')
```

```html
true
```

### isIPAddress
Check if the input is a valid IP address.

```js
isIPAddress('127.0.0.0')
```

```html
true
```

### isMACAddress
Check if the input is a valid MAC address.

```js
isMACAddress('00:00:00:00:00:00')
```

```html
true
```

### isLatLng
Check if the input is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.

```js
isLatLng('40.741895,-73.989308')
```

```html
true
```

### isLatitude
Check if the input is a valid latitude coordinate.

```js
isLatitude('40.741895')
```

```html
true
```

### isLongitude
Check if the input is a valid longitude coordinate.

```js
isLongitude('-73.989308')
```

```html
true
```

### isPort
Check if the input is a valid port number.

```js
isPort(3000)
```

```html
true
```

### isPresent
Checks if a property and value pair exists in an object.

```js
hasPropertyValue({ hello: 'world' }, 'hello', 'world')
```

```html
true
```

### hasProperties
Check if a property exists in an object without checking its value.

```js
hasProperties({ hello: 'world' }, ['hello', 'world'])
```

```html
true
```

### hasKeys
Check if an array of key exists in an object

```js
hasKeys({ hello: 'world' }, ['hello', 'world',])
```

```html
true
```

