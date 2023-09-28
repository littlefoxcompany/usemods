This file contains functions that are related to numbers.

## random
Generates a random integer between the specified minimum and maximum values.

```js [js]
random(1, 10)
```

```html [template]
{{ random(1, 10) }}
```

```html [returns]
5
```

## sum
Calculates the sum of an array of numbers.

```js [js]
sum([1, 2, 3])
```

```html [template]
{{ sum([1, 2, 3]) }}
```

```html [returns]
6
```

## average
Calculates the average of an array of numbers.

```js [js]
average([1, 2, 3])
```

```html [template]
{{ average([1, 2, 3]) }}
```

```html [returns]
2
```

## median
Calculates the median of an array of numbers.

```js [js]
median([1, 2, 3])
```

```html [template]
{{ median([1, 2, 3]) }}
```

```html [returns]
2
```

## min
Finds the minimum value in an array of numbers.

```js [js]
min([1, 2, 3])
```

```html [template]
{{ min([1, 2, 3]) }}
```

```html [returns]
1
```

## max
Finds the maximum value in an array of numbers.

```js [js]
max([1, 2, 3])
```

```html [template]
{{ max([1, 2, 3]) }}
```

```html [returns]
3
```

## clamp
Clamps a number between the specified minimum and maximum values.

```js [js]
clamp(1, 10, 20)
```

```html [template]
{{ clamp(1, 10, 20) }}
```

```html [returns]
10
```

