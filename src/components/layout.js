/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { StickyContainer, Sticky } from "react-sticky"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              slogan
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="container">
            <Header
              siteTitle={data.site.siteMetadata.title}
              siteSlogan={data.site.siteMetadata.slogan}
            />

            <StickyContainer style={{ width: "100%" }}>
              <Sticky style={{ width: "100%" }}>
                {({
                  style,
                  // the following are also available but unused in this example
                  isSticky,
                  wasSticky,
                  distanceFromTop,
                  distanceFromBottom,
                  calculatedHeight,
                }) => (
                  <header style={style}>
                    <div className="navbar-spacer" />
                    <nav id="navbar" className="navbar">
                      <div className="container">
                        <ul className="navbar-list">
                          <li className="navbar-item">
                            <Link to="/" className="navbar-link">
                              Home
                            </Link>
                          </li>
                          <li className="navbar-item">
                            <Link to="/articles" className="navbar-link">
                              Articles
                            </Link>
                          </li>
                          <li className="navbar-item">
                            <Link to="/pricing" className="navbar-link">
                              Add Listing
                            </Link>
                          </li>
                          <li className="navbar-item">
                            <Link to="/contact" className="navbar-link">
                              Contact us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </header>
                )}
              </Sticky>

              <div className="docs-section first-section">
                <main>{children}</main>
              </div>

              <footer>
                © {new Date().getFullYear()},
                &nbsp;&nbsp;
                <Link to="/">taxprepnearme.com</Link>
                &nbsp;&nbsp;
                All rights reserved
              </footer>
            </StickyContainer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
