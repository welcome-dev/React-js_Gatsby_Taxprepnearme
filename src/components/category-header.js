import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const CategoryHeader = ({ categories, currentCat }) => {
  return (
    <div className="row-full">
      <ul className="nav-category" style={{width: '100%'}}>
        {
          categories.map(function(category) {
            let path = ''
            if (category.fieldValue === 'all') {
              path = '/articles'
            } else {
              path = `/categories/${category.fieldValue.replace(/ /g, '-')}`
            }
            const label = `${category.fieldValue} (${category.totalCount})`

            return <li className="category-item" style={{marginLeft: '2rem'}} key={category.fieldValue}>
              <Link to={path} className="category-link" aria-current={category.fieldValue === currentCat ? "page" : ''}>{label}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}

CategoryHeader.propTypes = {
  categories: PropTypes.array.isRequired,
}

CategoryHeader.defaultProps = {
  categories: [],
}

export default CategoryHeader
