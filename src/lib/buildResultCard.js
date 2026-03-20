import { defaultRatingLabels, resultCardTextByTone } from "../data/resultCardText.js";
import { pickRandom, pickWeighted } from "./random.js";

const repeatedKeywords = ["center", "visual", "aura", "stage", "era", "fancam", "photocard", "icon", "legend", "bias"];
export const ALLOWED_RATING_LABELS = new Set(["\u2605\u2605\u2605\u2605", "\u2605\u2605\u2605\u2605\u2605", "Top 3%", "Top 1%"]);

export function normalizeRatingLabel(label) {
  if (ALLOWED_RATING_LABELS.has(label)) {
    return label;
  }

  return "\u2605\u2605\u2605\u2605";
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

export function buildResultCard(tone, rng = Math.random) {
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
    fanReaction: fanReaction
  };
}
