export const defaultRatingLabels = [
  { label: "★★★★", weight: 52 },
  { label: "★★★★★", weight: 34 },
  { label: "Top 3%", weight: 9 },
  { label: "Top 1%", weight: 5 }
];

const headlinePools = {
  FIRST_LOVE: [
    "Soft launch only.",
    "Camera stays here.",
    "Quiet center pull.",
    "This feels personal.",
    "Saved too fast.",
    "Gentle scene stealer.",
    "Too soft to lose.",
    "Stayed past the first look.",
    "Sweet frame warning.",
    "First-look favorite."
  ],
  SOFT_GLAM: [
    "Light finds you.",
    "Grace holds here.",
    "Camera chose you.",
    "Luminous on impact.",
    "Grace lands first.",
    "Too smooth to skip.",
    "Hard to leave there.",
    "The close-up stayed.",
    "This lands slowly.",
    "Grace kept working."
  ],
  ICE_QUEEN: [
    "Cold frame warning.",
    "Silence looks good.",
    "The room shifted.",
    "Sharp from frame one.",
    "No soft landing.",
    "Freeze-frame threat.",
    "Too still to ignore.",
    "Center under ice.",
    "This cuts clean.",
    "Calm but fatal."
  ],
  COMEBACK_QUEEN: [
    "Era starts now.",
    "Pressure on sight.",
    "Stage comes next.",
    "This shifts eras.",
    "Main-stage warning.",
    "The room got louder.",
    "Comeback in frame.",
    "Trouble before chorus.",
    "Center takes over.",
    "Impact before motion."
  ],
  Y2K_POPSTAR: [
    "Too cute to skip.",
    "Saved on sight.",
    "Lockscreen incoming.",
    "Cute, then sticky.",
    "Pop girl frame.",
    "Made for replays.",
    "Camera roll pending.",
    "Cute, then sticky.",
    "This catches fast.",
    "Main pop energy."
  ]
};

export const storyScenes = [
  "TEASER_DROP",
  "DEBUT_STAGE",
  "CONCERT_FANCAM",
  "MUSIC_SHOW_CLOSEUP",
  "ENDING_SHOT",
  "PHOTOCARD_PULL",
  "VIRAL_EDIT",
  "LOCKSCREEN_SAVE"
];

export const sceneStoryPools = {
  TEASER_DROP: {
    eventOpenings: [
      "Your teaser dropped into the feed looking small enough to skim, and then nobody treated it that way.",
      "The preview still went up, and the mood shifted before anybody had a proper caption ready.",
      "Your teaser post went up quietly, and the reaction refused to stay that way.",
      "A single teaser frame showed up, and people started treating the release like it had already begun.",
      "The first reveal landed, and the post stopped behaving like something casual right away.",
      "Your teaser went up and people clicked in expecting one pretty frame, then stayed long enough for the mood to change.",
      "The first reveal arrived like a small update, then started pulling a much bigger reaction behind it.",
      "Your teaser hit the feed and the replies changed faster than the caption underneath it."
    ],
    collectibleOrSpreadLines: [
      "Before the thread settled, people were already saving your teaser frame like they knew it would matter later.",
      "The screenshot count started moving before anyone had fully decided what to say about your teaser.",
      "People kept the teaser close first and explained themselves after.",
      "The save-first behavior started so early it made the rest of the reaction easier to believe.",
      "By the time the post cooled off, your teaser was already living in private saves.",
      "People started keeping the teaser on hand like they already knew it would be the frame they pointed back to.",
      "The first save happened before the thread had settled on a normal tone.",
      "Your teaser kept getting reopened like the image had already decided to stay."
    ]
  },
  DEBUT_STAGE: {
    eventOpenings: [
      "Your debut stage found one close-up and the whole performance started taking its shape from there.",
      "The first stage camera found you early, and that was enough to change the temperature of the set.",
      "Your debut close-up landed before the song had fully settled, and people reacted like they had just been given the real introduction.",
      "One shot from your first stage made everything after it feel less theoretical.",
      "Your debut moment arrived through the camera all at once, like the stage had already picked the frame people would keep.",
      "The first performance was still finding its balance when your close-up made the whole stage feel decided.",
      "Your debut frame came in mid-performance and suddenly the rest of the stage had to catch up to it.",
      "One stage close-up was enough to make your debut stop feeling new and start feeling established."
    ],
    collectibleOrSpreadLines: [
      "Before the stage clips were even done circulating, people were already keeping that close-up on hand.",
      "Replay behavior started with your debut close-up and never really came back down.",
      "That first stage shot turned into the one people kept for later proof.",
      "People started clipping your debut moment before the performance had fully finished doing its work.",
      "The close-up got saved like it was already the part everyone would point back to later.",
      "The first stage replay happened so quickly it made the rest of the reaction feel inevitable.",
      "People held onto the debut close-up like it already explained the whole performance.",
      "Your stage frame started circulating as the proof people wanted ready for later."
    ]
  },
  CONCERT_FANCAM: {
    eventOpenings: [
      "Your concert fancam found the exact second the crowd stopped sounding casual.",
      "One concert clip started moving around, and suddenly your stage energy felt much harder to contain.",
      "The fancam caught your moment cleanly enough that people started replaying it before the song was even over.",
      "Your concert angle became the clip people passed around like the crowd had already settled it.",
      "One circulating concert clip was enough to make your presence feel bigger than the whole edit around it.",
      "The fancam picked up your moment mid-set and the reaction started spreading before the stage had finished.",
      "Your concert clip landed with crowd noise behind it, and somehow that only made your frame feel more personal.",
      "One handheld concert shot was enough to make people sound like they had been there even if they had not."
    ],
    collectibleOrSpreadLines: [
      "The replay count climbed fast once that fancam moment started making the rounds.",
      "People kept passing the concert clip around like they needed everyone else to see what they had just seen.",
      "That fancam second got saved the way other people save proof.",
      "The concert clip kept coming back in chats, folders, and rewatches long after the set moved on.",
      "By the time the crowd noise faded out, your fancam moment was already the one people kept returning to.",
      "The saved clip kept resurfacing like nobody had really finished reacting the first time.",
      "People replayed the same concert second until the reaction stopped sounding accidental.",
      "That one fancam stretch started living in rewatches almost immediately."
    ]
  },
  MUSIC_SHOW_CLOSEUP: {
    eventOpenings: [
      "Your music-show close-up hit during the broadcast and made the whole stage feel newly important.",
      "The TV camera found you, and the reaction changed before the next cut could help.",
      "One music-show close-up landed on screen and immediately stopped behaving like a routine broadcast moment.",
      "Your broadcast close-up went by in a second, then kept living in everybody's head much longer than that.",
      "The music-show camera caught your face at exactly the wrong time for anyone trying to stay casual.",
      "Your broadcast close-up slipped in and somehow became the part nobody moved on from.",
      "The camera found you mid-stage, and that single second started doing more than the segment around it.",
      "One close-up from the broadcast was enough to make the whole performance feel newly centered on you."
    ],
    collectibleOrSpreadLines: [
      "The screenshot happened fast, like everyone knew the close-up would be the thing they kept.",
      "People were already saving the broadcast frame before the stage captions caught up.",
      "That TV close-up turned into the screenshot people used when they wanted the whole point in one frame.",
      "The broadcast clip kept getting paused at your close-up for reasons nobody really argued with.",
      "Your broadcast frame got kept the way certain close-ups always do: instantly and a little too personally.",
      "The pause-and-save behavior started as soon as your close-up hit the screen.",
      "People treated the broadcast frame like the screenshot had already been chosen for them.",
      "Your close-up kept getting frozen at the same second until the post-show reaction started sounding personal."
    ]
  },
  ENDING_SHOT: {
    eventOpenings: [
      "Your ending shot landed right before the cut, and that was the frame people got caught on.",
      "The final camera found you, and that last second ended up doing more than the whole song around it.",
      "One ending frame landed, and suddenly the whole performance made a different kind of sense.",
      "Your last shot hit the screen and made the stage feel finished in a way people could not ignore.",
      "The ending close-up went by fast, then refused to leave the timeline quietly.",
      "Your final frame caught the room at exactly the point where people were most likely to keep it.",
      "The stage was already ending when your last shot turned into the thing everyone kept talking around.",
      "One final close-up was enough to make the rest of the performance feel like it had been building toward you."
    ],
    collectibleOrSpreadLines: [
      "The final screenshot happened instantly, like the last shot had already chosen itself.",
      "People kept the ending frame like it was the part that let the whole performance stay with them.",
      "Your last shot started living in saves before the stage had even cleared off the screen.",
      "The replay usually starts at the ending shot when people already know what they came back for.",
      "That closing frame turned into the screenshot people sent when they wanted the whole point at once.",
      "The keep-this behavior started right at the cut and never really backed off.",
      "Your ending shot kept resurfacing like nobody had actually finished reacting when the stage ended.",
      "The final frame got saved with the kind of certainty people usually pretend was accidental."
    ]
  },
  PHOTOCARD_PULL: {
    eventOpenings: [
      "Your printed version showed up and suddenly people were acting like possession had entered the story.",
      "The photocard pull landed, and the reaction got weirdly personal almost on contact.",
      "One printed close-up of you was enough to change the whole mood from admiration to keeping.",
      "The photocard version surfaced and immediately stopped feeling like something people could be normal about.",
      "Your pulled card hit the light once, and the conversation stopped pretending it was just merch.",
      "The printed version appeared and the reaction shifted from praise into people quietly wanting it for themselves.",
      "Your card pull showed up like a small collector moment and instantly became something much less casual.",
      "One printed frame of you was enough to make the whole conversation feel oddly possessive."
    ],
    collectibleOrSpreadLines: [
      "People were already talking like your card would never stay in stock for long.",
      "The keeping instinct showed up fast once the printed version made the problem feel real.",
      "That pull turned into the one people imagined holding onto before they had even seen it twice.",
      "The card got treated less like an item and more like something people would quietly guard.",
      "Before long, your printed version was the one people had already started worrying over.",
      "People started talking about the pull like they were already losing out on it.",
      "The card slipped into must-keep territory almost immediately.",
      "Once the printed version appeared, the reaction started sounding a lot less casual and a lot more possessive."
    ]
  },
  VIRAL_EDIT: {
    eventOpenings: [
      "Your frame started moving through edits before anyone had figured out how to talk about it cleanly.",
      "One reposted edit found your face and the clip stopped belonging only to the original post.",
      "Your viral frame started circulating like people had already agreed it was the part to keep.",
      "The edit-account version of your moment got out early and changed the scale of the reaction with it.",
      "Your face hit one good repost and the whole thing started moving faster than the caption could.",
      "The first repost picked up your frame and suddenly it was everywhere people save the good parts.",
      "Your moment got clipped into a viral edit and the reaction started outrunning the original post.",
      "One spread-out edit was enough to make your frame feel like shared property on the timeline."
    ],
    collectibleOrSpreadLines: [
      "The reposts started fast, and your frame kept looking like the reason people were opening the post again.",
      "People were already cropping around your moment like the edit had only confirmed what they wanted to keep.",
      "That one spread-out frame kept showing up in saves, shares, and somebody else's version of the story.",
      "The viral clip made your frame feel pre-saved, like the internet had already decided to keep it.",
      "By the time the edit settled, your moment had already become the one people passed around.",
      "Your frame kept showing up in reposts like the internet had chosen it before anyone said so out loud.",
      "People started keeping the edited version close while pretending it was just for the crop.",
      "The spread happened quickly enough that your moment felt familiar before it had time to get old."
    ]
  },
  LOCKSCREEN_SAVE: {
    eventOpenings: [
      "Your image had the exact kind of hold that makes a lockscreen decision happen too early.",
      "The camera-roll version of your frame started feeling real before anyone was ready to admit it.",
      "One look at your image and people were already treating it like it had a place on their phone.",
      "Your frame showed up with the kind of pull that usually ends in a screenshot nobody deletes.",
      "The save happened so fast it barely left room for people to pretend it was casual.",
      "Your frame landed like the kind of image people pretend is temporary on their phone and never actually move on from.",
      "The first reaction had barely finished when your image was already behaving like somebody's next lockscreen.",
      "One glance at your frame and the camera-roll instinct kicked in before the comments caught up."
    ],
    collectibleOrSpreadLines: [
      "Your frame kept slipping toward lockscreen status while people were still calling it a casual save.",
      "The camera roll made room for your image before the comments had finished with it.",
      "People kept your frame close in the way they usually save for things they do not plan to outgrow.",
      "The screenshot turned into a keep-this file almost immediately.",
      "What started as one save kept behaving like the image people wanted within reach.",
      "People started acting like your frame belonged on the front page of their phone before they had a good reason ready.",
      "The save happened quickly, then settled into the kind of keep-close habit nobody talks around honestly.",
      "Your image made its way into camera rolls with the sort of certainty people usually pretend is accidental."
    ]
  }
};

export const toneStoryPools = {
  FIRST_LOVE: {
    attentionShiftLines: [
      "The closer people looked, the less it felt like styling and the more it felt like they had caught the exact version of you they were supposed to remember.",
      "The moment stayed gentle, which only made the attention settle on your face faster.",
      "The frame stayed light, but your expression kept making it feel more personal than anyone planned on.",
      "What should have read as a quick pretty look kept turning into a close-up people sat with longer than they meant to.",
      "The softness held, but the center of the image kept getting more specific the longer anyone stared at it.",
      "People went in for the mood and ended up fixed on the part of the shot that looked unmistakably yours.",
      "The details stayed delicate, but the eye kept landing on you like the rest of the frame had already done its job.",
      "It never got louder than it needed to; it just made your face the only part anyone could follow."
    ],
    fandomEscalationLines: [
      "The comments started polite, then somebody admitted they had already come back three times.",
      "People tried to keep the replies light, but the tone shifted the second someone called it first-bias behavior.",
      "At first everyone sounded normal. A few replies later they were clearly talking like this meant something.",
      "Nobody overreacted right away; they just kept reopening the post until the comments got more honest.",
      "The thread stayed sweet for a minute, then turned into people admitting they had stayed longer than they meant to.",
      "One person called it harmless and the rest of the comments quietly proved otherwise.",
      "The reaction never got loud. It just got personal, very fast.",
      "People started with compliments and ended up sounding like they had taken it a little too personally."
    ],
    identityClosings: [
      "By the time the moment passed, it no longer felt like a result image. It felt like the start of the version of you people would get attached to first.",
      "After that, the frame stopped reading as just pretty and started reading like the start of a first-bias story.",
      "When the moment cooled down, this was the frame people kept returning to when they talked about where it started.",
      "It stayed behind the way certain saved images do, until people started remembering you through it.",
      "By the end, the softness was still there, but so was the feeling that your idol version had already become real to other people.",
      "Later, this would be the still people point to when they swear that was the moment you became personal.",
      "It finished softly, but the aftermath felt like your name had already settled into somebody's bias list.",
      "After one moment like this, the idol version of you stops sounding hypothetical."
    ]
  },
  SOFT_GLAM: {
    attentionShiftLines: [
      "The light held where it needed to, but the part people kept returning to was how fully your face anchored the whole image.",
      "Nothing in the frame overreached, which made the attention settle on you with almost no resistance.",
      "The shot stayed controlled, and somehow that only made the close-up feel more personal.",
      "People came for the glow, then realized they were staying for you specifically.",
      "Every detail sat in place so neatly that the eye had nowhere to go except back to your expression.",
      "The styling made the image easy to praise, but your face is what made people keep hovering there.",
      "The close-up never chased attention; it just kept collecting it anyway.",
      "What looked smooth at first kept turning into a frame that felt strangely final around you."
    ],
    fandomEscalationLines: [
      "The first compliments stayed polished, then the replies got much more revealing.",
      "At first the replies were all visual praise, then the same people kept coming back sounding less composed each time.",
      "The first replies stayed very polite, which only made the second round more revealing.",
      "The thread stayed elegant for about thirty seconds before people started admitting they had reopened your close-up again.",
      "A few replies tried to keep it tasteful, then somebody said that close-up was staying, and the tone changed for good.",
      "People began with compliments and ended up sounding much more invested than that should have required.",
      "The reaction looked polished on the surface, but the repeat views made the real story obvious.",
      "By the time someone said they were overreacting, they had already reopened it again."
    ],
    identityClosings: [
      "By the end, it was no longer just beautiful. It was the one people kept finding their way back to.",
      "What lingered was the sense that your idol version had gotten under people's guard.",
      "After that, your polished side stopped feeling decorative and started feeling strangely dependable.",
      "The moment closed, but it left behind the kind of evidence people attach to the version of you that changed the mood.",
      "It finished as elegance and stayed behind as the version people could not quite leave alone.",
      "By then, the frame had already done its real job: it made your idol version feel settled and believable.",
      "Later, this is the version people reopen when they want the one that still works on them.",
      "It leaves the feeling that your idol identity did not just appear here. It quietly locked in."
    ]
  },
  ICE_QUEEN: {
    attentionShiftLines: [
      "The shot gave the eye nowhere safe to wander, so it kept coming back to you and finding the same answer.",
      "Everything unnecessary had been stripped away, which made your face feel less like part of the image and more like the ruling fact of it.",
      "The angle cornered attention fast, then made a second look feel like a worse idea in the best way.",
      "The visual stayed exact enough that every softer detail around it stopped mattering.",
      "Nothing in the frame tried to soften the effect, and that is why your presence landed so cleanly.",
      "The closer people looked, the more the image felt arranged around your expression rather than the other way around.",
      "The styling kept out of the way, leaving your close-up to do the part nobody could talk around.",
      "The frame held still, but your face kept making the whole mood feel more decided."
    ],
    fandomEscalationLines: [
      "The comments did not explode. They thinned out into shorter, stranger reactions.",
      "People tried to write full reactions, deleted half of them, and came back with one line instead.",
      "Publicly, everyone sounded composed. Privately, nobody was doing that well.",
      "The thread filled with people acting normal in public and clearly failing somewhere offscreen.",
      "Nobody needed to overreact; the second look was already doing enough damage quietly.",
      "The first replies were respectful. The next ones sounded like vocabulary had become a limited resource.",
      "The more the moment sat there, the less language the comments seemed to have for it.",
      "One calm message would appear, then every reply after that would sound a little less believable."
    ],
    identityClosings: [
      "By the end, it no longer felt like a result. It felt like proof that your idol version could change a room without raising its voice.",
      "What stayed behind was not noise but certainty: this was the frame people would remember when they talked about your coldest era.",
      "After that, your idol version felt less like a concept and more like something settled in place for good.",
      "The moment ended, but the silence around your frame kept doing the work.",
      "It left behind the kind of evidence people revisit when they want to remember exactly when your image turned untouchable.",
      "By then, your close-up had already become the version of you people fail to explain and keep anyway.",
      "The aftermath was simple: the frame held still, and your idol identity did not need to move to become unmistakable.",
      "Later, this would be the still people reopen when they want to feel the room change again."
    ]
  },
  COMEBACK_QUEEN: {
    attentionShiftLines: [
      "The frame opened wide, and then everything in it started pointing back to you.",
      "Everything in the frame pushed in the same direction, and it all ended with your face holding the center of the pressure.",
      "The close-up carried enough stage weight to make a still image feel like part of the performance already.",
      "Nothing looked wasted in the frame; every detail kept steering the eye back to you like the chorus had already started.",
      "The scale was already there, but your close-up is what made the moment lock into place.",
      "The frame opened wide, then kept narrowing toward you until the whole moment felt personal and huge at once.",
      "Even before motion, the shot treated you like the part the crowd was waiting for.",
      "What made the image feel large was not the styling alone; it was the way everything kept resolving into your face."
    ],
    fandomEscalationLines: [
      "The comments jumped from hype to something closer to alarm almost immediately.",
      "People started typing like the era had officially begun and nobody was really exaggerating.",
      "One screenshot reached the thread, and the whole reaction tilted almost instantly.",
      "The first reactions came in fast, and the next round sounded even less contained.",
      "Nobody sounded calm for long once the still made its way through the timeline.",
      "The thread turned into instant proof that everyone had underestimated the scale of your frame.",
      "People kept pretending their bias was safe, then deleted that idea in real time.",
      "By the second wave of replies, the whole comment section was talking like the comeback had already claimed them."
    ],
    identityClosings: [
      "By the end, it felt less like a result card and more like the frame your idol era would be measured against.",
      "After that, people talked about the moment like it had already changed what came next.",
      "After that, the comeback stopped sounding like anticipation and started sounding like your name attached to it.",
      "The moment closed, but your frame kept deciding the scale of everything that came after it.",
      "Later, this is the still people would reach for when they talked about where your era really began.",
      "Once that close-up landed, everything after it had to scale up around you.",
      "By then, the frame was already doing the job people usually leave to the stage.",
      "After that, everything else just made the shift harder to argue with."
    ]
  },
  Y2K_POPSTAR: {
    attentionShiftLines: [
      "The brighter details hit first, but the second look kept ending with you.",
      "Nothing in the frame was shy, yet your face kept the whole image from turning into noise.",
      "The closer people looked, the more the playful styling started feeling like a way into your close-up.",
      "Everything around it stayed in motion, but the attention kept landing back on you.",
      "The color hit first, then your face made the whole post feel worth staying in.",
      "The shot looked fun on impact, then kept getting more specific around you on the second look.",
      "Everything clicked into place fast enough to feel easy, which made it harder to forget.",
      "The frame had plenty going on, but it still made your face feel like the one part people remembered clearly."
    ],
    fandomEscalationLines: [
      "The save happened before anyone had a story ready for it.",
      "The replies kept joking for a minute, and then it was obvious people were attached.",
      "Someone joked about making it the lockscreen and half the replies got a little too quiet after that.",
      "The comments started playful, then gave away how attached people had gotten.",
      "Nobody got loud about it; they just kept pretending the save was casual.",
      "The thread filled with people acting light about it while clearly coming back again.",
      "On the surface, everybody sounded casual. The repeat saves said otherwise.",
      "By the time someone said it was just for the vibe, the post had already become personal."
    ],
    identityClosings: [
      "By the time the moment cooled off, this was already the frame people kept coming back to.",
      "What stayed behind was the sense that your idol version had quietly taken over everyone's camera roll.",
      "After that, the image stopped reading as just playful and started reading as the frame people kept close.",
      "Even after the moment passed, this was the frame people kept closest.",
      "Later, this became the frame people kept reaching for when they wanted your playful side in one shot.",
      "By then, the frame was already the one people kept around without needing to explain why.",
      "It leaves behind the feeling that your brightest frame is also the one people get attached to fastest.",
      "Once a still like this shows up, your idol identity starts living a little too comfortably in other people's saves."
    ]
  }
};

export const englishStoryLineReplacements = [
  {
    from: "Your printed version showed up and suddenly people were acting like possession had entered the story.",
    to: "Your printed version showed up and people stopped acting normal about it."
  },
  {
    from: "That first stage shot turned into the one people kept for later proof.",
    to: "That first stage shot became the one people kept."
  },
  {
    from: "That fancam second got saved the way other people save proof.",
    to: "That fancam second got saved like it mattered."
  },
  {
    from: "That TV close-up turned into the screenshot people used when they wanted the whole point in one frame.",
    to: "That TV close-up became the screenshot people kept sending around."
  },
  {
    from: "That one spread-out frame kept showing up in saves, shares, and somebody else's version of the story.",
    to: "That frame kept turning up in saves, shares, and someone else's edits."
  },
  {
    from: "By the time the moment passed, it no longer felt like a result image. It felt like the start of the version of you people would get attached to first.",
    to: "By the time it passed, it felt like the start of the side people would get attached to first."
  },
  {
    from: "By the end, it no longer felt like a result. It felt like proof that your idol version could change a room without raising its voice.",
    to: "By the end, it no longer felt like a result. It felt like the kind of frame that could change a room without raising its voice."
  },
  {
    from: "By the end, it felt less like a result card and more like the frame your idol era would be measured against.",
    to: "By the end, it felt less like a result card and more like the frame the era would be measured against."
  }
];

export const englishHookSentenceReplacements = [
  {
    from: "Your teaser dropped into the feed looking small enough to skim, and then nobody treated it that way.",
    to: "Your teaser dropped small, and nobody treated it that way."
  },
  {
    from: "The preview still went up, and the mood shifted before anybody had a proper caption ready.",
    to: "The preview went up, and the mood changed before the caption did."
  },
  {
    from: "Your teaser post went up quietly, and the reaction refused to stay that way.",
    to: "Your teaser went up quietly, and the reaction didn't stay there."
  },
  {
    from: "Your debut stage found one close-up and the whole performance started taking its shape from there.",
    to: "One debut close-up was enough to set the whole stage."
  },
  {
    from: "Your concert fancam found the exact second the crowd stopped sounding casual.",
    to: "One concert clip was enough to change the temperature."
  },
  {
    from: "Your music-show close-up hit during the broadcast and made the whole stage feel newly important.",
    to: "Your music-show close-up hit, and the whole stage felt different."
  },
  {
    from: "Your ending shot landed right before the cut, and that was the frame people got caught on.",
    to: "Your last shot landed, and nobody stayed casual after that."
  },
  {
    from: "Your image had the exact kind of hold that makes a lockscreen decision happen too early.",
    to: "Your image had people making the lockscreen decision too early."
  }
];

export const resultCardTextByTone = {
  FIRST_LOVE: {
    tone: "FIRST_LOVE",
    headlines: headlinePools.FIRST_LOVE,
    titles: ["First Bias Energy","Save-Worthy Center","Soft Debut Pull","Soft Camera Pick","Sweet Center Mood","Soft Focus Favorite","Quiet Bias Shift","Debut Day Pull","Saved Too Fast","Gentle Center Pull"],
    ...toneStoryPools.FIRST_LOVE,
    fanReactions: ["One screenshot and its over.","Saved before it settled.","First-bias material.","This one got personal.","Saved before thinking.","Too gentle to scroll past.","The comments changed fast.","That frame stayed with me.","The photocard panic starts here.","Nobody stayed normal."]
  },
  SOFT_GLAM: {
    tone: "SOFT_GLAM",
    headlines: headlinePools.SOFT_GLAM,
    titles: ["Visual Royalty","Luminous Center","Stayed in Focus","Soft Glam Favorite","Grace in Focus","Velvet Visual","Camera Favorite","Hard to Leave Alone","Soft Glam Pull","Center in Focus"],
    ...toneStoryPools.SOFT_GLAM,
    fanReactions: ["The camera picked a favorite.","That close-up stayed.","That still is trouble.","Nobody stayed normal.","Graceful, then dangerous.","One save was never enough.","The comments changed tone.","Too polished to scroll.","That face won quietly.","Reference material, sure."]
  },
  ICE_QUEEN: {
    tone: "ICE_QUEEN",
    headlines: headlinePools.ICE_QUEEN,
    titles: ["Center Aura","Cold Visual","Face Card Warning","Silent Damage","Clean-Cut Threat","Frozen Favorite","Sharp Close-Up","Quiet Threat","Ice Visual","No-Words Frame"],
    ...toneStoryPools.ICE_QUEEN,
    fanReactions: ["That frame is dangerous.","The camera already picked a favorite.","Cold visual, bad for me.","One look was enough.","That stare did enough.","Nobody stayed composed.","Visual too severe.","Saved in silence.","No one had words.","The room shifted first."]
  },
  COMEBACK_QUEEN: {
    tone: "COMEBACK_QUEEN",
    headlines: headlinePools.COMEBACK_QUEEN,
    titles: ["Era Starter","Stage Takeover","Comeback Pressure","Visual Detonation","Main Stage Pull","Killing Part","Era Shift","Center Takeover","Teaser Trouble","Stage Alarm"],
    ...toneStoryPools.COMEBACK_QUEEN,
    fanReactions: ["The era starts here.","That was the turning point.","That frame changed the room.","Killing part in photo form.","Nobody was ready for that.","That frame changed the rollout.","That frame was the thumbnail.","One screenshot and its over.","The comments broke first.","That close-up did damage."]
  },
  Y2K_POPSTAR: {
    tone: "Y2K_POPSTAR",
    headlines: headlinePools.Y2K_POPSTAR,
    titles: ["Trend Magnet","Close-Up Keeper","Camera Roll Favorite","Main Pop Girl","Pop Girl Frame","Saved on Sight","Lockscreen Pull","Pop Girl Center","Replay Magnet","Too Cute Center"],
    ...toneStoryPools.Y2K_POPSTAR,
    fanReactions: ["Too cute to scroll.","This already looks edited.","Saved before loading.","The camera had fun here.","That shot is trouble.","The save happened first.","This went straight to saves.","That one stayed open.","Cute, then dangerous.","Already in my camera roll."]
  }
};


