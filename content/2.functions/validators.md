# Validators

A collection of validators for common data types

## isEmail
Check if the input is a valid email address.

```js [js]
isEmail('hello@usemods.com')
```

```html [template]
{{ isEmail('hello@usemods.com') }}
```

```html [returns]
true
```

## isNumber
Check if the input is a valid number.

```js [js]
isNumber('123')
```

```html [template]
{{ isNumber('123') }}
```

```html [returns]
true
```

## isPhoneNumber
Check if the input is a valid phone number.

```js [js]
isPhoneNumber('123-456-7890')
```

```html [template]
{{ isPhoneNumber('123-456-7890') }}
```

```html [returns]
true
```

## isURL
Check if the input is a valid URL.

```js [js]
isURL('https://usemods.com')
```

```html [template]
{{ isURL('https://usemods.com') }}
```

```html [returns]
true
```

## isUUID
Check if the input is a valid UUID.

```js [js]
isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
```

```html [template]
{{ isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a') }}
```

```html [returns]
true
```

## isJSON
Check if the input is a valid JSON string.

```js [js]
isJSON('{"hello": "world"}')
```

```html [template]
{{ isJSON('{"hello": "world"}') }}
```

```html [returns]
true
```

## isHex
Check if the input is a valid hexadecimal color code.

```js [js]
isHex('#fff')
```

```html [template]
{{ isHex('#fff') }}
```

```html [returns]
true
```

## isEmpty
Check if the input is an empty string.

```js [js]
isEmpty('')
```

```html [template]
{{ isEmpty('') }}
```

```html [returns]
true
```

## isAlpha
Check if the input contains only alphabetic characters.

```js [js]
isAlpha('hello')
```

```html [template]
{{ isAlpha('hello') }}
```

```html [returns]
true
```

## isAlphanumeric
Check if the input contains only alphanumeric characters.

```js [js]
isAlphanumeric('hello123')
```

```html [template]
{{ isAlphanumeric('hello123') }}
```

```html [returns]
true
```

## isArray
Check if the input is an array.

```js [js]
isArray([1, 2, 3])
```

```html [template]
{{ isArray([1, 2, 3]) }}
```

```html [returns]
true
```

## isObject
Check if the input is an object.

```js [js]
isObject({ hello: 'world' })
```

```html [template]
{{ isObject({ hello: 'world' }) }}
```

```html [returns]
true
```

## isBoolean
Check if the input is a boolean value.

```js [js]
isBoolean(true)
```

```html [template]
{{ isBoolean(true) }}
```

```html [returns]
true
```

## isFunction
Check if the input is a function.

```js [js]
isFunction(() => {})
```

```html [template]
{{ isFunction(() => {}) }}
```

```html [returns]
true
```

## isUndefined
Check if the input is undefined.

```js [js]
isUndefined(undefined)
```

```html [template]
{{ isUndefined(undefined) }}
```

```html [returns]
true
```

## isNull
Check if the input is null.

```js [js]
isNull(null)
```

```html [template]
{{ isNull(null) }}
```

```html [returns]
true
```

## isNaN
Check if the input is NaN (Not a Number).

```js [js]
isNaN(NaN)
```

```html [template]
{{ isNaN(NaN) }}
```

```html [returns]
true
```

## isDate
Check if the input is a valid Date object.

```js [js]
isDate(new Date())
```

```html [template]
{{ isDate(new Date()) }}
```

```html [returns]
true
```

## isError
Check if the input is an Error object with a defined message.

```js [js]
isError(new Error('hello'))
```

```html [template]
{{ isError(new Error('hello')) }}
```

```html [returns]
true
```

## isTime
Check if the input is a valid time in HH:mm format.

```js [js]
isTime('12:00')
```

```html [template]
{{ isTime('12:00') }}
```

```html [returns]
true
```

## isLeapYear
Check if the input year is a leap year.

```js [js]
isLeapYear(2020)
```

```html [template]
{{ isLeapYear(2020) }}
```

```html [returns]
true
```

## isSymbol
Check if the input is a symbol.

```js [js]
isSymbol(Symbol('hello'))
```

```html [template]
{{ isSymbol(Symbol('hello')) }}
```

```html [returns]
true
```

## isPromise
Check if the input is a Promise object.

```js [js]
isPromise(new Promise(() => {}))
```

```html [template]
{{ isPromise(new Promise(() => {})) }}
```

```html [returns]
true
```

## isSet
Check if the input is a Set object.

```js [js]
isSet(new Set())
```

```html [template]
{{ isSet(new Set()) }}
```

```html [returns]
true
```

## isMap
Check if the input is a Map object.

```js [js]
isMap(new Map())
```

```html [template]
{{ isMap(new Map()) }}
```

```html [returns]
true
```

## isWeakSet
Check if the input is a WeakSet object.

```js [js]
isWeakSet(new WeakSet())
```

```html [template]
{{ isWeakSet(new WeakSet()) }}
```

```html [returns]
true
```

## isEven
Check if the number is even.

```js [js]
isEven(2)
```

```html [template]
{{ isEven(2) }}
```

```html [returns]
true
```

## isOdd
Check if the number is odd.

```js [js]
isOdd(3)
```

```html [template]
{{ isOdd(3) }}
```

```html [returns]
true
```

## isPositive
Check if the number is positive.

```js [js]
isPositive(1)
```

```html [template]
{{ isPositive(1) }}
```

```html [returns]
true
```

## isNegative
Check if the number is negative.

```js [js]
isNegative(-1)
```

```html [template]
{{ isNegative(-1) }}
```

```html [returns]
true
```

## isPrime
Check if the number is a prime number.

```js [js]
isPrime(7)
```

```html [template]
{{ isPrime(7) }}
```

```html [returns]
true
```

## isOptimusPrime
Check if the string is equal to "Optimus Prime".

```js [js]
isOptimusPrime('Optimus Prime')
```

```html [template]
{{ isOptimusPrime('Optimus Prime') }}
```

```html [returns]
true
```

## isPalindrome
Check if the string is a palindrome.

```js [js]
isPalindrome('racecar')
```

```html [template]
{{ isPalindrome('racecar') }}
```

```html [returns]
true
```

## isInteger
Check if the number is an integer.

```js [js]
isInteger(1)
```

```html [template]
{{ isInteger(1) }}
```

```html [returns]
true
```

## isFloat
Check if the number is a float.

```js [js]
isFloat(1.5)
```

```html [template]
{{ isFloat(1.5) }}
```

```html [returns]
true
```

## isBetween
Check if the number is between the specified range.

```js [js]
isBetween(5, 1, 10)
```

```html [template]
{{ isBetween(5, 1, 10) }}
```

```html [returns]
true
```

## isDivisibleBy
Check if the number is divisible by the specified number.

```js [js]
isDivisibleBy(10, 2)
```

```html [template]
{{ isDivisibleBy(10, 2) }}
```

```html [returns]
true
```

## isCreditCardNumber
Check if the input is a valid credit card number.

```js [js]
isCreditCardNumber('4242424242424242')
```

```html [template]
{{ isCreditCardNumber('4242424242424242') }}
```

```html [returns]
true
```

## isIPAddress
Check if the input is a valid IP address.

```js [js]
isIPAddress('127.0.0.0')
```

```html [template]
{{ isIPAddress('127.0.0.0') }}
```

```html [returns]
true
```

## isMACAddress
Check if the input is a valid MAC address.

```js [js]
isMACAddress('00:00:00:00:00:00')
```

```html [template]
{{ isMACAddress('00:00:00:00:00:00') }}
```

```html [returns]
true
```

## isLatLong
Check if the input is a valid latitude-longitude coordinate in the format lat,long or lat, long.

```js [js]
isLatLong('40.741895,-73.989308')
```

```html [template]
{{ isLatLong('40.741895,-73.989308') }}
```

```html [returns]
true
```

## isLatitude
Check if the input is a valid latitude coordinate.

```js [js]
isLatitude('40.741895')
```

```html [template]
{{ isLatitude('40.741895') }}
```

```html [returns]
true
```

## isLongitude
Check if the input is a valid longitude coordinate.

```js [js]
isLongitude('-73.989308')
```

```html [template]
{{ isLongitude('-73.989308') }}
```

```html [returns]
true
```

## isPresent
Checks if a property and value pair exists in an object.

```js [js]
isPresent({ hello: 'world' }, 'hello', 'world')
```

```html [template]
{{ isPresent({ hello: 'world' }, 'hello', 'world') }}
```

```html [returns]
true
```

## isIBAN
Check if the input is a valid IBAN.

```js [js]
isIBAN('NL39RABO0300065264')
```

```html [template]
{{ isIBAN('NL39RABO0300065264') }}
```

```html [returns]
true
```

## isBIC
Check if the input is a valid BIC.

```js [js]
isBIC('RABONL2U')
```

```html [template]
{{ isBIC('RABONL2U') }}
```

```html [returns]
true
```

## isPort
Check if the input is a valid port number.

```js [js]
isPort(3000)
```

```html [template]
{{ isPort(3000) }}
```

```html [returns]
true
```

## isISBN
Check if the input is a valid IBAN.

```js [js]
isIBAN('NL39RABO0300065264')
```

```html [template]
{{ isIBAN('NL39RABO0300065264') }}
```

```html [returns]
true
```

