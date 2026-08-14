const fs = require("fs");
const path = require("path");

const dataFile = path.join(process.cwd(), "data", "posts.json");
const posts = JSON.parse(fs.readFileSync(dataFile, "utf8"));
const slug = "best-ai-prompts-for-upsc-preparation-2026";
if (posts.some((post) => post.slug === slug)) throw new Error(`Duplicate slug: ${slug}`);

const promptCard = (number, item) => [
  `<h3><strong>Prompt ${number}: ${item.name}</strong></h3>`,
  `<p><strong>Best for:</strong> ${item.best}</p>`,
  `<pre><code>${item.prompt}</code></pre>`,
  `<p><strong>Why this prompt works:</strong> ${item.why}</p>`,
  `<p><strong>How to customize it:</strong> ${item.customize}</p>`,
  `<p><strong>Example use case:</strong> ${item.example}</p>`
];

const sectionsFromPrompts = (groups) => {
  let number = 0;
  return groups.map((group) => ({
    heading: group.heading,
    paragraphs: group.items.flatMap((item) => promptCard(++number, item))
  }));
};

const groups = [
  {
    heading: "A. UPSC Study Planning Prompts",
    items: [
      {
        name: "Personalized UPSC Study Plan",
        best: "Long-term planning",
        prompt: "Act as a realistic UPSC Civil Services study planner. My attempt year is [year], current stage is [beginner/intermediate/revision], optional is [subject], available study time is [hours], and completed resources are [list]. Using the official syllabus and PYQs as anchors, create a phase-wise plan for Prelims, Mains, optional, essay and current affairs. Include weekly deliverables, revision cycles, tests, buffer days and measurable checkpoints. Do not assume I can study more than the hours stated.",
        why: "It supplies the variables that generic schedules ignore and asks for measurable phases rather than an unrealistic list of subjects.",
        customize: "State your genuine available hours, attempt date, job or college commitments, optional subject and topics already completed. Ask for a shorter first phase if your routine is unstable.",
        example: "A working aspirant can request a 28-week plan with two weekday hours, longer weekends and separate checkpoints for answer writing."
      },
      {
        name: "Daily Study Schedule",
        best: "Daily execution",
        prompt: "Create a UPSC study schedule for [date] from [start time] to [end time]. My energy is highest at [time]. Tasks are [list], and non-negotiable commitments are [list]. Prioritize one deep-learning block, one revision block, current affairs, [MCQs/answer writing], meals and short breaks. Give a minimum viable version for a disrupted day and explain why each task is placed where it is.",
        why: "The prompt converts an abstract plan into realistic time blocks and includes a fallback, which reduces all-or-nothing thinking when a day goes wrong.",
        customize: "Replace every task with a concrete chapter, question set or answer target. Mention commute, work and sleep constraints rather than asking AI to guess.",
        example: "Use it on Sunday evening to schedule Monday's Polity chapter, 30 MCQs, one GS2 answer and newspaper notes."
      },
      {
        name: "Weekly Revision Planner",
        best: "Revision and retention",
        prompt: "Build a seven-day UPSC revision plan for these completed topics: [topics]. My weak areas are [areas], and I can revise [minutes] daily. Use active recall, PYQs, closed-book blurting, error-log review and one cumulative test. Specify what to recall before reopening notes and provide a simple completion tracker. Do not introduce new sources.",
        why: "It makes revision retrieval-based instead of another passive reading cycle and explicitly prevents source accumulation.",
        customize: "List only topics actually studied, attach error categories from recent tests and define the maximum daily time available.",
        example: "After finishing Fundamental Rights, Parliament and federalism, ask for a week that alternates recall sheets with GS2 PYQs."
      },
      {
        name: "Monthly Preparation Plan",
        best: "Milestone management",
        prompt: "Design a four-week UPSC preparation plan for [month]. Goals: [goals]. Available hours: [hours per week]. Divide each goal into weekly outputs for static subjects, optional, current affairs, Prelims questions, Mains answers and revision. Add an end-of-week review, a mid-month correction checkpoint and a final diagnostic test. Identify what should be postponed if I fall 20 percent behind.",
        why: "Monthly plans often fail because they lack review points. This version builds in adjustment and forces prioritization if capacity is lower than expected.",
        customize: "Use output goals such as chapters revised or answers written, not vague intentions like study geography.",
        example: "Plan August around Economy basics, two optional units, four essays outlines and 600 verified MCQs while protecting one buffer day weekly."
      },
      {
        name: "Backlog Recovery Plan",
        best: "Recovering delayed preparation",
        prompt: "Act as a strict but practical UPSC mentor. My backlog is [topics/tasks], deadline is [date], and current weekly capacity is [hours]. Classify items as essential, useful or deferrable using syllabus and PYQ relevance. Create a recovery plan that protects ongoing revision and tests. Include a stop-doing list, buffer, daily maximum and rules for dropping low-value tasks. Do not compress impossible work into longer study days.",
        why: "It treats backlog as a prioritization problem rather than simply adding more hours and protects the revision that candidates often sacrifice first.",
        customize: "Include why each item became a backlog and name fixed deadlines. Request separate plans if Prelims and optional backlogs compete.",
        example: "Use it when four months of magazines, pending Environment chapters and optional notes cannot all be completed before a test series."
      }
    ]
  },
  {
    heading: "B. UPSC Prelims Prompts",
    items: [
      {
        name: "Generate Source-Bound MCQs",
        best: "Prelims practice",
        prompt: "Using only the notes I paste below, create 15 UPSC Prelims-style MCQs on [topic] at [moderate/high] difficulty. Mix statement-based, pair-matching and conceptual questions. Do not add facts outside my notes. After I answer, provide the key, explain every statement, quote the supporting line from my notes and label the misconception tested. Notes: [paste verified notes]",
        why: "Restricting questions to verified notes reduces invented facts and turns your own source into a retrieval test with explainable answers.",
        customize: "Change the difficulty, number of statements and negative-marking simulation. Use a short, coherent note set rather than an entire book.",
        example: "Paste verified notes on monetary-policy instruments and practise distinguishing repo, SDF, MSF and open-market operations."
      },
      {
        name: "Analyze Previous-Year Questions",
        best: "PYQ pattern recognition",
        prompt: "Analyze these official UPSC Prelims questions from [years] on [topic]: [paste questions and official keys]. For each, identify the concept, distractor design, level of factual depth, elimination clues and source areas. Then summarize recurring thinking patterns and create five new practice questions without claiming to predict the exam.",
        why: "It focuses on how UPSC frames and differentiates options rather than treating PYQs as a list of facts to memorize.",
        customize: "Paste exact questions and verified keys. Compare a single topic across years to avoid broad, shallow conclusions.",
        example: "Analyze environment-convention questions to see how headquarters, legal status, membership and scope become distractors."
      },
      {
        name: "Identify High-Relevance Topics",
        best: "Syllabus prioritization",
        prompt: "Using the official UPSC Prelims syllabus and the PYQ set I provide, map [subject] into recurring themes, foundational concepts and low-frequency details. Show the evidence from the supplied PYQs, suggest prerequisite order and mark every conclusion as observed rather than a prediction. Syllabus/PYQs: [paste verified text]",
        why: "The request requires evidence from actual PYQs and avoids false certainty about what will appear next.",
        customize: "Specify the years and subject. Ask for a table linking each theme to question numbers and your current confidence rating.",
        example: "Map Polity PYQs into constitutional bodies, Parliament, rights, federal relations and local government before planning revision."
      },
      {
        name: "Elimination Technique Practice",
        best: "Decision-making under uncertainty",
        prompt: "Give me 10 UPSC-style MCQs on [topic] one at a time. Before revealing the answer, ask me to classify each option as certain, probable, doubtful or eliminable and explain my reasoning. Then critique only my elimination logic, point out risky assumptions and show whether the question can be solved without knowing every fact. Use verified source material I provide: [notes].",
        why: "It trains explicit reasoning and confidence calibration instead of rewarding lucky guesses or post-hoc explanations.",
        customize: "Provide verified notes and choose a topic where statement qualifiers matter. Track recurring errors such as treating all absolute words as automatically false.",
        example: "Use Economy statements to practise when words like only, necessarily and all genuinely create a logical contradiction."
      },
      {
        name: "Prelims Revision Quiz",
        best: "Rapid recall",
        prompt: "Test my revision of [topic] in three rounds: 10 rapid factual recalls, 5 concept comparisons and 5 UPSC-style MCQs. Wait for my response after each round. Build later questions from my errors, maintain an error log and end with five specific items to revise. Use only this verified material: [paste notes].",
        why: "The adaptive rounds expose both recall gaps and conceptual confusion, then convert mistakes into a short next-step list.",
        customize: "Set a time per round, ask for bilingual explanation if needed and paste only the material you want assessed.",
        example: "Run a 20-minute revision session after studying monsoon mechanisms, western disturbances and Indian Ocean Dipole."
      }
    ]
  },
  {
    heading: "C. UPSC Mains Answer-Writing Prompts",
    items: [
      {
        name: "GS Answer Framework",
        best: "Mains answer planning",
        prompt: "Act as a critical UPSC Mains mentor. For this [GS paper] question—[question]—decode the directive and keywords, state the central demand, and propose an introduction-body-conclusion framework for [word limit]. Rank relevant dimensions, add a counterpoint and flag facts requiring verification. Do not write the final answer until I submit my own outline.",
        why: "It separates question interpretation from answer generation and keeps the aspirant responsible for the first attempt.",
        customize: "Include the exact directive, paper, word limit and any class notes that should constrain the framework.",
        example: "Use a GS2 federalism question to distinguish constitutional, fiscal, administrative and political dimensions before writing."
      },
      {
        name: "10-Marker Answer Plan",
        best: "Approximately 150-word answers",
        prompt: "Help me plan an approximately 150-word response to [question]. Decode the directive, suggest a 20-25 word introduction, five high-value body points in logical order and a 20-word conclusion. Give a word budget, remove secondary details and identify one simple diagram only if it directly adds clarity. Do not invent data.",
        why: "The explicit word budget forces selection, which is more important in a short answer than collecting every possible dimension.",
        customize: "Mention your writing speed and whether the question is conceptual, analytical or policy-oriented.",
        example: "Plan a compact GS1 society answer with definition, three causes, two consequences and a balanced close."
      },
      {
        name: "15-Marker Answer Plan",
        best: "Approximately 250-word answers",
        prompt: "For this UPSC Mains 15-marker [question], build an approximately 250-word analytical framework. Include a concise thesis, 3-4 relevant dimensions, cause-effect links or arguments-counterarguments, two examples to verify, institutional responsibilities and a prioritized way forward. Allocate words and explain what additional depth distinguishes it from a 150-word plan.",
        why: "It uses the extra space for relationships, nuance and evidence rather than merely extending the number of bullet points.",
        customize: "Specify the paper and ask for a structure suited to the directive instead of always requesting causes-challenges-solutions.",
        example: "Use it for a GS3 urban-flooding question that requires climate triggers, planning failures and institutional reforms."
      },
      {
        name: "Improve Introduction, Body and Conclusion",
        best: "Structural revision",
        prompt: "Review my answer to [question]: [paste answer]. Evaluate the introduction for direct relevance, body for logical grouping and transitions, and conclusion for synthesis. Quote weak lines, explain the problem and offer one revised version of each weak section while preserving my valid ideas. Do not add unverified facts.",
        why: "It requests evidence-based feedback on separate structural functions rather than a vague rewrite that hides the original weakness.",
        customize: "Add your intended word limit and directive. Ask the model not to rewrite sections that already work.",
        example: "Use it when the body has good content but the introduction repeats the question and the conclusion introduces a new argument."
      },
      {
        name: "Evaluate an Answer with a Transparent Rubric",
        best: "Post-writing feedback",
        prompt: "Evaluate my answer to [question] using directive compliance, relevance, structure, analysis, evidence, balance, language and conclusion. For each criterion, cite a line from my answer, identify one strength and one improvement. Give a prioritized rewrite plan, not an invented official UPSC mark or guarantee. Answer: [paste answer]",
        why: "A transparent rubric makes criticism traceable and prevents a confident but meaningless score from replacing useful feedback.",
        customize: "Add criteria from your test series if available and ask the model to compare the answer only with the exact question.",
        example: "Evaluate a timed GS2 answer to see whether criticism is balanced by constitutional principles and feasible reform."
      },
      {
        name: "Repair a Weak Answer",
        best: "Targeted improvement drills",
        prompt: "Diagnose why this answer feels weak: [answer], written for [question]. Classify problems as knowledge gap, question-demand error, poor organization, unsupported assertion, imbalance, repetition or language. Give one 15-minute drill for each major problem. Then ask me to rewrite; do not provide a complete model answer first.",
        why: "It connects each diagnosis to a practice task and preserves active learning instead of turning feedback into passive reading.",
        customize: "Tell the model how long you took and which part felt difficult. Limit the diagnosis to the two most important weaknesses.",
        example: "A candidate who lists generic governance challenges can practise converting each into mechanism, evidence and responsible institution."
      },
      {
        name: "Find Evidence to Verify",
        best: "Examples, data and committee references",
        prompt: "For this outline [paste outline], identify where an Indian example, constitutional provision, judgment, committee, official report or government dataset could strengthen the argument. For each suggestion, name the original authoritative source I should verify. Use placeholders when uncertain and never fabricate a number, quotation, case or recommendation.",
        why: "The prompt treats AI as a research-direction tool and explicitly routes uncertain facts back to original sources.",
        customize: "Mention the GS paper and restrict sources to government, constitutional bodies, courts or recognized international institutions where appropriate.",
        example: "For a health-governance answer, request possible sources such as ministry reports or NFHS, then verify the current figures yourself."
      },
      {
        name: "Generate Multidimensional Points",
        best: "Analytical breadth",
        prompt: "For [question], brainstorm political, constitutional, social, economic, administrative, ethical, technological, environmental and international dimensions. Exclude irrelevant lenses, rank the remaining dimensions by direct relevance and show one causal connection between them. Fit the final selection to [150/250] words.",
        why: "It prevents the common mistake of mechanically listing every dimension and asks for relationships rather than disconnected headings.",
        customize: "Replace the dimension list for subject-specific questions and state how many points you can realistically write.",
        example: "Analyze digital public infrastructure through access, federal capacity, privacy, innovation and accountability instead of generic pros and cons."
      }
    ]
  },
  {
    heading: "D. GS Subject Prompts",
    items: [
      {
        name: "GS Paper 1 Topic Lens",
        best: "History, culture, geography and society",
        prompt: "Teach [GS1 topic] for UPSC Mains using syllabus language. Start with the core concept, then show chronology or spatial process where relevant, Indian examples, continuity and change, social consequences and one drawable map/diagram. Finish with three PYQ-style questions and a list of facts I must verify from standard sources.",
        why: "It adapts to the distinctive temporal, spatial and social reasoning expected across GS1 instead of producing general notes.",
        customize: "Specify whether the topic is history, geography, culture or society so the model uses the right analytical frame.",
        example: "Study urbanization through migration, informal work, family change, spatial segregation and service delivery."
      },
      {
        name: "GS Paper 2 Governance Lens",
        best: "Polity, governance, welfare and IR",
        prompt: "Analyze [GS2 topic] through constitutional values, legal framework, institutional roles, implementation evidence, federal issues, citizen impact, accountability and practical reform. Clearly flag every Article, judgment, scheme detail and current event for verification from official sources. End with a balanced 250-word answer outline.",
        why: "It links constitutional design to administrative practice and builds verification into a paper where inaccurate legal claims are risky.",
        customize: "For international relations, replace legal-framework fields with interests, constraints, bilateral mechanisms and multilateral context.",
        example: "Examine local-government finance through constitutional intent, devolution, state finance commissions, capacity and accountability."
      },
      {
        name: "GS Paper 3 Systems Lens",
        best: "Economy, agriculture, environment, science, security and disasters",
        prompt: "Explain [GS3 topic] as a system: drivers, transmission mechanisms, affected sectors/stakeholders, trade-offs, current Indian institutions, technology role, risks and phased solutions. Suggest authoritative datasets or reports to verify, but do not invent current figures. Add one flowchart suitable for a Mains answer.",
        why: "GS3 questions often reward causal mechanisms and trade-offs; a systems frame shows how inputs and institutions produce outcomes.",
        customize: "Name the subfield and request relevant dimensions only. For security topics, add rights safeguards; for disasters, use the disaster-management cycle.",
        example: "Analyze food inflation from weather and inputs through supply chains, markets, policy response and household effects."
      },
      {
        name: "GS Paper 4 Ethics Case",
        best: "Ethics theory and case studies",
        prompt: "For this ethics case [paste case], identify stakeholders, legitimate interests, ethical dilemmas, legal/administrative constraints and relevant public-service values. Generate feasible options and evaluate each for rights, consequences, fairness, integrity, empathy, transparency and practicality. Recommend a course with safeguards and an implementation sequence; avoid decorative quotations.",
        why: "It turns value words into concrete choices and includes implementation, which is often missing from purely theoretical responses.",
        customize: "Add your preferred option and ask the model to present its strongest objection rather than automatically agreeing.",
        example: "Use it for a conflict-of-interest case involving procurement, political pressure and urgent public need."
      }
    ]
  },
  {
    heading: "E. UPSC Essay Prompts",
    items: [
      {
        name: "Essay Brainstorming Map",
        best: "Essay ideation",
        prompt: "For the UPSC essay topic [topic], create a concept map across personal, social, historical, political, economic, scientific, ethical, environmental and global dimensions. Rank the strongest connections, identify hidden assumptions and clichés to avoid, and suggest examples that require verification. Do not write the essay.",
        why: "It widens the idea pool while keeping the aspirant responsible for selecting and connecting material around a thesis.",
        customize: "Ask for fewer dimensions for a narrow topic and add any interpretation you are already considering.",
        example: "Brainstorm a topic on technology and freedom without reducing it to a generic list of advantages and disadvantages."
      },
      {
        name: "Build an Essay Structure",
        best: "Coherent long-form organization",
        prompt: "Using my thesis [thesis] and brainstorm [ideas], create a UPSC essay outline that progresses logically from interpretation and lived experience to institutions, society and broader implications. Give each section a purpose, transition and evidence type. Add a serious counterargument and make the conclusion return to the opening idea.",
        why: "It asks every paragraph to advance one central thesis and addresses the disconnected-example problem common in long essays.",
        customize: "Paste your own thesis and examples. Ask the model to remove any section that cannot be linked by a clear transition.",
        example: "Structure an essay on education as empowerment from individual capability to democracy and social transformation."
      },
      {
        name: "Analyze a Philosophical Essay Topic",
        best: "Abstract essay topics",
        prompt: "Interpret the philosophical topic [topic] at literal, ethical, psychological, social and political levels. Offer three defensible theses, possible tensions, counterexamples and real-world applications. Explain ambiguous words before using them. Avoid fabricated quotations and recommend a quotation-free opening if attribution is uncertain.",
        why: "Multiple interpretations help prevent premature commitment to a shallow reading, while the attribution rule reduces fake quotations.",
        customize: "State your preferred interpretation and ask how it might be challenged by an intelligent reader.",
        example: "Analyze a statement about doubt and knowledge through science, democracy, personal growth and institutional humility."
      },
      {
        name: "Improve Essay Arguments and Examples",
        best: "Essay review",
        prompt: "Review this essay outline/draft [paste text]. For each major claim, check logical support, relevance to the thesis, counterargument, example quality and transition. Flag clichés, unsupported generalizations and repetitive examples. Suggest categories of stronger Indian, historical, scientific or everyday evidence, marking every factual detail for verification.",
        why: "The review works claim by claim, improving reasoning and evidence without silently replacing the candidate's voice.",
        customize: "Ask the model to preserve your strongest original analogy or narrative and focus on two weakest sections first.",
        example: "Audit whether the same freedom-movement example is being reused for unrelated arguments throughout an essay."
      }
    ]
  },
  {
    heading: "F. Current Affairs Prompts",
    items: [
      {
        name: "Convert News into Syllabus Notes",
        best: "Current affairs note-making",
        prompt: "Using this article from [source/date] [paste text], create UPSC notes without adding unverified facts. Separate event, background, syllabus linkage, stakeholders, causes, implications, constitutional/legal angle, government response, challenges and way forward. Identify primary sources to consult and state what is news-specific versus reusable issue knowledge.",
        why: "It converts news into syllabus-linked issue notes and distinguishes a temporary event from concepts useful across future questions.",
        customize: "Include the exact source and date, then request only the GS paper or optional connections that are genuinely relevant.",
        example: "Turn a verified report on heatwaves into GS1 geography, GS3 disaster-management and urban-governance notes."
      },
      {
        name: "Current Affairs to Prelims MCQs",
        best: "Prelims-current affairs integration",
        prompt: "From this verified current-affairs note [paste note], create 10 UPSC Prelims-style MCQs that test underlying static concepts as well as the event. Explain every statement using the supplied note, label any outside fact you would need, and do not invent treaty members, dates, locations or institutional powers.",
        why: "It uses the event as a gateway to static concepts while keeping the answer explanations auditable against supplied material.",
        customize: "Choose an event with a clear static base and ask for separate difficulty levels.",
        example: "Convert a biodiversity summit update into questions on conventions, protected-area concepts and institutional roles."
      },
      {
        name: "Current Affairs to Mains Questions",
        best: "Mains practice",
        prompt: "Using this verified issue brief [paste brief], draft six UPSC Mains questions: two explain/discuss, two analyze/examine and two evaluate/critically analyze. Map each to a precise syllabus phrase, state the central demand and provide only a framework—not a model answer. Avoid speculative predictions.",
        why: "Different directives transform the same issue into distinct reasoning tasks and train adaptable preparation.",
        customize: "Specify the GS paper and request 10- and 15-marker variants.",
        example: "Turn a data-protection development into questions on rights, governance capacity, innovation and accountability."
      },
      {
        name: "Monthly Current Affairs Revision",
        best: "Consolidation",
        prompt: "Organize my verified notes for [month] [paste index/notes] into recurring issues rather than daily news. Map each issue to Prelims facts, Mains dimensions, essay links and unresolved questions. Create a seven-day active-recall plan, 25-question quiz and a list of duplicated notes to merge. Do not add events outside my material.",
        why: "Issue-based consolidation reduces scattered daily notes and creates separate retrieval paths for Prelims and Mains.",
        customize: "Paste an index first if notes are long, then process one issue at a time to preserve accuracy.",
        example: "Merge multiple climate-finance stories into one evolving issue note with institutions, concepts and Indian interests."
      },
      {
        name: "Issue-Based Analysis",
        best: "Deep current-affairs understanding",
        prompt: "Analyze the verified current issue [issue/material] through history, stakeholders, competing values, constitutional or legal context, political economy, federal implications, international comparison, implementation constraints and policy options. Separate established fact from interpretation, and list original sources needed to verify each major claim.",
        why: "It resists event-by-event note accumulation and exposes the underlying trade-offs that Mains questions often test.",
        customize: "Remove irrelevant lenses and request a one-page synthesis after the detailed analysis.",
        example: "Study platform-worker regulation through livelihoods, business models, social security, federal roles and data governance."
      }
    ]
  },
  {
    heading: "G. Revision and Memory Prompts",
    items: [
      {
        name: "Create Verified Flashcards",
        best: "Rapid revision",
        prompt: "Turn only the verified notes below into 30 flashcards on [topic]. Mix definition, comparison, cause-effect, chronology, map/location and application cards. Keep one idea per card, make answers concise, quote the supporting note line and tag cards as easy, medium or hard. Notes: [paste notes]",
        why: "Source-bound, atomic cards are easier to review and audit than long AI-created summaries containing uncertain additions.",
        customize: "Ask for cloze cards for lists and application cards for concepts; delete cards that test trivia unrelated to PYQs.",
        example: "Create cards from constitutional-body notes with appointment, tenure, removal, function and comparison prompts."
      },
      {
        name: "Active Recall Question Ladder",
        best: "Closed-book retrieval",
        prompt: "Create an active-recall ladder for [topic] using my notes: 8 basic recall questions, 6 explain-why questions, 4 compare questions and 2 Mains application questions. Ask one at a time, wait for my answer, then diagnose the gap and schedule missed items for another round. Notes: [paste verified notes]",
        why: "Increasing cognitive difficulty moves revision from recognition to explanation and application while using errors to shape the next round.",
        customize: "Set a strict response time and tell the model not to reveal hints until after your first attempt.",
        example: "Move from recalling pressure groups to explaining influence channels and applying them to a governance question."
      },
      {
        name: "Spaced-Revision Calendar",
        best: "Long-term retention",
        prompt: "Create a spaced-revision calendar from [start date] to [exam/test date] for these topics [list]. Use initial recall, short reviews and cumulative tests, while respecting [minutes] per day and these fixed commitments [list]. Give rules for rescheduling a missed review and increasing frequency for high-error topics.",
        why: "It makes revision frequency responsive to errors and fits reviews into actual capacity rather than producing an idealized calendar.",
        customize: "Add confidence scores and recent test errors for each topic. Use the output as a draft, not a scientific guarantee of memory.",
        example: "Schedule Economy and Environment reviews around a full-length test while giving extra cycles to repeated mistakes."
      },
      {
        name: "Simplify a Difficult Topic",
        best: "Conceptual understanding",
        prompt: "Teach [difficult topic] for UPSC in four layers: a plain-language analogy, accurate core mechanism, UPSC syllabus connection and exam-level application. Then identify where the analogy breaks, compare common misconceptions and ask me five diagnostic questions. Cite source types I should verify and do not simplify away essential qualifications.",
        why: "Layered explanation helps beginners without letting a memorable analogy replace the precise concept required in examination answers.",
        customize: "State what specifically confuses you and request a diagram, worked example or comparison only where appropriate.",
        example: "Learn inflation transmission from a household analogy through monetary channels, supply shocks and policy trade-offs."
      }
    ]
  },
  {
    heading: "H. UPSC Interview Prompts",
    items: [
      {
        name: "Adaptive Mock Interview",
        best: "Personality Test practice",
        prompt: "Conduct a UPSC Personality Test-style mock interview based on my DAF summary and current issues: [paste non-sensitive summary]. Ask one question at a time, use follow-ups based on my actual answer, and vary factual, situational, opinion and ethical questions. After 12 questions, evaluate clarity, balance, honesty, listening, composure and tendency to bluff. Do not provide model answers before I respond.",
        why: "Adaptive follow-ups test consistency and reasoning more realistically than reading a static list of polished responses.",
        customize: "Remove personal identifiers, include preferred service and home-state themes, and practise speaking aloud rather than typing only.",
        example: "Run a 25-minute mock that moves from graduation subject to a local development issue and an ethical administrative scenario."
      },
      {
        name: "DAF-Based Question Bank",
        best: "Interview preparation",
        prompt: "From this anonymized DAF summary [education, work, hometown, hobbies, achievements, service preference], build a question bank grouped into factual verification, motivation, local issues, subject application, hobby depth, ethical dilemmas and cross-questions. For each group, show what the board may be testing and which facts require official verification.",
        why: "It connects questions to probable assessment purposes and encourages authentic preparation instead of memorized biographies.",
        customize: "Never paste addresses, contact details or identifiers. Add current issues relevant to your state or profession from verified sources.",
        example: "A civil engineer can prepare links between professional experience, infrastructure trade-offs, urban governance and service motivation."
      },
      {
        name: "Balanced Opinion Practice",
        best: "Personality Test communication",
        prompt: "Ask me eight interview questions on [verified current issue]. After each spoken/typed answer, identify my core position, strongest reason, missing stakeholder, unsupported claim and whether I acknowledged uncertainty. Help me restate the answer in 45-60 seconds without sounding rehearsed. Challenge me respectfully with an opposing view.",
        why: "It trains concise, balanced reasoning and the ability to revise a view without bluffing or becoming defensive.",
        customize: "Choose issues you have genuinely studied and ask for follow-ups that separate facts from values and policy preferences.",
        example: "Practise an opinion on AI regulation by balancing innovation, employment, rights, security and administrative capacity."
      }
    ]
  }
];

const post = {
  slug,
  title: "30+ Best AI Prompts for UPSC Preparation in 2026",
  seoTitle: "30+ Best AI Prompts for UPSC Preparation in 2026",
  metaTitle: "30+ Best AI Prompts for UPSC Preparation in 2026",
  description: "Discover 30+ practical AI prompts for UPSC preparation in 2026 covering Prelims, Mains, answer writing, current affairs, essays, revision, study planning and interviews.",
  category: "AI Tools",
  author: "Shobhit Verma",
  publishedAt: "2026-08-14T03:30:00.000Z",
  updatedAt: "2026-08-14T03:30:00.000Z",
  dateLabel: "August 14, 2026",
  image: "/posts/best-ai-prompts-for-upsc-preparation-2026.png",
  imageAlt: "30+ Best AI Prompts for UPSC Preparation in 2026",
  tags: ["best ai prompts for upsc preparation", "AI prompts for UPSC preparation", "ChatGPT prompts for UPSC", "UPSC study prompts", "UPSC Prelims prompts", "UPSC Mains prompts", "UPSC essay prompts", "UPSC revision prompts", "AI tools for UPSC aspirants"],
  sections: [
    {
      heading: "Introduction: Using AI as a Responsible UPSC Study Assistant",
      paragraphs: [
        "<p>UPSC preparation demands sustained study across a wide syllabus, repeated revision, current-affairs integration, objective-question practice, analytical writing and honest self-evaluation. AI assistants such as ChatGPT can reduce friction in several of those tasks. A carefully written prompt can turn verified notes into a quiz, reveal a missing dimension in an answer, organize a revision plan or challenge an interview response.</p>",
        "<p>That does not make AI a replacement for NCERTs, standard books, newspapers, official documents, previous-year papers, test series or independent thinking. An AI response may be fluent yet contain a wrong date, fabricated committee recommendation, inaccurate constitutional Article or outdated scheme detail. The aspirant remains responsible for verifying information and deciding what is relevant to the syllabus.</p>",
        "<p>The <strong>best AI prompts for UPSC preparation</strong> give the model a role, exact context, source boundaries, clear task, constraints and desired output. They also preserve active learning: you attempt a question first, request feedback second and rewrite in your own words. This guide provides 38 detailed prompts for planning, Prelims, Mains, GS papers, essay, current affairs, revision and the Personality Test.</p>",
        "<div class='border-l-4 border-orange-500 bg-orange-500/10 p-4 my-4'><strong>Accuracy rule:</strong> Verify the syllabus, notices and previous-year papers on the <a href='https://upsc.gov.in/' target='_blank' rel='noreferrer' class='text-cyan-400 font-bold hover:underline'>official UPSC website</a>. Check constitutional, legal, policy and current-affairs claims against authoritative original sources before using them.</div>"
      ]
    },
    {
      heading: "Quick Answer: What Are the Best AI Prompts for UPSC Preparation?",
      paragraphs: [
        "<p>The most useful UPSC AI prompts are not requests such as “teach me polity” or “write a topper answer.” Effective prompts specify the examination stage, GS paper or syllabus topic, exact task, verified source material, word limit, difficulty, output format and evaluation standard. They ask AI to support brainstorming, questioning and feedback while requiring uncertain facts to be flagged for verification.</p>",
        "<table><thead><tr><th>Prompt category</th><th>Best use</th><th>Safe input</th></tr></thead><tbody><tr><td>Planning</td><td>Realistic schedules and recovery plans</td><td>Available hours, deadlines, completed topics</td></tr><tr><td>Prelims</td><td>MCQs, elimination and error analysis</td><td>Verified notes and official PYQs</td></tr><tr><td>Mains</td><td>Demand analysis, structure and feedback</td><td>Exact question and your own draft</td></tr><tr><td>Current affairs</td><td>Syllabus mapping and issue notes</td><td>Named, dated authoritative material</td></tr><tr><td>Revision</td><td>Recall questions and flashcards</td><td>Your verified notes</td></tr><tr><td>Interview</td><td>Adaptive follow-ups and opinion practice</td><td>An anonymized DAF summary</td></tr></tbody></table>",
        "<p>If your immediate goal is Mains, our focused collection of <a href='/post/chatgpt-prompts-for-upsc-mains-answer-writing-2026' class='text-cyan-400 font-bold hover:underline'>ChatGPT prompts for UPSC Mains answer writing</a> provides deeper directive, GS and evaluation exercises.</p>"
      ]
    },
    {
      heading: "What Are AI Prompts for UPSC Preparation?",
      paragraphs: [
        "<p>An AI prompt is the instruction and context you give a language model. The model predicts a response from that input; it does not automatically know your preparation stage, source list, weak areas, intended paper or word limit. Prompt quality therefore changes the usefulness, specificity and auditability of the output.</p>",
        "<p>A generic prompt—<em>Explain federalism</em>—may produce a broad textbook summary. A UPSC-specific version explains the role, question, directive and constraints: <em>Act as a GS2 mentor; explain Indian federalism through constitutional, fiscal and administrative dimensions; connect each dimension to one verified example; flag Articles and judgments for checking; end with a 250-word critically-examine framework.</em></p>",
        "<p>Useful context includes your stage, the official syllabus phrase, exact PYQ or test question, source notes, desired difficulty and output format. Useful constraints include word count, no invented data, source boundaries and a request to distinguish fact from interpretation. Evaluation criteria might include relevance, directive compliance, balance, evidence, clarity and word economy.</p>",
        "<p>Think of prompting as briefing a study partner. The clearer the brief, the easier it is to judge whether the response actually helps. For a wider library across the examination, also see our <a href='/post/chatgpt-prompts-for-upsc-aspirants-2026' class='text-cyan-400 font-bold hover:underline'>100+ ChatGPT prompts for UPSC aspirants</a>.</p>"
      ]
    },
    {
      heading: "How to Use AI for UPSC Preparation",
      paragraphs: [
        "<p><strong>Prelims:</strong> Use verified notes to generate MCQs, compare concepts, practise elimination and maintain an error log. Never rely on AI-generated keys without checking the source.</p>",
        "<p><strong>Mains and answer writing:</strong> Ask AI to decode directives, brainstorm dimensions or evaluate your draft. Write the first timed response yourself so that feedback measures your ability rather than the model's prose.</p>",
        "<p><strong>Essay:</strong> Explore interpretations, thesis options, counterarguments and evidence categories. Then write full essays independently to develop sustained reasoning and transitions.</p>",
        "<p><strong>Current affairs:</strong> Paste material from a named, dated source and request syllabus mapping. Verify all dynamic facts through the original report, ministry, constitutional body or other authoritative publisher.</p>",
        "<p><strong>Revision:</strong> Convert your notes into recall questions, flashcards and comparison drills. Closed-book retrieval should happen before the model reveals explanations.</p>",
        "<p><strong>Optional and interview:</strong> AI can simplify concepts, generate questions and challenge reasoning, but optional depth requires the prescribed sources and subject-specific evaluation. For interview practice, anonymize DAF information and practise answers aloud.</p>",
        "<p><strong>Planning:</strong> Provide genuine time constraints and measurable goals. Treat schedules as drafts to revise using actual completion data. Our <a href='/post/best-ai-tools-for-upsc-aspirants-in-2026' class='text-cyan-400 font-bold hover:underline'>best AI tools for UPSC aspirants</a> guide helps match tasks to suitable tools.</p>"
      ]
    },
    ...sectionsFromPrompts(groups),
    {
      heading: "How to Get Better Results from AI Prompts",
      paragraphs: [
        "<p>A strong UPSC prompt can be built from eight parts:</p><ol><li><strong>Role:</strong> Define a critical mentor, quizmaster or evaluator—not a flattering assistant.</li><li><strong>Context:</strong> State Prelims, GS paper, optional, essay or interview and the syllabus topic.</li><li><strong>Task:</strong> Ask for one clear action such as analyze, quiz, compare or evaluate.</li><li><strong>Constraints:</strong> Restrict sources, prohibit invented facts and require uncertainty labels.</li><li><strong>Output format:</strong> Request a framework, table, question sequence, error log or feedback rubric.</li><li><strong>Word limit:</strong> Match the expected response rather than generating unlimited notes.</li><li><strong>Evaluation criteria:</strong> Name relevance, balance, evidence, clarity or other standards.</li><li><strong>Follow-up:</strong> Tell the model to wait for your answer, challenge it or revise using your errors.</li></ol>",
        "<p><strong>Weak prompt:</strong> “Give me notes on Parliament.” It does not identify purpose, depth or source expectations.</p>",
        "<pre><code>Act as a UPSC GS2 mentor. Context: Parliament under the Constitution and functioning of the legislature. Task: using the verified notes I paste, create a comparison of legislative, deliberative, financial and accountability roles; connect each role to one PYQ theme; identify current challenges without inventing data; flag every Article or case for verification. Output: one-page revision framework plus five active-recall questions. Wait for my answers before explaining.</code></pre>",
        "<p>The stronger version produces an auditable learning activity rather than a generic summary. Continue improving it with feedback such as “the federal dimension is missing” or “reduce this to a 150-word framework,” instead of restarting with a vague prompt.</p>"
      ]
    },
    {
      heading: "Best AI Workflow for UPSC Aspirants",
      paragraphs: [
        "<p>A practical cycle is <strong>Learn → Understand → Practice → Evaluate → Revise → Test</strong>.</p>",
        "<ol><li><strong>Learn:</strong> Study the topic from NCERTs, standard books, lectures or official material. AI may help create a reading question list, but it should not become the source of record.</li><li><strong>Understand:</strong> Ask for analogies, mechanisms, comparisons and counterexamples. Return to the book whenever the explanation conflicts with it.</li><li><strong>Practice:</strong> Attempt source-bound MCQs, PYQs and timed answers without seeing a generated model answer first.</li><li><strong>Evaluate:</strong> Use transparent rubrics and demand line-specific feedback. Check keys and factual criticism independently.</li><li><strong>Revise:</strong> Build flashcards, recall ladders and error-based review sessions from verified notes.</li><li><strong>Test:</strong> Complete full-length tests under actual constraints without AI, then use the error log to begin the next cycle.</li></ol>",
        "<p>The workflow keeps authentic sources and examination practice at the center. AI reduces friction between stages but does not remove the difficult work of remembering, selecting, writing and deciding.</p>"
      ]
    },
    {
      heading: "Common Mistakes to Avoid When Using AI for UPSC",
      paragraphs: [
        "<ul><li><strong>Blind trust:</strong> Confidence and grammatical fluency are not evidence. Verify facts and keys.</li><li><strong>Replacing standard sources:</strong> AI summaries cannot substitute for foundational texts and official documents.</li><li><strong>Copying answers:</strong> This weakens recall, personal judgment and performance under timed conditions.</li><li><strong>Ignoring current-affairs dates:</strong> Features, office-holders, laws and policies change; always check the original current source.</li><li><strong>Overproducing notes:</strong> More generated pages create a revision burden. Prefer compact additions to existing notes.</li><li><strong>No independent practice:</strong> Reading frameworks feels easier than writing, but it does not build handwriting or time management.</li><li><strong>Generic prompts:</strong> Missing question, directive, stage and format produces broad but low-value output.</li><li><strong>No accuracy check:</strong> Constitutional Articles, judgments, committees, reports, quotations and statistics need special verification.</li></ul>",
        "<p>A useful rule is to ask AI to show what needs verification, not to hide uncertainty. For a safer issue workflow, read <a href='/post/how-to-use-chatgpt-for-daily-current-affairs-preparation-in-2026' class='text-cyan-400 font-bold hover:underline'>how to use ChatGPT for daily current affairs</a>.</p>"
      ]
    },
    {
      heading: "AI vs Traditional UPSC Preparation",
      paragraphs: [
        "<table><thead><tr><th>Preparation need</th><th>AI can assist with</th><th>Traditional/authoritative foundation</th></tr></thead><tbody><tr><td>Concepts</td><td>Alternate explanations, comparisons, diagnostic questions</td><td>NCERTs, standard books, teachers and subject sources</td></tr><tr><td>Current affairs</td><td>Syllabus mapping, issue frameworks and recall quizzes</td><td>Newspapers, government releases, original reports and dated sources</td></tr><tr><td>Prelims</td><td>Source-bound quizzes and error classification</td><td>Official PYQs, verified keys, test practice and source revision</td></tr><tr><td>Mains</td><td>Brainstorming, structure and draft feedback</td><td>Independent writing, PYQs, evaluated tests and verified evidence</td></tr><tr><td>Essay</td><td>Interpretations, counterarguments and outline audits</td><td>Reading, reflection and complete handwritten essays</td></tr><tr><td>Planning</td><td>Schedules, trackers and recovery options</td><td>Actual completion data, discipline and mentor feedback</td></tr></tbody></table>",
        "<p>The two approaches are complementary when their roles are clear. Traditional sources establish trustworthy knowledge and examination realism. AI is most valuable for interaction: questioning, restructuring, comparing and reviewing that knowledge.</p>"
      ]
    },
    {
      heading: "Related Articles for UPSC Aspirants",
      paragraphs: [
        "<ul><li><a href='/post/chatgpt-prompts-for-upsc-mains-answer-writing-2026' class='text-cyan-400 font-bold hover:underline'>50+ ChatGPT prompts for UPSC Mains answer writing</a> for directive words, GS papers, ethics and evaluation.</li><li><a href='/post/chatgpt-prompts-for-upsc-aspirants-2026' class='text-cyan-400 font-bold hover:underline'>100+ ChatGPT prompts for UPSC aspirants</a> for a wider preparation library.</li><li><a href='/post/25-chatgpt-prompts-for-upsc-answer-writing-practice' class='text-cyan-400 font-bold hover:underline'>25 UPSC answer-writing practice prompts</a> for focused drills.</li><li><a href='/post/best-ai-tools-for-upsc-aspirants-in-2026' class='text-cyan-400 font-bold hover:underline'>Best AI tools for UPSC aspirants</a> for tool selection and workflows.</li><li><a href='/post/top-10-free-ai-tools-upsc-aspirant-2026' class='text-cyan-400 font-bold hover:underline'>Top free AI tools for UPSC aspirants</a> for budget-friendly options.</li></ul>"
      ]
    },
    {
      heading: "Frequently Asked Questions",
      paragraphs: [
        "<strong>Q1: Can ChatGPT help with UPSC preparation?</strong><br/>A: Yes. It can support planning, explanations, source-bound quizzes, answer feedback and revision. It should complement verified books, official material, PYQs and independent practice.",
        "<strong>Q2: What are the best AI prompts for UPSC preparation?</strong><br/>A: The best prompts specify the exact stage, syllabus topic, task, source boundary, output format, word limit and evaluation criteria while requiring uncertain facts to be verified.",
        "<strong>Q3: Can AI generate UPSC Mains answers?</strong><br/>A: It can generate drafts and frameworks, but copying them is not sound preparation. Attempt the answer first and use AI to diagnose relevance, structure and balance afterward.",
        "<strong>Q4: Can AI help with UPSC Prelims?</strong><br/>A: It can create quizzes from your verified notes, explain statements and examine elimination logic. Independently verify questions and keys before adding them to an error log.",
        "<strong>Q5: How can I use ChatGPT for UPSC answer writing?</strong><br/>A: Paste the exact question, identify the directive and word limit, write your own answer, then request rubric-based feedback with quoted evidence and prioritized revisions.",
        "<strong>Q6: Can AI replace UPSC standard books?</strong><br/>A: No. Standard books and official sources provide the stable, verifiable foundation that generated explanations and summaries cannot guarantee.",
        "<strong>Q7: How can I use AI for current affairs?</strong><br/>A: Give it a named, dated article or report and ask for syllabus mapping, stakeholder analysis and recall questions. Verify all dynamic facts at the original source.",
        "<strong>Q8: Are AI-generated UPSC answers reliable?</strong><br/>A: They may be useful structurally but can contain factual errors, generic arguments or wrong emphasis. Treat them as drafts for critical review, not authoritative model answers.",
        "<strong>Q9: How should aspirants verify AI-generated information?</strong><br/>A: Check UPSC notices and papers on upsc.gov.in; use original constitutional, court, ministry, parliamentary, statistical or report sources for specific claims.",
        "<strong>Q10: Can AI help with UPSC revision?</strong><br/>A: Yes. It can convert verified notes into flashcards, active-recall questions, comparisons and error-based revision plans while keeping source material fixed.",
        "<strong>Q11: Is it safe to paste a DAF into ChatGPT?</strong><br/>A: Avoid sharing personal identifiers, addresses, contact details or sensitive information. Use an anonymized summary containing only the themes needed for practice.",
        "<strong>Q12: Do these prompts guarantee better marks?</strong><br/>A: No prompt guarantees marks or selection. Results depend on knowledge, judgment, accuracy, revision, test practice, writing quality and examination performance."
      ]
    },
    {
      heading: "Final Takeaway",
      paragraphs: [
        "<p>AI can make UPSC preparation more interactive. The 38 prompts in this guide help convert goals into schedules, notes into recall tests, questions into frameworks, drafts into revision plans and current events into syllabus-linked issues. Their value comes from specificity and from the aspirant's willingness to inspect the output critically.</p>",
        "<p>Keep authentic preparation at the center: official syllabus and PYQs, NCERTs and standard books, authoritative current-affairs sources, regular revision, test series and independent timed writing. Use AI to brainstorm, question, evaluate and organize—not to outsource knowledge or judgment. Verify facts, protect personal information and measure progress through your own performance.</p>"
      ]
    }
  ]
};

posts.unshift(post);
const pillar = posts.find((item) => item.slug === "chatgpt-prompts-for-upsc-aspirants-2026");
const resources = pillar?.sections.find((section) => section.heading === "Internal Resources for UPSC and Student AI Learning");
if (!resources) throw new Error("UPSC pillar resource section not found");
resources.paragraphs.unshift("<p>For a structured collection covering planning, Prelims, Mains, GS papers, essays, current affairs, revision and interview practice, read <a href='/post/best-ai-prompts-for-upsc-preparation-2026' class='text-cyan-400 font-bold hover:underline'>30+ Best AI Prompts for UPSC Preparation in 2026</a>.</p>");

fs.writeFileSync(dataFile, `${JSON.stringify(posts, null, 2)}\n`);
console.log(`Added ${slug} and reciprocal pillar link.`);
