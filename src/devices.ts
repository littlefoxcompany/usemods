// title: Devices
// description: Client-side detections user's machines.
// lead: Nice device you got there!

/**
 * Check if you're a server-side user.
 */
export function isSsr(): boolean {
    return typeof window === "undefined";
}

/**
 * Adds device detection to your project's body class
 */
export function addDeviceClasses(): void {
    if (isSsr()) return;
    const classes = [];

    if (isIos()) classes.push('ios');
    if (isWindows()) classes.push('windows');
    if (isLinux()) classes.push('linux');
    if (isAndroid()) classes.push('android');
    if (isMac()) classes.push('mac');
    if (isChrome()) classes.push('chrome');
    if (isFirefox()) classes.push('firefox');
    if (isSafari()) classes.push('safari');
    if (isEdge()) classes.push('edge');
    if (isMobile()) classes.push('mobile');
    if (isTablet()) classes.push('tablet');
    if (isDesktop()) classes.push('desktop');
    if (isPortrait()) classes.push('portrait');
    if (isLandscape()) classes.push('landscape');
    if (isBot()) classes.push('bot');

    document.body.className = classes.join(' ');

    // const updateOrientationClasses = () => {
    //     document.body.classList.toggle('portrait', isPortrait());
    //     document.body.classList.toggle('landscape', isLandscape());
    // };

    // let resizeTimeout: number | null = null;

    // const debouncedUpdateOrientationClasses = () => {
    //     if (resizeTimeout) { clearTimeout(resizeTimeout) }
    //     resizeTimeout = window.setTimeout(updateOrientationClasses, 500);
    // };

    // window.addEventListener('resize', debouncedUpdateOrientationClasses);

    // const removeEventListener = () => {
    //     window.removeEventListener('resize', debouncedUpdateOrientationClasses);
    // };
    // removeEventListener();
}

/**
 * Check if you're a passionate iPhone fan.
 */
export function isIos(): boolean {
    if (isSsr()) return false;
    return /iPad|iPhone|iPod/.test(navigator.platform);
}

/**
 * Check if you're a fervent Windows fan.
 */
export function isWindows(): boolean {
    if (isSsr()) return false;
    return /Win/.test(navigator.platform);
}

/**
 * Check if you're a devoted Linux fan.
 */
export function isLinux(): boolean {
    if (isSsr()) return false;
    return /Linux/.test(navigator.platform);
}

/**
 * Check if you're a zealous Android fan.
 */
export function isAndroid(): boolean {
    if (isSsr()) return false;
    return /Android/.test(navigator.platform);
}

/**
 * Check if you're a staunch Mac fan.
 */
export function isMac(): boolean {
    if (isSsr()) return false;
    return /Mac/.test(navigator.platform);
}

/**
 * Check if you're a die-hard Chrome fan.
 */
export function isChrome(): boolean {
    if (isSsr()) return false;
    return /Chrome/.test(navigator.userAgent);
}

/**
 * Check if you're a dedicated Firefox fan.
 */
export function isFirefox(): boolean {
    if (isSsr()) return false;
    return /Firefox/.test(navigator.userAgent);
}

/**
 * Check if you're a lonely Safari fan.
 */
export function isSafari(): boolean {
    if (isSsr()) return false;
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}

/**
 * Check if you're an ardent Edge fan.
 */
export function isEdge(): boolean {
    if (isSsr()) return false;
    return /Edge/.test(navigator.userAgent);
}

/**
 * Check if you're rocking a mobile
 */
export function isMobile(): boolean {
    if (isSsr()) return false;
    return /Mobi/.test(navigator.userAgent);
}

/**
 * Check if you're tablet user
 */
export function isTablet(): boolean {
    if (isSsr()) return false;
    return /Tablet/.test(navigator.userAgent);
}

/**
 * Check if you're pro desktop user
 */
export function isDesktop(): boolean {
    if (isSsr()) return false;
    return !isMobile() && !isTablet();
}

/**
 * Check if you're portrait
 */
export function isPortrait(): boolean {
    if (isSsr()) return false;
    return window.innerHeight > window.innerWidth;
}

/**
 * Check if you're landscape
 */
export function isLandscape(): boolean {
    if (isSsr()) return false;
    return window.innerWidth > window.innerHeight;
}

/**
 * Check if you're a cyborg or a bot
 */
export function isBot(): boolean {
    if (isSsr()) return false;
    return /bot|googlebot|crawler|spider|robot|crawling/i.test(
        navigator.userAgent
    );
}