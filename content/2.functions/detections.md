# Detections

#### A collection of detections for common data types

## getDeviceType
Detect if the current device is a mobile device

```js [js]
getDeviceType()
```

## getRelativeMousePosition
Detect the current mouse position within a container via ID

```js [js]
getRelativeMousePosition('container', event)
```

## getNetworkStatus
Detect the current network status of the user (Online or Offline)

```js [js]
getNetworkStatus()
```

## getLocalStorage
Returns a local storage value by name and parses it into JSON

```js [js]
getLocalStorage('name')
```

## getSessionStorage
Returns a session storage value by name and parses it into JSON

```js [js]
getSessionStorage('name')
```

## getURLParameters
Returns a value from the URL by name

```js [js]
getURLParameters('http://url.com/page?name=Adam&surname=Smith')
```

## getURLHashParameters
Returns a value from the URL hash by name

```js [js]
getURLHashParameters()
```

## getURLSearchParameters
Retrieves and returns the parameters from the URL search query string

```js [js]
getURLSearchParameters()
```

## getURL
Returns the current URL

```js [js]
getURL()
```

## getDomain
Returns the current domain

```js [js]
getDomain()
```

## getIP
Returns the current IP address

```js [js]
getIP()
```

## getPort
Returns the current port

```js [js]
getPort()
```

## getProtocol
Returns the current protocol (HTTP or HTTPS)

```js [js]
getProtocol()
```

## getReferrer
Returns the URL of the referring page (the page that linked to the current page)

```js [js]
getReferrer()
```

## getCachedData
Retrieves cached entries and optionally filters the entries based on a provided key

```js [js]
getCachedData('abc')
```

## isInContainer
Detects if the element is currently in the container via ID

```js [js]
isInContainer(element, 'container')
```

## isOverflowingY
Detects if the element is overflowing vertically

```js [js]
isOverflowingY(element)
```

## isOverflowingX
Detects if the element is overflowing horizontally

```js [js]
isOverflowingX(element)
```

## isScrollable
Detects if the element is scrollable (overflowing vertically or horizontally)

```js [js]
isScrollable(element)
```

## isElement
Detects if the elements is an HTML element

```js [js]
isElement(element)
```

