// title: Tailwind
// description: Utilities to use our utilities with their utilities
// lead: I heard you like classes

import plugin from 'tailwindcss/plugin'

// Define the type for the device set
const devices: Set<string> = new Set([
  'ios',
  'windows',
  'linux',
  'android',
  'mac',
  'chrome',
  'firefox',
  'safari',
  'edge',
  'mobile',
  'tablet',
  'desktop',
  'portrait',
  'landscape',
])

// Define the plugin with types
export const modDevices = plugin(function ({ addVariant, e }: { addVariant: any; e: (className: string) => string }) {
  devices.forEach((device) => {
    addVariant(device, ({ modifySelectors, separator }: { modifySelectors: any; separator: string }) => {
      modifySelectors(modifySelectorsFn(device, separator))
    })
  })

  function modifySelectorsFn(device: string, separator: string) {
    return ({ className }: { className: string }) => {
      return `.${device} .${e(`${device}${separator}${className}`)}`
    }
  }
})
