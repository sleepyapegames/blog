import matter from 'gray-matter';
import { marked } from 'marked';

export default (markdown) => {
    const front = matter(markdown);
    const html = marked(front.content);

    return {
        title: front.data.title,
        categories: front.data.categories,
        content: html,
    };
};
