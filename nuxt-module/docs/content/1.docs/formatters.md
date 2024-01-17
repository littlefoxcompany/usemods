# Formatters

A collection of formatters for common data types

### formatCurrency

::formatCurrency
::

Format numbers into local currency

```js [js]
formatCurrency(1234.56)
```

**Returns:** $1,234.56

### formatValuation

::formatValuation
::

Format numbers into valuations displayed in thousands, millions or billions

```js [js]
formatValuation(1234567890)
```

**Returns:** $1.23B

Format numbers into thousands, millions or billions

### formatDuration

::formatDuration
::

Format time into hours, minutes, and seconds

```js [js]
formatDuration(3723)
```

**Returns:** 1hr 2min 3s

### formatDatetime

::formatDatetime
::

Format Unix timestamp into a datetime string

```js [js]
formatDatetime(1619097600)
```

**Returns:** 2021-04-22 00:00:00

### formatPercentage

::formatPercentage
::

Format a number into a percentage

```js [js]
formatPercentage(0.1234)
```

**Returns:** 12.34%

### formatList

::formatList
::

Create a string of comma-separated values from an array of strings with an optional conjunction.

```js [js]
formatList(['one', 'two', 'three'])
```

**Returns:** one, two and three

