---
layout: post
title: "The Hidden Cost of Teaching Image Generation"
date: 2026-08-25
excerpt: "You can't learn if the cost of exploration is more than usage limits allow."
---

One thing I had to figure out today was the math.

How many images can a student generate before they hit a limit? How many attempts does an assignment actually require? How many failed versions should I assume they need before they get to something usable? How many days do they realistically have to spread that work out? And, most importantly, does the limit make them afraid to experiment?

That last one is the real issue.

This wasn't something I built the class around from scratch. We've had access to ChatGPT and its image tools for over a year. I've taught versions of this class before, and I've run workshops that helped lead into the way this class is built now. So when I planned this semester, I planned it with that existing access in mind.

Then on August 3, limits were added to our ChatGPT usage. Classes started about two weeks later.

So, yeah. Curveball.

That's one of the hard parts of teaching with new technology. You can plan and plan and plan, and then something changes right before the thing goes live. A feature changes. A model changes. A pricing structure changes. A limit appears. And then you have to figure out whether the assignment still works under the new conditions.

For image generation, the issue is not just whether students can make images. The issue is whether they can make enough images to learn from the process.

I'm teaching students how to use AI tools as part of a creative process. For image generation, that means they need room to try things, revise, compare, fail, adjust language, rethink the visual direction, and try again. If every generation feels scarce, students are not going to explore. They're going to protect their quota. They'll make one or two attempts, pick the least bad version, and move on.

<blockquote class="pull-quote">
  That's not learning the tool. That's rationing.
</blockquote>

The current ChatGPT Edu setup gives undergraduate students 60 credits per month, plus 3 image generations per rolling 24-hour period before image generation starts using credits. After that, image generations cost 5 credits each.

At first glance, 3 free images a day sounds like something. But once I started mapping it onto actual assignments, it got tight fast.

Here's the rough course math.

For the remaining image-related assignments, students need:

- Everyday Favorites: minimum 10 images
- Exploring Influence: using Firefly, so I'm not counting it here
- Building Consistency: minimum 3 images, each using 2 reference images
- Controlling Time: minimum 2 images, each using 2 reference images
- Final Project: minimum 6 images, each using 2 reference images

If I only count the final submitted images, that's 21 images. But several of these assignments also require reference images, and if those references are generated too, that adds another 22 images. So the real minimum is closer to 43 generations.

But minimums are not how creative work happens. At least, not if the assignment is doing what I want it to do.

So I added a multiplier for exploration. A 2x multiplier would be reasonable. A 3x multiplier feels more honest, especially for students who are still learning how prompting, reference images, style, composition, and revision actually work.

That puts the working estimate at:

```text
43 minimum generations x 3 = 129 image generations
```

That is not an outrageous number for a semester of image work. Honestly, it feels pretty reasonable. But against a 60-credit monthly limit, it becomes a problem.

The image work is clustered over about 6 weeks. Students are not going to work on images every single day. A more realistic assumption is something like 4 active image days per week.

So:

```text
6 weeks x 4 days per week = 24 active image days

At 3 free image generations per day:

24 days x 3 free images = 72 free generations

If they need around 129 generations total, that leaves:

129 total generations - 72 free generations = 57 paid generations

At 5 credits each:

57 paid generations x 5 credits = 285 credits
```

Students would need around 285 credits beyond the free daily images just to make the planned work feel possible. That does not include extra in-class experiments, failed attempts, weird outputs, or the normal "wait, that's not what I meant" part of learning how to control an image model.

This is where the hidden cost shows up. The tool costs money, sure, but the bigger problem is that the cost structure changes the way students behave.

If students think they only have a few chances, they will stop iterating. They will write safer prompts. They will avoid risks. They will avoid redoing work even when they know the image is not communicating the idea. And that is exactly the opposite of what I want them to learn.

I tested a few alternatives.

Firefly is available to us, and we have access to Firefly Image Models 3 and 4. They do work for some things, and I still think they're useful for exploration. In fact, I like starting there because students can move quickly and see a bunch of visual possibilities without immediately getting buried in technical prompt writing.

But Firefly has its own problem. There's an extra interpretation layer sitting between the prompt and the generated output. Almost like the tool is trying to idiot-proof the request. You ask for something specific with specific reference images and tags, and it says, "Oh, I know what you mean," and then it leans toward a more polished, generalized version of that thing.

That can be useful if you want the tool to do a lot of the work for you. But it is less useful if the goal is control.

For this class, I want students to learn how narrative and semantic prompting works. I want them thinking about scene logic, mood, symbolic meaning, visual consistency, influence, and specificity. That takes language. A lot of language. And Firefly's prompt box limit, which appears to be around 1,024 characters, gets in the way pretty quickly.

So Firefly is good for teaching a little bit of the process. It's good for early exploration. But it is not enough for the kind of controlled image work I want students doing. It's not a professional tool IMO.

I also tested Gemini through the free student year offer. That looks much more promising as a fallback. Students can sign up for a year of Google AI Pro, and from what I tested, Gemini could handle the kind of image work I'm asking them to do. It avoids some of the immediate ChatGPT Edu credit problem, and it is much easier than trying to route students through Codex.

Codex was the other possible workaround. Students can currently claim 2,500 Codex credits through the student offer, and in theory that could be enough for a lot of image generation. But the setup was too complicated for this class. When I tested it with a student account, the web version pushed me toward connecting a repository, which is a bridge too far for an intro class. Then trying to switch accounts in the desktop app got stuck in a login loop. That might be solvable, but it is not the kind of workflow I want to hand to 23 students who are trying to complete a creative assignment.

So for now, the cleanest path is still the tool they are already using: ChatGPT.

That means I'm probably going to request a temporary credit increase for the class. There is a 200-credit tier and a 500-credit tier. Based on the math, 200 credits would help, but it is cutting it close. It would not fully cover the 285-credit estimate, and it leaves very little room for classroom activities or deadline clustering.

The 500-credit tier seems like the right ask. Not forever. Just for the next two months, while the class is doing the image-heavy part of the semester.

Even that number is not huge in budget terms. For 23 students, two months at 500 credits per month is 1,000 credits per student, or 23,000 total credits. If credits are 9 cents each, that is about $2,070. If they are 6 cents each, it is about $1,380.

That is not nothing. But it is also not some massive software investment. It is the cost of making the assignment actually work the way it is supposed to work.

And that is the part I keep coming back to. These tools are increasingly treated as things students are expected to know how to use. But if the class depends on experimentation, the access model has to support experimentation. Otherwise the assignment quietly changes. It stops being about creative control and starts being about resource management.

That is a bad lesson.

I don't think every class needs unlimited access to everything. Limits can be useful. Constraints can be productive. But accidental limits are different. Hidden costs are different. A quota that makes students afraid to revise is not a creative constraint. It is a barrier.

So the planning work here is frustratingly detailed, but it feels necessary. If I want students to learn these tools in a meaningful way, I have to plan not just the assignment, but the conditions around the assignment. What tool? What account? What model? What limits? What happens when the output fails? What happens when a student needs six tries to understand what one sentence in a prompt is doing?

That is all part of the curriculum planning now!
