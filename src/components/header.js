import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSlogan }) => (
  <section className="header">
    <h3 className="title">{siteTitle}</h3>
    <h5>
      <i>{siteSlogan}</i>
    </h5>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSlogan: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSlogan: ``,
}

export default Header
