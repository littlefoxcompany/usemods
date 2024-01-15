# Formatters

#### A collection of formatters for common data types

### formatCurrency
Format numbers into local currency

```js [js]
formatCurrency(1234.56)
```

::example{:code=formatCurrency(1234.56)}
::

### formatValuation
Format numbers into valuations displayed in thounsands, millions or billions

```js [js]
formatValuation(1234567890)
```

::example{:code=formatValuation(1234567890)}
::

### formatTime
Format time into hours, minutes, and seconds

```js [js]
formatTime(3723)
```

::example{:code=formatTime(3723)}
::

### formatDatetime
Format Unix timestamp into a datetime string

```js [js]
formatDatetime(1619097600)
```

::example{:code=formatDatetime(1619097600)}
::

### formatPercentage
Format a number into a percentage

```js [js]
formatPercentage(0.1234)
```

::example{:code=formatPercentage(0.1234)}
::

### formatList
Create a string of comma-separated values from an array of strings with an optional conjunction.

```js [js]
commaList(['one', 'two', 'three'])
```

::example{:code=commaList(['one', 'two', 'three'])}
::

