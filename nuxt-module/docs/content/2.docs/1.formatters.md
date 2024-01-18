---
title: Formatters
description: A collection of formatters for common data types
icon: undefined
---

::pagetitle
# Formatters
A collection of formatters for common data types
::

::pagefunction
### formatCurrency
Format numbers into local currency
```js [js]
formatCurrency(1234.56)
```
:::formatCurrency
:::
::

::pagefunction
### formatValuation
Format numbers into valuations displayed in thousands, millions or billions
```js [js]
formatValuation(1234567890)
```
:::formatValuation
:::
::

Format numbers into thousands, millions or billions
::pagefunction
### formatDuration
Format time into hours, minutes, and seconds
```js [js]
formatDuration(3723)
```
:::formatDuration
:::
::

::pagefunction
### formatUnixTime
Format Unix timestamp into a datetime string
```js [js]
formatUnixTime(1620000000)
```
:::formatUnixTime
:::
::

::pagefunction
### formatPercentage
Format a number into a percentage
```js [js]
formatPercentage(0.1234)
```
:::formatPercentage
:::
::

::pagefunction
### formatList
Create a string of comma-separated values from an array of strings with an optional conjunction.
```js [js]
formatList(['one', 'two', 'three'])
```
:::formatList
:::
::

::pagefunction
### title
Converts a string to title case following the Chicago Manual of Style rules.
```js [js]
title('the quick brown fox jumps over the lazy dog')
```
:::title
:::
::

