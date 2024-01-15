# Validators

#### A collection of validators for common data types

### export function isEmail
Check if the input is a valid email address.  @example isEmail('hello@usemods.com')  @returns true

```js [js]
isEmail('hello@usemods.com')
```

### export function isNumber
Check if the input is a valid number.  @example isNumber('123')  @returns true

```js [js]
isNumber('123')
```

### export function isURL
Check if the input is a valid URL.  @example isURL('https://usemods.com')  @returns true

```js [js]
isURL('https://usemods.com')
```

### export function isUUID
Check if the input is a valid UUID.  @example isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')  @returns true

```js [js]
isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
```

### export function isJSON
Check if the input is a valid JSON string.  @example isJSON('{"hello": "world"}')  @returns true

```js [js]
isJSON('{"hello": "world"}')
```

### export function isHex
Check if the input is a valid hexadecimal color code.  @example isHex('#fff')  @returns true

```js [js]
isHex('#fff')
```

### export function isEmpty
Check if the input is an empty string.  @example isEmpty('')  @returns true

```js [js]
isEmpty('')
```

### export function isAlpha
Check if the input contains only alphabetic characters.  @example isAlpha('hello')  @returns true

```js [js]
isAlpha('hello')
```

### export function isAlphanumeric
Check if the input contains only alphanumeric characters.  @example isAlphanumeric('hello123')  @returns true

```js [js]
isAlphanumeric('hello123')
```

### export function isArray
Check if the input is an array.  @example isArray([1, 2, 3])  @returns true

```js [js]
isArray([1, 2, 3])
```

### export function isObject
Check if the input is an object.  @example isObject({ hello: 'world' })  @returns true

```js [js]
isObject({ hello: 'world' })
```

### export function isBoolean
Check if the input is a boolean value.  @example isBoolean(true)  @returns true

```js [js]
isBoolean(true)
```

### export function isFunction
Check if the input is a function.  @example isFunction(() => {})  @returns true

```js [js]
isFunction(() => {})
```

### export function isUndefined
Check if the input is undefined.  @example isUndefined(undefined)  @returns true

```js [js]
isUndefined(undefined)
```

### export function isNull
Check if the input is null.  @example isNull(null)  @returns true

```js [js]
isNull(null)
```

### export function isDate
Check if the input is a valid Date object.  @example isDate(new Date())  @returns true

```js [js]
isDate(new Date())
```

### export function isError
Check if the input is an Error object with a defined message.  @example isError(new Error('hello'))  @returns true

```js [js]
isError(new Error('hello'))
```

### export function isTime
Check if the input is a valid time in HH:mm format.  @example isTime('12:00')  @returns true

```js [js]
isTime('12:00')
```

### export function isLeapYear
Check if the input year is a leap year.  @example isLeapYear(2020)  @returns true

```js [js]
isLeapYear(2020)
```

### export function isPromise
Check if the input is a Promise object.  @example isPromise(new Promise(() => {}))  @returns true

```js [js]
isPromise(new Promise(() => {}))
```

### export function isSet
Check if the input is a Set object.  @example isSet(new Set())  @returns true

```js [js]
isSet(new Set())
```

### export function isMap
Check if the input is a Map object.  @example isMap(new Map())  @returns true

```js [js]
isMap(new Map())
```

### export function isEven
Check if the number is even.  @example isEven(2)  @returns true

```js [js]
isEven(2)
```

### export function isOdd
Check if the number is odd.  @example isOdd(3)  @returns true

```js [js]
isOdd(3)
```

### export function isPositive
Check if the number is positive.  @example isPositive(1)  @returns true

```js [js]
isPositive(1)
```

### export function isNegative
Check if the number is negative.  @example isNegative(-1)  @returns true

```js [js]
isNegative(-1)
```

### export function isZero
Check if the number is zero.  @example isZero(0)  @returns true

```js [js]
isZero(0)
```

### export function isPrime
Check if the number is a prime number.  @example isPrime(7)  @returns true

```js [js]
isPrime(7)
```

### export function isOptimusPrime
Check if the string is equal to "Optimus Prime".  @example isOptimusPrime('Optimus Prime')  @returns true

```js [js]
isOptimusPrime('Optimus Prime')
```

### export function isPalindrome
Check if the string is a palindrome.  @example isPalindrome('racecar')  @returns true

```js [js]
isPalindrome('racecar')
```

### export function isInteger
Check if the number is an integer.  @example isInteger(1)  @returns true

```js [js]
isInteger(1)
```

### export function isFloat
Check if the number is a float.  @example isFloat(1.5)  @returns true

```js [js]
isFloat(1.5)
```

### export function isBetween
Check if the number is between the specified range.  @example isBetween(5, 1, 10)  @returns true

```js [js]
isBetween(5, 1, 10)
```

### export function isDivisibleBy
Check if the number is divisible by the specified number.  @example isDivisibleBy(10, 2)  @returns true

```js [js]
isDivisibleBy(10, 2)
```

### export function isCreditCardNumber
Check if the input is a valid credit card number.  @example isCreditCardNumber('4242424242424242')  @returns true

```js [js]
isCreditCardNumber('4242424242424242')
```

### export function isIPAddress
Check if the input is a valid IP address.  @example isIPAddress('127.0.0.0')  @returns true

```js [js]
isIPAddress('127.0.0.0')
```

### export function isMACAddress
Check if the input is a valid MAC address.  @example isMACAddress('00:00:00:00:00:00')  @returns true

```js [js]
isMACAddress('00:00:00:00:00:00')
```

### export function isLatLng
Check if the input is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.  @example isLatLng('40.741895,-73.989308')  @returns true

```js [js]
isLatLng('40.741895,-73.989308')
```

### export function isLatitude
Check if the input is a valid latitude coordinate.  @example isLatitude('40.741895')  @returns true

```js [js]
isLatitude('40.741895')
```

### export function isLongitude
Check if the input is a valid longitude coordinate.  @example isLongitude('-73.989308')  @returns true

```js [js]
isLongitude('-73.989308')
```

### export function isPort
Check if the input is a valid port number.  @example isPort(3000)  @returns true

```js [js]
isPort(3000)
```

### export function isPresent
Checks if a property and value pair exists in an object.  @example hasPropertyValue({ hello: 'world' }, 'hello', 'world')  @returns true

```js [js]
hasPropertyValue({ hello: 'world' }, 'hello', 'world')
```

### export function hasProperties
Check if a property exists in an object without checking its value.  @example hasProperties({ hello: 'world' }, ['hello', 'world'])  @returns true

```js [js]
hasProperties({ hello: 'world' }, ['hello', 'world'])
```

### export function hasKeys
Check if an array of key exists in an object  @example hasKeys({ hello: 'world' }, ['hello', 'world',])  @returns true

```js [js]
hasKeys({ hello: 'world' }, ['hello', 'world',])
```

