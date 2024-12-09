const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---forfatter-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/forfatter.mdx"))),
  "component---gallery-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/gallery.mdx"))),
  "component---index-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/index.mdx"))),
  "component---indlaegsindstillinger-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/Indlaegsindstillinger.mdx"))),
  "component---kategori-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/kategori.mdx"))),
  "component---opret-indhold-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/Opret-indhold.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/.docz/src/pages/404.js"))),
  "component---tags-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/tags.mdx"))),
  "component---tatovor-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/tatovor.mdx"))),
  "component---tilfoj-blog-indlaeg-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/Tilfoj-blog-indlaeg.mdx"))),
  "component---tilfoj-tatovor-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/Tilfoj-tatovor.mdx"))),
  "component---udgiv-indlaeg-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/Udgiv-indlaeg.mdx"))),
  "component---udvalgt-billede-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/Udvalgt-billede.mdx"))),
  "component---yoast-seo-mdx": hot(preferDefault(require("/home/mr/repos/kaijutattooclub-wordpress/Yoast-SEO.mdx")))
}

