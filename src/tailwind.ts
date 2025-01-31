// title: Tailwind
// description: Utilities to use our utilities with their utilities
// lead: I heard you like classes

const devices: Set<string> = new Set([
  'windows', 'linux', 'mac',
  'ios', 'android',
  'chrome', 'firefox', 'safari', 'edge',
  'mobile', 'tablet', 'desktop',
  'portrait', 'landscape',
])

// Define the plugin without dependencies
export const modDevices = function ({ addVariant, e }: { addVariant: any, e: (className: string) => string }) {
  devices.forEach((device) => {
    addVariant(device, ({ modifySelectors, separator }: { modifySelectors: any, separator: string }) => {
      modifySelectors(({ className }: { className: string }) => {
        return `.${device} .${e(`${device}${separator}${className}`)}`
      })
    })
  })
}
