/** @jsx jsx */
import { jsx } from "theme-ui"
//import { Link } from "gatsby"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p className="small">
        Based on <a href="https://github.com/stackrole/gatsby-starter-foundation">gatsby-starter-foundation</a> by <a href="https://stackrole.com">Stackrole.com</a>.
      </p>
    </div>
  </footer>
)

export default Footer
