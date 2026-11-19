const sharp = require('sharp');

const diagrams = [
  ['krishna-composition-guide', 'Devotional card composition', 'A layout study for the Krishna temple tutorial', ['PILLAR', 'DEVOTIONAL FIGURE', 'PILLAR'], 'Add the greeting in an editor after generating the artwork.'],
  ['personal-devotional-composition', 'Personal devotional portrait', 'Separate your reference portrait from the imagined setting', ['YOUR PORTRAIT', 'CLEAR SPACE', 'SHRINE'], 'Check facial resemblance, then add your greeting and AI-art caption.']
];

async function run() {
  for (const [name, title, subtitle, labels, note] of diagrams) {
    const boxes = labels.map((label, i) => {
      const x = [120, 440, 800][i];
      const width = i === 1 ? 320 : 280;
      return `<rect x="${x}" y="315" width="${width}" height="165" rx="10" fill="${i === 1 ? '#b78942' : '#32626a'}"/><text x="${x + width / 2}" y="409" text-anchor="middle" fill="white" font-family="Arial" font-size="21">${label}</text>`;
    }).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <rect width="1200" height="630" fill="#102a36"/>
      <text x="64" y="64" fill="#6de1cc" font-family="Arial" font-size="19" letter-spacing="3">NB PROMPTS / COMPOSITION STUDY</text>
      <text x="64" y="125" fill="white" font-family="Arial" font-size="42" font-weight="bold">${title}</text>
      <text x="64" y="165" fill="#c4d6dd" font-family="Arial" font-size="24">${subtitle}</text>
      <rect x="64" y="205" width="1072" height="310" rx="20" fill="#193c48" stroke="#56838b"/>
      <rect x="100" y="230" width="1000" height="58" rx="8" fill="#254f59"/>
      <text x="600" y="268" text-anchor="middle" fill="#d9ebe9" font-family="Arial" font-size="22">GREETING SPACE / KEEP CLEAR</text>
      ${boxes}
      <text x="64" y="569" fill="#d9ebe9" font-family="Arial" font-size="22">${note}</text>
      <text x="64" y="605" fill="#8fb0bc" font-family="Arial" font-size="17">Editorial diagram. Not a generated image result or tool screenshot.</text>
    </svg>`;
    await sharp(Buffer.from(svg)).png().toFile(`public/posts/${name}.png`);
  }
}
run().catch(error => { console.error(error); process.exitCode = 1; });
