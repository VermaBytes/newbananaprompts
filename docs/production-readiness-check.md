# Production verification

`npm run build` completed successfully. Compilation, build-integrated linting,
and TypeScript checks passed. Notifications were explicitly disabled for this run.

The production HTTP audit checked 96 responses: all 92 sitemap URLs, search,
and three unknown-route cases. No audit failures remain. Details are stored in
`production-seo-check.json`.

Verified against served HTML:

- One H1, one title, one meta description, and one absolute canonical per page.
- Unique titles/descriptions across successful public page responses.
- No noindex page in the sitemap; all entries have parseable stored lastmod.
- Article dates match sitemap dates; Article/BreadcrumbList JSON-LD parses and
  passes local structural/property checks. This is not a Google rich-result certification.
- Real HTTP 404 and the custom page for unknown posts/categories and other routes.
- All rendered images use lazy loading and explicit width/height.
- robots.txt and ads.txt respond successfully, with named Google crawler rules
  and an ads.txt placeholder comment alongside the existing publisher record.

Page dates in `data/page-dates.json` were recorded from Git history, not the
clock or build timestamp. Maintain them after meaningful editorial changes.
Posts continue to use their own stored publication/update dates.

The build refreshes actual image dimensions and the lightweight public-post
manifest used to reject unavailable article routes before streaming begins.

Warnings remaining:

- Thirteen AI Prompts posts lack documented real output images. Placeholders
  remain and the output audit warns without blocking compilation.
- Browserslist/caniuse-lite reports outdated browser-support data.

Mobile layout protection uses fixed aspect-ratio image frames, intrinsic image
dimensions, system fonts (no downloaded font swap), a pre-hydration theme
initializer, and consent-gated optional scripts deferred until page load.
Third-party ads can still insert content; actual CLS with consent and live ads
has not been measured. A zero-CLS guarantee would be unsupported.

To repeat the HTTP audit, start the production server on port 3016 and run
`npm run audit:seo`. Set `SEO_BASE_URL` to use another local server address.
