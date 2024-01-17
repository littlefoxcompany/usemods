# Detections

A collection of detections for common data types

### detectDevice

Detect the current device type (Mobile or Desktop)

```js [js]
detectDevice()
```

::detectDevice
::

### detectOS

Detect the current operating system

```js [js]
detectOS()
```

::detectOS
::

### detectBrowser

Detects the user's browser based on the user agent string.

```js [js]
detectBrowser()
```

::detectBrowser
::

### detectActiveBrowser

Detect if the browser window is currently active or hidden.

```js [js]
detectActiveBrowser()
```

::detectActiveBrowser
::

### detectColorScheme

Detect the current color scheme (Light or Dark)

```js [js]
detectColorScheme()
```

::detectColorScheme
::

### detectBrowserLanguage

Detect the current browser language

```js [js]
detectBrowserLanguage()
```

::detectBrowserLanguage
::

### detectUserLocation

Detect the current user's location

```js [js]
detectUserLocation()
```

::detectUserLocation
::

### detectUserTimezone

Detect the current user's Timezone

```js [js]
detectUserTimezone()
```

::detectUserTimezone
::

### detectDeviceOrientation

Detect the currect device orientation

```js [js]
detectDeviceOrientation()
```

::detectDeviceOrientation
::

### detectDeviceMotion

Detect the current device motion

```js [js]
detectDeviceMotion()
```

::detectDeviceMotion
::

### detectWindowSize

Detect the browser's window size

```js [js]
detectWindowSize()
```

::detectWindowSize
::

### detectScreenSize

Detect the screen or monitor size

```js [js]
detectScreenSize()
```

::detectScreenSize
::

### detectContainerSize

Detect the container size via ID

```js [js]
detectContainerSize('container')
```

::detectContainerSize
::

### detectTailwindBreakpoint

Detect the current breakpoint based on Tailwind CSS breakpoints

```js [js]
detectTailwindBreakpoint()
```

::detectTailwindBreakpoint
::

### detectTailwindContainerBreakpoint

Detect the current container breakpoint based on Tailwind CSS breakpoints

```js [js]
detectTailwindContainerBreakpoint('container')
```

::detectTailwindContainerBreakpoint
::

### detectScrollPosition

Detect the current scroll position of the window

```js [js]
detectScrollPosition()
```

::detectScrollPosition
::

### detectMousePosition

Detect the current mouse position within the window

```js [js]
detectMousePosition(event)
```

::detectMousePosition
::

### detectRelativeMousePosition

Detect the current mouse position within a container via ID

```js [js]
detectRelativeMousePosition('container', event)
```

::detectRelativeMousePosition
::

### detectNetworkStatus

Detect the current network status of the user (Online or Offline)

```js [js]
detectNetworkStatus()
```

::detectNetworkStatus
::

### detectMemoryStatus

Detect the current memory status of the user (RAM)

```js [js]
detectMemoryStatus()
```

::detectMemoryStatus
::

### detectCookie

Returns a cookie value by name

```js [js]
detectCookie('name')
```

::detectCookie
::

### detectLocalStorage

Returns a local storage value by name and parses it into JSON

```js [js]
detectLocalStorage('name')
```

::detectLocalStorage
::

### detectSessionStorage

Returns a session storage value by name and parses it into JSON

```js [js]
detectSessionStorage('name')
```

::detectSessionStorage
::

### detectURLParameters

Returns a value from the URL by name

```js [js]
detectURLParameters('http://url.com/page?name=Adam&surname=Smith')
```

::detectURLParameters
::

### detectURLHashParameters

Returns a value from the URL hash by name

```js [js]
detectURLHashParameters()
```

::detectURLHashParameters
::

### detectURLSearchParameters

@example detectURLSearchParameters()

```js [js]
detectURLSearchParameters()
```

::detectURLSearchParameters
::

### detectURL

Returns the current URL

```js [js]
detectURL()
```

::detectURL
::

### detectDomain

Returns the current domain

```js [js]
detectDomain()
```

::detectDomain
::

### detectIP

Returns the current IP address

```js [js]
detectIP()
```

::detectIP
::

### detectPort

Returns the current port

```js [js]
detectPort()
```

::detectPort
::

### detectProtocol

Returns the current protocol (HTTP or HTTPS)

```js [js]
detectProtocol()
```

::detectProtocol
::

### detectReferrer

Returns the URL of the referring page (the page that linked to the current page)

```js [js]
detectReferrer()
```

::detectReferrer
::

### detectCachedData

Retrieves cached entries and optionally filters the entries based on a provided key

```js [js]
detectCachedData('abc')
```

::detectCachedData
::

### detectInViewport

Detects if the element is currently in the viewport

```js [js]
detectInViewport(element)
```

::detectInViewport
::

### detectInContainer

Detects if the element is currently in the container via ID

```js [js]
detectInContainer(element, 'container')
```

::detectInContainer
::

### detectOverflowingY

Detects if the element is overflowing vertically

```js [js]
detectOverflowingY(element)
```

::detectOverflowingY
::

### detectOverflowingX

Detects if the element is overflowing horizontally

```js [js]
detectOverflowingX(element)
```

::detectOverflowingX
::

### detectScrollable

Detects if the element is scrollable (overflowing vertically or horizontally)

```js [js]
detectScrollable()
```

::detectScrollable
::

### detectElement

Detects if the elements is an HTML element

```js [js]
detectElement()
```

::detectElement
::

