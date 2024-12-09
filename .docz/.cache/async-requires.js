// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---forfatter-mdx": () => import("./../../../../forfatter.mdx" /* webpackChunkName: "component---forfatter-mdx" */),
  "component---gallery-mdx": () => import("./../../../../gallery.mdx" /* webpackChunkName: "component---gallery-mdx" */),
  "component---index-mdx": () => import("./../../../../index.mdx" /* webpackChunkName: "component---index-mdx" */),
  "component---indlaegsindstillinger-mdx": () => import("./../../../../Indlaegsindstillinger.mdx" /* webpackChunkName: "component---indlaegsindstillinger-mdx" */),
  "component---kategori-mdx": () => import("./../../../../kategori.mdx" /* webpackChunkName: "component---kategori-mdx" */),
  "component---opret-indhold-mdx": () => import("./../../../../Opret-indhold.mdx" /* webpackChunkName: "component---opret-indhold-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---tags-mdx": () => import("./../../../../tags.mdx" /* webpackChunkName: "component---tags-mdx" */),
  "component---tatovor-mdx": () => import("./../../../../tatovor.mdx" /* webpackChunkName: "component---tatovor-mdx" */),
  "component---tilfoj-blog-indlaeg-mdx": () => import("./../../../../Tilfoj-blog-indlaeg.mdx" /* webpackChunkName: "component---tilfoj-blog-indlaeg-mdx" */),
  "component---tilfoj-tatovor-mdx": () => import("./../../../../Tilfoj-tatovor.mdx" /* webpackChunkName: "component---tilfoj-tatovor-mdx" */),
  "component---udgiv-indlaeg-mdx": () => import("./../../../../Udgiv-indlaeg.mdx" /* webpackChunkName: "component---udgiv-indlaeg-mdx" */),
  "component---udvalgt-billede-mdx": () => import("./../../../../Udvalgt-billede.mdx" /* webpackChunkName: "component---udvalgt-billede-mdx" */),
  "component---yoast-seo-mdx": () => import("./../../../../Yoast-SEO.mdx" /* webpackChunkName: "component---yoast-seo-mdx" */)
}

