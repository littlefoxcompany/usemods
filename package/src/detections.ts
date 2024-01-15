// title: Detections
// description: A collection of detections for common data types

/**
 * Detect the current device type (Mobile or Desktop)
 * @example detectDevice()
 * @returns `Mobile` or `Desktop`
 */
export function detectDevice(): string {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

/**
 * Detect the current operating system
 * @example detectOS()
 * @returns `Windows`, `Mac`, `Linux`, `UNIX`, or `Unknown`
 */
export function detectOS(): string {
  const userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.includes('win')) return 'Windows'
  if (userAgent.includes('mac')) return 'Mac'
  if (userAgent.includes('linux')) return 'Linux'
  if (userAgent.includes('x11')) return 'UNIX'
  return 'Unknown'
}

/**
 * Detects the user's browser based on the user agent string.
 * @example detectBrowser()
 * @returns `Chrome`, `Firefox`, `Safari`, `Opera`, `Edge`, `IE`, or `Unknown`
 */
export function detectBrowser(): string {
  return navigator.userAgent.toLowerCase()
}

/**
 * Detect if the browser window is currently active or hidden.
 * @example detectActiveBrowser()
 */
export function detectActiveBrowser(): boolean {
  return !document.hidden
}

/**
 * Detect the current color scheme (Light or Dark)
 * @example detectColorScheme()
 * @returns `Light` or `Dark`
 */
export function detectColorScheme(): string {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Detect the current browser language
 * @example detectBrowserLanguage()
 */
export function detectBrowserLanguage(): string {
  return navigator.language
}

/**
 * Detect the current user's location
 * @example detectUserLocation()
 * @returns `US`, `UK`, `CA`, `AU`, `NZ`, `EU`, `Unknown`
 */
export function detectGeolocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

/**
 * Detect the current user's Timezone
 * @example detectUserTimezone()
 */
export function detectUserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

/**
 * Detect the currect device orientation
 * @example detectDeviceOrientation()
 */
export function detectDeviceOrientation(): string {
  return window.screen.orientation.type
}

/**
 * Detect the current device motion
 * @example detectDeviceMotion()
 */
export function detectDeviceMotion(): Promise<DeviceMotionEvent> {
  return new Promise((resolve, reject) => {
    window.addEventListener('devicemotion', resolve, { once: true })
    setTimeout(reject, 5000)
  })
}

/**
 * Detect the browser's window size
 * @example detectWindowSize()
 */
export function detectWindowSize(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

/**
 * Detect the screen or monitor size
 * @example detectScreenSize()
 */
export function detectScreenSize(): { width: number; height: number } {
  return {
    width: window.screen.width,
    height: window.screen.height
  }
}

/**
 * Detect the container size via ID
 * @example detectContainerSize('container')
 */
export function detectContainerSize(id: string): { width: number; height: number } {
  const element = document.getElementById(id)
  if (!element) return { width: 0, height: 0 }
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  }
}

/**
 * Detect the current breakpoint based on Tailwind CSS breakpoints
 * @example detectTailwindBreakpoint()
 */
export function detectTailwindBreakpoint(): string {
  const width = window.innerWidth
  switch (true) {
    case width < 640:
      return 'xs'
    case width < 768:
      return 'sm'
    case width < 1024:
      return 'md'
    case width < 1280:
      return 'lg'
    case width < 1536:
      return 'xl'
    default:
      return '2xl'
  }
}

/**
 * Detect the current container breakpoint based on Tailwind CSS breakpoints
 * @example detectTailwindContainerBreakpoint('container')
 */
export function detectTailwindContainerBreakpoint(id: string): string {
  const width = detectContainerSize(id).width
  switch (true) {
    case width < 320:
      return '@xs'
    case width < 384:
      return '@sm'
    case width < 448:
      return '@md'
    case width < 512:
      return '@lg'
    case width < 576:
      return '@xl'
    case width < 672:
      return '@2xl'
    case width < 768:
      return '@3xl'
    case width < 896:
      return '@4xl'
    case width < 1024:
      return '@5xl'
    case width < 1152:
      return '@6xl'
    case width < 1280:
      return '@7xl'
    default:
      return '@7xl'
  }
}

/**
 * Detect the current scroll position of the window
 * @example detectScrollPosition()
 */
export function detectScrollPosition(): { x: number; y: number } {
  return {
    x: window.scrollX,
    y: window.scrollY
  }
}

/**
 * Detect the current mouse position within the window
 * @example detectMousePosition(event)
 */
export function detectMousePosition(event: MouseEvent) {
  return {
    x: event.pageX,
    y: event.pageY
  }
}

/**
 * Detect the current mouse position within a container via ID
 * @example detectRelativeMousePosition('container', event)
 */
export function detectRelativeMousePosition(id: string, e: MouseEvent) {
  const element = document.getElementById(id)
  if (!element) return { x: 0, y: 0 }
  const rect = element.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

/**
 * Detect the current network status of the user (Online or Offline)
 * @example detectNetworkStatus()
 */
export function detectNetworkStatus(): string {
  return navigator.onLine ? 'Online' : 'Offline'
}

/**
 * Detect the current memory status of the user (RAM)
 * @example detectMemoryStatus()
 */
export function detectMemoryStatus(): { totalJSHeapSize: number; usedJSHeapSize: number; jsHeapSizeLimit: number } {
  return {
    totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
    usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
    jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
  }
}

/**
 * Returns a cookie value by name
 * @example detectCookie('name')
 */
export function detectCookie(name: string) {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

/**
 * Returns a local storage value by name and parses it into JSON
 * @example detectLocalStorage('name')
 */
export function detectLocalStorage(name: string): any {
  const item = localStorage.getItem(name)
  if (item) return JSON.parse(item)
}

/**
 * Returns a session storage value by name and parses it into JSON
 * @example detectSessionStorage('name')
 */
export function detectSessionStorage(name: string) {
  const item = sessionStorage.getItem(name)
  if (item) return JSON.parse(item)
}

/**
 * Returns a value from the URL by name
 * @example detectURLParameters('http://url.com/page?name=Adam&surname=Smith')
 */
export function detectURLParameters(url: string, param?: string) {
  const params = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a: any, v: any) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {})

  if (param) {
    return params[param] || null
  }

  return params
}

/**
 * Returns a value from the URL hash by name
 * @example detectURLHashParameters()
 */
export function detectURLHashParameters() {
  return detectURLParameters(window.location.hash)
}

/**
 * Retrieves and returns the parameters from the URL search query string
 * @example detectURLSearchParameters()
 */
export function detectURLSearchParameters() {
  return detectURLParameters(window.location.search)
}

/**
 * Returns the current URL
 * @example detectURL()
 */
export function detectURL(): string {
  return window.location.href
}

/**
 * Returns the current domain
 * @example detectDomain()
 */
export function detectDomain(): string {
  return window.location.hostname
}

/**
 * Returns the current IP address
 * @example detectIP()
 */
export function detectIP(): string {
  return window.location.host
}

/**
 * Returns the current port
 * @example detectPort()
 */
export function detectPort(): string {
  return window.location.port
}

/**
 * Returns the current protocol (HTTP or HTTPS)
 * @example detectProtocol()
 */
export function detectProtocol() {
  return window.location.protocol
}

/**
 * Returns the URL of the referring page (the page that linked to the current page)
 * @example detectReferrer()
 */
export function detectReferrer() {
  return document.referrer
}

/**
 *  Retrieves cached entries and optionally filters the entries based on a provided key
 * @example detectCachedData('abc')
 */
export function detectCachedData(key?: string): PerformanceEntry[] {
  const cachedData = window.performance.getEntriesByType('resource')
  if (key) return cachedData.filter((data) => data.name.includes(key))
  return cachedData
}

// Is it?

/**
 * Detects if the element is currently in the viewport
 * @example detectInViewport(element)
 */
export function detectInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Detects if the element is currently in the container via ID
 * @example detectInContainer(element, 'container')
 */
export function detectInContainer(element: HTMLElement, id: string) {
  const rect = element.getBoundingClientRect()
  const container = document.getElementById(id)
  if (!container) return false
  const containerRect = container.getBoundingClientRect()
  return rect.top >= containerRect.top && rect.left >= containerRect.left && rect.bottom <= containerRect.bottom && rect.right <= containerRect.right
}

/**
 * Detects if the element is overflowing vertically
 * @example detectOverflowingY(element)
 */
export function detectOverflowingY(element: HTMLElement) {
  return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight
}

/**
 * Detects if the element is overflowing horizontally
 * @example detectOverflowingX(element)
 */
export function detectOverflowingX(element: HTMLElement) {
  return element.scrollWidth > element.clientWidth
}

/**
 * Detects if the element is scrollable (overflowing vertically or horizontally)
 * @example detectScrollable()
 */
export function detectScrollable(element: HTMLElement) {
  return detectOverflowingY(element) || detectOverflowingX(element)
}

/**
 * Detects if the elements is an HTML element
 * @example detectElement()
 */
export function detectElement(element: HTMLElement) {
  return element instanceof HTMLElement
}
