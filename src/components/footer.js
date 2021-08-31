/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Thanks to Gatsby and <a href="https://stackrole.com">Stackrole.com</a>,
        who made the <a href="https://github.com/stackrole/gatsby-starter-foundation">gatsby-starter-foundation</a> that is used for this <Link to="">webside</Link>.
      </p>
    </div>
  </footer>
)

export default Footer
