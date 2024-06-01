// title: Tailwind
// description: Utilities to use our utilities with their utilities
// lead: I heard you like classes

import plugin from 'tailwindcss/plugin'

// Define the set of devices
const devices: Set<string> = new Set([
  'ios', 'windows', 'linux', 'android', 'mac', 'chrome', 'firefox', 'safari', 'edge',
  'mobile', 'tablet', 'desktop', 'portrait', 'landscape',
])

// Function to create the modifySelectors function for a given device and separator
function createModifySelectorsFn(device: string, separator: string, e: (className: string) => string) {
  return ({ className }: { className: string }) => {
    return `.${device} .${e(`${device}${separator}${className}`)}`
  }
}

// Tailwind CSS plugin to add device variants
export const modDevices = plugin(function ({ addVariant, e }) {
  const modifySelectorsCache: { [key: string]: (params: { className: string }) => string } = {}

  devices.forEach((device) => {
    addVariant(device, ({ modifySelectors, separator }) => {
      const cacheKey = `${device}${separator}`
      if (!modifySelectorsCache[cacheKey]) {
        modifySelectorsCache[cacheKey] = createModifySelectorsFn(device, separator, e)
      }
      modifySelectors(modifySelectorsCache[cacheKey])
    })
  })
})1