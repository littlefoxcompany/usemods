// title: Actions
// description: A collection of useful actions

// <subtitle>
// subtitle: Page Actions
// description: A collection of useful actions
// </subtitle>

/**
 * Smoothly scroll to an anchor on the page
 * @function scrollToAnchor('#my-anchor')
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
 * @function scrollToTop()
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
 * @function scrollToBottom()
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
 * Toggles the body scroll
 * @function toggleBodyScroll()
 */
export function toggleBodyScroll() {
  document.body.classList.toggle('overflow-hidden')
}

/**
 * Toggles the element scroll
 * @function toggleElementScroll(document.querySelector('#my-element'))
 */
export function toggleElementScroll(element: HTMLElement) {
  element.classList.toggle('overflow-hidden')
}

// subtitle: Page Functions
// subtitledescription: A collection of useful actions

/**
 * Copies a text to the clipboard
 * @function copyToClipboard()
 */
export function copyToClipboard(text: string, callback?: () => void) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      if (callback) {
        callback()
      }
    })
    .catch((error) => {
      if (callback) {
        callback()
      }
    })
}

/**
 * Toggles the fullscreen mode
 * @function toggleFullScreen()
 */
export function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}

/**
 * Toggles the dark mode
 * @function toggleDarkMode()
 */
export function toggleDarkMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', !prefersDarkMode)
}

/**
 * Redirects to a new URL
 * @function redirect('https://example.com')
 */
export function redirect(url: string) {
  window.location.href = url
}

// <subtitle>
// subtitle: Form Actions
// description: A collection of useful actions
// </subtitle>

/**
 * Resets a form
 * @function resetForm(document.querySelector('form'))
 */
export function resetForm(form: HTMLFormElement) {
  form.reset()
}

/**
 * Focuses on an element
 * @function focusOn(document.querySelector('#my-element'))
 */
export function focusOn(element: HTMLElement) {
  element.focus()
}

/**
 * Focuses on the first element
 * @function focusOnFirst(document.querySelector('#my-element'))
 */
export function focusOnFirst(element: HTMLElement) {
  const input = element.querySelector('input')
  if (input) {
    input.focus()
  }
}

/**
 * Focuses on the last element
 * @function focusOnLast(document.querySelector('#my-element'))
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
 * @function focusTrap(document.querySelector('#my-element'))
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
