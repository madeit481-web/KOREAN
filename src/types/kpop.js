/**
 * @typedef {"FIRST_LOVE" | "SOFT_GLAM" | "ICE_QUEEN" | "COMEBACK_QUEEN" | "Y2K_POPSTAR"} ToneId
 */

/**
 * @typedef {Object} StyleItem
 * @property {string} id
 * @property {number} sourceIndex
 * @property {string} name
 * @property {string} category
 * @property {string} prompt
 * @property {string[]} tags
 * @property {ToneId[]} tones
 */

/**
 * @typedef {Object} ToneConfig
 * @property {ToneId} id
 * @property {string} label
 * @property {string} description
 * @property {string[]} preferredOutfitCategories
 * @property {string[]} preferredHairColorCategories
 * @property {string[]} preferredHairStyleCategories
 * @property {string[]} preferredTags
 */

/**
 * @typedef {Object} RatingLabel
 * @property {string} label
 * @property {number} weight
 */

/**
 * @typedef {Object} ResultCardToneText
 * @property {ToneId} tone
 * @property {string[]} headlines
 * @property {string[]} titles
 * @property {RatingLabel[]=} ratingLabels
 * @property {string[]} novelOpenings
 * @property {string[]} novelVisualLines
 * @property {string[]} novelFandomLines
 * @property {string[]} novelClosings
 * @property {string[]} fanReactions
 */

/**
 * @typedef {Object} SelectedStyleBundle
 * @property {ToneId} tone
 * @property {StyleItem} hairStyle
 * @property {StyleItem} hairColor
 * @property {StyleItem} outfitStyle
 */

/**
 * @typedef {Object} FinalResultCard
 * @property {string} headline
 * @property {string} title
 * @property {string} ratingLabel
 * @property {string} microNovel
 * @property {string} fanReaction
 */

/**
 * @typedef {Object} FinalGeneratedResult
 * @property {ToneId} tone
 * @property {StyleItem} selectedHairStyle
 * @property {StyleItem} selectedHairColor
 * @property {StyleItem} selectedOutfitStyle
 * @property {string} finalImagePrompt
 * @property {FinalResultCard} resultCard
 */

/**
 * @typedef {"en" | "ko" | "es"} SupportedLocale
 */

export const toneIds = [
  "FIRST_LOVE",
  "SOFT_GLAM",
  "ICE_QUEEN",
  "COMEBACK_QUEEN",
  "Y2K_POPSTAR"
];
