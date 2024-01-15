# Formatters

#### A collection of formatters for common data types

### export function formatCurrency
Format numbers into local currency  @example formatCurrency(1234.56)  @returns $1,234.56

```js [js]
formatCurrency(1234.56)
```

### export function formatValuation
Format numbers into valuations displayed in thounsands, millions or billions  @example formatValuation(1234567890)  @returns $1.23B

```js [js]
formatValuation(1234567890)
```

### export function formatTime
Format time into hours, minutes, and seconds  @example formatTime(3723)  @returns 1hr 2min 3s

```js [js]
formatTime(3723)
```

### export function formatDatetime
Format Unix timestamp into a datetime string  @example formatDatetime(1619097600)  @returns 2021-04-22 00:00:00

```js [js]
formatDatetime(1619097600)
```

### export function formatPercentage
Format a number into a percentage  @example formatPercentage(0.1234)  @returns 12.34%

```js [js]
formatPercentage(0.1234)
```

### export function formatList
Create a string of comma-separated values from an array of strings with an optional conjunction.  @param items - The array of strings.  @param limit - The maximum number of items to include before truncating.  @param conjunction - The conjunction before the last item e.g. "and" or "or".  @example commaList(['one', 'two', 'three'])  @returns one, two and three

```js [js]
commaList(['one', 'two', 'three'])
```

