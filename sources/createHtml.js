import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

import config from './config.js';

export default (article) => {
    const outputFile = join(config.outputPath, `${article.slug}.html`);

    if (!existsSync(dirname(outputFile))) mkdirSync(dirname(outputFile));

    writeFileSync(outputFile, article.content);
};
