import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { Liquid } from 'liquidjs';
import { dirname, join } from 'path';

import config from './config.js';

const engine = new Liquid({
    layouts: config.templatePath,
    extname: config.templateExtension,
});

export default (article) => {
    const outputFile = join(
        config.outputPath,
        'post',
        article.slug,
        'index.html'
    );
    const outputDir = dirname(outputFile);

    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

    engine.renderFile('templates/article', article).then((html) => {
        writeFileSync(outputFile, html);
    });
};
