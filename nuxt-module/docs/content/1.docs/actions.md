# Actions

A collection of useful actions

### scrollToAnchor

::scrollToAnchor
::

Scrolls to the element with the specified ID.

```js [js]
scrollToAnchor('#my-anchor')
```

### scrollToTop

::scrollToTop
::

Smoothly scroll to the top of the page

```js [js]
scrollToTop()
```

### scrollToBottom

::scrollToBottom
::

Smoothly scroll to the bottom of the page

```js [js]
scrollToBottom()
```

### toggleBodyScroll

::toggleBodyScroll
::

Toggles the body scroll with the specified class name

```js [js]
toggleBodyScroll('overflow-hidden')
```

### toggleElementScroll

::toggleElementScroll
::

Toggles the element scroll

```js [js]
toggleElementScroll(document.querySelector('#my-element'))
```

### copyToClipboard

::copyToClipboard
::

Copies a text to the clipboard

```js [js]
copyToClipboard()
```

### toggleFullScreen

::toggleFullScreen
::

Toggles the fullscreen mode

```js [js]
toggleFullScreen()
```

### toggleDarkMode

::toggleDarkMode
::

Toggles the dark mode

```js [js]
toggleDarkMode()
```

### redirect

::redirect
::

Redirects to a new URL

```js [js]
redirect('https://example.com')
```

### resetForm

::resetForm
::

Resets a form

```js [js]
resetForm(document.querySelector('form'))
```

### focusOn

::focusOn
::

Focuses on an element

```js [js]
focusOn(document.querySelector('#my-element'))
```

### focusOnFirst

::focusOnFirst
::

Focuses on the first element

```js [js]
focusOnFirst(document.querySelector('#my-element'))
```

### focusOnLast

::focusOnLast
::

Focuses on the last element

```js [js]
focusOnLast(document.querySelector('#my-element'))
```

### focusTrap

::focusTrap
::

Sets up a keyboard trap within an HTML element, allowing the focus to cycle between the first and last focusable elements when the Tab key is pressed.

```js [js]
focusTrap(document.querySelector('#my-element'))
```

