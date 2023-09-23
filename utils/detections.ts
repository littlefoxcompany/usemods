export function getDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

export function getActiveBrowser(): boolean {
  return document.hidden
}

export function getColorScheme(): string {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getBrowser(): string {
  return navigator.userAgent.toLowerCase()
}

export function getOS(): string {
  const userAgent = navigator.userAgent.toLowerCase()
  switch (true) {
    case userAgent.indexOf('win') !== -1:
      return 'Windows'
    case userAgent.indexOf('mac') !== -1:
      return 'Mac'
    case userAgent.indexOf('linux') !== -1:
      return 'Linux'
    case userAgent.indexOf('x11') !== -1:
      return 'UNIX'
    default:
      return 'Unknown'
  }
}

export function getBrowserLanguage(): string {
  return navigator.language
}

export function getGeolocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export function getDeviceOrientation(): string {
  return window.screen.orientation.type
}

export function getDeviceMotion(): Promise<DeviceMotionEvent> {
  return new Promise((resolve, reject) => {
    window.addEventListener('devicemotion', resolve, { once: true })
    setTimeout(reject, 5000)
  })
}

export function getDeviceLight(): Promise<number> {
  return new Promise((resolve, reject) => {
    window.addEventListener(
      'devicelight',
      (evt: Event) => {
        resolve((evt as any).value)
      },
      { once: true }
    )
    setTimeout(reject, 5000)
  })
}

export function getDeviceProximity(): Promise<number> {
  return new Promise((resolve, reject) => {
    window.addEventListener(
      'deviceproximity',
      (evt: Event) => {
        resolve((evt as any).value)
      },
      { once: true }
    )
    setTimeout(reject, 5000)
  })
}

export function getWindowSize(): { width: number; height: number } {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export function getScreenSize(): { width: number; height: number } {
  return {
    width: window.screen.width,
    height: window.screen.height
  }
}

export function getContainerSize(id: string): { width: number; height: number } {
  const element = document.getElementById(id)
  if (!element) return { width: 0, height: 0 }
  return {
    width: element.clientWidth,
    height: element.clientHeight
  }
}

export function getScrollPosition(): { x: number; y: number } {
  return {
    x: window.scrollX,
    y: window.scrollY
  }
}

export function getMousePosition(e: MouseEvent) {
  return {
    x: e.pageX,
    y: e.pageY
  }
}

export function getRelativeMousePosition(id: string, e: MouseEvent) {
  const element = document.getElementById(id)
  if (!element) return { x: 0, y: 0 }
  const rect = element.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

export function getScreenOrientation(): string {
  return window.screen.orientation.type
}

export function getNetworkStatus(): string {
  return navigator.onLine ? 'Online' : 'Offline'
}

export function getBatteryStatus() {}

export function getMemoryStatus(): { totalJSHeapSize: number; usedJSHeapSize: number; jsHeapSizeLimit: number } {
  return {
    totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
    usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
    jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
  }
}

export function getPerformance(): Promise<PerformanceNavigationTiming> {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', () => {
      resolve(performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)
    })
    setTimeout(reject, 5000)
  })
}

export function getStorage(): { localStorage: number; sessionStorage: number } {
  return {
    localStorage: JSON.stringify(localStorage).length,
    sessionStorage: JSON.stringify(sessionStorage).length
  }
}

export function getCookie(name: string) {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

export function getLocalStorage(name: string) {
  const item = localStorage.getItem(name)
  if (item) return JSON.parse(item)
}

export function getSessionStorage(name: string) {
  const item = sessionStorage.getItem(name)
  if (item) return JSON.parse(item)
}
