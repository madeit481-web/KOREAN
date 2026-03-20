export function randomInt(max, rng = Math.random) {
  return Math.floor(rng() * max);
}

export function pickRandom(items, rng = Math.random) {
  return items[randomInt(items.length, rng)];
}

export function pickWeighted(items, getWeight, rng = Math.random) {
  const weightedItems = items.filter(function (item) {
    return getWeight(item) > 0;
  });

  if (!weightedItems.length) {
    return items[0];
  }

  const totalWeight = weightedItems.reduce(function (sum, item) {
    return sum + getWeight(item);
  }, 0);

  let cursor = rng() * totalWeight;

  for (let i = 0; i < weightedItems.length; i += 1) {
    cursor -= getWeight(weightedItems[i]);
    if (cursor <= 0) {
      return weightedItems[i];
    }
  }

  return weightedItems[weightedItems.length - 1];
}
