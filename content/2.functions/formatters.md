# Formatters

#### A collection of formatters for common data types

### formatCurrency
Format numbers into local currency

```js
formatCurrency(1234.56)
```

```html
$1,234.56
```

### formatCurrencyUnits
Format a number as a currency in thousands, millions, or billions

```js
formatCurrencyUnits(1234567890)
```

```html
$1.23B
```

### formatTime
Format time into hours, minutes, and seconds

```js
formatTime(3723)
```

```html
1hr 2min 3s
```

### formatDatetime
Format Unix timestamp into a datetime string

```js
formatDatetime(1619097600)
```

```html
2021-04-22 00:00:00
```

### formatPercentage
Format a number into a percentage

```js
formatPercentage(0.1234)
```

```html
12.34%
```

### formatList
Create a string of comma-separated values from an array of strings with an optional conjunction.

```js
commaList(['one', 'two', 'three'])
```

```html
one, two and three
```

