// title: Actions
// description: A collection of useful actions

/**
 * Scrolls to the element with the specified ID.
 * @example scrollToAnchor('#my-anchor')
 */
export function scrollToAnchor(id: string, callback?: () => void) {
  setTimeout(() => {
    const element = document.querySelector(id)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }, 180)

  if (callback) {
    setTimeout(callback, 180)
  }
}

/**
 * Smoothly scroll to the top of the page
 * @example scrollToTop()
 */
export function scrollToTop(callback?: () => void) {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 180)

  if (callback) {
    setTimeout(callback, 180)
  }
}

/**
 * Smoothly scroll to the bottom of the page
 * @example scrollToBottom()
 */
export function scrollToBottom(callback?: () => void) {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }, 180)

  if (callback) {
    setTimeout(callback, 180)
  }
}

/**
 * Toggles the body scroll with the specified class name
 * @example toggleBodyScroll('overflow-hidden')
 */
export function toggleBodyScroll(className: string) {
  document.body.classList.toggle(className)
}

/**
 * Toggles the element scroll
 * @example toggleElementScroll(document.querySelector('#my-element'))
 */
export function toggleElementScroll(element: HTMLElement, className: string) {
  element.classList.toggle(className)
}

/**
 * Copies a text to the clipboard
 * @example copyToClipboard()
 */
export function copyToClipboard(text: string, callback?: () => void) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      if (callback) callback()
    })
    .catch((error) => {
      if (callback) callback()
    })
}

/**
 * Toggles the fullscreen mode
 * @example toggleFullScreen()
 */
export function toggleFullScreen() {
  if (document.fullscreenElement) document.exitFullscreen()
  else document.documentElement.requestFullscreen()
}

/**
 * Toggles the dark mode
 * @example toggleDarkMode()
 */
export function toggleDarkMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', !prefersDarkMode)
}

/**
 * Redirects to a new URL
 * @example redirect('https://example.com')
 */
export function redirect(url: string) {
  window.location.href = url
}

/**
 * Resets a form
 * @example resetForm(document.querySelector('form'))
 */
export function resetForm(form: HTMLFormElement) {
  form.reset()
}

/**
 * Focuses on an element
 * @example focusOn(document.querySelector('#my-element'))
 */
export function focusOn(element: HTMLElement) {
  element.focus()
}

/**
 * Focuses on the first element
 * @example focusOnFirst(document.querySelector('#my-element'))
 */
export function focusOnFirst(element: HTMLElement) {
  const input = element.querySelector('input')
  if (input) {
    input.focus()
  }
}

/**
 * Focuses on the last element
 * @example focusOnLast(document.querySelector('#my-element'))
 */
export function focusOnLast(element: HTMLElement) {
  const inputs = element.querySelectorAll('input')
  const input = inputs[inputs.length - 1]
  if (input) {
    input.focus()
  }
}

/**
 *  Sets up a keyboard trap within an HTML element, allowing the focus to cycle between the first and last focusable elements when the Tab key is pressed.
 * @example focusTrap(document.querySelector('#my-element'))
 */
export function focusTrap(element: HTMLElement) {
  const focusableElements = element.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select')

  const firstFocusableElement = focusableElements[0] as HTMLElement
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement

  const KEYCODE_TAB = 9

  element.addEventListener('keydown', (event) => {
    const isTabPressed = event.key === 'Tab' || event.keyCode === KEYCODE_TAB

    if (!isTabPressed) {
      return
    }

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
