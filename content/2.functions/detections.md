# Detections

#### A collection of detections for common data types

### export function detectDevice
Detect the current device type (Mobile or Desktop)  @example detectDevice()  @returns `Mobile` or `Desktop`

```js [js]
detectDevice()
```

### export function detectOS
Detect the current operating system  @example detectOS()  @returns `Windows`, `Mac`, `Linux`, `UNIX`, or `Unknown`

```js [js]
detectOS()
```

### export function detectBrowser
Detects the user's browser based on the user agent string.  @example detectBrowser()  @returns `Chrome`, `Firefox`, `Safari`, `Opera`, `Edge`, `IE`, or `Unknown`

```js [js]
detectBrowser()
```

### export function detectActiveBrowser
Detect if the browser window is currently active or hidden.  @example detectActiveBrowser()

```js [js]
detectActiveBrowser()
```

### export function detectColorScheme
Detect the current color scheme (Light or Dark)  @example detectColorScheme()  @returns `Light` or `Dark`

```js [js]
detectColorScheme()
```

### export function detectBrowserLanguage
Detect the current browser language  @example detectBrowserLanguage()

```js [js]
detectBrowserLanguage()
```

### export function detectGeolocation
Detect the current user's location  @example detectUserLocation()  @returns `US`, `UK`, `CA`, `AU`, `NZ`, `EU`, `Unknown`

```js [js]
detectUserLocation()
```

### export function detectUserTimezone
Detect the current user's Timezone  @example detectUserTimezone()

```js [js]
detectUserTimezone()
```

### export function detectDeviceOrientation
Detect the currect device orientation  @example detectDeviceOrientation()

```js [js]
detectDeviceOrientation()
```

### export function detectDeviceMotion
Detect the current device motion  @example detectDeviceMotion()

```js [js]
detectDeviceMotion()
```

### 
Detect the browser's window size  @example detectWindowSize()

```js [js]
detectWindowSize()
```

### 
Detect the screen or monitor size  @example detectScreenSize()

```js [js]
detectScreenSize()
```

### 
Detect the container size via ID  @example detectContainerSize('container')

```js [js]
detectContainerSize('container')
```

### export function detectTailwindBreakpoint
Detect the current breakpoint based on Tailwind CSS breakpoints  @example detectTailwindBreakpoint()

```js [js]
detectTailwindBreakpoint()
```

### export function detectTailwindContainerBreakpoint
Detect the current container breakpoint based on Tailwind CSS breakpoints  @example detectTailwindContainerBreakpoint('container')

```js [js]
detectTailwindContainerBreakpoint('container')
```

### 
Detect the current scroll position of the window  @example detectScrollPosition()

```js [js]
detectScrollPosition()
```

### 
Detect the current mouse position within the window  @example detectMousePosition(event)

```js [js]
detectMousePosition(event)
```

### 
Detect the current mouse position within a container via ID  @example detectRelativeMousePosition('container', event)

```js [js]
detectRelativeMousePosition('container', event)
```

### export function detectNetworkStatus
Detect the current network status of the user (Online or Offline)  @example detectNetworkStatus()

```js [js]
detectNetworkStatus()
```

### 
Detect the current memory status of the user (RAM)  @example detectMemoryStatus()

```js [js]
detectMemoryStatus()
```

### export function detectPerformance
Detect the current performance status of the user (CPU, RAM, etc.)  @example detectPerformance()

```js [js]
detectPerformance()
```

### 
Detect the current storage status of the user (Local Storage, Session Storage)  @example detectStorage()

```js [js]
detectStorage()
```

### 
Returns a cookie value by name  @example detectCookie('name')

```js [js]
detectCookie('name')
```

### 
Returns a local storage value by name and parses it into JSON  @example detectLocalStorage('name')

```js [js]
detectLocalStorage('name')
```

### 
Returns a session storage value by name and parses it into JSON  @example detectSessionStorage('name')

```js [js]
detectSessionStorage('name')
```

### 
Returns a value from the URL by name  @example detectURLParameters('http://url.com/page?name=Adam&surname=Smith')

```js [js]
detectURLParameters('http://url.com/page?name=Adam&surname=Smith')
```

### 
Returns a value from the URL hash by name  @example detectURLHashParameters()

```js [js]
detectURLHashParameters()
```

### 
Retrieves and returns the parameters from the URL search query string  @example detectURLSearchParameters()

```js [js]
detectURLSearchParameters()
```

### 
Returns the current URL  @example detectURL()

```js [js]
detectURL()
```

### 
Returns the current domain  @example detectDomain()

```js [js]
detectDomain()
```

### 
Returns the current IP address  @example detectIP()

```js [js]
detectIP()
```

### 
Returns the current port  @example detectPort()

```js [js]
detectPort()
```

### 
Returns the current protocol (HTTP or HTTPS)  @example detectProtocol()

```js [js]
detectProtocol()
```

### 
Returns the URL of the referring page (the page that linked to the current page)  @example detectReferrer()

```js [js]
detectReferrer()
```

### export function detectCachedData
Retrieves cached entries and optionally filters the entries based on a provided key  @example detectCachedData('abc')

```js [js]
detectCachedData('abc')
```

### 
Detects if the element is currently in the viewport  @example isInViewport(element)

```js [js]
isInViewport(element)
```

### 
Detects if the element is currently in the container via ID  @example isInContainer(element, 'container')

```js [js]
isInContainer(element, 'container')
```

### 
Detects if the element is overflowing vertically  @example isOverflowingY(element)

```js [js]
isOverflowingY(element)
```

### 
Detects if the element is overflowing horizontally  @example isOverflowingX(element)

```js [js]
isOverflowingX(element)
```

### 
Detects if the element is scrollable (overflowing vertically or horizontally)  @example isScrollable(element)

```js [js]
isScrollable(element)
```

### 
Detects if the elements is an HTML element  @example isElement(element)

```js [js]
isElement(element)
```

