# Modifiers

## What are modifiers?
Modifiers are a key feature of Mods that allow you to easily modify and enhance your content. They are small pieces of code that can be applied to your JS to add functionality, validation or style.

## Widont
Widont is a simple modifier that prevents widows in your text. It replaces the last space in a text with a non-breaking space.

```js [js]
widont('cool cool cool')
```
```js [template]
{{ widont('cool cool cool') }}
```
```html [preview]
cool cool&nbsp;cool
```

## Widont
Widont is a simple modifier that prevents widows in your text. It replaces the last space in a text with a non-breaking space.

::code-group
```js [Script]
    widont('cool cool cool')
```
```js [Template]
    {{ widont('cool cool cool') }}
```
```html [preview]
    cool cool&nbsp;cool
```
::

::test



