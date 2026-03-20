import { toneIds } from "../types/kpop.js";
import { pickRandom } from "./random.js";

export function chooseTone(rng = Math.random) {
  return pickRandom(toneIds, rng);
}
