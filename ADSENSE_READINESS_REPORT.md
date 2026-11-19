# AdSense Readiness Audit — newbananaprompts.in

## September 23, 2026 update (supersedes historical findings below)

The reported rejection is **Low value content**. This pass addresses identifiable
content and navigation defects; it does not certify Google approval.

- Removed 1,465 repeated internal-link blocks from 36 articles and made the
  injection script safe to rerun without duplicating recommendations.
- Expanded or rewrote seven flagged articles with worked examples, decision
  steps, troubleshooting, limitations, and relevant official references.
- Reviewed two additional study/career guides, removing invented ATS scoring,
  fixed growth claims, and guaranteed score-improvement wording.
- Corrected the Nano Banana guide's definition against Google's documentation
  and removed unsupported reliability claims and outdated tool rankings.
- Removed claims of guaranteed virality, universal commercial-use permission,
  unlimited free-credit workarounds, and fixed-time image compression from the
  revised articles. Examples are identified as illustrative, not test results.
- Added two original composition diagrams, replacing unrelated devotional
  article covers. They are labeled as diagrams, not generated outputs.
- Prompt-copy boxes now target actual prompt sections rather than every heading
  containing the word “prompt”; copied text excludes HTML markup.
- Fixed the course return link to a real homepage destination.
- Build-time push notifications now require explicit opt-in, rather than being
  triggered merely by a Vercel deployment.

### Content checks

There are 113 stored articles, **70 public articles and 43 stored drafts**.
One additional blocked slug has no stored article, which the old counter
incorrectly subtracted from the public total. Public routes and draft status
were not changed in this revision.

The content audit has **zero high-severity findings** and zero detected exact
long-paragraph duplication between public articles. Eight 700–999-word articles
retain advisory word-count flags. They were reviewed for concrete usefulness;
no filler was added merely to reach 1,000 words. These thresholds are local
editorial heuristics, not Google requirements or proof of originality.

The seven main revisions cover SSC CGL practice, Luma/Runway reels, cyberpunk
portraits, digital-nomad thumbnails, Krishna devotional art, personal devotional
portraits, and image compression under 20KB. The additional reviews cover SBI
Clerk practice and student/job-seeker workflows.

### Validation and deployment

- Final production build, including Next.js lint and TypeScript checks: passed.
- Local production HTTP checks: all 10 revised article pages include the new
  sections and update dates; 12 supporting URLs return 200; a draft URL returns
  404; ads.txt matches the publisher record.
- Regression checks: repeated sentences are detected within a paragraph;
  consecutive internal-link injection runs do not duplicate content.
- Cleanup rerun: zero further changes; link injection was checked on a temporary
  dataset and produced identical content on consecutive runs.
- GitHub production deployment history and live response identify Vercel as the
  active host. The historical Netlify outage below is not the current status.
- Deployment and live URL checks must complete before requesting AdSense review.

Google references: [site readiness](https://support.google.com/adsense/answer/7299563?hl=en)
and [requesting another review](https://support.google.com/adsense/answer/12176698?hl=en).

## Historical audit (August 29, 2026)

Audit date: August 29, 2026  
Overall status: **RED — do not resubmit yet**

## Executive findings

1. The live Netlify site returns `503 Service Unavailable` with `{"error":"usage_exceeded"}` for the homepage, robots.txt, ads.txt, sitemap.xml, and www host. AdSense and Googlebot cannot review an unavailable site.
2. The content dataset contains 112 articles. Automated comparison found 271 repeated long-paragraph groups before remediation, including HR/payroll material copied into unrelated thumbnail and marketing articles.
3. Twenty-three demonstrably duplicated, off-topic, unsupported-rating, or very thin articles are now held for human editorial review. They remain accessible by direct URL, but are `noindex`, absent from homepage/category discovery, absent from related-post modules, and absent from the XML sitemap.
4. The remaining public corpus contains 89 articles, zero missing article images, zero detected broken `/post/` links, zero exact duplicate titles/descriptions, zero high-severity thin-content findings, and zero exact repeated long-paragraph groups under the audit rules.
5. Six public articles are 700–999 words. Word count alone is not a quality verdict, but these pages should receive a manual search-intent review before AdSense resubmission.

## Production verification

| URL | Live result | Local production result |
| --- | --- | --- |
| `/` | 503 `usage_exceeded` | 200 HTML |
| `/robots.txt` | 503 `usage_exceeded` | 200 `text/plain` |
| `/ads.txt` | 503 `usage_exceeded` | 200 `text/plain`; exact authorized record |
| `/sitemap.xml` | 503 `usage_exceeded` | 200 XML |
| `www` host | 503 `usage_exceeded` | Redirect cannot be verified locally |

The live outage is an account/hosting-usage problem, not an application response. Restore Netlify service before any AdSense resubmission.

## Issues fixed locally

- Added a repeatable content audit (`npm run audit:content`).
- Quarantined 23 evidence-backed low-quality URLs in `data/content-quality.ts` without deleting their content.
- Removed quarantined URLs, thin prompt-detail URLs, an empty Courses category archive, and the redirected `/prompt` URL from the sitemap.
- Added `noindex, follow` to quarantined article pages and short prompt-detail pages.
- Added article-level author URL schema, editorial methodology, source-verification advice, and a correction route.
- Replaced unverifiable blanket testing/review claims in About and Editorial Policy with accurate editorial language.
- Added explicit cookie choice. Analytics, AdSense, and OneSignal scripts now load only after optional consent; the AdSense account-verification meta tag remains in the HTML head.
- Removed automatic push-notification prompts after 2.5 seconds/page views. Subscription is user initiated.
- Removed obsolete, keyword-heavy meta-keywords output.
- Capped long article meta descriptions at a clean word boundary for metadata/OG/X output.
- Removed unstable `new Date()` timestamps for main sitemap hubs and derived them from actual post update dates.
- Added a visible XML sitemap link to the footer.
- Production build completed successfully: 119 routes, shared first-load JavaScript about 87.1 kB.

## Verified local status

- `next build`: PASS
- TypeScript: PASS
- `git diff --check`: PASS (line-ending notices only)
- robots rules: public content allowed; `/api/` and `/search` excluded
- search page: `noindex, nofollow`
- ads.txt source: exact single record
- AdSense publisher ID: one verification meta tag and one consent-controlled loader
- article canonicals: self-referencing
- article Open Graph/X metadata: present
- breadcrumbs and related articles: present
- 404 page: useful navigation present
- images: Next Image optimization used on core templates
- intrusive floating widget: none

## Remaining work

### Blocking

1. Restore the Netlify account/site so every public audit URL returns 200 (or an intentional redirect).
2. Deploy these local changes.
3. Re-run live checks for HTTP status, HTML robots directives, canonicals, sitemap membership, ads.txt content type, HTTPS, www redirect, and trailing-slash behavior.
4. Run mobile Lighthouse/Core Web Vitals against the restored production site. No credible live performance result can be produced while the server returns 503.

### Content review recommended

Manually review the six 700–999 word public articles reported by `npm run audit:content`. Confirm that each has a useful introduction, concrete examples, limitations, practical steps, and information beyond a generic summary.

For each quarantined URL, choose one evidence-based action:

- substantially rewrite from primary research and restore indexing;
- merge unique useful material into the strongest related page and redirect;
- keep `noindex` if it has visitor utility but insufficient search value; or
- remove/redirect if it has no unique value.

Do not simply paraphrase the duplicated paragraphs or update dates.

## Resubmission gate

Only resubmit after:

- the site has stayed publicly available without 5xx errors;
- the deployed sitemap contains only canonical, indexable 200 URLs;
- deployed quarantined pages emit `noindex`;
- live ads.txt returns the exact authorized record;
- mobile pages pass a real visual/performance review; and
- the remaining six medium-priority articles have been manually reviewed.

Google makes the final approval decision; this report does not promise approval.
