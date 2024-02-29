// title: Detections
// description: Client-side detections for various user and browser information. Perfect for personalisation, analytics or debugging weird and wonderful bugs. Please note we're working on making our examples reactive! 🚀

/**
 * Detect the current device type (Mobile or Desktop)
 */
export function detectDevice(): string {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

/**
 * Detect the current operating system
 */
export function detectOS(): string {
  const userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.includes('win')) return 'Windows'
  if (userAgent.includes('mac')) return 'Mac'
  if (userAgent.includes('linux')) return 'Linux'
  if (userAgent.includes('x11')) return 'UNIX'
  if (userAgent.includes('android')) return 'Android'
  if (userAgent.includes('iphone')) return 'iOS'
  return 'Unknown'
}

/**
 * Detect if the browser window is currently active or hidden.
 */
export function detectActiveBrowser(): boolean {
  return !document.hidden
}

/**
 * Detect the current color scheme (Light or Dark)
 */
export function detectColorScheme(): string {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Detect the current user's Timezone
 */
export function detectUserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

/**
 * Detect the currect device orientation
 */
export function detectDeviceOrientation(): string {
  return window.screen.orientation.type
}

/**
 * Detect the browser's window size
 */
export function detectWindowSize(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

/**
 * Detect the screen or monitor size
 */
export function detectScreenSize(): { width: number; height: number } {
  return {
    width: window.screen.width,
    height: window.screen.height
  }
}

/**
 * Detect the container size via ID
 */
// export function detectContainerSize(element: HTMLElement): { width: number; height: number } {
//   if (!element) return { width: 0, height: 0 }

//   const rect = element.getBoundingClientRect()

//   return {
//     width: rect.width,
//     height: rect.height
//   }
// }

/**
 * Detect the current breakpoint based on Tailwind CSS breakpoints
 */
export function detectBreakpoint(): string {
  const width = window.innerWidth
  if (width < 640) return 'xs'
  if (width < 768) return 'sm'
  if (width < 1024) return 'md'
  if (width < 1280) return 'lg'
  if (width < 1536) return 'xl'
  return '2xl'
}

/**
 * Detect any container breakpoint based on Tailwind CSS breakpoints
 */
export function detectContainerBreakpoint(element: HTMLElement): string {
  const width = element.getBoundingClientRect().width

  if (width < 320) return '@xs'
  if (width < 384) return '@sm'
  if (width < 448) return '@md'
  if (width < 512) return '@lg'
  if (width < 576) return '@xl'
  if (width < 672) return '@2xl'
  if (width < 768) return '@3xl'
  if (width < 896) return '@4xl'
  if (width < 1024) return '@5xl'
  if (width < 1152) return '@6xl'
  if (width < 1280) return '@7xl'
  return '@7xl'
}

/**
 * Detect the current scroll position of the window
 */
export function detectScrollPosition(): { x: number; y: number } {
  return {
    x: window.scrollX,
    y: window.scrollY
  }
}

/**
 * Detect the absolute mouse position with the page
 */
export function detectMousePosition(event: MouseEvent): { x: number; y: number } {
  return {
    x: event.pageX,
    y: event.pageY
  }
}

/**
 * Detect the relative mouse position with the window size
 */
export function detectRelativeMousePosition(event: MouseEvent): { x: number; y: number } {
  const { innerWidth, innerHeight } = window
  return {
    x: event.clientX / innerWidth,
    y: event.clientY / innerHeight
  }
}

/**
 * Detect the current network status of the user (Online or Offline)
 */
export function detectNetworkStatus(): string {
  return navigator.onLine ? 'Online' : 'Offline'
}

/**
 * Returns the current URL
 */
export function detectUrl(): string {
  return window.location.href
}

/**
 * Returns the path of the current URL in an array
 */
export function detectUrlPath(): string[] {
  return window.location.pathname.split('/').filter((p) => p)
}

/**
 * Returns a value from the URL by name
 */
export function detectUrlParams(): { [key: string]: string }[] | null {
  const searchParams = new URLSearchParams(window.location.search)
  const paramsArray = []

  for (const [key, value] of searchParams.entries()) {
    paramsArray.push({ [key]: value })
  }

  return paramsArray.length > 0 ? paramsArray : null
}

/**
 * Returns a value from the URL hash by name
 */
export function detectUrlHash(): string | null {
  return window.location.hash.replace('#', '')
}

/**
 * Returns the current IP address
 */
export function detectHost(): string {
  return window.location.host
}

/**
 * Returns the current port
 */
export function detectPort(): string {
  return window.location.port
}

/**
 * Detects if the element is currently in the viewport
 */
// export function detectInViewport(element: HTMLElement): boolean {
//   const rect = element.getBoundingClientRect()
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   )
// }

/**
 * Detects if the element is currently in the container via ID
 */
// export function detectInContainer(element: HTMLElement, id: string): boolean {
//   const rect = element.getBoundingClientRect()
//   const container = document.getElementById(id)
//   if (!container) return false
//   const containerRect = container.getBoundingClientRect()
//   return rect.top >= containerRect.top && rect.left >= containerRect.left && rect.bottom <= containerRect.bottom && rect.right <= containerRect.right
// }

// /**
//  * Detect the current memory status of the user (RAM)
//  */
// export function detectMemoryStatus(): { totalJSHeapSize: number; usedJSHeapSize: number; jsHeapSizeLimit: number } {
//   return {
//     totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
//     usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
//     jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
//   }
// }

// /**
//  * Returns a cookie value by name
//  */
// export function detectCookie(name: string) {
//   const value = '; ' + document.cookie
//   const parts = value.split('; ' + name + '=')
//   if (parts.length === 2) return parts.pop()?.split(';').shift()
// }

// /**
//  * Returns a local storage value by name and parses it into JSON
//  */
// export function detectLocalStorage(name: string): any {
//   const item = localStorage.getItem(name)
//   if (item) return JSON.parse(item)
// }

// /**
//  * Returns a session storage value by name and parses it into JSON
//  */
// export function detectSessionStorage(name: string) {
//   const item = sessionStorage.getItem(name)
//   if (item) return JSON.parse(item)
// }
