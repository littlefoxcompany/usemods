---
title: Actions
description: A collection of useful actions
icon: undefined
---

::pagetitle
# Actions
A collection of useful actions
::

::pagefunction
### scrollToAnchor
Scrolls to the element with the specified ID.
```js [js]
scrollToAnchor('#my-anchor')
```
:::scrollToAnchor
:::
::

::pagefunction
### scrollToTop
Smoothly scroll to the top of the page
```js [js]
scrollToTop()
```
:::scrollToTop
:::
::

::pagefunction
### scrollToBottom
Smoothly scroll to the bottom of the page
```js [js]
scrollToBottom()
```
:::scrollToBottom
:::
::

::pagefunction
### toggleBodyScroll
Toggles the body scroll with the specified class name
```js [js]
toggleBodyScroll('overflow-hidden')
```
:::toggleBodyScroll
:::
::

::pagefunction
### toggleElementScroll
Toggles the element scroll
```js [js]
toggleElementScroll(document.querySelector('#my-element'))
```
:::toggleElementScroll
:::
::

::pagefunction
### copyToClipboard
Copies a text to the clipboard
```js [js]
copyToClipboard()
```
:::copyToClipboard
:::
::

::pagefunction
### toggleFullScreen
Toggles the fullscreen mode
```js [js]
toggleFullScreen()
```
:::toggleFullScreen
:::
::

::pagefunction
### toggleDarkMode
Toggles the dark mode
```js [js]
toggleDarkMode()
```
:::toggleDarkMode
:::
::

::pagefunction
### redirect
Redirects to a new URL
```js [js]
redirect('https://example.com')
```
:::redirect
:::
::

::pagefunction
### resetForm
Resets a form
```js [js]
resetForm(document.querySelector('form'))
```
:::resetForm
:::
::

::pagefunction
### focusOn
Focuses on an element
```js [js]
focusOn(document.querySelector('#my-element'))
```
:::focusOn
:::
::

::pagefunction
### focusOnFirst
Focuses on the first element
```js [js]
focusOnFirst(document.querySelector('#my-element'))
```
:::focusOnFirst
:::
::

::pagefunction
### focusOnLast
Focuses on the last element
```js [js]
focusOnLast(document.querySelector('#my-element'))
```
:::focusOnLast
:::
::

::pagefunction
### focusTrap
Sets up a keyboard trap within an HTML element, allowing the focus to cycle between the first and last focusable elements when the Tab key is pressed.
```js [js]
focusTrap(document.querySelector('#my-element'))
```
:::focusTrap
:::
::

