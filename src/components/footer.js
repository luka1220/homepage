/** @jsx jsx */
import { jsx } from "theme-ui"
import socialIcons from "./socialIcons"
//import { Link } from "gatsby"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    {socialIcons}
    <div className="container">
      <p className="">
       Based on <a href="https://github.com/stackrole/gatsby-starter-foundation">gatsby-starter-foundation</a> by <a href="https://stackrole.com">Stackrole.com</a>.
       <span > &copy; Copyright 2021, Luka Stärk</span>
      </p>
    </div>
  </footer>
)

export default Footer
