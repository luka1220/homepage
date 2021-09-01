const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}
const settings = require("./src/util/site.json")

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: "lazy",
            },
          },
          {
            resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
            options: {
              // Fields to index
              fields: [`title`, `template`, `slug`],
              // How to resolve each field`s value for a supported node type
              resolvers: {
                // For any node of type MarkdownRemark, list how to resolve the fields` values
                MarkdownRemark: {
                  template: node => node.frontmatter.template,
                  title: node => node.frontmatter.title,
                  slug: node => node.frontmatter.slug,
                },
              },
              // Optional filter to limit indexed nodes
              filter: (node, getNode) => node.frontmatter.tags !== "exempt",
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicon.ico",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luka Stärk`,
        short_name: `Stärk`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "static" + settings.meta.iconimage,
      },
    },
  ],
};
