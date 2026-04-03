const fs = require('fs'); 
const posts = JSON.parse(fs.readFileSync('data/posts.json','utf8')); 
console.log(posts.map(function(p){return p.slug;}).join('\\n'));
