import { defaultRatingLabels, resultCardTextByTone, storyScenes, sceneStoryPools } from "../data/resultCardText.js";
import { sharedHeadlineTranslations, toneLineTranslations } from "../data/resultCardTranslations.js";
import { pickRandom, pickWeighted } from "./random.js";

const repeatedKeywords = ["center", "visual", "aura", "stage", "era", "fancam", "photocard", "icon", "legend", "bias"];
export const FALLBACK_RATING_LABEL = "\u2605\u2605\u2605\u2605";
export const ALLOWED_RATING_LABELS = new Set([
  "\u2605\u2605\u2605\u2605",
  "\u2605\u2605\u2605\u2605\u2605",
  "Top 3%",
  "Top 1%"
]);

export function normalizeRatingLabel(label) {
  if (ALLOWED_RATING_LABELS.has(label)) {
    return label;
  }

  return FALLBACK_RATING_LABEL;
}

function countOverlap(line, usedKeywords) {
  const lower = line.toLowerCase();
  return repeatedKeywords.reduce(function (count, keyword) {
    return count + (usedKeywords.has(keyword) && lower.includes(keyword) ? 1 : 0);
  }, 0);
}

function registerKeywords(line, usedKeywords) {
  const lower = line.toLowerCase();
  repeatedKeywords.forEach(function (keyword) {
    if (lower.includes(keyword)) {
      usedKeywords.add(keyword);
    }
  });
}

function pickLowOverlapLine(lines, usedKeywords, rng) {
  const sorted = lines.slice().sort(function (left, right) {
    return countOverlap(left, usedKeywords) - countOverlap(right, usedKeywords);
  });
  const pool = sorted.slice(0, Math.min(5, sorted.length));
  const line = pickRandom(pool, rng);
  registerKeywords(line, usedKeywords);
  return line;
}

function translateLine(line, locale, tone, group) {
  if (locale === "en") {
    return line;
  }

  if (group === "headlines") {
    const shared = sharedHeadlineTranslations[line];
    if (shared && shared[locale]) {
      return shared[locale];
    }
  }

  const toneTranslations = toneLineTranslations[tone];
  if (!toneTranslations || !toneTranslations[group] || !toneTranslations[group][line] || !toneTranslations[group][line][locale]) {
    return line;
  }

  return toneTranslations[group][line][locale];
}

function buildSourceResultCard(tone, rng = Math.random) {
  const toneText = resultCardTextByTone[tone];
  const ratingPool = toneText.ratingLabels || defaultRatingLabels;
  const usedKeywords = new Set();
  const scene = pickRandom(storyScenes, rng);
  const sceneText = sceneStoryPools[scene];

  const headline = pickLowOverlapLine(toneText.headlines, usedKeywords, rng);
  const title = pickLowOverlapLine(toneText.titles, usedKeywords, rng);
  const ratingLabel = normalizeRatingLabel(pickWeighted(ratingPool, function (item) {
    return item.weight;
  }, rng).label);
  const eventOpening = pickLowOverlapLine(sceneText.eventOpenings, usedKeywords, rng);
  const attentionShiftLine = pickLowOverlapLine(toneText.attentionShiftLines, usedKeywords, rng);
  const fandomEscalationLine = pickLowOverlapLine(toneText.fandomEscalationLines, usedKeywords, rng);
  const collectibleFalloutLine = pickLowOverlapLine(sceneText.collectibleOrSpreadLines, usedKeywords, rng);
  const identityClosing = pickLowOverlapLine(toneText.identityClosings, usedKeywords, rng);
  const fanReaction = pickLowOverlapLine(toneText.fanReactions, usedKeywords, rng);

  return {
    headline: headline,
    title: title,
    ratingLabel: ratingLabel,
    microNovel: [eventOpening, attentionShiftLine, fandomEscalationLine, collectibleFalloutLine, identityClosing].join(" "),
    fanReaction: fanReaction,
    source: {
      scene: scene,
      headline: headline,
      title: title,
      eventOpening: eventOpening,
      attentionShiftLine: attentionShiftLine,
      fandomEscalationLine: fandomEscalationLine,
      collectibleFalloutLine: collectibleFalloutLine,
      identityClosing: identityClosing,
      fanReaction: fanReaction
    }
  };
}

export function localizeResultCardFromSource(tone, sourceCard, locale = "en") {
  const source = sourceCard && sourceCard.source ? sourceCard.source : sourceCard;
  const ratingLabel = sourceCard && sourceCard.ratingLabel ? sourceCard.ratingLabel : FALLBACK_RATING_LABEL;

  return {
    headline: translateLine(source.headline, locale, tone, "headlines"),
    title: translateLine(source.title, locale, tone, "titles"),
    ratingLabel: normalizeRatingLabel(ratingLabel),
    microNovel: [
      translateLine(source.eventOpening, locale, tone, "eventOpenings"),
      translateLine(source.attentionShiftLine, locale, tone, "attentionShiftLines"),
      translateLine(source.fandomEscalationLine, locale, tone, "fandomEscalationLines"),
      translateLine(source.collectibleFalloutLine, locale, tone, "collectibleFalloutLines"),
      translateLine(source.identityClosing, locale, tone, "identityClosings")
    ].join(" "),
    fanReaction: translateLine(source.fanReaction, locale, tone, "fanReactions"),
    source: source
  };
}

export function buildResultCard(tone, bundle = null, locale = "en", rng = Math.random) {
  return localizeResultCardFromSource(tone, buildSourceResultCard(tone, rng), locale);
}
