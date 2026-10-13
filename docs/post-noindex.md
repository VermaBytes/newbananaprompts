# Per-post search visibility

Posts in `data/posts.json` support optional `"noindex": true`.
Omit the field or use `false` to retain the default indexing behavior.

For public posts, `true` sets both robots and Googlebot metadata to
`noindex, follow` and excludes the article URL from `sitemap.xml`.
The article remains accessible and keeps its self-referencing canonical.
Existing editorial-withheld posts remain unavailable; this option does not
publish them or replace the editorial gate.

No post has been assigned `noindex` yet. Review the proposed slug list first.
