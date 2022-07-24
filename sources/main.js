import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import config from './config.js';
import createArticle from './createArticle.js';
import createHtml from './createHtml.js';

readdirSync(config.articlePath)
    .map((file) => join(config.articlePath, file))
    .map((file) => readFileSync(file, 'utf-8'))
    .map(createArticle)
    .forEach(createHtml);
