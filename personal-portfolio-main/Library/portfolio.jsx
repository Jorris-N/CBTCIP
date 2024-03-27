import { createClient } from "contentful";

const client = createClient ({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: 'master'
});

export default client;

export async function getPortfolio () {
    const entries = await client.getEntries({content_type: 'portfolioListings', order: 'sys.createdAt', });
    return entries.items;
}
