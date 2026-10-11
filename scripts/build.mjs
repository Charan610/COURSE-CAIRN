import {mkdir,cp,rm,readFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist/content',{recursive:true});
for(const name of ['index.html','styles.css','studio.css','app.js','account.js'])await cp(name,`dist/${name}`);
const catalog=JSON.parse(await readFile('content/catalog.json','utf8'));
for(const name of ['catalog.json',...new Set(catalog.courses.map(c=>c.curriculum))])await cp(`content/${name}`,`dist/content/${name}`);
console.log('Prepared public application in dist/ (no server files, secrets, or databases).');
