---
title: Detections
description: A collection of detections for common data types
icon: undefined
---

::pagetitle
# Detections
A collection of detections for common data types
::

::pagefunction
### detectDevice
Detect the current device type (Mobile or Desktop)
```js [js]
detectDevice()
```
:::detectDevice
:::
::

::pagefunction
### detectOS
Detect the current operating system
```js [js]
detectOS()
```
:::detectOS
:::
::

Detects the user's browser based on the user agent string.
::pagefunction
### detectActiveBrowser
Detect if the browser window is currently active or hidden.
```js [js]
detectActiveBrowser()
```
:::detectActiveBrowser
:::
::

::pagefunction
### detectColorScheme
Detect the current color scheme (Light or Dark)
```js [js]
detectColorScheme()
```
:::detectColorScheme
:::
::

::pagefunction
### detectBrowserLanguage
Detect the current browser language
```js [js]
detectBrowserLanguage()
```
:::detectBrowserLanguage
:::
::

::pagefunction
### detectUserLocation
Detect the current user's location
```js [js]
detectUserLocation()
```
:::detectUserLocation
:::
::

::pagefunction
### detectUserTimezone
Detect the current user's Timezone
```js [js]
detectUserTimezone()
```
:::detectUserTimezone
:::
::

::pagefunction
### detectDeviceOrientation
Detect the currect device orientation
```js [js]
detectDeviceOrientation()
```
:::detectDeviceOrientation
:::
::

::pagefunction
### detectDeviceMotion
Detect the current device motion
```js [js]
detectDeviceMotion()
```
:::detectDeviceMotion
:::
::

::pagefunction
### detectWindowSize
Detect the browser's window size
```js [js]
detectWindowSize()
```
:::detectWindowSize
:::
::

::pagefunction
### detectScreenSize
Detect the screen or monitor size
```js [js]
detectScreenSize()
```
:::detectScreenSize
:::
::

::pagefunction
### detectContainerSize
Detect the container size via ID
```js [js]
detectContainerSize('container')
```
:::detectContainerSize
:::
::

::pagefunction
### detectTailwindBreakpoint
Detect the current breakpoint based on Tailwind CSS breakpoints
```js [js]
detectTailwindBreakpoint()
```
:::detectTailwindBreakpoint
:::
::

::pagefunction
### detectTailwindContainerBreakpoint
Detect the current container breakpoint based on Tailwind CSS breakpoints
```js [js]
detectTailwindContainerBreakpoint('container')
```
:::detectTailwindContainerBreakpoint
:::
::

::pagefunction
### detectScrollPosition
Detect the current scroll position of the window
```js [js]
detectScrollPosition()
```
:::detectScrollPosition
:::
::

::pagefunction
### detectMousePosition
Detect the current mouse position within the window
```js [js]
detectMousePosition(event)
```
:::detectMousePosition
:::
::

::pagefunction
### detectRelativeMousePosition
Detect the current mouse position within a container via ID
```js [js]
detectRelativeMousePosition('container', event)
```
:::detectRelativeMousePosition
:::
::

::pagefunction
### detectNetworkStatus
Detect the current network status of the user (Online or Offline)
```js [js]
detectNetworkStatus()
```
:::detectNetworkStatus
:::
::

::pagefunction
### detectMemoryStatus
Detect the current memory status of the user (RAM)
```js [js]
detectMemoryStatus()
```
:::detectMemoryStatus
:::
::

::pagefunction
### detectCookie
Returns a cookie value by name
```js [js]
detectCookie('name')
```
:::detectCookie
:::
::

::pagefunction
### detectLocalStorage
Returns a local storage value by name and parses it into JSON
```js [js]
detectLocalStorage('name')
```
:::detectLocalStorage
:::
::

::pagefunction
### detectSessionStorage
Returns a session storage value by name and parses it into JSON
```js [js]
detectSessionStorage('name')
```
:::detectSessionStorage
:::
::

::pagefunction
### detectURLParameters
Returns a value from the URL by name
```js [js]
detectURLParameters('http://url.com/page?name=Adam&surname=Smith')
```
:::detectURLParameters
:::
::

::pagefunction
### detectURLHashParameters
Returns a value from the URL hash by name
```js [js]
detectURLHashParameters()
```
:::detectURLHashParameters
:::
::

::pagefunction
### detectURLSearchParameters
@example detectURLSearchParameters()
```js [js]
detectURLSearchParameters()
```
:::detectURLSearchParameters
:::
::

::pagefunction
### detectURL
Returns the current URL
```js [js]
detectURL()
```
:::detectURL
:::
::

::pagefunction
### detectDomain
Returns the current domain
```js [js]
detectDomain()
```
:::detectDomain
:::
::

::pagefunction
### detectIP
Returns the current IP address
```js [js]
detectIP()
```
:::detectIP
:::
::

::pagefunction
### detectPort
Returns the current port
```js [js]
detectPort()
```
:::detectPort
:::
::

::pagefunction
### detectProtocol
Returns the current protocol (HTTP or HTTPS)
```js [js]
detectProtocol()
```
:::detectProtocol
:::
::

::pagefunction
### detectReferrer
Returns the URL of the referring page (the page that linked to the current page)
```js [js]
detectReferrer()
```
:::detectReferrer
:::
::

::pagefunction
### detectCachedData
Retrieves cached entries and optionally filters the entries based on a provided key
```js [js]
detectCachedData('abc')
```
:::detectCachedData
:::
::

::pagefunction
### detectInViewport
Detects if the element is currently in the viewport
```js [js]
detectInViewport(element)
```
:::detectInViewport
:::
::

::pagefunction
### detectInContainer
Detects if the element is currently in the container via ID
```js [js]
detectInContainer(element, 'container')
```
:::detectInContainer
:::
::

::pagefunction
### detectOverflowingY
Detects if the element is overflowing vertically
```js [js]
detectOverflowingY(element)
```
:::detectOverflowingY
:::
::

::pagefunction
### detectOverflowingX
Detects if the element is overflowing horizontally
```js [js]
detectOverflowingX(element)
```
:::detectOverflowingX
:::
::

::pagefunction
### detectScrollable
Detects if the element is scrollable (overflowing vertically or horizontally)
```js [js]
detectScrollable()
```
:::detectScrollable
:::
::

::pagefunction
### detectElement
Detects if the elements is an HTML element
```js [js]
detectElement()
```
:::detectElement
:::
::

