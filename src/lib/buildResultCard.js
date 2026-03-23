import { defaultRatingLabels, resultCardTextByTone } from "../data/resultCardText.js";
import { sharedHeadlineTranslations, toneLineTranslations } from "../data/resultCardTranslations.js";
import { pickRandom, pickWeighted } from "./random.js";

const repeatedKeywords = ["center", "visual", "aura", "stage", "era", "fancam", "photocard", "icon", "legend", "bias"];
export const ALLOWED_RATING_LABELS = new Set(["★★★★", "★★★★★", "Top 3%", "Top 1%"]);

export function normalizeRatingLabel(label) {
  if (ALLOWED_RATING_LABELS.has(label)) {
    return label;
  }

  return "★★★★";
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

  const headline = pickLowOverlapLine(toneText.headlines, usedKeywords, rng);
  const title = pickLowOverlapLine(toneText.titles, usedKeywords, rng);
  const ratingLabel = normalizeRatingLabel(pickWeighted(ratingPool, function (item) {
    return item.weight;
  }, rng).label);
  const opening = pickLowOverlapLine(toneText.novelOpenings, usedKeywords, rng);
  const visualLine = pickLowOverlapLine(toneText.novelVisualLines, usedKeywords, rng);
  const fandomLine = pickLowOverlapLine(toneText.novelFandomLines, usedKeywords, rng);
  const closing = pickLowOverlapLine(toneText.novelClosings, usedKeywords, rng);
  const fanReaction = pickLowOverlapLine(toneText.fanReactions, usedKeywords, rng);

  return {
    headline: headline,
    title: title,
    ratingLabel: ratingLabel,
    microNovel: [opening, visualLine, fandomLine, closing].join(" "),
    fanReaction: fanReaction,
    source: {
      headline: headline,
      title: title,
      opening: opening,
      visualLine: visualLine,
      fandomLine: fandomLine,
      closing: closing,
      fanReaction: fanReaction
    }
  };
}

export function localizeResultCardFromSource(tone, sourceCard, locale = "en") {
  const source = sourceCard && sourceCard.source ? sourceCard.source : sourceCard;
  const ratingLabel = sourceCard && sourceCard.ratingLabel ? sourceCard.ratingLabel : "★★★★";

  return {
    headline: translateLine(source.headline, locale, tone, "headlines"),
    title: translateLine(source.title, locale, tone, "titles"),
    ratingLabel: normalizeRatingLabel(ratingLabel),
    microNovel: [
      translateLine(source.opening, locale, tone, "novelOpenings"),
      translateLine(source.visualLine, locale, tone, "novelVisualLines"),
      translateLine(source.fandomLine, locale, tone, "novelFandomLines"),
      translateLine(source.closing, locale, tone, "novelClosings")
    ].join(" "),
    fanReaction: translateLine(source.fanReaction, locale, tone, "fanReactions"),
    source: source
  };
}

export function buildResultCard(tone, bundle = null, locale = "en", rng = Math.random) {
  return localizeResultCardFromSource(tone, buildSourceResultCard(tone, rng), locale);
}
