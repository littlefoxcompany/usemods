---
title: Validators
description: A collection of validators for common data types
icon: undefined
---

::pagetitle
# Validators
A collection of validators for common data types
::

::pagefunction
### isEmail
Check if the input is a valid email address.
```js [js]
isEmail('hello@usemods.com')
```
:::isEmail
:::
::

::pagefunction
### isNumber
Check if the input is a valid number.
```js [js]
isNumber('123')
```
:::isNumber
:::
::

::pagefunction
### isURL
Check if the input is a valid URL.
```js [js]
isURL('https://usemods.com')
```
:::isURL
:::
::

::pagefunction
### isUUID
Check if the input is a valid UUID.
```js [js]
isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
```
:::isUUID
:::
::

::pagefunction
### isJSON
Check if the input is a valid JSON string.
```js [js]
isJSON('{"hello": "world"}')
```
:::isJSON
:::
::

::pagefunction
### isHex
Check if the input is a valid hexadecimal color code.
```js [js]
isHex('#fff')
```
:::isHex
:::
::

::pagefunction
### isEmpty
Check if the input is an empty string.
```js [js]
isEmpty('')
```
:::isEmpty
:::
::

::pagefunction
### isAlpha
Check if the input contains only alphabetic characters.
```js [js]
isAlpha('hello')
```
:::isAlpha
:::
::

::pagefunction
### isAlphanumeric
Check if the input contains only alphanumeric characters.
```js [js]
isAlphanumeric('hello123')
```
:::isAlphanumeric
:::
::

::pagefunction
### isArray
Check if the input is an array.
```js [js]
isArray([1, 2, 3])
```
:::isArray
:::
::

::pagefunction
### isObject
Check if the input is an object.
```js [js]
isObject({ hello: 'world' })
```
:::isObject
:::
::

::pagefunction
### isBoolean
Check if the input is a boolean value.
```js [js]
isBoolean(true)
```
:::isBoolean
:::
::

::pagefunction
### isFunction
Check if the input is a function.
```js [js]
isFunction(() => {})
```
:::isFunction
:::
::

::pagefunction
### isUndefined
Check if the input is undefined.
```js [js]
isUndefined(undefined)
```
:::isUndefined
:::
::

::pagefunction
### isNull
Check if the input is null.
```js [js]
isNull(null)
```
:::isNull
:::
::

::pagefunction
### isDate
Check if the input is a valid Date object.
```js [js]
isDate(new Date())
```
:::isDate
:::
::

::pagefunction
### isError
Check if the input is an Error object with a defined message.
```js [js]
isError(new Error('hello'))
```
:::isError
:::
::

::pagefunction
### isTime
Check if the input is a valid time in HH:mm format.
```js [js]
isTime('12:00')
```
:::isTime
:::
::

::pagefunction
### isLeapYear
Check if the input year is a leap year.
```js [js]
isLeapYear(2020)
```
:::isLeapYear
:::
::

::pagefunction
### isPromise
Check if the input is a Promise object.
```js [js]
isPromise(new Promise(() => {}))
```
:::isPromise
:::
::

::pagefunction
### isSet
Check if the input is a Set object.
```js [js]
isSet(new Set())
```
:::isSet
:::
::

::pagefunction
### isMap
Check if the input is a Map object.
```js [js]
isMap(new Map())
```
:::isMap
:::
::

::pagefunction
### isEven
Check if the number is even.
```js [js]
isEven(2)
```
:::isEven
:::
::

::pagefunction
### isOdd
Check if the number is odd.
```js [js]
isOdd(3)
```
:::isOdd
:::
::

::pagefunction
### isPositive
Check if the number is positive.
```js [js]
isPositive(1)
```
:::isPositive
:::
::

::pagefunction
### isNegative
Check if the number is negative.
```js [js]
isNegative(-1)
```
:::isNegative
:::
::

::pagefunction
### isZero
Check if the number is zero.
```js [js]
isZero(0)
```
:::isZero
:::
::

::pagefunction
### isPrime
Check if the number is a prime number.
```js [js]
isPrime(7)
```
:::isPrime
:::
::

::pagefunction
### isOptimusPrime
Check if the string is equal to "Optimus Prime".
```js [js]
isOptimusPrime('Optimus Prime')
```
:::isOptimusPrime
:::
::

::pagefunction
### isPalindrome
Check if the string is a palindrome.
```js [js]
isPalindrome('racecar')
```
:::isPalindrome
:::
::

::pagefunction
### isInteger
Check if the number is an integer.
```js [js]
isInteger(1)
```
:::isInteger
:::
::

::pagefunction
### isFloat
Check if the number is a float.
```js [js]
isFloat(1.5)
```
:::isFloat
:::
::

::pagefunction
### isBetween
Check if the number is between the specified range.
```js [js]
isBetween(5, 1, 10)
```
:::isBetween
:::
::

::pagefunction
### isDivisibleBy
Check if the number is divisible by the specified number.
```js [js]
isDivisibleBy(10, 2)
```
:::isDivisibleBy
:::
::

::pagefunction
### isCreditCardNumber
Check if the input is a valid credit card number.
```js [js]
isCreditCardNumber('4242424242424242')
```
:::isCreditCardNumber
:::
::

::pagefunction
### isIPAddress
Check if the input is a valid IP address.
```js [js]
isIPAddress('127.0.0.0')
```
:::isIPAddress
:::
::

::pagefunction
### isMACAddress
Check if the input is a valid MAC address.
```js [js]
isMACAddress('00:00:00:00:00:00')
```
:::isMACAddress
:::
::

::pagefunction
### isLatLng
Check if the input is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.
```js [js]
isLatLng('40.741895,-73.989308')
```
:::isLatLng
:::
::

::pagefunction
### isLatitude
Check if the input is a valid latitude coordinate.
```js [js]
isLatitude('40.741895')
```
:::isLatitude
:::
::

::pagefunction
### isLongitude
Check if the input is a valid longitude coordinate.
```js [js]
isLongitude('-73.989308')
```
:::isLongitude
:::
::

::pagefunction
### isPort
Check if the input is a valid port number.
```js [js]
isPort(3000)
```
:::isPort
:::
::

::pagefunction
### hasPropertyValue
Checks if a property and value pair exists in an object.
```js [js]
hasPropertyValue({ hello: 'world' }, 'hello', 'world')
```
:::hasPropertyValue
:::
::

::pagefunction
### hasProperties
Check if a property exists in an object without checking its value.
```js [js]
hasProperties({ hello: 'world' }, ['hello', 'world'])
```
:::hasProperties
:::
::

::pagefunction
### hasKeys
Check if an array of key exists in an object
```js [js]
hasKeys({ hello: 'world' }, ['hello', 'world',])
```
:::hasKeys
:::
::

