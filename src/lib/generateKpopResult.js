import { corePrompts, resolvePromptLocale } from "../data/corePrompt.js";
import { hairColors } from "../data/hairColors.js";
import { hairStyles } from "../data/hairStyles.js";
import { outfitStyles } from "../data/outfitStyles.js";
import { chooseTone } from "./selectTone.js";
import { selectStyleItemsForTone } from "./selectStyleItems.js";
import { buildImagePrompt } from "./buildImagePrompt.js";
import { buildResultCard, localizeResultCardFromSource, normalizeRatingLabel } from "./buildResultCard.js";

const datasets = {
  outfitStyles: outfitStyles,
  hairColors: hairColors,
  hairStyles: hairStyles
};

function createSeededRng(seed) {
  let state = Math.floor((seed % 1 + 1) % 1 * 4294967296) || 1;
  return function () {
    state += 0x6D2B79F5;
    let t = state;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export function localizeGeneratedResult(baseResult, locale = "en", rng = Math.random) {
  const promptLocale = resolvePromptLocale(locale);
  const tone = baseResult && baseResult.tone;
  const resultCardSeed = typeof (baseResult && baseResult.resultCardSeed) === "number" ? baseResult.resultCardSeed : rng();
  const selectedBundle = {
    tone: tone,
    hairStyle: baseResult && baseResult.selectedHairStyle,
    hairColor: baseResult && baseResult.selectedHairColor,
    outfitStyle: baseResult && baseResult.selectedOutfitStyle
  };

  if (!tone || !selectedBundle.hairStyle || !selectedBundle.hairColor || !selectedBundle.outfitStyle) {
    return buildFinalGeneratedResult(locale, rng);
  }

  const finalImagePrompt = buildImagePrompt(selectedBundle, corePrompts[promptLocale], promptLocale);
  const sourceCard = baseResult && baseResult.resultCard && baseResult.resultCard.source
    ? baseResult.resultCard
    : buildResultCard(tone, selectedBundle, "en", createSeededRng(resultCardSeed));
  const resultCard = localizeResultCardFromSource(tone, sourceCard, locale);
  resultCard.ratingLabel = normalizeRatingLabel(resultCard.ratingLabel);

  return {
    tone: tone,
    selectedHairStyle: selectedBundle.hairStyle,
    selectedHairColor: selectedBundle.hairColor,
    selectedOutfitStyle: selectedBundle.outfitStyle,
    resultCardSeed: resultCardSeed,
    finalImagePrompt: finalImagePrompt,
    resultCard: resultCard
  };
}

export function buildFinalGeneratedResult(locale = "en", rng = Math.random) {
  if (typeof locale === "function") {
    rng = locale;
    locale = "en";
  }

  const promptLocale = resolvePromptLocale(locale);
  const tone = chooseTone(rng);
  const selectedBundle = selectStyleItemsForTone(tone, datasets, rng);
  const resultCardSeed = rng();
  const finalImagePrompt = buildImagePrompt(selectedBundle, corePrompts[promptLocale], promptLocale);
  const resultCard = buildResultCard(tone, selectedBundle, locale, createSeededRng(resultCardSeed));
  resultCard.ratingLabel = normalizeRatingLabel(resultCard.ratingLabel);

  return {
    tone: tone,
    selectedHairStyle: selectedBundle.hairStyle,
    selectedHairColor: selectedBundle.hairColor,
    selectedOutfitStyle: selectedBundle.outfitStyle,
    resultCardSeed: resultCardSeed,
    finalImagePrompt: finalImagePrompt,
    resultCard: resultCard
  };
}

export function buildSampleGeneratedResult() {
  const fixedValues = [0.28, 0.62, 0.11, 0.84, 0.34, 0.57, 0.09, 0.73, 0.45, 0.18];
  let index = 0;
  return buildFinalGeneratedResult("en", function () {
    const value = fixedValues[index % fixedValues.length];
    index += 1;
    return value;
  });
}
