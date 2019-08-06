import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryHeader from "../components/category-header"
import ArticleCard from "../components/article-card"

const Category = ({pageContext, data}) => {
  const categories = [{fieldValue: 'all', totalCount: pageContext.totalCount}, ...pageContext.categories]

  return (
    <Layout>
      <SEO title="Articles" />

      <CategoryHeader categories={categories} currentCat={pageContext.category} />

      <div>
        {
          data.allMarkdownRemark.edges.map(function({node}) {
            return <ArticleCard key={node.id} article={node} />
          })
        }
      </div>
    </Layout>
  )
}

Category.propTypes = {
  pageContext: PropTypes.shape({
    categories: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    totalCount: PropTypes.number.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      )
    })
  })
}

export default Category

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {category: {eq: $category}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }      
    }
  }
`
