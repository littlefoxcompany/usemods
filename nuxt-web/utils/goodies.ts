// title: Goodies
// description: A collection neat little functions that don't belong anywhere else.
// lead: A growing pile of treats.

import { formatDurationLabels } from './formatters'

/**
 * Wraps each word, sentence or paragraph in a string with a tag.
 */
export function splitByWords(text: string): string {
  const sentences = text.split(/([\.\?\!])\s*/)

  let wordIndex = 0
  let combinedSentences = []

  for (let i = 0; i < sentences.length; i += 2) {
    const sentence = sentences[i] + (sentences[i + 1] || '')

    if (sentence.trim() === '') continue

    const words = sentence
      .split(' ')
      .map((word) => {
        wordIndex++
        return `<span class="word"><span class="word-${wordIndex}">${word}</span></span>`
      })
      .join(' ')

    combinedSentences.push(`<span class="sentence sentence-${combinedSentences.length + 1}">${words}</span>`)
  }

  return combinedSentences.join(' ')
}

/**
 * Check the strength of a password against a given policy.
 */
export function checkPasswordStrength(value: string, length: number, uppercase: number, numbers: number, special: number): object {
  let strength = 0

  const counts = {
    uppercase: (value.match(/[A-Z]/g) || []).length,
    numbers: (value.match(/[0-9]/g) || []).length,
    special: (value.match(/[^a-zA-Z0-9]/g) || []).length
  }

  if (value.length < length) return { score: 1, label: `Password must be at least ${length} characters long` }
  if (counts.uppercase < uppercase) return { score: 1, label: `Password must contain ${uppercase} uppercase letter` }
  if (counts.numbers < numbers) return { score: 1, label: `Password must contain ${numbers} number` }
  if (counts.special < special) return { score: 1, label: `Password must contain ${special} special character` }

  if (value.length >= length) strength++
  if (counts.uppercase >= uppercase) strength++
  if (counts.numbers >= numbers) strength++
  if (counts.special >= special) strength++

  if (strength === 4) return { score: 4, label: 'Very Strong' }
  if (strength === 3) return { score: 3, label: 'Strong' }
  if (strength === 2) return { score: 2, label: 'Medium' }
  if (strength === 1) return { score: 1, label: 'Weak' }
  return { score: 0, label: 'Very Weak' }
}

/**
 * Returns the reading time of a string in Hours, Minutes, and Seconds.
 */
export function readingTime(text: string, wordsPerMinute = 200): string {
  const words = text.split(' ').length
  const minutes = Math.ceil(words / wordsPerMinute)
  return formatDurationLabels(minutes * 60)
}
/**
 * Replaces placeholders in a string with values from an object.
 */
export function mergeFields(text: string, fields: { [key: string | number]: string | number }, brackets = '{{}}'): string {
  const bracketHalf = brackets.length / 2
  const escapeRegExp = (string: any) => string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
  const startBracket = escapeRegExp(brackets.slice(0, bracketHalf))
  const endBracket = escapeRegExp(brackets.slice(bracketHalf))
  const pattern = new RegExp(`${startBracket}(\\w+)${endBracket}`, 'g')

  return text.replace(pattern, (match, key) => {
    const replacement = fields[key.trim()]
    return replacement !== undefined ? replacement.toString() : match
  })
}
