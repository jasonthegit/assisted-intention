---
layout: post
title: "The Infrastructure Backend of All This Grading"
date: 2026-09-24
excerpt: "When you accidentally burn through your credits for the month, it's time to figure out where the cost is coming from."
---

This week I graded two more assignments with AI. One was called Building Consistency and the other a mid-semester reflection; both for my generative AI class. For Building Consistency, students created a three-image campaign with a hero image, a supporting image, and a detail image. The point wasn't just to make three pictures that looked related. They had to show what they deliberately kept consistent, what they changed, and how their prompts and reference images influenced the results. The reflection is a low-stakes midpoint check-in; the second out of three total reflections we'll do in the course. I wanted students to look back at what they thought about AI at the beginning of the semester, compare that with what they'd actually experienced, and think about how those ideas might carry into video and voice.

I graded both assignments at the same time. I'd prompt one model, let it work, switch to the other assignment, prompt that one, and keep moving back and forth. This is pretty standard for how I've been working with Codex. The models don't need me to sit there and watch them think. While one is working, I can do something else.

The grading itself was fairly straightforward.

...Then I ran out of credits.

Not at the end. Not after everything was safely finished. Reflection 2 was done, but I was only about five students into Building Consistency when Codex just stopped.

My first reaction was basically, *Oh shit, I ran out of credits already?*

I knew I'd been using them. The previous week's Pattern Library grading experiment had eaten through a lot because I had deliberately decided to use Sol, the more expensive reasoning model, and find out what the process actually cost when I prioritized the strongest possible judgment. My monthly credits had reset about a week earlier, and I think I had roughly 150 left when I started this round of grading.

I just didn't expect those remaining credits to disappear as quickly as they did.

That interruption moved my attention away from the grades for a minute. The grading was going fine. But since I couldn't do anything without credits, suddenly I was thinking about the infrastructure of grading.

## Two Assignments, Two Different Problems

Reflection 2 was intentionally easy to score. It was worth 25 points and functioned as a did-you-do-it assignment. If a student submitted an honest, thoughtful reflection, they received full credit. I wasn't grading polished prose, technical language, optimism about AI, or whether they had reached the same conclusions I had.

The interesting part for this was the feedback.

I asked Codex to read each student's second reflection alongside their first reflection from the beginning of the semester. I wanted the response to focus on what the student was saying now, mention something from the first reflection only when that comparison was actually useful, and end by pointing toward what came next.

That sounds reasonable. It was also basically an IF-ELSE statement disguised as teaching guidance.

I had asked for a short paragraph, and Codex found the cleanest possible pattern:

1. One sentence about Reflection 2.
2. One sentence connecting it to Reflection 1.
3. One sentence looking forward.

Technically, it followed my instructions. But it also reduced the response to the entire midpoint reflection to one sentence.

The problem wasn't that the model ignored the pattern. The problem was that it followed the pattern too well. A computer is going to find structure and repeat it. It isn't going to introduce the same natural variation a person might when moving through 22 different reflections. Once I saw the formula developing, I had to recalibrate the feedback and explain the weighting more clearly. Reflection 2 needed to remain the center. The first reflection was supporting context, not an equal third of the response. The forward-looking note was useful, but it wasn't the main event either.

After that adjustment, the comments became five or six sentences. They responded to more than one idea from the current reflection, acknowledged an actual frustration or tension, connected to the first reflection only when the connection mattered, and offered a useful next thought.

The extra context did improve what I could give students. If I were grading manually during a normal week, I probably wouldn't reopen every student's first reflection. I'd read the second one, make a comment, and move on. Having Codex compare the two gave me a quicker view of where each student started and where they were now.

It also helped me talk to the class afterward. I could say, in a more informed way, "I see where you were. I see where you are. Now let's talk about where we're going."

The class isn't really in a different place from previous semesters of teaching the course. They're coming to realizations I expect, having frustration where I'd expect, and relatively clueless about how video and voice work at this point. So, I won't know whether this feedback changed their engagement or enjoyment of anything until I read the final reflections in a couple of weeks. 

For now, the immediate plus was the amount of context I could bring to the response. That was useful.

It also spent a lot of credits, apparently.

## Building Consistency, One Student at a Time

Building Consistency required a different kind of review.

Each student generatively created a three-image campaign. The hero image established the world. The supporting image widened, reframed, or added to it. The detail image moved closer to a meaningful element. The three images needed to feel like they belonged together without becoming three copies of the same composition.

To grade that, Codex needed to inspect the final images, read the prompts, identify the composition and style references, compare what the student said they wanted with what the model produced, and read the reflection for evidence that the student recognized where things had drifted.

That can't be judged from extracted text alone. The images have to be seen.

I also wanted each student handled as a complete unit. The Pattern Library grading from the previous week had shown me what happened when several students were processed in a large batch. The first critique might be sharp and specific, but later responses could become more generic, blend details between submissions, or confidently mention visual evidence that wasn't there.

So this time the workflow was one student at a time:

1. Find the student's submission.
2. Open and render the visual elements when needed.
3. Inspect every page.
4. Read the prompts and references.
5. Compare the hero, supporting, and detail images.
6. Read the reflection.
7. Score each rubric category.
8. Draft the feedback.
9. Save the result.
10. Move to the next student.

This was slower than batching, but the behavior was more predictable and the judgments stayed attached to the correct student's work.

The calibration still needed work. My first pass didn't frame the course level clearly enough. This is a one-credit introductory class. The students are learning to recognize influence and exercise functional control, not produce professional advertising campaigns. During my review, several of my changes were less about whether Codex saw the right issue and more about how severely that issue should affect a beginner's grade.

That was a reminder I should've already carried forward from earlier grading experiments: the AI needs to know not only what the assignment asks for, but who the students are and what level of performance is reasonable.

Still, the actual feedback was more detailed than I'd normally have time to provide in a one-credit course. AI gave me a way to offer more individualized feedback without pretending I had unlimited hours to do the grading. I have a life outside of work, right? 

<figure>
  <img src="{{ '/assets/images/posts/2026-09-24-the-infrastructure-backend-of-all-this-grading/Right.jpg' | relative_url }}" alt="Anakin and Padme in a four-panel meme labeled Work, I have a life right, and Right.">
  <figcaption>I hate this movie.</figcaption>
</figure>

Then, five students in, the credits were gone.

## The Credit Wall

Part of this was my fault. I forgot to switch from Sol to Luna. My emerging workflow had been to use Sol for planning, calibration, and difficult judgment, then hand the repetitive pass to Luna once the expectations were explicit.

But I was moving between two assignments, looking at visual work, correcting the Reflection 2 feedback pattern, and continuing the grading. I stayed in Sol.

As a side note: the cost of credits doesn't feel predictable. I knew roughly how many credits I had, but I couldn't estimate what a grading pass would consume before I began it. Codex could explain what it had done after the fact, and it could point me toward official documentation about credits, tokens, turns, and model usage, but I didn't have a useful upfront answer like, "This workflow will probably cost about this much."

I understand a turn in the basic conversational sense. I provide an input, the model does some work, and it returns an output. That's a turn and turns have a specific cost. However, once that expands into tool calls, file reads, image inspection, context, input tokens, output tokens, model choice, and repeated checks, the relationship between what I ask and what it costs becomes much murkier.

Other Codex users were talking about the same frustration. I spent some time browsing the Codex subreddit, and people were comparing how quickly Sol seemed to consume credits at an unpredictable rate; whether its speed or cost felt different from previous days, and whether changes in behavior or reasoning capabilities suggested an upcoming reset or model update.

I can't verify any of that... it could be all of it or none of it. What mattered to me was that I wasn't the only person having trouble predicting the cost of the tool. There's an active community chomping at the bit trying to reverse-engineer how to use it efficiently.

I don't want this post to disappear down that rabbit hole. The immediate frustration was simple: if I know the budget, I can make decisions. If I don't know how much an operation will cost until it stops halfway through, I can't plan around it.

And the credits are money.

Well, not my money. The university is paying for this experiment. When I ran out, I emailed the finance person in my department who had already approved additional credits earlier in the semester, then submitted a support ticket. The process was easy. By the time I woke up the next morning, the credits had been added and I could continue.

<figure>
  <img src="{{ '/assets/images/posts/2026-09-24-the-infrastructure-backend-of-all-this-grading/money.gif' | relative_url }}" alt="Three people celebrating under the words Free Money.">
  <figcaption>Literally the only time this happens.</figcaption>
</figure>

That's an important part of the truth here. This wasn't a disaster. I wasn't locked out for a week. I had institutional support, approval, and a relatively quick way to replenish the account.

It's also what makes this experiment possible.

If I were personally paying for all of these credits, I definitely wouldn't be doing this at this scale. I'm cheap, and I can already grade these assignments manually. I don't have money to mess around with while I figure out whether an experimental grading workflow might eventually save me time.

So I've got room to experiment while the cost is still high. The hope is that I can build and document a useful process now, so if the tools become cheaper and easier later, the workflow is already there.

But first I need to figure out where the hell all my credits went.

## What Did We Waste?

<figure>
  <img src="{{ '/assets/images/posts/2026-09-24-the-infrastructure-backend-of-all-this-grading/credits.jpg' | relative_url }}" alt="A Codex message asking for an audit of tool usage, checks, turns, tokens, and credit costs.">
  <figcaption>All right Codex, spill your guts.</figcaption>
</figure>

Codex walked me through the work it had been doing. Some of it was central to the assignment:

- opening and visually inspecting each submission;
- reading the student's prompts, references, and reflection;
- comparing the three images;
- applying the rubric;
- drafting personalized feedback; and
- saving the result before moving on.

That work is expensive because it requires context and judgment. It also directly affects the quality of the grade. I'm not interested in saving credits by weakening that part.

Some of the surrounding work was less useful:

- rescanning student folders to find the next submission;
- reconstructing the active roster;
- checking paths that had already been checked;
- repeatedly determining which student came next;
- recalculating progress and status;
- rereading broad project context when only the current assignment state had changed;
- performing verification steps that made sense once but didn't need to happen between every single student.

Even when that work didn't consume the majority of the credits, it consumed time. I could ask a question that felt like it should take 30 seconds, then wait several minutes while Codex reoriented itself, searched folders, checked the current state, and made sure it wasn't missing anything.

Accuracy isn't waste. My long dictated explanations aren't automatically waste either. I can communicate more accurately when I talk through the problem than when I try to compress everything into a carefully typed prompt. The context in those (rambling, long-winded, wandering, yap-fest) explanations often contains the distinction the model needs. 

Visual inspection isn't waste when the assignment is visual. Treating one student as a complete judgment unit isn't waste when batching several students causes their evidence to blur together. Recalibrating when the feedback becomes formulaic isn't waste if the formula is flattening the students' actual work.

The simplest principle I have right now is: **don't waste.** 

## A Markdown File Becomes Infrastructure

My first idea was extremely simple: make a list of the students.

If Codex was spending time starting from the course root, scanning the folders, finding the assignment, locating the next student, and checking where it had stopped, why couldn't I put the grading order in a Markdown file?

I was already using Markdown files to give the model durable instructions instead of relying on the conversation's memory. A roster seemed like the same idea.

The list, which I'm calling a **grading-state** file, quickly became more detailed as it considered all the context Codex needed to find a student quickly within the project structure. 

For each student, the grading-state records:

- the student's exact roster name;
- the submission path in the project folder;
- the file type;
- the grading status;
- the current score when one exists;
- the last update;
- notes about missing, duplicate, damaged, late, or ambiguous work.

It also records which student is current and where the grading should resume after an interruption. And these are deliberately plain: pending, in progress, graded, missing, needs review, or regrade.

The grading-state file doesn't replace the results file. The results still contain the evidence, category scores, student-facing feedback, private instructor notes, and final statistics. The state file is the operational checklist. It tells the model where to go and what to do next without asking it to rediscover the course every time.

The workflow, which happens quickly in the background, became:

1. Inventory the active roster once.
2. Record every known submission path and file type.
3. Flag missing or unusual files before grading begins.
4. Select the first pending student.
5. Grade that student completely.
6. Save the detailed result.
7. Update that student's state.
8. Continue to the next pending student without rescanning everything.
9. Refresh the inventory only when something changes.
10. Reconcile the state file with the detailed results before declaring the assignment complete.

Here is the complete workflow that came out of that conversation. This is the actual reusable document, with its heading levels adjusted to fit inside the post.

<details class="evidence-disclosure" markdown="1">
<summary class="evidence-summary">
  <span class="evidence-summary-preview"><strong>Assignment Grading State Workflow</strong><br>This is the reusable procedure for creating and maintaining an assignment-specific grading-state file. It supports accurate one-student-at-a-time judgment while avoiding repeated full-folder inventory checks.</span>
  <span class="evidence-summary-action"><span class="when-closed">Read the full grading-state workflow</span><span class="when-open">Collapse workflow</span></span>
</summary>

<div class="workflow-document" markdown="1">

### Assignment Grading State Workflow

This is the reusable procedure for creating and maintaining an assignment-specific grading-state file. It supports accurate one-student-at-a-time judgment while avoiding repeated full-folder inventory checks.

#### When to use it

Use this workflow only after Jason explicitly authorizes grading or a calibration review. Do not inspect or score student submissions merely because an assignment or rubric is being discussed.

Create one state file for each assignment:

`Assignments/NN-AssignmentName-grading-state.md`

Examples:

- `Assignments/05-BuildingConsistency-grading-state.md`
- `Assignments/06-ControllingTime-grading-state.md`

Do not put mutable assignment progress in `AGENTS.md` or in the course-wide `PROJECT_WIKI.md`.

#### Required reading before preflight

Read, in this order:

1. `AGENTS.md`
2. `PROJECT_WIKI.md`
3. The current assignment document
4. The complete assignment-specific grading instructions
5. Any approved calibration or current instructor clarification

Before scoring, confirm with Jason:

- the students' expected experience and course level;
- whether the assignment prioritizes functional novice-level control, professional execution, or another standard;
- which evidence should carry the most weight when visual quality, documentation, process, and reflection do not align.

For this introductory exploratory course, do not silently import professional-level expectations. Treat holistic evidence of understanding as primary while still enforcing central assignment requirements and visible failures of the intended visual system.

The current assignment files and Jason's active instructions outrank this reusable procedure when they conflict.

#### One-time preflight

Before opening a student's submission for judgment:

1. Identify the active assignment source folder and the active student set.
2. Exclude `StudentWork/_Dropped` unless Jason explicitly includes it.
3. Preserve exact roster spelling and existing folder names.
4. Record the exact submission path for every discovered student file.
5. Record the file type and any relevant page or file metadata.
6. Detect missing, duplicate, split, alternate, damaged, or ambiguous submissions.
7. Assign a stable grading order.
8. Mark every entry with an initial status.

The preflight inventory is navigation and evidence planning. It is not grading. Do not infer a score from an empty folder or from metadata alone.

#### State-file template

Use this structure and add fields only when they improve the current assignment's audit trail:

~~~markdown
# NN Assignment Name: Grading State

Preflight completed: YYYY-MM-DD HH:MM
Source folder: absolute or project-relative path
Course level / calibration: [record Jason's approved grading frame]
Roster status: in progress | complete | needs refresh
Current student: 01
Last updated: YYYY-MM-DD HH:MM

| Order | Student | Submission path | Type | Status | Score | Last updated | Notes |
|---:|---|---|---|---|---:|---|---|
| 01 | Lastname Firstname | StudentWork/.../submission.pdf | PDF | pending | — | — | — |
~~~

Use the following statuses consistently:

- `pending`: identified and ready for grading
- `in-progress`: the current student is being inspected; use this if a turn is interrupted
- `graded`: evidence, score, and feedback were recorded
- `missing`: no assessable submission was found; leave the score unassigned
- `needs-review`: duplicate, damaged, ambiguous, or otherwise requires Jason's judgment
- `regrade`: deliberately reopened after a correction or instructor review

The score in the state file is a navigation convenience. The detailed results file remains the authoritative record of evidence, category scores, feedback, and instructor adjustments. Reconcile the two before reporting completion.

#### Student-by-student turn loop

For each grading turn:

1. Read the state file and select the first `pending` entry, or resume the `in-progress` entry.
2. Read the relevant assignment authority and open only that student's submission for judgment.
3. Inspect the required visual and textual evidence.
4. Decide the category scores before drafting feedback.
5. Record the detailed grade in the assignment results file.
6. Update the state entry to `graded`, add the score, and update the timestamp.
7. Move `Current student` to the next pending entry.
8. Do not run a full-folder inventory again unless an exception condition applies.

Keep evidence gathering, interpretation, scoring, feedback, uncertainty notes, and the self-audit coupled to the current student. Preparation such as text extraction, rendering, and arithmetic checks may be batched when that does not weaken judgment.

#### Autonomous grading run

When Jason authorizes grading with a request such as “let's grade,” treat that as authorization for the full active grading set. Do not wait for Jason to send `next` between students.

Continue automatically through every `pending` or resumable `in-progress` entry:

1. Select the next student from the state file.
2. Complete that student's evidence review, score, feedback, and state update.
3. Continue to the next student without requesting another prompt.
4. Stop only when the active roster is complete, a genuine file or tool blocker prevents progress, or Jason's instructor judgment is required.

Keep chat narration quiet while preserving the audit trail in the state and results files. Use a concise start notice, brief heartbeat updates only when a long operation needs them, and a final summary. Do not narrate every command, render, or routine state update. If a blocker occurs, identify the exact student, file, evidence, and decision needed before pausing.

#### Exception and refresh rules

Refresh or amend the state file when:

- Jason reports a late submission;
- a file changes after preflight;
- a duplicate or alternate submission is discovered;
- a path no longer resolves;
- a student is added to or removed from the active grading set;
- the state file and results ledger disagree.

When refreshing, preserve the existing graded statuses and scores. Do not silently overwrite an instructor adjustment or replace a graded record with a new first-pass judgment.

#### Completion check

Before reporting the assignment as complete:

- every active student is `graded`, `missing`, or explicitly `needs-review`;
- all missing work remains pending or unassigned unless Jason directs otherwise;
- every graded student has a corresponding results record;
- category labels and points agree;
- totals, counts, pending count, score distribution, mean, and median reconcile;
- instructor adjustments are explicit;
- the state file and results ledger agree;
- the inventory was refreshed if late work could have changed the active set.

Keep this state file private with the other assignment grading records.

</div>
</details>

We developed the workflow while the two grading processes were already underway. After working through the Reflection 2 feedback problem, we built the grading-state file for Building Consistency and used it for the remaining students.

And it made the model's behavior much more predictable. Instead of asking it to reason (which cost money) about where it was in the project, this gave it explicit directions it didn't have to think through.

That matters for the model handoff too.

## Sol Didn't Have to Do Everything

Once the grading-state and assignment instructions were explicit, Luna finished up the grading of Building Consistency.

And the quality held up!

That complicates the conclusion I was beginning to form after Pattern Library. Last week, Sol produced better visual critiques than Luna. The easy explanation was that Sol reasons better and Luna is too mechanical for subjective design work.

That may still be partly true, but it wasn't the whole explanation.

Sol is better at filling in gaps. It can infer structure that I haven't fully articulated. Luna needs more boundaries and clearer instructions. Once Sol helped establish the grading frame, calibration examples, assignment rules, beginner-level expectations, and current grading state, Luna could follow that structure and produce comparable work.

<blockquote class="pull-quote">
  The more explicit the system became, the less I needed the expensive model to improvise.
</blockquote>

That doesn't mean Luna can replace Sol everywhere. I still need to test whether it can maintain the same quality on a highly visual, judgment-heavy assignment when this workflow is in place from the beginning. It does mean the question is shifting from "Which model is better at grading?" to "Which model should handle each stage of grading?"

Right now, the workflow I can imagine looks something like this:

<div class="workflow-instructions" markdown="1">

<h3 class="workflow-step-heading">Set up the course once</h3>

A new course begins with a repeatable structure: an `AGENTS.md` file, a course wiki, reusable grading procedures, privacy rules, a grading-state template, and consistent places for assignment instructions, results, and insights.

Ideally, starting a course eventually means copying that structure instead of rebuilding it from scratch.

<h3 class="workflow-step-heading">Use Sol to establish judgment</h3>

The first time I grade an assignment, Sol and I go back and forth:

- It needs to understand what I'm actually trying to assess;
- It finds holes or ambiguity in the assignment;
- I establish the students' experience level;
- We translate the rubric into usable decisions;
- We compare a few calibration examples; and
- We write explicit instructions for the handoff to Luna for the grading pass.

This is where I want the stronger reasoning model filling in gaps and helping me identify what I haven't explained clearly enough. Because I'll be the first to admit it; writing an assignment rubric that accurately gets across what I'm trying to have it do is hard! I'll take all the help I can get there.

<h3 class="workflow-step-heading">Build the assignment state</h3>

Before the full pass, Sol records the active roster and maps the submission paths. The grading-state file becomes the model's map through the assignment.

<h3 class="workflow-step-heading">Let Luna execute the established process</h3>

Luna grades one student at a time, keeps that student's visual and written evidence together, saves the result, updates the grading-state, and moves to the next pending entry.

<h3 class="workflow-step-heading">Keep me in the loop</h3>

I then inspect every result; I adjust scores, rewrite feedback, correct misread visual evidence, and recalibrate when the model applies the wrong standard. What's nice is that the recalibration is getting smaller and smaller each time I do this.

<h3 class="workflow-step-heading">Analyze the whole class after the grades are stable</h3>

Once the individual results are reviewed, the stronger reasoning model can help reconcile the records and look across the class for patterns, teaching problems, assignment revisions, and questions worth carrying into the next offering.

</div>

<figure>
  <img src="{{ '/assets/images/posts/2026-09-24-the-infrastructure-backend-of-all-this-grading/easy.jpg' | relative_url }}" alt="Spider-Man making an okay hand gesture.">
  <figcaption>Easy Peasy, Lemon Squeezy.</figcaption>
</figure>

The second time I teach the same assignment should be different. The course structure, assignment instructions, calibration history, and workflow will already exist. Maybe I won't need Sol to reconstruct the grading logic. Maybe I can begin with Luna, use the existing grading-state and instructions, and bring Sol in only when the work presents an exception.

That's the ideal, but I can't really test that till next semester.

## Structure Matters 

This round of grading didn't save much time. Building Consistency took about as long as I would've expected manual grading to take once I remove the overnight pause and the back-and-forth of figuring out the workflow. Reflection 2 gave me richer comparative feedback, but I had to redo the first formulaic pass before that happened.

Instead I got to spend my own human compute on organization and structure.

A computer needs structure, right? If I want this to work across an entire course, I can't just improvise a new conversation every time and expect the model to reconstruct the same expectations, folders, decisions, and current state without cost. I've got to standardize the deployment and execution with these AI models.

I totally get that all the above steps sound overwhelming, maybe a little overengineered. Most folks will just want to open a chatbot, attach a rubric, and say, "Grade these." And it may get there someday... but that day is not today. Today is early-adopter stuff. The tools aren't at a point where every part of this is easy or standardized with a beautiful user interface hiding the backend infrastructure. Early adopters have to build out that infrastructure themselves so later adopters may eventually (I hope) focus on the experience of being able to click a button that feels magical.

So, today overengineering is where it's at; I need to see the machinery. And it's how my mind already works! I really enjoy thinking through structure and systems... sometimes a bit too much. We all have our vices! 

My dad likes to say, "You can always build a better mousetrap."

I've got another assignment waiting to be graded, and this time the grading-state workflow is in place from the start. 

<figure>
  <img src="{{ '/assets/images/posts/2026-09-24-the-infrastructure-backend-of-all-this-grading/mousetrap.jpg' | relative_url }}" alt="The Mouse Trap board game box showing children playing with the colorful action contraption.">
  <figcaption>I'm definitely calling this workflow an Action Contraption moving forward.</figcaption>
</figure>
