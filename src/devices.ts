// title: Devices
// description: Client-side detections user's machines.
// lead: Nice device you got there!

/**
 * Check if you're a server-side user.
 */
export function isServerSide(): boolean {
  if (typeof window !== 'undefined') {
    return false
  }
  if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    return true
  }
  return true
}


/**
 * Detects the user's device based on the user agent string and returns the information as an object.
 */
export function detectUserDevice(userAgent?: string): object | string {
  if (isServerSide() && !userAgent) return 'server'
  const result = userAgent || navigator.userAgent.toLowerCase()
  return {
    os: detectOS(result),
    browser: detectBrowser(result),
    device: detectDevice(result)
  }
}

/**
 * Adds detected devices as classes to your project's body class
 */
export function addDeviceClasses(userAgent?: string): void {
  if (isServerSide() && !userAgent) return

  const deviceInfo = detectUserDevice(userAgent) as { os: string, browser: string, device: string }

  // Gather the classes
  const classes = ['os', 'browser', 'device']
    .map(key => (deviceInfo as any)[key]?.toLowerCase())
    .filter(value => value && value !== 'unknown')

  // If no classes, return
  if (classes.length === 0) return

  // Add the classes to the body
  document.body.classList.add(...classes)
}

/**
 * Detect the current device type (Mobile or Desktop)
 */
export function detectDevice(userAgent?: string): string {
  const result = userAgent || navigator.userAgent
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(result) ? 'Mobile' : 'Desktop'
}

/**
 * Detect the current browser
 */
export function detectBrowser(userAgent?: string): string {
  if (isServerSide() && !userAgent) return 'server'
  const result = userAgent || navigator.userAgent.toLowerCase()
  switch (true) {
    case result.includes('chrome') && !result.includes('edg'): return 'Chrome'
    case result.includes('firefox'): return 'Firefox'
    case result.includes('safari') && !result.includes('chrome') && !result.includes('crios') && !result.includes('fxios'): return 'Safari'
    case result.includes('edg'): return 'Edge'
    default: return 'unknown'
  }
}

/**
 * Detect the current operating system
 */
export function detectOS(userAgent?: string): string {
  if (isServerSide() && !userAgent) return 'server'
  const result = userAgent || navigator.userAgent.toLowerCase()
  switch (true) {
    case result.includes('iphone') || result.includes('ipad'): return 'iOS'
    case result.includes('android'): return 'Android'
    case result.includes('windows'): return 'Windows'
    case result.includes('mac'): return 'Mac'
    case result.includes('linux'): return 'Linux'
    case result.includes('x11'): return 'UNIX'
    default: return 'unknown'
  }
}

/**
 * Check if you're a passionate iPhone fan.
 */
export function isIos(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /iPad|iPhone|iPod|iPadOS|iPhoneOS/.test(result)
}

/**
 * Check if you're a zealous Android fan.
 */
export function isAndroid(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Android/.test(result)
}

/**
 * Check if you're a staunch Mac fan.
 */
export function isMac(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Mac/.test(result)
}

/**
 * Check if you're a fervent Windows fan.
 */
export function isWindows(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Win/.test(result)
}

/**
 * Check if you're a devoted Linux fan.
 * @info Fun fact, most Linux users will tell you they have Linux before the function does.
 */
export function isLinux(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Linux/.test(result)
}

/**
 * Check if you're a die-hard Chrome fan.
 */
export function isChrome(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Chrome/.test(result)
}

/**
 * Check if you're a dedicated Firefox fan.
 */
export function isFirefox(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Firefox/.test(result)
}

/**
 * Check if you're a lonely Safari fan.
 */
export function isSafari(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Safari/.test(result) && !/Chrome/.test(result)
}

/**
 * Check if you're an ardent Edge fan.
 */
export function isEdge(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Edge/.test(result)
}

/**
 * Check if you're rocking a mobile
 */
export function isMobile(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Mobi/.test(result)
}

/**
 * Check if you're tablet user
 */
export function isTablet(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /Tablet/.test(result)
}

/**
 * Check if you're pro desktop user
 */
export function isDesktop(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return !isMobile(result) && !isTablet(result)
}

/**
 * Check if you're portrait
 */
export function isPortrait(): boolean {
  if (isServerSide()) return false
  return window.innerHeight > window.innerWidth
}

/**
 * Check if you're landscape
 */
export function isLandscape(): boolean {
  if (isServerSide()) return false
  return window.innerWidth > window.innerHeight
}

/**
 * Check if you're a cyborg or a bot
 */
export function isBot(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(result)
}

/**
 * Check if you're a human
 */
export function isHuman(userAgent?: string): boolean {
  if (isServerSide() && !userAgent) return false
  const result = userAgent || navigator.userAgent
  return !isBot(result)
}

/**
 * Check if you're a developer
 */
export function isDeveloper(): boolean {
  return process.env.NODE_ENV === 'development'
}
