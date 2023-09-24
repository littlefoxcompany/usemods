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
