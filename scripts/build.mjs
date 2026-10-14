import {validateSystemDesignContent} from '../lib/system-design-content.mjs';
import {mkdir,cp,rm,readFile} from 'node:fs/promises';
validateSystemDesignContent(JSON.parse(await readFile('content/system-design.json','utf8')));
await rm('dist',{recursive:true,force:true});await mkdir('dist/content',{recursive:true});
for(const name of ['index.html','assistant.js','assistant.css','workspace.js','workspace.css','system-design.js','system-design.css','system-design-models.js','opening.js','opening.css','styles.css','studio.css','app.js','account.js','visual-advanced.js','visual-difficulties.js','visual-patterns.js','visual-renderer.js','visual-engine.js','visual.js','visual.css'])await cp(name,`dist/${name}`);
const catalog=JSON.parse(await readFile('content/catalog.json','utf8'));
for(const name of ['catalog.json',...new Set(catalog.courses.map(c=>c.curriculum))])await cp(`content/${name}`,`dist/content/${name}`);
console.log('Prepared public application in dist/ (no server files, secrets, or databases).');
