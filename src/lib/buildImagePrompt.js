export function buildImagePrompt(bundle, promptTemplate) {
  return promptTemplate
    .replace("{hair_style}", bundle.hairStyle.prompt)
    .replace("{hair_color}", bundle.hairColor.prompt)
    .replace("{outfit_style}", bundle.outfitStyle.prompt)
    .replace(/\s+/g, " ")
    .trim();
}
