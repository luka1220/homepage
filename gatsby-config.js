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
          // You can have multiple instances of this plugin to create indexes with
          // different names or engines. For example, multi-lingual sites could create
          // an index for each language.
          {
            resolve: 'gatsby-plugin-local-search',
            options: {
              // A unique name for the search index. This should be descriptive of
              // what the index contains. This is required.
              name: 'pages',

              // Set the search engine to create the index. This is required.
              // The following engines are supported: flexsearch, lunr
              engine: 'flexsearch',

              // Provide options to the engine. This is optional and only recommended
              // for advanced users.
              //
              // Note: Only the flexsearch engine supports options.
              engineOptions: 'speed',

              // GraphQL query used to fetch all data for the search index. This is
              // required.
              query: `
                {
                  allMarkdownRemark {
                    nodes {
                      frontmatter {
                        slug
                        template
                        title
                      }
                      rawMarkdownBody
                    }
                  }
                }
              `,
              // Field used as the reference value for each document.
              // Default: 'id'.
              ref: 'slug',
              // List of keys to index. The values of the keys are taken from the
              // normalizer function below.
              // Default: all fields
              preset: 'match',
              index: ['title', 'body'],

              // List of keys to store and make available in your UI. The values of
              // the keys are taken from the normalizer function below.
              // Default: all fields
              store: ['slug','template','title'],
              // Function used to map the result from the GraphQL query. This should
              // return an array of items to index in the form of flat objects
              // containing properties to index. The objects must contain the `ref`
              // field above (default: 'id'). This is required.
              

              normalizer: ({ data }) =>
                data.allMarkdownRemark.nodes.map((node) => ({
                  slug: node.frontmatter.slug,
                  template: node.frontmatter.template,
                  title: node.frontmatter.title,
                  body: node.rawMarkdownBody,
                })),
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
