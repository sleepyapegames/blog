import config from './config.js';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import createArticle from './createArticle.js';

const markdowns = readdirSync(config.articlePath)
    .map((file) => join(config.articlePath, file))
    .map((file) => readFileSync(file, 'utf-8'))
    .map(createArticle);

console.log(markdowns);
