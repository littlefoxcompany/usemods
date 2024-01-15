# Detections

A collection of detections for common data types

### detectDevice

Detect the current device type (Mobile or Desktop)

```js [js]
detectDevice()
```

**Returns:** `Mobile` or `Desktop`

### detectOS

Detect the current operating system

```js [js]
detectOS()
```

**Returns:** `Windows`, `Mac`, `Linux`, `UNIX`, or `Unknown`

### detectBrowser

Detects the user's browser based on the user agent string.

```js [js]
detectBrowser()
```

**Returns:** `Chrome`, `Firefox`, `Safari`, `Opera`, `Edge`, `IE`, or `Unknown`

### detectActiveBrowser

Detect if the browser window is currently active or hidden.

```js [js]
detectActiveBrowser()
```

### detectColorScheme

Detect the current color scheme (Light or Dark)

```js [js]
detectColorScheme()
```

**Returns:** `Light` or `Dark`

### detectBrowserLanguage

Detect the current browser language

```js [js]
detectBrowserLanguage()
```

### detectGeolocation

Detect the current user's location

```js [js]
detectUserLocation()
```

**Returns:** `US`, `UK`, `CA`, `AU`, `NZ`, `EU`, `Unknown`

### detectUserTimezone

Detect the current user's Timezone

```js [js]
detectUserTimezone()
```

### detectDeviceOrientation

Detect the currect device orientation

```js [js]
detectDeviceOrientation()
```

### detectDeviceMotion

Detect the current device motion

```js [js]
detectDeviceMotion()
```

Detect the browser's window size

```js [js]
detectWindowSize()
```

Detect the screen or monitor size

```js [js]
detectScreenSize()
```

Detect the container size via ID

```js [js]
detectContainerSize('container')
```

### detectTailwindBreakpoint

Detect the current breakpoint based on Tailwind CSS breakpoints

```js [js]
detectTailwindBreakpoint()
```

### detectTailwindContainerBreakpoint

Detect the current container breakpoint based on Tailwind CSS breakpoints

```js [js]
detectTailwindContainerBreakpoint('container')
```

Detect the current scroll position of the window

```js [js]
detectScrollPosition()
```

Detect the current mouse position within the window

```js [js]
detectMousePosition(event)
```

Detect the current mouse position within a container via ID

```js [js]
detectRelativeMousePosition('container', event)
```

### detectNetworkStatus

Detect the current network status of the user (Online or Offline)

```js [js]
detectNetworkStatus()
```

Detect the current memory status of the user (RAM)

```js [js]
detectMemoryStatus()
```

### detectPerformance

Detect the current performance status of the user (CPU, RAM, etc.)

```js [js]
detectPerformance()
```

//   Detect the current storage status of the user (Local Storage, Session Storage)

```js [js]
detectStorage()
```

Returns a cookie value by name

```js [js]
detectCookie('name')
```

### detectLocalStorage

Returns a local storage value by name and parses it into JSON

```js [js]
detectLocalStorage('name')
```

Returns a session storage value by name and parses it into JSON

```js [js]
detectSessionStorage('name')
```

Returns a value from the URL by name

```js [js]
detectURLParameters('http://url.com/page?name=Adam&surname=Smith')
```

Returns a value from the URL hash by name

```js [js]
detectURLHashParameters()
```

Retrieves and returns the parameters from the URL search query string

```js [js]
detectURLSearchParameters()
```

### detectURL

Returns the current URL

```js [js]
detectURL()
```

### detectDomain

Returns the current domain

```js [js]
detectDomain()
```

### detectIP

Returns the current IP address

```js [js]
detectIP()
```

### detectPort

Returns the current port

```js [js]
detectPort()
```

Returns the current protocol (HTTP or HTTPS)

```js [js]
detectProtocol()
```

Returns the URL of the referring page (the page that linked to the current page)

```js [js]
detectReferrer()
```

### detectCachedData

Retrieves cached entries and optionally filters the entries based on a provided key

```js [js]
detectCachedData('abc')
```

Detects if the element is currently in the viewport

```js [js]
detectInViewport(element)
```

Detects if the element is currently in the container via ID

```js [js]
detectInContainer(element, 'container')
```

Detects if the element is overflowing vertically

```js [js]
detectOverflowingY(element)
```

Detects if the element is overflowing horizontally

```js [js]
detectOverflowingX(element)
```

Detects if the element is scrollable (overflowing vertically or horizontally)

```js [js]
detectScrollable(element)
```

Detects if the elements is an HTML element

```js [js]
detectElement()
```

