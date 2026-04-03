const sharp = require('sharp'); 
const fs = require('fs'); 
async function main() { 
  const { default: pngToIco } = await import('png-to-ico'); 
  const input = 'public/main-logo.png'; 
  const sizes = [16,32,48,180,192,512]; 
  for (const s of sizes) { 
    const out = 'public/icon-' + s + '.png'; 
    await sharp(input).resize(s, s, { fit: 'cover' }).png({ compressionLevel: 9 }).toFile(out); 
  } 
  const buf = await pngToIco(['public/icon-16.png','public/icon-32.png','public/icon-48.png']); 
  fs.writeFileSync('public/favicon.ico', buf); 
  fs.copyFileSync('public/icon-32.png','public/favicon-32x32.png'); 
  fs.copyFileSync('public/icon-180.png','public/apple-touch-icon.png'); 
  fs.copyFileSync('public/icon-192.png','public/icon-192.png'); 
  fs.copyFileSync('public/icon-512.png','public/icon-512.png'); 
} 
main().catch(function(err){ console.error(err); process.exit(1); });
