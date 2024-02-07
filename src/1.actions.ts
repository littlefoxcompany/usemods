// title: Actions
// description: A collection of useful actions

/**
 * Scrolls to the element with the specified ID.
 */
export function scrollToAnchor(id: string): void {
  setTimeout(() => {
    const element = document.querySelector(id)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }, 180)
}

/**
 * Toggles the body scroll with the specified class name
 */
export function toggleBodyScroll(className: string): void {
  document.body.classList.toggle(className)
}

/**
 * Toggles the element scroll
 */
export function toggleElementScroll(element: HTMLElement, className: string): void {
  element.classList.toggle(className)
}

/**
 * Copies a text to the clipboard with a callback
 */
export function copyToClipboard(text: string, callback?: () => void): void {
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
export function toggleFullScreen(): void {
  if (document.fullscreenElement) document.exitFullscreen()
  else document.documentElement.requestFullscreen()
}

/**
 * Toggles the dark mode
 */
export function toggleDarkMode(): void {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', !prefersDarkMode)
}

/**
 * Redirects to a new URL
 */
export function redirect(url: string): void {
  window.location.href = url
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
