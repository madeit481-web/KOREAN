import { defaultRatingLabels, englishHookSentenceReplacements, englishSceneHookPools, englishStoryLineReplacements, resultCardTextByTone, storyScenes, sceneStoryPools } from "../data/resultCardText.js";
import { sharedHeadlineTranslations, sharedSceneLineTranslations, toneLineTranslations } from "../data/resultCardTranslations.js";
import { pickRandom, pickWeighted } from "./random.js";

const repeatedKeywords = ["center", "visual", "aura", "stage", "era", "fancam", "photocard", "icon", "legend", "bias"];
export const FALLBACK_RATING_LABEL = "\u2605\u2605\u2605\u2605";
export const STORY_PREVIEW_SENTENCE_COUNT = 0;
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

  const sharedSceneGroup = sharedSceneLineTranslations[group];
  if (sharedSceneGroup && sharedSceneGroup[line] && sharedSceneGroup[line][locale]) {
    return sharedSceneGroup[line][locale];
  }

  const toneTranslations = toneLineTranslations[tone];
  if (!toneTranslations || !toneTranslations[group] || !toneTranslations[group][line] || !toneTranslations[group][line][locale]) {
    return line;
  }

  return toneTranslations[group][line][locale];
}

function splitStorySentences(text) {
  if (!text || typeof text !== "string") {
    return [];
  }

  const matches = text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g);
  return (matches || []).map(function (sentence) {
    return sentence.trim();
  }).filter(Boolean);
}

function applyPhraseReplacement(text, from, to) {
  return text.split(from).join(to);
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function hashString(text) {
  return text.split("").reduce(function (hash, character) {
    return ((hash * 31) + character.charCodeAt(0)) >>> 0;
  }, 0);
}

function polishEnglishStoryLine(line) {
  if (!line) {
    return line;
  }

  const exactReplacement = englishStoryLineReplacements.find(function (item) {
    return item.from === line;
  });

  if (exactReplacement) {
    return exactReplacement.to;
  }

  return [
    ["your idol version", "you"],
    ["the version of you", "the side of you"],
    ["idol identity", "presence"],
    ["result image", "moment"],
    [" for later proof", ""],
    [" like the proof people wanted ready for later", " like the frame people wanted ready"],
    [" somehow ", " "],
    [" really ", " "],
    [" very ", " "],
    [" started sounding ", " sounded "],
    [" started reading like ", " felt like "],
    [" the whole point in one frame", " the whole point"],
    [" would be the frame they pointed back to", " would be the frame they came back to"]
  ].reduce(function (currentText, replacement) {
    return applyPhraseReplacement(currentText, replacement[0], replacement[1]);
  }, line)
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.!?])/g, "$1")
    .trim();
}

function polishEnglishHookSentence(line) {
  if (!line) {
    return line;
  }

  const exactReplacement = englishHookSentenceReplacements.find(function (item) {
    return item.from === line;
  });

  if (exactReplacement) {
    return exactReplacement.to;
  }

  return polishEnglishStoryLine(line)
    .replace("Your teaser dropped into the feed", "Your teaser dropped")
    .replace("looking small enough to skim", "small")
    .replace("The first reveal landed, and the post stopped behaving like something casual right away.", "The first reveal landed, and it stopped feeling casual.")
    .replace("The first reveal arrived like a small update, then started pulling a much bigger reaction behind it.", "The first reveal landed like a small update, then hit bigger.")
    .replace("Your teaser hit the feed and the replies changed faster than the caption underneath it.", "Your teaser hit the feed, and the replies changed first.")
    .replace("The first stage camera found you early, and that was enough to change the temperature of the set.", "The first stage camera found you early, and the whole set changed.")
    .replace("One stage close-up was enough to make your debut stop feeling new and start feeling established.", "One stage close-up made your debut feel settled.")
    .replace("One circulating concert clip was enough to make your presence feel bigger than the whole edit around it.", "One concert clip made your presence feel bigger than the edit.")
    .replace("One music-show close-up landed on screen and immediately stopped behaving like a routine broadcast moment.", "One music-show close-up landed, and it stopped feeling routine.")
    .replace("One final close-up was enough to make the rest of the performance feel like it had been building toward you.", "One final close-up made the whole performance point back to you.")
    .replace("The photocard pull landed, and the reaction got weirdly personal almost on contact.", "The photocard pull landed, and people got personal fast.")
    .replace("Your frame started moving through edits before anyone had figured out how to talk about it cleanly.", "Your frame started moving through edits before anyone knew what to say.")
    .replace("One look at your image and people were already treating it like it had a place on their phone.", "One look at your image and people were already making room for it.")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function getSceneHook(scene, seedText, fallbackLine) {
  const pool = englishSceneHookPools[scene];
  if (!pool || !pool.length) {
    return polishEnglishHookSentence(fallbackLine);
  }

  return pool[hashString(seedText || fallbackLine || scene) % pool.length];
}

function finalizeEnglishHookSentence(scene, line) {
  const sceneHook = getSceneHook(scene, line, line);
  if (countWords(sceneHook) <= 18) {
    return sceneHook;
  }

  return polishEnglishHookSentence(sceneHook);
}

function buildEnglishReactionLine(attentionShiftLine, fandomEscalationLine) {
  const fandomSentences = splitStorySentences(polishEnglishStoryLine(fandomEscalationLine));
  const attentionSentences = splitStorySentences(polishEnglishStoryLine(attentionShiftLine));
  const primarySentence = fandomSentences[0] || attentionSentences[0] || "";

  return primarySentence
    .replace("The comments started polite, then somebody admitted they had already come back three times.", "The comments started polite, then got honest fast.")
    .replace("People tried to keep the replies light, but the tone shifted the second someone called it first-bias behavior.", "The replies stayed light for a second, then stopped.")
    .replace("At first everyone sounded normal.", "At first everyone sounded normal,")
    .replace("The first compliments stayed polished, then the replies got much more revealing.", "The compliments stayed polished for a second, then cracked.")
    .replace("The comments did not explode. They thinned out into shorter, stranger reactions.", "The comments didn't get louder. They got stranger.")
    .replace("The comments jumped from hype to something closer to alarm almost immediately.", "The comments went from hype to alarm almost immediately.")
    .replace("The save happened before anyone had a story ready for it.", "The jokes stayed casual for a second, then nobody sounded casual.")
    .replace(/,$/, ".")
    .trim();
}

function buildEnglishCollectibleLine(line) {
  return polishEnglishStoryLine(line)
    .replace("The save-first behavior started so early it made the rest of the reaction easier to believe.", "People were saving it before the reaction finished catching up.")
    .replace("People held onto the debut close-up like it already explained the whole performance.", "People kept the debut close-up like it said enough on its own.")
    .replace("The replay count climbed fast once that fancam moment started making the rounds.", "The replay count climbed as soon as the clip started moving.")
    .replace("The card got treated less like an item and more like something people would quietly guard.", "People treated the card like something they meant to keep.")
    .replace("The camera roll made room for your image before the comments had finished with it.", "The camera roll made room for it before the comments finished.")
    .trim();
}

function buildEnglishAftermathLine(line) {
  return polishEnglishStoryLine(line)
    .replace("By the end, it no longer felt like a result. It felt like the kind of frame that could change a room without raising its voice.", "By the end, it felt like the kind of frame that could change a room without raising its voice.")
    .replace("After that, the frame stopped reading as just pretty and started reading like the start of a first-bias story.", "After that, it felt like the start of a first-bias story.")
    .replace("By the time the moment cooled off, this was already the frame people kept coming back to.", "After that, this was the frame people kept coming back to.")
    .replace("Even after the moment passed, this was the frame people kept closest.", "Even after it passed, this was the frame people kept closest.")
    .replace("After that, people talked about the moment like it had already changed what came next.", "After that, people talked like it had already changed what came next.")
    .trim();
}

function buildStoryPresentation(sentences) {
  const safeSentences = Array.isArray(sentences) ? sentences.filter(Boolean) : [];

  return {
    storySentences: safeSentences,
    storyLeadSentence: safeSentences[0] || "",
    storyPreviewSentences: safeSentences.slice(1, STORY_PREVIEW_SENTENCE_COUNT + 1),
    storyRemainingSentences: safeSentences.slice(STORY_PREVIEW_SENTENCE_COUNT + 1)
  };
}

function localizeStoryLines(lines, locale) {
  if (locale !== "en") {
    return lines;
  }

  return lines.map(polishEnglishStoryLine);
}

function buildLocalizedStory(tone, source, locale) {
  const eventOpening = translateLine(source.eventOpening, locale, tone, "eventOpenings");
  const attentionShiftLine = translateLine(source.attentionShiftLine, locale, tone, "attentionShiftLines");
  const fandomEscalationLine = translateLine(source.fandomEscalationLine, locale, tone, "fandomEscalationLines");
  const collectibleFalloutLine = translateLine(source.collectibleFalloutLine, locale, tone, "collectibleFalloutLines");
  const identityClosing = translateLine(source.identityClosing, locale, tone, "identityClosings");

  if (locale !== "en") {
    return [
      eventOpening,
      fandomEscalationLine,
      collectibleFalloutLine,
      identityClosing
    ];
  }

  return [
    finalizeEnglishHookSentence(source.scene, eventOpening),
    buildEnglishReactionLine(attentionShiftLine, fandomEscalationLine),
    buildEnglishCollectibleLine(collectibleFalloutLine),
    buildEnglishAftermathLine(identityClosing)
  ];
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
  const storyLines = buildLocalizedStory(tone, source, locale);
  const microNovel = storyLines.join(" ");
  const storyPresentation = buildStoryPresentation(splitStorySentences(microNovel));

  return {
    headline: translateLine(source.headline, locale, tone, "headlines"),
    title: translateLine(source.title, locale, tone, "titles"),
    ratingLabel: normalizeRatingLabel(ratingLabel),
    microNovel: microNovel,
    storySentences: storyPresentation.storySentences,
    storyLeadSentence: storyPresentation.storyLeadSentence,
    storyPreviewSentences: storyPresentation.storyPreviewSentences,
    storyRemainingSentences: storyPresentation.storyRemainingSentences,
    fanReaction: translateLine(source.fanReaction, locale, tone, "fanReactions"),
    source: source
  };
}

export function buildResultCard(tone, bundle = null, locale = "en", rng = Math.random) {
  return localizeResultCardFromSource(tone, buildSourceResultCard(tone, rng), locale);
}
