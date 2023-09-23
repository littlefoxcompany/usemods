export function scrollToAnchor(id: string) {
  setTimeout(() => {
    const element = document.querySelector(id)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }, 180)
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

export function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard')
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard:', error)
    })
}

export function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
