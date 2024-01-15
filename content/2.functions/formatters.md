# Formatters

A collection of formatters for common data types

### formatCurrency

Format numbers into local currency

```js [js]
formatCurrency(1234.56)
```

**Returns:** $1,234.56

### formatValuation

Format numbers into valuations displayed in thounsands, millions or billions

```js [js]
formatValuation(1234567890)
```

**Returns:** $1.23B

### formatTime

Format time into hours, minutes, and seconds

```js [js]
formatTime(3723)
```

**Returns:** 1hr 2min 3s

### formatDatetime

Format Unix timestamp into a datetime string

```js [js]
formatDatetime(1619097600)
```

**Returns:** 2021-04-22 00:00:00

### formatPercentage

Format a number into a percentage

```js [js]
formatPercentage(0.1234)
```

**Returns:** 12.34%

### formatList

Create a string of comma-separated values from an array of strings with an optional conjunction.

```js [js]
commaList(['one', 'two', 'three'])
```

**Returns:** one, two and three

