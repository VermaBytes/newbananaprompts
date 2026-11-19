// Shared by the article renderer and build audit so they count the same prompts.
export function getPromptReferences(sections) {
  const references = [];
  const strip = (text) => text.replace(/<[^>]*>/g, " ").trim();
  sections.forEach((section, sectionIndex) => {
    const heading = strip(section.heading);
    const numberedHeading = heading.match(/^prompt\s+(\d+)\b/i);
    if (numberedHeading) {
      references.push({ sectionIndex, promptNumber: Number(numberedHeading[1]) });
      return;
    }
    const numberedParagraphs = section.paragraphs.flatMap((paragraph) => {
      const match = strip(paragraph).match(/^prompt\s+(\d+)\b/i);
      return match ? [{ sectionIndex, promptNumber: Number(match[1]) }] : [];
    });
    if (numberedParagraphs.length) references.push(...numberedParagraphs);
    else if (/\bcopy-ready\b|^example prompt\b/i.test(heading)) {
      references.push({ sectionIndex, promptNumber: null });
    }
  });
  const used = new Set(references.map((item) => item.promptNumber));
  let next = 1;
  return references.map((item) => {
    if (item.promptNumber !== null) return item;
    while (used.has(next)) next++;
    used.add(next);
    return { ...item, promptNumber: next++ };
  });
}

export function isCompleteOutputExample(example) {
  return Boolean(example && Number.isInteger(example.promptNumber) && example.promptNumber > 0 &&
    [example.image, example.alt, example.tool, example.version, example.caption]
      .every((value) => typeof value === "string" && value.trim().length > 0) &&
    /^\/outputs\/[^?#]+\.(png|jpe?g|webp|avif)$/i.test(example.image) &&
    !example.image.split("/").some((part) => part === ".." || part === ".") &&
    !example.image.includes("\\"));
}
