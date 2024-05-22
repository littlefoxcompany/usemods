// title: Goodies
// description: A collection neat little functions that don't belong anywhere else.
// lead: A growing pile of treats.

import { formatDurationLabels } from './formatters'

/**
 * Wraps each word, sentence or paragraph in a string with a tag.
 * @info Don't forget to render the HTML safely.
 */
export function splitByWords(text: string): string {
  if (!text) {
    console.warn('[MODS] Warning: No text to split')
    return ''
  }
  const sentences = text.split(/([.?!]+\s*)/)

  let wordIndex = 0
  const combinedSentences = []

  for (let i = 0; i < sentences.length; i += 2) {
    const sentence = sentences[i] + (sentences[i + 1] || '')

    if (sentence.trim() === '') continue

    const words = sentence
      .split(' ')
      .map((word) => {
        wordIndex++
        return `<span class="word word-${wordIndex}">${word}</span>`
      })
      .join(' ')

    combinedSentences.push(`<span class="sentence sentence-${combinedSentences.length + 1}">${words}</span>`)
  }

  return combinedSentences.join('')
}

/**
 * Check the strength of a password against a given policy.
 * @info Don't forget to use our Password Generator in the Generators section
 */
export function checkPasswordStrength(value: string, options?: { length?: number, uppercase?: number, number?: number, special?: number }): object {
  const { length = 8, uppercase = 1, number = 1, special = 1 } = options || {}
  let strength = 0

  const counts = {
    uppercase: (value.match(/[A-Z]/g) || []).length,
    numbers: (value.match(/[0-9]/g) || []).length,
    special: (value.match(/[^a-zA-Z0-9]/g) || []).length
  }

  if (value.length < length) return { score: 1, label: `Password must be at least ${length} characters long` }
  if (counts.uppercase < uppercase) return { score: 1, label: `Password must contain ${uppercase} uppercase letter` }
  if (counts.numbers < number) return { score: 1, label: `Password must contain ${number} number` }
  if (counts.special < special) return { score: 1, label: `Password must contain ${special} special character` }

  if (value.length >= 8) strength++
  if (counts.uppercase >= uppercase) strength++
  if (counts.numbers >= number) strength++
  if (counts.special >= special) strength++

  if (strength === 4) return { score: 4, label: 'Very Strong' }
  if (strength === 3) return { score: 3, label: 'Strong' }
  if (strength === 2) return { score: 2, label: 'Medium' }
  if (strength === 1) return { score: 1, label: 'Weak' }
  return { score: 0, label: 'Very Weak' }
}

/**
 * Replaces placeholders in a string with values from an object.
 */
export function mergeFields(text: string, fields: Record<string | number, string | number>): string {
  const pattern = /\{\{\s*(\w+)\s*\}\}/g

  return text.replace(pattern, (match, key) => {
    if (key in fields) {
      return fields[key].toString()
    } else {
      console.warn(`[MODS] Warning: Field "${key}" not found in object`)
      return `{{${key}}}`
    }
  })
}

/**
 * Returns the reading time of a string in Hours, Minutes, and Seconds.
 */
export function readingTime(text: string, wordsPerMinute = 200): string {
  const words = text.split(' ').length
  const minutes = Math.ceil(words / wordsPerMinute)
  return formatDurationLabels(minutes * 60)
}