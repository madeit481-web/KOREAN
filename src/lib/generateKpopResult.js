import { corePrompt } from "../data/corePrompt.js";
import { hairColors } from "../data/hairColors.js";
import { hairStyles } from "../data/hairStyles.js";
import { outfitStyles } from "../data/outfitStyles.js";
import { chooseTone } from "./selectTone.js";
import { selectStyleItemsForTone } from "./selectStyleItems.js";
import { buildImagePrompt } from "./buildImagePrompt.js";
import { buildResultCard, normalizeRatingLabel } from "./buildResultCard.js";

const datasets = {
  outfitStyles: outfitStyles,
  hairColors: hairColors,
  hairStyles: hairStyles
};

export function buildFinalGeneratedResult(rng = Math.random) {
  const tone = chooseTone(rng);
  const selectedBundle = selectStyleItemsForTone(tone, datasets, rng);
  const finalImagePrompt = buildImagePrompt(selectedBundle, corePrompt);
  const resultCard = buildResultCard(tone, rng);
  resultCard.ratingLabel = normalizeRatingLabel(resultCard.ratingLabel);

  return {
    tone: tone,
    selectedHairStyle: selectedBundle.hairStyle,
    selectedHairColor: selectedBundle.hairColor,
    selectedOutfitStyle: selectedBundle.outfitStyle,
    finalImagePrompt: finalImagePrompt,
    resultCard: resultCard
  };
}

export function buildSampleGeneratedResult() {
  const fixedValues = [0.28, 0.62, 0.11, 0.84, 0.34, 0.57, 0.09, 0.73, 0.45, 0.18];
  let index = 0;
  return buildFinalGeneratedResult(function () {
    const value = fixedValues[index % fixedValues.length];
    index += 1;
    return value;
  });
}
