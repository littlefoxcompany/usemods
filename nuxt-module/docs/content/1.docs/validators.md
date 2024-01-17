# Validators

A collection of validators for common data types

### isEmail

Check if the input is a valid email address.

```js [js]
isEmail('hello@usemods.com')
```

::isEmail
::

### isNumber

Check if the input is a valid number.

```js [js]
isNumber('123')
```

::isNumber
::

### isURL

Check if the input is a valid URL.

```js [js]
isURL('https://usemods.com')
```

::isURL
::

### isUUID

Check if the input is a valid UUID.

```js [js]
isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
```

::isUUID
::

### isJSON

Check if the input is a valid JSON string.

```js [js]
isJSON('{"hello": "world"}')
```

::isJSON
::

### isHex

Check if the input is a valid hexadecimal color code.

```js [js]
isHex('#fff')
```

::isHex
::

### isEmpty

Check if the input is an empty string.

```js [js]
isEmpty('')
```

::isEmpty
::

### isAlpha

Check if the input contains only alphabetic characters.

```js [js]
isAlpha('hello')
```

::isAlpha
::

### isAlphanumeric

Check if the input contains only alphanumeric characters.

```js [js]
isAlphanumeric('hello123')
```

::isAlphanumeric
::

### isArray

Check if the input is an array.

```js [js]
isArray([1, 2, 3])
```

::isArray
::

### isObject

Check if the input is an object.

```js [js]
isObject({ hello: 'world' })
```

::isObject
::

### isBoolean

Check if the input is a boolean value.

```js [js]
isBoolean(true)
```

::isBoolean
::

### isFunction

Check if the input is a function.

```js [js]
isFunction(() => {})
```

::isFunction
::

### isUndefined

Check if the input is undefined.

```js [js]
isUndefined(undefined)
```

::isUndefined
::

### isNull

Check if the input is null.

```js [js]
isNull(null)
```

::isNull
::

### isDate

Check if the input is a valid Date object.

```js [js]
isDate(new Date())
```

::isDate
::

### isError

Check if the input is an Error object with a defined message.

```js [js]
isError(new Error('hello'))
```

::isError
::

### isTime

Check if the input is a valid time in HH:mm format.

```js [js]
isTime('12:00')
```

::isTime
::

### isLeapYear

Check if the input year is a leap year.

```js [js]
isLeapYear(2020)
```

::isLeapYear
::

### isPromise

Check if the input is a Promise object.

```js [js]
isPromise(new Promise(() => {}))
```

::isPromise
::

### isSet

Check if the input is a Set object.

```js [js]
isSet(new Set())
```

::isSet
::

### isMap

Check if the input is a Map object.

```js [js]
isMap(new Map())
```

::isMap
::

### isEven

Check if the number is even.

```js [js]
isEven(2)
```

::isEven
::

### isOdd

Check if the number is odd.

```js [js]
isOdd(3)
```

::isOdd
::

### isPositive

Check if the number is positive.

```js [js]
isPositive(1)
```

::isPositive
::

### isNegative

Check if the number is negative.

```js [js]
isNegative(-1)
```

::isNegative
::

### isZero

Check if the number is zero.

```js [js]
isZero(0)
```

::isZero
::

### isPrime

Check if the number is a prime number.

```js [js]
isPrime(7)
```

::isPrime
::

### isOptimusPrime

Check if the string is equal to "Optimus Prime".

```js [js]
isOptimusPrime('Optimus Prime')
```

::isOptimusPrime
::

### isPalindrome

Check if the string is a palindrome.

```js [js]
isPalindrome('racecar')
```

::isPalindrome
::

### isInteger

Check if the number is an integer.

```js [js]
isInteger(1)
```

::isInteger
::

### isFloat

Check if the number is a float.

```js [js]
isFloat(1.5)
```

::isFloat
::

### isBetween

Check if the number is between the specified range.

```js [js]
isBetween(5, 1, 10)
```

::isBetween
::

### isDivisibleBy

Check if the number is divisible by the specified number.

```js [js]
isDivisibleBy(10, 2)
```

::isDivisibleBy
::

### isCreditCardNumber

Check if the input is a valid credit card number.

```js [js]
isCreditCardNumber('4242424242424242')
```

::isCreditCardNumber
::

### isIPAddress

Check if the input is a valid IP address.

```js [js]
isIPAddress('127.0.0.0')
```

::isIPAddress
::

### isMACAddress

Check if the input is a valid MAC address.

```js [js]
isMACAddress('00:00:00:00:00:00')
```

::isMACAddress
::

### isLatLng

Check if the input is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.

```js [js]
isLatLng('40.741895,-73.989308')
```

::isLatLng
::

### isLatitude

Check if the input is a valid latitude coordinate.

```js [js]
isLatitude('40.741895')
```

::isLatitude
::

### isLongitude

Check if the input is a valid longitude coordinate.

```js [js]
isLongitude('-73.989308')
```

::isLongitude
::

### isPort

Check if the input is a valid port number.

```js [js]
isPort(3000)
```

::isPort
::

### hasPropertyValue

Checks if a property and value pair exists in an object.

```js [js]
hasPropertyValue({ hello: 'world' }, 'hello', 'world')
```

::hasPropertyValue
::

### hasProperties

Check if a property exists in an object without checking its value.

```js [js]
hasProperties({ hello: 'world' }, ['hello', 'world'])
```

::hasProperties
::

### hasKeys

Check if an array of key exists in an object

```js [js]
hasKeys({ hello: 'world' }, ['hello', 'world',])
```

::hasKeys
::

