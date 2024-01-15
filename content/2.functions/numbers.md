# 

#### This file contains functions that are related to numbers.

### export function random
Generates a random integer between the specified minimum and maximum values.  @example random(1, 10)  @returns 5

```js [js]
random(1, 10)
```

### export function sum
Calculates the sum of an array of numbers.  @example sum([1, 2, 3])  @returns 6

```js [js]
sum([1, 2, 3])
```

### export function mean
Calculates the mean of an array of numbers.  @example average([1, 2, 3])  @returns 2

```js [js]
average([1, 2, 3])
```

### export function average
Calculates the mean of an array of numbers.  @example average([1, 2, 3])  @returns 2

```js [js]
average([1, 2, 3])
```

### export function median
Calculates the median of an array of numbers.  @example median([1, 2, 3])  @returns 2

```js [js]
median([1, 2, 3])
```

### export function mode
Calculates the mode of an array of numbers.  @example mode([1, 2, 2, 3])  @returns 2

```js [js]
mode([1, 2, 2, 3])
```

### export function min
Finds the minimum value in an array of numbers.  @example min([1, 2, 3])  @returns 1

```js [js]
min([1, 2, 3])
```

### export function max
Finds the maximum value in an array of numbers.  @example max([1, 2, 3])  @returns 3

```js [js]
max([1, 2, 3])
```

### export function clamp
Clamps a number between the specified minimum and maximum values.  @example clamp(1, 10, 20)  @returns 10

```js [js]
clamp(1, 10, 20)
```

### 
Returns the minimum and maximum values in an array of numbers.  @example minMax([1, 2, 3, 4, 5])  @returns [1, 5]

```js [js]
minMax([1, 2, 3, 4, 5])
```

### export function range
Returns the difference between two values, expressed as a positive number.  @example range(-10, -20)  @returns 10

```js [js]
range(-10, -20)
```

### export function rangeAsPercentage
Returns the difference between two values, as a percentage.  @example differenceAsPercentage(10, 20)  @returns 100

```js [js]
differenceAsPercentage(10, 20)
```

### export function percentage
Returns the percentage of a value, relative to another value.  @example percentage(10, 100)  @returns 10

```js [js]
percentage(10, 100)
```

### export function standardDeviation
Returns the standard deviation of an array of numbers.  @example standardDeviation([1, 2, 3, 20, 120, 2000])  @returns 0.5

```js [js]
standardDeviation([1, 2, 3, 20, 120, 2000])
```

### export function skewness
Returns the measure of asymmetry of the probability distribution of an array of numbers.  The skewness value can be positive, zero, negative, or undefined.  @example skewness([1, 2, 3, 20, 120, 2000])  @returns 2.5

```js [js]
skewness([1, 2, 3, 20, 120, 2000])
```

### 
Return the frequency of all values (numbers, string or boolean) in an array as an object  @example frequency([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'])  @returns { '1': 1, '2': 1, '3': 4, a: 1, b: 1, c: 2 }

```js [js]
frequency([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'])
```

### 
Returns the fequency of a property value in an array  @example frequencyOfPropert([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'], 3)  @returns 4

```js [js]
frequencyOfPropert([1, 3, 2, 3, 3, 3, 'a', 'b', 'c', 'c'], 3)
```

