// title: Actions
// description: A collection of useful actions

/**
 * Scrolls to the element with the specified ID.
 */
export function scrollToAnchor(id: string, callback?: Function): void {
  setTimeout(() => {
    const element = document.querySelector(id)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }, 180)

  if (callback) callback()
}

/**
 * Toggles the body scroll with the specified class name and a optional callback
 */
export function toggleBodyScroll(callback?: Function, className: string = 'fixed'): void {
  const body = document.body
  const isFixed = body.classList.contains(className)
  const scrollY = isFixed ? parseInt(body.style.top, 10) : window.scrollY

  body.style.top = isFixed ? '' : `-${scrollY}px`
  body.classList.toggle(className, !isFixed)
  if (isFixed) window.scrollTo(0, -scrollY)
  if (callback) callback()
}

/**
 * Toggles the element scroll with the specified class name and a optional callback
 */
export function toggleElementScroll(element: HTMLElement, callback?: () => void): void {
  if (!element) {
    console.warn('toggleElementScroll was called without a valid element.')
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
 * Copies a text to the clipboard with a callback
 */
export function copyToClipboard(text: string, callback?: Function): void {
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
 * Toggles the dark mode
 */
export function toggleDarkMode(callback?: Function): void {
  document.documentElement.classList.toggle('dark')
  if (callback) callback()
}

/**
 * Resets a form
 */
export function resetForm(form: HTMLFormElement): void {
  form.reset()
}

/**
 * Focuses on an element
 */
export function focusOn(element: HTMLElement): void {
  element.focus()
}

/**
 * Focuses on the first element
 */
export function focusOnFirst(element: HTMLElement): void {
  const input = element.querySelector('input')
  if (input) input.focus()
}

/**
 * Focuses on the last element
 */
export function focusOnLast(element: HTMLElement): void {
  const inputs = element.querySelectorAll('input')
  const input = inputs[inputs.length - 1]
  if (input) input.focus()
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
