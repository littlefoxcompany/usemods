import { describe, it, expect } from 'vitest'

describe('modDevices plugin', () => {
  it('should modify selectors correctly', () => {
    const e = (className: string) => className
    const result = ((device, separator) => ({ className }) =>
      `.${device} .${e(`${device}${separator}${className}`)}`)('ios', ':')({ className: 'example' })

    expect(result).toBe('.ios .ios:example')
  })
})
