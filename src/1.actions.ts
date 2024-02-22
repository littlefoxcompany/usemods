// title: Actions
// description: A collection of useful actions for common tasks and interactions with the DOM.

/**
 * Smoothly scrolls to the element with the specified ID without scuffing up your URLs.
 */
export function scrollToAnchor(id: string, callback?: Function): void {
  setTimeout(() => {
    const selector = `#${id}`
    const element = document.querySelector(selector)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, 180)

  if (callback) callback()
}

/**
 * Toggles the body scroll with specified class names and a optional callback
 */
export function toggleBodyScroll(className: string = 'fixed', callback?: Function): void {
  const body = document.body
  const isFixed = body.classList.contains(className)
  const scrollY = isFixed ? parseInt(body.style.top, 10) : window.scrollY

  body.style.top = isFixed ? '' : `-${scrollY}px`
  body.classList.toggle(className, !isFixed)
  if (isFixed) window.scrollTo(0, -scrollY)
  if (callback) callback()
}

/**
 * Toggles the element scroll with specified class names and a optional callback
 */
export function toggleElementScroll(element: HTMLElement, callback?: () => void): void {
  if (!element) {
    console.warn('[MODS] toggleElementScroll was called without a valid element.')
    return
  }

  if (element.dataset.isScrollLocked === 'true') {
    element.style.overflow = ''
    delete element.dataset.isScrollLocked
  } else {
    element.style.overflow = 'hidden'
    element.dataset.isScrollLocked = 'true'
  }

  if (callback) callback()
}

/**
 * Copies a convereted string to the clipboard
 */
export function copyToClipboard(text: any, callback?: Function): void {
  text = String(text)
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    console.error('Clipboard API is not available')
    return
  }

  navigator.clipboard
    .writeText(String(text))
    .then(() => {
      if (callback) callback()
    })
    .catch((error) => {
      console.error('Failed to copy text: ', error)
    })
}

/**
 * Toggles the fullscreen mode
 */
export function toggleFullScreen(callback?: Function): void {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen().then(() => {
      if (callback) callback()
    })
  }
}

/**
 * Toggles through dark, light and system color modes
 */
export function toggleColorScheme(callback?: Function): void {
  let colorScheme = localStorage.getItem('color-scheme') || 'system'
  let nextColorScheme = colorScheme === 'dark' ? 'light' : colorScheme === 'light' ? 'system' : 'dark'
  localStorage.setItem('color-scheme', nextColorScheme)
  document.documentElement.className = `${nextColorScheme}`

  if (nextColorScheme === 'system') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }

  if (callback) callback()
}

/**
 * Resets a form to its initial state
 */
export function resetForm(form: HTMLFormElement): void {
  form.reset()
}

/**
 * Focuses on and scrolls to the first invalid input, select, or textarea element within a form.
 */
export function focusOnInvalid(element: HTMLElement): void {
  const input = element.querySelector('input:invalid, select:invalid, textarea:invalid') as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  if (input) {
    input.focus()
    input.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

/**
 * Focuses on the first element within the specified form
 */
export function focusOnFirst(element: HTMLElement): void {
  const input = element.querySelector('input') as HTMLInputElement
  if (input) {
    input.focus()
    input.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

/**
 * Focuses on the last element as well, incase you want that.
 */
export function focusOnLast(element: HTMLElement): void {
  const inputs = element.querySelectorAll('input') as NodeListOf<HTMLInputElement>
  const input = inputs[inputs.length - 1]
  if (input) {
    input.focus()
    input.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

/**
 *  Sets up a keyboard trap within an HTML element, allowing the focus to cycle between the first and last focusable elements when the Tab key is pressed.
 */
export function focusTrap(element: HTMLElement): void {
  const focusableElements = element.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select')
  const firstFocusableElement = focusableElements[0] as HTMLElement
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement
  const KEYCODE_TAB = 9

  element.addEventListener('keydown', (event) => {
    const isTabPressed = event.key === 'Tab' || event.keyCode === KEYCODE_TAB
    if (!isTabPressed) return

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus()
        event.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus()
        event.preventDefault()
      }
    }
  })
}
