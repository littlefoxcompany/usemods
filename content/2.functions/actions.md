# Actions

A collection of useful actions

Scrolls to the element with the specified ID.

```js [js]
scrollToAnchor('#my-anchor')
```

Smoothly scroll to the top of the page

```js [js]
scrollToTop()
```

Smoothly scroll to the bottom of the page

```js [js]
scrollToBottom()
```

Toggles the body scroll with the specified class name

```js [js]
toggleBodyScroll('overflow-hidden')
```

Toggles the element scroll

```js [js]
toggleElementScroll(document.querySelector('#my-element'))
```

Copies a text to the clipboard

```js [js]
copyToClipboard()
```

Toggles the fullscreen mode

```js [js]
toggleFullScreen()
```

Toggles the dark mode

```js [js]
toggleDarkMode()
```

Redirects to a new URL

```js [js]
redirect('https://example.com')
```

Resets a form

```js [js]
resetForm(document.querySelector('form'))
```

Focuses on an element

```js [js]
focusOn(document.querySelector('#my-element'))
```

Focuses on the first element

```js [js]
focusOnFirst(document.querySelector('#my-element'))
```

Focuses on the last element

```js [js]
focusOnLast(document.querySelector('#my-element'))
```

Sets up a keyboard trap within an HTML element, allowing the focus to cycle between the first and last focusable elements when the Tab key is pressed.

```js [js]
focusTrap(document.querySelector('#my-element'))
```

