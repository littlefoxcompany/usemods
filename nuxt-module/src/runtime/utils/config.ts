export const currencySymbols = new Map([
  ['en-US', 'USD'], // US Dollar
  ['en-GB', 'GBP'], // British Pound
  ['en-AU', 'AUD'], // Australian Dollar
  ['en-CA', 'CAD'], // Canadian Dollar
  ['en-NZ', 'NZD'], // New Zealand Dollar
  ['en-ZA', 'ZAR'], // South African Rand
  ['de-DE', 'EUR'], // Euro (Germany)
  ['fr-FR', 'EUR'], // Euro (France)
  ['es-ES', 'EUR'], // Euro (Spain)
  ['it-IT', 'EUR'], // Euro (Italy)
  ['pt-PT', 'EUR'], // Euro (Portugal)
  ['nl-NL', 'EUR'], // Euro (Netherlands)
  ['fi-FI', 'EUR'], // Euro (Finland)
  ['da-DK', 'DKK'], // Danish Krone
  ['sv-SE', 'SEK'], // Swedish Krona
  ['nb-NO', 'NOK'], // Norwegian Krone
  ['pl-PL', 'PLN'], // Polish Zloty
  ['tr-TR', 'TRY'], // Turkish Lira
  ['ru-RU', 'RUB'], // Russian Ruble
  ['ja-JP', 'JPY'], // Japanese Yen
  ['zh-CN', 'CNY'], // Chinese Yuan
  ['ko-KR', 'KRW'], // South Korean Won
  ['ar-SA', 'SAR'], // Saudi Riyal
  ['he-IL', 'ILS'], // Israeli Shekel
  ['id-ID', 'IDR'], // Indonesian Rupiah
  ['ms-MY', 'MYR'], // Malaysian Ringgit
  ['th-TH', 'THB'], // Thai Baht
  ['vi-VN', 'VND'], // Vietnamese Dong
  ['hi-IN', 'INR'], // Indian Rupee
  ['bn-IN', 'INR'], // Indian Rupee
  ['pa-IN', 'INR'], // Indian Rupee
  ['gu-IN', 'INR'], // Indian Rupee
  ['or-IN', 'INR'], // Indian Rupee
  ['ta-IN', 'INR'], // Indian Rupee
  ['te-IN', 'INR'], // Indian Rupee
  ['kn-IN', 'INR'], // Indian Rupee
  ['ml-IN', 'INR'] // Indian Rupee
])

export const configLocales = new Set([
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
])

export const configUnits = new Set([
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
])

export const unchangingPlurals = new Set([
  'sheep',
  'fish',
  'deer',
  'hay',
  'moose',
  'series',
  'species',
  'aircraft',
  'bison',
  'buffalo',
  'cod',
  'elk',
  'halibut',
  'hovercraft',
  'lego',
  'mackerel',
  'salmon',
  'spacecraft',
  'swine',
  'trout',
  'tuna'
])

export const irregularPlurals = new Map([
  ['addendum', 'addenda'],
  ['agendum', 'agenda'],
  ['alumnus', 'alumni'],
  ['analysis', 'analyses'],
  ['anathema', 'anathemata'],
  ['appendix', 'appendices'],
  ['axis', 'axes'],
  ['bacterium', 'bacteria'],
  ['basis', 'bases'],
  ['cactus', 'cacti'],
  ['cherub', 'cherubim'],
  ['child', 'children'],
  ['corrigendum', 'corrigenda'],
  ['crisis', 'crises'],
  ['criterion', 'criteria'],
  ['curriculum', 'curricula'],
  ['custom', 'customs'],
  ['datum', 'data'],
  ['diagnosis', 'diagnoses'],
  ['dogma', 'dogmata'],
  ['ellipsis', 'ellipses'],
  ['elf', 'elves'],
  ['erratum', 'errata'],
  ['focus', 'foci'],
  ['foot', 'feet'],
  ['forum', 'fora'],
  ['fungus', 'fungi'],
  ['genus', 'genera'],
  ['goose', 'geese'],
  ['half', 'halves'],
  ['hypothesis', 'hypotheses'],
  ['index', 'indices'],
  ['knife', 'knives'],
  ['leaf', 'leaves'],
  ['lemma', 'lemmata'],
  ['life', 'lives'],
  ['loaf', 'loaves'],
  ['man', 'men'],
  ['matrix', 'matrices'],
  ['medium', 'media'],
  ['memorandum', 'memoranda'],
  ['millennium', 'millennia'],
  ['mouse', 'mice'],
  ['nucleus', 'nuclei'],
  ['oasis', 'oases'],
  ['ovum', 'ova'],
  ['ox', 'oxen'],
  ['parenthesis', 'parentheses'],
  ['person', 'people'],
  ['phenomenon', 'phenomena'],
  ['potato', 'potatoes'],
  ['radius', 'radii'],
  ['schema', 'schemata'],
  ['stimulus', 'stimuli'],
  ['stigma', 'stigmata'],
  ['stoma', 'stomata'],
  ['stratum', 'strata'],
  ['syllabus', 'syllabi'],
  ['symposium', 'symposia'],
  ['synthesis', 'syntheses'],
  ['thesis', 'theses'],
  ['tooth', 'teeth'],
  ['tomato', 'tomatoes'],
  ['vertex', 'vertices'],
  ['wife', 'wives'],
  ['woman', 'women']
])

export const numberUnderTwenty: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
export const numberTens: string[] = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
export const numberScales: string[] = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion']

export const formatTitleExceptions = new Set([
  'a',
  'an',
  'to',
  'the',
  'for',
  'and',
  'nor',
  'but',
  'or',
  'yet',
  'so',
  'in',
  'is',
  'it',
  'than',
  'on',
  'at',
  'with',
  'under',
  'above',
  'from',
  'of',
  'although',
  'because',
  'since',
  'unless'
])