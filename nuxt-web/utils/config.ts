export function convertToArray(value: string) {
  try {
    return JSON.parse(value)
  } catch (error) {
    return []
  }
}

export const configLocales = [
  'en-US', // English (United States)
  'en-GB', // English (United Kingdom)
  'en-CA', // English (Canada)
  'en-AU', // English (Australia)
  'fr-FR', // French (France)
  'es-ES', // Spanish (Spain)
  'de-DE', // German (Germany)
  'it-IT', // Italian (Italy)
  'ja-JP', // Japanese (Japan)
  'ko-KR', // Korean (South Korea)
  'zh-CN', // Chinese (Simplified, China)
  'zh-TW', // Chinese (Traditional, Taiwan)
  'pt-PT', // Portuguese (Portugal)
  'pt-BR', // Portuguese (Brazil)
  'ru-RU', // Russian (Russia)
  'nl-NL', // Dutch (Netherlands)
  'da-DK', // Danish (Denmark)
  'sv-SE', // Swedish (Sweden)
  'nb-NO', // Norwegian Bokmål (Norway)
  'fi-FI', // Finnish (Finland)
  'pl-PL', // Polish (Poland)
  'tr-TR', // Turkish (Turkey)
  'ar-SA', // Arabic (Saudi Arabia)
  'he-IL', // Hebrew (Yiddish)
  'id-ID', // Indonesian (Indonesia)
  'ms-MY', // Malay (Malaysia)
  'th-TH', // Thai (Thailand)
  'vi-VN' // Vietnamese (Vietnam)
]

export const configUnits = [
  'acre',
  'bit',
  'byte',
  'celsius',
  'centimeter',
  'day',
  'degree',
  'fahrenheit',
  'fluid-ounce',
  'foot',
  'gallon',
  'gigabit',
  'gigabyte',
  'gram',
  'hectare',
  'hour',
  'inch',
  'kilobit',
  'kilobyte',
  'kilogram',
  'kilometer',
  'liter',
  'megabit',
  'megabyte',
  'meter',
  'microsecond',
  'mile',
  'mile-scandinavian',
  'milliliter',
  'millimeter',
  'millisecond',
  'minute',
  'month',
  'nanosecond',
  'ounce',
  'percent',
  'petabyte',
  'pound',
  'second',
  'stone',
  'terabit',
  'terabyte',
  'week',
  'yard',
  'year'
]
