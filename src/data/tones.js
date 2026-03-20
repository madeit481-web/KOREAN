export const toneConfigs = [
  {
    id: "FIRST_LOVE",
    label: "First Love",
    description: "Youthful, airy, soft romantic idol energy with clean preppy charm.",
    preferredOutfitCategories: ["preppy-school"],
    preferredHairColorCategories: ["natural-brown-black", "pink-rose-pastel"],
    preferredHairStyleCategories: ["cute-buns-braids-y2k", "soft-natural-long", "tied-back-ponytail-updo"],
    preferredTags: ["youthful", "sweet", "airy", "preppy", "school", "soft", "romantic", "clean", "braid", "ribbon", "natural", "brown", "pink", "see-through-bangs"]
  },
  {
    id: "SOFT_GLAM",
    label: "Soft Glam",
    description: "Elegant, polished, graceful stage luxury with approachable femininity.",
    preferredOutfitCategories: ["glam-luxury-stage", "chic-formal-minimal"],
    preferredHairColorCategories: ["natural-brown-black", "blonde-platinum-ash", "pink-rose-pastel", "multi-tone-ombre-contrast"],
    preferredHairStyleCategories: ["soft-natural-long", "tied-back-ponytail-updo", "chic-layered-short-medium"],
    preferredTags: ["elegant", "feminine", "polished", "luxury", "graceful", "soft", "refined", "wave", "updo", "sleek", "pearl", "cream", "silver", "dusty-rose"]
  },
  {
    id: "ICE_QUEEN",
    label: "Ice Queen",
    description: "Cool, sharp, high-fashion visual energy with monochrome confidence.",
    preferredOutfitCategories: ["chic-formal-minimal"],
    preferredHairColorCategories: ["natural-brown-black", "blonde-platinum-ash", "vivid-statement-colors"],
    preferredHairStyleCategories: ["tied-back-ponytail-updo", "soft-natural-long", "chic-layered-short-medium"],
    preferredTags: ["cool", "chic", "sharp", "minimal", "monochrome", "black", "ash", "silver", "platinum", "sleek", "bob", "hush-cut", "editorial", "straight"]
  },
  {
    id: "COMEBACK_QUEEN",
    label: "Comeback Queen",
    description: "Dramatic, glamorous, stage-commanding energy built for a legendary era.",
    preferredOutfitCategories: ["glam-luxury-stage", "sporty-street-y2k", "chic-formal-minimal"],
    preferredHairColorCategories: ["vivid-statement-colors", "multi-tone-ombre-contrast", "blonde-platinum-ash"],
    preferredHairStyleCategories: ["tied-back-ponytail-updo", "soft-natural-long", "chic-layered-short-medium", "cute-buns-braids-y2k"],
    preferredTags: ["dramatic", "confident", "glamorous", "stage", "performance", "legendary", "bold", "red", "indigo", "black-platinum", "sequin", "military", "fierce"]
  },
  {
    id: "Y2K_POPSTAR",
    label: "Y2K Popstar",
    description: "Playful, sporty, colorful pop-girl energy with bratty-cute Y2K styling.",
    preferredOutfitCategories: ["sporty-street-y2k", "preppy-school"],
    preferredHairColorCategories: ["pink-rose-pastel", "multi-tone-ombre-contrast", "vivid-statement-colors"],
    preferredHairStyleCategories: ["cute-buns-braids-y2k", "chic-layered-short-medium"],
    preferredTags: ["playful", "trendy", "sporty", "colorful", "y2k", "cute", "bratty", "pigtails", "buns", "braid", "clips", "pastel", "neon", "opal", "fun"]
  }
];

export const compatibleToneFallbacks = {
  FIRST_LOVE: ["SOFT_GLAM", "Y2K_POPSTAR"],
  SOFT_GLAM: ["FIRST_LOVE", "ICE_QUEEN"],
  ICE_QUEEN: ["SOFT_GLAM", "COMEBACK_QUEEN"],
  COMEBACK_QUEEN: ["ICE_QUEEN", "Y2K_POPSTAR"],
  Y2K_POPSTAR: ["FIRST_LOVE", "COMEBACK_QUEEN"]
};
