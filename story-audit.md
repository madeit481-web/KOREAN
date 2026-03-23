# Story Audit

## 1. Final Lower Story Structure

The lower story now uses this 5-part protagonist-centered structure:

```js
eventOpenings
attentionShiftLines
fandomEscalationLines
collectibleFalloutLines
identityClosings
```

The final `microNovel` is assembled in this exact order:

```js
[eventOpening, attentionShiftLine, fandomEscalationLine, collectibleFalloutLine, identityClosing].join(" ")
```

## 2. Exact Duplicate / Overused Lines Found And Removed

These exact lines were identified as too repeated or too engine-like in prior cleanup and were removed/replaced:

```text
It already looks like the pull people try to act casual about and fail.
One proper close-up from this set and the panic starts immediately.
The replies would get very short very fast: visual, center, face card, then not much else.
A fancam thumbnail with this exact mood would start arguments nobody wins cleanly.
What lands first is composure. What stays is much less manageable.
One stage clip from this mood and people start speaking in screenshots instead of sentences.
By the time it leaves, composure is the thing that did not.
```

## 3. Final ICE_QUEEN Lines

### eventOpenings

```text
1. Your close-up landed, and the room got quieter than anyone expected.
2. The first frame appeared and took all the extra noise out of the timeline with it.
3. Your teaser showed up looking final, like a second try would only have made it weaker.
4. It started with one cold still and somehow made everything around it feel less finished.
5. The post went live, and the immediate reaction was not louder comments. It was a pause.
6. Your reveal did not ask for attention; it changed the temperature and let that speak for itself.
7. The frame arrived with the kind of stillness that makes people check it twice before saying anything.
8. One glance in, and everybody else's reactions started sounding too big for the room.
```

### attentionShiftLines

```text
1. The shot gave the eye nowhere safe to wander, so it kept coming back to you and finding the same answer.
2. Everything unnecessary had been stripped away, which made your face feel less like part of the image and more like the ruling fact of it.
3. The angle cornered attention fast, then made a second look feel like a worse idea in the best way.
4. The visual stayed exact enough that every softer detail around it stopped mattering.
5. Nothing in the frame tried to soften the effect, and that is why your presence landed so cleanly.
6. The closer people looked, the more the image felt arranged around your expression rather than the other way around.
7. The styling kept out of the way, leaving your close-up to do the part nobody could talk around.
8. The frame held still, but your face kept making the whole mood feel more decided.
```

### fandomEscalationLines

```text
1. The comments did not explode. They thinned out into shorter, stranger replies.
2. People tried to write full reactions, deleted half of them, and came back with one line instead.
3. Publicly, everyone sounded composed. Privately, nobody was doing that well.
4. The thread filled with people acting normal in public and clearly failing somewhere offscreen.
5. Nobody needed to overreact; the second look was already doing enough damage quietly.
6. The first replies were respectful. The next ones sounded like vocabulary had become a limited resource.
7. The more the post sat there, the less language the comments seemed to have for it.
8. One calm message would appear, then every reply after that would sound a little less believable.
```

### collectibleFalloutLines

```text
1. The save came fast, then got much more private than the comment section did.
2. One freeze-frame from that close-up would live in people's folders like something slightly incriminating.
3. By the time anyone mentioned the printed version, it already felt less like merch and more like evidence.
4. People started imagining the crop in silence, which usually means the attachment has already happened.
5. This is the kind of still people keep hidden in plain sight and revisit when nobody is watching.
6. A second look was enough to make the whole keep-this behavior noticeably worse.
7. The collectible version hardly needed promoting; the image already looked like something people would guard.
8. Even the idea of owning the close-up felt a little too revealing to say out loud.
```

### identityClosings

```text
1. By the end, it no longer felt like a result. It felt like proof that your idol version could change a room without raising its voice.
2. What stayed behind was not noise but certainty: this was the frame people would remember when they talked about your coldest era.
3. After that, your idol version felt less like a concept and more like something settled in place for good.
4. The post ended, but the silence around it kept doing the work.
5. It left behind the kind of evidence people revisit when they want to remember exactly when your image turned untouchable.
6. By then, your close-up had already become the version of you people fail to explain and keep anyway.
7. The aftermath was simple: the frame held still, and your idol identity did not need to move to become unmistakable.
8. Later, this would be the still people reopen when they want to feel the room change again.
```

## 4. Five Full Generated Result Objects

```json
[
  {
    "tone": "FIRST_LOVE",
    "resultCard": {
      "headline": "Camera stays here.",
      "title": "Soft Debut Pull",
      "ratingLabel": "★★★★",
      "microNovel": "The first post dropped quietly, which is probably why everyone stayed longer than planned. The closer people looked, the less it felt like styling and the more it felt like they had caught the exact version of you they were supposed to remember. At first everyone sounded normal. A few replies later they were clearly talking like this meant something. The save happened early, then the lockscreen jokes started sounding a little too sincere. When the post cooled down, what stayed was the feeling that this was the frame people would use when they talked about where your idol version really began.",
      "fanReaction": "Too gentle to scroll past."
    }
  },
  {
    "tone": "SOFT_GLAM",
    "resultCard": {
      "headline": "Light finds you.",
      "title": "Polished Face Card",
      "ratingLabel": "Top 1%",
      "microNovel": "It opened like a clean, luminous reveal, the kind people think they can stay normal about. The shot stayed refined, and somehow that only made the close-up feel more decisive. At first the replies were all visual praise, then the same people kept coming back sounding less composed each time. Before the styling was even fully discussed, people were already imagining the cropped version they would keep for themselves. After that, your polished side stopped feeling decorative and started feeling definitive.",
      "fanReaction": "The camera picked a favorite."
    }
  },
  {
    "tone": "ICE_QUEEN",
    "resultCard": {
      "headline": "Sharp from frame one.",
      "title": "Face Card Warning",
      "ratingLabel": "Top 1%",
      "microNovel": "It started with one cold still and somehow made everything around it feel less finished. The shot gave the eye nowhere safe to wander, so it kept coming back to you and finding the same answer. The thread filled with people acting normal in public and clearly failing somewhere offscreen. One freeze-frame from that close-up would live in people's folders like something slightly incriminating. It left behind the kind of evidence people revisit when they want to remember exactly when your image turned untouchable.",
      "fanReaction": "That frame is dangerous."
    }
  },
  {
    "tone": "COMEBACK_QUEEN",
    "resultCard": {
      "headline": "Main-stage warning.",
      "title": "Era Starter",
      "ratingLabel": "★★★★",
      "microNovel": "The teaser appeared, and everyone immediately understood this was the part they would point back to later. The image felt built for a larger moment, but your expression is what made it land as one. One screenshot hit the thread and the replies started sounding like damage control. The save-first impulse showed up before the full reaction had even caught up. After that, the comeback stopped sounding like anticipation and started sounding like your name attached to it.",
      "fanReaction": "Nobody was ready for that."
    }
  },
  {
    "tone": "Y2K_POPSTAR",
    "resultCard": {
      "headline": "Bright trouble only.",
      "title": "Trend Magnet",
      "ratingLabel": "★★★★★",
      "microNovel": "The first frame landed bright, quick, and weirdly easy to keep looking at. The image stayed lively, but the attention kept circling back to you like the rest had already done its job. The comments started cute and ended with people sounding much more invested than planned. It already felt like the kind of still that ends up in camera rolls, reposts, and one very defended lockscreen. By then, the frame had already done the real work of making your idol version feel easy to project onto and hard to put down.",
      "fanReaction": "Too cute to scroll."
    }
  }
]
```
