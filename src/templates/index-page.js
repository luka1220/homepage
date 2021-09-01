/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import socialIcons from "../components/socialIcons"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        contact
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
  return (
    <Layout>
      <Seo />
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{frontmatter.title}</h1>
          <p
            className="tagline"
            sx={{
              color: "muted",
            }}
          >
            {frontmatter.tagline}
          </p>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <p 
          className="tagline" 
          sx={{
              color: "muted",
            }}
          >
          {frontmatter.contact}
          </p>
          <Link
            to={frontmatter.cta.ctaLink}
            className="button"
            sx={{
              variant: "variants.button",
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
          <div
            className="social-icons"
            sx={{
            variant: "variants.socialIcons",
            }}
            >
            {socialIcons}
          </div>
        </div>
        <div>
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <BlogListHome data={posts} />
    </Layout>
  )
}

export default HomePage
