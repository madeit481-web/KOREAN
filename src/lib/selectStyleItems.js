import { compatibleToneFallbacks, toneConfigs } from "../data/tones.js";
import { pickRandom } from "./random.js";

function getToneConfig(tone) {
  return toneConfigs.find(function (config) {
    return config.id === tone;
  });
}

export function getCompatibleTones(tone) {
  return [tone].concat(compatibleToneFallbacks[tone] || []);
}

function countPreferredTagMatches(item, preferredTags) {
  return item.tags.reduce(function (count, tag) {
    return count + (preferredTags.includes(tag) ? 1 : 0);
  }, 0);
}

function getPenalty(tone, item) {
  const itemTags = item.tags;

  if (tone === "FIRST_LOVE" && (item.category === "glam-luxury-stage" || itemTags.includes("military-luxe") || itemTags.includes("sequin") || itemTags.includes("gothic-glam"))) {
    return 28;
  }

  if (tone === "ICE_QUEEN" && (itemTags.includes("cute") || itemTags.includes("flower-beads") || itemTags.includes("butterfly-clip") || itemTags.includes("pigtails") || itemTags.includes("ribbon-bow"))) {
    return 22;
  }

  if (tone === "SOFT_GLAM" && (item.category === "sporty-street-y2k" || itemTags.includes("neon") || itemTags.includes("star-clips") || itemTags.includes("graphic"))) {
    return 18;
  }

  if (tone === "COMEBACK_QUEEN" && (item.category === "preppy-school" || itemTags.includes("cardigan") || itemTags.includes("hoodie") || itemTags.includes("school") || itemTags.includes("soft"))) {
    return 16;
  }

  if (tone === "Y2K_POPSTAR" && (item.category === "chic-formal-minimal" || itemTags.includes("formal") || itemTags.includes("minimal") || itemTags.includes("high-fashion"))) {
    return 18;
  }

  return 0;
}

function scoreStyleItem(item, tone, config, categoryPreferences) {
  const isExactToneMatch = item.tones.includes(tone);
  const tagMatches = countPreferredTagMatches(item, config.preferredTags);
  let score = isExactToneMatch ? 100 : 60;

  if (categoryPreferences.includes(item.category)) {
    score += 18;
  }

  score += tagMatches * 4;
  score -= getPenalty(tone, item);

  return score;
}

function getTopScoredPool(items, tone, categoryPreferences) {
  const config = getToneConfig(tone);
  const compatibleTones = getCompatibleTones(tone);
  let candidates = items.filter(function (item) {
    return item.tones.includes(tone);
  });

  if (candidates.length < 3) {
    candidates = items.filter(function (item) {
      return item.tones.some(function (itemTone) {
        return compatibleTones.includes(itemTone);
      });
    });
  }

  const scored = candidates.map(function (item) {
    return {
      item: item,
      score: scoreStyleItem(item, tone, config, categoryPreferences)
    };
  }).sort(function (left, right) {
    return right.score - left.score;
  });

  const threshold = scored.length ? scored[0].score - 18 : 0;
  return scored.filter(function (entry) {
    return entry.score >= threshold;
  });
}

function pickScoredItem(items, tone, categoryPreferences, rng = Math.random) {
  const topPool = getTopScoredPool(items, tone, categoryPreferences);
  const weightedPool = topPool.flatMap(function (entry) {
    const copies = Math.max(1, Math.round(entry.score / 20));
    return Array(copies).fill(entry.item);
  });

  return pickRandom(weightedPool, rng);
}

export function selectStyleItemsForTone(tone, datasets, rng = Math.random) {
  const config = getToneConfig(tone);

  return {
    tone: tone,
    outfitStyle: pickScoredItem(datasets.outfitStyles, tone, config.preferredOutfitCategories, rng),
    hairColor: pickScoredItem(datasets.hairColors, tone, config.preferredHairColorCategories, rng),
    hairStyle: pickScoredItem(datasets.hairStyles, tone, config.preferredHairStyleCategories, rng)
  };
}
