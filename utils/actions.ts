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

export function scrollToTop(callback?: () => void) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  if (callback) {
    setTimeout(callback, 180)
  }
}

export function scrollToBottom(callback?: () => void) {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })

  if (callback) {
    setTimeout(callback, 180)
  }
}

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

export function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}

export function redirect(url: string) {
  window.location.href = url
}

export function resetForm(form: HTMLFormElement) {
  form.reset()
}

export function toggleBodyScroll() {
  document.body.classList.toggle('overflow-hidden')
}

export function toggleElementScroll(element: HTMLElement) {
  element.classList.toggle('overflow-hidden')
}

export function focusOn(element: HTMLElement) {
  element.focus()
}

export function focusOnFirst(element: HTMLElement) {
  const input = element.querySelector('input')
  if (input) {
    input.focus()
  }
}

export function focusOnLast(element: HTMLElement) {
  const inputs = element.querySelectorAll('input')
  const input = inputs[inputs.length - 1]
  if (input) {
    input.focus()
  }
}

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
