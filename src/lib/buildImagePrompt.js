import {
  hairStylePromptKo,
  hairColorPromptKo,
  outfitStylePromptKo
} from "../data/stylePromptTranslations.js";

function getLocalizedPrompt(item, locale, translations) {
  if (locale === "ko" && translations[item.id]) {
    return translations[item.id];
  }

  return item.prompt;
}

export function buildImagePrompt(bundle, promptTemplate, locale = "en") {
  return promptTemplate
    .replace("{hair_style}", getLocalizedPrompt(bundle.hairStyle, locale, hairStylePromptKo))
    .replace("{hair_color}", getLocalizedPrompt(bundle.hairColor, locale, hairColorPromptKo))
    .replace("{outfit_style}", getLocalizedPrompt(bundle.outfitStyle, locale, outfitStylePromptKo))
    .replace(/\s+/g, " ")
    .trim();
}
