---
layout: post
title: "Who Killed the Context?"
date: 2026-10-01
excerpt: "A permission prompt exposed how much judgment disappeared between one AI grader and the next."
---

My son Finn came home the other day excited to tell his older brother, Noah, an entire story about something that had happened while he was playing outside with his friends.

Now, Finn doesn't know how to tell the short version of a story. Sure, he wants you to know what happened, but he also wants you to know what happened before it happened, who everybody was, what somebody said three days ago, why that matters now, and at least four side stories that may or may not come back around. So Finn talked for about 20 minutes. He gave Noah the setup, the context, every important detail, and probably several that weren't but he needed to get out anyway.

Later, I asked Noah what Finn was so excited about.

"Oh," Noah said. "He found a frog in the creek."

I definitely appreciate Noah's ability to get right to the point, but that wasn't really the whole story.

<figure>
  <img src="{{ '/assets/images/posts/2026-10-01-who-killed-the-context/frog.png' | relative_url }}" alt="A pop-art telephone conversation contrasting one person's long story about finding a frog with another person's summary, He found a frog.">
  <figcaption>Some things get lost in translation.</figcaption>
</figure>

This week, I discovered I'd accidentally built the same telephone line into my AI grading process.

I spent time teaching Sol how I wanted an assignment graded. We talked through the purpose of the assignment, calibrated a few examples, argued over scores, compared and adjusted the feedback, and worked through the difference between a missing requirement and a misunderstanding of the whole project... just a whole lot of context. 

Then, as we've been doing in previous assignments, I told Sol to hand the grading off to Luna and tell it everything it needed to know.

...and Sol basically told Luna, "He found a frog."

## I Thought It Was Asking to Open a PDF

I was about two-thirds of the way through grading an assignment called My App when Luna started asking me for permission for something... which I had told it not to do for these.

The weird part was that it hadn't done this at the beginning. It made it through roughly the first third of the class and then started stopping between students. A long Terminal command would appear causing grading to stop until I hit approve. I didn't fully understand the command, but I could see references to the student's PDF, rendering pages, and extracting text. So I thought Luna was asking permission to open another PDF. Maybe the permissions rule got lost during a turn or something.

I told Luna some version of, "Hey, stop asking me. You're allowed to grade the assignments."

Then it asked again. And again. And my request to stop asking me got, shall we say, a bit less tolerant.

This was especially frustrating because the point of setting up the grading run was that I could leave my computer to work on something else; I got things to do! Instead, I was handcuffed here having to approve what looked like the same harmless action that I couldn't get to go away.

I finally copied the permission request into another chat and asked what it was doing. 

```sh
sed -n '1,130p' grading/PROJ_2/Students/Student-12/STUDENT_WIKI.md; printf '\n---DISCLOSURE---\n'; rg -n -i 'Student-12' grading/PROJ_2/04-MyApp 2>/dev/null | head -40; printf '\n---PDF---\n'; pdfinfo 'StudentWork/Student-12/proj_2/Student-12_MyApp.pdf' | rg 'Pages|Page size|Creator'; rm -rf tmp/PROJ_2/04-MyApp/Student-12; mkdir -p tmp/PROJ_2/04-MyApp/Student-12; pdftoppm -png -r 144 'StudentWork/Student-12/proj_2/Student-12_MyApp.pdf' tmp/PROJ_2/04-MyApp/Student-12/page >/dev/null; pdftotext -layout 'StudentWork/Student-12/proj_2/Student-12_MyApp.pdf' - | sed -n '1,420p'
```

Buried in the middle of all that jibber-jabber was the issue. You caught it right? Yeah, me either.

```sh
rm -rf temporary-render-folder
```

I know just enough code to follow the general structure of actual code. And that command meant nothing to me. However, chat explained that `rm -rf` was recursively deleting the previous temporary render folder before Luna created a new one.

Suddenly the permission request made sense.

The system wasn't repeatedly asking:

> Can I open another student's PDF?

It was asking:

> Can I delete this folder and then open another student's PDF?

The safety request prompt was doing its job. Deleting a folder is different from reading one. In my general Codex settings I'd created a rule that Codex needed to ask permission before deleting things. And now Luna had invented a deletion step the workflow didn't need, triggering the request prompt.

Luna was trying to make sure it reviewed a fresh rendering of each student's current PDF. Its solution was mechanically clean: delete the old temp render folder, recreate it, and start over. But it could've created a new, uniquely named folder without deleting anything. That would preserve the earlier evidence, avoid the destructive command, and stop triggering the permission gate.

Once I understood the problem, the technical fix was easy; tell it to stop.

However, that left me with a more important question... Why did Luna think of deleting the folder in the first place?

## What Else Didn't Survive?

When Sol and I planned the grading process, I'd explicitly told it to keep the workflow simple. Don't overcomplicate it. Use the most direct path. Luna clearly didn't get that message.

<figure>
  <img src="{{ '/assets/images/posts/2026-10-01-who-killed-the-context/kiss.jpg' | relative_url }}" alt="The four members of Kiss wearing their signature black-and-white stage makeup.">
  <figcaption>You know... Keep It Simple Stupid.</figcaption>
</figure>

That was the light-bulb moment. If this simple operational instruction hadn't survived the handoff instructions, what else hadn't survived?

Turns out, a lot.

When I grade with Sol, I'm not just handing it a rubric. We have a conversation. I provide it a bunch of material; lecture notes, examples, how I'm explaining things to the students, etc. It proposes a grade. I tell it when it's being too harsh, too mechanical, too generic, or too focused on a supporting requirement instead of the main point. I explain why two visible problems are really symptoms of one underlying issue. I tell it when beginner-level roughness isn't a major failure. I tell it when something that looks complete still doesn't show the student understands what they're doing.

Sol experiences all of those corrections.

When I said, "Tell Luna everything it needs to know," I thought I was asking Sol to transfer that experience. Sol thought I was asking for a handoff brief. 

Remember, the handoff from planning with Sol to grading with Luna was already discovered as a necessary cost-saving measure. I don't want to run out of credits.

So Sol transferred the assignment, the grading state, the remaining students, the approved scores, the procedure, and a list of calibration anchors. It gave Luna structure for grading. But it didn't transfer the whole story of how we got there.

And that difference was visible in the grading.

Throughout this whole experiment I've noticed Luna's responses are more formulaic than Sol's. Each response could sound reasonable on its own, but when I read several in a row, the pattern was obvious. The same sentence structure appeared. The same sequence of criteria appeared. The same kinds of concerns appeared. It felt less like looking at the whole submission and more like moving down a checklist one sentence at a time.

My assumption was simply that Luna was worse at grading. Luna, while not as powerful of a reasoning model as Sol, was faithfully executing the version of the assignment it had been taught in the handoff to the best of its ability.

But that wasn't the case at all. Luna only appeared less capable because it wasn't being fully taught how to grade. I needed to change how it was taught.

## The Forward Answer Versus the Whole Story

The difference between the old handoff and the new one is easiest to see in this calibration example. I've removed the student's identifying details here.

The original short handoff said:

> 17/20: The supporting work may be complete, but a meaningful mismatch between the app description and the numbered functions affects the central purpose of the assignment.

That's correct. It's also basically, "He found a frog."

The new dossier preserves what actually happened:

> The original grading pass proposed 19/20. I changed it to 17/20. My correction wasn't "deduct more because there are too many features." The problem was that the app description and the numbered functions described different structures, and the main purpose of the assignment was defining what the app actually does. A more coherent organization would make personalized recommendations one central function and the detailed profile that powers those recommendations the other. Curating and browsing could remain supporting steps.

The short version gives Luna a grade boundary. The longer version teaches Luna how to recognize the boundary and all the space it holds.

That's a major difference.

If Luna only knows the first version, it can turn the correction into a mechanical rule: too many features means 17 out of 20. If Luna knows the story, it can see that the number of features wasn't the actual problem. The student's paragraph and formal function list disagreed about the app's center. The reorganization matters because it shows the reasoning behind the score, not just the score itself.

The old handoff document had the conclusion. The new dossier had the journey: the original proposal, my correction, the rejected interpretation, the evidence that changed the judgment, and an example of how to move the student forward.

<figure>
  <img src="{{ '/assets/images/posts/2026-10-01-who-killed-the-context/treasure.jpg' | relative_url }}" alt="Purple mountains beneath the words, The real treasure are the friendships we made along the way.">
  <figcaption>Alright, let's hug it out.</figcaption>
</figure>

## Trickle-down Teaching

I started thinking about this as a chain of teachers.

I teach Sol how I grade.

Sol teaches Luna what it thinks Luna needs to know.

Luna's mistakes teach me what Sol understood but never wrote down.

A conversation becomes a grading plan. A grading plan becomes a handoff. A handoff becomes a procedure. The procedure becomes a grade.

<blockquote class="pull-quote">
  Every weak link in that chain is a translation. At each step, somebody decides what matters enough to preserve.
</blockquote>

In a mechanical process, that compression can be useful. If the task is renaming files or editing the same line of HTML across 40 pages, a clear procedure may be exactly what the next model needs. But judgment-heavy work is different.

"Grade holistically" sounds like an instruction, but it depends on a pile of decisions underneath it. What is the assignment actually teaching? Which requirement matters most when two criteria conflict? When are three problems really one problem? When is a convention useful, and when is it just a convention? How much should a beginner lose for a problem that a professional designer should've caught immediately? What does useful feedback sound like for this particular student?

Sol had answers to those questions because we'd worked through them together. Luna found out there was a frog outside without any of the contextual backstory.

So the new handoff became a teaching dossier.

It contains the assignment's purpose, the order of priorities, the story of how the interpretation changed, my corrections and the reasons for them, approved examples, counterexamples, rejected mechanical readings, feedback patterns to avoid, operational failures, unresolved boundaries, and the exact place where the next model should resume.

It's about 6,700 words; roughly a third of the length of all Finn's stories.

That's probably crazily over-engineered.

I'm okay with that for now.

The first time I build something, I'd rather go too big and pull it back later. It's easier to remove the parts that don't matter than to keep discovering missing pieces after 20 more students have been graded.

The dossier will probably get smaller as I understand which parts actually transfer judgment and which parts are just documentation clutter. But I don't know which parts are which yet.

## Listen and Repeat

The dossier also added a teach-back step.

Before Luna can continue grading, it has to explain the assignment and the judgment standards in its own words. Then it reopens one already-approved calibration example and explains why the approved score makes sense, what evidence controlled the judgment, and what a checklist-only reading would've missed. It isn't allowed to change that student's grade or anything; it's just a comprehension check for the grader.

I do versions of this myself all the time. I've got ADHD and remembering what I heard isn't my strongest suit. If somebody explains something important, I'll often say, "If I'm hearing you correctly, this is what you're saying," and repeat it back. I'm not trying to be annoying. I'm checking whether the thing I understood is the thing they meant.

That's all the teach-back is doing.

The handoff used to say:

> Here are the instructions. Begin.

Now it says:

> Here is the teaching history. Show me that you understand it. Then begin.

## Did It Work?

I don't know yet.

The My App assignment wasn't a perfect test. It's mostly a text-based assignment about defining a problem, narrowing an app idea, identifying two main functions, creating basic personas, and collecting reference material. It requires judgment, but not the same kind of visual judgment as evaluating hierarchy, interaction states, composition, or whether a group of interface elements actually functions as a system. It's pretty straightforward.

When Luna regraded My App using the dossier, the results weren't radically different from the first pass. That could mean the original grading was already fine because the assignment was relatively mechanical. It could mean the dossier worked but didn't need to change much. It could also mean the regrade was still influenced by the first pass because it happened inside a conversation that already contained those results.

I changed nine of the 33 regrades during my instructor review. Most of those changes were small edits to the score or language. I only replaced a couple of responses completely. That's useful info, but it doesn't prove the dossier was responsible for the quality.

I've got a more visual, judgment-heavy assignment that should be a better test on my to-do list. For now, the honest result is that the permission problem exposed a real weakness in the handoff, the new process makes more sense to me, and I don't yet know how much it will improve the grades.

## Writing the Memory Down

This also changed how I'm organizing the student side of the grading process.

Project 2 is scaffolded. Each week's assignment adds another part to the same app. By the time the project is finished, every student will have a pretty robust PDF with their whole development process, feedback, revisions, and decisions that affect what they're making next.

During Project 1, a smaller scaffolded project, I noticed that every grading run kept doing a lot of repeated work. It would reopen the earlier PDFs, render the pages again, create contact sheets, and reconstruct the same project context before it could focus on the new assignment. Every. Single. Time. So if there are three submissions throughout the project, the AI is redundantly deconstructing the same PDF three times. It's got to do this because it needs to understand the whole PDF to understand the context of what is being graded. I get it... but it's kind of a waste and spends unnecessary credits.

So each student now has a small external wiki.

The wiki doesn't store grades, full feedback, or evaluative summaries. I don't want the current assignment anchored to an old score, and I don't want a problem from an earlier assignment to become an unnecessary penalty on the new one. The assignments are connected, but each one still needs to be judged on its own terms.

The wiki stores continuity: what the app is, who it's for, what its main functions are, what I've asked the student to consider, and which decisions may matter when the project grows.

That last part matters because students don't always revise an old PDF after receiving feedback. They may understand the feedback and carry it into the next stage without going back to rebuild the previous deliverable. I wish they would... but here we are. If the AI only looks at the old PDF, it may treat an outdated page as the current truth. The wiki can preserve the newer context without pretending the old page changed or not.

OpenAI's [documentation](https://developers.openai.com/api/docs/guides/compaction){:target="_blank" rel="noopener"} describes compaction as carrying key prior state forward in a smaller context as a conversation grows. But reducing a conversation to the context needed to continue still means deciding what matters enough to carry forward.

So, I'm treating this like the difference between remembering something and writing it down.

Our memory isn't a trustworthy permanent record. Just like chat, we compress things. We forget details. We change the story a little every time we recall it. But writing something down doesn't change over time. It may still be subjective, but it gives us a stable thing to return to. Chat needs to write it down to remember it more accurately. Externalize the internal so nothing is lost.

The dossier is external memory for how I taught the assignment.

The student wiki is external memory for how the project is developing.

The current submission is still the evidence that gets graded.

I don't know yet whether this will reduce repeated work, preserve continuity, or create an elaborate pile of Markdown files that I later decide are unnecessary. I also won't be able to cleanly isolate which part helped; the dossier and the student wikis are entering the workflow at the same time.

But if I want AI to think like me, respond like me, or make judgments like me, I have to give it so much of me. Not just the final rule. The correction. The reason for the correction. The example that changed my mind. The interpretation I rejected. The part I'm still uncertain about.

And then I have to make it tell me the whole frog story.

Stuff's going to get lost in translation unless you tell it to stop translating.
