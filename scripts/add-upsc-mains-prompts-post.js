const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), "data", "posts.json");
const posts = JSON.parse(fs.readFileSync(file, "utf8"));
const slug = "chatgpt-prompts-for-upsc-mains-answer-writing-2026";
if (posts.some((post) => post.slug === slug)) throw new Error(`Duplicate slug: ${slug}`);

const box = (title, prompt, use) => `<div class='border border-cyan-400/20 bg-cyan-950/20 p-4 my-4'><strong>${title}</strong><br/><code>${prompt}</code><br/><em>When to use:</em> ${use}</div>`;
const promptList = (items) => items.map(([title, prompt, use], i) => box(`Prompt ${i + 1}: ${title}`, prompt, use));

const post = {
  slug,
  title: "50+ ChatGPT Prompts for UPSC Mains Answer Writing in 2026",
  seoTitle: "50+ ChatGPT Prompts for UPSC Mains Answer Writing in 2026",
  metaTitle: "50+ ChatGPT Prompts for UPSC Mains Answer Writing in 2026",
  description: "Discover 50+ ChatGPT prompts for UPSC Mains answer writing, GS papers, essays, ethics case studies, current affairs and stronger answer practice in 2026.",
  category: "AI Tools",
  author: "Shobhit Verma",
  publishedAt: "2026-08-13T03:30:00.000Z",
  updatedAt: "2026-08-13T03:30:00.000Z",
  dateLabel: "August 13, 2026",
  image: "/posts/chatgpt-prompts-upsc-mains-answer-writing-2026.png",
  imageAlt: "50+ ChatGPT prompts for UPSC Mains answer writing in 2026",
  tags: ["chatgpt prompt for upsc mains answer writing", "ChatGPT prompts for UPSC Mains", "UPSC answer writing", "UPSC Mains 2026", "GS answer writing", "UPSC essay prompts", "UPSC ethics case studies", "AI for education"],
  sections: [
    {
      heading: "Introduction: Smarter UPSC Mains Answer-Writing Practice with ChatGPT",
      paragraphs: [
        "<p>UPSC Mains tests more than memory. An aspirant must understand the directive, select relevant material, connect static knowledge with current developments, present multiple dimensions and finish within a strict word and time limit. Many candidates know a topic but struggle to convert that knowledge into a focused introduction, well-organized body and balanced conclusion.</p>",
        "<p>Used carefully, ChatGPT can support this process. It can help you brainstorm dimensions, decode directive words, build frameworks, suggest counterarguments and review a draft. It can also create practice questions or simulate an evaluator. It cannot replace the official syllabus, previous-year questions, standard books, current-affairs sources, handwriting practice or your independent judgment.</p>",
        "<div class='border-l-4 border-orange-500 bg-orange-500/10 p-4 my-4'><strong>Verification warning:</strong> AI can produce incorrect facts, dates, judgments, constitutional provisions, committee names and statistics. Verify important material through the <a href='https://upsc.gov.in/' target='_blank' rel='noreferrer' class='text-cyan-400 font-bold hover:underline'>official UPSC website</a>, government publications, original reports and trusted standard sources before using it in notes or answers.</div>",
        "<p>This guide focuses on practical prompts rather than ready-made answers. Replace the text inside square brackets, write the final response yourself and maintain a notebook of recurring weaknesses. For broader Prelims, Mains, interview and revision use cases, see our <a href='/post/chatgpt-prompts-for-upsc-aspirants-2026' class='text-cyan-400 font-bold hover:underline'>ChatGPT prompts for UPSC aspirants</a>.</p>"
      ]
    },
    {
      heading: "Can ChatGPT Help With UPSC Mains Answer Writing?",
      paragraphs: [
        "<p>ChatGPT is most useful as a thinking and feedback partner. Before writing, it can identify the core demand, suggest dimensions and arrange ideas. During revision, it can turn a topic into questions, compare two concepts or highlight missing connections. After writing, it can check relevance, balance, structure and clarity.</p>",
        "<table><thead><tr><th>Use</th><th>What AI can assist with</th><th>What the aspirant must do</th></tr></thead><tbody><tr><td>Brainstorming</td><td>List social, economic, political, ethical, environmental and administrative dimensions</td><td>Select only relevant dimensions</td></tr><tr><td>Structure</td><td>Suggest introduction-body-conclusion frameworks</td><td>Write within the actual word limit</td></tr><tr><td>Examples</td><td>Suggest possible cases, reports or initiatives</td><td>Verify every fact and attribution</td></tr><tr><td>Evaluation</td><td>Flag repetition, weak transitions and imbalance</td><td>Judge feedback against syllabus and PYQs</td></tr><tr><td>Revision</td><td>Create recall questions and micro-outlines</td><td>Practise retrieval without AI</td></tr></tbody></table>",
        "<p>Its limitations matter. A fluent response may still be generic, factually wrong or poorly matched to the directive. It cannot see your handwriting, real examination time pressure or an evaluator's exact expectations. Use it to generate options, not as an unquestioned authority.</p>"
      ]
    },
    {
      heading: "How to Use ChatGPT for UPSC Answer Writing: A 10-Step Workflow",
      paragraphs: [
        "<ol><li><strong>Select a real question:</strong> Prefer a UPSC previous-year question or syllabus-linked test question.</li><li><strong>Read the directive:</strong> Note whether it asks you to discuss, examine, analyze, evaluate or comment.</li><li><strong>Underline keywords:</strong> Identify the subject, scope, period, stakeholder and qualifier.</li><li><strong>Ask for dimensions:</strong> Request a broad list before deciding what belongs in the answer.</li><li><strong>Build a framework:</strong> Choose an introduction, logical subheadings and conclusion.</li><li><strong>Write independently:</strong> Close the AI response and complete the answer in your own words.</li><li><strong>Request evaluation:</strong> Paste the question and your answer with an explicit rubric.</li><li><strong>Compare structures:</strong> Examine what was missing, irrelevant or poorly ordered.</li><li><strong>Rewrite weak parts:</strong> Improve only the introduction, transitions, evidence or conclusion that needs work.</li><li><strong>Repeat under time limits:</strong> Practise on paper and track whether quality holds when time is restricted.</li></ol>",
        "<p>A useful cycle is diagnose, write, evaluate and rewrite. Do not start by asking for a complete model answer every time; that encourages passive reading. Our guide to <a href='/post/25-chatgpt-prompts-for-upsc-answer-writing-practice' class='text-cyan-400 font-bold hover:underline'>UPSC answer-writing practice prompts</a> provides additional drills.</p>"
      ]
    },
    {
      heading: "A. Question Understanding Prompts",
      paragraphs: promptList([
        ["Decode 'Discuss'", "Act as a UPSC Mains mentor. For the question: [paste question], explain what the directive 'discuss' requires, identify the central issue, boundaries and 5 relevant dimensions. Do not write the final answer.", "When a broad question needs balanced explanation and evidence."],
        ["Decode 'Examine'", "Break down this UPSC question using the directive 'examine': [question]. State the claim to inspect, underlying assumptions, evidence needed and a logical sequence for 150/250 words.", "When you must inspect an issue closely rather than merely describe it."],
        ["Analyze relationships", "Analyze the demand of [question]. Identify causes, mechanisms, consequences and relationships between variables. Separate essential points from optional enrichment.", "For questions asking how or why factors interact."],
        ["Critically analyze", "For [question], create a critical-analysis map with arguments supporting the proposition, limitations/counterarguments, evidence to verify and a balanced judgment. Avoid a one-sided answer.", "When both strengths and weaknesses must lead to a reasoned judgment."],
        ["Evaluate", "Explain how to evaluate [question]. Propose 4 transparent criteria, assess likely achievements and gaps under each, and suggest the kind of conclusion the evidence supports.", "For policy, institution or performance questions."],
        ["Comment", "Interpret the statement in [question], identify its context and significance, and list the observations required for a reasoned UPSC-style comment. Flag ambiguous terms.", "For quotation or statement-based questions."],
        ["Explain", "Convert [question] into a simple demand statement. List the concepts that require explanation, an appropriate sequence, one mechanism/example per concept and irrelevant tangents to avoid.", "For concept-heavy questions needing clarity."],
        ["Elucidate", "For [question], identify the proposition that must be made clear, then suggest illustrations, contrasts and examples that would illuminate it without turning the response into a general essay.", "When the examiner expects clarification through examples."],
        ["Keyword and scope check", "Extract every operative keyword, qualifier, time period, geography and stakeholder from [question]. Explain how omitting each would weaken relevance.", "Before outlining any complex question."],
        ["Directive comparison", "Show how an answer to [question] would differ if the directive were discuss, analyze, critically examine or evaluate. Give a one-line thesis and structure for each, not full answers.", "To train directive awareness using one topic."]
      ])
    },
    {
      heading: "B. Introduction Writing Prompts",
      paragraphs: promptList([
        ["Definition opening", "Suggest three precise, non-circular definitions for introducing [topic]. Explain which is safest for a UPSC answer and identify the authoritative source I should verify.", "For technical or conceptual topics."],
        ["Constitutional opening", "For [question], suggest a concise introduction linked to a relevant constitutional value, provision or institutional principle. Mark every article or case that requires verification.", "For polity, governance and rights questions."],
        ["Report-based opening", "Suggest a two-sentence introduction to [question] using a relevant official report or index only if you can name the original source and year. Otherwise provide a fact-free conceptual opening.", "When credible official evidence can establish context."],
        ["Data-led opening", "Create three possible data-led openings for [topic]. Use placeholders instead of inventing numbers and tell me which government source to consult for each placeholder.", "To avoid fabricated statistics while planning evidence."],
        ["Current-example opening", "Suggest a recent-event opening for [question], explaining its direct relevance. Clearly label details that need verification from official or reliable current-affairs sources.", "For dynamic governance, IR, economy or environment topics."],
        ["Historical-context opening", "Write a 35-word historical-context introduction for [question] that connects past development to the present demand without narrating unnecessary chronology.", "For history, society, governance and policy evolution."],
        ["Thesis opening", "Draft three concise thesis statements for [question]: supportive, critical and balanced. Recommend the most defensible thesis based on the directive.", "When the answer needs a clear position."],
        ["Introduction audit", "Review this introduction against [question]: [introduction]. Check relevance, length, clarity, duplication and whether it creates a logical bridge to the body. Suggest one revision.", "After writing your own opening."]
      ])
    },
    {
      heading: "C. Body Structure Prompts",
      paragraphs: promptList([
        ["Multi-dimensional framework", "Build a framework for [question] across only relevant political, social, economic, administrative, ethical, technological and environmental dimensions. Rank dimensions by relevance.", "To broaden analysis without mechanically using every dimension."],
        ["Stakeholder map", "Map the stakeholders in [question]. For each, list interests, responsibilities, benefits, risks and possible conflicts. Then suggest an answer order.", "For governance, welfare, ethics and policy questions."],
        ["Cause hierarchy", "Organize causes of [issue] into structural, institutional, socio-economic, behavioral and immediate causes. Remove overlap and show causal links.", "For diagnostic questions."],
        ["Consequences matrix", "For [issue], list short/long-term and intended/unintended consequences across affected stakeholders. Select the six strongest points for a 250-word answer.", "When impact analysis is central."],
        ["Challenges diagnosis", "Separate challenges relating to design, capacity, finance, coordination, implementation, monitoring and citizen access for [policy/topic]. Avoid generic statements.", "For governance and scheme questions."],
        ["Initiatives with verification", "Suggest relevant Union/state/institutional initiatives for [question]. For every initiative, provide an official source to verify and do not invent launch years, targets or outcomes.", "When government action is required."],
        ["Way-forward design", "Create a practical way forward for [issue] at immediate, medium and long-term levels. Assign responsibility to institutions and connect each recommendation to a diagnosed problem.", "To avoid generic conclusion lists."],
        ["Examples and evidence", "For each major argument in this outline [paste outline], suggest one Indian example, comparative example or official evidence source. Use placeholders where certainty is low.", "To enrich a draft safely."],
        ["Counterargument builder", "Identify the strongest counterargument to each claim in [outline]. Explain whether to rebut, qualify or accept it for a balanced answer.", "For critical-analysis and evaluation questions."],
        ["Flow and subheadings", "Reorder these points into a coherent UPSC answer: [points]. Create descriptive subheadings and transitions; remove repetition and points outside the demand.", "When notes are available but organization is weak."]
      ])
    },
    {
      heading: "D. Conclusion Prompts",
      paragraphs: promptList([
        ["Constitutional values", "Draft a 25-35 word conclusion for [question] grounded in relevant constitutional values, without inserting an unrelated quotation or article number.", "For polity, governance and social-justice answers."],
        ["SDG connection", "Conclude [question] by connecting the argument to one genuinely relevant Sustainable Development Goal. Explain the connection and avoid listing multiple SDGs.", "For development questions where an SDG link adds value."],
        ["Vision 2047", "Write a realistic conclusion for [question] connecting reforms to India's 2047 aspirations without slogans or guaranteed outcomes.", "For long-term development and governance topics."],
        ["Way-forward conclusion", "Turn these recommendations [points] into a concise conclusion that prioritizes action, responsibility and measurable direction rather than repeating the body.", "When the answer ends with recommendations."],
        ["Balanced judgment", "Write a conclusion that acknowledges the main benefit and limitation in [question], then states a defensible overall judgment in 30 words.", "For evaluate and critically examine directives."],
        ["Positive but realistic close", "Create three forward-looking conclusions for [question] that remain evidence-based and do not claim certainty, selection, rankings or guaranteed policy success.", "To end constructively without exaggeration."]
      ])
    },
    {
      heading: "E. GS Paper 1 Prompts: History, Culture, Geography and Society",
      paragraphs: promptList([
        ["History continuity and change", "For [history question], build a timeline showing continuity, turning points and change. Separate causes, course, consequences and historical significance.", "For modern, world or post-independence history."],
        ["Culture evidence map", "Analyze [art/culture topic] through origin, features, regional variation, patronage, symbolism, continuity and conservation. Suggest primary/official sources to verify examples.", "For Indian heritage and culture."],
        ["Geography process diagram", "Explain the physical process behind [phenomenon] step by step and propose a simple labeled diagram or map that can be drawn by hand. Connect it to Indian examples.", "For geomorphology, climatology or oceanography."],
        ["Resource geography", "Structure [question] through spatial distribution, physical controls, economic use, environmental effects, regional inequality and sustainable management.", "For resources and industrial location."],
        ["Society perspective", "Analyze [social issue] through family, caste, class, gender, region, urbanization, globalization and state policy. Select only relevant lenses and include counter-trends.", "For Indian society questions."],
        ["Women and vulnerable groups", "For [question], create a rights-capabilities framework covering structural barriers, intersectionality, institutional response, agency and practical reforms.", "For social empowerment questions."],
        ["Map enrichment", "Suggest two accurate, easy-to-draw India/world map annotations for [geography question] and explain how each supports the argument.", "When spatial evidence can improve clarity."]
      ])
    },
    {
      heading: "F. GS Paper 2 Prompts: Constitution, Governance and International Relations",
      paragraphs: promptList([
        ["Constitutional analysis", "Analyze [question] through constitutional text, underlying values, institutional practice, judicial interpretation and reform debate. Flag every article and judgment for verification.", "For constitutional and rights questions."],
        ["Governance gap", "For [scheme/institution], compare intended design with implementation reality across capacity, coordination, accountability, technology and last-mile access.", "For governance and welfare delivery."],
        ["Parliament framework", "Structure [Parliament question] around representation, deliberation, legislation, financial control, executive accountability and current challenges. Include reform trade-offs.", "For legislature questions."],
        ["Judiciary balance", "For [judiciary question], present independence, accountability, access, pendency and separation-of-powers dimensions without making unverified claims about cases or data.", "For justice-system analysis."],
        ["Federalism matrix", "Map Union, state and local interests in [issue]. Identify constitutional, fiscal, administrative and political dimensions plus cooperative and competitive solutions.", "For Centre-state and local-governance questions."],
        ["International relations interests", "Analyze India's approach to [country/region/issue] through security, economy, technology, diaspora, climate and multilateral interests. Add constraints and policy options.", "For bilateral and global questions."],
        ["Policy evaluation", "Evaluate [policy] using legality, inclusion, effectiveness, efficiency, transparency and federal feasibility. Specify the evidence required for each criterion.", "For balanced policy answers."]
      ])
    },
    {
      heading: "G. GS Paper 3 Prompts: Economy, Environment, Technology and Security",
      paragraphs: promptList([
        ["Economy transmission", "Explain how [economic policy/event] affects growth, inflation, employment, investment, inequality and fiscal/monetary space. Show transmission channels, not just outcomes.", "For macroeconomic questions."],
        ["Agriculture value chain", "Analyze [agriculture issue] from inputs and farm practices to credit, risk, storage, processing, markets and farmer income. Include regional and smallholder concerns.", "For agriculture and food-management topics."],
        ["Environment trade-offs", "For [environment question], map ecological, livelihood, energy, development and intergenerational trade-offs. Suggest regulatory, market, community and technology responses.", "For conservation and climate questions."],
        ["Science and technology", "Explain [technology] in simple terms, then assess Indian applications, opportunities, risks, ethics, regulation and capability gaps. Separate current reality from speculation.", "For emerging-technology questions."],
        ["Internal security", "Analyze [security challenge] through drivers, actors, financing, technology, borders, community impact, institutional coordination and rights safeguards.", "For internal-security topics."],
        ["Disaster cycle", "Structure [disaster question] across risk identification, mitigation, preparedness, early warning, response, relief, recovery and build-back-better. Identify responsible institutions.", "For disaster-management answers."],
        ["Data verification", "List the exact official Indian datasets or reports I should consult to support [GS3 topic]. Explain what evidence each can provide; do not supply numbers unless verified.", "Before inserting economic or environmental statistics."]
      ])
    },
    {
      heading: "H. GS Paper 4 and Ethics Case Study Prompts",
      paragraphs: promptList([
        ["Stakeholder analysis", "For this ethics case [case], list direct and indirect stakeholders, legitimate interests, vulnerabilities, duties and possible harms. Avoid treating all interests as equally valid.", "At the start of a case study."],
        ["Ethical dilemma", "Identify the genuine ethical dilemmas in [case]. Express each as a conflict between specific values or duties and distinguish ethical issues from administrative problems.", "To define the core conflict precisely."],
        ["Options matrix", "Generate feasible options for [case]. Evaluate each by legality, consequences, rights, fairness, integrity, compassion, transparency and practicality. Include risks and mitigation.", "Before choosing a course of action."],
        ["Values identification", "Map the values relevant to [case]—integrity, impartiality, empathy, courage, objectivity, accountability or others—and explain their concrete behavioral implications.", "When value words need application rather than definition."],
        ["Emotional intelligence", "Explain how self-awareness, self-regulation, empathy, communication and conflict management apply to [case]. Suggest specific actions, not generic advice.", "For interpersonal or crisis dilemmas."],
        ["Probity framework", "Assess [situation] through conflict of interest, public interest, transparency, accountability, code of conduct and institutional safeguards.", "For corruption and public-office cases."],
        ["Decision justification", "Help me test this preferred decision [decision] in [case]. Present the strongest objection, affected rights, unintended effects and safeguards needed for a defensible justification.", "After selecting an option."],
        ["Implementation plan", "Turn the ethical decision in [case] into an action plan covering immediate protection, consultation, documentation, escalation, communication and long-term prevention.", "To make the chosen solution practical."],
        ["Thinker application", "Suggest one ethical theory or thinker genuinely relevant to [case], explain the connection in plain language and warn against forced quotation or uncertain attribution.", "For selective conceptual enrichment."],
        ["Case-study evaluation", "Evaluate my response to [case] for stakeholder coverage, dilemma identification, feasible options, ethical reasoning, legal awareness, empathy and implementation: [answer].", "After independently writing an ethics response."]
      ])
    },
    {
      heading: "I. Answer Evaluation Prompts",
      paragraphs: promptList([
        ["Full rubric", "Evaluate my answer to [question] using relevance, directive compliance, introduction, structure, analysis, evidence, balance, conclusion and language. Quote the weak lines and recommend precise revisions. Do not invent an official UPSC score: [answer]", "For a complete post-writing review."],
        ["Relevance audit", "Compare every paragraph of [answer] with the exact demand of [question]. Label each essential, useful but secondary, repetitive or irrelevant, and explain why.", "When answers exceed the word limit."],
        ["Structure audit", "Review the logical flow of [answer]. Check whether headings answer the question, points are sequenced, transitions work and conclusion follows from analysis. Propose a better outline.", "When content exists but presentation is weak."],
        ["Evidence audit", "Identify claims in [answer] that need evidence. Suggest the type of official data, report, case, constitutional provision or example to verify; never fabricate a citation.", "To improve credibility safely."],
        ["Balance audit", "Find one-sided claims, missing stakeholders and absent counterarguments in [answer] to [question]. Suggest qualifications that improve nuance without making the answer indecisive.", "For discuss/evaluate/critical directives."],
        ["Language edit", "Edit [answer] for concise formal English while preserving meaning. Remove repetition, vague jargon, absolute claims and long sentences. Show changes and explain the three recurring language problems.", "For clarity and economy."],
        ["Time-efficiency review", "Given that I wrote this [150/250]-word answer in [minutes], identify sections consuming words without adding marks-relevant value and propose a faster planning template.", "To connect evaluation with exam conditions."],
        ["Rewrite plan", "Do not rewrite my full answer. Based on [question] and [answer], give a prioritized five-step revision plan and one short drill for each weakness.", "To keep improvement active rather than passive."]
      ])
    },
    {
      heading: "Example: Using ChatGPT to Improve a UPSC Mains Answer",
      paragraphs: [
        "<p><strong>Practice question:</strong> 'Urban flooding is not merely a consequence of extreme rainfall but also of planning failures.' Analyze.</p>",
        "<p><strong>Basic structure:</strong> Define urban flooding; mention heavy rainfall, blocked drains and climate change; list a few government actions; conclude that cities need better drainage. This is relevant but thin. It does not fully explain why planning converts rainfall into disaster, distinguish structural from immediate causes, or organize solutions by institution.</p>",
        box("Prompt used", "Analyze the demand of this 15-marker: 'Urban flooding is not merely a consequence of extreme rainfall but also of planning failures.' Build a 250-word framework with a concise introduction, rainfall-related triggers, planning and governance causes, consequences, two Indian examples to verify, institutional responsibilities and a prioritized way forward. Do not invent rainfall data or scheme outcomes.", "Use after attempting your own outline, then compare gaps."),
        "<p><strong>Improved structure:</strong></p><ol><li><strong>Introduction:</strong> Define urban flooding and state the thesis that hazard becomes disaster through exposure, impermeable surfaces and governance deficits.</li><li><strong>Triggers:</strong> Intense rainfall, changing precipitation patterns and geographical constraints.</li><li><strong>Planning failures:</strong> Wetland and floodplain encroachment, concretization, undersized drains, solid-waste blockage, fragmented agencies, outdated risk maps and weak enforcement.</li><li><strong>Consequences:</strong> Disproportionate effects on informal settlements, mobility, public health, infrastructure and local economies.</li><li><strong>Way forward:</strong> Basin-level planning, blue-green infrastructure, restored water bodies, risk-sensitive master plans, drainage audits, early warnings and accountable inter-agency command.</li><li><strong>Conclusion:</strong> Resilient cities must manage water as part of the urban ecosystem, not only as a drainage problem.</li></ol>",
        "<p>The improved plan answers the 'not merely...but also' framing, shows causal mechanisms, identifies responsible systems and produces a balanced conclusion. It still requires the aspirant to verify local examples, choose only points that fit 250 words and write the answer independently. No structure can guarantee particular marks.</p>"
      ]
    },
    {
      heading: "Best Prompt Formula for UPSC Mains",
      paragraphs: [
        "<p>A reliable formula is <strong>Role + Context + Question + Directive + Requirements + Word Limit + Evaluation Criteria</strong>. Each element reduces ambiguity. The role sets perspective; context identifies the paper or syllabus area; the exact question prevents drift; the directive controls the reasoning task; requirements specify evidence and structure; the word limit forces selection; and evaluation criteria make feedback actionable.</p>",
        box("Reusable copy-paste template", "Act as a critical UPSC Mains answer-writing mentor, not an answer substitute. Context: [GS paper/syllabus topic]. Question: [exact question]. Directive: [discuss/analyze/evaluate/etc.]. First explain the demand and keywords. Then propose a framework with [required dimensions], counterargument, examples/data that I must verify, and a balanced conclusion for [150/250] words. Evaluate my own draft using relevance, structure, evidence, balance, clarity and word economy. Do not invent facts or promise marks.", "Adapt for any GS or essay topic."),
        "<p>Do not overload the template with every desirable feature. A 150-word answer cannot accommodate ten dimensions, five examples and a long quotation. Ask ChatGPT to rank material, then exercise your own judgment.</p>"
      ]
    },
    {
      heading: "ChatGPT Prompts for 10-Marker and 15-Marker Answers",
      paragraphs: [
        "<p>A 10-marker is commonly associated with an approximately 150-word response, while a 15-marker commonly allows approximately 250 words; always follow the instructions printed on the paper. The shorter response demands sharper selection and compact explanation. The longer response permits more dimensions and nuance, but not uncontrolled length.</p>",
        box("10-marker template", "For this UPSC Mains question [question], help me plan an approximately 150-word answer. Decode the directive, propose a 25-word introduction, 5-6 high-value body points in logical order and a 20-word conclusion. Rank points by relevance, flag facts to verify and avoid writing a 250-word answer.", "For compact practice and prioritization."),
        box("15-marker template", "For this UPSC Mains question [question], help me plan an approximately 250-word answer. Decode the directive, state a balanced thesis, organize 3-4 relevant dimensions with causes/effects or arguments/counterarguments, suggest 2 verifiable examples, and end with a prioritized way forward. Reserve space for nuance and do not invent data.", "For deeper multi-dimensional analysis."),
        "<p>Practise both formats by hand. AI can estimate word allocation but cannot reproduce your writing speed, page layout, diagram time or exam pressure.</p>"
      ]
    },
    {
      heading: "ChatGPT Prompts for UPSC Essay Writing",
      paragraphs: [
        box("Essay brainstorming", "For the essay topic [topic], generate a concept map across personal, social, political, economic, ethical, scientific, environmental, historical and global dimensions. Rank the strongest connections and identify clichés to avoid.", "At the planning stage."),
        box("Thesis development", "Propose four defensible thesis statements for [essay topic] with different interpretations. Explain the tension each thesis resolves and the evidence it would require.", "To choose a coherent central argument."),
        box("Arguments and sequence", "Build a progressive argument for [topic] from definition and individual experience to institutions, society and global implications. Ensure each section advances the thesis.", "To prevent disconnected paragraphs."),
        box("Counterarguments", "Challenge my thesis [thesis] using the strongest alternative interpretation, exceptions and risks. Help me integrate them without abandoning a clear position.", "To add intellectual balance."),
        box("Example bank", "Suggest categories of Indian, historical, scientific, literary and everyday examples for [topic]. Mark quotations, names and facts that need verification; do not invent any.", "To build a safe evidence plan."),
        box("Quotation verification", "I want to use this quotation: [quote]. Check whether attribution is certain. If uncertain, advise a paraphrase or quotation-free opening instead of guessing.", "Before memorizing or using a quote."),
        box("Essay outline audit", "Evaluate this essay outline [outline] for thesis consistency, progression, balance, transitions, repetition and conclusion. Identify any paragraph that does not advance the central argument.", "After creating your own outline."),
        box("Essay conclusion", "Draft three conclusion approaches for [topic]: synthesis, forward-looking and reflective. Each must return to the thesis, acknowledge complexity and avoid slogans.", "To close the loop rather than summarize mechanically."),
        "<p>Use essay prompts to explore, then write complete essays without AI assistance. Independent recall, sustained reasoning and coherent handwriting must be trained separately.</p>"
      ]
    },
    {
      heading: "How to Use ChatGPT Without Becoming Dependent on AI",
      paragraphs: [
        "<ul><li><strong>Write first:</strong> Attempt the question and create an outline before requesting feedback.</li><li><strong>Use feedback selectively:</strong> Accept a suggestion only when it answers the directive and fits your verified knowledge.</li><li><strong>Verify facts:</strong> Check constitutional text, court judgments, official reports, schemes and current affairs at their original sources.</li><li><strong>Do not memorize generated prose:</strong> Convert verified ideas into your own notes and language.</li><li><strong>Develop original thinking:</strong> Ask for counterarguments, then decide your position independently.</li><li><strong>Practise offline:</strong> Handwriting, diagrams, page use and time management require paper practice.</li><li><strong>Anchor preparation:</strong> Use the official syllabus and previous-year questions to decide what deserves attention.</li></ul>",
        "<p>A simple boundary is useful: AI may help you diagnose and review, but the first timed draft and final learning notes should be yours. For tool selection and limitations, read <a href='/post/best-ai-tools-for-upsc-aspirants-in-2026' class='text-cyan-400 font-bold hover:underline'>Best AI tools for UPSC aspirants</a>.</p>"
      ]
    },
    {
      heading: "Common Mistakes When Using ChatGPT for UPSC",
      paragraphs: [
        "<ul><li><strong>Blind trust:</strong> Fluency is not proof. Verify legal, constitutional and current-affairs claims.</li><li><strong>Generic answers:</strong> Prompts without the exact question, directive and limit produce broad notes rather than answers.</li><li><strong>Jargon overload:</strong> Terms such as holistic, robust and paradigm shift do not replace causal explanation.</li><li><strong>Fake statistics:</strong> Never use a number merely because it sounds plausible. Request source placeholders and confirm them.</li><li><strong>Syllabus drift:</strong> Interesting material may still be outside the paper's demand.</li><li><strong>Ignoring directives:</strong> An explanatory response cannot satisfy a critical evaluation.</li><li><strong>Copying outputs:</strong> It weakens recall, originality and the ability to respond under pressure.</li><li><strong>No independent practice:</strong> Reading model structures feels productive but does not build timed writing skill.</li></ul>",
        "<p>For dynamic subjects, combine official material with a disciplined verification workflow. See our guide on <a href='/post/how-to-use-chatgpt-for-daily-current-affairs-preparation-in-2026' class='text-cyan-400 font-bold hover:underline'>using ChatGPT for daily current-affairs preparation</a>.</p>"
      ]
    },
    {
      heading: "Frequently Asked Questions",
      paragraphs: [
        "<strong>Q1: Can ChatGPT help with UPSC Mains preparation?</strong><br/>A: Yes. It can assist with brainstorming, structure, practice questions, revision and feedback, but verified sources and independent study remain essential.",
        "<strong>Q2: Can ChatGPT write UPSC Mains answers?</strong><br/>A: It can generate drafts, but copying them is poor practice. Use drafts to compare structure after writing your own answer.",
        "<strong>Q3: Which ChatGPT prompts are useful for UPSC?</strong><br/>A: Prompts that include the exact question, directive, syllabus context, word limit, evidence rules and evaluation criteria are more useful than one-line requests.",
        "<strong>Q4: How can I use ChatGPT to evaluate my UPSC answer?</strong><br/>A: Paste the question and answer, specify a rubric, request quoted evidence for criticism and ask for prioritized revisions instead of an invented official score.",
        "<strong>Q5: Can ChatGPT help with GS answer writing?</strong><br/>A: It can help map dimensions for GS1-4 and identify missing balance, examples or counterarguments. You must select relevant points and verify factual material.",
        "<strong>Q6: Can ChatGPT help with UPSC Ethics case studies?</strong><br/>A: It can map stakeholders, dilemmas, options, values and safeguards. The final decision and justification should reflect your own reasoned judgment.",
        "<strong>Q7: Should UPSC aspirants trust ChatGPT-generated facts?</strong><br/>A: No fact should be trusted solely because the response sounds confident. Verify it through official or authoritative original sources.",
        "<strong>Q8: Is ChatGPT enough for UPSC preparation?</strong><br/>A: No. Preparation requires syllabus-based study, standard sources, current affairs, PYQs, revision, tests and independent timed answer writing."
      ]
    },
    {
      heading: "Final Takeaway",
      paragraphs: [
        "<p>The best use of ChatGPT for UPSC Mains is not outsourcing answers. It is strengthening the learning loop: brainstorm dimensions, build a focused structure, write independently, evaluate weaknesses and revise deliberately. The prompts above cover GS papers, essays, ethics case studies, conclusions and post-writing review, but each becomes useful only when attached to the actual syllabus and a real question.</p>",
        "<p>Keep authoritative sources, official UPSC material and previous-year questions at the center of preparation. Verify all dynamic, constitutional and legal information. Practise handwriting and time management without AI. Used within those boundaries, ChatGPT can be a flexible assistant for practice and reflection—not a substitute for knowledge, judgment or sustained work.</p>"
      ]
    }
  ]
};

posts.unshift(post);
const pillar = posts.find((item) => item.slug === "chatgpt-prompts-for-upsc-aspirants-2026");
if (!pillar) throw new Error("UPSC pillar post not found");
const resourceSection = pillar.sections.find((section) => section.heading === "Internal Resources for UPSC and Student AI Learning");
if (!resourceSection) throw new Error("UPSC pillar internal resources section not found");
resourceSection.paragraphs.unshift("<p>For focused Mains practice, use these <a href='/post/chatgpt-prompts-for-upsc-mains-answer-writing-2026' class='text-cyan-400 font-bold hover:underline'>50+ ChatGPT prompts for UPSC Mains answer writing in 2026</a>, covering directive words, GS papers, essays, ethics and answer evaluation.</p>");

fs.writeFileSync(file, `${JSON.stringify(posts, null, 2)}\n`);
console.log(`Added ${slug} and reciprocal pillar link.`);
