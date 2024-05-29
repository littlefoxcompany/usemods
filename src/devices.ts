// title: Devices
// description: Client-side detections user's machines.
// lead: Nice device you got there!

/**
 * Check if you're a server-side user.
 */
export function isServerSide(): boolean {
  return typeof window === 'undefined'
}

/**
 * Detects the user's device based on the user agent string and returns the information as an object.
 */
export function detectUserDevice(): object | string {
  if (isServerSide()) return 'server'
  return {
    os: detectOS(),
    browser: detectBrowser(),
    device: detectDevice()
  }
}

/**
 * Adds detected devices as classes to your project's body class
 */
export function addDeviceClasses(): void {
  if (isServerSide()) return
  
  // detectUserDevice

  const deviceInfo = detectUserDevice()
  const classes = []

  if (typeof deviceInfo === 'object') {
    if (deviceInfo.os) classes.push(`${deviceInfo.os.toLowerCase()}`)
    if (deviceInfo.browser) classes.push(`${deviceInfo.browser.toLowerCase()}`)
    if (deviceInfo.device) classes.push(`${deviceInfo.device.toLowerCase()}`)
  } else {
    classes.push(deviceInfo)
  }
  
  if (classes.length === 0) return
  document.body.className = classes.join(' ')
}

/**
 * Detect the current device type (Mobile or Desktop)
 */
export function detectDevice(): string {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

/**
 * Detect the current browser
 */
export function detectBrowser(): string {
  if (isServerSide()) return 'server'
  const userAgent = navigator.userAgent.toLowerCase()
  switch (true) {
    case userAgent.includes('chrome'):
      return 'Chrome'
    case userAgent.includes('firefox'):
      return 'Firefox'
    case /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent):
      return 'Safari'
    case userAgent.includes('edge'):
      return 'Edge'
    default:
      return 'Unknown'
  }
}

/**
 * Detect the current operating system
 */
export function detectOS(): string {
  if (isServerSide()) return 'server'
  const userAgent = navigator.userAgent.toLowerCase()
  switch (true) {
    case userAgent.includes('win'):
      return 'Windows'
    case userAgent.includes('mac'):
      return 'Mac'
    case userAgent.includes('linux'):
      return 'Linux'
    case userAgent.includes('x11'):
      return 'UNIX'
    case userAgent.includes('android'):
      return 'Android'
    case userAgent.includes('iphone'):
      return 'iOS'
    default:
      return 'Unknown'
  }
}

/**
 * Check if you're a passionate iPhone fan.
 */
export function isIos(): boolean {
  if (isServerSide()) return false
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

/**
 * Check if you're a zealous Android fan.
 */
export function isAndroid(): boolean {
  if (isServerSide()) return false
  return /Android/.test(navigator.userAgent)
}

/**
 * Check if you're a staunch Mac fan.
 */
export function isMac(): boolean {
  if (isServerSide()) return false
  return /Mac/.test(navigator.userAgent)
}

/**
 * Check if you're a fervent Windows fan.
 */
export function isWindows(): boolean {
  if (isServerSide()) return false
  return /Win/.test(navigator.userAgent)
}

/**
 * Check if you're a devoted Linux fan.
 * @info Fun fact, most Linux users will tell you they have Linux before the function does.
 */
export function isLinux(): boolean {
  if (isServerSide()) return false
  return /Linux/.test(navigator.userAgent)
}

/**
 * Check if you're a die-hard Chrome fan.
 */
export function isChrome(): boolean {
  if (isServerSide()) return false
  return /Chrome/.test(navigator.userAgent)
}

/**
 * Check if you're a dedicated Firefox fan.
 */
export function isFirefox(): boolean {
  if (isServerSide()) return false
  return /Firefox/.test(navigator.userAgent)
}

/**
 * Check if you're a lonely Safari fan.
 */
export function isSafari(): boolean {
  if (isServerSide()) return false
  return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
}

/**
 * Check if you're an ardent Edge fan.
 */
export function isEdge(): boolean {
  if (isServerSide()) return false
  return /Edge/.test(navigator.userAgent)
}

/**
 * Check if you're rocking a mobile
 */
export function isMobile(): boolean {
  if (isServerSide()) return false
  return /Mobi/.test(navigator.userAgent)
}

/**
 * Check if you're tablet user
 */
export function isTablet(): boolean {
  if (isServerSide()) return false
  return /Tablet/.test(navigator.userAgent)
}

/**
 * Check if you're pro desktop user
 */
export function isDesktop(): boolean {
  if (isServerSide()) return false
  return !isMobile() && !isTablet()
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
export function isBot(): boolean {
  if (isServerSide()) return false
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(
    navigator.userAgent
  )
}

/**
 * Check if you're a human
 */
export function isHuman(): boolean {
  return !isBot()
}

/**
 * Check if you're a developer
 */
export function isDeveloper(): boolean {
  return process.env.NODE_ENV === 'development'
}