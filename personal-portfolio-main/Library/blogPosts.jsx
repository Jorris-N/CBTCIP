import { createClient } from "contentful";

const client = createClient ({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: 'master'
});

export default client;

export async function getArticles () {
    const entries = await client.getEntries({content_type: 'techBlog', order: '-sys.createdAt', });
    return entries.items;
}

export async function getArticleBySlug (slug) {
    const entry = await client.getEntries ({
        content_type: 'techBlog',
        'fields.slug': slug,
    })

    return entry.items[0];
}