import matter from 'gray-matter';
import { marked } from 'marked';
import slugify from 'slugify';

const slugifyConfig = {
    remove: /[*+~.,()'"!:@]/g,
    lower: true,
    trim: true,
};

export default (markdown) => {
    const front = matter(markdown);
    const html = marked(front.content);
    const slug =
        front.data.slug !== undefined
            ? front.data.slug
            : slugify(front.data.title, slugifyConfig);

    return {
        title: front.data.title,
        categories: front.data.categories,
        slug: slug,
        content: html,
    };
};
