const fs = require("fs");

const urls = [
  { loc: "https://dtl-cv.vercel.app", changefreq: "daily", priority: 1.0 },
  {
    loc: "https://dtl-cv.vercel.app/detail/nhalinh",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    loc: "https://dtl-cv.vercel.app/detail/thanhlam",
    changefreq: "weekly",
    priority: 0.8,
  },
];

const generateSitemap = () => {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const sitemapFooter = `</urlset>`;

  const urlEntries = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("\n");

  const sitemapContent = sitemapHeader + urlEntries + `\n` + sitemapFooter;

  fs.writeFileSync("./public/sitemap.xml", sitemapContent, "utf8");
  console.log("Sitemap has been generated successfully!");
};

generateSitemap();
