# Detections

A collection of detections for common data types

### detectDevice

::detectDevice
::

Detect the current device type (Mobile or Desktop)

```js [js]
detectDevice()
```

**Returns:** `Mobile` or `Desktop`

### detectOS

::detectOS
::

Detect the current operating system

```js [js]
detectOS()
```

**Returns:** `Windows`, `Mac`, `Linux`, `UNIX`, or `Unknown`

### detectBrowser

::detectBrowser
::

Detects the user's browser based on the user agent string.

```js [js]
detectBrowser()
```

**Returns:** `Chrome`, `Firefox`, `Safari`, `Opera`, `Edge`, `IE`, or `Unknown`

### detectActiveBrowser

::detectActiveBrowser
::

Detect if the browser window is currently active or hidden.

```js [js]
detectActiveBrowser()
```

### detectColorScheme

::detectColorScheme
::

Detect the current color scheme (Light or Dark)

```js [js]
detectColorScheme()
```

**Returns:** `Light` or `Dark`

### detectBrowserLanguage

::detectBrowserLanguage
::

Detect the current browser language

```js [js]
detectBrowserLanguage()
```

### detectUserLocation

::detectUserLocation
::

Detect the current user's location

```js [js]
detectUserLocation()
```

**Returns:** `US`, `UK`, `CA`, `AU`, `NZ`, `EU`, `Unknown`

### detectUserTimezone

::detectUserTimezone
::

Detect the current user's Timezone

```js [js]
detectUserTimezone()
```

### detectDeviceOrientation

::detectDeviceOrientation
::

Detect the currect device orientation

```js [js]
detectDeviceOrientation()
```

### detectDeviceMotion

::detectDeviceMotion
::

Detect the current device motion

```js [js]
detectDeviceMotion()
```

### detectWindowSize

::detectWindowSize
::

Detect the browser's window size

```js [js]
detectWindowSize()
```

### detectScreenSize

::detectScreenSize
::

Detect the screen or monitor size

```js [js]
detectScreenSize()
```

### detectContainerSize

::detectContainerSize
::

Detect the container size via ID

```js [js]
detectContainerSize('container')
```

### detectTailwindBreakpoint

::detectTailwindBreakpoint
::

Detect the current breakpoint based on Tailwind CSS breakpoints

```js [js]
detectTailwindBreakpoint()
```

### detectTailwindContainerBreakpoint

::detectTailwindContainerBreakpoint
::

Detect the current container breakpoint based on Tailwind CSS breakpoints

```js [js]
detectTailwindContainerBreakpoint('container')
```

### detectScrollPosition

::detectScrollPosition
::

Detect the current scroll position of the window

```js [js]
detectScrollPosition()
```

### detectMousePosition

::detectMousePosition
::

Detect the current mouse position within the window

```js [js]
detectMousePosition(event)
```

### detectRelativeMousePosition

::detectRelativeMousePosition
::

Detect the current mouse position within a container via ID

```js [js]
detectRelativeMousePosition('container', event)
```

### detectNetworkStatus

::detectNetworkStatus
::

Detect the current network status of the user (Online or Offline)

```js [js]
detectNetworkStatus()
```

### detectMemoryStatus

::detectMemoryStatus
::

Detect the current memory status of the user (RAM)

```js [js]
detectMemoryStatus()
```

### detectCookie

::detectCookie
::

Returns a cookie value by name

```js [js]
detectCookie('name')
```

### detectLocalStorage

::detectLocalStorage
::

Returns a local storage value by name and parses it into JSON

```js [js]
detectLocalStorage('name')
```

### detectSessionStorage

::detectSessionStorage
::

Returns a session storage value by name and parses it into JSON

```js [js]
detectSessionStorage('name')
```

### detectURLParameters

::detectURLParameters
::

Returns a value from the URL by name

```js [js]
detectURLParameters('http://url.com/page?name=Adam&surname=Smith')
```

### detectURLHashParameters

::detectURLHashParameters
::

Returns a value from the URL hash by name

```js [js]
detectURLHashParameters()
```

### detectURLSearchParameters

::detectURLSearchParameters
::

Retrieves and returns the parameters from the URL search query string

```js [js]
detectURLSearchParameters()
```

### detectURL

::detectURL
::

Returns the current URL

```js [js]
detectURL()
```

### detectDomain

::detectDomain
::

Returns the current domain

```js [js]
detectDomain()
```

### detectIP

::detectIP
::

Returns the current IP address

```js [js]
detectIP()
```

### detectPort

::detectPort
::

Returns the current port

```js [js]
detectPort()
```

### detectProtocol

::detectProtocol
::

Returns the current protocol (HTTP or HTTPS)

```js [js]
detectProtocol()
```

### detectReferrer

::detectReferrer
::

Returns the URL of the referring page (the page that linked to the current page)

```js [js]
detectReferrer()
```

### detectCachedData

::detectCachedData
::

Retrieves cached entries and optionally filters the entries based on a provided key

```js [js]
detectCachedData('abc')
```

### detectInViewport

::detectInViewport
::

Detects if the element is currently in the viewport

```js [js]
detectInViewport(element)
```

### detectInContainer

::detectInContainer
::

Detects if the element is currently in the container via ID

```js [js]
detectInContainer(element, 'container')
```

### detectOverflowingY

::detectOverflowingY
::

Detects if the element is overflowing vertically

```js [js]
detectOverflowingY(element)
```

### detectOverflowingX

::detectOverflowingX
::

Detects if the element is overflowing horizontally

```js [js]
detectOverflowingX(element)
```

### detectScrollable

::detectScrollable
::

Detects if the element is scrollable (overflowing vertically or horizontally)

```js [js]
detectScrollable()
```

### detectElement

::detectElement
::

Detects if the elements is an HTML element

```js [js]
detectElement()
```

