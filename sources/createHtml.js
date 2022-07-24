import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { Liquid } from 'liquidjs';
import { dirname, join } from 'path';

import config from './config.js';

const engine = new Liquid({
    layouts: config.templatePath,
    extname: config.templateExtension,
});

export default (article) => {
    const outputFile = join(config.outputPath, `${article.slug}.html`);

    if (!existsSync(dirname(outputFile))) mkdirSync(dirname(outputFile));

    engine.renderFile('templates/article', article).then((html) => {
        writeFileSync(outputFile, html);
    });
};
