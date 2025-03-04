const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/websites', changefreq: 'monthly', priority: 0.8 },
  { url: '/apps', changefreq: 'monthly', priority: 0.8 }
];

const sitemapStream = new SitemapStream({ hostname: 'https://majasociet.netlify.app/' });

streamToPromise(sitemapStream.pipe(createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'))))
  .then(() => console.log('Sitemap created successfully'))
  .catch((err) => console.error('Error creating sitemap:', err));

links.forEach(link => sitemapStream.write(link));
sitemapStream.end();
