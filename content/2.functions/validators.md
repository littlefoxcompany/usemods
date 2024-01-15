# Validators

A collection of validators for common data types

### isEmail

Check if the input is a valid email address.

```js [js]
isEmail('hello@usemods.com')
```

**Returns:** true

### isNumber

Check if the input is a valid number.

```js [js]
isNumber('123')
```

**Returns:** true

### isURL

Check if the input is a valid URL.

```js [js]
isURL('https://usemods.com')
```

**Returns:** true

### isUUID

Check if the input is a valid UUID.

```js [js]
isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
```

**Returns:** true

### isJSON

Check if the input is a valid JSON string.

```js [js]
isJSON('{"hello": "world"}')
```

**Returns:** true

### isHex

Check if the input is a valid hexadecimal color code.

```js [js]
isHex('#fff')
```

**Returns:** true

### isEmpty

Check if the input is an empty string.

```js [js]
isEmpty('')
```

**Returns:** true

### isAlpha

Check if the input contains only alphabetic characters.

```js [js]
isAlpha('hello')
```

**Returns:** true

### isAlphanumeric

Check if the input contains only alphanumeric characters.

```js [js]
isAlphanumeric('hello123')
```

**Returns:** true

### isArray

Check if the input is an array.

```js [js]
isArray([1, 2, 3])
```

**Returns:** true

### isObject

Check if the input is an object.

```js [js]
isObject({ hello: 'world' })
```

**Returns:** true

### isBoolean

Check if the input is a boolean value.

```js [js]
isBoolean(true)
```

**Returns:** true

### isFunction

Check if the input is a function.

```js [js]
isFunction(() => {})
```

**Returns:** true

### isUndefined

Check if the input is undefined.

```js [js]
isUndefined(undefined)
```

**Returns:** true

### isNull

Check if the input is null.

```js [js]
isNull(null)
```

**Returns:** true

### isDate

Check if the input is a valid Date object.

```js [js]
isDate(new Date())
```

**Returns:** true

### isError

Check if the input is an Error object with a defined message.

```js [js]
isError(new Error('hello'))
```

**Returns:** true

### isTime

Check if the input is a valid time in HH:mm format.

```js [js]
isTime('12:00')
```

**Returns:** true

### isLeapYear

Check if the input year is a leap year.

```js [js]
isLeapYear(2020)
```

**Returns:** true

### isPromise

Check if the input is a Promise object.

```js [js]
isPromise(new Promise(() => {}))
```

**Returns:** true

### isSet

Check if the input is a Set object.

```js [js]
isSet(new Set())
```

**Returns:** true

### isMap

Check if the input is a Map object.

```js [js]
isMap(new Map())
```

**Returns:** true

### isEven

Check if the number is even.

```js [js]
isEven(2)
```

**Returns:** true

### isOdd

Check if the number is odd.

```js [js]
isOdd(3)
```

**Returns:** true

### isPositive

Check if the number is positive.

```js [js]
isPositive(1)
```

**Returns:** true

### isNegative

Check if the number is negative.

```js [js]
isNegative(-1)
```

**Returns:** true

### isZero

Check if the number is zero.

```js [js]
isZero(0)
```

**Returns:** true

### isPrime

Check if the number is a prime number.

```js [js]
isPrime(7)
```

**Returns:** true

### isOptimusPrime

Check if the string is equal to "Optimus Prime".

```js [js]
isOptimusPrime('Optimus Prime')
```

**Returns:** true

### isPalindrome

Check if the string is a palindrome.

```js [js]
isPalindrome('racecar')
```

**Returns:** true

### isInteger

Check if the number is an integer.

```js [js]
isInteger(1)
```

**Returns:** true

### isFloat

Check if the number is a float.

```js [js]
isFloat(1.5)
```

**Returns:** true

### isBetween

Check if the number is between the specified range.

```js [js]
isBetween(5, 1, 10)
```

**Returns:** true

### isDivisibleBy

Check if the number is divisible by the specified number.

```js [js]
isDivisibleBy(10, 2)
```

**Returns:** true

### isCreditCardNumber

Check if the input is a valid credit card number.

```js [js]
isCreditCardNumber('4242424242424242')
```

**Returns:** true

### isIPAddress

Check if the input is a valid IP address.

```js [js]
isIPAddress('127.0.0.0')
```

**Returns:** true

### isMACAddress

Check if the input is a valid MAC address.

```js [js]
isMACAddress('00:00:00:00:00:00')
```

**Returns:** true

### isLatLng

Check if the input is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.

```js [js]
isLatLng('40.741895,-73.989308')
```

**Returns:** true

### isLatitude

Check if the input is a valid latitude coordinate.

```js [js]
isLatitude('40.741895')
```

**Returns:** true

### isLongitude

Check if the input is a valid longitude coordinate.

```js [js]
isLongitude('-73.989308')
```

**Returns:** true

### isPort

Check if the input is a valid port number.

```js [js]
isPort(3000)
```

**Returns:** true

### isPresent

Checks if a property and value pair exists in an object.

```js [js]
hasPropertyValue({ hello: 'world' }, 'hello', 'world')
```

**Returns:** true

### hasProperties

Check if a property exists in an object without checking its value.

```js [js]
hasProperties({ hello: 'world' }, ['hello', 'world'])
```

**Returns:** true

### hasKeys

Check if an array of key exists in an object

```js [js]
hasKeys({ hello: 'world' }, ['hello', 'world',])
```

**Returns:** true

