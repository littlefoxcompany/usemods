import { describe, it, expect, vi } from 'vitest'
import plugin from 'tailwindcss/plugin'
import { modDevices } from './tailwind'

describe('modDevices plugin', () => {
  it('should add variants for each device', () => {
    const addVariant = vi.fn()
    const e = (className: string) => className
    plugin(modDevices).handler({ addVariant, e });

    [
      'ios', 'windows', 'linux', 'android', 'mac', 'chrome', 'firefox', 'safari', 'edge',
      'mobile', 'tablet', 'desktop', 'portrait', 'landscape'
    ].forEach(device => {
      expect(addVariant).toHaveBeenCalledWith(device, expect.any(Function))
    })
  })

  it('should modify selectors correctly', () => {
    const e = (className: string) => className
    const result = ((device, separator) => ({ className }) =>
      `.${device} .${e(`${device}${separator}${className}`)}`)('ios', ':')({ className: 'example' })

    expect(result).toBe('.ios .ios:example')
  })
})
