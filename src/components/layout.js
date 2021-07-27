import * as React from "react"
import withStyles from "react-jss"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Chart from "./Chart"
import H1 from "./H1"
import "./layout.css"

const shortcodes = {
  Chart,
  // h1: H1,
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: `0 1.0875rem 1.45rem`,
  },
  main: {
    maxWidth: 900,
  }
}

const Layout = ({ classes, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className={classes.container}>
        <MDXProvider components={shortcodes}>
          <main className={classes.main}>{children}</main>
        </MDXProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
