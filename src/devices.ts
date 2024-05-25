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
 * Adds detected devices as classes to your project's body class
 * @info Unlike the detect functions this will only 
 */
export function addDeviceClasses(): void {
  if (isServerSide()) return
  
  const devices = new Map([
    [isIos, 'ios'],
    [isWindows, 'windows'],
    [isLinux, 'linux'],
    [isAndroid, 'android'],
    [isMac, 'mac'],
    [isChrome, 'chrome'],
    [isFirefox, 'firefox'],
    [isSafari, 'safari'],
    [isEdge, 'edge'],
    [isMobile, 'mobile'],
    [isTablet, 'tablet'],
    [isLandscape, 'landscape'],
    [isBot, 'bot']
  ])
  
  const classes = []
  
  for (const [check, className] of devices) {
    if (check()) classes.push(className)
  }
  
  document.body.className = classes.join(' ')
}

/**
 * Check if you're a passionate iPhone fan.
 */
export function isIos(): boolean {
  if (isServerSide()) return false
  return /iPad|iPhone|iPod/.test(navigator.platform)
}

/**
 * Check if you're a zealous Android fan.
 */
export function isAndroid(): boolean {
  if (isServerSide()) return false
  return /Android/.test(navigator.platform)
}

/**
 * Check if you're a staunch Mac fan.
 */
export function isMac(): boolean {
  if (isServerSide()) return false
  return /Mac/.test(navigator.platform)
}

/**
 * Check if you're a fervent Windows fan.
 */
export function isWindows(): boolean {
  if (isServerSide()) return false
  return /Win/.test(navigator.platform)
}

/**
 * Check if you're a devoted Linux fan.
 * @info Fun fact, most Linux users will tell you they have Linux before the function does.
 */
export function isLinux(): boolean {
  if (isServerSide()) return false
  return /Linux/.test(navigator.platform)
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