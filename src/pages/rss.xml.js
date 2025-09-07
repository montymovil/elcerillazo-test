import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../site.config';

export async function GET(context) {
  const posts = await getCollection('blog');
  const publishedPosts = posts.filter(post => !post.data.draft);
  
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: '/blog/' + post.slug + '/',
    })),
    customData: '<language>es-es</language>',
  });
}