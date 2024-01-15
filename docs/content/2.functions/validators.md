# Validators

#### A collection of validators for common data types

### isEmail
Check if the input is a valid email address.

```js [js]
isEmail('hello@usemods.com')
```

::example{:code=isEmail('hello@usemods.com')}
::

### isNumber
Check if the input is a valid number.

```js [js]
isNumber('123')
```

::example{:code=isNumber('123')}
::

### isURL
Check if the input is a valid URL.

```js [js]
isURL('https://usemods.com')
```

::example{:code=isURL('https://usemods.com')}
::

### isUUID
Check if the input is a valid UUID.

```js [js]
isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')
```

::example{:code=isUUID('c9bf9e57-1685-4c89-bafb-ff5af830be8a')}
::

### isJSON
Check if the input is a valid JSON string.

```js [js]
isJSON('{"hello": "world"}')
```

::example{:code=isJSON('{"hello": "world"}')}
::

### isHex
Check if the input is a valid hexadecimal color code.

```js [js]
isHex('#fff')
```

::example{:code=isHex('#fff')}
::

### isEmpty
Check if the input is an empty string.

```js [js]
isEmpty('')
```

::example{:code=isEmpty('')}
::

### isAlpha
Check if the input contains only alphabetic characters.

```js [js]
isAlpha('hello')
```

::example{:code=isAlpha('hello')}
::

### isAlphanumeric
Check if the input contains only alphanumeric characters.

```js [js]
isAlphanumeric('hello123')
```

::example{:code=isAlphanumeric('hello123')}
::

### isArray
Check if the input is an array.

```js [js]
isArray([1, 2, 3])
```

::example{:code=isArray([1, 2, 3])}
::

### isObject
Check if the input is an object.

```js [js]
isObject({ hello: 'world' })
```

::example{:code=isObject({ hello: 'world' })}
::

### isBoolean
Check if the input is a boolean value.

```js [js]
isBoolean(true)
```

::example{:code=isBoolean(true)}
::

### isFunction
Check if the input is a function.

```js [js]
isFunction(() => {})
```

::example{:code=isFunction(() => {})}
::

### isUndefined
Check if the input is undefined.

```js [js]
isUndefined(undefined)
```

::example{:code=isUndefined(undefined)}
::

### isNull
Check if the input is null.

```js [js]
isNull(null)
```

::example{:code=isNull(null)}
::

### isDate
Check if the input is a valid Date object.

```js [js]
isDate(new Date())
```

::example{:code=isDate(new Date())}
::

### isError
Check if the input is an Error object with a defined message.

```js [js]
isError(new Error('hello'))
```

::example{:code=isError(new Error('hello'))}
::

### isTime
Check if the input is a valid time in HH:mm format.

```js [js]
isTime('12:00')
```

::example{:code=isTime('12:00')}
::

### isLeapYear
Check if the input year is a leap year.

```js [js]
isLeapYear(2020)
```

::example{:code=isLeapYear(2020)}
::

### isPromise
Check if the input is a Promise object.

```js [js]
isPromise(new Promise(() => {}))
```

::example{:code=isPromise(new Promise(() => {}))}
::

### isSet
Check if the input is a Set object.

```js [js]
isSet(new Set())
```

::example{:code=isSet(new Set())}
::

### isMap
Check if the input is a Map object.

```js [js]
isMap(new Map())
```

::example{:code=isMap(new Map())}
::

### isEven
Check if the number is even.

```js [js]
isEven(2)
```

::example{:code=isEven(2)}
::

### isOdd
Check if the number is odd.

```js [js]
isOdd(3)
```

::example{:code=isOdd(3)}
::

### isPositive
Check if the number is positive.

```js [js]
isPositive(1)
```

::example{:code=isPositive(1)}
::

### isNegative
Check if the number is negative.

```js [js]
isNegative(-1)
```

::example{:code=isNegative(-1)}
::

### isZero
Check if the number is zero.

```js [js]
isZero(0)
```

::example{:code=isZero(0)}
::

### isPrime
Check if the number is a prime number.

```js [js]
isPrime(7)
```

::example{:code=isPrime(7)}
::

### isOptimusPrime
Check if the string is equal to "Optimus Prime".

```js [js]
isOptimusPrime('Optimus Prime')
```

::example{:code=isOptimusPrime('Optimus Prime')}
::

### isPalindrome
Check if the string is a palindrome.

```js [js]
isPalindrome('racecar')
```

::example{:code=isPalindrome('racecar')}
::

### isInteger
Check if the number is an integer.

```js [js]
isInteger(1)
```

::example{:code=isInteger(1)}
::

### isFloat
Check if the number is a float.

```js [js]
isFloat(1.5)
```

::example{:code=isFloat(1.5)}
::

### isBetween
Check if the number is between the specified range.

```js [js]
isBetween(5, 1, 10)
```

::example{:code=isBetween(5, 1, 10)}
::

### isDivisibleBy
Check if the number is divisible by the specified number.

```js [js]
isDivisibleBy(10, 2)
```

::example{:code=isDivisibleBy(10, 2)}
::

### isCreditCardNumber
Check if the input is a valid credit card number.

```js [js]
isCreditCardNumber('4242424242424242')
```

::example{:code=isCreditCardNumber('4242424242424242')}
::

### isIPAddress
Check if the input is a valid IP address.

```js [js]
isIPAddress('127.0.0.0')
```

::example{:code=isIPAddress('127.0.0.0')}
::

### isMACAddress
Check if the input is a valid MAC address.

```js [js]
isMACAddress('00:00:00:00:00:00')
```

::example{:code=isMACAddress('00:00:00:00:00:00')}
::

### isLatLng
Check if the input is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.

```js [js]
isLatLng('40.741895,-73.989308')
```

::example{:code=isLatLng('40.741895,-73.989308')}
::

### isLatitude
Check if the input is a valid latitude coordinate.

```js [js]
isLatitude('40.741895')
```

::example{:code=isLatitude('40.741895')}
::

### isLongitude
Check if the input is a valid longitude coordinate.

```js [js]
isLongitude('-73.989308')
```

::example{:code=isLongitude('-73.989308')}
::

### isPort
Check if the input is a valid port number.

```js [js]
isPort(3000)
```

::example{:code=isPort(3000)}
::

### isPresent
Checks if a property and value pair exists in an object.

```js [js]
hasPropertyValue({ hello: 'world' }, 'hello', 'world')
```

::example{:code=hasPropertyValue({ hello: 'world' }, 'hello', 'world')}
::

### hasProperties
Check if a property exists in an object without checking its value.

```js [js]
hasProperties({ hello: 'world' }, ['hello', 'world'])
```

::example{:code=hasProperties({ hello: 'world' }, ['hello', 'world'])}
::

### hasKeys
Check if an array of key exists in an object

```js [js]
hasKeys({ hello: 'world' }, ['hello', 'world',])
```

::example{:code=hasKeys({ hello: 'world' }, ['hello', 'world',])}
::

