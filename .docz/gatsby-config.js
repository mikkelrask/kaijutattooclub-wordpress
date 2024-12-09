const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Kaiju Seo Club',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/mr/repos/kaijutattooclub-wordpress/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Kaiju Seo Club',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/mr/repos/kaijutattooclub-wordpress',
          templates:
            '/home/mr/repos/kaijutattooclub-wordpress/node_modules/docz-core/dist/templates',
          docz: '/home/mr/repos/kaijutattooclub-wordpress/.docz',
          cache: '/home/mr/repos/kaijutattooclub-wordpress/.docz/.cache',
          app: '/home/mr/repos/kaijutattooclub-wordpress/.docz/app',
          appPackageJson:
            '/home/mr/repos/kaijutattooclub-wordpress/package.json',
          appTsConfig: '/home/mr/repos/kaijutattooclub-wordpress/tsconfig.json',
          gatsbyConfig:
            '/home/mr/repos/kaijutattooclub-wordpress/gatsby-config.js',
          gatsbyBrowser:
            '/home/mr/repos/kaijutattooclub-wordpress/gatsby-browser.js',
          gatsbyNode: '/home/mr/repos/kaijutattooclub-wordpress/gatsby-node.js',
          gatsbySSR: '/home/mr/repos/kaijutattooclub-wordpress/gatsby-ssr.js',
          importsJs:
            '/home/mr/repos/kaijutattooclub-wordpress/.docz/app/imports.js',
          rootJs: '/home/mr/repos/kaijutattooclub-wordpress/.docz/app/root.jsx',
          indexJs:
            '/home/mr/repos/kaijutattooclub-wordpress/.docz/app/index.jsx',
          indexHtml:
            '/home/mr/repos/kaijutattooclub-wordpress/.docz/app/index.html',
          db: '/home/mr/repos/kaijutattooclub-wordpress/.docz/app/db.json',
        },
        theme: 'docz-theme-ztopia',
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
